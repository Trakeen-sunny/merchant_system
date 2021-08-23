import {
    getUsersByToken
} from "../api/index";
import {
    shopifyStoreQueryByShop,
    shopifyStoreInstall
} from "../api/other";
import http from '../utils/httpRequest';
import {
    i18n
} from '../common/i18n/i18n';

// 获取用户基本信息
export const getUserInfo = function getUserInfo(next) {
    http.request({
        api: getUsersByToken,
        data: {
            shop: ""
        },
        success: (res) => {
            window.localStorage.setItem("userinfo", JSON.stringify(res.result));
            let timer = setTimeout(() => {
                console.log(i18n.locale)
                if (res.result && res.result.userRole != 2) {
                    next("/home");
                    i18n.locale = "zh";
                } else {
                    next("/home/acount_detail");
                    i18n.locale = "en";
                }
                clearTimeout(timer);
            }, 1000);
            this.$Message.success("登录成功!");
        },
    });
}
// 判断商品是否安装
export const getshopifyStoreQueryByShop = function getshopifyStoreQueryByShop(shop, code, next) {
    http.request({
        api: shopifyStoreQueryByShop,
        data: {
            shop: "https://" + shop
        },
        success: (res) => {
            console.log(res.result);

            if (res.result.living) {
                window.localStorage.setItem("token", res.result.token);
                getUserInfo(next);
            } else {
                if (code) {
                    getshopifyStoreInstall(shop, code, next);
                } else {
                    window.location.href = `https://${shop}/admin/oauth/authorize?client_id=151790686c89b0456adba11a4caabe7b
&scope=unauthenticated_read_product_listings,unauthenticated_write_checkouts,unauthenticated_write_customers,unauthenticated_read_customer_tags,read_orders,read_products,unauthenticated_read_content,unauthenticated_read_product_tags&redirect_uri=https://info.cozmox.com`;
                }
            }
        },
    });
}
// 下载
export const getshopifyStoreInstall = function getshopifyStoreInstall(shop, code, next) {
    http.request({
        api: shopifyStoreInstall,
        data: {
            storeUrl: shop,
            code: code
        },
        success: (res) => {
            console.log(res);
            window.localStorage.setItem("token", res.result.token);
            getUserInfo(next);
        },
    });
}