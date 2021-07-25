<template>
  <div class="commission">
    <div class="mesg">
      <div class="left">
        <div>
          <span>默认佣金</span>
          (适用于所有商品和选手)
        </div>
        <p>
          说明：设置默认佣金后，默认适用于所有商品和选手；如果希望单独设置商品/品类佣金，请前往下一板块；默认优先级别商品佣金＞品类佣金＞默认佣金
        </p>
      </div>
      <div class="right">
        <span>0%</span>
        <Button type="text" class="text" @click="handleEdit">修改</Button>
      </div>
    </div>

    <div class="comm">
      <div class="title">
        <div class="left">
          <span>商品佣金</span>
          (Set different commissions for different product / different
          affiliate)
        </div>
        <Button type="info" ghost class="right" size="large" @click="addProduct"
          >+新增</Button
        >
      </div>
      <!-- 搜索 -->
      <div class="search">
        <div>
          <span>商品名称</span>
          <Input v-model="value" size="large" clearable class="width" />
        </div>
        <div>
          <span>SKU</span>
          <Input v-model="value" size="large" clearable class="width" />
        </div>
        <div>
          <Button type="info" ghost class="button" size="large">重置</Button>
          <Button type="info" class="button" size="large">查询</Button>
        </div>
      </div>
      <!-- 表格 -->
      <div class="table">
        <Table :columns="columns" :data="data"></Table>
        <Page :total="100" show-sizer class="page" />
      </div>
    </div>
    <div class="comm">
      <div class="title">
        <div class="left">
          <span>类目佣金</span>
          (Set different commissions for different product / different
          affiliate)
        </div>
        <Button type="info" ghost class="right" size="large" @click="addCommision">+新增</Button>
      </div>
      <!-- 搜索 -->
      <div class="search">
        <div>
          <span>类目</span>
          <Input v-model="value" size="large" clearable class="width" />
        </div>
        <div>
          <Button type="info" ghost class="button" size="large">重置</Button>
          <Button type="info" class="button" size="large">查询</Button>
        </div>
      </div>
      <!-- 表格 -->
      <div class="table">
        <Table :columns="columns1" :data="data1"></Table>
        <Page :total="100" show-sizer class="page" />
      </div>
    </div>
    <!-- 弹出层 -->
    <Modal
      v-model="modal1"
      title="默认佣金修改"
      @on-ok="ok"
      @on-cancel="cancel"
    >
      <p class="modal_tip">
        说明：设置默认佣金后，默认适用于所有商品和选手；如果希望单独设置商品/品类佣金，请前往下一板块；默认优先级别商品佣金＞品类佣金＞默认佣金
      </p>
      <div style="text-align: center; margin-top: 10px">
        <InputNumber
          :max="10"
          :min="1"
          v-model="value1"
          size="large"
          :formatter="(value) => `${value}%`"
          :parser="(value) => value.replace('%', '')"
        ></InputNumber>
      </div>
    </Modal>
    <!-- 弹出层2 -->
    <Modal
      v-model="modal2"
      title="添加商品佣金"
      @on-ok="ok"
      @on-cancel="cancel"
      width="850"
    >
      <Form
        ref="formValidate"
        :model="formValidate"
        :rules="ruleValidate"
        :label-width="80"
      >
        <FormItem label="SKU" prop="name" style="position: relative">
          <Button type="info" @click="searchProduct">搜索商品</Button>
          <div
           v-if="isShow"
            class="modal-table"
            style="
              position: absolute;
              top: 40px;
              left: 0;
              z-index: 10;
              background: #fff;
              padding: 5px 12px;
              background-color: #fff;
              box-shadow: 0 0 3px 2px rgb(0 0 0 / 5%);
              border-radius: 5px;
              height:400px;
            "
          >
            <!-- 搜索 -->
            <div class="search" style="display:flex;margin-bottom:10px">
              <div>
                <Input
                  v-model="value"
                  placeholder="请输入SKU查询"
                  clearable
                  style="width: 200px"
                />
              </div>
              <div>
                <Button type="info" ghost class="button" 
                  >重置</Button
                >
                <Button type="info" class="button" >查询</Button>
              </div>
            </div>
            <!-- 表格 -->
            <div class="table">
              <Table :columns="columns2" :data="data2"></Table>
              <Page :total="100" show-sizer class="page" style="margin-top:20px;text-align:right;"/>
            </div>
          </div>
        </FormItem>
        <FormItem label="商品名称" prop="mail">
          <Input v-model="formValidate.mail"></Input>
        </FormItem>
        <FormItem label="类目" prop="mail">
          <Input v-model="formValidate.mail"></Input>
        </FormItem>
        <FormItem label="售价" prop="mail">
          <Input v-model="formValidate.mail"></Input>
        </FormItem>
        <FormItem label="佣金" prop="mail">
          <Input v-model="formValidate.mail">
            <Select
              v-model="formValidate.mail"
              slot="prepend"
              style="width: 80px"
            >
              <Option value="day">百分比</Option>
              <Option value="month">一口价</Option>
            </Select>
            <span slot="append">%</span>
          </Input>
        </FormItem>
      </Form>
    </Modal>
    <!-- 弹出层3 -->
    <Modal
      v-model="modal3"
      title="添加商品佣金"
      @on-ok="ok"
      @on-cancel="cancel"
      width="850"
    >
      <Form
        ref="formValidate"
        :model="formValidate"
        :rules="ruleValidate"
        :label-width="80"
      >
        <FormItem label="SKU" prop="name" style="position: relative">
          <Button type="info" @click="searchProduct">搜索类目</Button>
          <div
           v-if="isShow"
            class="modal-table"
            style="
              position: absolute;
              top: 40px;
              left: 0;
              z-index: 10;
              background: #fff;
              padding: 5px 12px;
              background-color: #fff;
              box-shadow: 0 0 3px 2px rgb(0 0 0 / 5%);
              border-radius: 5px;
              height:300px;
            "
          >
            <!-- 表格 -->
            <div class="table">
              <Table :columns="columns3" :data="data3"></Table>
              <Page :total="100" show-sizer class="page" style="margin-top:20px;text-align:right;"/>
            </div>
          </div>
        </FormItem>
        <FormItem label="名称" prop="mail">
          <Input v-model="formValidate.mail"></Input>
        </FormItem>
        <FormItem label="佣金" prop="mail">
          <Input v-model="formValidate.mail">
            <span slot="append">%</span>
          </Input>
        </FormItem>
      </Form>
    </Modal>
    <!-- 弹出层4 -->
    <Modal
      v-model="modal4"
      title="修改分类佣金"
      @on-ok="ok"
      @on-cancel="cancel"
      width="850"
    >
      <Form
        ref="formValidate"
        :model="formValidate"
        :rules="ruleValidate"
        :label-width="80"
      >
        <FormItem label="名称" prop="mail">
          <Input v-model="formValidate.mail"></Input>
        </FormItem>
        <FormItem label="佣金" prop="mail">
          <Input v-model="formValidate.mail">
            <span slot="append">%</span>
          </Input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>
