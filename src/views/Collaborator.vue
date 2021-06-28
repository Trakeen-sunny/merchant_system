<template>
  <div class="collaborator">

    <!-- 搜索 -->
    <div class="search">
      <div>
        <span>合作者姓名</span>
        <Input v-model="value" size="large" clearable class="width" />
      </div>
      <div>
        <span>合作者ID</span>
        <Input v-model="value" size="large" clearable class="width" />
      </div>
      <div>
        <span>合作者类型</span>
        <Select v-model="model1" size="large" clearable class="width">
          <Option :value="1">私域</Option>
          <Option :value="2">公域</Option>
        </Select>
      </div>
      <div>
        <span>语言</span>
        <Select v-model="model1" size="large" clearable class="width">
          <Option :value="1">English</Option>
          <Option :value="2">German</Option>
          <Option :value="3">French</Option>
          <Option :value="4">Spanish</Option>
          <Option :value="5">Portuguese</Option>
          <Option :value="6">Ltalian</Option>
          <Option :value="7">Russian</Option>
          <Option :value="8">Japanese</Option>
          <Option :value="9">Korean</Option>
          <Option :value="10">Polish</Option>
          <Option :value="11">Dutch</Option>
          <Option :value="12">Czech</Option>
          <Option :value="13">Danish</Option>
          <Option :value="14">Finnish</Option>
          <Option :value="15">Lrish</Option>
          <Option :value="16">Hungarian</Option>
          <Option :value="17">Armenian</Option>
          <Option :value="18">Turkish</Option>
          <Option :value="19">Vietnamese</Option>
          <Option :value="20">Thai</Option>
          <Option :value="21">Arabic</Option>
          <Option :value="22">Hebrew</Option>
          <Option :value="23">Lndonesian</Option>
          <Option :value="24">Malay</Option>
        </Select>
      </div>
      <div>
        <span>国家</span>
        <Select v-model="model1" size="large" clearable class="width">
          <Option :value="1">Germany</Option>
        </Select>
      </div>
      <div>
        <span>类别</span>
        <Select v-model="model1" size="large" clearable class="width">
          <Option :value="1">黑名单</Option>
          <Option :value="2">白名单</Option>
        </Select>
      </div>
      <div>
        <Button type="info" ghost class="button" size="large">重置</Button>
        <Button type="info" class="button" size="large">查询</Button>
      </div>
    </div>

    <!-- 表格 -->
    <div class="table">
      <Tabs value="name1">
        <TabPane label="全部" name="name1">
            <Table :columns="columns" :data="data"></Table>
            <Page :total="100" show-sizer class="page"/>
        </TabPane>
        <TabPane label="白名单" name="name2">
            <Table :columns="columns" :data="data1"></Table>
            <Page :total="100" show-sizer class="page"/>
        </TabPane>
        <TabPane label="黑名单" name="name3">
            <Table :columns="columns" :data="data2"></Table>
            <Page :total="100" show-sizer class="page"/>
        </TabPane>
    </Tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: "Collaborator",
  data() {
    return {
      value: "",
      model1: "",
      countryList:[
        {
          value:1,
          name:'Germany'
        },{
          value:1,
          name:'France'
        },{
          value:1,
          name:'Italy'
        },{
          value:1,
          name:'Spain'
        },{
          value:1,
          name:'Portugal'
        },{
          value:1,
          name:'United States'
        },{
          value:1,
          name:'United Kingdom'
        },{
          value:1,
          name:'Brazil'
        },{
          value:1,
          name:'Japan'
        },{
          value:1,
          name:'Russian Federation'
        },{
          value:1,
          name:'Poland'
        },{
          value:1,
          name:'Israel'
        },{
          value:1,
          name:'Czech Republic'
        },{
          value:1,
          name:'Slovakia'
        },{
          value:1,
          name:'Hungary'
        },{
          value:1,
          name:'Netherlands'
        },{
          value:1,
          name:'Vietnam'
        },{
          value:1,
          name:'Thailand'
        },{
          value:1,
          name:'Turkey'
        },{
          value:1,
          name:'Mexico'
        },{
          value:1,
          name:'Korea, Republic of'
        },{
          value:1,
          name:'Afghanistan'
        },{
          value:1,
          name:'Åland Islands'
        },{
          value:1,
          name:'Albania'
        },{
          value:1,
          name:'Algeria'
        },{
          value:1,
          name:'American Samoa'
        },{
          value:1,
          name:'Andorra'
        },{
          value:1,
          name:'Angola'
        },{
          value:1,
          name:'Anguilla'
        },{
          value:1,
          name:'Antarctica'
        },{
          value:1,
          name:'Antigua and Barbuda'
        },{
          value:1,
          name:'Argentina'
        },{
          value:1,
          name:'Armenia'
        },{
          value:1,
          name:'Aruba'
        },{
          value:1,
          name:'Australia'
        },{
          value:1,
          name:'Austria'
        },{
          value:1,
          name:'Azerbaijan'
        },{
          value:1,
          name:'Bahamas'
        },{
          value:1,
          name:'Bahrain'
        },{
          value:1,
          name:'Bangladesh'
        },{
          value:1,
          name:'Barbados'
        },{
          value:1,
          name:'Belarus'
        },{
          value:1,
          name:'Belgium'
        },{
          value:1,
          name:'Belize'
        },{
          value:1,
          name:'Benin'
        },{
          value:1,
          name:'Bermuda'
        },{
          value:1,
          name:'Bhutan'
        },{
          value:1,
          name:'Bolivia, Plurinational State of'
        },{
          value:1,
          name:'Bonaire, Sint Eustatius and Saba'
        },{
          value:1,
          name:'Bosnia and Herzegovina'
        },{
          value:1,
          name:'Botswana'
        },{
          value:1,
          name:'Bouvet Island'
        },{
          value:1,
          name:'British Indian Ocean Territory'
        },{
          value:1,
          name:'Brunei Darussalam'
        },{
          value:1,
          name:'Bulgaria'
        },{
          value:1,
          name:'Burkina Faso'
        },{
          value:1,
          name:'Burundi'
        },{
          value:1,
          name:'Cambodia'
        },{
          value:1,
          name:'Cameroon'
        },{
          value:1,
          name:'Canada'
        },{
          value:1,
          name:'Cape Verde'
        },{
          value:1,
          name:'Cayman Islands'
        },{
          value:1,
          name:'Central African Republic'
        },{
          value:1,
          name:'Chad'
        },{
          value:1,
          name:'Chile'
        },{
          value:1,
          name:'China'
        },{
          value:1,
          name:'Christmas Island'
        },{
          value:1,
          name:'Cocos (Keeling) Islands'
        },{
          value:1,
          name:'Colombia'
        },{
          value:1,
          name:'Comoros'
        },{
          value:1,
          name:'Congo'
        },{
          value:1,
          name:'Congo, the Democratic Republic of the'
        },{
          value:1,
          name:'Cook Islands'
        },{
          value:1,
          name:'Costa Rica'
        },{
          value:1,
          name:"Côte d'Ivoire"
        },{
          value:1,
          name:'Croatia'
        },{
          value:1,
          name:'Cuba'
        },{
          value:1,
          name:'Curaçao'
        },{
          value:1,
          name:'Cyprus'
        },{
          value:1,
          name:'Denmark'
        },{
          value:1,
          name:'Djibouti'
        },{
          value:1,
          name:'Dominica'
        },{
          value:1,
          name:'Dominican Republic'
        },{
          value:1,
          name:'Ecuador'
        },{
          value:1,
          name:'Egypt'
        },{
          value:1,
          name:'El Salvador'
        },{
          value:1,
          name:'Equatorial Guinea'
        },{
          value:1,
          name:'Eritrea'
        },{
          value:1,
          name:'Estonia'
        },{
          value:1,
          name:'Ethiopia'
        },{
          value:1,
          name:'Falkland Islands (Malvinas)'
        },{
          value:1,
          name:'Faroe Islands'
        },{
          value:1,
          name:'Fiji'
        },{
          value:1,
          name:'Finland'
        },{
          value:1,
          name:'French Guiana'
        },{
          value:1,
          name:'French Polynesia'
        }
      ],
      columns:[
        {
          title: "合作者ID",
          key: "name",
        },
        {
          title: "姓名",
          key: "age",
        },
        {
          title: "国家",
          key: "address",
        },
        {
          title: "语言",
          key: "address",
        },
        {
          title: "类型",
          key: "address",
        },
        {
          title: "类别",
          key: "address",
        },
        {
          title: "操作",
          key: "address",
        },
      ],
      data:[],
      data1:[],
      data2:[]
    };
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
    .page{
      text-align: right;
      margin-top: 30px;
      padding-bottom: 30px;
    }
  }
}
</style>
