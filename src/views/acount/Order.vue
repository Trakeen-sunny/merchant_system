<template>
  <div class="sale">
    <!-- 标题一 -->
    <Row class="title">
      <Col span="12"><span>订单明细</span></Col>
    </Row>

    <!--  时间 搜索 -->
    <!-- <div class="search table" style="margin-bottom: 30px;padding-bottom:20px;">
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
    </div> -->
<!--
    <div
      class="content"
      style="margin-bottom: 0; border-bottom: 0.5px solid #ebeef5"
    >
      <div>
        <span class="num">$0</span>
        <span class="title">订单总金额</span>
      </div>
      <div>
        <span class="num">0</span>
        <span class="title">订单总数</span>
      </div>
      <div>
        <span class="num">0</span>
        <span class="title">待付款订单数</span>
      </div>
      <div>
        <span class="num">0</span>
        <span class="title">已付款订单数</span>
      </div>
    </div>-->
    <div class="content">
   <!--   <div>
        <span class="num">0</span>
        <span class="title">已取消订单数</span>
      </div>-->
      <div>
        <span class="num">${{userinfo.totalOrder}}</span>
        <span class="title">佣金商品总金额($)</span>
      </div>
      <div>
        <span class="num">${{-(userinfo.balance)}}</span>
        <span class="title">支付佣金总额($)</span>
      </div>
      <div>
        <span class="num">${{ userinfo.balance }}</span>
        <span class="title">账号余额($)</span>
      </div>
    </div>

    <!-- 搜索 -->
    <div class="search">
      <div>
        <span>订单编号</span>
        <Input v-model="value" size="large" clearable class="width" />
      </div>
      <div>
        <span>收货国家</span>
        <Select v-model="model1" size="large" clearable class="width">
          <Option value="">全部</Option>
          <Option value="英国">英国</Option>
          <Option value="美国">美国</Option>
          <Option value="法国">法国</Option>
          <Option value="韩国">韩国</Option>
        </Select>
      </div>
      <!-- <div>
        <span>访问时间</span>
         <DatePicker
          type="datetime"
          format="yyyy-MM-dd"
          style="width: 200px"
        ></DatePicker>
      </div>
      <div>
        <span>最后一次点击链接时间</span>
        <DatePicker
          type="datetime"
          format="yyyy-MM-dd"
          style="width: 200px"
        ></DatePicker>
      </div> -->
      <div>
        <Button type="info" ghost class="button" size="large">重置</Button>
        <Button type="info" class="button" size="large" style="margin-left:20px">查询</Button>
        <Dropdown>
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
 
    <!-- 表格 -->
    <div class="table">
      <div class="title">
        <Tabs value="name1">
          <TabPane label="全部" name="name1">
            <Table :columns="columns" :data="data">
              <template slot-scope="{ row }" slot="userID">
                {{ row.customer && row.customer.id }}
              </template>
              <template slot-scope="{ row }" slot="title">
                {{ row.line_items && row.line_items[0].title }}
              </template>
              <template slot-scope="{ row }" slot="confirmed">
                {{ row.shopfiyStatus=="authorized" ? "已授权" : "" }}
				{{ row.shopfiyStatus=="pending" ? "未付款" : "" }}
				{{ row.shopfiyStatus=="paid" ? "已付款" : "" }}
				{{ row.shopfiyStatus=="partially_paid" ? "部分付款" : "" }}
				{{ row.shopfiyStatus=="refunded" ? "已退款" : "" }}
				{{ row.shopfiyStatus=="voided" ? "无效" : "" }}
				{{ row.shopfiyStatus=="partially_refunded" ? "部分退款" : "" }}
				
				{{ row.shopfiyStatus=="unpaid" ? "部分授权与支付" : "" }}
              </template>
              <template slot-scope="{ row }" slot="orderCount">
                {{ row.customer && row.customer.orders_count }}
              </template>
              <template slot-scope="{ row }" slot="sku">
                {{ row.line_items && row.line_items[0].variant_title }}
              </template>
              <template slot-scope="{ row }" slot="countryName">
                {{ row.customer && row.customer.default_address.country }}
              </template>
            </Table>
            <Page 
			 :total="total"
			 :current="pageNo"
			 :page-size="pageSize"
			 @on-change="changePage"
			 @on-page-size-change="changeSize"
		     show-sizer
			 class="page"
			/>
          </TabPane> 
         <!-- <TabPane label="待付款" name="name2"> 
            <Table :columns="columns" :data="data">
              <template slot-scope="{ row }" slot="userID">
                {{ row.customer && row.customer.id }}
              </template>
              <template slot-scope="{ row }" slot="title">
                {{ row.line_items && row.line_items[0].title }}
              </template>
              <template slot-scope="{ row }" slot="confirmed">
                {{ row.confirmed ? "已完成" : "未完成" }}
              </template>
              <template slot-scope="{ row }" slot="orderCount">
                {{ row.customer && row.customer.orders_count }}
              </template>
              <template slot-scope="{ row }" slot="sku">
                {{ row.line_items && row.line_items[0].variant_title }}
              </template>
              <template slot-scope="{ row }" slot="countryName">
                {{ row.customer && row.customer.default_address.country }}
              </template>
            </Table>
            <Page :total="100" show-sizer class="page" />
          </TabPane>
          <TabPane label="已付款" name="name3">
            <Table :columns="columns" :data="data">
              <template slot-scope="{ row }" slot="userID">
                {{ row.customer && row.customer.id }}
              </template>
              <template slot-scope="{ row }" slot="title">
                {{ row.line_items && row.line_items[0].title }}
              </template>
              <template slot-scope="{ row }" slot="confirmed">
                {{ row.confirmed ? "已完成" : "未完成" }}
              </template>
              <template slot-scope="{ row }" slot="orderCount">
                {{ row.customer && row.customer.orders_count }}
              </template>
              <template slot-scope="{ row }" slot="sku">
                {{ row.line_items && row.line_items[0].variant_title }}
              </template>
              <template slot-scope="{ row }" slot="countryName">
                {{ row.customer && row.customer.default_address.country }}
              </template>
            </Table>
            <Page :total="100" show-sizer class="page" />
          </TabPane>
          <TabPane label="退款中" name="name4">
            <Table :columns="columns" :data="data">
              <template slot-scope="{ row }" slot="userID">
                {{ row.customer && row.customer.id }}
              </template>
              <template slot-scope="{ row }" slot="title">
                {{ row.line_items && row.line_items[0].title }}
              </template>
              <template slot-scope="{ row }" slot="confirmed">
                {{ row.confirmed ? "已完成" : "未完成" }}
              </template>
              <template slot-scope="{ row }" slot="orderCount">
                {{ row.customer && row.customer.orders_count }}
              </template>
              <template slot-scope="{ row }" slot="sku">
                {{ row.line_items && row.line_items[0].variant_title }}
              </template>
              <template slot-scope="{ row }" slot="countryName">
                {{ row.customer && row.customer.default_address.country }}
              </template>
            </Table>
            <Page :total="100" show-sizer class="page" />
          </TabPane>
          <TabPane label="已退款" name="name5">
            <Table :columns="columns" :data="data">
              <template slot-scope="{ row }" slot="userID">
                {{ row.customer && row.customer.id }}
              </template>
              <template slot-scope="{ row }" slot="title">
                {{ row.line_items && row.line_items[0].title }}
              </template>
              <template slot-scope="{ row }" slot="confirmed">
                {{ row.confirmed ? "已完成" : "未完成" }}
              </template>
              <template slot-scope="{ row }" slot="orderCount">
                {{ row.customer && row.customer.orders_count }}
              </template>
              <template slot-scope="{ row }" slot="sku">
                {{ row.line_items && row.line_items[0].variant_title }}
              </template>
              <template slot-scope="{ row }" slot="countryName">
                {{ row.customer && row.customer.default_address.country }}
              </template>
            </Table>
            <Page :total="100" show-sizer class="page" />
          </TabPane>
          <TabPane label="已取消" name="name6">
            <Table :columns="columns" :data="data">
              <template slot-scope="{ row }" slot="userID">
                {{ row.customer && row.customer.id }}
              </template>
              <template slot-scope="{ row }" slot="title">
                {{ row.line_items && row.line_items[0].title }}
              </template>
              <template slot-scope="{ row }" slot="confirmed">
                {{ row.confirmed ? "已完成" : "未完成" }}
              </template>
              <template slot-scope="{ row }" slot="orderCount">
                {{ row.customer && row.customer.orders_count }}
              </template>
              <template slot-scope="{ row }" slot="sku">
                {{ row.line_items && row.line_items[0].variant_title }}
              </template>
              <template slot-scope="{ row }" slot="countryName">
                {{ row.customer && row.customer.default_address.country }}
              </template>
            </Table>
            <Page :total="100" show-sizer class="page" />
          </TabPane>
          <TabPane label="已确认收获" name="name7">
            <Table :columns="columns" :data="data">
              <template slot-scope="{ row }" slot="userID">
                {{ row.customer && row.customer.id }}
              </template>
              <template slot-scope="{ row }" slot="title">
                {{ row.line_items && row.line_items[0].title }}
              </template>
              <template slot-scope="{ row }" slot="confirmed">
                {{ row.confirmed ? "已完成" : "未完成" }}
              </template>
              <template slot-scope="{ row }" slot="orderCount">
                {{ row.customer && row.customer.orders_count }}
              </template>
              <template slot-scope="{ row }" slot="sku">
                {{ row.line_items && row.line_items[0].variant_title }}
              </template>
              <template slot-scope="{ row }" slot="countryName">
                {{ row.customer && row.customer.default_address.country }}
              </template>
            </Table>
            <Page :total="100" show-sizer class="page" />
          </TabPane>
          <TabPane label="已完成" name="name8">
            <Table :columns="columns" :data="data">
              <template slot-scope="{ row }" slot="userID">
                {{ row.customer && row.customer.id }}
              </template>
              <template slot-scope="{ row }" slot="title">
                {{ row.line_items && row.line_items[0].title }}
              </template>
              <template slot-scope="{ row }" slot="confirmed">
                {{ row.confirmed ? "已完成" : "未完成" }}
              </template>
              <template slot-scope="{ row }" slot="orderCount">
                {{ row.customer && row.customer.orders_count }}
              </template>
              <template slot-scope="{ row }" slot="sku">
                {{ row.line_items && row.line_items[0].variant_title }}
              </template>
              <template slot-scope="{ row }" slot="countryName">
                {{ row.customer && row.customer.default_address.country }}
              </template>
            </Table>
            <Page :total="100" show-sizer class="page" />
          </TabPane>-->
          <!-- <div class="right" slot="extra">
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
          </div> -->
        </Tabs>
      </div>
    </div>
  </div>
