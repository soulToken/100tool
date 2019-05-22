// pages/mine/index.js
/*************
 * 我的页面 tabbr
 **************/
// pages/home/index.js
import {
    getClinincBasicInfo
  } from '../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clinicName:'',
    //功能数据数组
    mineDataArr: [
      { //个人信息
        imgLocation: '/images/icon_personalInformation.png',
        functionName: "checkMineInfo",
      },
      
      {// 我的门店
        imgLocation: '/images/icon_myStore.png',
        functionName: "myStore",
      },
      {//我的同事
        imgLocation: '/images/icon_colleague.png',
        functionName: "myColleague",
      },
      {//业务咨询
        imgLocation: '/images/icon_advisory.png',
        functionName: "businessAdvisory",
      },
      {//收获服务
        imgLocation: '/images/icon_afterSales.png',
        functionName: "afterSales",
      },
      {//在线服务
        imgLocation: '/images/icon_onlineService.png',
        functionName: "onlineService",
      },
     
    ],
    isManyClinics: false,//是否是连锁
  },

  // 查看个人信息的
  checkMineInfo: function () {
    wx.navigateTo({
      url: '/pages/mineDetail/index',
    })
  },

  /**
   *  我的门店
   */
  myStore: function (options) {
   
    if(this.data.isManyClinics){ 
        wx.navigateTo({
            url: '/pages/chainStore/index'
        })
        }else{
            var userLoginInfo=wx.getStorageSync('userLoginInfo');
            var param={
                token:userLoginInfo.token,
                clinicId:userLoginInfo.clinicId,
                mobile:userLoginInfo.mobile
           }
            getClinincBasicInfo(param).then((res)=>{
                wx.setStorageSync('clicicInfo',res.result)
                wx.navigateTo({
                    url: '/pages/storeDetail/index'
                })
            })
        }
  },
  /**
   *  我的同事
   */
  myColleague: function (options) {
    wx.navigateTo({
      url: '/pages/colleague/index',
    })
  },
  /**
   *  业务咨询
   */
  businessAdvisory: function (options) {
    // 需要打电话
    wx.makePhoneCall({
      phoneNumber: "400-0755929",
    })

  },
  /**
   *  售后服务
   */
  afterSales: function (options) {
    // 需要打电话
    wx.makePhoneCall({
      phoneNumber: "400-0755929", 
    })

  },
  /**
   *  在线预约
   */
  onlineService: function (options) {
    // 调用在线客服
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userLoginData = wx.getStorageSync('userLoginInfo')
    this.setData({
      clinicName:userLoginData.clinicName,
      isManyClinics: userLoginData.isManyClinics == 1,
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