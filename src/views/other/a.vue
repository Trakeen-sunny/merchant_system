<template>
  <div>{{list}}</div>
</template>
<script>
import { shopifyStoreList } from "../../api/other";
export default {
  name: "A",
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      this.$httpRequest({
        api: shopifyStoreList,
        data: {
          pageNo: 1,
          pageSize: 999999,
        },
        success: (res) => {
          this.list = res.result.records;
        },
      });
    },
  },
};
</script>