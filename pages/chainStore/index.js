import {
  getClinincInfo
} from '../../utils/api'

Page({
  data: {
    list: []
  },

  onLoad: function(options) {


  },
  onShow() {
    this.getList()
  },

  getList() {

    getClinincInfo().then((res) => {
      this.setData({
        list: res.result || []
      })
    }).catch((err) => {

    });
  },
  goDetail(e) {
    var id = e.target.dataset.id;
    var index = e.target.dataset.index;
    wx.setStorageSync('clicicInfo', this.data.list[index])
    wx.navigateTo({
      url: '/pages/storeDetail/index',
    })
  }
})