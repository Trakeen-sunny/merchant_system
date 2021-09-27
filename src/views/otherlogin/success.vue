<template>
  <div class="thanks">
    <img src="../../assets/ok.png" class="img" />
    <div class="success">
      <span>重置密码成功</span>
    </div>
    <span class="tip"> 请您重新登录，{{ seconds }}秒后自动跳转登录页面 </span>
    <div style="text-align: center; margin-top: 100px">
      <Button
        type="info"
        style="background: #54ff9f; border: none"
        @click="goToReturn"
        >马上登录</Button
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "success",
  data() {
    return {
      seconds: 3,
    };
  },
  mounted() {
    let that = this;
    let timer = setInterval(function () {
      that.seconds--;
      if (that.seconds == 1) {
        clearInterval(timer);
        that.goToReturn();
      }
    }, 1000);
  },
  methods: {
    goToReturn() {
       this.$router.replace("/otherlogin");
    },
  },
};
</script>
<style lang="less" scoped>
.thanks {
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .success {
    display: flex;
    align-items: center;
  }
  span {
    color: #333333;
    font-weight: bold;
    font-size: 20px;
    padding: 0 10px;
  }
  .tip {
    color: #999999;
    font-size: 14px;
    margin-top: 5px;
  }
}
.img {
  width: 20vh;
  height: 20vh;
}
</style>