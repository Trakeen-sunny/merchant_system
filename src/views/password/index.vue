<template>
  <div class="index">
    <Layout>
      <Header class="header">
        <img src="../../assets/logo.png" />
        <Button type="info" class="button" @click="handleReturn">返回登录页</Button>
      </Header>
      <Content class="content">
        <router-view></router-view>
      </Content>
    </Layout>
  </div>
</template>
<script>
export default {
  name: "IndexPwd",
  methods:{
    handleReturn(){
      this.$router.replace({name:'Login'})
    }
  }
};
</script>
<style lang="less" scoped>
.index {
  .header {
    background-color: #335850;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
     
     
    }
  }
  .content {
    margin: 20px;
    background-color: #fff;
    min-height: calc(100vh - 100px);
    display: flex;
    justify-content: center;
  }
}
</style>