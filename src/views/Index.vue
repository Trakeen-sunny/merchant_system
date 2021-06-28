<template>
  <div class="index">
    <!-- 标题一 -->
    <Row class="title">
      <Col span="12"><span>账户信息</span></Col>
      <Col span="12" class="right">
        <Button type="info" ghost class="button" @click="lookMore(0)"
          >查看更多</Button
        >
      </Col>
    </Row>
    <div class="content">
      <div class="left">
        <div>
          <span class="num">0</span>
          <span class="title">点击数</span>
        </div>
        <div>
          <span class="num">0</span>
          <span class="title">订单数</span>
        </div>
        <div>
          <span class="num">0</span>
          <span class="title">销售额</span>
        </div>
        <div>
          <span class="num">0</span>
          <span class="title">累计佣金</span>
        </div>
      </div>
      <div class="right">
        <div>
          <span class="num">0</span>
          <span class="title">当前合作者数</span>
        </div>
        <div>
          <span class="num">0</span>
          <span class="title">账户余额</span>
        </div>
        <div>
          <Button type="info" class="button" @click="handleRecharge"
            >立即充值</Button
          >
        </div>
      </div>
    </div>
    <div class="content_1">
      <div class="left">
        <header>
          <span>新注册合作者</span>
          <span @click="lookMore(1)">查看更多</span>
        </header>
        <content>
          <Table :columns="columns1" :data="data1"></Table>
        </content>
      </div>
      <div class="right">
        <header>
          <span>TOP合作者</span>
          <span @click="lookMore(2)">查看更多</span>
        </header>
        <content>
          <Table :columns="columns2" :data="data2"></Table>
        </content>
      </div>
    </div>
    <!-- 标题二 -->
    <Row class="title">
      <Col span="12"><span>消息</span></Col>
    </Row>
    <div class="content_2">
      <Table :columns="columns2" :data="data2"></Table>
    </div>
    <!-- 标题三 -->
    <Row class="title">
      <Col span="12"><span>最新订单</span></Col>
      <Col span="12" class="right">
        <Button type="info" ghost class="button" @click="lookMore(3)"
          >查看更多</Button
        >
      </Col>
    </Row>
    <div class="content_2">
      <Table :columns="columns2" :data="data2"></Table>
    </div>
  </div>
</template>
<script>
export default {
  name: "Index",
  data() {
    return {
      columns1: [
        {
          title: "Name",
          key: "name",
        },
        {
          title: "Age",
          key: "age",
        },
        {
          title: "Address",
          key: "address",
        },
      ],
      data1: [],
      columns2: [
        {
          title: "合作者名称",
          key: "name",
        },
        {
          title: "累计订单",
          key: "age",
        },
        {
          title: "累计金额",
          key: "address",
        },
      ],
      data2: [],
    };
  },
  methods: {
    handleRecharge() {
      this.$Notice.warning({
        title: "通知",
        desc: "目前暂时不支持线上银行转账充值，如有需要，请联系平台客服线下操作",
      });
    },
    lookMore(num) {
      if (num == 0) {
        this.$router.push({ name: "AcountDetail" });
      } else if (num == 1) {
        this.$router.push({ name: "Collaborator" });
      } else if (num == 2) {
        this.$router.push({ name: "Overview" });
      } else {
        this.$router.push({ name: "Sale" });
      }
    },
  },
};
</script>
<style lang="less" scoped>
.index {
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
    display: flex;
    justify-content: space-between;
    .left,
    .right {
      background-color: #ffffff;
      box-sizing: border-box;
      display: flex;
      div {
        padding: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        .num {
          color: #3eb370;
          font-size: 18px;
          font-weight: 600;
        }
        .title {
          font-size: 15px;
          font-weight: 500;
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
    .left {
      width: 58%;
      div {
        width: 25%;
      }
    }
    .right {
      width: 40%;
      div {
        width: calc(100% / 3);
      }
      div:last-child {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .button {
          font-weight: 600;
          font-size: 14px;
        }
      }
    }
  }
  .content_1 {
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    min-height: 300px;
    .left,
    .right {
      width: 49%;
      background-color: #ffffff;
      border-radius: 4px;
      header {
        padding: 30px 20px;
        display: flex;
        justify-content: space-between;
        // border-bottom: 1px solid #ebeef5;
        span {
          font-weight: 600;
          font-size: 15px;
        }
        span:last-child {
          color: #45b1b1;
        }
      }
    }
  }
  .content_2 {
    background-color: #ffffff;
    border-radius: 4px;
    margin-bottom: 30px;
  }
}
</style>