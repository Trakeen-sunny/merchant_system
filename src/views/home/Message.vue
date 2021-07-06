<template>
  <div class="commission">
    <div class="comm">
      <div class="title">
        <div class="left">
          <span>消息通知</span>
        </div>
      </div>
      <!-- 表格 -->
      <div class="table">
        <Tabs type="card" value="name1">
          <TabPane name="name1" label="全部">
              <div class="li">
                  <Icon type="logo-usd" size="22" color="#45b1b"/>
                  <div class="right">
                      <div>充值消息</div>
                      <span>2021-09-12 12：90</span>
                      <p>您充值<span>300¥</span>，账户余额<span>600¥</span></p>
                  </div>
              </div>
              <div class="li">
                  <Icon type="ios-chatbubbles" size="22" color="#45b1b"/>
                  <div class="right">
                      <div>订单消息</div>
                      <span>2021-09-12 12：90</span>
                      <p>系统收到一个成交订单<span>30099</span>，交易金额余额<span>600¥</span></p>
                  </div>
              </div>
              <div class="li">
                  <Icon type="md-closed-captioning" size="22" color="#45b1b"/>
                  <div class="right">
                      <div>支出消息</div>
                      <span>2021-09-12 12：90</span>
                      <p>系统根据订单<span>30099</span>，支出佣金<span>600¥</span></p>
                  </div>
              </div>
              <div class="li">
                  <Icon type="ios-chatbubbles" size="22" color="#45b1b"/>
                  <div class="right">
                      <div>订单消息</div>
                      <span>2021-09-12 12：90</span>
                      <p>系统根据您的退款订单<span>30099</span>，已退款<span>600¥</span>到您的账户</p>
                  </div>
              </div>
              <div class="li">
                  <Icon type="ios-paper" size="22" color="#45b1b"/>
                  <div class="right">
                      <div>推荐佣金消息</div>
                      <span>2021-09-12 12：90</span>
                      <p>您推荐的商家<span>30099</span>已成功注册平台，系统已大款推荐佣金<span>600¥</span>到您的账户</p>
                  </div>
              </div>
          </TabPane>
          <TabPane name="name2" label="订单">
               <div class="li">
                  <Icon type="ios-chatbubbles" size="22" color="#45b1b"/>
                  <div class="right">
                      <div>订单消息</div>
                      <span>2021-09-12 12：90</span>
                      <p>系统收到一个成交订单<span>30099</span>，交易金额余额<span>600¥</span></p>
                  </div>
              </div>
          </TabPane>
          <TabPane name="name3" label="支出">
               <div class="li">
                  <Icon type="md-closed-captioning" size="22" color="#45b1b"/>
                  <div class="right">
                      <div>支出消息</div>
                      <span>2021-09-12 12：90</span>
                      <p>系统根据订单<span>30099</span>，支出佣金<span>600¥</span></p>
                  </div>
              </div>
          </TabPane>
          <TabPane name="name4" label="充值">
              <div class="li">
                  <Icon type="logo-usd" size="22" color="#45b1b"/>
                  <div class="right">
                      <div>充值消息</div>
                      <span>2021-09-12 12：90</span>
                      <p>您充值<span>300¥</span>，账户余额<span>600¥</span></p>
                  </div>
              </div>
          </TabPane>
          <TabPane name="name5" label="推荐佣金">
              <div class="li">
                  <Icon type="ios-paper" size="22" color="#45b1b"/>
                  <div class="right">
                      <div>推荐佣金消息</div>
                      <span>2021-09-12 12：90</span>
                      <p>您推荐的商家<span>30099</span>已成功注册平台，系统已大款推荐佣金<span>600¥</span>到您的账户</p>
                  </div>
              </div>
          </TabPane>
        </Tabs>
        <Page :total="100" show-sizer class="page" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Message",
  data() {
    return {
      value:"name1"
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.commission {
  .comm {
    background-color: #ffffff;
    border-radius: 4px;
    margin-bottom: 30px;
    .title {
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        align-items: center;
        color: #666;
        font-weight: 500;
        font-size: 15px;
        margin-bottom: 10px;
        span {
          font-weight: 600;
          color: #000;
          font-size: 16px;
          margin-right: 5px;
        }
      }
    }
  }

  .table {
    background-color: #ffffff;
    border-radius: 4px;
    .li{
        display: flex;
        margin: 20px 20px 0;
        padding-bottom: 20px;
        border-bottom: 1px solid #e0e0e0;
        .right{
            margin-left: 20px;
          div{
              color: #333333;
              font-size: 18px;
              font-weight: 600;
          }
          >span{
            font-size: 13px;
            color: #d1cccc;
          }
          p{
              font-size: 14px;
              color: #666666;
              span{
                  color: rgb(29, 196, 140);
              }
          }
        }
    }
    .page {
      text-align: right;
      margin-top: 30px;
      padding-bottom: 30px;
    }
  }
}
</style>
