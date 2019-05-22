// pages/user/index.js
/*************
 * 用户
 **************/
import {
  getClinicUserInfo
} from '../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfoList: [],
    savaInfoList:[],
    inputValue:'',//输入框的文字
    positionValue:0,
    isCanRequest:true,//是否可以下啦刷新
    isReloadData: false,//pageshow的时候是否刷新数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getClinicUserInfoRequest()
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

    if (this.data.isReloadData) {
      this.setData({
        isCanRequest: true,
        positionValue: 0,
      })
      this.getClinicUserInfoRequest()
    }
  },

  /**
  * 获取用户列表信息
  */
  getClinicUserInfoRequest: function () {

    if (!this.data.isCanRequest) {
      wx.hideNavigationBarLoading()
      wx.showToast({
        title: '没有更多数据',
        icon: 'none',
      })
      return;
    }
    var prama = {
      keyword: this.data.inputValue,
      count: 10,
      position: this.data.positionValue
    }
    getClinicUserInfo(prama).then((res) => {
      wx.hideNavigationBarLoading()
      if (res.resultCode != "1000") {

        return
      }

      var temData = [];
      if (res.result.length == 0) {
        this.setData({
          isCanRequest: false,
        })
        wx.showToast({
          title: '没有更多数据',
          icon: 'none',
        })
        return;
      }
     
      if (this.data.userInfoList) {
        temData = this.data.userInfoList.concat(res.result)

      } else {
        temData = res.result
      }
      if (this.data.isReloadData) {
        temData = res.result
        this.setData({
          isReloadData: false,
        })
      }
      this.setData({
        userInfoList: temData,
        savaInfoList: temData,
      })
    })
  },
  /**
   * 查看用户详情
   */
  checkUserInfoDetail: function(event) {
    wx.navigateTo({
      url: '/pages/userDetail/index?userInfo=' + JSON.stringify(event.currentTarget.dataset.userinfo),
    })
  },
  /**
   * 搜索点击键盘的方法
   */
  searchSubmit: function(e) {
    if (e.detail.value) {
      console.info('form发生了submit事件，携带数据为：', e.detail.value)
      this.setData({
        inputValue: e.detail.value,
        isCanRequest: true,
      })
      var prama = {
        keyword: e.detail.value,
        position:0,
        count: 10,
      }
      getClinicUserInfo(prama).then((res) => {
        if (res.resultCode != "1000") {

          return
        }
        if (res.result.length > 0){
          this.setData({
            userInfoList: res.result,
          })
        }else{
          wx.showToast({
            title: '暂无相关数据',
            icon:'none',
          })
        }
        
      })
    }
  },
  /**
   * 取消的方法
   */
  cancelSearch: function(e) {
    this.setData({
      inputValue:'',
      userInfoList: this.data.savaInfoList,
    })
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
    wx.showNavigationBarLoading()
    this.setData({
      positionValue: this.data.positionValue + 10,
    })
    this.getClinicUserInfoRequest();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})