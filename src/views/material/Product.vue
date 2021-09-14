<template>
  <div class="acount">
    <!-- 标题一 -->
    <Row class="title">
      <Col span="12"><span>商品列表</span></Col>
      <Col span="12" class="right">
        <Button type="info" class="button" ghost @click="handleExport"
          >导出报表</Button
        >
        <!-- <Button type="info" class="button" ghost>设置佣金</Button>
        <Button type="info" class="button" ghost>结束</Button>
        <Button type="info" class="button">开启</Button> -->
        <!-- <Button type="info" class="button" @click="handleProductAdd"
          >商品导入</Button
        > -->
      </Col>
    </Row>

    <!-- 搜索 -->
    <div class="search">
      <div>
        <span>商品名称</span>
        <Input v-model="form.shopfiyName" size="large" class="width" />
      </div>
      <div>
        <span>类目</span>
        <Input v-model="form.shopfiyCategory" size="large" class="width" />
      </div>
      <div>
        <span>推广状态</span>
        <Select v-model="form.promote" size="large" class="width">
          <Option :value="1">开启</Option>
          <Option :value="0">待开启</Option>
        </Select>
      </div>
      <div>
        <Button
          type="info"
          ghost
          class="button"
          size="large"
          @click="handleReset"
          >重置</Button
        >
        <Button type="info" class="button" size="large" @click="handleSearch"
          >查询</Button
        >
      </div>
    </div>

    <!-- 表格 -->
    <div class="table">
      <Table :columns="columns" :data="data">
        <template slot-scope="{ row }" slot="img">
          <img :src="row.shopfiyImg" style="width: 80px; height: 80px" />
        </template>
        <template slot-scope="{ row }" slot="promote">
          {{ row.promote == 0 ? "待开启" : "开启" }}
        </template>
        <template slot-scope="{ row }" slot="shopfiyCategorys">
          <span v-if="row.shopfiyCategoryIs == 1" style="color: green">{{
            row.shopfiyCategory
          }}</span>
          <span v-else style="color: blue">{{ row.shopfiyCategory }}</span>
        </template>
        <template slot-scope="{ row }" slot="time">
          {{ row.promoteStart }}-{{ row.promoteEnd }}
        </template>

        <template slot-scope="{ row, index }" slot="action">
          <Button
            type="info"
            @click="setStatus(row, index)"
            v-if="row.promote == 0"
            >开启</Button
          >
          <Button type="info" @click="setStatus(row, index)" v-else
            >结束</Button
          >
          <Button type="info" @click="setMoney(row, index)">设置佣金</Button>
          <Button
            type="info"
            v-if="row.shopfiyCategoryIs == 0"
            @click="setEdit(row, index)"
            >编辑</Button
          >
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
    <!-- 佣金设置 -->
    <Modal
      v-model="modal2"
      title="设置佣金"
      @on-ok="handleCommosion"
      width="500"
    >
      <Form ref="setCommision" :model="setCommision" :label-width="80">
        <FormItem label="已选中:">
          <span>{{ setCommision.shopfiyName }}</span>
        </FormItem>
        <FormItem label="佣金比例" prop="commisson">
          <Input
            v-model="setCommision.commisson"
            type="tel"
            @on-change="equalNum"
          >
            <span slot="append">%</span>
          </Input>
        </FormItem>
      </Form>
    </Modal>
    <!-- 编辑 -->
    <Modal
      v-model="modal3"
      title="编辑"
      @on-ok="handleShopfiyCategory"
      width="500"
    >
      <Form :model="setCommision" :label-width="80">
        <FormItem label="商品名称">
          <Input
            v-model="setCommision.shopfiyName"
            placeholder=""
            readonly
          ></Input>
        </FormItem>
        <FormItem label="类目" prop="shopfiyCategory">
          <Input
            v-model="setCommision.shopfiyCategory"
            size="large"
            class="width"
          />
        </FormItem>
      </Form>
    </Modal>
    <!-- 开启 -->
    <Modal v-model="modal4" title="开启" @on-ok="handleOpen" width="500">
      <Form :model="setCommision" :label-width="80">
        <FormItem label="推广有效期:" prop="number">
          <DatePicker
            type="datetimerange"
            format="yyyy-MM-dd HH:mm:ss"
            style="width: 300px"
            @on-change="handleChange"
            @on-ok="handleOk"
            @on-clear="handleClear"
            :value="setCommision.time"
          ></DatePicker>
        </FormItem>
        <!-- <FormItem label="折扣码:">
          <Input
            v-model="setCommision.discountCode"
            type="tel"
            style="width: 300px"
            @on-change="equalNum"
          />
        </FormItem> -->
        <FormItem label="" :v-else="10">
          <div>
            注:如已选择推广有效期，则系统自动根据截止时间结束，无法手动结束。
          </div>
        </FormItem>
      </Form>
    </Modal>
    <!-- 结束 -->
    <Modal v-model="modal5" width="400" title="结束" @on-ok="handleFinish">
      <span>确定要结束吗？</span>
    </Modal>
  </div>
