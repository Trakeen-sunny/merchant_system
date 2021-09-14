<template>
  <Menu
    theme="light"
    width="auto"
    :class="menuitemClasses"
    style="background-color: #335850"
  >
    <div v-for="(item, index) in asideArr" :key="index">
      <div v-if="item.children.length > 0">
        <Submenu :name="index + 1" v-if="item.isShow">
          <template slot="title">
            <Icon :type="item.icon" class="icon" size="23" />
            <span>{{ item.name }}</span>
          </template>
          <div v-for="(itm, i) in item.children" :key="i">
            <MenuItem
              :name="index + 1 + '-' + i"
              :to="itm.url"
              v-if="itm.isShow"
              ><span>{{ itm.name }}</span></MenuItem
            >
          </div>
        </Submenu>
      </div>
      <div v-else>
        <MenuItem :name="index + 1" :to="item.url" v-if="item.isShow">
          <Icon :type="item.icon" class="icon" size="23" />
          <span>{{ item.name }}</span>
        </MenuItem>
      </div>
    </div>
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
      let userinfo = JSON.parse(window.localStorage.getItem("userinfo"));
      for (const res of aside) {
        if (res.userRole.includes(userinfo.userRole)) {
          if (res.name == "财务管理") {
            res.name = this.$t("acount.mainAsideName");
          }
          if (res.name == "营销计划") {
            res.name = this.$t("plans.asideName");
          }
          if (res.name == "订单中心") {
            res.name = this.$t("orderCenter.asideName1");
          }
        }
        res.isShow = res.userRole.includes(userinfo.userRole);
        if (res.children.length > 0) {
          for (const re of res.children) {
            re.isShow = re.userRole.includes(userinfo.userRole);
            if (re.userRole.includes(userinfo.userRole)) {
              if (re.name == "账户中心") {
                re.name = this.$t("acount.asideName");
              }
            }
          }
        }
      }
      return aside;    
;
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
  font-size: 16px;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 22px;
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
.ivu-menu-vertical.ivu-menu-light:after {
  background: transparent;
}
</style>