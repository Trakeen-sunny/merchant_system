<template>
  <div class="invitation">
    <div class="logo">
      <a href="http://www.shareweshop.com/index.html">
        <img src="../../assets/logo2.png"
      /></a>
    </div>
    <div class="title">
      <span style="font-size: 13px">Edit password!</span>
    </div>
    <div class="form">
      <Form
        ref="formInline"
        :model="formInline"
        :rules="ruleInline"
        label-position="top"
        class="form_box"
      >
        <FormItem label="Email" prop="email">
          <Input v-model="formInline.email" placeholder=""></Input>
        </FormItem>
        <FormItem label="Verification code" prop="code">
          <Input v-model="formInline.code" type="text">
            <Button slot="append" @click="hanldeGetCode">{{
              timerCount > 1 ? timerCount + "s" : "Get verification code"
            }}</Button>
          </Input>
        </FormItem>
        <FormItem label="Password" prop="password">
          <Input v-model="formInline.password" placeholder=""></Input>
        </FormItem>
        <FormItem label="Confirm Password" prop="passwordRe">
          <Input v-model="formInline.passwordRe" placeholder=""></Input>
        </FormItem>
        <FormItem style="text-align: center">
          <Button
            style="width: 100%; height: 40px; background: #54ff9f; border: none"
            type="info"
            @click="handleSubmit('formInline')"
            >SUBMIT</Button
          >
        </FormItem>
        <FormItem>
          <br />
          <div clss="policy" style="text-align: center; font-size: 13px">
            © 2021 COZMOX LLC &nbsp;&nbsp;
            <a
              type="info"
              style="color: #999; border: none; text-decoration: underline"
              ghost
              >Privacy policy</a
            >
            &nbsp;
            <a
              type="info"
              style="color: #999; border: none; text-decoration: underline"
              ghost
              >Terms of use</a
            >
          </div>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
import {
  entryInfo_sendCaptcha,
  updatePasswordBySendEmail,
} from "../../api/invitation";
export default {
  name: "OtherRegister",
  data() {
    return {
      formInline: {
        email: "",
        code: "",
        password: "",
        passwordRe: "",
      },
      ConfirmPassword: "",
      ruleInline: {
        email: [
          {
            required: true,
            message: "please enter the email",
            trigger: "blur",
          },
          {
            type: "email",
            message: "please enter the correct password",
            trigger: "blur",
          },
        ],
        code: [
          { required: true, message: "please enter the code", trigger: "blur" },
        ],
        password: [
          {
            required: true,
            message: "please enter the password",
            trigger: "blur",
          },
          {
            type: "string",
            min: 6,
            message: "The password length shall not be less than 6 digits",
            trigger: "blur",
          },
        ],
        passwordRe: [
          {
            required: true,
            message: "please enter the Confirm Password",
            trigger: "blur",
          },
          {
            type: "string",
            min: 6,
            message: "The password length shall not be less than 6 digits",
            trigger: "blur",
          },
        ],
      },
      timerCount: "",
    };
  },
  created() {},
  computed: {},
  mounted() {},
  destroyed() {},
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          if (this.formInline.password !== this.formInline.passwordRe) {
            this.$Message.error("fail to register!");
            return;
          }
          this.$httpRequest({
            api: updatePasswordBySendEmail,
            data: this.formInline,
            success: (res) => {
              if (res.result) {
                this.$router.replace("/success");
                this.$Message.success("Edit password successfully");
              } else {
                this.$Message.error(res.message);
              }
            },
          });
        } else {
          this.$Message.error("fail to edit!");
        }
      });
    },
    // 获取验证码
    hanldeGetCode() {
      if (this.timerCount != "") {
        return;
      }
      if (!this.formInline.email) {
        this.$Message.info("Please enter your email");
        return;
      }
      this.timerCount = 60;
      this.geSendCaptcha();
      this.getInterVal();
    },
    geSendCaptcha() {
      this.$httpRequest({
        api: entryInfo_sendCaptcha,
        data: {
          mail: this.formInline.email,
        },
        success: (res) => {
          console.log(res);
        },
      });
    },
    // 定时器
    getInterVal() {
      let timer = setInterval(() => {
        this.timerCount--;
        if (this.timerCount == 1) {
          clearInterval(timer);
          this.timerCount = "";
        }
      }, 1000);
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
    padding-bottom: 25px;
    padding-top: 25px;
    border-bottom: 1px solid #e0e0e0;
    img {
      display: inline-block;
      width: 10%;
    }
  }
  .title {
    color: #666;
    font-size: 19px;
    text-align: center;
    font-weight: bold;
    span {
      width: 37%;
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
      padding: 30px 35px 10px;
      .tip {
        color: #999;
        font-size: 14px;
        text-align: left;
      }
    }
  }
}
</style>
