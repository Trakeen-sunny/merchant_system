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

    <div class="content">
      <div>
        <span class="num">$0</span>
        <span class="title">支出总额</span>
      </div>
      <div>
        <span class="num">$0</span>
        <span class="title">收入总额</span>
      </div>
      <div>
        <span class="num">$0</span>
        <span class="title"
          ><span>账户余额</span>
          <Poptip
            word-wrap
            width="200"
            placement="bottom"
            content=" 如果余额低于$100，我们将暂停您的服务；为了不影响你的业务，请及时充值确保账户有足够的余额。 "
          >
            <Icon type="md-list-box" color="#999" />
          </Poptip>
        </span>
      </div>
    </div>

    <!-- 搜索 -->
    <div class="search">
      <div>
        <span>订单编号</span>
        <Input v-model="value" size="large" clearable class="width" />
      </div>
      <div>
        <span>任务编号</span>
        <Input v-model="value" size="large" clearable class="width" />
      </div>
      <div>
        <span>交易类型</span>
        <Select v-model="model1" size="large" clearable class="width">
          <Option :value="1">1</Option>
          <Option :value="2">4</Option>
          <Option :value="3">5</Option>
        </Select>
      </div>
      <div>
        <Button type="info" ghost class="button" size="large">重置</Button>
        <Button type="info" class="button" size="large">查询</Button>
      </div>
    </div>

    <!-- 表格 -->
    <div class="table">
      <div class="title">
        <span class="left">账户明细</span>
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
      <Page :total="100" show-sizer class="page" />
    </div>
  </div>
</template>
<script>
export default {
  name: "AcountDetail",
  data() {
    return {
      value: "",
      model1: "",
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center",
        },
        {
          title: "流水单号",
          key: "name",
        },
        {
          title: "订单/任务编号",
          key: "age",
        },
        {
          title: "交易金额",
          key: "address",
        },
        {
          title: "账户金额",
          key: "address",
        },
        {
          title: "交易类型",
          key: "address",
        },
        {
          title: "交易日期",
          key: "address",
        },
      ],
      data: [],
    };
  },
  methods: {
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
