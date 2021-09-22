<template>
  <div class="acount">
    <!-- 标题一 -->
    <Row class="title">
      <Col span="12"
        ><span>{{ $t("acount.title") }}</span></Col
      >
      <!-- <Col span="12" class="right">
        <Button type="info" class="button" @click="handleRecharge">{{
          $t("acount.recharge")
        }}</Button>
      </Col> -->
    </Row>

    <!--  时间 搜索 -->
    <!-- <div class="search table" style="margin-bottom: 30px; margin-top: 0">
      <ul>
        <li>{{ $t("common.searchTime7") }}</li>
        <li>{{ $t("common.searchTime8") }}</li>
        <li>{{ $t("common.searchTime9") }}</li>
        <li>{{ $t("common.searchTime10") }}</li>
        <li>{{ $t("common.searchTime11") }}</li>
        <li>{{ $t("common.searchTime12") }}</li>
      </ul>
      <div class="right">
        <span
          :class="timeIdx == 0 ? 'activeColor' : ''"
          @click="handleSelectTime(0, 0)"
          >{{ $t("common.searchTime4") }}</span
        >
        <span
          :class="timeIdx == 1 ? 'activeColor' : ''"
          @click="handleSelectTime(1, 6)"
          >{{ $t("common.searchTime5") }}</span
        >
        <div>
          <span
            :class="timeIdx == 2 ? 'activeColor' : ''"
            @click="handleSelectTime(2, 29)"
            >{{ $t("common.searchTime6") }}</span
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
        <Button type="info" ghost class="button" @click="handleExport">{{
          $t("common.exportPage")
        }}</Button>
      </div>
    </div> -->

    <div class="content">
      <div>
        <span class="num">${{ userRole==1?userinfo.totalFeePayWait || 0 : userinfo.totalFeeWait || 0 }}</span>
        <span class="title">{{ $t("acount.moneyLi1") }}</span>
      </div>
      <div>
        <span class="num">${{ userRole==1?userinfo.totalFeePay || 0 : userinfo.totalFee || 0 }}</span>
        <span class="title">{{ $t("acount.moneyLi2") }}</span>
      </div>
      <div>
        <span class="num">${{ userRole==1?(userinfo.totalFeePayWait + userinfo.totalFeePay) || 0 :(userinfo.totalFee + userinfo.totalFeeWait) || 0 }}</span>
        <span class="title">{{ $t("acount.moneyLi3") }}</span>
      </div>
    </div>

    <div class="content content1">
      <div>
        <span class="num">$0</span>
        <span class="title">{{ $t("acount.moneyLi4") }}</span>
      </div>
      <div>
        <span class="num">${{userinfo.balance || 0}}</span>
        <span class="title"
          ><span>{{ $t("acount.moneyLi5") }}</span>
          <!-- <Poptip
            word-wrap
            width="200"
            placement="bottom"
            :content="$t('acount.tip')"
          >
            <Icon type="md-list-box" color="#999" />
          </Poptip> -->
        </span>
      </div>
    </div>

    <!-- 搜索 -->
    <div class="search">
      <div>
        <span>{{ $t("acount.table.name1") }}</span>
        <Input v-model="form.waterNo" size="large"  class="width" />
      </div>
      <div>
        <span>{{ $t("acount.table.name2") }}</span>
        <Input v-model="form.taskNo" size="large"  class="width" />
      </div>
      <div>
        <span>{{ $t("acount.searchName3") }}</span>
        <Select v-model="form.tranType" size="large"  class="width">
          <Option value="">{{ $t("acount.selectSearch.name1") }}</Option>
          <Option :value="1" v-if="userRole!=2">{{ $t("acount.selectSearch.name2") }}</Option>
          <Option :value="2" v-if="userRole!=1">{{ $t("acount.selectSearch.name3") }}</Option>
          <Option :value="3" v-if="userRole!=2">{{ $t("acount.selectSearch.name4") }}</Option>
		  <Option :value="4" v-if="userRole!=2">{{ $t("acount.selectSearch.name5") }}</Option>
		  <Option :value="101" v-if="userRole!=2">{{ $t("acount.selectSearch.name101") }}</Option>
		  <Option :value="104" v-if="userRole!=2">{{ $t("acount.selectSearch.name104") }}</Option>
        </Select>
      </div>
      <div>
        <Button
          type="info"
          ghost
          class="button"
          @click="handleReset"
          size="large"
          >{{ $t("common.reset") }}</Button
        >
        <Button
          type="info"
          class="button"
          style="margin-left: 20px"
          size="large"
          @click="handleSearch"
          >{{ $t("common.search") }}</Button
        >
        <Button type="info" ghost class="button" @click="handleExport">{{
          $t("common.exportPage")
        }}</Button>
      </div>
    </div>

    <!-- 表格 -->
    <div class="table">
      <div class="title">
        <span class="left">{{ $t("acount.title1") }}</span>
      </div>
      <Table :columns="columns" :data="data">accountTotal
        <template slot-scope="{ row }" slot="tranType">
          {{ row.tranType == 1 ? $t("acount.selectSearch.name2") : "" }}
          {{ row.tranType == 2 ? $t("acount.selectSearch.name3") : "" }}
          {{ row.tranType == 3 ? $t("acount.selectSearch.name4") : "" }}
		  {{ row.tranType == 4 ? $t("acount.selectSearch.name5") : "" }}
		  {{ row.tranType == 101 ? $t("acount.selectSearch.name101") : "" }}
		  {{ row.tranType == 104 ? $t("acount.selectSearch.name104") : "" }}
        </template>
        <template slot-scope="{ row }" slot="accountTotal">
          {{row.accountTotal}}
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
    </div>
  </div>
