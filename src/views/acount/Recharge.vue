<template>
  <div class="acount">
    <!-- 标题一 -->
    <Row class="title">
      <Col span="12"><span>账户信息</span></Col>
      <Col span="12" class="right">
        <Button type="info" class="button" @click="handleRecharge"
          >立即充值</Button
        >
      </Col>
    </Row>

    <!--  时间 搜索 -->
    <div class="search table" style="margin-bottom: 30px">
      <ul>
        <li>日</li>
        <li>周</li>
        <li>月</li>
        <li>季</li>
        <li>半年</li>
        <li>年</li>
      </ul>
      <div class="right">
        <span
          :class="timeIdx == 0 ? 'activeColor' : ''"
          @click="handleSelectTime(0, 0)"
          >今天</span
        >
        <span
          :class="timeIdx == 1 ? 'activeColor' : ''"
          @click="handleSelectTime(1, 6)"
          >最近7天</span
        >
        <div>
          <span
            :class="timeIdx == 2 ? 'activeColor' : ''"
            @click="handleSelectTime(2, 29)"
            >最近30天</span
          >
          <DatePicker
            type="datetimerange"
            format="yyyy-MM-dd HH:mm:ss"
            style="width: 300px"
            @on-change="handleChange"
            @on-ok="handleOk"
            @on-clear="handleClear"
          ></DatePicker>
        </div>
        <Button type="info" ghost class="button">导出报表</Button>
      </div>
    </div>

    <div class="content">
      <div>
        <span class="num">${{ countNum.balance || 0 }}</span>
        <span class="title">当前账户余额</span>
      </div>
      <div>
        <span class="num">${{ countNum.recharge_last_money || 0 }}</span>
        <span class="title">最近一次充值金额</span>
      </div>
      <div>
        <span class="num">{{ countNum.recharge_last_time || "未知" }}</span>
        <span class="title">最近一次充值日期</span>
      </div>
    </div>

    <!-- 搜索 -->
    <div class="search">
      <div>
        <span>充值订单号</span>
        <Input v-model="form.id" size="large" clearable class="width" />
      </div>
      <div>
        <Button
          type="info"
          ghost
          class="button"
          @click="handleReset"
          size="large"
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
        <span class="left">充值记录</span>
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
import { rechargeLogList, rechargeLogTotal } from "../../api/acount";
import { getTodayDate, getSevenDate } from "../../common/function";
export default {
  name: "Recharge",
  data() {
    return {
      form: {},
      columns: [
        {
          title: "充值订单号",
          key: "id",
          align: "center",
        },
        {
          title: "充值金额",
          key: "rechargeTotal",
          align: "center",
        },
        {
          title: "账户余额",
          key: "balance",
          align: "center",
        },
        {
          title: "累计充值总额",
          key: "sumTotal",
          align: "center",
        },
        {
          title: "充值方式",
          key: "rechargeType",
          align: "center",
        },
        {
          title: "充值状态",
          key: "status",
          align: "center",
        },
        {
          title: "充值日期",
          key: "rechargeDate",
          align: "center",
        },
        {
          title: "充值备注说明",
          key: "remark",
          align: "center",
        },
      ],
      data: [],
      pageNo: 1, //页数
      pageSize: 10, //条数
      total: 0, //总条数
      countNum: {}, //统计数据
      timeIdx: 0, // 默认时间选中
      dateTime: [],
    };
  },
  created() {
    this.initData();
    this.getCountNum();
    console.log(getTodayDate(), getSevenDate(30));
  },
  methods: {
    // 时间组件搜索
    handleChange(ev) {
      console.log(ev);
      this.dateTime = ev;
    },
    handleOk() {
      this.form.start = this.dateTime[0];
      this.form.end = this.dateTime[1];
      this.initData();
    },
    handleClear() {
      delete this.form.start;
      delete this.form.end;
      this.initData();
    },
    // 时间搜索
    handleSelectTime(ev, num) {
      if (this.timeIdx == ev) return;
      this.timeIdx = ev;
      if (ev != 0) {
        this.form.start = getSevenDate(num);
        this.form.end = getTodayDate();
      } else {
        delete this.form.start;
        delete this.form.end;
      }
      this.initData();
    },
    // 统计数据
    getCountNum() {
      this.$httpRequest({
        api: rechargeLogTotal,
        data: {},
        success: (res) => {
          console.log(res);
          this.countNum = res.result;
        },
      });
    },
    // 初始化数据
    initData() {
      let data = { pageNo: this.pageNo, pageSize: this.pageSize, ...this.form };
      this.$httpRequest({
        api: rechargeLogList,
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
        id: "",
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
    div {
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
        font-size: 15px;
        font-weight: 600;
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
        width: 195px;
      }
      .button:last-child {
        margin-left: 20px;
      }
    }
    > ul {
      display: flex;
      border: 1px solid #e0e0e0;
      list-style: none;
      border-radius: 5px;
      li {
        width: 60px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        font-size: 14px;
        box-sizing: border-box;
        border-right: 1px solid #e0e0e0;
        font-weight: bold;
        color: #999;
      }
      li:last-child {
        border: 0;
      }
    }
    .right {
      display: flex;
      align-items: center;
      margin-left: 20px;
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
}

.activeColor {
  color: #089444 !important;
  font-weight: bolder !important;
}
</style>
