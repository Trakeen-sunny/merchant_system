<template>
  <div class="collaborator">
    <!-- 搜索 -->
    <div class="search">
      <div>
        <span>合作者姓名</span>
        <Input v-model="form.realName" size="large" clearable class="width" />
      </div>
      <div>
        <span>合作者ID</span>
        <Input v-model="form.id" size="large" clearable class="width" />
      </div>
      <div>
        <span>合作者类型</span>
        <Select v-model="form.userType" size="large" clearable class="width">
          <Option value="">全部</Option>
          <Option value="私域">私域</Option>
          <Option value="公域">公域</Option>
        </Select>
      </div>
      <div>
        <span>语言</span>
        <Select v-model="form.language" size="large" clearable class="width">
          <Option value="">全部</Option>
          <Option value="英语">英语</Option>
          <Option value="日语">日语</Option>
          <Option value="中文">中文</Option>
        </Select>
      </div>
      <div>
        <span>地区</span>
        <Select v-model="form.country" size="large" clearable class="width">
          <Option value="">全部</Option>
          <Option value="欧美地区">欧美地区</Option>
          <Option value="日本">日本</Option>
          <Option value="韩国">韩国</Option>
          <Option value="澳大利亚">澳大利亚</Option>
        </Select>
      </div>
      <div>
        <span>类别</span>
        <Select v-model="form.userClass" size="large" clearable class="width">
          <Option value="">全部</Option>
          <Option value="黑名单">黑名单</Option>
          <Option value="白名单">白名单</Option>
        </Select>
      </div>
      <div>
        <Button
          type="info"
          ghost
          class="button"
          size="large"
          @click="handleReset"
          >重置</Button
        >
        <Button type="info" class="button" size="large" @click="handleSearch"
          >查询</Button
        >
      </div>
    </div>

    <!-- 表格 -->
    <div class="table">
      <Tabs :value="tabsValue" @on-click="handleTabs">
        <TabPane label="全部" name="name1">
          <Table :columns="columns" :data="data">
            <template slot-scope="{ row, index }" slot="action">
              <Button type="info" @click="details(row, index)">查看</Button>
            </template>
          </Table>
          <Page
            :total="total"
            :current="pageNo"
            :page-size="pageSize"
            @on-change="changePage"
            @on-page-size-change="changeSize"
            show-sizer
            class="page"
          />
        </TabPane>
        <TabPane label="白名单" name="白名单">
          <Table :columns="columns" :data="data">
            <template slot-scope="{ row, index }" slot="action">
              <Button type="info" @click="details(row, index)">查看</Button>
            </template>
          </Table>
          <Page
            :total="total"
            :current="pageNo"
            :page-size="pageSize"
            @on-change="changePage"
            @on-page-size-change="changeSize"
            show-sizer
            class="page"
          />
        </TabPane>
        <TabPane label="黑名单" name="黑名单">
          <Table :columns="columns" :data="data">
            <template slot-scope="{ row, index }" slot="action">
              <Button type="info" @click="details(row, index)">查看</Button>
            </template>
          </Table>
          <Page
            :total="total"
            :current="pageNo"
            :page-size="pageSize"
            @on-change="changePage"
            @on-page-size-change="changeSize"
            show-sizer
            class="page"
          />
        </TabPane>
      </Tabs>
    </div>
    <!-- 详情 -->
    <Modal title="查看详情" v-model="modal" width="700">
      <Form :model="detail" label-position="right" :label-width="90">
        <Row class="modal_row">
          <Col span="12">
            <FormItem label="合作者ID">
              <span>{{ detail.id }}</span>
            </FormItem></Col
          >
          <Col span="12">
            <FormItem label="姓名">
              <span>{{ detail.realName }}</span>
            </FormItem></Col
          >
          <Col span="12">
            <FormItem label="国家">
              <span>{{ detail.country }}</span>
            </FormItem></Col
          >
          <Col span="12">
            <FormItem label="邮件">
              <span>{{ detail.email }}</span>
            </FormItem></Col
          >
          <Col span="12">
            <FormItem label="即时通讯工具">
              <span>{{ detail.imno }}</span>
            </FormItem></Col
          >
          <Col span="12">
            <FormItem label="语言">
              <span>{{ detail.language }}</span>
            </FormItem></Col
          >
          <Col span="12">
            <FormItem label="logo">
              <img
                :src="detail.logo"
                style="width: 50px; height: 50px"
              /> </FormItem
          ></Col>
          <Col span="12">
            <FormItem label="手机">
              <span>{{ detail.phone }}</span>
            </FormItem></Col
          >

          <Col span="12">
            <FormItem label="店铺名称">
              <span>{{ detail.shopName }}</span>
            </FormItem></Col
          >
          <Col span="12">
            <FormItem label="店铺地址">
              <span>{{ detail.shopUrl }}</span>
            </FormItem></Col
          >
          <Col span="12">
            <FormItem label="类别">
              <span>{{ detail.userClass }}</span>
            </FormItem></Col
          >
          <Col span="12">
            <FormItem label="类型">
              <span>{{ detail.userType }}</span>
            </FormItem></Col
          >
          <Col span="12">
            <FormItem label="网站名称">
              <span>{{ detail.websiteName }}</span>
            </FormItem></Col
          >
          <Col span="24">
            <FormItem label="描述">
              <span>{{ detail.remark }}</span>
            </FormItem></Col
          >
        </Row>
      </Form>
    </Modal>
  </div>
