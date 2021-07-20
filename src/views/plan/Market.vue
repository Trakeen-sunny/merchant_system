<template>
  <div class="acount">
    <!-- 标题一 -->
    <div class="content">
      <div>
        <span class="num">0</span>
        <span class="title">进行中计划</span>
      </div>
      <div>
        <span class="num">0</span>
        <span class="title">已结束计划</span>
      </div>
    </div>

    <!-- 搜索 -->
    <div class="search">
      <div>
        <span>计划ID</span>
        <Input v-model="value" size="large" clearable class="width" />
      </div>
      <div>
        <span>商品名称</span>
        <Input v-model="value" size="large" clearable class="width" />
      </div>
      <div>
        <span>计划状态</span>
        <Select v-model="model1" size="large" clearable class="width">
          <Option :value="1">全部</Option>
          <Option :value="2">进行中</Option>
          <Option :value="3">已结束</Option>
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
      <Table :columns="columns" :data="data"></Table>
      <Page :total="100" show-sizer class="page" />
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
              <div>付款订单数：<span>111</span></div>
              <div>订单销售额：<span>111</span></div>
          </div>
          <Button type="text" class="copy">复制链接</Button>
        </div>
        <div class="li">
          <img src="../../assets/img.jpg" />
          <div class="detail">
              <div>红人昵称：<span>111</span></div>
              <div>商品链接：<span>111</span></div>
              <div>优惠券链接：<span>111</span></div>
              <div>付款订单数：<span>111</span></div>
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
export default {
  name: "Market",
  data() {
    return {
      modal: false,
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
          key: "name",
        },
        {
          title: "商品名称",
          key: "age",
        },
        {
          title: "计划状态",
          key: "address",
        },
        {
          title: "佣金比例(%)",
          key: "address",
        },
        {
          title: "f付款订单数",
          key: "address",
        },
        {
          title: "累计佣金",
          key: "address",
        },
        {
          title: "创建时间",
          key: "address",
        },
        {
          title: "操作",
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
    img{
        width: 60px;
        height: 60px;
        border-radius: 100%;
        align-self: flex-start;
    }
    .detail {
      flex: 1;
      margin: 0 10px;
      div{
          font-size: 14px;
          color: #999;
          font-weight: bold;
          span{
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
