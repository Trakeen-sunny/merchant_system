<template>
  <div class="commission">
    <div class="comm">
      <div class="title">
        <div class="left">
          <span>图片管理</span>
        </div>
        <Button type="info" ghost class="right" size="large" @click="addPicture"
          >+新增</Button
        >
      </div>
      <!-- 搜索 -->
      <div class="search">
        <div>
          <span>图片名称</span>
          <Input v-model="value" size="large"  class="width" />
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
  </div>
</template>
<script>
export default {
  name: "Picture",
  data() {
    return {
      value: "",
      model1: "",
      value1: 0,
      columns: [
        {
          title: "名称",
          key: "name",
        },
        {
          title: "链接",
          key: "age",
        },
        {
          title: "尺寸",
          key: "address",
        },
        {
          title: "操作",
          key: "address",
        },
      ],
      data: [],
    };
  },
  methods: {
      addPicture(){
          this.$router.push('/home/picture_add')
      }
  },
};
</script>
<style lang="less" scoped>
.commission {
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
}
</style>
