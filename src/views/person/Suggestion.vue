<template>
  <Tabs type="card">
    <TabPane label="创建反馈/建议">
      <div class="center">
        <Form :model="formItem" :label-width="80" class="form">
          <FormItem label="标题">
            <Input v-model="formItem.input" size="large"></Input>
          </FormItem>
          <FormItem label="内容">
            <Input v-model="formItem.input" type="textarea" size="large"></Input>
          </FormItem>
          <FormItem>
            <Button type="info" size="large">提交</Button>
          </FormItem>
        </Form>
      </div>
    </TabPane>
    <TabPane label="我的反馈/建议">标签二的内容</TabPane>
  </Tabs>
</template>
<script>
export default {
  name: "Suggestion",
  data() {
    return {
      formItem: {},
    };
  },
};
</script>
<style lang="less" scoped>
.center{
    display: flex;
    justify-content: center;
}
.form {
  width: 700px;
  margin-top: 30px;
}
</style>