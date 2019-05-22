// pages/home/index.js
import {
  inforStatistics,
  getBannerList,
  getClinincInfo,
  getClinincBasicInfo
} from '../../utils/api'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerImgs: [], //banner图片
    //功能数据数组
    functionDataArr: [{ //扫码核销 
        imgLocation: '/images/icon_scanCode.png',
        functionName: "scanCodeAction",
      },
      { // 预约管理数据
        imgLocation: '/images/icon_appointmentManagement.png',
        functionName: "appointmentManagement",
      },
      { //人员排班数据
        imgLocation: '/images/order_tab.png',
        functionName: "personnelManagement",
      },
      { //微官网数据
        imgLocation: '/images/echart_tab.png',
        functionName: "officialWebsite",
      },
      { //优惠管理数据
        imgLocation: '/images/icon_preferentialManagement.png',
        functionName: "preferentialManagement",
      },
      { //我的门店 数据
        imgLocation: '/images/icon_myStore.png',
        functionName: "myStore",
      },
    ],
    totalIncome: '0', //总收入
    totalUsers: '0', //总用户数
    //详细数据数组
    detailDataArr: [{ //今日收入金额
        imgLocation: '/images/icon_todayIncome.png',
        titleStr: "今日收入金额",
        detailValue: "0",
      },
      { //今日预约人数
        imgLocation: '/images/icon_todayAppointment.png',
        titleStr: "今日预约人数",
        detailValue: "0",
      },
      { //今日订单数量
        imgLocation: '/images/icon_todayOrder.png',
        titleStr: "今日订单数量",
        detailValue: "0",
      },
      { //今日浏览人数
        imgLocation: '/images/icon_todayPeopleCount.png',
        titleStr: "今日浏览人数",
        detailValue: "0",
      },
    ],
    imgHeight: 0, //图片高度
    isShowIndicator: true,
    isManyClinics: null,


  },
  /**
   * 扫码核销
   */
  scanCodeAction: function() {
    wx.navigateTo({
      url: '/pages/scanCode/index',
    })
  },
  /**
   * 预约管理
   */
  appointmentManagement: function(options) {

    wx.navigateTo({
      url: '/pages/appointmentManagement/index',
    })
  },
  /** 
   * 优惠管理
   */
  preferentialManagement: function(options) {
    wx.navigateTo({
      url: '/pages/couponList/index',
    })
  },
  /**
   *   订单管理
   */
  personnelManagement: function(options) {
    wx.navigateTo({
        url: '/pages/tabOrder/index',
      })
  },
  /**
   *  运营报表
   */
  officialWebsite: function(options) {
    wx.showToast({
      title: '该功能正在完善中,敬请期待',
      icon: 'none',
    })
  },
  /**
   *  我的门店
   */
  myStore: function(options) {
    if (this.data.isManyClinics && this.data.isManyClinics == 1) {
      wx.navigateTo({
        url: '/pages/chainStore/index'
      })
    } else {

      getClinincBasicInfo().then((res) => {
        wx.setStorageSync('clicicInfo', res.result)
        wx.navigateTo({
          url: '/pages/storeDetail/index'
        })
      })

    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getInforStatistics()
    this.getBannerData()
    var userLoginData = wx.getStorageSync('userLoginInfo')
    this.setData({
      isManyClinics: userLoginData.isManyClinics
    })
  },

  /**
   * 获取首页信息
   */
  getInforStatistics: function() {
    var homeDataArr = [];
    inforStatistics().then((res) => {
      if (res.resultCode != "1000") {

        return
      }
      homeDataArr = [
        res.result.paymentAmount,
        res.result.appointmentNum,
        res.result.paymenAppointmentNum,
        res.result.visitsTimes,
      ]
      for (var i = 0; i < this.data.detailDataArr.length; i++) {
        var temData = this.data.detailDataArr[i];
        temData.detailValue = homeDataArr[i];
      }
      homeDataArr = this.data.detailDataArr;
      this.setData({
        totalIncome: res.result.allPaymentAmount, //总收入
        totalUsers: res.result.customerNum, //总用户数
        detailDataArr: homeDataArr,
      })
    })
  },
  /**
   * 获取banner信息
   */
  getBannerData: function() {
    getBannerList().then((res) => {
      if (res.resultCode != "1000") {

        return
      }
      this.setData({
        bannerImgs: res.result,
        isShowIndicator: (res.result.length != 1),
      })
    })
  },
  /**
   * banner图片点击时间跳转到webview
   */
  swiperTapAction: function(event) {

    wx.navigateTo({
      url: '/pages/webview/index?webUrl=' + event.currentTarget.dataset.value,

    })
  },

  imageLoad(ev) {
    let src = ev.currentTarget.dataset.src,
      width = ev.detail.width,
      height = ev.detail.height,
      windowWidth = wx.getSystemInfoSync().windowWidth;
    var rate = width / windowWidth
    //取最小的图片得长款比
    if (this.data.imgHeight && this.data.imgHeight < height / rate) {
      return
    }
    this.setData({
      imgHeight: height / rate
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
    this.getInforStatistics()
    this.getBannerData()
    setTimeout(function() {
      wx.stopPullDownRefresh();
    }, 1000);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  // onShareAppMessage: function () {

  // }
})