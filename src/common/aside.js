// 角色判断 userRole 0 管理员 1 商家端 2 网红
export const aside = [
    // {
    //     name: '首页',
    //     url: '/home',
    //     icon: 'md-albums',
    //     userRole: [0, 1],
    //     children: []
    // },
    {
        name: '财务管理',
        icon: 'logo-skype',
        userRole: [0, 1, 2],
        children: [{
                url: '/home/acount_detail',
                name: '账户中心',
                userRole: [0, 1, 2],
            },
            {
                url: '/home/voucher_center',
                name: '充值中心',
                userRole: [0],
            },
            // {
            //     url: '/home/recharge',
            //     name: '充值记录',
            //     userRole: [0, 1],
            // },
            // {//
            //     url: '/home/acount_financial',
            //     name: '财务中心',
            //     userRole: [0],
            // },
            // {//
            //     url: '/home/rechargeaudit',
            //     name: '充值审核',
            //     userRole: [0],
            // },
            // {//
            //     url: '/home/withdrawalreview',
            //     name: '提现审核',
            //     userRole: [0],
            // }
        ]
    },
    {
        name: '订单中心',
        url: '/home/order',
        icon: 'md-book',
        userRole: [0, 1, 2],
        children: []
    },
    {
        name: '营销计划',
        icon: 'ios-appstore',
        url: '/home/market',
        userRole: [0, 2],
        children: []
    },
    // {//
    //     name: '合作者管理',
    //     icon: 'md-people',
    //     userRole: [0, 1],
    //     children: [{
    //         url: '/home/collaborator',
    //         name: '合作者管理',
    //         userRole: [0, 1],
    //     }]
    // },
    {
        name: '素材管理',
        icon: 'md-photos',
        userRole: [1],
        children: [{
                url: '/home/product',
                name: '商品管理',
                userRole: [1],
            },
            // {
            //     url: '/home/coupon',
            //     name: '优惠券管理',
            //     userRole: [0, 1],
            // },
            //  {//
            //     url: '/home/picture',
            //     name: '图片管理',
            //     userRole: [0, 1],
            // }
        ]
    },
    //{
    //    name: '数据分析',
    //    icon: 'ios-color-filter',
    //    userRole: [0],
    //    children: [{
    //            url: '/home/promoter',
    //            name: '推广者数据分析',
    //            userRole: [0],
    //        },
    //        {
    //            url: '/home/business',
    //            name: '商家数据分析',
    //            userRole: [0],

    //        }
    //    ]
    //},
    // { //
    //     name: '设置',
    //     icon: 'md-settings',
    //     userRole: [0, 1],
    //     children: [{
    //             url: '/home/setup_commission',
    //             name: '佣金管理',
    //             userRole: [0, 1],
    //         },
    //         {
    //             url: '/home/setup_product',
    //             name: '商家信息',
    //             userRole: [0, 1],
    //         },
    //         {//
    //             url: '/home/setup_merchant',
    //             name: '商家管理',
    //             userRole: [0],
    //         },
    //         {//
    //             url: '/home/setup_promoter',
    //             name: '推广者管理',
    //             userRole: [0],
    //         }
    //     ]
    // },
    // { //
    //     name: '统计',
    //     icon: 'ios-stats',
    //     userRole: [0, 1],
    //     children: [{
    //             url: '/home/overview',
    //             name: '统计概览',
    //             userRole: [0, 1],
    //         },
    //         {
    //             url: '/home/sale',
    //             name: '销售统计',
    //             userRole: [0, 1],
    //         }
    //     ]
    // },
    // {//
    //     name: '我的计划',
    //     url: '/home/myplan',
    //     icon: 'md-albums',
    //     userRole: [0,1,2],
    //     children: []
    // },
    // { //
    //     name: '订单中心',
    //     url: '/home/ordercenter',
    //     icon: 'md-albums',
    //     userRole: [0,1,2],
    //     children: []
    // },
    // { //
    //     name: '财务中心',
    //     url: '/home/financialcenter',
    //     icon: 'md-albums',
    //     userRole: [0,1,2],
    //     children: []
    // },
]