import axios from "axios";
import {
    Message
} from 'iview';
// let baseUrl = "http://42.192.225.148:6081"; //本地
// let baseUrl = "http://47.88.9.205:6081" // 线上
let baseUrl = "https://myshopfiy.jstgzfy.com:6081" // shopify
export default {
    request: function ({
        api,
        data,
        success,
        error
    }) {
        const config = {
            url: baseUrl + api.path,
            method: "post",
            headers: window.localStorage.getItem("token") ? {
                "Content-Type": "application/json",
                "X-Access-Token": window.localStorage.getItem("token")
            } : {
                "Content-Type": "application/json"
            },
            withCredentials: true,
        }
        if (api.method) {
            config.method = api.method;
        }
        if (api.method == "get") {
            config.params = data
        } else {
            config.data = data
        }
        if (api.dataType) {
            config.dataType = api.dataType;
        }
        if (api.timeout) {
            config.timeout = api.timeout;
        }
        const $http = axios(config)
        $http.then(function (response) {
            let resData = response.data
            if (success) {
                if (resData.code == 0) {
                    success(resData)
                } else {
                    Message.error(resData.message);
                }
            }
        }).catch(function (exception) {
            if (error) {
                error(exception)
            }
        })
        return $http;
    }
};