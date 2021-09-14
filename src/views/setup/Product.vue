<template>
  <div class="product">
    <!-- 标题一 -->
    <Row class="title">
      <Col span="12"><span>商家信息</span></Col>
    </Row>

    <div class="form" v-if="!visibily">
      <Row>
        <Col span="8"
          ><span>商家名称：</span><span>{{ form.shopName }}</span></Col
        >
        <Col span="8"
          ><span>网站名称：</span><span>{{ form.websiteName }}</span></Col
        >
        <Col span="8"
          ><span>网站地址：</span><span>{{ form.shopUrl }}</span></Col
        >
        <Col span="8"
          ><span>即时通讯：</span><span>{{ form.imno }}</span></Col
        >
        <Col span="8"
          ><span>分类：</span><span>{{ form.userClass }}</span></Col
        >
        <!-- <Col span="8"><span>发货仓：</span><span>111</span></Col>
        <Col span="8"><span>服务区：</span><span>111</span></Col> -->
        <Col span="8"
          ><span>国家/地区：</span><span>{{ form.countryEn }}</span></Col
        >
        <Col span="8"
          ><span>语言：</span><span>{{ form.language }}</span></Col
        >
        <Col span="8"
          ><span>货币：</span><span>{{ form.currency }}</span></Col
        >
        <Col span="8"
          ><span>联系邮箱：</span><span>{{ form.email }}</span></Col
        >
        <Col span="8"
          ><span>联系电话：</span><span>{{ form.phone }}</span></Col
        >
        <!-- <Col span="24"><span>LOGO：</span><img src="" /></Col> -->
        <Col span="24"
          ><span>简介说明：</span><span>{{ form.remark }}</span></Col
        >
      </Row>
      <Row>
        <Col span="24" style="display: flex; justify-content: center">
          <Button type="info" class="button" size="large" @click="handleEdit"
            >修改</Button
          >
        </Col>
      </Row>
    </div>

    <div class="form" v-else>
      <Form model="formItem" :label-width="100" :inline="true">
        <FormItem label="商家名称">
          <Input v-model="form.shopName" size="large" class="width"></Input>
        </FormItem>
        <FormItem label="网站名称">
          <Input v-model="form.websiteName" size="large" class="width"></Input>
        </FormItem>
        <FormItem label="网站地址">
          <Input v-model="form.shopUrl" size="large" class="width"></Input>
        </FormItem>
        <FormItem label="即时通讯">
          <Input v-model="form.imno" size="large" class="width"></Input>
        </FormItem>
        <FormItem label="分类">
          <Input v-model="form.userClass" size="large" class="width"></Input>
        </FormItem>
        <!-- <FormItem label="发货仓">
          <Select v-model="model1" size="large" clearable class="width">
            <Option :value="1">1</Option>
            <Option :value="2">4</Option>
            <Option :value="3">5</Option>
          </Select>
        </FormItem>
        <FormItem label="服务区">
          <Select v-model="model1" size="large" clearable class="width">
            <Option :value="1">1</Option>
            <Option :value="2">4</Option>
            <Option :value="3">5</Option>
          </Select>
        </FormItem> -->
        <FormItem label="国家/地区">
          <Select v-model="form.countryEn" size="large" class="width">
            <Option
              v-for="(item, i) in countrysList"
              :key="i"
              :value="item.countryEn"
              >{{ item.countryEn }}</Option
            >
          </Select>
        </FormItem>
        <FormItem label="语言">
          <Select v-model="form.language" size="large" class="width">
            <Option
              v-for="(item, i) in languageList"
              :key="i"
              :value="item.languageEn"
              >{{ item.languageEn }}</Option
            >
          </Select>
        </FormItem>
        <FormItem label="货币">
          <Select v-model="form.currency" size="large" class="width">
            <Option
              v-for="(item, i) in currencysList"
              :key="i"
              :value="item.currencyEn"
              >{{ item.currencyEn }}</Option
            >
          </Select>
        </FormItem>
        <FormItem label="联系邮箱">
          <Input v-model="form.email" size="large" class="width"></Input>
        </FormItem>
        <FormItem label="联系电话">
          <Input v-model="form.phone" size="large" class="width"></Input>
        </FormItem>
        <!-- <FormItem label="LOGO">
          <Upload
            ref="upload"
            :show-upload-list="false"
            :default-file-list="defaultList"
            :on-success="handleSuccess"
            :format="['jpg', 'jpeg', 'png']"
            :max-size="2048"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleMaxSize"
            :before-upload="handleBeforeUpload"
            multiple
            type="drag"
            action="//jsonplaceholder.typicode.com/posts/"
            style="display: inline-block; width: 58px"
          >
            <div style="width: 58px; height: 58px; line-height: 58px">
              <Icon type="ios-camera" size="20"></Icon>
            </div>
          </Upload>
        </FormItem> -->
        <br />
        <FormItem label="简介说明">
          <Input
            v-model="form.remark"
            size="large"
            type="textarea"
            :autosize="{ minRows: 4, maxRows: 10 }"
            placeholder=""
            style="min-width: 800px"
          />
        </FormItem>
      </Form>
      <Row>
        <Col span="24" style="display: flex; justify-content: center">
          <Button
            type="info"
            ghost
            class="button"
            size="large"
            style="margin-right: 10px"
            @click="getPersonInfo"
            >取消</Button
          >
          <Button type="info" class="button" size="large" @click="submit"
            >保存</Button
          >
        </Col>
      </Row>
    </div>
  </div>
</template>
<script>
import {
  getLanguages,
  getCurrencys,
  getCountrys,
  getPersonInfo,
  setPersonInfo,
} from "../../api/index";
export default {
  name: "SetupProduct",
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
      languageList: [],
      currencysList: [],
      countrysList: [],
      form: {},
    };
  },
  computed: {
    getUserInfo() {
      return JSON.parse(window.localStorage.getItem("userinfo"));
    },
  },
  created() {
    this.getPersonInfo();
    this.getLanguagesList();
    this.getCurrencysList();
    this.getCountrysList();
  },
  methods: {
    handleEdit() {
      this.visibily = !this.visibily;
    },
    submit() {
      this.$httpRequest({
        api: setPersonInfo,
        data: this.form,
        success: (res) => {
          this.form = res.result;
          this.visibily = false;
        },
      });
    },
    getPersonInfo() {
      this.$httpRequest({
        api: getPersonInfo,
        data: { id: this.getUserInfo.id },
        success: (res) => {
          this.form = res.result;
          this.visibily = false;
        },
      });
    },
    getLanguagesList() {
      this.$httpRequest({
        api: getLanguages,
        data: {},
        success: (res) => {
          this.languageList = res.result;
        },
      });
    },
    // 获取货币
    getCurrencysList() {
      this.$httpRequest({
        api: getCurrencys,
        data: {},
        success: (res) => {
          this.currencysList = res.result;
        },
      });
    },
    // 获取国家
    getCountrysList() {
      this.$httpRequest({
        api: getCountrys,
        data: {},
        success: (res) => {
          this.countrysList = res.result;
        },
      });
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
    .ivu-col {
      margin-bottom: 20px;
      display: flex;
    }
    span:first-child {
      color: #999;
      font-weight: 500;
      font-size: 16px;
    }
    span:last-child {
      color: #333;
      font-size: 16px;
    }
    img {
      width: 100px;
      height: 100px;
    }
    .width {
      width: 250px;
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
