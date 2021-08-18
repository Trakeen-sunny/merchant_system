<template>
  <div class="invitation">
    <div class="box">
      <img src="../../assets/img.jpg" class="img" />
      <div class="form">
        <Form :model="emailForm" :label-width="103">
          <FormItem label="Email">
            <Input v-model="emailForm.email"> </Input>
          </FormItem>
        </Form>
        <h4>Here we need some information about collaboration preferences:</h4>
        <Form :model="form" label-position="top">
          <FormItem>
            <label>
              <span class="sm_red">*</span>
              <span class="sm_red1" v-show="red"
                >1.What is the compensation rate?</span
              >
              <span v-show="!red">1.What is the compensation rate?</span>
            </label>
            <Input
              v-model="form.youTuBe"
              type="number"
              style="margin-bottom: 10px"
            >
              <div slot="prepend" class="label">YouTube</div>
              <Button slot="append">USD</Button>
            </Input>
            <Input
              v-model="form.instagram"
              type="number"
              style="margin-bottom: 10px"
            >
              <div slot="prepend" class="label">Instagram</div>
              <Button slot="append">USD</Button>
            </Input>
            <Input
              v-model="form.tikTok"
              type="number"
              style="margin-bottom: 10px"
            >
              <div slot="prepend" class="label">TikTok</div>
              <Button slot="append">USD</Button>
            </Input>
            <Input
              v-model="form.twitter"
              type="number"
              style="margin-bottom: 10px"
            >
              <div slot="prepend" class="label">Twitter</div>
              <Button slot="append">USD</Button>
            </Input>
            <Input
              v-model="form.twich"
              type="number"
              style="margin-bottom: 10px"
            >
              <div slot="prepend" class="label">Twitch</div>
              <Button slot="append">USD</Button>
            </Input>
            <Input
              v-model="form.pinterest"
              type="number"
              style="margin-bottom: 10px"
            >
              <div slot="prepend" class="label">Pinterest</div>
              <Button slot="append">USD</Button>
            </Input>
            <span>other social media platforms.</span>
            <Input
              v-model="form.otherPlatform"
              style="margin-bottom: 10px"
              placeholder="name"
            >
            </Input>
            <Input v-model="form.otherPlatformRate" type="number">
              <Button slot="append">USD</Button>
            </Input>
          </FormItem>
          <FormItem label="2.Accept product/sample delivery,or affiliate ways?">
            <RadioGroup v-model="form.accept">
              <Radio :label="1">Yes</Radio>
              <Radio :label="0">No</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem
            label="3.Specific product or industry you are interested in cooperating with:"
          >
            <Input
              v-model="form.infoCollectcol"
              type="textarea"
              :autosize="{ minRows: 3, maxRows: 8 }"
              placeholder="E.g:cosmetics,clothes,tech Evs or gaming and so on"
            ></Input>
          </FormItem>
          <FormItem style="text-align: center">
            <Button type="info" @click="handleSubmit" :disabled="disabled">{{
              disabled ? "Submitted" : "Submit"
            }}</Button>
          </FormItem>
        </Form>
      </div>
      <img src="../../assets/img1.jpg" class="img1" />
    </div>
  </div>
</template>

<script>
import { collect_addOdd } from "../../api/invitation";
import { getLocalTime } from "../../common/function";
export default {
  name: "Invitation",
  data() {
    return {
      form: {
        youTuBe: null,
        instagram: null,
        tikTok: null,
        twitter: null,
        twich: null,
        pinterest: null,
        otherPlatform: null,
        otherPlatformRate: null,
        accept: 1,
        infoCollectcol: "",
      },
      red: false,
      disabled: false,
      emailForm: {
        email: "",
      },
      email: "",
      formItem: [
        {
          name: "YouTube",
          value: "youTuBe",
        },
        {
          name: "Instagram",
          value: "instagram",
        },
        {
          name: "TikTok",
          value: "tikTok",
        },
        {
          name: "Twitter",
          value: "twitter",
        },
        {
          name: "Twitch",
          value: "twich",
        },
        {
          name: "Pinterest",
          value: "pinterest",
        },
      ],
    };
  },
  created() {
    // this.initData();
    console.log(new Date().toLocaleString());
  },
  computed: {},
  mounted() {},
  destroyed() {},
  methods: {
    // 初始化调接口
    // initData() {
    //   this.$httpRequest({
    //     api: entryInfo_add,
    //     data: {
    //       email: this.$route.query.email,
    //     },
    //     success: (res) => {
    //       console.log(res);
    //     },
    //   });
    // },
    handleSubmit() {
      if (!this.emailForm.email) {
        this.$Message.info("Please enter your email");
        return;
      }
      if (
        this.form.youTuBe == null &&
        this.form.instagram == null &&
        this.form.tikTok == null &&
        this.form.twitter == null &&
        this.form.twich == null &&
        this.form.pinterest == null
      ) {
        //this.$Message.info("请输入YouTube");
        this.red = true;
        return;
      }

      this.form.email = this.emailForm.email;
      this.form.createTime = getLocalTime(new Date().getTime());
      this.$httpRequest({
        api: collect_addOdd,
        data: this.form,
        success: (res) => {
          console.log(res);
          if (res.code == 0) {
            this.$Message.success("Completed");
            this.disabled = true;
            this.form = {
              youTuBe: null,
              instagram: null,
              tikTok: null,
              twitter: null,
              twich: null,
              pinterest: null,
              otherPlatform: null,
              otherPlatformRate: null,
              accept: 1,
              infoCollectcol: "",
            };
            this.emailForm.email = "";
            this.$router.replace({ path: "/thanks" });
          } else {
            this.$Message.info(res.message);
          }
        },
      });
    },
  },
};
</script>
<style lang="less" scoped>
@media screen and (max-width: 500px) {
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    .img {
      width: 100%;
      height: auto;
    }

    .img1 {
      width: 100%;
      height: auto;
    }
  }
}
@media screen and (min-width: 500px) {
  .box {
    display: flex;
    align-items: center;
    width: 100%;

    .img {
      width: 38%;
      height: auto;
    }

    .img1 {
      width: 38%;
      height: auto;
    }
  }
}
.invitation {
  min-height: 100vh;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  .form {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    margin-top: 20px;
    margin-bottom: 10px;
    h4 {
      text-align: center;
      margin-bottom: 10px;
    }
    /deep/ .ivu-form-item-label {
      word-break: keep-all;
      word-wrap: break-word;
      text-align: left;
    }
    .label {
      width: 60px;
    }
    /* .label::before {
      content: "*";
      color: red;
      font-size: 17px;
    }*/
    .sm_red {
      color: red;
      font-size: 17px;
    }
    .sm_red1 {
      color: red;
    }
  }
}
</style>
