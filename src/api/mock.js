import Mock from 'mockjs'
import homeApi from './mockServerData/home'
import userApi from './mockServerData/user'
import permissionApi from './mockServerData/permission'
// 拦截接口
Mock.mock(/home\/getData/,homeApi.getStatisticalData)
Mock.mock(/user\/getUser/,userApi.getUserList)

Mock.mock(/user\/addUser/,'post',userApi.createUser)
Mock.mock(/user\/editUser/,'post',userApi.updateUser)
Mock.mock(/user\/delUser/,'post',userApi.deleteUser)

Mock.mock(/permission\/getMenu/,'post',permissionApi.getMenu)