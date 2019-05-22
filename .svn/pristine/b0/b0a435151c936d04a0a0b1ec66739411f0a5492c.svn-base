// pages/createCoupon/index.js
/*************
 * 商家创建优惠券
 **************/
import {
  doctorAddCoupon,
} from '../../utils/api'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isOnline: true, //true代表线上使用 false代表门店使用
    isFixedTime: false, //true代表固定时间段  false领取失效
    starTime: "请选择优惠券开始时间", //开始时间
    endTime: "请选择优惠券结束时间", //结束时间
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 优惠券选择使用场景
   */
  selectScenes: function (event) {
    this.setData({
      isOnline: event.currentTarget.dataset.location == "left",
    })
  },
  /**
   * 优惠券选择时间
   */
  selectTime: function (event) {
    this.setData({
      isFixedTime: event.currentTarget.dataset.location == "right",
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  /**
   * 表单提交
   */
  formSubmit(e) {

    if (this.data.isFixedTime) {
      if (this.data.starTime == "请选择优惠券开始时间" || this.data.endTime == "请选择优惠券结束时间") {
        wx.showToast({
          title: '请输入优惠券有效日期',
          icon: 'none'
        })
        return
      }
    } else {
      if (!e.detail.value.couponEndTime) {
        wx.showToast({
          title: '请输入领取失效日期',
          icon: 'none'
        })
        return
      }
    }
    if (!e.detail.value.couponDesc ||
      !e.detail.value.couponMoney || !e.detail.value.couponName ||
      !e.detail.value.couponThreshold) {
      wx.showToast({
        title: '请输入优惠券信息',
        icon: 'none'
      })
      return
    }
    if (this.data.couponThreshold > this.data.couponMoney) {
      wx.showToast({
        title: '优惠券优惠金额不能大于优惠门槛',
        icon: 'none'
      })
      return
    }
    if (this.data.starTime > this.data.endTime) {
      wx.showToast({
        title: '优惠券开始日期不能早于结束日期',
        icon: 'none'
      })
      return
    }
    var pram = {
      couponName: e.detail.value.couponName,
      couponAmount: parseInt(e.detail.value.couponMoney),
      enableAmount: parseInt(e.detail.value.couponThreshold),
      couponDesc: e.detail.value.couponDesc,
      timingType: this.data.isFixedTime ? "1" : "2",
      couponRemark: e.detail.value.couponDesc,
      couponType: this.data.isOnline ? "2" : "1",
    }
    if (this.data.isFixedTime) {
      var data = {
        startDate: new Date(this.data.starTime),
        endDate: new Date(this.data.endTime)
      }
      Object.assign(data, pram)
    } else {
      var data = {
        expiryDate: parseInt(e.detail.value.couponEndTime)
      }
      Object.assign(data, pram)
    }
    doctorAddCoupon(data).then((res) => {
      if (res.resultCode != "1000") {

        return
      }
      let pages = getCurrentPages(); //当前页面
      let prevPage = pages[pages.length - 2]; //上一页面
      prevPage.setData({ //直接给上移页面赋值
        isReloadData: true,
      });
      wx.showToast({
        title: "新增优惠券成功",
        icon: 'none',
        complete: function () {
          setTimeout(function () {

            wx.navigateBack({
              delta: 1, // 回退前 delta(默认为1) 页面
            })
          }, 2000) //延迟时间

        }
      })

    })
  },
  /**
   * 开始时间选择
   */
  bindStartDateChange: function (e) {

    this.setData({
      starTime: e.detail.value
    })
  },
  /**
   * 结束时间选择
   */
  bindEndDateChange: function (e) {

    this.setData({
      endTime: e.detail.value
    })
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