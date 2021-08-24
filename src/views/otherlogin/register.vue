<template>
  <div class="invitation">
    <div class="logo">
      <img src="../../assets/logo1.jpeg" />
    </div>
    <div class="title">
      <span
        >Sign up now! Let's start by confirming your main contact email
        address</span
      >
    </div>
    <div class="form">
      <Form
        ref="formInline"
        :model="formInline"
        :rules="ruleInline"
        label-position="top"
        class="form_box"
      >
        <FormItem label="Language">
          <Input value="English" readonly placeholder=""></Input>
        </FormItem>
        <FormItem label="Country">
          <Input v-model="formInline.country" placeholder=""></Input>
        </FormItem>
        <FormItem label="Email" prop="email">
          <Input v-model="formInline.email" placeholder=""></Input>
        </FormItem>
        <FormItem label="Password" prop="password">
          <Input v-model="formInline.password" placeholder=""></Input>
        </FormItem>
        <FormItem label="Confirm Password">
          <Input v-model="ConfirmPassword" placeholder=""></Input>
        </FormItem>
        <FormItem>
          <div class="tip">
            To keep the quality of our network high,we'll ask you to verify your
            email address,accept legal trems,and provide detailssuch as your fax
            and bonking info,before you can astrt masking money and getting paid
          </div>
        </FormItem>
        <FormItem style="text-align: center">
          <Button
            style="width: 100%; height: 40px"
            type="info"
            @click="handleSubmit('formInline')"
            >Vrify Email</Button
          >
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
import { register } from "../../api/index";
export default {
  name: "OtherRegister",
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
      ConfirmPassword: "",
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
      },
    };
  },
  created() {},
  computed: {},
  mounted() {},
  destroyed() {},
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        console.log(valid);
        if (valid) {
          if (this.formInline.password !== this.ConfirmPassword) {
            this.$Message.error("注册失败!");
            return;
          }
          this.$httpRequest({
            api: register,
            data: this.formInline,
            success: (res) => {
              window.localStorage.setItem(
                "userinfo",
                JSON.stringify(res.result)
              );
              this.$router.replace("/");
              this.$Message.success("注册成功,请重新登录!");
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
.invitation {
  min-height: 100vh;
  width: 100%;
  background-color: #ffffff;
  .logo {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 30px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e0e0e0;
    img {
      display: inline-block;
      width: 20%;
    }
  }
  .title {
    color: #666;
    font-size: 19px;
    text-align: center;
    font-weight: bold;
    span {
      width: 25%;
      display: inline-block;
    }
  }
  .form {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    .form_box {
      border: 1px solid #e0e0e0;
      width: 30%;
      padding: 30px 35px;
      .tip {
        color: #999;
        font-size: 14px;
        text-align: left;
      }
    }
  }
}
</style>
