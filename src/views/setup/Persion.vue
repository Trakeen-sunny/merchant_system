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
            <span>Sunny112</span>
            <span>1223333</span>
          </div>
        </Col>
      </Row>
      <Tabs type="card">
        <TabPane label="个人信息">
          <Form model="formItem" :label-width="100" label-position="top">
            <Row>
              <Col span="8">
                <FormItem label="公司名称">
                  <Input v-model="formItem.input" size="large"></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="联系电话">
                  <Input v-model="formItem.input" size="large"></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="联系邮箱">
                  <Input v-model="formItem.input" size="large"></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="国家/地区">
                  <Input v-model="formItem.input" size="large"></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="语言">
                  <Input v-model="formItem.input" size="large"></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="货币">
                  <Input v-model="formItem.input" size="large"></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="年龄">
                  <Input v-model="formItem.input" size="large"></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="性别">
                  <Input v-model="formItem.input" size="large"></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="接受纯佣">
                  <Input v-model="formItem.input" size="large"></Input>
                </FormItem>
              </Col>
              <Col span="24">
                <FormItem label="社交平台">
                  <Input v-model="formItem.input" size="large"></Input>
                </FormItem>
              </Col>
              <Col span="24">
                <FormItem label="简介说明">
                  <Input v-model="formItem.input" size="large"></Input>
                </FormItem>
              </Col>
            </Row>
          </Form>
        </TabPane>
        <TabPane label="账户设置">
          <Row>
            <Col span="24">
              <FormItem label="账户余额">
                <span>$700000</span>
              </FormItem>
            </Col>
          </Row>
          <Form model="formItem" :label-width="150" label-position="top">
            <Row>
              <Col span="8">
                <FormItem label="请选择以下方式绑定账户">
                  <Input v-model="formItem.input" size="large"></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="国家或地区">
                  <Input v-model="formItem.input" size="large"></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="银行名称">
                  <Input v-model="formItem.input" size="large"></Input>
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
                  <Input v-model="formItem.input" size="large"></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="验证码：">
                  <Input v-model="formItem.input" size="large"></Input>
                </FormItem>
              </Col>
            </Row>
          </Form>
        </TabPane>
      </Tabs>

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
