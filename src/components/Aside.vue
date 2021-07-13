<template>
  <Menu
    theme="light"
    width="auto"
    :class="menuitemClasses"
    style="background-color: #335850"
  >
    <block v-for="(item, index) in asideArr" :key="index" >
      <Submenu v-if="item.children.length > 0" :name="index + 1">
        <template slot="title">
          <Icon :type="item.icon" class="icon" size="20" />
          <span>{{ item.name }}</span>
        </template>
        <MenuItem
          v-for="(itm, i) in item.children"
          :key="i"
          :name="index + 1 + '-' + i"
          :to="itm.url"
          ><span>{{ itm.name }}</span></MenuItem
        >
      </Submenu>
      <MenuItem :name="index+1" :to="item.url" v-else>
        <Icon :type="item.icon" class="icon" size="20" />
        <span>{{item.name}}</span>
      </MenuItem>
    </block>
  </Menu>
</template>
<script>
import { aside } from "../common/aside";
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
    asideArr() {
      return aside;
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