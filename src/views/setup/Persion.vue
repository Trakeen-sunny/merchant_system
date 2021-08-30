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
        <TabPane :label="$t('setPersion.title')">
          <Form model="formItem" label-position="top">
            <Row :gutter="24">
              <Col span="8">
                <FormItem :label="$t('setPersion.form.name')">
                  <Input v-model="formItem.input" size="large"></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem :label="$t('setPersion.form.name1')">
                  <Input
                    v-model="getUserInfo.phone"
                    type="tel"
                    size="large"
                  ></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem :label="$t('setPersion.form.name2')">
                  <Input
                    v-model="getUserInfo.email"
                    type="email"
                    size="large"
                  ></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem :label="$t('setPersion.form.name3')">
                  <Select v-model="getUserInfo.country" size="large">
                    <Option value="">111</Option>
                    <Option value="china">china</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem :label="$t('setPersion.form.name4')">
                  <Select v-model="getUserInfo.language" size="large">
                    <Option value="">111</Option>
                    <Option value="中文">中文</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem :label="$t('setPersion.form.name5')">
                  <Select v-model="formItem.input" size="large">
                    <Option value="">111</Option>
                    <Option value="">111</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem :label="$t('setPersion.form.name6')">
                  <Input
                    v-model="formItem.input"
                    type="number"
                    size="large"
                  ></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem :label="$t('setPersion.form.name7')">
                  <RadioGroup v-model="formItem.input" size="large">
                    <Radio label="apple">
                      <span>{{$t('setPersion.form.gender.name2')}}</span>
                    </Radio>
                    <Radio label="android">
                      <span>{{$t('setPersion.form.gender.name1')}}</span>
                    </Radio>
                  </RadioGroup>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem :label="$t('setPersion.form.name8')">
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
                <FormItem :label="$t('setPersion.form.name9')">
                  <Row :gutter="16">
                    <Col span="3">
                      <Input
                        v-model="formItem.input"
                        size="large"
                        :placeholder="$t('setPersion.form.name9')"
                      ></Input>
                    </Col>
                    <Col span="3">
                      <Input
                        v-model="formItem.input"
                        size="large"
                        :placeholder="$t('setPersion.form.name10')"
                      ></Input>
                    </Col>
                    <Col span="4">
                      <Input
                        v-model="formItem.input"
                        :placeholder="$t('setPersion.form.name11')"
                        size="large"
                      >
                        <span slot="append">W</span>
                      </Input>
                    </Col>
                    <Col span="4">
                      <Input
                        v-model="formItem.input"
                        size="large"
                        :placeholder="$t('setPersion.form.name12')"
                      >
                        <span slot="prepend">$</span>
                      </Input>
                    </Col>
                    <Col span="7">
                      <Input
                        v-model="formItem.input"
                        size="large"
                        :placeholder="$t('setPersion.form.name13')"
                      >
                      </Input>
                    </Col>
                    <Col span="3">
                      <Tag color="error">{{ $t("common.delete") }}</Tag>
                      <Tag color="default">{{ $t("common.add") }}</Tag>
                    </Col>
                  </Row>
                </FormItem>
              </Col>
              <Col span="24">
                <FormItem :label="$t('setPersion.form.name14')">
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
        <TabPane :label="$t('setPersion.title1')">
          <Form model="formItem" label-position="top">
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
                  >$700000</span
                >
              </Col>
              <Col span="6">
                <Button type="info" class="button" size="large">{{ $t("setPersion.form1.name2") }}</Button>
              </Col>
            </Row>
            <Row :gutter="24">
              <Col span="8">
                <FormItem :label="$t('setPersion.form1.name3')">
                  <RadioGroup v-model="formItem.input" size="large">
                    <Radio label="apple">
                      <span>{{ $t("setPersion.form1.name4") }}</span>
                    </Radio>
                    <Radio label="android">
                      <span>{{ $t("setPersion.form1.name5") }}</span>
                    </Radio>
                    <Radio label="android">
                      <span>{{ $t("setPersion.form1.name6") }}</span>
                    </Radio>
                  </RadioGroup>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem :label="$t('setPersion.form1.name7')">
                  <Select v-model="formItem.input" size="large">
                    <Option value="">111</Option>
                    <Option value="">111</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem :label="$t('setPersion.form1.name8')">
                  <Select v-model="formItem.input" size="large">
                    <Option value="">111</Option>
                    <Option value="">111</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem :label="$t('setPersion.form1.name9')">
                  <Input v-model="formItem.input" size="large"></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem :label="$t('setPersion.form1.name10')">
                  <Input v-model="formItem.input" size="large"></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem :label="$t('setPersion.form1.name11')">
                  <Input v-model="formItem.input" size="large"></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem l:label="$t('setPersion.form1.name12')">
                  <Input v-model="formItem.input" size="large"></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem :label="$t('setPersion.form1.name13')">
                  <Input v-model="formItem.input" size="large"></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem :label="$t('setPersion.form1.name14')">
                  <Input v-model="formItem.input" size="large"></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem :label="$t('setPersion.form1.name15')">
                  <Input v-model="formItem.input" size="large">
                    <span slot="prepend">+86</span>
                  </Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem :label="$t('setPersion.form1.name16')">
                  <Input v-model="formItem.input" size="large">
                    <span slot="append">{{ $t("setPersion.form1.name17") }}</span>
                  </Input>
                </FormItem>
              </Col>
              <Col span="24">
                <FormItem label="">
                  <Radio v-model="single"
                    >{{ $t("setPersion.tip1") }}<span style="color: blue"
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
