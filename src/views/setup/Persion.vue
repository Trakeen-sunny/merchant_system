<template>
  <div class="product">
    <!-- 标题一 -->
    <Row class="title">
      <Col span="12"
        ><span>{{ $t("setPersion.title") }}</span></Col
      >
    </Row>

    <div class="form">
      <Row>
        <Col span="24" class="owninfo">
          <img src="../../assets/avatar.png" />
          <div>
            <span>{{getUserInfo.realName}}</span>
            <span>{{getUserInfo.email}}</span>
          </div>
        </Col>
      </Row>
      <Tabs type="card">
        <TabPane label="个人信息">
          <Form model="formItem" label-position="top">
            <Row :gutter="24">
              <Col span="8">
                <FormItem label="公司名称">
                  <Input v-model="formItem.input" size="large"></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="联系电话">
                  <Input
                    v-model="getUserInfo.phone"
                    type="tel"
                    size="large"
                  ></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="联系邮箱">
                  <Input
                    v-model="getUserInfo.email"
                    type="email"
                    size="large"
                  ></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="国家/地区">
                  <Select v-model="getUserInfo.country" size="large">
                    <Option value="">111</Option>
                    <Option value="china">china</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="语言">
                  <Select v-model="getUserInfo.language" size="large">
                    <Option value="">111</Option>
                    <Option value="中文">中文</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="货币">
                  <Select v-model="formItem.input" size="large">
                    <Option value="">111</Option>
                    <Option value="">111</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="年龄">
                  <Input
                    v-model="formItem.input"
                    type="number"
                    size="large"
                  ></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="性别">
                  <RadioGroup v-model="formItem.input" size="large">
                    <Radio label="apple">
                      <span>男</span>
                    </Radio>
                    <Radio label="android">
                      <span>女</span>
                    </Radio>
                  </RadioGroup>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="接受纯佣">
                  <RadioGroup v-model="formItem.input" size="large">
                    <Radio label="apple">
                      <span>off</span>
                    </Radio>
                    <Radio label="android">
                      <span>on</span>
                    </Radio>
                  </RadioGroup>
                </FormItem>
              </Col>
              <Col span="24">
                <FormItem label="社交平台">
                  <Row :gutter="16">
                    <Col span="3">
                      <Input
                        v-model="formItem.input"
                        size="large"
                        placeholder="社交平台"
                      ></Input>
                    </Col>
                    <Col span="3">
                      <Input
                        v-model="formItem.input"
                        size="large"
                        placeholder="平台ID"
                      ></Input>
                    </Col>
                    <Col span="4">
                      <Input
                        v-model="formItem.input"
                        placeholder="粉丝量"
                        size="large"
                      >
                        <span slot="append">W</span>
                      </Input>
                    </Col>
                    <Col span="4">
                      <Input
                        v-model="formItem.input"
                        size="large"
                        placeholder="推广费用"
                      >
                        <span slot="prepend">$</span>
                      </Input>
                    </Col>
                    <Col span="7">
                      <Input
                        v-model="formItem.input"
                        size="large"
                        placeholder="主页链接"
                      >
                      </Input>
                    </Col>
                    <Col span="3">
                      <Tag color="error">删除</Tag>
                      <Tag color="default">添加</Tag>
                    </Col>
                  </Row>
                </FormItem>
              </Col>
              <Col span="24">
                <FormItem label="简介说明">
                  <Input
                    v-model="formItem.input"
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 5 }"
                    size="large"
                  ></Input>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="24" style="display: flex; justify-content: center">
                <Button
                  type="info"
                  ghost
                  class="button"
                  size="large"
                  style="margin-right: 10px"
                  @click="handleEdit"
                  >{{ $t("common.cancel") }}</Button
                >
                <Button type="info" class="button" size="large">{{
                  $t("common.save")
                }}</Button>
              </Col>
            </Row>
          </Form>
        </TabPane>
        <TabPane label="账户设置">
          <Form model="formItem" label-position="top">
            <Row :gutter="24" style="margin-bottom: 30px">
              <Col span="18">
                <span>账户余额</span>
                <span
                  style="
                    color: #333;
                    font-weight: bold;
                    font-size: 20px;
                    margin-left: 10px;
                  "
                  >$700000</span
                >
              </Col>
              <Col span="6">
                <Button type="info" class="button" size="large">提现</Button>
              </Col>
            </Row>
            <Row :gutter="24">
              <Col span="8">
                <FormItem label="请选择以下方式绑定账户">
                  <RadioGroup v-model="formItem.input" size="large">
                    <Radio label="apple">
                      <span>个人银行账户</span>
                    </Radio>
                    <Radio label="android">
                      <span>Palpay账户</span>
                    </Radio>
                    <Radio label="android">
                      <span>对公账户</span>
                    </Radio>
                  </RadioGroup>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="国家或地区">
                  <Select v-model="formItem.input" size="large">
                    <Option value="">111</Option>
                    <Option value="">111</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="银行名称">
                  <Select v-model="formItem.input" size="large">
                    <Option value="">111</Option>
                    <Option value="">111</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="分行地址">
                  <Input v-model="formItem.input" size="large"></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="SWFIT 代码">
                  <Input v-model="formItem.input" size="large"></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="账号">
                  <Input v-model="formItem.input" size="large"></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="重新输入账户">
                  <Input v-model="formItem.input" size="large"></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="银行账户名">
                  <Input v-model="formItem.input" size="large"></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="银行账户持有人地址">
                  <Input v-model="formItem.input" size="large"></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="银行账户持有人电话号码">
                  <Input v-model="formItem.input" size="large">
                    <span slot="prepend">+86</span>
                  </Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="验证码：">
                  <Input v-model="formItem.input" size="large">
                    <span slot="append">获取验证码</span>
                  </Input>
                </FormItem>
              </Col>
              <Col span="24">
                <FormItem label="">
                  <Radio v-model="single"
                    >已阅读并同意<span style="color: blue"
                      >《平台银行绑定认证协议》</span
                    ></Radio
                  >
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="24" style="display: flex; justify-content: center">
                <Button
                  type="info"
                  ghost
                  class="button"
                  size="large"
                  style="margin-right: 10px"
                  @click="handleEdit"
                  >{{ $t("common.cancel") }}</Button
                >
                <Button type="info" class="button" size="large">{{
                  $t("common.save")
                }}</Button>
              </Col>
            </Row>
          </Form>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: "SetupPersion",
  data() {
    return {
      value: "",
      model1: "",
      formItem: {},
      visibily: false,
      defaultList: [
        {
          name: "a42bdcc1178e62b4694c830f028db5c0",
          url: "https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar",
        },
        {
          name: "bc7521e033abdd1e92222d733590f104",
          url: "https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar",
        },
      ],
      uploadList: [],
    };
  },
  computed:{
    getUserInfo() {
      return JSON.parse(window.localStorage.getItem("userinfo"));
    }
  },
  methods: {
    handleEdit() {
      this.visibily = !this.visibily;
    },
  },
};
</script>
<style lang="less" scoped>
.product {
  > .title {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    span {
      font-weight: 600;
      display: flex;
      align-items: center;
    }
    span::before {
      content: "";
      display: inline-block;
      width: 3px;
      height: 16px;
      background-color: #419191;
      font-size: 18px;
      margin-right: 8px;
    }
  }

  .form {
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
    .owninfo {
      display: flex;
      margin-bottom: 20px;
      img {
        width: 80px;
        height: 80px;
        border-radius: 100%;
      }
      > div {
        display: flex;
        flex-direction: column;
        align-self: center;
        margin-left: 10px;
      }
    }
    /deep/ .ivu-upload {
      width: 100px !important;
      height: 100px;
    }
    /deep/ .ivu-upload-drag div {
      width: 100px !important;
      height: 100px;
      line-height: 100px !important;
    }
  }
}
</style>
