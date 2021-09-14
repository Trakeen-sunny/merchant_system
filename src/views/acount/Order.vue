<template>
  <div class="sale">
    <!-- 标题一 -->
    <Row class="title">
      <Col span="12"><span>{{$t("orderCenter.asideName")}}</span></Col>
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
        <span class="num"
          >${{
            userRole == 1
              ? userinfo.totalFee - userinfo.totalFeePay
              : userinfo.totalFee
          }}</span
        >
        <span class="title">{{userRole == 1?$t("orderCenter.form.name1"):$t("orderCenter.form.name5")}}</span>
      </div>
      <div>
        <span class="num"
          >${{ userRole == 1 ? userinfo.totalFeePay : userinfo.totalFee }}</span
        >
        <span class="title">{{userRole == 1?$t("orderCenter.form.name2"):$t("orderCenter.form.name4")}}</span>
      </div>
      <div>
        <span class="num">${{ userinfo.balance }}</span>
        <span class="title">{{$t("orderCenter.form.name3")}}</span>
      </div>
    </div>

    <!-- 搜索 -->
    <div class="search">
      <div>
        <span>{{$t("orderCenter.form2.label1")}}</span>
        <Input
          v-model="form.shopfiyNumber"
          size="large"
          class="width"
        />
      </div>
      <div>
        <span>{{$t("orderCenter.form2.label2")}}</span>
        <Input
          v-model="form.customerCountry"
          size="large"
          class="width"
        />
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
        <Button
          type="info"
          ghost
          class="button"
          size="large"
          @click="handleReset"
          >{{ $t("common.reset") }}</Button
        >
        <Button type="info" class="button" size="large" style="margin-left:20px;" @click="handleSearch">{{
          $t("common.search")
        }}</Button>
        <Button type="info" ghost class="button" @click="handleExport">{{
          $t("common.exportPage")
        }}</Button>
      </div>
    </div>

    <!-- 表格 -->
    <div class="table">
      <div class="title">
        <Tabs value="paid" @on-click="handleTabs">
          <TabPane :label="$t('orderCenter.tab.name1')" name="paid">
            <Table :columns="columns" :data="data">
              <template slot-scope="{ row }" slot="confirmed">
                {{ row.shopfiyStatus == "authorized" ? $t("orderCenter.tab.name2") : "" }}
                {{ row.shopfiyStatus == "pending" ?  $t("orderCenter.tab.name3")  : "" }}
                {{ row.shopfiyStatus == "paid" ? $t("orderCenter.tab.name1") : "" }}
                {{ row.shopfiyStatus == "partially_paid" ? $t("orderCenter.tab.name4") : "" }}
                {{ row.shopfiyStatus == "refunded" ? $t("orderCenter.tab.name5") : "" }}
                {{ row.shopfiyStatus == "voided" ? $t("orderCenter.tab.name6") : "" }}
                {{
                  row.shopfiyStatus == "partially_refunded" ? $t("orderCenter.tab.name7") : ""
                }}
                {{ row.shopfiyStatus == "unpaid" ? $t("orderCenter.tab.name8") : "" }}
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
          <TabPane :label="$t('orderCenter.tab.name2')" name="authorized">
            <Table :columns="columns" :data="data">
              <template slot-scope="{ row }" slot="confirmed">
                {{ row.shopfiyStatus == "authorized" ? $t("orderCenter.tab.name2") : "" }}
                {{ row.shopfiyStatus == "pending" ?  $t("orderCenter.tab.name3")  : "" }}
                {{ row.shopfiyStatus == "paid" ? $t("orderCenter.tab.name1") : "" }}
                {{ row.shopfiyStatus == "partially_paid" ? $t("orderCenter.tab.name4") : "" }}
                {{ row.shopfiyStatus == "refunded" ? $t("orderCenter.tab.name5") : "" }}
                {{ row.shopfiyStatus == "voided" ? $t("orderCenter.tab.name6") : "" }}
                {{
                  row.shopfiyStatus == "partially_refunded" ? $t("orderCenter.tab.name7") : ""
                }}
                {{ row.shopfiyStatus == "unpaid" ? $t("orderCenter.tab.name8") : "" }}
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
          <TabPane :label="$t('orderCenter.tab.name3')" name="pending">
            <Table :columns="columns" :data="data">
              <template slot-scope="{ row }" slot="confirmed">
                {{ row.shopfiyStatus == "authorized" ? $t("orderCenter.tab.name2") : "" }}
                {{ row.shopfiyStatus == "pending" ?  $t("orderCenter.tab.name3")  : "" }}
                {{ row.shopfiyStatus == "paid" ? $t("orderCenter.tab.name1") : "" }}
                {{ row.shopfiyStatus == "partially_paid" ? $t("orderCenter.tab.name4") : "" }}
                {{ row.shopfiyStatus == "refunded" ? $t("orderCenter.tab.name5") : "" }}
                {{ row.shopfiyStatus == "voided" ? $t("orderCenter.tab.name6") : "" }}
                {{
                  row.shopfiyStatus == "partially_refunded" ? $t("orderCenter.tab.name7") : ""
                }}
                {{ row.shopfiyStatus == "unpaid" ? $t("orderCenter.tab.name8") : "" }}
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

          <TabPane :label="$t('orderCenter.tab.name4')" name="partially_paid">
            <Table :columns="columns" :data="data">
              <template slot-scope="{ row }" slot="confirmed">
                {{ row.shopfiyStatus == "authorized" ? $t("orderCenter.tab.name2") : "" }}
                {{ row.shopfiyStatus == "pending" ?  $t("orderCenter.tab.name3")  : "" }}
                {{ row.shopfiyStatus == "paid" ? $t("orderCenter.tab.name1") : "" }}
                {{ row.shopfiyStatus == "partially_paid" ? $t("orderCenter.tab.name4") : "" }}
                {{ row.shopfiyStatus == "refunded" ? $t("orderCenter.tab.name5") : "" }}
                {{ row.shopfiyStatus == "voided" ? $t("orderCenter.tab.name6") : "" }}
                {{
                  row.shopfiyStatus == "partially_refunded" ? $t("orderCenter.tab.name7") : ""
                }}
                {{ row.shopfiyStatus == "unpaid" ? $t("orderCenter.tab.name8") : "" }}
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
          <TabPane :label="$t('orderCenter.tab.name5')" name="refunded">
            <Table :columns="columns" :data="data">
              <template slot-scope="{ row }" slot="confirmed">
               {{ row.shopfiyStatus == "authorized" ? $t("orderCenter.tab.name2") : "" }}
                {{ row.shopfiyStatus == "pending" ?  $t("orderCenter.tab.name3")  : "" }}
                {{ row.shopfiyStatus == "paid" ? $t("orderCenter.tab.name1") : "" }}
                {{ row.shopfiyStatus == "partially_paid" ? $t("orderCenter.tab.name4") : "" }}
                {{ row.shopfiyStatus == "refunded" ? $t("orderCenter.tab.name5") : "" }}
                {{ row.shopfiyStatus == "voided" ? $t("orderCenter.tab.name6") : "" }}
                {{
                  row.shopfiyStatus == "partially_refunded" ? $t("orderCenter.tab.name7") : ""
                }}
                {{ row.shopfiyStatus == "unpaid" ? $t("orderCenter.tab.name8") : "" }}
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
          <TabPane :label="$t('orderCenter.tab.name6')" name="voided">
            <Table :columns="columns" :data="data">
              <template slot-scope="{ row }" slot="confirmed">
                {{ row.shopfiyStatus == "authorized" ? $t("orderCenter.tab.name2") : "" }}
                {{ row.shopfiyStatus == "pending" ?  $t("orderCenter.tab.name3")  : "" }}
                {{ row.shopfiyStatus == "paid" ? $t("orderCenter.tab.name1") : "" }}
                {{ row.shopfiyStatus == "partially_paid" ? $t("orderCenter.tab.name4") : "" }}
                {{ row.shopfiyStatus == "refunded" ? $t("orderCenter.tab.name5") : "" }}
                {{ row.shopfiyStatus == "voided" ? $t("orderCenter.tab.name6") : "" }}
                {{
                  row.shopfiyStatus == "partially_refunded" ? $t("orderCenter.tab.name7") : ""
                }}
                {{ row.shopfiyStatus == "unpaid" ? $t("orderCenter.tab.name8") : "" }}
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
          <TabPane :label="$t('orderCenter.tab.name7')" name="partially_refunded">
            <Table :columns="columns" :data="data">
              <template slot-scope="{ row }" slot="confirmed">
                {{ row.shopfiyStatus == "authorized" ? $t("orderCenter.tab.name2") : "" }}
                {{ row.shopfiyStatus == "pending" ?  $t("orderCenter.tab.name3")  : "" }}
                {{ row.shopfiyStatus == "paid" ? $t("orderCenter.tab.name1") : "" }}
                {{ row.shopfiyStatus == "partially_paid" ? $t("orderCenter.tab.name4") : "" }}
                {{ row.shopfiyStatus == "refunded" ? $t("orderCenter.tab.name5") : "" }}
                {{ row.shopfiyStatus == "voided" ? $t("orderCenter.tab.name6") : "" }}
                {{
                  row.shopfiyStatus == "partially_refunded" ? $t("orderCenter.tab.name7") : ""
                }}
                {{ row.shopfiyStatus == "unpaid" ? $t("orderCenter.tab.name8") : "" }}
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
          <TabPane :label="$t('orderCenter.tab.name8')" name="unpaid">
            <Table :columns="columns" :data="data">
              <template slot-scope="{ row }" slot="confirmed">
                {{ row.shopfiyStatus == "authorized" ? $t("orderCenter.tab.name2") : "" }}
                {{ row.shopfiyStatus == "pending" ?  $t("orderCenter.tab.name3")  : "" }}
                {{ row.shopfiyStatus == "paid" ? $t("orderCenter.tab.name1") : "" }}
                {{ row.shopfiyStatus == "partially_paid" ? $t("orderCenter.tab.name4") : "" }}
                {{ row.shopfiyStatus == "refunded" ? $t("orderCenter.tab.name5") : "" }}
                {{ row.shopfiyStatus == "voided" ? $t("orderCenter.tab.name6") : "" }}
                {{
                  row.shopfiyStatus == "partially_refunded" ? $t("orderCenter.tab.name7") : ""
                }}
                {{ row.shopfiyStatus == "unpaid" ? $t("orderCenter.tab.name8") : "" }}
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
import { exportExcel } from "../../common/excelUtils";
export default {
  name: "Order",
  data() {
    return {
      value: "",
      model1: "",
      columns: [
        {
          type: "selection",
          width: 50,
          align: "center",
        },
        {
          title: this.$t("orderCenter.table.name1"),
          key: "shopfiyNumber",
          align: "center",
          width: 90,
        },
        {
          title: this.$t("orderCenter.table.name2"),
          slot: "confirmed",
          align: "center",
        },
        {
          title: this.$t("orderCenter.table.name3"),
          key: "productName",
          align: "center",
        },
        {
          title: this.$t("orderCenter.table.name4"),
          key: "productSuk",
          align: "center",
        },
        {
          title: this.$t("orderCenter.table.name5"),
          key: "productNumber",
          align: "center",
        },
        {
          title: this.$t("orderCenter.table.name6"),
          key: "productPrice",
          align: "center",
        },
        {
          title: this.$t("orderCenter.table.name7"),
          key: "orderPrice",
          align: "center",
        },
        {
          title: this.$t("orderCenter.table.name8"),
          key: "orderDiscount",
          align: "center",
        },
        {
          title: this.$t("orderCenter.table.name9"),
          key: "commisson",
          align: "center",
        },
        {
          title: this.$t("orderCenter.table.name10"),
          key: "customerId",
          align: "center",
        },
        {
          title: this.$t("orderCenter.table.name11"),
          key: "customerCountry",
          align: "center",
        },
        {
          title: this.$t("orderCenter.table.name12"),
          key: "createTime",
          align: "center",
        },
      ],
      data: [],
      pageNo: 1, //页数
      pageSize: 10, //条数
      total: 0, //总条数
      userinfo: {},
      form: {
        shopfiyStatus: "paid",
      },
      initColumn: [
        {
          title: this.$t("orderCenter.table.name1"),
          key: "shopfiyNumber",
          dataIndex: "shopfiyNumber",
        },
        {
          title: this.$t("orderCenter.table.name2"),
          key: "confirmed",
          dataIndex: "confirmed",
        },
        {
          title: this.$t("orderCenter.table.name3"),
          key: "productName",
          dataIndex: "productName",
        },
        {
          title: this.$t("orderCenter.table.name4"),
          key: "productSuk",
          dataIndex: "productSuk",
        },
        {
          title: this.$t("orderCenter.table.name5"),
          key: "productNumber",
          dataIndex: "productNumber",
        },
        {
          title: this.$t("orderCenter.table.name6"),
          key: "productPrice",
          dataIndex: "productPrice",
        },
        {
          title: this.$t("orderCenter.table.name7"),
          key: "orderPrice",
          dataIndex: "orderPrice",
        },
        {
          title: this.$t("orderCenter.table.name8"),
          key: "orderDiscount",
          dataIndex: "orderDiscount",
        },
        {
          title: this.$t("orderCenter.table.name9"),
          key: "commisson",
          dataIndex: "commisson",
        },
        {
          title: this.$t("orderCenter.table.name10"),
          key: "customerId",
          dataIndex: "customerId",
        },
        {
          title: this.$t("orderCenter.table.name11"),
          key: "customerCountry",
          dataIndex: "customerCountry",
        },
        {
          title: this.$t("orderCenter.table.name12"),
          key: "createTime",
          dataIndex: "createTime",
        },
      ],
    };
  },
  created() {
    this.initData();
    this.getUserToken();
  },
  computed: {
    userRole() {
      return JSON.parse(window.localStorage.getItem("userinfo")).userRole;
    },
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
          this.data = res.result.records;
          this.total = res.result.total;
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
    // 搜索
    handleSearch() {
      this.initData();
    },
    //重置
    handleReset() {
      this.form = {};
      this.initData();
    },
    handleTabs(ev) {
      this.pageNo = 1;
      this.pageSiz = 1;
      this.total = 0;
      this.data = [];
      this.form.shopfiyStatus = ev;
      this.initData();
      console.log(ev);
    },
     // 导出报表
    handleExport() {
      if (this.data.length == 0) {
        this.$Message.success("暂无数据导出");
        return;
      }
      let data = { pageNo: this.pageNo, pageSize: 999999999, ...this.form };
      this.$httpRequest({
        api: cozmoxOrdersList,
        data,
        success: (res) => {
          console.log(res);
          let arr = [];
          for (const re of res.result.records) {
            let tranType = "";
            switch (re.shopfiyStatus) {
              case "authorized":
                tranType = this.$t("orderCenter.tab.name2");
                break;
              case "pending":
                tranType = this.$t("orderCenter.tab.name3");
                break;
              case "paid":
                tranType = this.$t("orderCenter.tab.name1");
                break;
              case "partially_paid":
                tranType = this.$t("orderCenter.tab.name4");
                break;
              case "refunded":
                tranType = this.$t("orderCenter.tab.name5");
                break;
              case "voided":
                tranType = this.$t("orderCenter.tab.name6");
                break;
              case "partially_refunded":
               tranType = this.$t("orderCenter.tab.name7");
                break;
              case "unpaid":
               tranType = this.$t("orderCenter.tab.name8");
                break;
              default:
                break;
            }
            arr.push({
              shopfiyNumber: re.shopfiyNumber,
              confirmed: tranType,
              productName: re.productName,
              productSuk: re.productSuk,
              productNumber: re.productNumber,
              productPrice: re.productPrice,
              orderPrice: re.orderPrice,
              orderDiscount: re.orderDiscount,
              commisson: re.commisson,
              customerId: re.customerId,
              customerCountry: re.customerCountry,
              createTime: re.createTime,
            });
          }
          exportExcel(this.initColumn, arr, "订单中心" + ".xlsx");
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