</template>
<script>
import { acountList } from "../../api/acount";
import { getUsersByToken } from "../../api/index";
import { getTodayDate, getSevenDate } from "../../common/function";
import { exportExcel } from "../../common/excelUtils";

export default {
  name: "AcountDetail",
  data() {
    return {
      value: "",
      model1: "",
      form: {
        waterNo: "",
        taskNo: "",
        tranType: "",
      },
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center",
        },
        {
          title: this.$t("acount.table.name1"),
          key: "waterNo",
          align: "center",
        },
        {
          title: this.$t("acount.table.name5"),
          slot: "tranType",
          align: "center",
        },
        {
          title: this.$t("acount.table.name2"),
          key: "taskNo",
          align: "center",
        },
        {
          title: this.$t("acount.table.name3"),
          key: "tranTotal",
          align: "center",
        },
        {
          title: this.$t("acount.table.name4"),
          slot: "accountTotal",
          align: "center",
        },
        {
          title: this.$t("acount.table.name6"),
          key: "tranTime",
          align: "center",
        },
      ],
      data: [],
      pageNo: 1, //页数
      pageSize: 10, //条数
      total: 0, //总条数
      timeIdx: 0, // 默认时间选中
      dateTime: [],
      userinfo: {},
      initColumn: [
        {
          title: this.$t("acount.table.name1"),
          dataIndex: "waterNo",
          key: "waterNo",
        },
        {
          title: this.$t("acount.table.name5"),
          dataIndex: "tranType",
          key: "tranType",
        },
        {
          title: this.$t("acount.table.name2"),
          dataIndex: "taskNo",
          key: "taskNo",
        },
        {
          title: this.$t("acount.table.name3"),
          dataIndex: "tranTotal",
          key: "tranTotal",
        },
        {
          title: this.$t("acount.table.name4"),
          key: "accountTotal",
          dataIndex: "accountTotal",
        },
        {
          title: this.$t("acount.table.name6"),
          key: "tranTime",
          dataIndex: "tranTime",
        },
      ],
    };
  },
  computed:{
    balance(){
      return (this.userinfo.balance+'').replace(/-/,'')
    },
    userRole(){
      return JSON.parse(window.localStorage.getItem("userinfo")).userRole
    }
  },
  created() {
    this.initData();
    this.getUserToken();
  },
  methods: {
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
    // 导出报表
    handleExport() {
      if (this.data.length == 0) {
        this.$Message.success("暂无数据导出");
        return;
      }
      let data = { pageNo: this.pageNo, pageSize: 999999999, ...this.form };
      this.$httpRequest({
        api: acountList,
        data,
        success: (res) => {
          console.log(res);
          let arr = [];
          for (const re of res.result.records) {
            let tranType = "";
            switch (re.tranType) {
              case 1:
                tranType = this.$t("acount.selectSearch.name2");
                break;
              case 2:
                tranType = this.$t("acount.selectSearch.name3");
                break;
              case 3:
                tranType = this.$t("acount.selectSearch.name4");
                break;
			  case 4:
                tranType = this.$t("acount.selectSearch.name5");
                break;
              default:
                break;
            }
            arr.push({
              waterNo: re.waterNo,
              tranType: tranType,
              taskNo: re.taskNo,
              tranTotal: re.tranTotal,
              accountTotal: re.accountTotal,
              tranTime: re.tranTime,
            });
          }
          exportExcel(this.initColumn, arr, "accountcenter" + ".xlsx");
        },
      });
    },
    // 初始化数据
    initData() {
      let data = { pageNo: this.pageNo, pageSize: this.pageSize, ...this.form };
      this.$httpRequest({
        api: acountList,
        data,
        success: (res) => {
          console.log(res);
          this.data = res.result.records;
          this.total = res.result.total;
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
      this.form = {
        waterNo: "",
        taskNo: "",
        tranType: "",
      };
      this.initData();
    },
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

  .content1 {
    > div {
      width: calc(100% / 2);
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
        width: 195px;
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
.activeColor {
  color: #089444 !important;
  font-weight: bolder !important;
}
</style>
