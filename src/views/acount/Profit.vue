<template>
  <div class="profit">
    <Tabs value="name1">
      <TabPane label="推荐合作者" name="name1">
        <!-- 标题一 -->
        <Row class="titles">
          <Col span="12"><span>推荐收益明细</span></Col>
        </Row>

        <div class="content">
          <div>
            <span class="num">0</span>
            <span class="title">推荐总数</span>
          </div>
          <div>
            <span class="num">$0</span>
            <span class="title">节省佣金</span>
          </div>
        </div>

        <!-- 搜索 -->
        <div class="search">
          <div>
            <span>推荐合作者</span>
            <Input v-model="value" size="large"  class="width" />
          </div>
          <div>
            <Button type="info" class="button" size="large">查询</Button>
          </div>
        </div>

        <!-- 表格 -->
        <div class="table">
          <div class="title">
            <span class="left">合作者信息</span>
          </div>
          <Table :columns="columns" :data="data"></Table>
          <Page :total="100" show-sizer class="page" />
        </div>
      </TabPane>
      <TabPane label="推荐商家" name="name2">
        <!-- 标题一 -->
        <Row class="titles">
          <Col span="12"><span>推荐收益明细</span></Col>
        </Row>

        <div class="content">
          <div>
            <span class="num">0</span>
            <span class="title">推荐商家数量</span>
          </div>
          <div>
            <span class="num">$0</span>
            <span class="title">累计充值金额</span>
          </div>
          <div>
            <span class="num">$0</span>
            <span class="title">我的推荐佣金</span>
          </div>
        </div>

        <!-- 搜索 -->
        <div class="search">
          <div>
            <span>推荐商家</span>
            <Input v-model="value" size="large"  class="width" />
          </div>
          <div>
            <Button type="info" class="button" size="large">查询</Button>
          </div>
        </div>

        <!-- 表格 -->
        <div class="table">
          <div class="title">
            <span class="left">商家信息</span>
          </div>
          <Table :columns="columns1" :data="data1"></Table>
          <Page :total="100" show-sizer class="page" />
        </div>
      </TabPane>
      <TabPane label="邀约链接" name="name3">
        <!-- 一键生成 -->
        <div class="product">
          <span>邀约说明文字</span>
          <Button type="info" class="button" size="large" @click="handleProductLink" >一键生成我的邀约链接</Button>
        </div>

        <!-- 表格 -->
        <div class="table">
          <div class="title">
            <span class="left">商家信息</span>
          </div>
          <Table :columns="columns2" :data="data2"></Table>
          <Page :total="100" show-sizer class="page" />
        </div>
      </TabPane>
    </Tabs>
    <!-- 弹出层 -->
    <Modal
      v-model="modal1"
      title="请选择链接类型"
      width="300"
      @on-ok="ok"
      @on-cancel="cancel"
    >
      <RadioGroup v-model="linkType">
        <Radio label="商家"></Radio>
        <Radio label="合作者"></Radio>
    </RadioGroup>
    </Modal>
  </div>
</template>
<script>
export default {
  name: "Profit",
  data() {
    return {
      modal1: false,
      name1: "",
      value: "",
      linkType:'',
      columns: [
        {
          title: "推荐合作者姓名",
          key: "name",
        },
        {
          title: "我的推荐佣金",
          key: "age",
        },
      ],
      data: [],
      columns1: [
        {
          title: "推荐商家姓名",
          key: "name",
        },
        {
          title: "充值状态",
          key: "age",
        },
        {
          title: "我的推荐佣金",
          key: "age",
        },
      ],
      data1: [],
      columns2: [
        {
          title: "链接",
          key: "name",
        },
        {
          title: "创建时间",
          key: "age",
        },
        {
          title: "操作",
          key: "age",
        },
      ],
      data2: [],
    };
  },
  methods: {
    ok() {
      this.$Message.info("Clicked ok");
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    },
    // 一键生成链接
    handleProductLink(){
      this.modal1 = true;
    }
  },
};
</script>
<style lang="less" scoped>
.profit {
  //   /deep/ .ivu-tabs-nav-scroll{
  //     background-color: #ffffff;
  //     padding: 10px 10px;
  //   }
  .titles {
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

  .content {
    margin-bottom: 30px;
    background-color: #ffffff;
    display: flex;
    border-radius: 4px;
    div {
      padding: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      width: calc(100% / 2);
      .num {
        color: #089444;
        font-size: 18px;
        font-weight: 600;
      }
      .title {
        font-size: 15px;
        font-weight: 600;
      }
    }
    div::after {
      content: "";
      border: 0.5px solid #ebeef5;
      display: inline-block;
      height: 50px;
      position: absolute;
      right: 0;
    }
    div:last-child::after {
      content: "";
      border: 0;
    }
  }

  .product {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    border-radius: 4px;
    padding: 20px 20px;
    span {
      font-weight: 600;
    }
  }

  .search {
    background-color: #ffffff;
    border-radius: 4px;
    display: flex;
    padding: 20px 20px;
    > div {
      display: flex;
      align-items: center;
      margin-right: 20px;
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
    margin-top: 30px;
    border-radius: 4px;
    .title {
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        font-weight: 600;
        font-size: 16px;
      }
      .right {
        display: flex;
        align-items: center;
        > span {
          color: #666;
          font-size: 15px;
          font-weight: 500;
          margin-right: 20px;
        }
        > div {
          color: #666;
          font-size: 15px;
          font-weight: 500;
          display: flex;
          align-items: center;
          span {
            margin-right: 10px;
          }
          margin-right: 20px;
        }
        .button {
          font-weight: 600;
          font-size: 14px;
        }
      }
    }
    .page {
      text-align: right;
      margin-top: 30px;
      padding-bottom: 30px;
    }
  }
}
</style>