</template>
<script>
import { exportExcel } from "../../common/excelUtils";
import {
  cozmoxGoodsList,
  setCommission,
  setShopfiyCategory,
  setClosure,
  setOpen,
} from "../../api/material";
export default {
  name: "Product",
  data() {
    return {
      modal2: false,
      modal3: false,
      modal4: false,
      modal5: false,
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center",
        },
        {
          title: "商品图片",
          slot: "img",
          align: "center",
        },
        {
          title: "商品名称",
          key: "shopfiyName",
          align: "center",
        },
        {
          title: "推广状态",
          slot: "promote",
          align: "center",
          width: 90,
        },
        {
          title: "类目",
          slot: "shopfiyCategorys",
          align: "center",
          width: 90,
        },
        {
          title: "售价($)",
          key: "price",
          align: "center",
          width: 90,
        },
        {
          title: "折扣码",
          key: "discountCode",
          align: "center",
          width: 90,
        },
        {
          title: "佣金率(%)",
          key: "commisson",
          align: "center",
          width: 100,
        },
        {
          title: "推广有效期",
          slot: "time",
          align: "center",
        },
        {
          title: "操作",
          slot: "action",
          align: "center",
        },
      ],
      data: [],
      pageNo: 1, //页数
      pageSize: 10, //条数
      total: 0, //总条数
      form: {},
      dateTime: [],
      setCommision: {
        commisson: 0,
      },
      initColumn: [
        {
          title: "商品图片",
          key: "img",
          dataIndex: "img",
        },
        {
          title: "商品名称",
          key: "shopfiyName",
          dataIndex: "center",
        },
        {
          title: "推广状态",
          key: "promote",
          dataIndex: "promote",
        },
        {
          title: "类目",
          key: "shopfiyCategorys",
          dataIndex: "shopfiyCategorys",
        },
        {
          title: "售价($)",
          key: "price",
          dataIndex: "price",
        },
        {
          title: "折扣码",
          key: "discountCode",
          dataIndex: "discountCode",
        },
        {
          title: "佣金率(%)",
          key: "commisson",
          dataIndex: "commisson",
        },
        {
          title: "推广有效期",
          key: "time",
          dataIndex: "time",
        },
      ],
    };
  },
  created() {
    this.initData();
  },
  mounted() {},
  methods: {
    // 导出报表
    handleExport() {
      if (this.data.length == 0) {
        this.$Message.success("暂无数据导出");
        return;
      }
      let data = { pageNo: this.pageNo, pageSize: 999999999, ...this.form };
      this.$httpRequest({
        api: cozmoxGoodsList,
        data,
        success: (res) => {
          console.log(res);
          let arr = [];
          for (const re of res.result.records) {
            arr.push({
              img: re.shopfiyImg,
              shopfiyName: re.shopfiyName,
              promote: re.promote == 0 ? "待开启" : "开启",
              shopfiyCategorys: re.shopfiyCategory,
              price: re.price,
              discountCode: re.discountCode,
              commisson: re.commisson,
              time: re.promoteStart + "-" + re.promoteEnd,
            });
          }
          exportExcel(this.initColumn, arr, "商品管理" + ".xlsx");
        },
      });
    },
    handleProductAdd() {
      this.$router.push({ name: "ProductAdd" });
    },
    // 初始化数据
    initData() {
      let data = { pageNo: this.pageNo, pageSize: this.pageSize, ...this.form };
      this.$httpRequest({
        api: cozmoxGoodsList,
        data,
        success: (res) => {
          console.log(res);
          this.data = res.result.records;
          this.total = res.result.total;
        },
      });
    },
    // 设置佣金
    setMoney(row) {
      row.commisson = row.commisson == null ? 0 : row.commisson;
      this.modal2 = true;
      this.setCommision = row;
    },
    // 设置佣金
    handleCommosion() {
      if (this.setCommision.commisson < 0) {
        this.$Message.info("佣金不可为负数!");
        return false;
      }
      this.$httpRequest({
        api: setCommission,
        data: {
          commission: this.setCommision.commisson,
          goodId: this.setCommision.shopfiyId,
          goodName: this.setCommision.shopfiyName,
        },
        success: (res) => {
          console.log(res);
          this.modal2 = false;
          this.$Message.success(res.message);
          this.initData();
        },
      });
    },
    // 设置开启关闭状态
    setStatus(row) {
      console.log(row);
      row.commisson = row.commisson == null ? 0 : row.commisson;
      this.setCommision = row;
      this.setCommision.time = [row.promoteStart, row.promoteEnd];
      if (row.promote == 1) {
        this.modal5 = true;
        return;
      }
      this.modal4 = true;
    },
    // 结束
    handleFinish() {
      this.$httpRequest({
        api: setClosure,
        data: {
          id: this.setCommision.id,
        },
        success: (res) => {
          console.log(res);
          this.modal5 = false;
          this.$Message.success(res.message);
          this.initData();
        },
      });
    },
    // 开启
    handleOpen() {
      this.$httpRequest({
        api: setOpen,
        data: {
          id: this.setCommision.id,
          startTime: this.setCommision.startTime,
          endTime: this.setCommision.endTime,
          commisson: this.setCommision.commisson,
        },
        success: (res) => {
          console.log(res);
          this.modal4 = false;
          this.$Message.success(res.message);
          this.initData();
        },
      });
    },
    // 编辑
    setEdit(row) {
      this.setCommision = row;
      this.modal3 = true;
    },
    // 编辑类目
    handleShopfiyCategory() {
      this.$httpRequest({
        api: setShopfiyCategory,
        data: {
          id: this.setCommision.id,
          shopfiyCategory: this.setCommision.shopfiyCategory,
        },
        success: (res) => {
          console.log(res);
          this.modal3 = false;
          this.$Message.success(res.message);
          this.initData();
        },
      });
    },
    // 改变页数
    changePage(page) {
      this.pageNo = page;
      this.initData();
    },
    // 改变条数
    changeSize(size) {
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
    // 时间组件搜索
    handleChange(ev) {
      console.log(ev);
      this.dateTime = ev;
    },
    handleOk() {
      if (this.modal4) {
        this.setCommision.startTime = this.dateTime[0];
        this.setCommision.endTime = this.dateTime[1];
        return;
      }
      this.form.promoteStart = this.dateTime[0];
      this.form.promoteEnd = this.dateTime[1];
    },
    handleClear() {
      if (this.modal4) {
        delete this.setCommision.startTime;
        delete this.setCommision.endTime;
        return;
      }
      delete this.form.promoteStart;
      delete this.form.promoteEnd;
    },
    equalNum(ev) {
      console.log(ev);
      if (this.setCommision.commisson < 0) {
        this.setCommision.commisson = 0;
        this.$Message.success("不能小于0!");
      }
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
        margin-left: 20px;
      }
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
  }

  .table {
    background-color: #ffffff;
    margin-top: 30px;
    border-radius: 4px;
    .page {
      text-align: right;
      margin-top: 30px;
      padding-bottom: 30px;
    }
  }
}
</style>
