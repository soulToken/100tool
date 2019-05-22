// pages/mineDetail/index.js
/*************
 *  用户信息详情页面 个人信息
 **************/
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '授权后显示姓名',
    userPhone: '授权后显示手机号',
    imageUrl: '/images/icon_couponbackground.png',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(getApp().globalData.userInfo)
    if (!getApp().globalData.userInfo) {
      wx.navigateTo({
        url: "/pages/authorization/index?id=1", //跳转页面的路径，可带参数 ？隔开，不同参数用 & 分隔；相对路径，不需要.wxml后缀
        success: function () { } //成功后的回调；
        //结束后的回调(成功，失败都会执行)
      })
      return
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (getApp().globalData.userInfo) {
      this.setData({
        userName: getApp().globalData.userInfo.nickName,
        userPhone: getApp().globalData.httpRequestData.mobile,
        imageUrl: getApp().globalData.userInfo.avatarUrl,
      })
    }
  },
  /**
   * 修改密码的操作
   */
  changePasswordAction: function () {
    wx.navigateTo({
      url: '/pages/changePassword/index',
    })
  },
  /**
   * 注销登陆的操作
   */
  logoutAction: function () {
    wx.showModal({
      title: '注销登录',
      content: '是否确定注销登陆当前账户',
      success: function (res) {
        if (res.confirm) {
          wx.removeStorageSync('userLoginInfo')
          //未登录跳转去登录
          wx.switchTab({
            url: '/pages/tabMine/index',
            success: function () {
              wx.redirectTo({
                url: '/pages/login/index',
              })
             } //成功后的回调；
          })
         
    
        }
      }
    })

  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})