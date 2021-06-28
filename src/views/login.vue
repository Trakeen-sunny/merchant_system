<template>
  <div class="login">
    <div class="left">
      <div class="box">
        <h1 style="padding-bottom: 20px">登录</h1>
        <Form ref="formInline" :model="formInline" :rules="ruleInline">
          <FormItem prop="user">
            <Input
              type="text"
              v-model="formInline.user"
              size="large"
              placeholder="电子邮箱"
            >
              <Icon type="ios-mail-open-outline" slot="prepend" />
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input
              type="password"
              size="large"
              v-model="formInline.password"
              placeholder="密码"
            >
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
            <div class="text">
              <Button type="text" class="tip" @click="registerPwd">注册账户</Button>
              <Button type="text" class="tip" @click="forgetPwd">忘记密码</Button>
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
export default {
  name: "Login",
  data() {
    return {
      formInline: {
        user: "",
        password: "",
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur",
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
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
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
      this.$router.push({name:'Index'})
    },
    forgetPwd(){
        this.$router.push({name:"Forget"})
    },
    registerPwd(){
        this.$router.push({name:"Register"})
    }
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