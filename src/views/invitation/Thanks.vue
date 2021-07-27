<template>
  <div class="thanks">
    <span>
	  <img src="../../assets/ok.jpg" class="img"/><br/>
      Thank you for submitting <br/>
	  we will contact you by email for follow-up collaboration.
    </span>
  </div>
</template>
<script>
export default {
  name: "Thanks",
};
</script>
<style lang="less" scoped>
.thanks {
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: #333333;
    font-weight: bold;
    font-size: 16px;
    padding: 0 10px;
  }
}
.img{
  width:20vh;
  height:20vh;
}
</style>