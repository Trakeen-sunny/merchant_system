<template>
  <div class="layout">
    <Layout>
      <Header class="header">
        <img src="../../assets/logo.png" />
        <Button type="info" class="button" @click="handleReturnTo">返回首页</Button>
      </Header>
      <Content class="content">
         <router-view></router-view>
      </Content>
    </Layout>
  </div>
</template>
<script>
export default {
  name: "Person",
  methods:{
    handleReturnTo(){
      this.$router.replace({name:'Index'})
    }
  }
};
</script>
<style lang="less" scoped>
.layout {
  background-color: #f7f7f7;
  .header {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 80px;
      height: 100%;
    }
  }
  .content {
    margin: 20px;
    background-color: #fff;
    height: calc(100vh - 100px);
    
  }
}
</style>