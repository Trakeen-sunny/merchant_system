<template>
  <div class="acount">
    <!-- 标题一 -->
    <Row class="title">
      <Col span="12"><span>推广者数据分析</span></Col>
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
      </div>
    </div>

    <!-- 图表 -->
    <div class="echart">
      <div id="myChart" :style="{ width: '100%', height: '250px' }"></div>
    </div>

    <!-- 表格 -->
    <div class="table">
      <div class="title">
        <span class="left">推广者排行榜top10</span>
      </div>
      <Table :columns="columns" :data="data"></Table>
    </div>
  </div>
</template>
<script>
import { rechargeLogList } from "../../api/acount";
import { getTodayDate, getSevenDate } from "../../common/function";
export default {
  name: "Promoter",
  data() {
    return {
      form: {},
      columns: [
        {
          title: "排行榜",
          key: "id",
          align: "center",
        },
        {
          title: "推广者账户",
          key: "rechargeTotal",
          align: "center",
        },
        {
          title: "销售总额($)",
          key: "balance",
          align: "center",
        },
        {
          title: "订单数",
          key: "sumTotal",
          align: "center",
        },
      ],
      data: [],
      timeIdx: 0, // 默认时间选中
      dateTime: [],
      myChart: null,
    };
  },
  created() {
    this.initData();
  },
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("myChart"));
    this.initEchart();
  },
  methods: {
    // 初始化组件
    initEchart() {
      const option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        grid: {
          left: "5%",
          right: "2%",
          bottom: "10%",
          top:'3%'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },
          {
            data: [10, 20, 15, 80, 70, 10, 30],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },
        ],
      };
      this.myChart.setOption(option);
    },
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
    // 初始化数据
    initData() {
      let data = { pageNo: this.pageNo, pageSize: this.pageSize, ...this.form };
      this.$httpRequest({
        api: rechargeLogList,
        data,
        success: (res) => {
          console.log(res);
          //   this.data = res.result.records;
        },
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

  .echart {
    padding: 20px 0;
    background: #ffffff;
  }
}

.activeColor {
  color: #089444 !important;
  font-weight: bolder !important;
}
</style>
