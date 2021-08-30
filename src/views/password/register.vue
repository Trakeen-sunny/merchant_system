<template>
  <div class="register">
    <!-- <Steps :current="current">
      <Step title="邮箱信息填写"> </Step>
      <Step title="商家资质填写"></Step>
      <Step title="提交审核"></Step>
    </Steps> -->
    <!-- <div class="box" v-if="current == 0">
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
    </div> -->
    <div class="box">
      <h2>注册成为ZBANX的商家</h2>

      <Form
        ref="formInline"
        :model="formInline"
        :rules="ruleInline"
        :label-width="80"
        label-position="left"
      >
        <p style="font-weight: 500; font-size: 14px; color: #000">账户信息</p>
        <FormItem label="邮箱" prop="email">
          <Input v-model="formInline.email"></Input>
        </FormItem>
        <FormItem label="密码" prop="password">
          <Input v-model="formInline.password" type="password"></Input>
        </FormItem>
        <p style="font-weight: 500; font-size: 14px; color: #000">联系信息</p>
        <FormItem label="联系电话" prop="phone">
          <Input v-model="formInline.phone"></Input>
        </FormItem>
        <p style="font-weight: 500; font-size: 14px; color: #000">店铺信息</p>
        <FormItem label="店铺名称" prop="shopName">
          <Input v-model="formInline.shopName"></Input>
        </FormItem>
        <FormItem label="店铺地址" prop="shopUrl">
          <Input v-model="formInline.shopUrl"></Input>
        </FormItem>
        <FormItem label="网站名称" prop="websiteName">
          <Input v-model="formInline.websiteName"></Input>
        </FormItem>
        <FormItem label="国家" prop="country">
          <Input v-model="formInline.country"></Input>
        </FormItem>
        <FormItem label="即时通讯" prop="imno">
          <Input v-model="formInline.imno"></Input>
        </FormItem>
        <FormItem label="LOGO" prop="logo">
          <Upload
            class="upload"
            ref="upload"
            :show-upload-list="false"
            :default-file-list="defaultList"
            :on-success="handleSuccess"
            :format="['jpg', 'jpeg', 'png']"
            action="//jsonplaceholder.typicode.com/posts/"
            style="display: inline-block; width: 58px"
          >
            <div style="text-align: center; border: 1px solid #e0e0e0">
              <Icon type="ios-camera" size="20"></Icon>
            </div>
          </Upload>
        </FormItem>
        <FormItem label="描述" prop="remark">
          <Input v-model="formInline.remark" type="textarea"></Input>
        </FormItem>
        <FormItem>
          <Button type="info" @click="handleSubmit('formInline')"
            >提交审核</Button
          >
        </FormItem>
      </Form>
    </div>
    <!-- <div v-else>
      <div class="register1">
        <img src="../../assets/logo.png" />
        <p>提交审核，待审核通过!</p>
      </div>
    </div> -->
  </div>
</template>
<script>
import { register } from "../../api/index";
export default {
  name: "Register",
  data() {
    return {
      formInline: {
        country: "",
        email: "",
        imno: "",
        logo: "",
        password: "",
        phone: "",
        remark: "",
        shopName: "",
        shopUrl: "",
        websiteName: "",
      },
      ruleInline: {
        email: [
          { required: true, message: "请填写邮箱", trigger: "blur" },
          { type: "email", message: "请填写正确的邮箱", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请填写密码", trigger: "blur" },
          {
            type: "string",
            min: 6,
            message: "密码长度不少于6位",
            trigger: "blur",
          },
        ],
        phone: [{ required: true, message: "请填写手机号", trigger: "blur" }],
        shopName: [
          { required: true, message: "请填写店铺名称", trigger: "blur" },
        ],
        shopUrl: [
          { required: true, message: "请填写店铺地址", trigger: "blur" },
        ],
        websiteName: [
          { required: true, message: "请填写网站名称", trigger: "blur" },
        ],
        country: [{ required: true, message: "请填写国家", trigger: "blur" }],
        imno: [{ required: true, message: "请填写即时通讯", trigger: "blur" }],
        logo: [{ required: false, message: "请上传logo", trigger: "change" }],
        remark: [
          { required: true, message: "请填写描述", trigger: "blur" },
          {
            type: "string",
            min: 20,
            message: "描述不少20个字",
            trigger: "blur",
          },
        ],
      },
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
    // 图片上传成功
    handleSuccess(res, file) {
      console.log(res,file)
    },
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$httpRequest({
            api: register,
            data: this.formInline,
            success: (res) => {
              window.localStorage.setItem(
                "userinfo",
                JSON.stringify(res.result)
              );
              this.$router.replace("/home");
              this.$Message.success("注册成功!");
            },
          });
        } else {
          this.$Message.error("注册失败!");
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.register {
  padding-top: 10px;
  width: 50vw;
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
  .tips {
    font-weight: 400;
    font-size: 15px;
    text-align: center;
    margin-top: 20px;
  }
  .back {
    color: #0b80d0;
    font-size: 14px;
    font-weight: 500;
    margin-top: 5px;
  }
}

.upload {
  width: 100px !important;
  height: 100px !important;
  /deep/ .ivu-upload {
    width: 100px !important;
    height: 100px !important;
    > div {
      width: 100px !important;
      height: 100px !important;
      line-height: 100px !important;
    }
  }
}
</style>