<template>
  <div class="layout">
    <Layout class="layout_main">
      <Sider
        ref="side1"
        style="height: 100%; overflow: scroll"
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
            <Tooltip
              :content="$t('common.kefu')"
              class="tooltip"
              v-if="getUserInfo.userRole != 2"
            >
              <Icon
                type="logo-whatsapp"
                color="#666"
                size="25"
                @click="handleGoto"
              />
            </Tooltip>
            <Tooltip
              :content="$t('common.helpCenter')"
              class="tooltip"
              v-if="getUserInfo.userRole != 2"
            >
              <Icon
                type="md-help-circle"
                color="#666"
                size="25"
                @click="handleGoto3"
              />
            </Tooltip>
            <Tooltip
              :content="$t('common.feedback')"
              class="tooltip"
              v-if="getUserInfo.userRole != 2"
            >
              <Icon
                type="md-paper"
                color="#666"
                size="25"
                @click="handleGoTo1"
              />
            </Tooltip>
            <Tooltip
              :content="$t('common.notice')"
              class="tooltip"
              v-if="getUserInfo.userRole != 2"
            >
              <Icon
                type="md-notifications-outline"
                color="#666"
                size="25"
                @click="handleGoTo2"
              />
            </Tooltip>

            <Dropdown @on-click="handleDropDown">
              <div class="avatar">
                <img
                  src="../assets/avatar.png"
                  style="width: 40px; height: 40px; border-radius: 100%"
                />
                <span>{{ getUserInfo.realName }}</span>
              </div>
              <DropdownMenu slot="list" v-if="getUserInfo.userRole != 2">
                <DropdownItem name="1">商家信息</DropdownItem>
                <DropdownItem name="4">退出登录</DropdownItem>
              </DropdownMenu>
              <DropdownMenu slot="list" v-else>
                <DropdownItem name="2">{{
                  $t("common.userInfo")
                }}</DropdownItem>
                <DropdownItem name="4">{{
                  $t("common.loginOut")
                }}</DropdownItem>
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
      :title="$t('common.loginOut')"
      @on-ok="ok"
      :ok-text="$t('common.sure')"
      :cancel-text="$t('common.cancel')"
      @on-cancel="cancel"
      width="300"
    >
      <p>{{ $t("common.exit") }}？</p>
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
  created() {
    // console.log(JSON.parse(window.localStorage.getItem("userinfo")));
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    getUserInfo() {
      return JSON.parse(window.localStorage.getItem("userinfo"));
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
    handleGoto3() {
      this.$router.push({ name: "HelpCenter" });
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
          this.$Message.success(this.$t("common.loginOut"));
        },
      });
    },
    cancel() {
      this.$Message.info(this.$t("common.cancelExit"));
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
    /deep/ .ivu-dropdown-rel{
      height: 100%;
      display: flex;
      align-items: center;
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
