<template>
  <div class="acount">
    <!-- 交易数据 -->
    <div class="table">
      <div class="title">
        <span class="left">交易数据</span>
        <div class="right">
          <span>昨天</span>
          <span>最近7天</span>
          <span>最近30天</span>
          <div>
            <!-- <span>去年</span> -->
            <DatePicker
              type="datetimerange"
              format="yyyy-MM-dd"
              style="width: 200px"
            ></DatePicker>
          </div>
          <Button type="info" ghost class="button">导出数据</Button>
        </div>
      </div>

      <div class="details">
        <div class="left">
          <Table :columns="columns1" :data="data1"></Table>
          <Table :columns="columns2" :data="data2"></Table>
        </div>
        <div class="right">
          <div id="main" style="width: 400px; height: 200px"></div>
        </div>
      </div>
    </div>

    <!-- 数据流量 -->
    <div class="table">
      <div class="title">
        <span class="left">数据流量</span>
        <div class="right">
          <span>昨天</span>
          <span>最近7天</span>
          <span>最近30天</span>
          <span>最近90天</span>
          <div>
            <!-- <span>去年</span> -->
            <DatePicker
              type="datetimerange"
              format="yyyy-MM-dd"
              style="width: 200px"
            ></DatePicker>
          </div>
        </div>
      </div>
      <div class="content">
        <div>
          <span class="num">0</span>
          <span class="title">浏览量</span>
        </div>
        <div>
          <span class="num">0</span>
          <span class="title">独立访客</span>
        </div>
        <div>
          <span class="num">0</span>
          <span class="title">商品浏览量</span>
        </div>
        <div>
          <span class="num">$0.00</span>
          <span class="title">账户余额</span>
        </div>
        <div style="flex-direction: row; justify-content: center">
          <Button type="info" class="button" @click="handleRecharge">立即充值</Button>
        </div>
      </div>
    </div>

    <!-- TOP10合作者榜 -->
    <div class="table" style="padding-bottom: 20px">
      <div class="title">
        <span class="left">TOP10合作者榜</span>
      </div>
      <Table :columns="columns" :data="data"></Table>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "Overview",
  data() {
    return {
      value: "",
      model1: "",
      columns: [
        {
          title: "合作者ID",
          key: "name",
        },
        {
          title: "合作者姓名",
          key: "age",
        },
        {
          title: "销售额",
          key: "address",
        },
        {
          title: "已结算佣金",
          key: "address",
        },
        {
          title: "待结算佣金",
          key: "address",
        },
        {
          title: "推广网站",
          key: "address",
        },
        {
          title: "操作",
          key: "address",
        },
      ],
      data: [],
      columns1: [
        {
          title: "独立访客",
          key: "name",
        },
        {
          title: "下单人数",
          key: "age",
        },
        {
          title: "订单数",
          key: "address",
        },
        {
          title: "下单件数",
          key: "address",
        },
        {
          title: "有效订单数",
          key: "address",
        },
        {
          title: "下单总数",
          key: "address",
        },
      ],
      data1: [],
      columns2: [
        {
          title: "退款金额",
          key: "name",
        },
        {
          title: "付款人数",
          key: "age",
        },
        {
          title: "付款订单数",
          key: "address",
        },
        {
          title: "付款件数",
          key: "address",
        },
        {
          title: "付款金额",
          key: "address",
        },
        {
          title: "客单价",
          key: "address",
        },
      ],
      data2: [],
      myChart: null,
    };
  },
  mounted() {
    this.myChart = echarts.init(document.getElementById("main"));
    this.getChart();
  },
  methods: {
    getChart() {
      const chartOption = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}%",
        },
        series: [
          {
            name: "漏斗图",
            type: "funnel",
            left: "0%",
            top: 0,
            //x2: 80,
            bottom: 0,
            width: "100%",
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: "0%",
            maxSize: "100%",
            sort: "descending",
            gap: 2,
            label: {
              show: true,
              position: "inside",
              color:"#fff"
            },
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: "solid",
              },
            },
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 1,
            },
            emphasis: {
              label: {
                fontSize: 20,
              },
            },
            data: [
              { value: 60, name: "浏览", itemStyle: { color: "#f34e4e" } },
              { value: 40, name: "下单", itemStyle: { color: "#e4945e" } },
              { value: 20, name: "付款", itemStyle: { color: "#47ca72" } },
            ],
          },
        ],
      };
      this.myChart.setOption(chartOption);
    },
    handleRecharge() {
      this.$Notice.warning({
        title: "通知",
        desc: '目前暂时不支持线上银行转账充值，如有需要，请联系平台客服线下操作'
      });
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
    div {
      padding: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      width: calc(100% / 3);
      .num {
        color: #3eb370;
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
    > .title {
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ebeef5;
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

  .details {
    padding: 20px;
    display: flex;
    .left {
      width: 60%;
    }
    .right {
      width: 40%;
    }
  }
}
</style>
