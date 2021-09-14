<template>
  <div class="acount">
    <!-- 标题一 -->
    <Row class="title">
      <Col span="12"><span>新增优惠券</span></Col>
      <Col span="12" class="right">
        <Button type="info" class="button" @click="handleRecharge">返回</Button>
      </Col>
    </Row>

    <!-- 搜索 -->
    <div class="search">
      <div>
        <span>折扣码</span>
        <Select v-model="model1" size="large"  class="width">
          <Option :value="1">1</Option>
          <Option :value="2">4</Option>
          <Option :value="3">5</Option>
        </Select>
      </div>
    </div>

    <!-- 表格 -->
    <div class="table">
      <div class="title" style="border-bottom: 1px solid #e0e0e0">
        <span class="left">优惠券信息</span>
      </div>
      <div style="padding: 20px">
        <Form :model="formTop" :label-width="100">
          <FormItem label="折扣码">
            <span></span>
          </FormItem>
          <FormItem label="类型">
            <span></span>
          </FormItem>
          <FormItem label="优惠金额">
            <span></span>
          </FormItem>
          <FormItem label="发布时间">
            <span></span>
          </FormItem>
          <FormItem label="开始时间">
            <span></span>
          </FormItem>
          <FormItem label="结束时间">
            <span></span>
          </FormItem>
          <FormItem label="适用于">
            <span></span>
          </FormItem>
          <FormItem label="最低要求">
            <span></span>
          </FormItem>
          <FormItem label="适用客户">
            <span></span>
          </FormItem>
          <FormItem label="限制条件">
            <span></span>
          </FormItem>
          <FormItem label="链接">
            <Input
              v-model="formTop.input1"
              placeholder="请输入获取优惠券之后需要调整的产品或店铺页面"
            ></Input>
          </FormItem>
          <FormItem label="链接">
            <Input
              v-model="formTop.input1"
              placeholder="请输入获取优惠券之后需要调整的产品或店铺页面"
            ></Input>
          </FormItem>
          <FormItem label="优惠券名称">
            <Input
              v-model="formTop.input2"
              placeholder="请输入优惠券名称"
            ></Input>
          </FormItem>
          <FormItem label="简介说明">
            <Input
              v-model="formTop.input3"
              type="textarea"
              placeholder="该描述会展示给合作者看，请使用英文描述它。"
            ></Input>
            <p>该coupon在shopify设置中有限制条件，请完善描述清楚。</p>
          </FormItem>
          <FormItem>
            <Button
              type="info"
              class="button"
              size="large"
              ghost
              style="margin-right: 10px"
              >重置</Button
            >
            <Button
              type="info"
              class="button"
              size="large"
              style="margin-right: 10px"
              >发布</Button
            >
            <Button type="info" class="button" size="large" ghost>保存</Button>
            <p>PS: 以上内容会展示给合作者查看，请使用英文填写</p>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CouponAdd",
  data() {
    return {
      value: "",
      model1: "",
      formTop: {},
    };
  },
  methods: {
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
