// pages/order/index.js
/*************
 * 订单页面 tabbar
 **************/
import {
  getFutureDateArr,
  getPastDateArr
} from '../../utils/util'
import {
  getPaymenAppointmentList,
} from '../../utils/api'
Page({

  /**
   * 页面的初始数据
   */

  data: {
    dateArr: [],
    selectDate: "", //选中日期 默认当天
    scrollToView: "", //滑动到指定位置
    totalPaymentAcount: "0", //当日预约数量
    cancelNum: "0", //当日已经取消数量
    orderNum: "0", //当日订单数量
    orderList: [], //预约的数据
    isReloadData:false,//pageshow的时候是否刷新数据
  },
  /**
   * 选择时间查看
   */
  chooseDate: function (event) {
    this.setData({
      selectDate: event.currentTarget.dataset.id,
    })
    this.getPaymenAppointmentListData()
  },
  /**
   * 查看订单详情
   */
  checkOrderDetail: function (event) {
    
    if (event.currentTarget.dataset.appointmentid.length <= 0){
      wx.showToast({
        title:"暂时无法查看详情",
        icon:"none"
      })
      return
    }
    wx.navigateTo({
      url: '/pages/orderDetail/index?appointmentId='+event.currentTarget.dataset.appointmentid,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      dateArr: getPastDateArr(30).concat(getFutureDateArr(7)),
      selectDate: getFutureDateArr(7)[0].time,
      scrollToView: "id" + getFutureDateArr(7)[0].time,
    })
    this.getPaymenAppointmentListData()
  },
  /**
   * 获取订单列表
   */
  getPaymenAppointmentListData: function () {
    var param = {
      dateTime:this.data.selectDate,
    }
    getPaymenAppointmentList(param).then((res) => {

      if (res.resultCode != "1000") {
     
        return;
      }
      this.setData({
        totalPaymentAcount: res.result.totalPaymentAcount,
        cancelNum: res.result.cacel,
        orderNum: res.result.total,
        orderList: res.result.appointmentList,
      })
    })
  },
  

  /**
   * 查看订单详情
   */
  checkOrderDetail: function (event) {

    if (event.currentTarget.dataset.appointmentid.length <= 0) {
      wx.showToast({
        title: "暂时无法查看详情",
        icon: "none"
      })
      return
    }
    wx.navigateTo({
      url: '/pages/orderDetail/index?appointmentId=' + event.currentTarget.dataset.appointmentid,
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
    if (this.data.isReloadData){
      this.getPaymenAppointmentListData()
      this.setData({
        isReloadData:false,
      })
    }
    
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
    this.getPaymenAppointmentListData()
    setTimeout(function () {
      wx.stopPullDownRefresh();
    }, 1000);
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