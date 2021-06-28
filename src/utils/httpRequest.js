import axios from "axios";

let baseUrl = '';
export default {
    request: function ({
        api,
        data,
        success,
        error
    }) {
        const config = {
            url: baseUrl + api.path,
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
        }
        if (api.method) {
            config.method = api.method;
        }
        if (api.method == 'get') {
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
                success(resData)
            }
        }).catch(function (exception) {
            if (error) {
                error(exception)
            }
        })
        return $http;
    }
}