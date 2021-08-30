<template>
  <div class="product">
    <!-- 标题一 -->
    <Row class="title">
      <Col span="12"><span>图片上传</span></Col>
    </Row>
    <div class="form">
      <Form model="formItem" :label-width="100" :inline="false">
        <FormItem label="名称">
          <Input v-model="formItem.input" size="large" class="width"></Input>
        </FormItem>
        <FormItem label="链接">
          <Input v-model="formItem.input" size="large" class="width"></Input>
        </FormItem>
        <FormItem label="图片尺寸">
          <Select v-model="model1" size="large" clearable class="width">
            <Option :value="1">1</Option>
            <Option :value="2">4</Option>
            <Option :value="3">5</Option>
          </Select>
        </FormItem>
        <FormItem label="上传图片">
          <Upload
            ref="upload"
            :show-upload-list="false"
            :default-file-list="defaultList"
            :on-success="handleSuccess"
            :format="['jpg', 'jpeg', 'png']"
            :max-size="2048"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleMaxSize"
            :before-upload="handleBeforeUpload"
            multiple
            type="drag"
            action="//jsonplaceholder.typicode.com/posts/"
            style="display: inline-block; width: 100px"
          >
            <div style="width: 100px; height: 100px; line-height: 100px">
              <Icon type="ios-camera" size="20"></Icon>
            </div>
          </Upload>
        </FormItem>
        <FormItem label="图片预览">
          <Upload
            ref="upload"
            :show-upload-list="false"
            :default-file-list="defaultList"
            :on-success="handleSuccess"
            :format="['jpg', 'jpeg', 'png']"
            :max-size="2048"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleMaxSize"
            :before-upload="handleBeforeUpload"
            multiple
            type="drag"
            action="//jsonplaceholder.typicode.com/posts/"
            style="display: inline-block; width: 100px"
          >
            <div style="width: 100px; height: 100px; line-height: 100px">
              <Icon type="ios-camera" size="20"></Icon>
            </div>
          </Upload>
        </FormItem>
        <FormItem label="说明">
          <Input
            v-model="value8"
            size="large"
            type="textarea"
            :autosize="{ minRows: 4, maxRows: 10 }"
            placeholder=""
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
            >取消</Button
          >
          <Button type="info" class="button" size="large">保存</Button>
        </Col>
      </Row>
    </div>
  </div>
</template>
<script>
export default {
  name: "PictureAdd",
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
  }
}
</style>
