<template>
  <div class="invitation">
    <div class="box">
      <div class="form">
        <div class="logo">
          <img src="../../assets/logo1.jpeg" />
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
              style="width: 100%; height: 40px"
              type="info"
              @click="handleSubmit('formInline')"
              >Login</Button
            >
          </FormItem>
          <FormItem>
            <div class="tip">Forgot password?</div>
            <div class="tip">
              Don't have an accounts <span>Sign up here</span>
            </div>
          </FormItem>
          <FormItem>
            <div class="policy">
              <Button type="info" ghost>Privacy policy</Button>
              <Button type="info" ghost>Support center</Button>
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
            message: "请输入邮箱",
            trigger: "blur",
          },
          { type: "email", message: "请填写正确的邮箱", trigger: "blur" },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
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
          this.$Message.success("登录成功!");
        },
      });
    },
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
        width: 80%;
      }
    }
    .tip {
      color: #999;
      font-size: 15px;
      text-align: center;
      span {
        text-decoration: underline;
      }
    }
    .policy {
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>
