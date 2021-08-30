<template>
  <div class="forget">
    <h2>忘记了登录密码？</h2>
    <p>请输入您注册时使用的电子邮箱地址，我们将会把新密码发送至您的收件箱里</p>
    <Form ref="formInline" :model="formInline" :rules="ruleInline">
      <FormItem prop="user">
        <Input
          type="text"
          v-model="formInline.user"
          size="large"
          placeholder="电子邮箱"
        >
        </Input>
      </FormItem>
      <FormItem prop="password">
        <div class="pwd">
          <Input
            type="password"
            size="large"
            v-model="formInline.password"
            placeholder="验证码"
          >
          </Input>
          <div class="code">验证码</div>
        </div>
      </FormItem>
      <FormItem>
        <Button
          type="info"
          @click="handleSubmit('formInline')"
          size="large"
          style="width: 100%"
          >发送密码邮件</Button
        >
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  name: "Forget",
  data() {
    return {
      formInline: {},
      ruleInline: {},
    };
  },
};
</script>
<style lang="less" scoped>
.forget {
  width: 600px;
  margin-top: 30px;
  h2 {
    text-align: center;
  }
  p {
    color: #999;
    font-weight: 600;
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .pwd {
    display: flex;
    .code {
      width: 100px;
      height: 36px;
      background-color: rebeccapurple;
      margin-left: 10px;
      border-radius: 4px;
    }
  }
}
</style>