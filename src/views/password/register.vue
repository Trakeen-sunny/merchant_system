<template>
  <div class="register">
    <Steps :current="current">
      <Step title="邮箱信息填写"> </Step>
      <Step title="商家资质填写"></Step>
      <Step title="提交审核"></Step>
    </Steps>
    <div class="box" v-if="current == 0">
      <h2>注册成为ZBANX的商家</h2>
      <p>已有账户了？<span>登录</span></p>
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="user" label="邮箱">
          <Input type="text" v-model="formInline.user" size="large"> </Input>
        </FormItem>
        <FormItem>
          <Button type="info" @click="handleSubmit('formInline')" size="large"
            >验证邮箱</Button
          >
          <p style="font-size: 14px">
            为了保持我们平台商户的高质量，我们将要求您验证您的电子邮件地址
          </p>
        </FormItem>
      </Form>
    </div>
    <div v-else-if="current == 1" class="box">
      <h2>注册成为ZBANX的商家</h2>

      <Form
        ref="formValidate"
        :model="formValidate"
        :rules="ruleValidate"
        :label-width="80"
        label-position="left"
      >
        <p style="font-weight: 500; font-size: 14px; color: #000">账户信息</p>
        <FormItem label="注册邮箱" prop="name">
          <Input v-model="formValidate.name"></Input>
        </FormItem>
        <FormItem label="密码" prop="mail">
          <Input v-model="formValidate.mail"></Input>
        </FormItem>
        <FormItem label="确认密码" prop="mail">
          <Input v-model="formValidate.mail"></Input>
        </FormItem>
        <p style="font-weight: 500; font-size: 14px; color: #000">联系信息</p>
        <FormItem label="联系电话" prop="mail">
          <Input v-model="formValidate.mail"></Input>
        </FormItem>
        <FormItem label="联系邮箱" prop="mail">
          <Input v-model="formValidate.mail"></Input>
        </FormItem>
        <p style="font-weight: 500; font-size: 14px; color: #000">店铺信息</p>
        <FormItem label="店铺名称" prop="mail">
          <Input v-model="formValidate.mail"></Input>
        </FormItem>
        <FormItem label="URL" prop="mail">
          <Input v-model="formValidate.mail"></Input>
        </FormItem>
        <FormItem label="网站名称" prop="mail">
          <Input v-model="formValidate.mail"></Input>
        </FormItem>
        <FormItem label="国家" prop="city">
          <Select v-model="formValidate.city">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>
        <FormItem label="即时通讯">
          <Input v-model="formValidate.city">
            <Select
              v-model="formValidate.city"
              slot="prepend"
              style="width: 80px"
            >
              <Option value="day">Day</Option>
              <Option value="month">Month</Option>
            </Select>
          </Input>
        </FormItem>
        <FormItem label="发货仓" prop="city">
          <Select v-model="formValidate.city">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>
        <FormItem label="服务区" prop="city">
          <Select v-model="formValidate.city">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>
        <FormItem label="货币" prop="city">
          <Select v-model="formValidate.city">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>
        <FormItem label="类别" prop="city">
          <Select v-model="formValidate.city">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>
        <FormItem label="LOGO" prop="city">
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
            style="display: inline-block; width: 58px"
          >
            <div style="width: 58px; height: 58px; line-height: 58px">
              <Icon type="ios-camera" size="20"></Icon>
            </div>
          </Upload>
        </FormItem>
        <FormItem label="描述" prop="mail">
          <Input v-model="formValidate.mail" type="textarea"></Input>
        </FormItem>
        <FormItem>
          <Button type="info" @click="handleSubmit('formValidate')"
            >提交审核</Button
          >
        </FormItem>
      </Form>
    </div>
    <div v-else>
      <div class="register1">
        <img src="../../assets/logo.png" />
        <p>提交审核，待审核通过!</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Register",
  data() {
    return {
      formInline: {},
      ruleInline: {},
      current: 1,
      formValidate: {},
      ruleValidate: {},
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
      imgName: "",
      visible: false,
      uploadList: [],
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.register {
  padding-top: 30px;
  width: 600px;
  .box {
    display: flex;
    margin-top: 30px;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    p {
      color: #999;
      font-size: 15px;
      font-weight: 600;
      margin: 10px 0 10px;
    }
  }
}

.register1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  p {
    font-weight: 600;
    font-size: 16px;
    color: #444;
  }
  .tips{
      font-weight: 400;
      font-size: 15px;
      text-align: center;
      margin-top: 20px;
  }
  .back{
      color: #0b80d0;
      font-size: 14px;
      font-weight: 500;
      margin-top: 5px;
  }
}
</style>