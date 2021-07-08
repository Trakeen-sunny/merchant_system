<template>
  <div class="acount">
    <!-- 标题一 -->
    <Row class="title">
      <Col span="12"><span>商品列表</span></Col>
      <Col span="12" class="right">
        <Dropdown>
          <Button type="info" class="button" style="margin-left: 0">
            批量修改
            <Icon type="ios-arrow-down"></Icon>
          </Button>
          <DropdownMenu slot="list">
            <DropdownItem style="text-align: left">上架</DropdownItem>
            <DropdownItem style="text-align: left">下架</DropdownItem>
            <DropdownItem style="text-align: left">修改平台分类</DropdownItem>
            <DropdownItem style="text-align: left">修改平台品牌</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Button type="info" class="button" ghost>导出表格</Button>
        <Button type="info" class="button" @click="handleProductAdd"
          >商品导入</Button
        >
      </Col>
    </Row>

    <!-- 搜索 -->
    <div class="search">
      <div>
        <span>商品关键词</span>
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
        <span>状态</span>
        <Select v-model="model1" size="large" clearable class="width">
          <Option :value="1">上架</Option>
          <Option :value="2">下架</Option>
        </Select>
      </div>
      <div>
        <span>平台分类</span>
        <Select v-model="model1" size="large" clearable class="width">
          <Option :value="1">Mobile Phones</Option>
          <Option :value="2">Appliances</Option>
          <Option :value="3">Computer & Electronics</Option>
          <Option :value="3">Industrial & Scientific</Option>
          <Option :value="3">Sports & Outdoors</Option>
          <Option :value="3">Smart Home</Option>
          <Option :value="3">Hobbies & Toys</Option>
          <Option :value="3">Pet Supplies</Option>
          <Option :value="3">Automotive</Option>
          <Option :value="3">Beauty</Option>
          <Option :value="3">Health & Wellness</Option>
          <Option :value="3">Home & Garden</Option>
          <Option :value="3">DIY & Handmade</Option>
          <Option :value="3">Consumer Electronics</Option>
          <Option :value="3">Apparel & Accessories</Option>
        </Select>
      </div>
      <div>
        <span>平台品牌</span>
        <Select v-model="model1" size="large" clearable class="width">
          <Option :value="1">MECOOL</Option>
          <Option :value="2">Creality 3D</Option>
          <Option :value="3">HIMO</Option>
          <Option :value="3">LANKELEISI</Option>
          <Option :value="3">NIUBILITY</Option>
          <Option :value="3">ONEBOT</Option>
          <Option :value="3">SAMEBIKE</Option>
          <Option :value="3">XIAOMI</Option>
          <Option :value="3">ELEPHONE</Option>
          <Option :value="3">SMART RAY</Option>
          <Option :value="3">360</Option>
          <Option :value="3">Dreame</Option>
          <Option :value="3">Oclean</Option>
          <Option :value="3">Roborock</Option>
          <Option :value="3">POCO</Option>
          <Option :value="3">XIAOMI MIJIA</Option>
          <Option :value="3">Kospet</Option>
          <Option :value="3">IMILAB</Option>
          <Option :value="3">MIBRO</Option>
          <Option :value="3">Blulory</Option>
          <Option :value="3">Amazfit</Option>
          <Option :value="3">Cubot</Option>
          <Option :value="3">Oyeet</Option>
          <Option :value="3">RedMagic</Option>
          <Option :value="3">ASUS</Option>
          <Option :value="3">CHUWI</Option>
          <Option :value="3">Lenovo</Option>
          <Option :value="3">HONOR</Option>
          <Option :value="3">INMIX</Option>
          <Option :value="3">LONGER</Option>
          <Option :value="3">EcoFlow</Option>
          <Option :value="3">Beelink</Option>
          <Option :value="3">We.Lock</Option>
          <Option :value="3">CoFANCY</Option>
          <Option :value="3">Comgrow</Option>
          <Option :value="3">SwitchBot</Option>
          <Option :value="3">Haylou</Option>
          <Option :value="3">Trouver</Option>
          <Option :value="3">Seven and Me</Option>
          <Option :value="3">Ortur</Option>
          <Option :value="3">MIDEA</Option>
        </Select>
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
          <img :src="row.image.src" style="width: 80px; height: 80px" />
        </template>
        <template slot-scope="{ row }" slot="position">
          {{ row.image.position }}
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <Button type="info" size="large" @click="details(row, index)"
            >查看</Button
          >
        </template>
      </Table>
      <Page :total="100" show-sizer class="page" />
    </div>
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
  </div>
</template>
<script>
import { goodsList } from "../../api/material";
export default {
  name: "Product",
  data() {
    return {
      modal1: true, // 弹框
      value: "",
      model1: "",
      columns: [
        {
          title: "图片",
          slot: "img",
          align: "center",
        },
        {
          title: "商品名称",
          key: "title",
          align: "center",
        },
        {
          title: "类目",
          key: "product_type",
          align: "center",
        },
        {
          title: "品牌",
          key: "vendor",
          align: "center",
        },
        {
          title: "售价",
          key: "address",
          align: "center",
        },
        {
          title: "折扣码",
          key: "address",
          align: "center",
        },
        {
          title: "佣金率",
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
          title: "商品状态",
          key: "status",
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
    };
  },
  created() {
    this.initData();
  },
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
          this.detailObj = this.data[0];
          console.log(this.data);
        },
      });
    },
    // 查看详情
    details(row, i) {
      this.detailObj = row;
      console.log(row, i);
      this.modal1 = true;
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
