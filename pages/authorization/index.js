//index.js
//获取应用实例

import {addUser} from '../../utils/api'
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    clinicName:null,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (opotion) {


    this.setData({
      clinicName: getApp().globalData.userLoginInfo.clinicName,
    })
      if(opotion&&opotion.id)
      this.setData({
        form:opotion
      })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        lang:'zh_CN',
        success: res => {
          app.globalData.userInfo = res.userInfo

          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    //判断确认授权时在执行获取数据
    if(!e.detail.userInfo){
      return 
    }
    var param=Object.assign(app.globalData.weChatParam,e.detail.userInfo)
    param.sex=param.gender;
    param.headUrl=param.avatarUrl;
    param.userType=3;
    if(param.sex==2){
      param.sex=0
    }
    var unionId=param.unionId;
    if(!unionId){
      unionId="" 
    }
    wx.navigateBack({
      delta: 1
    })
    console.log(e.detail.userInfo)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
