// pages/orderDetail/index.js
/*************
 * 订单详情页面   
 **************/

import {
  getAppointmentDetail,
  doctorCancelAppointment,
  doctorConfirmAppointment,
  writeOffPaymentAppointment,
} from '../../utils/api'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    appointmentId: '', //预约id 接受外面传参
    appointmentDate: '', //预约时间
    appointmentMobile: '', //预约电话
    appointmentName: '', //预约人
    appointmentServeritem: '到店选择', //预约项目
    appointmentTime: '', //预约具体时间
    doctorName: '未指定', //医生名字
    paymentAmount: '', //支付金额
    paymentId: '', //支付订单号
    symptomSelect: '未填写', //预约症状
    symptomDesc: '未填写', //症状描述
    appointmentSex: '男', //预约性别
    discountAmount: '0', //优惠金额
    paymentOrderId: '', //订单号
    appointmentStatus: '',//预约状态
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      appointmentId: options.appointmentId,
    })
    this.getAppointmentDetailData()
  },
  /**
   * 查看订单详情
   */
  getAppointmentDetailData: function () {
    var param = {
      appointmentId: this.data.appointmentId,
    }
    getAppointmentDetail(param).then((res) => {
      if (res.resultCode != "1000") {

        return;

      }
      this.setData({
        appointmentDate: res.result.appointmentDate, //预约时间
        appointmentMobile: res.result.appointmentMobile, //预约电话
        appointmentName: res.result.appointmentName, //预约人
        appointmentServeritem: res.result.appointmentServeritem ? res.result.appointmentServeritem : "到店选择", //预约项目
        appointmentTime: res.result.appointmentTime, //预约具体时间
        doctorName: res.result.doctorName ? res.result.doctorName : "未指定", //医生名字
        paymentAmount: res.result.paymentAmount, //支付金额
        paymentId: res.result.paymentId, //支付订单号
        symptomSelect: res.result.symptomSelect ? res.result.symptomSelect : "未填写", //预约症状
        symptomDesc: res.result.symptomDesc ? res.result.symptomDesc : "未填写", //症状描述
        appointmentSex: (res.result.appointmentSex == 1) ? "男" : "女", //预约性别
        discountAmount: res.result.discountAmount ? res.result.discountAmount : "0", //优惠金额
        paymentOrderId: res.result.paymentOrderId,
        appointmentStatus: res.result.appointmentStatus,
      })
    })
  },
  /**
   * 给用户打电话
   */
  callCustom: function () {

    wx.makePhoneCall({
      phoneNumber: this.data.appointmentMobile,
    })
  },
  /**
   * 取消预约
   */
  cancelApointment: function () {
    var that = this;
    var param = {
      appointmentId: this.data.appointmentId,
    }
    doctorCancelAppointment(param).then((res) => {
      if (res.resultCode != "1000") {

        return;
      }

      wx.showToast({
        title: "成功取消订单",
        icon: 'none',
        complete: function () {
          that.changePrePageData()
        }
      })
    })
  },
  /**
   * 扫码核销
   */
  scanCode: function () {
    var that = this;
    wx.scanCode({
      success: (res) => {
        var param = {
          appointmentId: this.data.appointmentId,
          writeOffCode: res.result,
        }
        writeOffPaymentAppointment(param).then((res) => {
          if (res.resultCode != "1000") {

            return;
          }

          wx.showToast({
            title: "核销成功",
            icon: 'none',
            complete: function () {
              that.changePrePageData()

            }
          })
        })

      },
      fail: (res) => {
        wx.showToast({
          title: res.errMsg,
          icon: 'none'
        })
      }
    })


  },
  /**
   * 确认到店
   */
  confirmAction: function () {
    var that = this;
    var param = {
      appointmentId: this.data.appointmentId,
    }
    doctorConfirmAppointment(param).then((res) => {
      if (res.resultCode != "1000") {

        return;
      }
      wx.showToast({
        title: "成功确认订单",
        icon: 'none',
        complete: function () {
          that.changePrePageData()
        }
      })
    })
  },

  changePrePageData: function () {
    let pages = getCurrentPages(); //当前页面
    let prevPage = pages[pages.length - 2]; //上一页面
    prevPage.setData({ //直接给上移页面赋值
      isReloadData: true,
    });
    setTimeout(function () {
      wx.navigateBack({
        delta: 1, // 回退前 delta(默认为1) 页面
      })
    }, 2000) //延迟时间

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