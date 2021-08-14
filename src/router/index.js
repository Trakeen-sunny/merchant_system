import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);


const routes = [{
    path: "/",
    name: "Login",
    component: () => import('@/views/login.vue')
  }, {
    path: "/home",
    name: "Home",
    component: Home,
    children: [{
        path: "",
        name: "Index",
        component: () => import("@/views/statistics/overview.vue"),
      }, {
        path: "acount_detail",
        name: "AcountDetail",
        component: () => import("@/views/acount/AcountDetail.vue"),
      }, {
        path: "message",
        name: "Message",
        component: () => import("@/views/home/Message.vue"),
      }, {
        path: "commision",
        name: "Commision",
        component: () => import("@/views/acount/Commision.vue"),
      }, {
        path: "recharge",
        name: "Recharge",
        component: () => import("@/views/acount/Recharge.vue"),
      }, {
        path: "profit",
        name: "Profit",
        component: () => import("@/views/acount/Profit.vue"),
      }, {
        path: "order",
        name: "Order",
        component: () => import("@/views/acount/Order.vue"),
      }, {
        path: "collaborator",
        name: "Collaborator",
        component: () => import("@/views/Collaborator.vue"),
      }, {
        path: "product",
        name: "Product",
        component: () => import("@/views/material/Product.vue"),
      }, {
        path: "product_add",
        name: "ProductAdd",
        component: () => import("@/views/material/ProductAdd.vue"),
      }, {
        path: "coupon",
        name: "Coupon",
        component: () => import("@/views/material/Coupon.vue"),
      }, {
        path: "coupon_add",
        name: "CouponAdd",
        component: () => import("@/views/material/CouponAdd.vue"),
      }, {
        path: "picture",
        name: "Picture",
        component: () => import("@/views/material/Picture.vue"),
      }, {
        path: "picture_add",
        name: "PictureAdd",
        component: () => import("@/views/material/PictureAdd.vue"),
      }, {
        path: "setup_commission",
        name: "SetupCommission",
        component: () => import("@/views/setup/Commission.vue"),
      }, {
        path: "setup_product",
        name: "SetupProduct",
        component: () => import("@/views/setup/Product.vue"),
      }, {
        path: "setup_persion",
        name: "SetupPersion",
        component: () => import("@/views/setup/Persion.vue"),
      }, {
        path: "sale",
        name: "Sale",
        component: () => import("@/views/statistics/sale.vue"),
      }, {
        path: "overview",
        name: "Overview",
        component: () => import("@/views/Index.vue"),
      }, {
        path: "market",
        name: "Market",
        component: () => import("@/views/plan/Market.vue"),
      }, {
        path: "promoter",
        name: "Promoter",
        component: () => import("@/views/dataanalysis/Promoter.vue"),
      }, {
        path: "business",
        name: "Business",
        component: () => import("@/views/dataanalysis/Business.vue"),
      }, {
        path: "myplan",
        name: "MyPlan",
        component: () => import("@/views/promoter/MyPlan.vue"),
      }, {
        path: "ordercenter",
        name: "OrderCenter",
        component: () => import("@/views/promoter/OrderCenter.vue"),
      }, {
        path: "financialcenter",
        name: "FinancialCenter",
        component: () => import("@/views/promoter/FinancialCenter.vue"),
      }
    ]
  }, {
    path: '/person',
    name: 'Person',
    component: () => import('@/views/person/index.vue'),
    children: [{
        path: '',
        name: 'SetupIndex',
        component: () => import('@/views/person/Setup.vue'),
      },
      {
        path: '/suggestion',
        name: 'Suggestion',
        component: () => import('@/views/person/Suggestion.vue'),
      },
      {
        path: '/message',
        name: 'Message',
        component: () => import('@/views/person/Message.vue'),
      }
    ]
  }, {
    path: "/pwd",
    name: "IndexPwd",
    component: () => import('@/views/password/index.vue'),
    children: [{
      path: "forget",
      name: "Forget",
      component: () => import('@/views/password/forget.vue'),
    }, {
      path: "register",
      name: "Register",
      component: () => import('@/views/password/register.vue'),
    }, {
      path: "register_active",
      name: "RegisterActive",
      component: () => import('@/views/password/register_active.vue'),
    }]
  },
  {
    path: "/invitation",
    name: "Invitation",
    component: () => import("@/views/invitation/Invitation.vue"),
  },
  {
    path: "/thanks",
    name: "Thanks",
    component: () => import("@/views/invitation/Thanks.vue"),
  },
  {
    path: "/einvitation",
    name: "EInvitation",
    component: () => import("@/views/invitation/EInvitation.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;