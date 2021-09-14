<template>
  <div class="acount">

    <!-- 标题一 -->
    <Row class="title">
      <Col span="12"><span>优惠券</span></Col>
      <Col span="12" class="right">
      <Dropdown>
        <Button type="info" class="button" style="margin-left:0" ghost>
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
        <Button type="info" class="button" @click="couponAdd">添加优惠券</Button>
      </Col>
    </Row>

    <!-- 搜索 -->
    <div class="search">
      <div>
        <span>折扣码</span>
        <Input v-model="value" size="large"  class="width" />
      </div>
      <div>
        <span>类型</span>
        <Select v-model="model1" size="large"  class="width">
          <Option :value="1">1</Option>
          <Option :value="2">4</Option>
          <Option :value="3">5</Option>
        </Select>
      </div>
      <div>
        <span>优惠券名称</span>
        <Input v-model="value" size="large"  class="width" />
      </div>
      <div>
        <span>有效期</span>
        <DatePicker
              type="datetimerange"
              format="yyyy-MM-dd"
              class="width" 
            ></DatePicker>
      </div>
      <div>
        <span>状态</span>
        <Select v-model="model1" size="large"  class="width">
          <Option :value="1">1</Option>
          <Option :value="2">4</Option>
          <Option :value="3">5</Option>
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
  name: "Coupon",
  data() {
    return {
      value: "",
      model1: "",
      columns:[
        {
          title: "ID",
          key: "name",
        },
        {
          title: "优惠券名称",
          key: "age",
        },
        {
          title: "折扣码",
          key: "address",
        },
        {
          title: "类型",
          key: "address",
        },
        {
          title: "优惠券金额",
          key: "address",
        },
        {
          title: "简介说明",
          key: "address",
        },
        {
          title: "有效日期",
          key: "address",
        },
        {
          title: "状态",
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
    couponAdd(){
      this.$router.push({name:'CouponAdd'})
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
    margin-bottom: 30px;
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
