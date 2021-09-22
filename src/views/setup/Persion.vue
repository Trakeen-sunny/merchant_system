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
            <span>{{ userInfo.email }}</span>
          </div>
        </Col>
      </Row>
      <Tabs type="card">
        <TabPane :label="$t('setPersion.title')">
          <Form :model="userInfo" label-position="top">
            <Row :gutter="24">
              <Col span="8">
                <FormItem :label="$t('setPersion.form.name')">
                  <Input v-model="userInfo.agency" size="large"></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem :label="$t('setPersion.form.name1')">
                  <Input
                    v-model="userInfo.phone"
                    type="tel"
                    size="large"
                  ></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem :label="$t('setPersion.form.name2')">
                  <Input
                    v-model="userInfo.email"
                    type="email"
                    size="large"
                  ></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem :label="$t('setPersion.form.name3')">
                  <Select v-model="userInfo.country" size="large">
                    <Option
                      v-for="(item, i) in countrysList"
                      :key="i"
                      :value="item.countryEn"
                      >{{ item.countryEn }}</Option
                    >
                  </Select>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem :label="$t('setPersion.form.name4')">
                  <Select v-model="userInfo.language" size="large">
                    <Option
                      v-for="(item, i) in languageList"
                      :key="i"
                      :value="item.languageEn"
                      >{{ item.languageEn }}</Option
                    >
                  </Select>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem :label="$t('setPersion.form.name5')">
                  <Select v-model="userInfo.currency" size="large">
                    <Option
                      v-for="(item, i) in currencysList"
                      :key="i"
                      :value="item.currencyEn"
                      >{{ item.currencyEn }}</Option
                    >
                  </Select>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem :label="$t('setPersion.form.name6')">
                  <DatePicker
                    type="date"
                    :value="userInfo.birthday"
                    size="large"
                    @on-change="handleChangeDate"
                  ></DatePicker>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem :label="$t('setPersion.form.name7')">
                  <RadioGroup v-model="userInfo.gender" size="large">
                    <Radio :label="0">
                      <span>{{ $t("setPersion.form.gender.name2") }}</span>
                    </Radio>
                    <Radio :label="1">
                      <span>{{ $t("setPersion.form.gender.name1") }}</span>
                    </Radio>
                    <Radio :label="2">
                      <span>{{ $t("setPersion.form.gender.name3") }}</span>
                    </Radio>
                  </RadioGroup>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem :label="$t('setPersion.form.name8')">
                  <RadioGroup v-model="userInfo.acceptFlag" size="large">
                    <Radio :label="0">
                      <span>off</span>
                    </Radio>
                    <Radio :label="1">
                      <span>on</span>
                    </Radio>
                  </RadioGroup>
                </FormItem>
              </Col>
              <Col span="24">
                <FormItem :label="$t('setPersion.form.name9')">
                  <Row
                    :gutter="16"
                    v-for="(itm, i) in userInfo.mediaVOList"
                    :key="i"
                    style="margin-bottom: 10px"
                  >
                    <Col span="3">
                      <Select v-model="itm.mediaName" size="large">
                        <Option
                          v-for="(item, index) in mediaList"
                          :key="index"
                          :value="item"
                          >{{ item }}</Option
                        >
                      </Select>
                    </Col>
                    <Col span="3">
                      <Input
                        v-model="itm.mediaId"
                        size="large"
                        :placeholder="$t('setPersion.form.name10')"
                      ></Input>
                    </Col>
                    <Col span="4">
                      <Input
                        v-model="itm.funNum"
                        :placeholder="$t('setPersion.form.name11')"
                        size="large"
                        type="number"
                      >
                        <span slot="append">W</span>
                      </Input>
                    </Col>
                    <Col span="4">
                      <Input
                        v-model="itm.promotionCost"
                        size="large"
                        type="number"
                        :placeholder="$t('setPersion.form.name12')"
                      >
                        <span slot="prepend">$</span>
                      </Input>
                    </Col>
                    <Col span="7">
                      <Input
                        v-model="itm.homeLink"
                        size="large"
                        type="url"
                        :placeholder="$t('setPersion.form.name13')"
                      >
                      </Input>
                    </Col>
                    <Col span="3">
                      <Icon
                        type="ios-remove-circle-outline"
                        @click="handleDelete(i)"
                        color="red"
                        size="25"
                        style="margin-right: 10px"
                      />
                      <Icon
                        type="ios-add-circle-outline"
                        @click="handleAdd(i)"
                        v-if="userInfo.mediaVOList.length == i + 1"
                        color="#45b1b1"
                        size="25"
                      />
                    </Col>
                  </Row>
                </FormItem>
              </Col>
              <Col span="24">
                <FormItem :label="$t('setPersion.form.name14')">
                  <Input
                    v-model="userInfo.remark"
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
                <Button
                  type="info"
                  class="button"
                  size="large"
                  @click="handleSubmit"
                  >{{ $t("common.save") }}</Button
                >
              </Col>
            </Row>
          </Form>
        </TabPane>
        <TabPane :label="$t('setPersion.title1')">
          <Form :model="formItem" label-position="top">
            <Row :gutter="24" style="margin-bottom: 30px">
              <Col span="18">
                <span>{{ $t("setPersion.form1.name1") }}</span>
                <span
                  style="
                    color: #333;
                    font-weight: bold;
                    font-size: 20px;
                    margin-left: 10px;
                  "
                  >${{
                    formItem.accountBalance ? formItem.accountBalance : "--"
                  }}</span
                >
              </Col>
              <Col span="6">
                <Button type="info" class="button" size="large" @click="info(false)" title="ces">{{
                  $t("setPersion.form1.name2")
                }}</Button>
              </Col>
            </Row>
            <Row :gutter="24">
              <Col span="8">
                <FormItem :label="$t('setPersion.form1.name3')">
                  <RadioGroup
                    v-model="formItem.accountType"
                    size="large"
                    @on-change="radioChange"
                  >
                    <Radio label="PERSONAL_BANK_ACCOUNT">
                      <span>{{ $t("setPersion.form1.name4") }}</span>
                    </Radio>
                    <Radio label="PAYPAL_ACCOUNT">
                      <span>{{ $t("setPersion.form1.name5") }}</span>
                    </Radio>
                    <Radio label="CORPORATE_ACCOUNT">
                      <span>{{ $t("setPersion.form1.name6") }}</span>
                    </Radio>
                  </RadioGroup>
                </FormItem>
              </Col>
              <Col span="8" v-show="formItem.accountType != 'PAYPAL_ACCOUNT'">
                <FormItem :label="$t('setPersion.form1.name7')">
                  <Select
                    v-model="formItem.country"
                    size="large"
                    @on-change="handleCountry"
                  >
                    <Option
                      v-for="(item, i) in countrysList"
                      :key="i"
                      :value="item.countryEn"
                      >{{ item.countryEn }}</Option
                    >
                  </Select>
                </FormItem>
              </Col>
              <Col span="8" v-show="formItem.accountType != 'PAYPAL_ACCOUNT'">
                <FormItem :label="$t('setPersion.form1.name8')">
                  <Select
                    v-model="formItem.receivingBankName"
                  >
                    <OptionGroup :label="bank.countryEn">
                      <Option
                        v-for="(itm, index) in bank.countryBankList"
                        :value="itm.bankEn"
                        :key="index"
                        >{{ itm.bankEn }}</Option
                      >
                    </OptionGroup>
                  </Select>
                </FormItem>
              </Col>
              <Col span="8" v-show="formItem.accountType != 'PAYPAL_ACCOUNT'">
                <FormItem :label="$t('setPersion.form1.name9')">
                  <Input
                    v-model="formItem.receivingBankAddress"
                    size="large"
                  ></Input>
                </FormItem>
              </Col>
              <Col span="8" v-show="formItem.accountType != 'PAYPAL_ACCOUNT'">
                <FormItem :label="$t('setPersion.form1.name10')">
                  <Input v-model="formItem.bankRouting" size="large"></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem :label="$t('setPersion.form1.name11')">
                  <Input
                    v-model="formItem.beneficiaryAccountNumber"
                    size="large"
                  ></Input>
                </FormItem>
              </Col>
              <!-- <Col span="8" v-show="formItem.accountType != 'PAYPAL_ACCOUNT'">
                <FormItem :label="$t('setPersion.form1.name12')">
                  <Input v-model="formItem.accountType" size="large"></Input>
                </FormItem>
              </Col> -->
              <Col span="8" v-show="formItem.accountType != 'PAYPAL_ACCOUNT'">
                <FormItem :label="$t('setPersion.form1.name13')">
                  <Input
                    v-model="formItem.beneficiaryAccountName"
                    size="large"
                  ></Input>
                </FormItem>
              </Col>
              <Col span="8" v-show="formItem.accountType != 'PAYPAL_ACCOUNT'">
                <FormItem :label="$t('setPersion.form1.name14')">
                  <Input
                    v-model="formItem.beneficiaryAccountAddress"
                    size="large"
                  ></Input>
                </FormItem>
              </Col>
              <Col span="8" v-show="formItem.accountType != 'PAYPAL_ACCOUNT'">
                <FormItem :label="$t('setPersion.form1.name15')">
                  <Input v-model="formItem.contactPhoneNumber" size="large">
                    <span slot="prepend">
                      <Select
                        v-model="formItem.telephoneCode"
                        size="large"
                        style="width: 200px"
                      >
                        <Option
                          v-for="(item, i) in teleArr"
                          :key="i"
                          :value="item.telephoneCode"
                          >{{ item.countryEn }}+{{ item.telephoneCode }}</Option
                        >
                      </Select>
                    </span>
                  </Input>
                </FormItem>
              </Col>
              <!-- <Col span="8" v-show="formItem.accountType == 'CORPORATE_ACCOUNT'">
                <FormItem :label="$t('setPersion.form1.name16')">
                  <Input v-model="formItem.accountType" size="large">
                    <span slot="append">{{
                      $t("setPersion.form1.name17")
                    }}</span>
                  </Input>
                </FormItem>
              </Col> -->
              <Col span="24">
                <FormItem>
                  <Radio v-model="single"
                    >{{ $t("setPersion.tip1")
                    }}<span style="color: blue"
                      >《{{ $t("setPersion.tip2") }}》</span
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
                <Button type="info" class="button" size="large" @click="save">{{
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
import {
  getUsersById,
  getQueryMediaList,
  putUser,
  getLanguages,
  getCurrencys,
  getCountrys,
  getBankList,
  getAccount,
  editAccount,
  getTelCode,
  addAccount,
} from "../../api/index";
export default {
  name: "SetupPersion",
  data() {
    return {
      value: "",
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
      userInfo: {},
      mediaList: [],
      languageList: [],
      currencysList: [],
      countrysList: [],
      bankList: [],
      bank: { countryBankList: [] },
      formItem: {
        accountType: "PERSONAL_BANK_ACCOUNT",
        bankRouting: "",
        accountBalance: "",
        beneficiaryAccountAddress: "",
        beneficiaryAccountName: "",
        beneficiaryAccountNumber: "",
        contactPhoneNumber: "",
        country: "",
        receivingBankAddress: "",
        receivingBankName: "",
        telephoneCode: "",
        id: "",
      },
      formItemArr: [],
      single: "",
      teleArr: [],
    };
  },
  computed: {
    getUserInfo() {
      return JSON.parse(window.localStorage.getItem("userinfo"));
    },
  },
  mounted() {
    this.getMediaList();
    this.getLanguagesList();
    this.getCurrencysList();
    this.getCountrysList();
    this.getUserData();
    this.getBankList();

    this.getTelCode();
  },
  methods: {
    radioChange() {
      this.single = false;
      for (let i = 0; i < this.formItemArr.length; i++) {
        if (this.formItemArr[i].accountType == this.formItem.accountType) {
          this.formItem = JSON.parse(JSON.stringify(this.formItemArr[i]));
          this.handleCountry(this.formItem.country, 1);
          return;
        }
      }
      this.formItem.bankRouting = "";
      this.formItem.accountBalance = "";
      this.formItem.beneficiaryAccountAddress = "";
      this.formItem.beneficiaryAccountName = "";
      this.formItem.beneficiaryAccountNumber = "";
      this.formItem.contactPhoneNumber = "";
      this.formItem.country = "";
      this.formItem.receivingBankAddress = "";
      this.formItem.receivingBankName = "";
      this.formItem.telephoneCode = "";
      this.formItem.id = "";
    },
    save() {
      if (!this.single) {
        this.$Message.warning("please select the protocol");
        return;
      }
      console.log(this.formItem);
      this.formItem.userId = this.getUserInfo.id;
      if (this.formItem.id) {
        this.$httpRequest({
          api: editAccount,
          data: this.formItem,
          success: () => {
            this.$Message.success("save successfully");
            this.getAccount();
          },
        });
      } else {
        this.$httpRequest({
          api: addAccount,
          data: this.formItem,
          success: () => {
            this.$Message.success("save successfully");
            this.getAccount();
          },
        });
      }
    },
	//消息提示
	info (nodesc) {
                this.$Notice.open({
                    title: 'Withdrawal Reminder',
                    desc: nodesc ? '' : 'Please contact customer service: woody@cozmox.com for withdrawal operation'
                });
            },
	
    //号码前缀
    getTelCode() {
      this.$httpRequest({
        api: getTelCode,
        success: (res) => {
          this.teleArr = res.result;
        },
      });
    },
    //获取用户账户信息
    getAccount() {
      this.$httpRequest({
        api: getAccount,
        data: { id: this.getUserInfo.id },
        success: (res) => {
          this.formItemArr = res.result;
          this.radioChange();
        },
      });
    },
    //编辑用户账户
    // editAccount() {
    //   this.$httpRequest({
    //     api: editAccount,
    //     data: { id: this.getUserInfo.id },
    //     success: (res) => {
    //       this.$Message.success("操作成功")
    //     },
    //   });
    // },
    // 获取用户信息
    getUserData() {
      this.$httpRequest({
        api: getUsersById,
        data: { id: this.getUserInfo.id },
        success: (res) => {
          if (res.result.mediaVOList.length == 0) {
            res.result.mediaVOList = [
              {
                mediaName: "",
                mediaId: "",
                funNum: "",
                promotionCost: "",
                homeLink: "",
              },
            ];
          }
          this.userInfo = res.result;
        },
      });
    },
    // 获取角色信息
    getMediaList() {
      this.$httpRequest({
        api: getQueryMediaList,
        data: {},
        success: (res) => {
          this.mediaList = res.result;
        },
      });
    },
    // 获取语言
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
    getBankList() {
      this.$httpRequest({
        api: getBankList,
        data: {},
        success: (res) => {
          console.log(res);
          this.bankList = res.result;
          this.getAccount();
        },
      });
    },
    // 提交数据
    handleSubmit() {
      this.$httpRequest({
        api: putUser,
        data: {
          id: this.getUserInfo.id,
          phone: this.userInfo.phone,
          mediaVOList: this.userInfo.mediaVOList,
          language: this.userInfo.language,
          gender: this.userInfo.gender,
          email: this.userInfo.email,
          country: this.userInfo.country,
          birthday: this.userInfo.birthDay,
          agency: this.userInfo.agency,
          acceptFlag: this.userInfo.acceptFlag,
          remark: this.userInfo.remark,
          currency: this.userInfo.currency,
        },
        success: (res) => {
          console.log(res);
          if (res.code == 0) {
            this.$Message.success(this.$t("setPersion.total.edit") + "!");
          }
        },
      });
    },
    // 删除
    handleDelete(index) {
      if (this.userInfo.mediaVOList.length == 1) {
        this.$Message.warning(this.$t("setPersion.total.delete") + "!");
        return;
      }
      this.userInfo.mediaVOList.splice(index, 1);
    },
    // 新增
    handleAdd() {
      this.userInfo.mediaVOList.push({
        mediaName: "",
        mediaId: "",
        funNum: "",
        promotionCost: "",
        homeLink: "",
      });
      console.log(this.userInfo.mediaVOList);
    },
    // 选择日期
    handleChangeDate(ev) {
      this.userInfo.birthDay = ev;
    },
    handleCountry(ev, flag) {
      if (flag != 1) {
        this.formItem.receivingBankName = "";
        this.formItem.receivingBankAddress = "";
      }

      for (let i = 0; i < this.bankList.length; i++) {
        if (ev == this.bankList[i].countryEn) {
          this.bank = JSON.parse(JSON.stringify(this.bankList[i]));
          return;
        }
      }

      this.bank = { countryBankList: [] };
    },
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
