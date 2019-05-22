// pages/scanOrderDetail/index.js
 /*************
  * 扫描订单详情页面
  **************/
 import {
  getAppointmentDetail,
  writeOffPaymentAppointment,
} from '../../utils/api'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isBulletBoxShow:false,
    appointmentId:null,//预约订单id
    orderData:null,//请求的订单数据
    writeOffCode:null,//核销码
  },
  /**
   * 确认核销的方法
   */
  confirmAction: function () {
    //需要自定义弹框组件
    var pram = {
      appointmentId:this.data.appointmentId,
      writeOffCode:this.data.writeOffCode,
    }
    writeOffPaymentAppointment(pram).then((res) =>{
      if (res.resultCode != "1000") {
          return;
      }
      //这里还需要做核销成功之后的操作
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
      appointmentId:parseInt(options.appointmentId) ,
      writeOffCode:parseInt(options.writeOffCode),
    })
    var pram ={
      appointmentId:this.data.appointmentId,
    }
    getAppointmentDetail(pram).then((res) =>{
      if (res.resultCode != "1000") {
       
        return;
      }
      this.setData({
        orderData:res.result,
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