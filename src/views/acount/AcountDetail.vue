<template>
  <div class="acount">
    <!-- 标题一 -->
    <Row class="title">
      <Col span="12"
        ><span>{{ $t("acount.title") }}</span></Col
      >
      <Col span="12" class="right">
        <Button type="info" class="button" @click="handleRecharge">{{
          $t("acount.recharge")
        }}</Button>
      </Col>
    </Row>

    <div class="content">
      <div>
        <span class="num">$0</span>
        <span class="title">{{ $t("acount.moneyLi1") }}</span>
      </div>
      <div>
        <span class="num">$0</span>
        <span class="title">{{ $t("acount.moneyLi2") }}</span>
      </div>
      <div>
        <span class="num">$0</span>
        <span class="title"
          ><span>{{ $t("acount.moneyLi3") }}</span>
          <Poptip
            word-wrap
            width="200"
            placement="bottom"
            :content="$t('acount.tip')"
          >
            <Icon type="md-list-box" color="#999" />
          </Poptip>
        </span>
      </div>
    </div>

    <!-- 搜索 -->
    <div class="search">
      <div>
        <span>{{ $t("acount.table.name1") }}</span>
        <Input v-model="form.waterNo" size="large" clearable class="width" />
      </div>
      <div>
        <span>{{ $t("acount.table.name2") }}</span>
        <Input v-model="form.taskNo" size="large" clearable class="width" />
      </div>
      <div>
        <span>{{ $t("acount.searchName3") }}</span>
        <Select v-model="form.tranType" size="large" clearable class="width">
          <Option :value="1">订单成交</Option>
          <Option :value="2">订单退款</Option>
          <Option :value="3">佣金支出</Option>
          <Option :value="4">佣金返还</Option>
        </Select>
      </div>
      <div>
        <Button
          type="info"
          ghost
          class="button"
          @click="handleReset"
          size="large"
          >{{ $t("common.reset") }}</Button
        >
        <Button type="info" class="button" size="large" @click="handleSearch">{{
          $t("common.search")
        }}</Button>
      </div>
    </div>

    <!-- 表格 -->
    <div class="table">
      <div class="title">
        <span class="left">{{ $t("acount.title1") }}</span>
        <div class="right">
          <span>{{ $t("common.searchTime1") }}</span>
          <span>{{ $t("common.searchTime2") }}</span>
          <div>
            <span>{{ $t("common.searchTime3") }}</span>
            <DatePicker
              type="datetimerange"
              format="yyyy-MM-dd"
              style="width: 200px"
            ></DatePicker>
          </div>
          <Button type="info" ghost class="button">{{
            $t("common.exportPage")
          }}</Button>
        </div>
      </div>
      <Table :columns="columns" :data="data"></Table>
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
  </div>
</template>
<script>
import { acountList } from "../../api/acount";
export default {
  name: "AcountDetail",
  data() {
    return {
      value: "",
      model1: "",
      form: {
        waterNo: "",
        taskNo: "",
        tranType: "",
      },
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center",
        },
        {
          title: this.$t("acount.table.name1"),
          key: "waterNo",
          align: "center",
        },
        {
          title: this.$t("acount.table.name2"),
          key: "taskNo",
          align: "center",
        },
        {
          title: this.$t("acount.table.name3"),
          key: "tranTotal",
          align: "center",
        },
        {
          title: this.$t("acount.table.name4"),
          key: "accountTotal",
          align: "center",
        },
        {
          title: this.$t("acount.table.name5"),
          key: "tranType",
          align: "center",
        },
        {
          title: this.$t("acount.table.name6"),
          key: "tranTime",
          align: "center",
        },
      ],
      data: [],
      pageNo: 1, //页数
      pageSize: 10, //条数
      total: 0, //总条数
    };
  },
  created() {
    this.initData();
  },
  methods: {
    // 初始化数据
    initData() {
      let data = { pageNo: this.pageNo, pageSize: this.pageSize, ...this.form };
      this.$httpRequest({
        api: acountList,
        data,
        success: (res) => {
          console.log(res);
          this.data = res.result.records;
          this.total = res.result.total;
        },
      });
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
      this.form = {
        taskNo: "",
        tranType: "",
      };
      this.initData();
    },
    handleRecharge() {
      this.$Notice.warning({
        title: "通知",
        desc: "目前暂时不支持线上银行转账充值，如有需要，请联系平台客服线下操作",
      });
    },
  },
};
</script>
<style lang="less" scoped>
.acount {
  > .title {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    span {
      font-weight: 600;
      display: flex;
      align-items: center;
    }
    span::before {
      content: "";
      display: inline-block;
      width: 3px;
      height: 16px;
      background-color: #419191;
      font-size: 18px;
      margin-right: 8px;
    }
    .right {
      text-align: right;
      .button {
        font-weight: 600;
        font-size: 14px;
      }
    }
  }

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
      width: calc(100% / 3);
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
</style>