<script>
import { goodsCommission } from "../../api/setup";
export default {
  name: "SetupCommission",
  data() {
    return {
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false,
      isShow: false,
      value: "",
      model1: "",
      value1: 0,
      columns: [
        {
          title: "商品",
          key: "name",
        },
        {
          title: "类目",
          key: "age",
        },
        {
          title: "SKU",
          key: "address",
        },
        {
          title: "佣金",
          key: "address",
        },
        {
          title: "操作",
          key: "address",
        },
      ],
      data: [],
      columns1: [
        {
          title: "分类名称",
          key: "name",
        },
        {
          title: "佣金",
          key: "age",
        },
        {
          title: "操作",
          key: "address",
        },
      ],
      data1: [],
      columns2:[
        {
          title: "商品名称",
          key: "name",
        },
        {
          title: "SKU",
          key: "name",
        }
      ],
      data2:[],
      columns3:[
        {
          title: "类目名称",
          key: "name",
        }
      ],
      data3:[],
      formValidate: {},
      ruleValidate: {},
    };
  },
  methods: {
    // 初始化数据
    initData() {
      this.$httpRequest({
        api: goodsCommission,
        data: {},
        success: (res) => {
          console.log(res);
          this.data = res.result.prodList;
          this.detailObj = this.data[0];
          console.log(this.data);
        },
      });
    },
    handleEdit() {
      this.modal1 = true;
    },
    addProduct() {
      this.modal2 = true;
    },
    ok() {
      this.$Message.info("Clicked ok");
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    },
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    searchProduct(){
      this.isShow = !this.isShow;
    },
    addCommision(){
      this.modal3 = true;
    }
  },
};
</script>
<style lang="less" scoped>
.commission {
  .mesg {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    border-radius: 4px;
    padding: 20px;
    margin-bottom: 30px;
    .left {
      width: 80%;
      > div {
        display: flex;
        align-items: center;
        color: #666;
        font-weight: 500;
        font-size: 15px;
        margin-bottom: 10px;
        span {
          font-weight: 600;
          color: #000;
          font-size: 16px;
          margin-right: 5px;
        }
      }
      > p {
        color: #666;
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
      }
    }
    .right {
      width: 20%;
      display: flex;
      justify-content: flex-end;
      span {
        color: #000000;
        font-size: 30px;
        font-weight: bold;
      }
      .text {
        color: #45b1b1;
        font-weight: 600;
        font-size: 15px;
        align-self: flex-end;
      }
    }
  }

  .comm {
    background-color: #ffffff;
    border-radius: 4px;
    margin-bottom: 30px;
    .title {
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ebeef5;
      .left {
        display: flex;
        align-items: center;
        color: #666;
        font-weight: 500;
        font-size: 15px;
        margin-bottom: 10px;
        span {
          font-weight: 600;
          color: #000;
          font-size: 16px;
          margin-right: 5px;
        }
      }
    }
  }

  .search {
    background-color: #ffffff;
    border-radius: 4px;
    display: flex;
    flex-wrap: wrap;
    padding: 30px 20px 10px;
    > div {
      display: flex;
      align-items: center;
      margin-right: 20px;
      margin-bottom: 20px;
      span {
        margin-right: 10px;
        font-weight: 500;
        font-size: 14px;
      }
      .width {
        width: 200px;
      }
      .button:last-child {
        margin-left: 20px;
      }
    }
  }

  .table {
    background-color: #ffffff;
    border-radius: 4px;
    .page {
      text-align: right;
      margin-top: 30px;
      padding-bottom: 30px;
    }
  }

  .modal_tip {
    color: #999;
    font-weight: 500;
    font-size: 16px;
  }
  /deep/ .ivu-form-item-content .modal-table {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
