// pages/couponDetail/index.js
 /*************
  * 扫描优惠券详情页面
  **************/
 import {
  getValidUserCouponDetail,
  doctorWriteOffCoupon,
} from '../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isBulletBoxShow:false,
    userCouponId:null,//用户优惠券id
    couponData:null,//请求的优惠券数据
    writeOffCode:null,//核销码
    couponId: null,//优惠券id
  },
 /**
   * 确认操作
   */
  confirmAction: function () {

    var pram = {
      userCouponId:this.data.userCouponId,
      writeOffCode:this.data.writeOffCode,
    }
    doctorWriteOffCoupon(pram).then((res) =>{
      if (res.resultCode != "1000") {
        
        return;
      }
      //这里还需要做优惠券核销成功之后的操作
      this.setData({
        isBulletBoxShow:true,
      })
    })
  
  },
 /**
   * 点击展示操作
   */
  bulletBoxClick: function () {
    
    this.setData({
      isBulletBoxShow:false,
    })
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userCouponId:parseInt(options.userCouponId),
      writeOffCode:parseInt(options.writeOffCode),
      couponId: parseInt(options.couponId),
    })
    var pram ={
      userCouponId: parseInt(options.userCouponId),
    }
    getValidUserCouponDetail(pram).then((res) =>{
      if (res.resultCode != "1000") {
        
        return;
      }
      this.setData({
        couponData:res.result,
      })
    })
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