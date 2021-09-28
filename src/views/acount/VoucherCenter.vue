<template>
  <div class="acount">
    <!-- 标题一 -->
    <Row class="title">
      <Col span="12"><span>充值列表</span></Col>
      <Col span="12" class="right">
        <Button type="info" class="button" ghost @click="handleExport"
          >导出报表</Button
        >
      </Col>
    </Row>

    <!-- 搜索 -->
    <div class="search">
      <div>
        <span>商家账户</span>
        <Input v-model="form.email" size="large" class="width" />
      </div>
      <div>
        <span>联系邮箱</span>
        <Input v-model="form.emailShop" size="large" class="width" />
      </div>
      <div>
        <span>店铺名称</span>
        <Input v-model="form.shopName" size="large" class="width" />
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
        <template slot-scope="{ row, index }" slot="action">
          <Button type="info" @click="setVouvher(row, index)">充值</Button>
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

    <!-- 充值 -->
    <Modal
      v-model="modal2"
      title="充值"
      @on-ok="handleVouvher"
      :mask-closable="false"
      width="500"
    >
      <Form ref="details" :model="details" :label-width="80">
        <FormItem label="原有余额:">
          <span>{{ details.balance }}</span>
        </FormItem>
        <FormItem label="类型:">
          <Select v-model="details.tranType" size="large" class="width">
            <Option value="">请选择</Option>
            <Option :value="3">增加</Option>
            <Option :value="103">减少</Option>
          </Select>
        </FormItem>
        <FormItem label="金额:" prop="commisson">
          <Input v-model="details.amount" type="tel">
            <span slot="append">$</span>
          </Input>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button
          type="info"
          ghost
          class="button"
          size="large"
          @click="handleCancel"
          >取消</Button
        >
        <Button type="info" class="button" size="large" @click="handleVouvher"
          >确认</Button
        >
      </div>
    </Modal>
  </div>
</template>
<script>
import { exportExcel } from "../../common/excelUtils";
import {
  usersList,
  usersListLike,
  usersReCharge,
} from "../../api/collaborator";
export default {
  name: "VoucherCenter",
  data() {
    return {
      modal2: false,
      columns: [
        {
          type: "selection",
          align: "center",
        },
        {
          title: "商家账户",
          key: "email",
          align: "center",
        },
        {
          title: "店铺名称",
          key: "shopName",
          align: "center",
        },
        {
          title: "联系邮箱",
          key: "emailShop",
          align: "center",
        },
        {
          title: "账户余额($)",
          key: "balance",
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
      details: {
        tranType: 3,
      },
      initColumn: [
        {
          title: "商家账户",
          key: "email",
          dataIndex: "email",
        },
        {
          title: "账户余额($)",
          key: "balance",
          dataIndex: "balance",
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
        api: usersList,
        data,
        success: (res) => {
          let arr = [];
          for (const re of res.result.records) {
            arr.push({
              email: re.email,
              balance: re.balance,
            });
          }
          exportExcel(this.initColumn, arr, "充值中心" + ".xlsx");
        },
      });
    },
    // 初始化数据
    initData() {
      let data = { pageNo: this.pageNo, pageSize: this.pageSize, ...this.form };
      this.$httpRequest({
        api: usersListLike,
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
    // 充值
    setVouvher(row) {
      console.log(row);
      this.modal2 = true;
      this.details = row;
    },
    handleCancel() {
      this.modal2 = false;
    },
    handleVouvher() {
      if (!this.details.tranType) {
        this.$Message.warning("请选择类型");
        return;
      }
      if (!this.details.amount) {
        this.$Message.warning("请输入金额");
        return;
      }
      this.$httpRequest({
        api: usersReCharge,
        data: {
          amount: Number(this.details.amount),
          tranType: this.details.tranType,
          userId: this.details.id,
        },
        success: (res) => {
          console.log(res);
          if (res.code == 0) {
            this.$Message.success("充值成功!");
            this.initData();
            this.modal2 = false;
          }
        },
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
