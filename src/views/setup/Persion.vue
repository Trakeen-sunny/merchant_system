<template>
  <div class="product">
    <!-- 标题一 -->
    <Row class="title">
      <Col span="12"
        ><span>{{ $t("setPersion.title") }}</span></Col
      >
    </Row>

    <div class="form" v-if="!visibily">
      <Row>
        <Col span="8"
          ><span>{{ $t("setPersion.form.name") }}：</span><span>111</span></Col
        >
        <Col span="8"
          ><span>{{ $t("setPersion.form.name1") }}：</span><span>111</span></Col
        >
        <Col span="8"
          ><span>{{ $t("setPersion.form.name2") }}：</span><span>111</span></Col
        >
        <Col span="8"
          ><span>{{ $t("setPersion.form.name3") }}：</span><span>111</span></Col
        >
        <Col span="8"
          ><span>{{ $t("setPersion.form.name4") }}：</span><span>111</span></Col
        >
        <Col span="24"
          ><span>{{ $t("setPersion.form.name5") }}：</span
          ><span>111111111111111111111111111111111111111111111</span></Col
        >
      </Row>
      <Row>
        <Col span="24" style="display: flex; justify-content: center">
          <Button type="info" class="button" size="large" @click="handleEdit">{{
            $t("common.edit")
          }}</Button>
        </Col>
      </Row>
    </div>

    <div class="form" v-else>
      <Form model="formItem" :label-width="100" :inline="true">
        <FormItem :label="$t('setPersion.form.name')">
          <Input v-model="formItem.input" size="large" class="width"></Input>
        </FormItem>
        <FormItem :label="$t('setPersion.form.name1')">
          <Input v-model="formItem.input" size="large" class="width"></Input>
        </FormItem>
        <FormItem :label="$t('setPersion.form.name2')">
          <Input v-model="formItem.input" size="large" class="width"></Input>
        </FormItem>
        <FormItem :label="$t('setPersion.form.name3')">
          <Input v-model="formItem.input" size="large" class="width"></Input>
        </FormItem>
        <FormItem :label="$t('setPersion.form.name4')">
          <Select v-model="model1" size="large" clearable class="width">
            <Option :value="1">1</Option>
            <Option :value="2">4</Option>
            <Option :value="3">5</Option>
          </Select>
        </FormItem>
        <FormItem :label="$t('setPersion.form.name5')">
          <Input
            v-model="value8"
            size="large"
            type="textarea"
            :autosize="{ minRows: 4, maxRows: 10 }"
            placeholder=""
            style="min-width: 800px"
          />
        </FormItem>
      </Form>
      <Row>
        <Col span="24" style="display: flex; justify-content: center">
          <Button
            type="info"
            ghost
            class="button"
            size="large"
            style="margin-right: 10px"
            @click="handleEdit"
            >{{ $t("common.cancel") }}</Button
          >
          <Button type="info" class="button" size="large">{{
            $t("common.save")
          }}</Button>
        </Col>
      </Row>
    </div>
  </div>
</template>
<script>
export default {
  name: "SetupPersion",
  data() {
    return {
      value: "",
      model1: "",
      formItem: {},
      visibily: false,
      defaultList: [
        {
          name: "a42bdcc1178e62b4694c830f028db5c0",
          url: "https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar",
        },
        {
          name: "bc7521e033abdd1e92222d733590f104",
          url: "https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar",
        },
      ],
      uploadList: [],
    };
  },
  methods: {
    handleEdit() {
      this.visibily = !this.visibily;
    },
  },
};
</script>
<style lang="less" scoped>
.product {
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

  .form {
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
    .ivu-col {
      margin-bottom: 20px;
      display: flex;
    }
    span:first-child {
      color: #999;
      font-weight: 500;
      font-size: 16px;
    }
    span:last-child {
      color: #333;
      font-size: 16px;
    }
    img {
      width: 100px;
      height: 100px;
    }
    .width {
      width: 250px;
    }
    /deep/ .ivu-upload {
      width: 100px !important;
      height: 100px;
    }
    /deep/ .ivu-upload-drag div {
      width: 100px !important;
      height: 100px;
      line-height: 100px !important;
    }
  }
}
</style>
