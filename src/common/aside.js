export const aside = [
    {
        name:'桌面',
        url:'/home',
        icon:'md-albums',
        children:[]
    },
    {
        name:'首页',
        icon:'ios-appstore',
        children:[
            {
                url:'/home/message',
                name:'消息通知',
            }
        ]
    },
    {
        name:'财务中心',
        icon:'logo-skype',
        children:[
            {
                url:'/home/acount_detail',
                name:'账户收支情况',

            },
            // {
            //     url:'/home/commision',
            //     name:'佣金支出',
                
            // },{
            //     url:'/home/profit',
            //     name:'推荐收益明细',
                
            // },
            {
                url:'/home/recharge',
                name:'充值记录',
                
            }
            // {
            //     url:'/home/order',
            //     name:'订单中心',
            // }
        ]
    },
    {
        name:'订单中心',
        url:'/home/order',
        icon:'md-book',
        children:[]
    },
    {
        name:'合作者管理',
        icon:'md-people',
        children:[
            {
                url:'/home/collaborator',
                name:'合作者管理',
            }
        ]
    },
    {
        name:'素材管理',
        icon:'md-photos',
        children:[
            {
                url:'/home/product',
                name:'商品管理',

            },
            {
                url:'/home/coupon',
                name:'优惠券管理',
                
            },{
                url:'/home/picture',
                name:'图片管理',
                
            }
        ]
    },{
        name:'设置',
        icon:'md-settings',
        children:[
            {
                url:'/home/setup_commission',
                name:'佣金管理',
            },
            {
                url:'/home/setup_product',
                name:'商家信息',
            }
        ]
    },
    {
        name:'统计',
        icon:'ios-stats',
        children:[
            {
                url:'/home/overview',
                name:'统计概览',
            },
            {
                url:'/home/sale',
                name:'销售统计',
            }
        ]
    }
]