<template>
  <div class="layout">
    <Layout class="layout_main">
      <Sider
        ref="side1"
        hide-trigger
        collapsible
        :collapsed-width="78"
        v-model="isCollapsed"
      >
        <div class="logo">{{getUserInfo.websiteName}}</div>
        <Aside :isCollapsed="isCollapsed"></Aside>
      </Sider>
      <Layout>
        <Header :style="{ padding: 0 }" class="layout-header-bar">
          <Icon
            @click.native="collapsedSider"
            :class="rotateIcon"
            :style="{ margin: '0 20px', color: '#fff' }"
            type="md-menu"
            size="24"
          ></Icon>
          <div class="right">
            <Tooltip content="帮助中心" class="tooltip">
              <Icon
                type="md-help-circle"
                color="#fff"
                size="25"
                @click="handleGoto"
              />
            </Tooltip>
            <Tooltip content="反馈/建议" class="tooltip">
              <Icon
                type="md-paper"
                color="#fff"
                size="25"
                @click="handleGoTo1"
              />
            </Tooltip>
            <Tooltip content="通知" class="tooltip">
              <Icon
                type="md-notifications-outline"
                color="#fff"
                size="25"
                @click="handleGoTo2"
              />
            </Tooltip>

            <Dropdown @on-click="handleDropDown">
              <div class="avatar">
                <!-- <Avatar icon="ios-person" size="large" /> -->
                <img :src="getUserInfo.logo"  style="width:40px;height:40px;border-radius:100%;"/>
                <span>{{getUserInfo.shopName}}</span>
              </div>
              <DropdownMenu slot="list">
                <DropdownItem name="1">个人中心</DropdownItem>
                <DropdownItem name="2">消息通知</DropdownItem>
                <DropdownItem name="3">退出登录</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Header>
        <Content
          :style="{ margin: '20px', background: '#f5f7f9', minHeight: '260px' }"
        >
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
    <!-- 弹出层 -->
    <Modal
      v-model="modal1"
      title="退出"
      @on-ok="ok"
      @on-cancel="cancel"
      width="300"
    >
      <p>是否退出？</p>
    </Modal>
  </div>
</template>

<script>
import Aside from "@/components/Aside.vue";
import { logout } from "../api/index";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    Aside: Aside,
  },
  data() {
    return {
      modal1: false,
      isCollapsed: false,
    };
  },
  created() {},
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    getUserInfo() {
      return JSON.parse(window.localStorage.getItem("userinfo"));
    }
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },
    handleGoto() {
      this.$router.push({ name: "SetupIndex" });
    },
    handleGoTo1() {
      this.$router.push({ name: "Suggestion" });
    },
    handleGoTo2() {
      this.$router.push({ name: "Message" });
    },
    handleDropDown(ev) {
      if (ev == 3) {
        this.modal1 = true;
      } else if(ev==1) {
        this.$router.push({ name: "SetupProduct" });
      }else if(ev==2){
        this.$router.push({ name: "Message" });
      }
    },
    ok() {
      this.$httpRequest({
        api: logout,
        data: {},
        success: () => {
          window.localStorage.removeItem("userinfo");
          window.localStorage.removeItem("token");
          this.$router.replace({ name: "Login" });
          this.$Message.success("退出成功!");
        },
      });
    },
    cancel() {
      this.$Message.info("取消退出!");
    },
  },
};
</script>
<style lang="less" scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100vh;
  .layout_main {
    height: 100%;
    flex-direction: row;
  }
}
.layout-header-bar {
  background: #315855;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .right {
    display: flex;
    .tooltip {
      margin-right: 20px;
    }
    .avatar {
      display: flex;
      align-items: center;
      margin-right: 25px;
      span {
        color: #fff;
        font-weight: 600;
        font-size: 16px;
        margin-left: 10px;
      }
    }
  }
}

/deep/ .ivu-layout-sider {
  background-color: #335850;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}

.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
/deep/
  .ivu-menu-light.ivu-menu-vertical
  .ivu-menu-item-active:not(.ivu-menu-submenu) {
  background-color: #eff6fe;
}
/deep/
  .ivu-menu-light.ivu-menu-vertical
  .ivu-menu-item-active:not(.ivu-menu-submenu)
  span {
  color: #465454;
}
.logo {
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  height: 64px;
  line-height: 64px;
}
</style>
