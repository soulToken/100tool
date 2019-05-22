//app.js
import {
  getUserOpenId,
  getClinicConfig
} from './utils/api'

App({
  onLaunch: function () {
    //调用一次 保存用户信息
    var self=this;
    this.setupLogin()
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log("code" + res.code)
        getUserOpenId({ code: res.code, srAppSecret: "9caea0fd3a13231e09a1a2b6dbe40c70", srAppId: "wx875900ed66d52cfb", }).then((res) => {
          if (res.result.statusCode === "200") {
            //要通过 userId 判断数据库中是否已经有 用户信息数据
            this.globalData.weChatParam = res.result
          }
          if (self.callback) { //这个函数名字和你定义的一样即可

            self.callback() //执行定义的回调函数
          }
        })
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })


  },
  //设置登录信息
  setupLogin: function (data) {
    if (data) {
      // 如果传入了数据（比如初次登录），就更新
      wx.setStorageSync('userLoginInfo', data)
    } else {
      // 如果没有就从本地storage里取登录信息
      data = wx.getStorageSync('userLoginInfo')
    }

    if (data && data != [] && data != "") {
      this.globalData.userLoginInfo = data
      this.globalData.httpRequestData =  {
        mobile: data.mobile,
        token: data.token,
        doctorId: data.doctorId,
        clinicId: data.clinicId,
       
      }
    } else {
      this.globalData.userLoginInfo = null
      this.globalData.httpRequestData = null
    }
  },

  globalData: {
    userInfo: null,
    userLoginInfo: null, //用户登录信息
    httpRequestData:null,//请求信息
    weChatParam:null,//微信信息
  }
})