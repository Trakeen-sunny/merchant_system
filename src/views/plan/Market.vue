<template>
  <div class="acount">
    <!-- 标题一 -->
    <div class="content">
      <div>
        <span class="num">{{ pendingnum }}</span>
        <span class="title">进行中计划</span>
      </div>
      <div>
        <span class="num">{{ endingnum }}</span>
        <span class="title">已结束计划</span>
      </div>
    </div>

    <!-- 搜索 -->
    <div class="search">
      <div>
        <span>计划ID</span>
        <Input v-model="form.id" size="large" clearable class="width" />
      </div>
      <div>
        <span>商品名称</span>
        <Input v-model="form.goodName" size="large" clearable class="width" />
      </div>
      <div>
        <span>计划状态</span>
        <Select v-model="form.status" size="large" clearable class="width">
          <Option value="">全部</Option>
          <Option :value="0">进行中</Option>
          <Option :value="1">已结束</Option>
        </Select>
      </div>
      <div>
        <Button
          type="info"
          ghost
          class="button"
          size="large"
          @click="handleReset"
          >重置</Button
        >
        <Button type="info" class="button" size="large" @click="handleSearch"
          >查询</Button
        >
      </div>
    </div>

    <!-- 表格 -->
    <div class="table">
      <div class="title">
        <span class="left">营销计划明细</span>
        <div class="right">
          <span>最近3个月</span>
          <span>最近6个月</span>
          <div>
            <span>去年</span>
            <DatePicker
              type="datetimerange"
              format="yyyy-MM-dd"
              style="width: 200px"
            ></DatePicker>
          </div>
          <Button type="info" ghost class="button">导出</Button>
        </div>
      </div>
      <Table :columns="columns" :data="data">
        <template slot-scope="{ row }" slot="status">
          <span v-if="row.status == 0" style="color: blue">进行中</span>
          <span v-else style="color: red">已结束</span>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <Button type="info" @click="details(row, index)">查看</Button>
        </template>
      </Table>
      <Page
        :total="total"
        :current="pageNo"
        :page-size="pageSize"
        @on-change="changePage"
        @on-page-size-change="changeSize"
        show-sizer
        class="page"
      />
    </div>

    <!-- 详情 -->
    <Modal title="查看明细" v-model="modal" width="600">
      <div class="content_detail">
        <div class="li">
          <img src="../../assets/img.jpg" />
          <div class="detail">
            <div>红人昵称：<span>111</span></div>
            <div>商品链接：<span>111</span></div>
            <div>优惠券链接：<span>111</span></div>
            <div>
              付款订单数：<span>{{ detail.payCount }}</span>
            </div>
            <div>订单销售额：<span>111</span></div>
          </div>
          <Button type="text" class="copy">复制链接</Button>
        </div>
      </div>
      <div slot="footer">
        <Button type="primary" size="large" ghost>取消</Button>
        <Button type="primary" size="large">复制</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
