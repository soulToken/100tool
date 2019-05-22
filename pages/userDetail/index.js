import {
  doctorModifyUserInfo
} from '../../utils/api'

Page({

  /**
   * 页面的初始数据
   */
  data: {

    userInfo:null,
    remarkValue:'',
    inputType: '',
    inputShow: false,
    inputValue: '',
    focus: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      userInfo: JSON.parse(options.userInfo),
      remarkValue: JSON.parse(options.userInfo).noteName,
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
    // var that = this;
    // wx.showToast({
    //   title: '修改成功',
    //   icon: 'none',
    //   duration: 2000,
    //   complete: function () {
    //     that.changePrePageData()
    //   }
    // })
  },
  /**
    打电话
   */
  callAction: function (e) {

    if (this.data.userInfo.mobile){
      wx.makePhoneCall({
        phoneNumber: this.data.userInfo.mobile,
      })
    }
   
  },
  /**
   * 修改备注
   */
  changeRemarkAction: function(e) {
    this.setData({
      inputType: 'text',
      inputShow: true,
      inputValue: '',
      focus: true
    })
  },

  bindfocus: function (e) {
    this.setData({
      bottom: e.detail.height
    })
  },


  //监听input失去焦点

  bindblur: function (e) {
    this.hide()
  },

  hide() {
    this.setData({
      inputShow: false,
      focus: true
    })
  },
 
  inputChange(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  change() {
  
    var that = this;
    var type = this.data.inputType;
    var inputValue = this.data.inputValue;
    if (inputValue.trim().length == 0) {
      wx.showToast({
        title: '输入内容不能为空',
        icon: 'none',
        duration: 2000
      })
      return
    }
    var par = {
      userId: this.data.userInfo.userId,
      noteName: inputValue,
    }
    doctorModifyUserInfo(par).then((res) => {
      if (res.resultCode != "1000") {

        return
      }
      this.setData({
        remarkValue: inputValue,
      })
      wx.showToast({
        title: '修改成功',
        icon: 'none',
        duration: 2000,
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

  bindconfirm(e) {
    console.log('ee')
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