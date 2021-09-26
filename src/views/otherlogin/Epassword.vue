<template>
  <div class="invitation">
    <div class="box">
      <div class="form">
        <h2>修改密码</h2>
        <Form :model="emailForm" :label-width="90">
          <FormItem label="邮箱账号">
            <Input v-model="emailForm.email"> </Input>
          </FormItem>
          <FormItem label="验证码">
            <Input v-model="emailForm.code" type="text">
              <Button slot="append" @click="hanldeGetCode">{{
                timerCount > 1 ? timerCount + "s" : "发送验证码"
              }}</Button>
            </Input>
          </FormItem>
          <FormItem label="新密码">
            <Input v-model="emailForm.email"> </Input>
          </FormItem>
          <FormItem label="再次输入密码">
            <Input v-model="emailForm.email"> </Input>
          </FormItem>
        </Form>
        <div style="text-align: center">
          <Button type="info" style="width: 100%" @click="handleSubmit"
            >重置密码</Button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { collect_add, entryInfo_sendCaptcha } from "../../api/invitation";
export default {
  name: "OtherEpassword",
  data() {
    return {
      emailForm: {
        email: "",
        code: "",
      },
      email: "",
      timerCount: "",
    };
  },
  created() {},
  computed: {},
  mounted() {},
  destroyed() {},
  methods: {
    handleSubmit() {
      if (!this.emailForm.email) {
        this.$Message.info("Please enter your email");
        return;
      }
      if (!this.emailForm.code) {
        this.$Message.info("Please enter your verification code");
        return;
      }

      this.$httpRequest({
        api: collect_add,
        data: this.form,
        success: (res) => {
          console.log(res);
          if (res.code == 0) {
            this.$Message.success("Completed");
            this.$router.replace({ path: "/thanks" });
          } else {
            this.$Message.info(res.message);
          }
        },
      });
    },
    // 获取验证码
    hanldeGetCode() {
      if (this.timerCount != "") {
        return;
      }
      if (!this.emailForm.email) {
        this.$Message.info("Please enter your email");
        return;
      }
      this.timerCount = 60;
      this.geSendCaptcha();
      this.getInterVal();
    },
    geSendCaptcha() {
      this.$httpRequest({
        api: entryInfo_sendCaptcha,
        data: {
          mail: this.emailForm.email,
        },
        success: (res) => {
          console.log(res);
        },
      });
    },
    // 定时器
    getInterVal() {
      let timer = setInterval(() => {
        this.timerCount--;
        if (this.timerCount == 1) {
          clearInterval(timer);
          this.timerCount = "";
        }
      }, 1000);
    },
  },
};
</script>
<style lang="less" scoped>
.invitation {
  height: 100vh;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    width: 40%;
  }
  .form {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    margin-top: 20px;
    margin-bottom: 10px;
    h2 {
      text-align: center;
      margin-bottom: 30px;
    }
    /deep/ .ivu-form-item-label {
      word-break: keep-all;
      word-wrap: break-word;
      text-align: left;
    }
    .label {
      width: 60px;
    }
  }
}
</style>
