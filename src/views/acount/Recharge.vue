<template>
  <div class="acount">
    <!-- 标题一 -->
    <Row class="title">
      <Col span="12"><span>账户信息</span></Col>
      <Col span="12" class="right">
        <Button type="info" class="button" @click="handleRecharge">立即充值</Button>
      </Col>
    </Row>

    <div class="content">
      <div>
        <span class="num">$0</span>
        <span class="title">当前账户余额</span>
      </div>
      <div>
        <span class="num">$0</span>
        <span class="title">最近一次充值金额</span>
      </div>
      <div>
        <span class="num">$0</span>
        <span class="title">最近一次充值日期</span>
      </div>
    </div>

    <!-- 表格 -->
    <div class="table">
      <div class="title">
        <span class="left">佣金支出</span>
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
          <Button type="info" ghost class="button">导出报表</Button>
        </div>
      </div>
      <Table :columns="columns" :data="data"></Table>
      <Page :total="100" show-sizer class="page"/>
    </div>
  </div>
</template>
<script>
export default {
  name: "Recharge",
  data() {
    return {
      value: "",
      model1: "",
      columns:[
        {
          title: "订单ID",
          key: "name",
        },
        {
          title: "充值金额",
          key: "age",
        },
        {
          title: "账户余额",
          key: "address",
        },
        {
          title: "累计充值总额",
          key: "address",
        },
        {
          title: "充值方式",
          key: "address",
        },
        {
          title: "充值状态",
          key: "address",
        },
        {
          title: "充值日期",
          key: "address",
        },
        {
          title: "充值备注说明",
          key: "address",
        },
        {
          title: "操作",
          key: "address",
        },
      ],
      data:[]
    };
  },
  methods:{
    handleRecharge() {
      this.$Notice.warning({
        title: "通知",
        desc: '目前暂时不支持线上银行转账充值，如有需要，请联系平台客服线下操作'
      });
    },
  }
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
    .page{
      text-align: right;
      margin-top: 30px;
      padding-bottom: 30px;
    }
  }
}
</style>