import { plansList } from "../../api/plan";
export default {
  name: "Market",
  data() {
    return {
      modal: false,
      form: {
        id: "",
        status: "",
        goodName: "",
      },
      value: "",
      model1: "",
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center",
        },
        {
          title: "计划ID",
          key: "id",
          align: "center",
        },
        {
          title: "商品名称",
          key: "goodName",
          align: "center",
        },
        {
          title: "计划状态",
          slot: "status",
          align: "center",
        },
        {
          title: "佣金比例(%)",
          key: "commission",
          align: "center",
        },
        {
          title: "付款订单数",
          key: "payCount",
          align: "center",
        },
        {
          title: "累计佣金($)",
          key: "commissionTotal",
          align: "center",
        },
        {
          title: "创建时间",
          key: "createTime",
          align: "center",
          width: 150,
        },
        {
          title: "操作",
          slot: "action",
          align: "center",
        },
      ],
      data: [],
      pageNo: 1, //页数
      pageSize: 10, //条数
      total: 0, //总条数
      detail: {}, //详情
      pendingnum: 0, //进行中计划数
      endingnum: 0, //已结束计划数
    };
  },
  created() {
    this.initData();
    this.pendingNum();
    this.endingNum();
  },
  methods: {
    // 初始化数据
    initData() {
      let data = { pageNo: this.pageNo, pageSize: this.pageSize, ...this.form };
      this.$httpRequest({
        api: plansList,
        data,
        success: (res) => {
          console.log(res);
          this.data = res.result.records;
          this.total = res.result.total;
        },
      });
    },
    // 进行中计划数
    pendingNum() {
      let data = { pageNo: 1, pageSize: 999999999, status: 0 };
      this.$httpRequest({
        api: plansList,
        data,
        success: (res) => {
          this.pendingnum = res.result.records.length;
        },
      });
    },
    // 已结束计划数
    endingNum() {
      let data = { pageNo: 1, pageSize: 999999999, status: 1 };
      this.$httpRequest({
        api: plansList,
        data,
        success: (res) => {
          this.endingnum = res.result.records.length;
        },
      });
    },
    // 查看详情
    details(row) {
      console.log(row);
      this.detail = row;
      this.modal = true;
    },
    // 改变页数
    changePage(page) {
      console.log(page);
      this.pageNo = page;
      this.initData();
    },
    // 改变条数
    changeSize(size) {
      console.log(size);
      this.pageSiz = size;
      this.initData();
    },
    // 搜索
    handleSearch() {
      this.initData();
    },
    //重置
    handleReset() {
      (this.form = {
        id: "",
        status: "",
        goodName: "",
      }),
        this.initData();
    },
  },
};
</script>
<style lang="less" scoped>
.acount {
  .content {
    margin-bottom: 30px;
    background-color: #ffffff;
    display: flex;
    > div {
      padding: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      width: calc(100% / 2);
      .num {
        color: #089444;
        font-size: 18px;
        font-weight: 600;
      }
      .title {
        display: flex;
        align-items: center;
        font-size: 15px;
        font-weight: 600;
        /deep/ .ivu-poptip {
          padding: 0;
          margin: 0;
        }
      }
    }
    div::after {
      content: "";
      border: 0.5px solid #ebeef5;
      display: inline-block;
      height: 50px;
      position: absolute;
      right: 0;
    }
    div:last-child::after {
      content: "";
      border: 0;
    }
  }

  .search {
    background-color: #ffffff;
    border-radius: 4px;
    display: flex;
    padding: 20px 20px;
    > div {
      display: flex;
      align-items: center;
      margin-right: 20px;
      span {
        margin-right: 10px;
        font-weight: 500;
        font-size: 14px;
      }
      .width {
        width: 200px;
      }
      .button:last-child {
        margin-left: 20px;
      }
    }
  }

  .table {
    background-color: #ffffff;
    margin-top: 30px;
    border-radius: 4px;
    .title {
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        font-weight: 600;
        font-size: 16px;
      }
      .right {
        display: flex;
        align-items: center;
        > span {
          color: #666;
          font-size: 15px;
          font-weight: 500;
          margin-right: 20px;
        }
        > div {
          color: #666;
          font-size: 15px;
          font-weight: 500;
          display: flex;
          align-items: center;
          span {
            margin-right: 10px;
          }
          margin-right: 20px;
        }
        .button {
          font-weight: 600;
          font-size: 14px;
        }
      }
    }
    .page {
      text-align: right;
      margin-top: 30px;
      padding-bottom: 30px;
    }
  }
}

// 弹窗
.content_detail {
  .li {
    display: flex;
    background: #f3f3f3;
    padding: 10px;
    margin-bottom: 10px;
    img {
      width: 60px;
      height: 60px;
      border-radius: 100%;
      align-self: flex-start;
    }
    .detail {
      flex: 1;
      margin: 0 10px;
      div {
        font-size: 14px;
        color: #999;
        font-weight: bold;
        span {
          color: #333;
        }
      }
    }
    .copy {
      align-self: flex-start;
      color: #45b1b1;
      font-weight: bold;
    }
  }
}
</style>
