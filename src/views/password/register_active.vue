<template>
  <div class="register">
    <img src="../../assets/logo.png" />
    <p>邮件已发送至914531319@qq.com邮箱中，请激活后继续注册</p>
    <p style="color: #666; text-align: center;margin-top:10px;">未收到邮件？</p>
    <Button type="info" size="large" style="width: 100%;margin-top:20px;">重新发送</Button>
    <p class="tips">邮箱地址填写错误?</p>
    <p class="back">重新填写</p>
  </div>
</template>
<script>
export default {
  name: "RegisterActive",
};
</script>
<style lang="less" scoped>
.register {
    display: flex;
    flex-direction: column;
    align-items: center;
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