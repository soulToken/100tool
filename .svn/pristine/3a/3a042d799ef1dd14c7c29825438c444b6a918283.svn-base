// pages/couponList/index.js
/*************
 * 优惠券列表  优惠券管理
 **************/
import {
  getValidCouponList,
  doctorDelCoupon,
} from '../../utils/api'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    position: 0, //请求的条数
    couponListData: [], //优惠券列表
    isNoMoreData: false, //是否有更多数据
    isReloadData:false,//是否重新刷新数据

  },
  // 新增优惠券
  addNewCoupon: function () {
    wx.navigateTo({
      url: '/pages/createCoupon/index',
    })
  },
  /**
   * 显示删除按钮
   */
  showDeleteButton: function (e) {
    let productIndex = e.currentTarget.dataset.productindex
    this.setXmove(productIndex, -65)
  },

  /**
   * 隐藏删除按钮
   */
  hideDeleteButton: function (e) {
    let productIndex = e.currentTarget.dataset.productindex
    this.setXmove(productIndex, 0)
  },

  /**
   * 设置movable-view位移
   */
  setXmove: function (productIndex, xmove) {
    let couponListData = this.data.couponListData
    couponListData[productIndex].xmove = xmove

    this.setData({
      couponListData: couponListData
    })
  },

  /**
   * 处理movable-view移动事件
   */
  handleMovableChange: function (e) {
    if (e.detail.source === 'friction') {
      if (e.detail.x < -30) {
        this.showDeleteButton(e)
      } else {
        this.hideDeleteButton(e)
      }
    } else if (e.detail.source === 'out-of-bounds' && e.detail.x === 0) {
      this.hideDeleteButton(e)
    }
  },

  /**
   * 处理touchstart事件
   */
  handleTouchStart(e) {
    this.startX = e.touches[0].pageX
  },

  /**
   * 处理touchend事件
   */
  handleTouchEnd(e) {
    if (e.changedTouches[0].pageX < this.startX && e.changedTouches[0].pageX - this.startX <= -30) {
      this.showDeleteButton(e)
    } else if (e.changedTouches[0].pageX > this.startX && e.changedTouches[0].pageX - this.startX < 30) {
      this.showDeleteButton(e)
    } else {
      this.hideDeleteButton(e)
    }
  },

  /**
   * 删除产品
   */
  handleDeleteProduct: function ({
    currentTarget: {
      dataset: {
        id
      }
    }
  }) {
    var that = this;
    wx.showModal({
      title: '确定停用该优惠券吗',
      content: '停用前已经领取该优惠的用户仍然可以使用,\n停用后未领取的用户不可领取改优惠',
      success: function (res) {
        if (res.confirm) {
          let couponListData = that.data.couponListData
          let productIndex = couponListData.findIndex(item => item.id == id)
          //删除优惠券
          var pram = {
            couponId: id,
          }
          doctorDelCoupon(pram).then((res) => {
            if (res.resultCode != "1000") {

              return;
            }
            couponListData.splice(productIndex, 1)
            that.setData({
              couponListData
            })
            if (couponListData[productIndex]) {
              that.setXmove(productIndex, 0)
            }
          })

        } else {
          let couponListData = that.data.couponListData
          let productIndex = couponListData.findIndex(item => item.id == id)
          if (couponListData[productIndex]) {
            that.setXmove(productIndex, 0)
          }
        }

      }
    })


  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getValidCouponListData()
  },
  /**
   * 获取优惠券列表
   */
  getValidCouponListData: function () {
    if (this.data.isNoMoreData) {
      wx.showToast({
        title: "没有更多优惠券",
        icon: 'none'
      })
      return
    }
    var pram = {
      position: this.data.position,
      count: 10,
    }
    getValidCouponList(pram).then((res) => {
      if (res.resultCode != "1000") {
    
        return;
      }
      if (res.result.length != 0) { // 数组不为空
        var array = this.data.couponListData.concat(res.result);
        this.setData({
          couponListData: array,
          isNoMoreData: false,
        })
      } else {
        wx.showToast({
          title: "没有更多优惠券",
          icon: 'none'
        })
        this.setData({
          isNoMoreData: true,
        })
      }

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
      this.setData({
        isReloadData:false,
        couponListData:[],
        position: 0,
        isNoMoreData: false,
      })
      this.getValidCouponListData()
      
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      position: this.data.position += 10,
    })
    this.getValidCouponListData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})