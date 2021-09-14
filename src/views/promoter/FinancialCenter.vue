<template>
  <div class="sale">
    <!-- 标题一 -->
    <Row class="title">
      <Col span="12"><span>财务中心</span></Col>
    </Row>

    <!--  时间 搜索 -->
    <div class="search table" style="margin-bottom: 30px; padding-bottom: 20px">
      <ul>
        <li>日</li>
        <li>周</li>
        <li>月</li>
        <li>季</li>
        <li>半年</li>
        <li>年</li>
      </ul>
      <div class="right">
        <span class="activeColor">今天</span>
        <span>最近7天</span>
        <div>
          <span>最近30天</span>
          <DatePicker
            type="datetimerange"
            format="yyyy-MM-dd"
            style="width: 200px"
          ></DatePicker>
        </div>
        <Dropdown style="margin-left: 20px">
          <Button type="info" ghost class="button">
            导出
            <Icon type="ios-arrow-down"></Icon>
          </Button>
          <DropdownMenu slot="list">
            <DropdownItem>导出CSV</DropdownItem>
            <DropdownItem>导出XLSX</DropdownItem>
            <DropdownItem>导出XLS</DropdownItem>
            <DropdownItem>导出XML</DropdownItem>
            <DropdownItem>导出MHT</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>

    <div class="content">
      <div>
        <span class="num">0</span>
        <span class="title">待结算佣金总金额($)</span>
      </div>
      <div>
        <span class="num">0</span>
        <span class="title">待结算佣金总金额($)</span>
      </div>
    </div>

    <!-- 搜索 -->
    <div class="search">
      <div>
        <span>流水号</span>
        <Input v-model="value" size="large"  class="width" />
      </div>
      <div>
        <span>订单编号</span>
        <Input v-model="value" size="large"  class="width" />
      </div>
      <div>
        <span>计划ID</span>
        <Input v-model="value" size="large"  class="width" />
      </div>
      <div>
        <span>商品名称</span>
        <Input v-model="value" size="large"  class="width" />
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
          <TabPane label="财务明细" name="name1">
            <Table :columns="columns" :data="data">
             
            </Table>
            <Page :total="100" show-sizer class="page" />
          </TabPane>
          <TabPane label="提现记录" name="name2">
            <Table :columns="columns1" :data="data">
             
            </Table>
            <Page :total="100" show-sizer class="page" />
          </TabPane>
        </Tabs>
      </div>
    </div>
  </div>
</template>
<script>
import { orderList } from "../../api/acount";
import { getLocalTime } from "../../common/function";
export default {
  name: "FinancialCenter",
  data() {
    return {
      value: "",
      model1: "",
      columns: [
        {
          type: "selection",
          width: 40,
          align: "center",
        },
        {
          title: "流水号",
          key: "order_number",
          align: "center",
        },
        {
          title: "订单编号",
          slot: "confirmed",
          align: "center",
        },
        {
          title: "计划ID",
          slot: "title",
          align: "center",
        },
        {
          title: "商品名称",
          slot: "sku",
          align: "center",
        },
        {
          title: "佣金金额($)",
          slot: "orderCount",
          align: "center",
        },
        {
          title: "账户余额($)",
          key: "total_line_items_price",
          align: "center",
        },
        {
          title: "结算时间",
          key: "aa",
          align: "center",
        },
      ],
      data: [],
      columns1: [
        {
          type: "selection",
          width: 40,
          align: "center",
        },
        {
          title: "流水号",
          key: "order_number",
          align: "center",
        },
        {
          title: "提现状态",
          slot: "confirmed",
          align: "center",
        },
        {
          title: "提现方式",
          slot: "title",
          align: "center",
        },
        {
          title: "提现金额($)",
          slot: "sku",
          align: "center",
        },
        {
          title: "账户余额($)",
          slot: "orderCount",
          align: "center",
        },
        {
          title: "账户余额($)",
          key: "total_line_items_price",
          align: "center",
        },
        {
          title: "提现时间",
          key: "aa",
          align: "center",
        },
        {
          title: "到款时间",
          key: "aa",
          align: "center",
        },
      ],
    };
  },
  created() {
    // this.initData();
  },
  methods: {
    // 初始化数据
    initData() {
      this.$httpRequest({
        api: orderList,
        data: {},
        success: (res) => {
          console.log(res);
          for (const res of res.result.orderList) {
            res.created_at = getLocalTime(res.created_at);
          }
          this.data = res.result.orderList;
        },
      });
    },
  },
};
</script>
<style lang="less" scoped>
.sale {
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
      width: calc(100% / 2);
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
    flex-wrap: wrap;
    padding: 20px 20px 0;
    > div {
      display: flex;
      align-items: center;
      margin-right: 20px;
      margin-bottom: 20px;
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
    > ul {
      display: flex;
      border: 1px solid #e0e0e0;
      list-style: none;
      border-radius: 5px;
      height: 37px;
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

  .table {
    background-color: #ffffff;
    margin-top: 30px;
    border-radius: 4px;
    .title {
      padding: 20px;
      /deep/ .ivu-tabs-nav {
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

.activeColor {
  color: #089444 !important;
  font-weight: bolder !important;
}
</style>