</template>
<script>
import { usersList } from "../api/collaborator";
export default {
  name: "Collaborator",
  data() {
    return {
      tabsValue: "name1",
      modal: false,
      form: {
        realName: "",
        id: "",
        userType: "",
        language: "",
        country: "",
        userClass: "",
      },
      columns: [
        {
          title: "合作者ID",
          key: "id",
          align: "center",
        },
        {
          title: "姓名",
          key: "realName",
          align: "center",
        },
        {
          title: "国家",
          key: "country",
          align: "center",
        },
        {
          title: "语言",
          key: "language",
          align: "center",
        },
        {
          title: "类型",
          key: "userType",
          align: "center",
        },
        {
          title: "类别",
          key: "userClass",
          align: "center",
        },
        {
          title: "操作",
          slot: "action",
          align: "center",
        },
      ],
      data: [],
      pageNo: 1, //页数
      pageSize: 10, //条数
      total: 0, //总条数
      data1: [],
      data2: [],
      userRole: 2, //0:管理员1:普通用户2:网红
      detail: {},
    };
  },
  created() {
    this.initData();
  },
  methods: {
    // 初始化数据
    initData() {
      let data = {
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        userRole: this.userRole,
        ...this.form,
      };
      this.$httpRequest({
        api: usersList,
        data,
        success: (res) => {
          console.log(res);
          this.data = res.result.records;
          this.total = res.result.total;
        },
      });
    },
    // 改变页数
    changePage(page) {
      console.log(page);
      this.pageNo = page;
      this.initData();
    },
    // 改变条数
    changeSize(size) {
      console.log(size);
      this.pageSiz = size;
      this.initData();
    },
    // 搜索
    handleSearch() {
      this.initData();
    },
    //重置
    handleReset() {
      this.form = {
        realName: "",
        id: "",
        userType: "",
        language: "",
        country: "",
        userClass: "",
      };
      this.initData();
    },
    //查看详情
    details(row) {
      this.modal = true;
      this.detail = row;
      console.log(row);
    },
    // tabs切换
    handleTabs(ev) {
      console.log(ev);
      if (ev == "name1") {
        this.form.userClass = "";
      } else {
        this.form.userClass = ev;
      }
      this.initData();
    },
  },
};
</script>
<style lang="less" scoped>
.collaborator {
  .search {
    background-color: #ffffff;
    border-radius: 4px;
    display: flex;
    flex-wrap: wrap;
    padding: 20px 20px 0;
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
.modal_row {
  span {
    color: #333;
    font-weight: bold;
    font-size: 15px;
  }
}
</style>
