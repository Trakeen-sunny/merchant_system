<template>
  <div class="invitation">
    <div class="box">
      <div class="form">
        <div class="logo">
          <a href="http://www.shareweshop.com/index.html"><img src="../../assets/logo2.png"/><a>
        </div>
        <Form
          ref="formInline"
          :model="formInline"
          :rules="ruleInline"
          label-position="top"
        >
          <FormItem label="Email Address" prop="email">
            <Input
              v-model="formInline.email"
              size="large"
              placeholder=""
            ></Input>
          </FormItem>
          <FormItem label="Password" prop="password">
            <Input
              v-model="formInline.password"
              type="password"
              size="large"
              placeholder=""
            ></Input>
          </FormItem>
          <FormItem style="text-align: center">
            <Button
              style="width: 100%; height: 40px;background:#54ff9f;border:none"
              type="info"
              @click="handleSubmit('formInline')"
              >LOG IN</Button
            >
          </FormItem>
          <FormItem>
            <div class="tip">Forgot password?</div>
            <div class="tip" @click="handleGoTO">
              Don't have an account? <span>Sign up here</span>.
            </div>
          </FormItem>
          <FormItem>
              <br/>
              <br/>
              <br/>
            <div clss="policy" style="text-align:center;font-size:13px">
               © 2021 COZMOX LLC &nbsp;&nbsp;
              <a type="info" style="color:#999;border:none;text-decoration: underline;" ghost>Privacy policy</a>
              &nbsp;
              <a type="info" style="color:#999;border:none;text-decoration: underline;" ghost>Terms of use</a>
            </div>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { loginIn, getUsersByToken } from "../../api/index";
export default {
  name: "OtherLogin",
  data() {
    return {
      formInline: {
        email: "",
        password: "",
      },
      ruleInline: {
        email: [
          {
            required: true,
            message: "please enter the email",
            trigger: "blur",
          },
          { type: "email", message: "please enter the correct password", trigger: "blur" },
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
        if (valid) {
          this.$httpRequest({
            api: loginIn,
            data: this.formInline,
            success: (res) => {
              window.localStorage.setItem("token", res.result.token);
              this.getUserInfo();
            },
          });
        }
      });
    },
    // 获取用户基本信息
    getUserInfo() {
      this.$httpRequest({
        api: getUsersByToken,
        data: { shop: "" },
        success: (res) => {
          window.localStorage.setItem("userinfo", JSON.stringify(res.result));
          let timer = setTimeout(() => {
            if (res.result && res.result.userRole != 2) {
              this.$router.replace("/home/product");
              this.$i18n.locale = "zh";
            } else {
              this.$router.replace("/home/acount_detail");
              this.$i18n.locale = "en";
            }
            clearTimeout(timer);
          }, 1000);
          this.$Message.success("login successfully!");
        },
      });
    },
    handleGoTO(){
      this.$router.push({name:'OtherRegister'})
    }
  },
};
</script>
<style lang="less" scoped>
.box {
  display: flex;
  justify-content: center;
  width: 100%;
}
.invitation {
  min-height: 100vh;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  .form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 28%;
    .logo {
      text-align: center;
      margin-bottom: 30px;
      img {
        display: inline-block;
        width: 37%;
      }
    }
    .tip {
      color: #999;
      font-size: 13px;
      text-align: center;
      cursor: pointer;
      span {
        text-decoration: underline;
      }
    }
    .policy {
      display: flex;
      justify-content: space-around;
      border:none;
      text-align: center;
    }
  }
}
</style>
