<template>
  <div class="sale">
    <div
      class="content"
      style="margin-bottom: 0; border-bottom: 0.5px solid #ebeef5"
    >
      <div>
        <span class="num">$0</span>
        <span class="title">下单总金额</span>
      </div>
      <div>
        <span class="num">0</span>
        <span class="title">下单总数</span>
      </div>
      <div>
        <span class="num">0</span>
        <span class="title">待付款订单数</span>
      </div>
      <div>
        <span class="num">0</span>
        <span class="title">已付款订单数</span>
      </div>
    </div>
    <div class="content">
      <div>
        <span class="num">0</span>
        <span class="title">已取消订单数</span>
      </div>
      <div>
        <span class="num">$0</span>
        <span class="title">合作者佣金总额</span>
      </div>
      <div>
        <span class="num">$0</span>
        <span class="title">平台佣金总额</span>
      </div>
      <div>
        <span class="num">$0</span>
        <span class="title">其他推荐佣金总额</span>
      </div>
    </div>

    <!-- 搜索 -->
    <div class="search">
      <div>
        <span>订单编号</span>
        <Input v-model="value" size="large" clearable class="width" />
      </div>
      <div>
        <span>合作者姓名</span>
        <Input v-model="value" size="large" clearable class="width" />
      </div>
      <div>
        <Button type="info" ghost class="button" size="large">重置</Button>
        <Button type="info" class="button" size="large">查询</Button>
      </div>
    </div>

    <!-- 表格 -->
    <div class="table">
      <div class="title">
        <Tabs value="name1">
          <TabPane label="全部订单" name="name1">
            <Table :columns="columns" :data="data"></Table>
            <Page :total="100" show-sizer class="page" />
          </TabPane>
          <TabPane label="待付款" name="name2">
            <Table :columns="columns" :data="data"></Table>
            <Page :total="100" show-sizer class="page" />
          </TabPane>
          <TabPane label="已付款" name="name3">
            <Table :columns="columns" :data="data"></Table>
            <Page :total="100" show-sizer class="page" />
          </TabPane>
          <TabPane label="已取消" name="name4">
            <Table :columns="columns" :data="data"></Table>
            <Page :total="100" show-sizer class="page" />
          </TabPane>
          <TabPane label="已退款" name="name5">
            <Table :columns="columns" :data="data"></Table>
            <Page :total="100" show-sizer class="page" />
          </TabPane>
          <div class="right" slot="extra">
            <span>今日</span>
            <span>最近7天</span>
            <div>
              <span>最近30天</span>
              <DatePicker
                type="datetimerange"
                format="yyyy-MM-dd"
                style="width: 200px"
              ></DatePicker>
            </div>
            <Button type="info" ghost class="button">导出报表</Button>
          </div>
        </Tabs>
      </div>
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
          title: "订单编号",
          key: "name",
        },
        {
          title: "合作者",
          key: "age",
        },
        {
          title: "国家",
          key: "address",
        },
        {
          title: "订单金额",
          key: "address",
        },
        {
          title: "平台佣金",
          key: "address",
        },
        {
          title: "合作者佣金",
          key: "address",
        },
        {
          title: "佣金状态",
          key: "address",
        },
        {
          title: "订单日期",
          key: "address",
        },
        {
          title: "订单状态",
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
};
</script>
<style lang="less" scoped>
.sale {
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
      width: calc(100% / 4);
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
      /deep/ .ivu-tabs-nav{
          height: 50px;
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
