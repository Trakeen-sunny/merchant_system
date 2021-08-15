<template>
  <div class="acount">
    <!-- 标题一 -->
    <Row class="title">
      <Col span="12"><span>商品列表</span></Col>
      <Col span="12" class="right">
        <Button type="info" class="button" ghost>导出</Button>
        <Button type="info" class="button" ghost>设置佣金</Button>
        <Button type="info" class="button" ghost>结束</Button>
        <Button type="info" class="button">开启</Button>
        <!-- <Button type="info" class="button" @click="handleProductAdd"
          >商品导入</Button
        > -->
      </Col>
    </Row>

    <!-- 搜索 -->
    <div class="search">
      <div>
        <span>商品名称</span>
        <Input v-model="value" size="large" clearable class="width" />
      </div>
      <div>
        <span>发货仓</span>
        <Select v-model="model1" size="large" clearable class="width">
          <Option :value="1">1</Option>
          <Option :value="2">4</Option>
          <Option :value="3">5</Option>
        </Select>
      </div>
      <div>
        <span>类目</span>
        <Select v-model="model1" size="large" clearable class="width">
          <Option :value="1">1</Option>
          <Option :value="2">4</Option>
          <Option :value="3">5</Option>
        </Select>
      </div>
      <div>
        <span>推广状态</span>
        <Select v-model="model1" size="large" clearable class="width">
          <Option :value="1">开启</Option>
          <Option :value="2">结束</Option>
        </Select>
      </div>
      <div>
        <span>推广有效期</span>
        <DatePicker
          type="datetime"
          format="yyyy-MM-dd"
          style="width: 200px"
        ></DatePicker>
      </div>
      <div>
        <Button type="info" ghost class="button" size="large">重置</Button>
        <Button type="info" class="button" size="large">查询</Button>
      </div>
    </div>

    <!-- 表格 -->
    <div class="table">
      <Table :columns="columns" :data="data">
        <template slot-scope="{ row }" slot="img">
          <img
            v-if="row.image"
            :src="row.image.src"
            style="width: 80px; height: 80px"
          />
        </template>
        <template slot-scope="{ row }" slot="position">
          {{ row.image ? row.image.position : "" }}
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <Button type="info" @click="details(row, index)">查看</Button>
          <Button type="info" @click="setEdit(row, index)">编辑</Button>
          <Button type="info" @click="setMoney(row, index)">设置佣金</Button>
          <Button type="info" @click="setStatus(row, index)">开启</Button>
        </template>
      </Table>
      <Page :total="100" show-sizer class="page" />
    </div>
    <!-- 查看详情 -->
    <Modal v-model="modal1" title="查看" width="1200">
      <Form
        :model="detailObj"
        label-position="right"
        :label-width="90"
        :inline="true"
      >
        <h3>信息</h3>
        <Row>
          <Col span="8">
            <FormItem label="商品名称:">
              <span>{{ detailObj.title }}</span>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="类目:">
              <span>{{ detailObj.product_type }}</span>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="品牌:">
              <span>{{ detailObj.vendor }}</span>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="描述:">
              <span>{{ detailObj.body_html }}</span>
            </FormItem>
          </Col>
        </Row>
        <h3>规格</h3>
        <Row>
          <Col span="24" v-for="(item, i) in detailObj.options" :key="i">
            <FormItem :label="item.name + ':'">
              <Tag
                color="default"
                v-for="(itm, idx) in item.values"
                :key="idx"
                >{{ itm }}</Tag
              >
            </FormItem>
            <FormItem label="position:">
              <Tag color="default">{{ item.position }}</Tag>
            </FormItem>
          </Col>
        </Row>
        <h3>规格匹配</h3>
        <Table :columns="columns1" :data="detailObj.variants">
          <template slot-scope="{ row }" slot="weight">
            {{ row.weight + row.weight_unit }}
          </template>
        </Table>
      </Form>
      <div slot="footer">
        <Button type="info" size="large" @click="ok">关闭</Button>
      </div>
    </Modal>
    <!-- 佣金设置 -->
    <Modal
      v-model="modal2"
      title="设置佣金"
      @on-ok="handleCommosion"
      width="500"
    >
      <Form ref="setCommision" :model="setCommision" :label-width="80">
        <FormItem label="已选中:">
          <span>{{ setCommision.title }}</span>
        </FormItem>
        <FormItem label="佣金比例" prop="number">
          <Input v-model="setCommision.number" type="number">
            <span slot="append">$</span>
          </Input>
        </FormItem>
      </Form>
    </Modal>
    <!-- 编辑 -->
    <Modal
      v-model="modal3"
      title="编辑"
      @on-ok="ok"
      @on-cancel="cancel"
      width="500"
    >
      <Form ref="formValidate" :model="formValidate3" :label-width="80">
        <FormItem label="商品名称">
          <Input v-model="formValidate3.name" placeholder=""></Input>
        </FormItem>
        <FormItem label="类目" prop="city">
          <Select v-model="formValidate3.city" placeholder="Select your city">
            <Option value="beijing">服装</Option>
            <Option value="shanghai">服装1</Option>
            <Option value="shenzhen">服装3</Option>
          </Select>
        </FormItem>
      </Form>
    </Modal>
    <!-- 开启 -->
    <Modal
      v-model="modal4"
      title="开启"
      @on-ok="ok"
      @on-cancel="cancel"
      width="500"
    >
      <Form ref="formValidate" :model="formValidate" :label-width="80">
        <FormItem label="已选中:">
          <span>纯棉短袖、牛仔裤</span>
        </FormItem>
        <FormItem label="推广有效期:" prop="number">
          <DatePicker type="date" placeholder=""></DatePicker>
        </FormItem>
        <FormItem label="" :v-else="10">
          <div>
            注:如已选择推广有效期，则系统自动根据截止时间结束，无法手动结束。
          </div>
        </FormItem>
      </Form>
    </Modal>
    <Modal v-model="modal5" title="结束" @on-ok="ok" @on-cancel="cancel">
      <span>已选择11个商品，确定要结束吗？</span>
    </Modal>
  </div>
