// pages/index/index.js
//*************
// 第一个加载的页面
// 根据用户登陆情况跳转不同的页面
/***************** */
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var userLoginData = wx.getStorageSync('userLoginInfo') 
    //判断是否有用户的登陆信息 有就跳转到首页 
    if (userLoginData && userLoginData.token && userLoginData.mobile){
        wx.switchTab({
          url: '/pages/tabHome/index',
        })
        
    }else{
      //跳转去登陆
        wx.redirectTo({
          url: '/pages/login/index',
        })
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