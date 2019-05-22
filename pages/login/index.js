// pages/login/index.js
/*************
 *   登陆页面
 **************/
import {
  login,
  getVerifyCode,
  passwordLogin
} from '../../utils/api'
import { hexMD5 } from "../../utils/md5.js"
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneNum: "", //电话号码
    codeNum: "", //验证码
    btnText: '获取验证码', //
    timer: 60, //定时器时间
    isDiscodeBtn: false, //验证码按钮是否可以点击
    isCodeLogin:false,//是否是验证码登陆
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
   * 电话号码输入框
   */
  bindPhoneInput: function(e) {
    this.setData({
      phoneNum: e.detail.value,
    })
  },
  /**
   * 验证码输入框输入方法
   */
  bindCodeInput: function(e) {
    this.setData({
      codeNum: e.detail.value
    })
  },

  /**
   * 登陆方法
   */
  loginAction: function(e) {

    if (!this.data.phoneNum || !this.data.phoneNum.trim()) {
      wx.showToast({
        title: '请输入手机号',
        icon: 'none'
      })
      return
    }
    if (this.data.phoneNum.length < 11) {
      wx.showToast({
        title: '手机号格式有误',
        icon: 'none'
      })
      return
    }
    if (this.data.codeNum.length < 6 && this.data.isCodeLogin) {
      wx.showToast({
        title: '验证码格式有误',
        icon: 'none'
      })
      return
    } else if ((this.data.codeNum.length > 16 || this.data.codeNum.length < 6) && !this.data.isCodeLogin) {
      wx.showToast({
        title: '密码格式有误',
        icon: 'none'
      })
      return
    }
    wx.showLoading({
      title: '登录中...',
    })

    if (app.globalData && app.globalData.weChatParam && app.globalData.weChatParam.openId) {
      //判断有没有你要的 没有说明还没返回或者是失败了
      this.getOpenIdLogin()
    } else {
      //这个是时候我们在app的config里定义一个函数 给请求成功后调用
     
      app.callback = () => {
        this.getOpenIdLogin()
      };
    }
    
  },

  getOpenIdLogin:function (res) {

    if (this.data.isCodeLogin){
      var param = {
        mobile: this.data.phoneNum,
        verifyCode: this.data.codeNum,
        openId: app.globalData.weChatParam.openId
      }
      console.log(param)
      login(param).then((res) => {
        wx.hideLoading()
        if (res.resultCode != "1000") {

          return
        }

        app.setupLogin(res.result)
        wx.switchTab({
          url: '/pages/tabHome/index',
        })
      })
    }else{
      //密码登陆
      var param = {
        mobile: this.data.phoneNum,
        password: hexMD5(this.data.codeNum),
        openId: app.globalData.weChatParam.openId
      }
      console.log(param)
      passwordLogin(param).then((res) => {
        wx.hideLoading()
        if (res.resultCode != "1000") {

          return
        }

        app.setupLogin(res.result)
        wx.switchTab({
          url: '/pages/tabHome/index',
        })
      })
    }
   
  },
  /**
   * 获取验证码方法
   */
  getCodeAction: function(e) {

    if (!this.data.phoneNum || !this.data.phoneNum.trim()) {
      wx.showToast({
        title: '请输入手机号',
        icon: 'none'
      })
      return
    }
    if (this.data.phoneNum.length < 11) {
      wx.showToast({
        title: '手机号格式有误',
        icon: 'none'
      })
      return
    }
    getVerifyCode({
      mobile: this.data.phoneNum
    }).then((res) => {
      if (res.resultCode != "1000") {
        return
      }
      this.count()
    })
  },
  /**
   * 倒计时方法
   */
  count: function() {

    if (this.data.isDiscodeBtn) {
      return
    }
    var timer = this.data.timer
    let siv = setInterval(() => {
      this.setData({
        timer: (timer--),
        btnText: timer + 's',
        isDiscodeBtn: true
      }, () => {
        if (timer === 0) {
          clearInterval(siv);
          this.setData({
            btnText: '重新发送',
            timer: 60,
            isDiscodeBtn: false
          })
        }
      });
    }, 1000);

  },
  /**
   * 修改登陆方式
   */
  switchLoginTypeAction:function(){

    var temLoginType = this.data.isCodeLogin ? false : true;
    this.setData({
      isCodeLogin: temLoginType,
    })
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