</template>
<script>
import { goodsList, setCommission } from "../../api/material";
export default {
  name: "Product",
  data() {
    return {
      modal1: false, // 弹框
      modal2: false,
      modal3: false,
      modal4: false,
      modal5: false,
      formValidate: {
        number: 0,
      },
      formValidate3: {
        name: 1111,
      },
      value: "",
      model1: "",
      columns: [
        {
          type: "selection",
          width: 40,
          align: "center",
        },
        {
          title: "商品图片",
          slot: "img",
          align: "center",
        },
        {
          title: "商品名称",
          key: "title",
          align: "center",
        },
        {
          title: "推广状态",
          key: "status",
          align: "center",
        },
        {
          title: "类目",
          key: "product_type",
          align: "center",
        },
        {
          title: "售价($)",
          key: "price",
          align: "center",
        },
        {
          title: "折扣码",
          key: "address",
          align: "center",
        },
        {
          title: "佣金率(%)",
          key: "address",
          align: "center",
        },
        {
          title: "发货仓",
          key: "address",
          align: "center",
          slot: "position",
        },
        {
          title: "推广有效期",
          key: "time",
          align: "center",
        },
        {
          title: "操作",
          slot: "action",
          align: "center",
        },
      ],
      data: [],
      detailObj: {},
      columns1: [
        {
          title: "title",
          key: "title",
          align: "center",
        },
        {
          title: "weight",
          slot: "weight",
          align: "center",
        },
        {
          title: "price",
          key: "price",
          align: "center",
        },
        {
          title: "position",
          key: "position",
          align: "center",
        },
        {
          title: "inventory_management",
          key: "inventory_management",
          align: "center",
        },
        {
          title: "inventory_policy",
          key: "inventory_policy",
          align: "center",
        },
        {
          title: "inventory_quantity",
          key: "inventory_quantity",
          align: "center",
        },
        {
          title: "sku",
          key: "sku",
          align: "center",
        },
        {
          title: "barcode",
          key: "barcode",
          align: "center",
        },
        {
          title: "fulfillment_service",
          key: "fulfillment_service",
          align: "center",
        },
        {
          title: "grams",
          key: "grams",
          align: "center",
        },
      ],
      setCommision: {
        number: 0,
      }, //设置佣金
    };
  },
  created() {
    this.initData();
  },
  mounted() {},
  methods: {
    handleProductAdd() {
      this.$router.push({ name: "ProductAdd" });
    },
    // 初始化数据
    initData() {
      this.$httpRequest({
        api: goodsList,
        data: {},
        success: (res) => {
          console.log(res);
          this.data = res.result.prodList;
          console.log(this.data);
        },
      });
    },
    // 查看详情
    details(row) {
      this.detailObj = row;
      this.modal1 = true;
    },
    // 设置佣金
    setMoney(row) {
      console.log(row);
      row.number = 0;
      this.modal2 = true;
      this.setCommision = row;
    },
    // 设置佣金
    handleCommosion() {
      this.$httpRequest({
        api: setCommission,
        data: {
          commission: this.setCommision.number,
          goodId: this.setCommision.id,
          goodName: this.setCommision.title,
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
    setStatus() {
      this.modal4 = true;
    },
    // 编辑
    setEdit() {
      this.modal3 = true;
    },
    ok() {},
    cancel() {},
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