</template>
<script>
import { getUsersByToken } from "../../api/index";
import { cozmoxOrdersList } from "../../api/acount";
import { getLocalTime } from "../../common/function";
export default {
  name: "Order",
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
          title: "订单编号",
          key: "shopfiyNumber",
          align: "center",
        },
        {
          title: "订单状态",
          slot: "confirmed",
          align: "center",
        },
        {
          title: "商品名称",
          key: "productName",
          align: "center",
        },
        {
          title: "SKU",
          key: "productSuk",
          align: "center",
        },
        {
          title: "商品数量",
          key: "productNumber",
          align: "center",
        },
        {
          title: "商品单价($)",
          key: "productPrice",
          align: "center",
        },
        {
          title: "订单金额($)",
          key: "orderPrice",
          align: "center",
        },
        {
          title: "优惠金额($)",
          key: "orderDiscount",
          align: "center",
        },
        {
          title: "佣金金额($)",
          key: "commisson",
          align: "center",
        },
        {
          title: "买家ID",
          key: "customerId",
          align: "center",
        },
        {
          title: "收货国家",
          key: "customerCountry",
          align: "center",
        },
        {
          title: "创建时间",
          key: "createTime",
          align: "center", 
        },
      ],
      data: [],
	  pageNo: 1, //页数
      pageSize: 10, //条数
      total: 0, //总条数
      userinfo: {},
    };
  },
  created() {
    this.initData();
    this.getUserToken();
  },

  methods: {
    // 初始化数据
    initData() {
		let data = { pageNo: this.pageNo, pageSize: this.pageSize, ...this.form };
		this.$httpRequest({
        api: cozmoxOrdersList,
        data: data,
        success: (res) => {
          console.log(res);
          for (const res of res.result.records) {
            res.created_at = getLocalTime(res.created_at);
          }
          this.data = res.result.records;
        },
      });
    },
       // 获取统计数据
  getUserToken() {
      this.$httpRequest({
        api: getUsersByToken,
        data: {},
        success: (res) => {
          this.userinfo = res.result;
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
