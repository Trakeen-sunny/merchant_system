<template>
  <main>
    <!-- <nav>
      <ul>
        <li>服务与支持</li>
        <li>&nbsp;>&nbsp;</li>
        <li>文档中心</li>
        <li>&nbsp;>&nbsp;</li>
        <li class="active">文档阅读</li>
      </ul>
    </nav> -->

    <section>
      <h2>COZMOX营销云功能设置指南</h2>
      <article>
        <h2>关于应用</h2>
        <p>品牌出海，联盟营销，网红营销，让更多的客户看到你的商店和产品信息</p>
      </article>
      <article>
        <h2>设置指南</h2>
        <p>let's get started by following this guide</p>
        <div>
          <h3>
            <span>step1.</span
            >在自己的shopify商店后台，点击应用，查看已安装的应用，找到COZMOX营销云应用
          </h3>
          <img src="../../assets/help/img1.png" />
        </div>
        <div>
          <h3>
            <span>step2.</span
            >双击COZMOX营销云，稍等数秒，会跳转到COZMOX营销云的管理后台。在此页面，可以看到您的产品信息。
          </h3>
          <img src="../../assets/help/img2.png" />
        </div>
        <div>
          <h3><span>step3.</span>点击商品，给商品设置相应的佣金</h3>
          <img src="../../assets/help/img3.png" />
          <img src="../../assets/help/img4.png" />
        </div>
        <div>
          <h3>
            <span>step4.</span
            >网络达人可以查看到您所发布的营销计划，然后复制商品链接，发布到他的社交平台，对商品进行推广，用户可通过此链接，跳转到您的网上商店。
          </h3>
          <img src="../../assets/help/img5.png" />
          <img src="../../assets/help/img6.png" />
        </div>
        <div>
          <h3>
            <span>step5.</span
            >用户在您的shopify商店上下单，生成的订单会传入COZMOX营销云。在您的交易中心可以查看到销售额以及交易记录。以上就是我们系统的主要功能，如有疑问也可以随时邮箱联系到我们:woody@cozmox.com
          </h3>
          <img src="../../assets/help/img7.png" />
          <img src="../../assets/help/img8.png" />
          <img src="../../assets/help/img9.png" />
        </div>
      </article>
    </section>
  </main>
</template>
<script>
export default {
  name: "HelpCenter",
};
</script>
<style lang="less" scoped>
page {
  background-color: #f2f2f2;
  height: 100vh;
  box-sizing: border-box;
}
main {
  width: 1200px;
  margin: 0 auto;
}
main nav ul {
  list-style: none;
  display: flex;
  height: 50px;
  align-items: center;
  color: grey;
  font-size: 15px;
}
main nav ul li.active {
  color: #60c710;
}

main section {
  width: 980px;
  margin: 0px auto 0;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 60px 60px;
}
main section article h2 {
  color: blue;
  font-size: 23px;
  margin-top: 40px;
}
main section article p {
  font-size: 14px;
  color: #666666;
  margin-top: 30px;
}
main section article img {
  display: block;
  width: 100%;
  margin-top: 30px;
}
main section article div {
  margin-top: 30px;
}
main section article div h3 {
  color: #666666;
  font-size: 15px;
  font-weight: normal;
}
main section article div h3 span {
  color: blue;
  font-size: 22px;
  font-weight: bold;
}
</style>