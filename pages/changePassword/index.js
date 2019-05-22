import {
  modifyPassword
} from '../../utils/api'
import { hexMD5 } from "../../utils/md5.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clinicName: "您正在修改密码",
    isManyClinics:false,
  },

  /**
   * 表单提交
   */
  formSubmit(e) {

    if (e.detail.value.oldPassword.length < 6 || e.detail.value.oldPassword.length > 12) {
      wx.showToast({
        title: '旧密码长度不正确',
        icon: "none"
      })
      return;
    }
    if (e.detail.value.newPassword.length < 6 || e.detail.value.newPassword.length > 12 || e.detail.value.newPassword2.length < 6 || e.detail.value.newPassword2.length > 12) {
      wx.showToast({
        title: '新密码长度不正确',
        icon: "none"
      })
      return;
    }
    if (e.detail.value.newPassword != e.detail.value.newPassword2) {
      wx.showToast({
        title: '请确认新密码是否一致',
        icon: "none"
      })
      return;
    }
    var params = {
      password: hexMD5(e.detail.value.newPassword)
    }
    modifyPassword(params).then((res) => {
      if (res.resultCode != "1000") {

        return
      }
      wx.showToast({
        title: "修改成功",
        icon: 'none',
        complete: function() {


          wx.removeStorageSync('userLoginInfo')
          setTimeout(function() {
            //未登录跳转去登录
            wx.switchTab({
              url: '/pages/tabMine/index',
              success: function () {
                wx.redirectTo({
                  url: '/pages/login/index',
                })
              } //成功后的回调；
            })
          }, 2000) //延迟时间

        }
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var userLoginData = wx.getStorageSync('userLoginInfo')
    this.setData({
      clinicName: userLoginData.clinicName,
      isManyClinics: userLoginData.isManyClinics == 1,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})