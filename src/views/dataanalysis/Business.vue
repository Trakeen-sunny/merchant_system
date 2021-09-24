<template>
  <div class="acount">
    <!-- 标题一 -->
    <Row class="title">
      <Col span="12"><span>商家数据分析</span></Col>
    </Row>

    <!--  时间 搜索 -->
    <!-- <div class="search table" style="margin-bottom: 30px">
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
    </div> -->

    <!-- 图表 -->
    <div class="echart">
      <div class="left">
        <ul class="tabbar">
          <li
            :class="rateType == 'day' ? 'active' : ''"
            @click="handleDate('day')"
          >
            今日
          </li>
          <li
            :class="rateType == 'week' ? 'active' : ''"
            @click="handleDate('week')"
          >
            本周
          </li>
          <li
            :class="rateType == 'month' ? 'active' : ''"
            @click="handleDate('month')"
          >
            本月
          </li>
          <li
            :class="rateType == 'season' ? 'active' : ''"
            @click="handleDate('season')"
          >
            本季
          </li>
          <!-- <li :class="rateType=='month'?'active':''" @click="handleDate('month')">本半年</li> -->
          <li
            :class="rateType == 'year' ? 'active' : ''"
            @click="handleDate('year')"
          >
            本年
          </li>
        </ul>
        <ul class="data">
          <li>
            <span class="title">新增商家</span>
            <div class="content">
              <span></span>
              <div>
                <span>{{ rateInfo.storeSumNum || 0 }}</span>
                <span
                  >同比昨天增长<i>+{{ rateInfo.storeSumRate || 0 }}%</i></span
                >
              </div>
            </div>
          </li>
          <li>
            <span class="title">充值商家</span>
            <div class="content">
              <span></span>
              <div>
                <span>{{ rateInfo.rechargeStoreSumNum || 0 }}</span>
                <span
                  >同比昨天增长<i>+{{ rateInfo.rechargeRate || 0 }}%</i></span
                >
              </div>
            </div>
          </li>
          <li>
            <span class="title">活跃商家</span>
            <div class="content">
              <span></span>
              <div>
                <span>{{ rateInfo.activeStoreSumNum || 0 }}</span>
                <span
                  >同比昨天增长<i>+{{ rateInfo.activeRate || 0 }}%</i></span
                >
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="right">
        <ul class="top">
          <li>
            <i-circle
              :percent="dataInfo.storeSum"
              stroke-color="#eaeef2"
              style="width: 85%"
            >
              <h2>{{ dataInfo.storeSum }}</h2>
              <span style="font-size: 13px; color: #999">商家总数</span>
            </i-circle>
          </li>
          <li>
            <i-circle
              :percent="dataInfo.balanceWarn"
              stroke-color="#e2ef3e"
              style="width: 85%"
            >
              <h2>{{ dataInfo.balanceWarn }}%</h2>
              <span style="font-size: 13px; color: #999">余额预警商家总数</span>
            </i-circle>
          </li>
          <li>
            <i-circle
              :percent="dataInfo.balanceLow"
              stroke-color="#ec4ae5"
              style="width: 85%"
            >
              <h2>{{ dataInfo.balanceLow }}%</h2>
              <span style="font-size: 13px; color: #999">余额不足商家总数</span>
            </i-circle>
          </li>
          <li>
            <i-circle
              :percent="dataInfo.rechargeStoreSum"
              stroke-color="#417cef"
              style="width: 85%"
            >
              <h2>{{ dataInfo.rechargeStoreSum }}%</h2>
              <span style="font-size: 13px; color: #999">充值商家总数</span>
            </i-circle>
          </li>
          <li>
            <i-circle
              :percent="dataInfo.activeStoreSum"
              stroke-color="#32a6ec"
              style="width: 85%"
            >
              <h2>{{ dataInfo.activeStoreSum }}%</h2>
              <span style="font-size: 13px; color: #999">活跃商家总数</span>
            </i-circle>
          </li>
          <li>
            <i-circle
              :percent="dataInfo.incomeStoreSum"
              stroke-color="#53e825"
              style="width: 85%"
            >
              <h2>{{ dataInfo.incomeStoreSum }}%</h2>
              <span style="font-size: 13px">有收入商家总数</span>
            </i-circle>
          </li>
        </ul>
        <div class="bottom">
          <ul>
            <li
              :class="chartType == 0 ? 'active' : ''"
              @click="handleChartType(0)"
            >
              商家数
            </li>
            <li
              :class="chartType == 1 ? 'active' : ''"
              @click="handleChartType(1)"
            >
              销售额
            </li>
            <li
              :class="chartType == 2 ? 'active' : ''"
              @click="handleChartType(2)"
            >
              充值金额
            </li>
            <li
              :class="chartType == 3 ? 'active' : ''"
              @click="handleChartType(3)"
            >
              佣金收入
            </li>
          </ul>
          <div
            id="myChart"
            :style="{ width: '100%', minHeight: '190px' }"
          ></div>
        </div>
      </div>
    </div>

    <!-- 表格 -->
    <div class="table">
      <div class="title">
        <span class="left">商家排行榜top10</span>
      </div>
      <Table :columns="columns" :data="data"></Table>
    </div>
  </div>
