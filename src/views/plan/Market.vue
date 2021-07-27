<template>
  <div class="acount">
    <!-- 标题一 -->
    <div class="content">
      <div>
        <span class="num">{{ pendingnum }}</span>
        <span class="title">{{ $t("plans.minTitle1") }}</span>
      </div>
      <div>
        <span class="num">{{ endingnum }}</span>
        <span class="title">{{ $t("plans.minTitle2") }}</span>
      </div>
    </div>

    <!-- 搜索 -->
    <div class="search">
      <div>
        <span>{{ $t("plans.search.name1") }}</span>
        <Input v-model="form.id" size="large" clearable class="width" />
      </div>
      <div>
        <span>{{ $t("plans.search.name2") }}</span>
        <Input v-model="form.goodName" size="large" clearable class="width" />
      </div>
      <div>
        <span>{{ $t("plans.search.name3") }}</span>
        <Select v-model="form.status" size="large" clearable class="width">
          <Option value="">{{ $t("plans.select.name1") }}</Option>
          <Option :value="0">{{ $t("plans.select.name2") }}</Option>
          <Option :value="1">{{ $t("plans.select.name3") }}</Option>
        </Select>
      </div>
      <div>
        <Button
          type="info"
          ghost
          class="button"
          size="large"
          @click="handleReset"
          >{{ $t("common.reset") }}</Button
        >
        <Button type="info" class="button" size="large" @click="handleSearch">{{
          $t("common.search")
        }}</Button>
      </div>
    </div>

    <!-- 表格 -->
    <div class="table">
      <div class="title">
        <span class="left">{{ $t("plans.title") }}</span>
        <div class="right">
          <span>{{ $t("common.searchTime1") }}</span>
          <span>{{ $t("common.searchTime2") }}</span>
          <div>
            <span>{{ $t("common.searchTime3") }}</span>
            <DatePicker
              type="datetimerange"
              format="yyyy-MM-dd"
              style="width: 200px"
            ></DatePicker>
          </div>
          <Button type="info" ghost class="button">{{
            $t("common.exportPage")
          }}</Button>
        </div>
      </div>
      <Table :columns="columns" :data="data">
        <template slot-scope="{ row }" slot="status">
          <span v-if="row.status == 0" style="color: blue">{{
            $t("plans.status.name1")
          }}</span>
          <span v-else style="color: red">{{ $t("plans.status.name2") }}</span>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <Button type="info" @click="details(row, index)">{{
            $t("plans.button.detail")
          }}</Button>
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

    <!-- 详情 -->
    <Modal :title="$t('plans.modal.title')" v-model="modal" width="600">
      <div class="content_detail">
        <Form :model="detail" label-position="left" :label-width="100">
          <FormItem :label="$t('plans.modal.formItem1')">
            <Input v-model="detail.input1"></Input>
          </FormItem>
          <FormItem :label="$t('plans.modal.formItem2')">
            <Input v-model="detail.input2"></Input>
          </FormItem>
        </Form>
      </div>
      <div slot="footer">
        <Button type="primary" size="large" ghost>{{
          $t("common.cancel")
        }}</Button>
        <Button type="primary" size="large">{{ $t("common.copy") }}</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
import { plansList, plansDetails } from "../../api/plan";
export default {
  name: "Market",
  data() {
    return {
      modal: false,
      form: {
        id: "",
        status: "",
        goodName: "",
      },
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center",
        },
        {
          title: this.$t("plans.table.name1"),
          key: "id",
          align: "center",
        },
        {
          title: this.$t("plans.table.name2"),
          key: "goodName",
          align: "center",
        },
        {
          title: this.$t("plans.table.name3"),
          slot: "status",
          align: "center",
        },
        {
          title: this.$t("plans.table.name4"),
          key: "commission",
          align: "center",
        },
        {
          title: this.$t("plans.table.name5"),
          key: "payCount",
          align: "center",
        },
        {
          title: this.$t("plans.table.name6"),
          key: "commissionTotal",
          align: "center",
        },
        {
          title: this.$t("plans.table.name7"),
          key: "createTime",
          align: "center",
          width: 150,
        },
        {
          title: this.$t("plans.table.name8"),
          slot: "action",
          align: "center",
        },
      ],
      data: [],
      pageNo: 1, //页数
      pageSize: 10, //条数
      total: 0, //总条数
      detail: {}, //详情
      pendingnum: 0, //进行中计划数
      endingnum: 0, //已结束计划数
    };
  },
  created() {
    this.initData();
    this.pendingNum();
    this.endingNum();
  },
  methods: {
    // 初始化数据
    initData() {
      let data = { pageNo: this.pageNo, pageSize: this.pageSize, ...this.form };
      this.$httpRequest({
        api: plansList,
        data,
        success: (res) => {
          console.log(res);
          this.data = res.result.records;
          this.total = res.result.total;
        },
      });
    },
    // 进行中计划数
    pendingNum() {
      let data = { pageNo: 1, pageSize: 999999999, status: 0 };
      this.$httpRequest({
        api: plansList,
        data,
        success: (res) => {
          this.pendingnum = res.result.records.length;
        },
      });
    },
    // 已结束计划数
    endingNum() {
      let data = { pageNo: 1, pageSize: 999999999, status: 1 };
      this.$httpRequest({
        api: plansList,
        data,
        success: (res) => {
          this.endingnum = res.result.records.length;
        },
      });
    },
    // 查看详情
    details(row) {
      console.log(row);
      this.$httpRequest({
        api: plansDetails,
        data: { id: row.id },
        success: (res) => {
          console.log(res);
        },
      });
      this.detail = row;
      this.modal = true;
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
        id: "",
        status: "",
        goodName: "",
      };
      this.initData();
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
</style>
