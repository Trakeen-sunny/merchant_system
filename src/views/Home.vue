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
        <!-- <div class="logo">{{getUserInfo.websiteName}}</div> -->
        <div class="logo">
          <img style="width: 95%; height: 27%" src="../assets/logo.png" />
        </div>
        <Aside :isCollapsed="isCollapsed"></Aside>
      </Sider>
      <Layout>
        <Header :style="{ padding: 0 }" class="layout-header-bar">
          <Icon
            @click.native="collapsedSider"
            :class="rotateIcon"
            :style="{ margin: '0 20px', color: '#666' }"
            type="md-menu"
            size="24"
          ></Icon>
          <div class="right">
            <Tooltip :content="$t('common.kefu')" class="tooltip" v-if="userRole!=2">
              <Icon
                type="logo-whatsapp"
                color="#666"
                size="25"
                @click="handleGoto"
              />
            </Tooltip>
            <Tooltip :content="$t('common.helpCenter')" class="tooltip" v-if="userRole!=2">
              <Icon
                type="md-help-circle"
                color="#666"
                size="25"
                @click="handleGoto"
              />
            </Tooltip>
            <Tooltip :content="$t('common.feedback')" class="tooltip" v-if="userRole!=2">
              <Icon
                type="md-paper"
                color="#666"
                size="25"
                @click="handleGoTo1"
              />
            </Tooltip>
            <Tooltip :content="$t('common.notice')" class="tooltip" v-if="userRole!=2">
              <Icon
                type="md-notifications-outline"
                color="#666"
                size="25"
                @click="handleGoTo2"
              />
            </Tooltip>

            <Dropdown @on-click="handleDropDown">
              <div class="avatar">
                <!-- <Avatar icon="ios-person" size="large" /> -->
                <img
                  :src="getUserInfo.logo"
                  style="width: 40px; height: 40px; border-radius: 100%"
                />
                <span>{{ getUserInfo.shopName }}</span>
              </div>
              <DropdownMenu slot="list" v-if="userRole!=2">
                <DropdownItem name="1">商家信息</DropdownItem>
                <DropdownItem name="3">消息通知</DropdownItem>
                <DropdownItem name="4">退出登录</DropdownItem>
              </DropdownMenu>
              <DropdownMenu slot="list" v-else>
                <DropdownItem name="2">{{$t('common.userInfo')}}</DropdownItem>
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
    },
    userRole() {
      // 角色判断 userRole 0 管理员 1 普通用户 2 网红
      return JSON.parse(window.localStorage.getItem("userinfo")).userRole;
    },
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
      if (ev == 1) {
        this.$router.push({ name: "SetupProduct" });
      } else if (ev == 2) {
        this.$router.push({ name: "SetupPersion" });
      } else if (ev == 3) {
        this.$router.push({ name: "Message" });
      } else if (ev == 4) {
        this.modal1 = true;
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
  background: #ffffff;
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
        color: #666666;
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
  text-align: center;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
