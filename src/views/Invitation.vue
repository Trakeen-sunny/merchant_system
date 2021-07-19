<template>
  <div class="invitation">
    <div class="box">
      <img src="../assets/img.png" class="img" />
      <div class="form">
        <h4>Here we need some information about cooperation preferences:</h4>
        <Form :model="form" label-position="top">
          <FormItem label="1.What is the compensation rate?">
            <!-- <Input
              v-for="(item, index) in formItem"
              :key="index"
              v-model="item.value"
              style="margin-bottom: 10px"
            > 
              <div slot="prepend" class="label">{{ item.name }}</div>
              <Button slot="append">USB</Button>
            </Input> -->
            <Input
              v-model="form.youTuBe"
              type="number"
              style="margin-bottom: 10px"
            >
              <div slot="prepend" class="label">YouTube</div>
              <Button slot="append">USB</Button>
            </Input>
            <Input
              v-model="form.instagram"
              type="number"
              style="margin-bottom: 10px"
            >
              <div slot="prepend" class="label">Instagram</div>
              <Button slot="append">USB</Button>
            </Input>
            <Input
              v-model="form.tikTok"
              type="number"
              style="margin-bottom: 10px"
            >
              <div slot="prepend" class="label">TikTok</div>
              <Button slot="append">USB</Button>
            </Input>
            <Input
              v-model="form.twitter"
              type="number"
              style="margin-bottom: 10px"
            >
              <div slot="prepend" class="label">Twitter</div>
              <Button slot="append">USB</Button>
            </Input>
            <Input
              v-model="form.twich"
              type="number"
              style="margin-bottom: 10px"
            >
              <div slot="prepend" class="label">Twitch</div>
              <Button slot="append">USB</Button>
            </Input>
            <Input
              v-model="form.pinterest"
              type="number"
              style="margin-bottom: 10px"
            >
              <div slot="prepend" class="label">Pinterest</div>
              <Button slot="append">USB</Button>
            </Input>
            <span>* other social media platforms.</span>
            <Input
              v-model="form.otherPlatform"
              style="margin-bottom: 10px"
              placeholder="name"
            >
            </Input>
            <Input v-model="form.otherPlatformRate" type="number">
              <Button slot="append">USB</Button>
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
      <img src="../assets/img1.png" class="img1" />
    </div>
  </div>
</template>

<script>
import { collect_add } from "../api/invitation";
export default {
  name: "Invitation",
  data() {
    return {
      form: {
        youTuBe: "",
        instagram: "",
        tikTok: "",
        twitter: "",
        twich: "",
        pinterest: "",
        otherPlatform: "",
        otherPlatformRate: "",
        accept: 1,
        infoCollectcol: "",
      },
      disabled: false,
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
  created() {},
  computed: {},
  mounted() {},
  methods: {
    handleSubmit() {
      this.form.email = this.$route.query.email;
      this.$httpRequest({
        api: collect_add,
        data: this.form,
        success: (res) => {
          console.log(res);
          if (res.code == 0) {
            this.$Message.success(res.message);
            this.disabled = true;
            this.form = {
              youTuBe: "",
              instagram: "",
              tikTok: "",
              twitter: "",
              twich: "",
              pinterest: "",
              otherPlatform: "",
              otherPlatformRate: "",
              accept: 1,
              infoCollectcol: "",
            };
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
.invitation {
  min-height: 100vh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    .img {
      width: 100%;
      height: auto;
    }
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
        width: 50px;
      }
    }
    .img1 {
      width: 100%;
      height: auto;
    }
  }
}
@media screen and (max-width: 500px) {
}
@media screen and (min-width: 500px) {
  .box {
    width: 600px;
  }
}
</style>