</template>
<script>
import {
  statisticsTopTen,
  statisticsSum,
  statisticsChart,
  statisticsRate,
} from "../../api/dataanalysis";
import { getTodayDate, getSevenDate } from "../../common/function";
export default {
  name: "Business",
  data() {
    return {
      value: false,
      form: {},
      columns: [
        {
          type: "index",
          width: 60,
          align: "center",
        },
        {
          title: "店铺名称",
          key: "storeName",
          align: "center",
        },
        {
          title: "商家账户",
          key: "storeId",
          align: "center",
        },
        {
          title: "销售总额($)",
          key: "totalSales",
          align: "center",
          sortable: true,
        },
        {
          title: "充值总额($)",
          key: "totalRecharge",
          align: "center",
          sortable: true,
        },
        {
          title: "佣金支出总额($)",
          key: "totalCommissionExpenses",
          align: "center",
          sortable: true,
        },
      ],
      data: [],
      timeIdx: 0, // 默认时间选中
      dateTime: [],
      myChart: null,
      dataInfo: {},
      rateInfo: {},
      rateType: "day",
      chartType: 0,
    };
  },
  created() {
    this.initData();
    this.initData2();
    this.initData3();
    this.initData4();
  },
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("myChart"));
  },
  methods: {
    // 初始化组件
    initEchart(xdata, sdata, yname) {
      const option = {
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          data: xdata,
          name: "日期",
        },
        yAxis: {
          type: "value",
          name: yname,
        },
        grid: {
          left: "5%",
          right: "8%",
          bottom: "10%",
          top: "15%",
        },
        series: [
          {
            data: sdata,
            type: "line",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
            smooth: true,
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
    // 获取商家排行榜 top10
    initData() {
      let data = { type: "total_order" };
      this.$httpRequest({
        api: statisticsTopTen,
        data,
        success: (res) => {
          console.log(res);
          this.data = res.result;
        },
      });
    },
    // 获取统计商家总数
    initData2() {
      let data = {};
      this.$httpRequest({
        api: statisticsSum,
        data,
        success: (res) => {
          console.log(res);
          this.dataInfo = res.result;
        },
      });
    },
    // 获取获取图标数据
    initData3() {
      let data = {};
      if (this.chartType == 2) {
        data = { type: "recharge" };
      }
      this.$httpRequest({
        api: statisticsChart,
        data,
        success: (res) => {
          console.log(res);
          let arr = [];
          let arr1 = [];
          let yname = "";
          for (const re of res.result) {
            arr.push(re.date);
            if (this.chartType == 0) {
              arr1.push(re.storeNum);
              yname = "商家数量(人)";
            }
            if (this.chartType == 1) {
              arr1.push(re.cost);
              yname = "销售额($)";
            }
            if (this.chartType == 2) {
              arr1.push(re.recharge);
              yname = "充值金额($)";
            }
            if (this.chartType == 3) {
              arr1.push(re.totalFeePay);
              yname = "佣金收入($)";
            }
          }
          this.initEchart(arr, arr1, yname);
        },
      });
    },
    // 获取环比统计数据
    initData4() {
      let data = { type: this.rateType };
      this.$httpRequest({
        api: statisticsRate,
        data,
        success: (res) => {
          console.log(res);
          this.rateInfo = res.result;
        },
      });
    },
    // 切换时间
    handleDate(ev) {
      this.rateType = ev;
      this.initData4();
    },
    // 图标类型切换
    handleChartType(ev) {
      this.chartType = ev;
      this.initData3();
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
    display: flex;
    min-height: 430px;
    .left {
      width: 25%;
      margin-left: 10px;
      .tabbar {
        border: 1px solid #e0e0e0;
        border-radius: 10px;
        display: flex;
        font-size: 14px;
        color: #666;
        list-style: none;
        width: 90%;
        li {
          width: calc(100% / 5);
          text-align: center;
          padding: 1px 0;
        }
      }
      .active {
        background: #089444;
        color: #ffffff;
        border-radius: 10px;
      }
      .data {
        li {
          list-style: none;
          border: 1px solid #e0e0e0;
          margin-top: 20px;
          border-radius: 10px;
          box-sizing: border-box;
          padding: 15px 15px;
          .title {
            color: #666;
            font-size: 14px;
          }
          .content {
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            > span {
              display: inline-block;
              width: 0;
              height: 0;
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              border-top: 10px solid transparent;
              border-bottom: 10px solid #089444;
              margin-bottom: 15px;
            }
            > div {
              display: flex;
              flex-direction: column;
              align-items: center;
              color: #666;
              font-size: 14px;
              margin-left: 20px;
              span:first-child {
                font-weight: bold;
                font-size: 17px;
              }
              i {
                font-style: normal;
                color: #089444;
              }
            }
          }
        }
      }
    }
    .right {
      width: 75%;
      margin-left: 10px;
      .top {
        height: 35%;
        display: flex;
        width: 100%;
        justify-content: space-around;
        li {
          height: 100%;
          list-style: none;
          width: calc(100% / 6);
          display: flex;

          justify-content: center;
        }
      }
      .bottom {
        height: 65%;
        ul {
          list-style: none;
          display: flex;
          margin-bottom: 20px;
          li {
            padding: 4px 6px;
            border: 1px solid #e0e0e0;
            border-radius: 10px;
            font-size: 13px;
            margin-right: 10px;
          }
          .active {
            color: #089444;
            border: 1px solid #089444 !important;
          }
        }
      }
    }
  }
}

.activeColor {
  color: #089444 !important;
  font-weight: bolder !important;
}
</style>
