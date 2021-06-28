<template>
    <Tabs type="card">
          <TabPane label="热门问题">标签一的内容</TabPane>
          <TabPane label="新用户指南">标签二的内容</TabPane>
          <TabPane label="联系我们">
              <div class="us">
                  <img src="../../assets/logo.png"/>
                  <div class="right">
                      <div>
                          <Icon type="ios-analytics" size="25"/>
                          <div>
                              <span>我们的Skype:</span>
                              <p>+853 65678609665</p>
                          </div>
                      </div>
                      <div>
                          <Icon type="ios-analytics" size="25"/>
                          <div>
                              <span>我们的电子邮件:</span>
                              <p>+853 65678609665</p>
                          </div>
                      </div>
                      <div>
                          <Icon type="ios-analytics" size="25"/>
                          <div>
                              <span>WatsApp联系方式:</span>
                              <p>+853 65678609665</p>
                          </div>
                      </div>
                  </div>
              </div>
          </TabPane>
        </Tabs>
</template>
<script>
export default {
    name:'SetupIndex'
}
</script>
<style lang="less" scoped>
.us{
        display: flex;
        justify-content: center;
        .right{
            margin-left: 20px;
            >div{
                border-bottom: 1px solid #e0e0e0;
                display: flex;
                align-items: center;
                padding: 30px 20px;
                >div{
                    margin-left: 10px;
                    span{
                        color: #333;
                        font-weight: bold;
                        font-size: 18px;
                    }
                    p{
                        font-size: 16px;
                        color: #666;
                        font-weight: 600;
                        margin-top: 20px;
                    }
                }
            }
        }
    }
</style>