<template>
  <div class="login">
    <div class="left">
      <div class="box">
        <h1 style="padding-bottom: 20px">登录</h1>
        <Form ref="formInline" :model="formInline" :rules="ruleInline">
          <FormItem prop="email">
            <Input
              type="text"
              v-model="formInline.email"
              size="large"
              placeholder="电子邮箱"
            >
              <Icon type="ios-mail-open-outline" slot="prepend" />
            </Input>
          </FormItem>
          <FormItem prop="password" style="margin: 0">
            <Input
              type="password"
              size="large"
              v-model="formInline.password"
              placeholder="密码"
            >
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem>
            <div class="text">
              <Button type="text" class="tip" @click="registerPwd"
                >注册账户</Button
              >
              <Button type="text" class="tip" @click="forgetPwd"
                >忘记密码</Button
              >
            </div>
          </FormItem>
          <FormItem>
            <Button
              type="info"
              @click="handleSubmit('formInline')"
              size="large"
              style="width: 100%"
              >登录</Button
            >
          </FormItem>
        </Form>
      </div>
    </div>
    <div class="right">
      <img src="../assets/logo.png" />
    </div>
  </div>
</template>
<script>
import { loginIn, getUsersByToken } from "../api/index";
export default {
  name: "Login",
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
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$httpRequest({
            api: loginIn,
            data: this.formInline,
            success: (res) => {
              window.localStorage.setItem("token", res.result.token);
              this.$httpRequest({
                api: getUsersByToken,
                data: {},
                success: (res) => {
                  window.localStorage.setItem(
                    "userinfo",
                    JSON.stringify(res.result)
                  );
                  this.$router.replace("/home");
                  this.$Message.success("登录成功!");
                },
              });
            },
          });
        }
      });
    },
    forgetPwd() {
      this.$router.push({ name: "Forget" });
    },
    registerPwd() {
      this.$router.push({ name: "Register" });
    },
  },
};
</script>
<style lang="less" scoped>
.login {
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #f0f3f7;
  .left {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .box {
      width: 400px;
      .text {
        display: flex;
        justify-content: space-between;
        padding: 0;
        width: 100%;
        margin-top: 10px;
        .tip {
          color: #45b1b1;
          font-weight: 700;
          font-size: 15px;
        }
      }
    }
  }
  .right {
    width: 40%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
