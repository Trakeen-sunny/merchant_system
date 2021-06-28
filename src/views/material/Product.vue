<template>
  <div class="acount">
    <!-- 标题一 -->
    <Row class="title">
      <Col span="12"><span>商品列表</span></Col>
      <Col span="12" class="right">
      <Dropdown>
        <Button type="info" class="button" style="margin-left:0">
            批量修改
            <Icon type="ios-arrow-down"></Icon>
        </Button>
        <DropdownMenu slot="list">
            <DropdownItem style="text-align:left;">上架</DropdownItem>
            <DropdownItem style="text-align:left;">下架</DropdownItem>
            <DropdownItem style="text-align:left;">修改平台分类</DropdownItem>
            <DropdownItem style="text-align:left;">修改平台品牌</DropdownItem>
        </DropdownMenu>
    </Dropdown>
        <Button type="info" class="button" ghost>导出表格</Button>
        <Button type="info" class="button" @click="handleProductAdd">商品导入</Button>
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
      <Table :columns="columns" :data="data"></Table>
      <Page :total="100" show-sizer class="page"/>
    </div>
  </div>
</template>
<script>
export default {
  name: "Product",
  data() {
    return {
      value: "",
      model1: "",
      columns:[
        {
          title: "图片",
          key: "name",
        },
        {
          title: "商品名称",
          key: "age",
        },
        {
          title: "类目",
          key: "address",
        },
        {
          title: "品牌",
          key: "address",
        },
        {
          title: "售价",
          key: "address",
        },
        {
          title: "折扣码",
          key: "address",
        },
        {
          title: "佣金率",
          key: "address",
        },
        {
          title: "发货仓",
          key: "address",
        },
        {
          title: "商品状态",
          key: "address",
        },
        {
          title: "操作",
          key: "address",
        },
      ],
      data:[]
    };
  },
  methods:{
    handleProductAdd(){
      this.$router.push({name:'ProductAdd'})
    }
  }
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
    .page{
      text-align: right;
      margin-top: 30px;
      padding-bottom: 30px;
    }
  }
}
</style>
