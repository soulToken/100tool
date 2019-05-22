// pages/scanCode/index.js
/*************
 *  可以输入优惠码 已经去扫码页面
 **************/
import {
  getmWriteOffDetailId,
} from '../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isBulletBoxShow: false,
  },

  /**
   * 扫码核销的方法
   */
  scanCodeAction: function() {

    wx.scanCode({
      success: (res) => {
        //根据数据判断是优惠券还是订单
        console.log(res)
        var codeData = JSON.parse(res.result)
        //判断扫码的参数
        if (!res || (!codeData.userCouponId && !codeData.appointmentId) || !codeData.writeOffCode) {
          this.setData({
            isBulletBoxShow: true,
          })
          return
        }
        if (codeData.userCouponId) {
          wx.navigateTo({
            url: '/pages/scanCouponDetail/index?userCouponId=' + codeData.userCouponId + '&writeOffCode=' + codeData.writeOffCode + '&couponId=' + codeData.couponId,
          })

        } else {
          wx.navigateTo({
            url: '/pages/scanOrderDetail/index?appointmentId=' + codeData.appointmentId + '&writeOffCode=' + codeData.writeOffCode,
          })

        }

      },
      fail: (res) => {
        console.log(res)
        if (res.errMsg != "scanCode:fail cancel") {
          wx.showToast({
            title: "扫描失败,请稍后重试",
            icon: 'none'
          })
        }

      }
    })

  },
  /**
   * 搜索点击键盘的方法
   */
  searchSubmit: function(e) {
    if (e.detail.value) {
      console.info('form发生了submit事件，携带数据为：', e.detail.value)
      var pram = {
        writeOffCode: e.detail.value,
      }
      getmWriteOffDetailId(pram).then((res) => {
        if (res.resultCode != "1000" || !res.result || !res.result.id ) {
          this.setData({
            isBulletBoxShow: true,
          })
          return;
        }
        if (res.result.isCoupon == "1") {
          wx.navigateTo({
            url: '/pages/scanCouponDetail/index?userCouponId=' + res.result.id + '&writeOffCode=' + e.detail.value,
          })

        } else {
          wx.navigateTo({
            url: '/pages/scanOrderDetail/index?appointmentId=' + res.result.id + '&writeOffCode=' + e.detail.value,
          })

        }
      })
    }

  },

  /**
   * 点击展示操作
   */
  bulletBoxClick: function() {

    this.setData({
      isBulletBoxShow: false,
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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