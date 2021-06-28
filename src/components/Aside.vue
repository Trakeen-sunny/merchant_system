<template>
  <Menu
    theme="light"
    width="auto"
    :class="menuitemClasses"
    style="background-color: #335850"
  >
   
    <MenuItem name="0" to="/home">
      <Icon type="md-albums" class="icon" size="20" />
      <span>桌面</span>
    </MenuItem>
    <Submenu name="1">
      <template slot="title">
        <Icon type="logo-skype" class="icon" size="20" />
        <span>财务中心</span>
      </template>
      <MenuItem name="1-1" to="/home/acount_detail"
        ><span>账户收支情况</span></MenuItem
      >
      <MenuItem name="1-2" to="/home/commision"><span>佣金支出</span></MenuItem>
      <MenuItem name="1-3" to="/home/profit"
        ><span>推荐收益明细</span></MenuItem
      >
      <MenuItem name="1-4" to="/home/recharge"><span>充值记录</span></MenuItem>
    </Submenu>
    <MenuItem name="2" to="/home/collaborator">
      <Icon type="md-people" class="icon" size="20" />
      <span>合作者管理</span>
    </MenuItem>
    <Submenu name="3">
      <template slot="title">
        <Icon type="md-photos" class="icon" size="20" />
        <span>素材管理</span>
      </template>
      <MenuItem name="3-1" to="/home/product"><span>商品管理</span></MenuItem>
      <MenuItem name="3-2" to="/home/coupon"><span>优惠券管理</span></MenuItem>
    </Submenu>
    <Submenu name="4">
      <template slot="title">
        <Icon type="md-settings" class="icon" size="20" />
        <span>设置</span>
      </template>
      <MenuItem name="4-1" to="/home/setup_commission"
        ><span>佣金管理</span></MenuItem
      >
      <MenuItem name="4-2" to="/home/setup_product"
        ><span>商家信息</span></MenuItem
      >
    </Submenu>
    <Submenu name="5">
      <template slot="title">
        <Icon type="ios-stats" class="icon" size="20" />
        <span>统计</span>
      </template>
      <MenuItem name="5-1" to="/home/overview"><span>统计概览</span></MenuItem>
      <MenuItem name="5-2" to="/home/sale"><span>销售统计</span></MenuItem>
    </Submenu>
  </Menu>
</template>
<script>
export default {
  name: "name",
  props: {
    isCollapsed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    },
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.menu-item span {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
  color: #fff;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
/deep/ .ivu-icon-ios-arrow-down:before {
  color: #fff;
}
.collapsed-menu /deep/ .ivu-icon-ios-arrow-down:before {
  content: "";
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
  color: #fff;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
.icon {
  color: #fff;
}

</style>