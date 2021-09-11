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

// 获取媒介角色信息
export const getQueryMediaList = {
    path: '/web/users/queryMediaList',
    method: 'get'
}

// 修改网红用户信息
export const putUser = {
    path: '/web/users/edit',
    method: 'put'
}