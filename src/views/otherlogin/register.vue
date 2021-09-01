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
        <!-- <FormItem label="Language">
          <Input value="English" readonly placeholder=""></Input>
        </FormItem>
        <FormItem label="Country">
          <Input v-model="formInline.country" placeholder=""></Input>
        </FormItem> -->
        <FormItem label="Email" prop="email">
          <Input v-model="formInline.email" placeholder=""></Input>
        </FormItem>
        <FormItem label="Verification code" prop="code">
            <Input v-model="formInline.code" type="text">
              <Button slot="append" @click="hanldeGetCode">{{
                timerCount > 1 ? timerCount+'s' : "Get verification code"
              }}</Button>
            </Input>
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
            style="width: 100%; height: 40px;background:#54ff9f"
            type="info"
            @click="handleSubmit('formInline')"
            >submit</Button
          >
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
// import { register } from "../../api/index";
import { entryInfo_sendCaptcha, collect_add } from "../../api/invitation";
export default {
  name: "OtherRegister",
  data() {
    return {
      formInline: {
        youTuBe: null,
        instagram: null,
        tikTok: null,
        twitter: null,
        twich: null,
        pinterest: null,
        otherPlatform: null,
        otherPlatformRate: null,
        accept: 1,
        infoCollectcol: "",
        email: "",
        code: "",
        password:""
      },
      ConfirmPassword: "",
      ruleInline: {
        email: [
          { required: true, message: "please enter the email", trigger: "blur" },
          { type: "email", message: "please enter the correct password", trigger: "blur" },
        ],
        code: [
          { required: true, message: "please enter the code", trigger: "blur" }
        ],
        password: [
          { required: true, message: "please enter the password", trigger: "blur" },
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
        console.log(valid);
        if (valid) {
          if (this.formInline.password !== this.ConfirmPassword) {
            this.$Message.error("注册失败!");
            return;
          }
          this.$httpRequest({
            api: collect_add,
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
