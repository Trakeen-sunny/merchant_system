<template>
  <div class="invitation">
    <div class="box">
      <img src="../assets/img.png" class="img" />
      <div class="form">
        <h4>Here we need some information about cooperation preferences:</h4>
        <Form :model="form" label-position="top">
          <FormItem label="1.What is the compensation rate?">
            <Input
              v-for="(item, index) in formItem"
              :key="index"
              v-model="form.input1"
              style="margin-bottom: 10px"
            >
              <div slot="prepend" class="label">{{ item.name }}</div>
              <Button slot="append">USB</Button>
            </Input>
            <span>* other social media platforms.</span>
            <Input
              v-model="form.input1"
              style="margin-bottom: 10px"
              placeholder="name"
            >
            </Input>
            <Input v-model="form.input1">
              <Button slot="append">USB</Button>
            </Input>
          </FormItem>
          <FormItem label="2.Accept product/sample delivery,or affiliate ways?">
            <RadioGroup v-model="form.gender">
              <Radio label="male">Yes</Radio>
              <Radio label="female">No</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem
            label="3.Specific product or industry you are interested in cooperating with:"
          >
            <Input
              v-model="form.desc"
              type="textarea"
              :autosize="{ minRows: 3, maxRows: 8 }"
              placeholder="E.g:cosmetics,clothes,tech Evs or gaming and so on"
            ></Input>
          </FormItem>
          <FormItem style="text-align: center">
            <Button type="info" @click="handleSubmit">Submit</Button>
          </FormItem>
        </Form>
      </div>
      <img src="../assets/img1.png" class="img1" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Invitation",
  data() {
    return {
      form: {
        input1: "",
        gender: "",
        desc: "",
      },
      formItem: [
        {
          name: "YouTube",
        },
        {
          name: "Instagram",
        },
        {
          name: "TikTok",
        },
        {
          name: "Twitter",
        },
        {
          name: "Twitch",
        },
        {
          name: "Pinterest",
        },
      ],
    };
  },
  created() {},
  computed: {},
  methods: {
    handleSubmit() {},
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
