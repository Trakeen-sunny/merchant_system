<template>
  <div class="center">
    <Table :columns="columns" :data="data"></Table>
    <Page :total="100" show-sizer class="page" />
  </div>
</template>
<script>
export default {
  name: "Message",
  data() {
    return {
      columns: [
        {
          title: "来自",
          key: "name",
        },
        {
          title: "主题",
          key: "age",
        },
        {
          title: "日期",
          key: "address",
        },
        {
          title: "状态",
          key: "address",
        },
      ],
      data: [],
    };
  },
};
</script>
<style lang="less" scoped>
.center {
   .page{
       text-align: right;
       margin-top: 20px;
   }
}
</style>