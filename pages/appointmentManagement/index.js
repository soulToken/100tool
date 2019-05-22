// pages/appointmentManagement/index.js
/*************
 *  预约管理页面   包含预约的已经支付还有未支付的订单  包含预约
 **************/
import {
  getFutureDateArr,
  getPastDateArr
} from '../../utils/util'
import {
  getAppointmentList,
} from '../../utils/api'
Page({

  /**
   * 页面的初始数据
   */

  data: {
    dateArr: [],//显示的时间
    selectDate: "",//选中日期 默认当天
    scrollToView:"",//滑动到指定位置
    totalNum:"0",//当日预约数量
    cancelNum:"0",//当日已经取消数量
    completeNum:"0",//当日完成数量
    appointmentList:[],//预约的数据
    isReloadData:false,//页面show的时候是否刷新数据
  },
  /**
   * 选择时间查看
   */
  chooseDate: function (event) {
    this.setData({
      selectDate: event.currentTarget.dataset.id,
    })
    this.getAppointmentListData()
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
      selectDate:getFutureDateArr(7)[0].time,
      scrollToView:"id"+ getFutureDateArr(7)[0].time,
    })
    this.getAppointmentListData()
    
  },

  getAppointmentListData:function () {
     var param = {
      dateTime:this.data.selectDate,
    }
    getAppointmentList(param).then((res) =>{
      if (res.resultCode != "1000") {

          return;
      }
      this.setData({
        totalNum:res.result.total,
        cancelNum:res.result.cacel,
        completeNum:res.result.completeNum,
        appointmentList:res.result.appointmentList,
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
    if (this.data.isReloadData){
      this.getAppointmentListData()
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
    this.getAppointmentListData()
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