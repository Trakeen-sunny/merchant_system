// 注册
export const register = {
    path: '/web/base/register',
    method: 'post'
}

// 登录
export const loginIn = {
    path: '/web/base/login',
    method: 'post'
}

// 退出
export const logout = {
    path: '/web/base/logout',
    method: 'post'
}

// 获取用户信息
export const getUsersByToken = {
    path: '/web/base/getUsersByToken',
    method: 'post'
}

// 获取网红用户信息
export const getUsersById = {
    path: '/web/users/queryById',
    method: 'get'
}

// 修改网红用户信息
export const putUser = {
    path: '/web/users/edit',
    method: 'put'
}

// 获取媒介角色信息
export const getQueryMediaList = {
    path: '/web/users/queryMediaList',
    method: 'get'
}

// 获取各国语言
export const getLanguages = {
    path: '/web/country/languages',
    method: 'get'
}

// 获取货币下拉
export const getCurrencys = {
    path: '/web/country/currencys',
    method: 'get'
}

// 获取国家列表
export const getCountrys = {
    path: '/web/country/countrys',
    method: 'get'
}

// 获取国家 -- 银行联动
export const getBankList = {
    path: '/web/country/BankList',
    method: 'get'
}

//获取用户账户信息
export const getAccount = {
    path: '/web/userAccount/list',
    method: 'get'
}

//编辑用户账号信息
export const editAccount = {
    path: '/web/userAccount/edit',
    method: 'put'
}
//新增用户账号信息
export const addAccount = {
    path: '/web/userAccount/save',
    method: 'post'
}

//获取地区手机号前缀
export const getTelCode = {
    path: '/web/country/telCode',
    method: 'get'
}

//获取商家信息
export const getPersonInfo = {
    path: '/web/business/user/info',
    method: 'get'
}

//修改商家信息
export const setPersonInfo = {
    path: '/web/business/user/edit',
    method: 'put'
}

