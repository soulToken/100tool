var BASE_URL = 'https://clinic.100care.cn';
// var BASE_URL = 'https://sit.100care.cn';
// var BASE_URL = 'http://192.168.0.123:84';


var header = {
  'content-type': 'application/x-www-form-urlencoded',
  'settingCode': 'wxc_100000' 

}





function getReq(url, params, headParam, showLoading) {

  if (!showLoading) {
    wx.showLoading({
      title: '加载中',
    })
  }
  var promise = new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + url,
      method: 'get',
      params: params,
      header: header,
      success: function (res) {
        wx.hideLoading(); 
        if (res.statusCode == '200') {

          //打印接口返回信息
          console.log("==========================================================")
          console.log("请求的接口为\n" + url + " \n 请求的参数为 \n ")
          console.log(params)
          console.log("返回参数为")
          console.log(res)
          console.log("==========================================================")

          if (res.data.resultCode != '1000' && res.data.resultMsg) {
            
            wx.showToast({
              title: res.data.resultMsg,
              icon: 'none',
              duration:3000,
            })
            if (res.data.resultCode == '1001') {

              wx.removeStorageSync('userLoginInfo')
              setTimeout(function () {
                //未登录跳转去登录
                //未登录跳转去登录
                wx.switchTab({
                  url: '/pages/tabMine/index',
                  success: function () {
                    wx.redirectTo({
                      url: '/pages/login/index',
                    })
                  } //成功后的回调；
                })
              }, 2000) //延迟时间
            }
          }
          resolve(res.data);

        } else { //返回错误提示信息
          wx.showModal({
            title: '网络错误',
            content: '网络出错，请刷新重试',
            showCancel: false
          })
          reject(false);
        }
      },
      fail: function () {
        wx.hideLoading();
        wx.showModal({
          title: '网络错误',
          content: '网络出错，请刷新重试',
          showCancel: false
        })
        reject(false)
      }
    })
  })
  return promise;
}

function postReq(url, data, headParam, showLoading) {
  if (!showLoading) {
    wx.showLoading({
      title: '加载中',
    })
  }
  if (headParam) {
    header = Object.assign(header, headParam)
  }
  var promise = new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + url,
      header: header,
      data: data,
      method: 'post',
      success: function (res) {
        //打印接口返回信息
        console.log("==========================================================")
        console.log("请求的接口为\n" + url + " \n 请求的参数为 \n ")
        console.log(data)
        console.log("返回参数为")
        console.log(res)
        console.log("==========================================================")
        wx.hideLoading();
        if (res.statusCode == '200') {
          if (res.data.resultCode != '1000' && res.data.resultMsg) {
            wx.showToast({
              title: res.data.resultMsg,
              icon: 'none',
              duration: 3000,
            })
            if (res.data.resultCode == '1001') {

              wx.removeStorageSync('userLoginInfo')
              setTimeout(function () {
                //未登录跳转去登录
                wx.switchTab({
                  url: '/pages/tabMine/index',
                  success: function () {
                    wx.redirectTo({
                      url: '/pages/login/index',
                    })
                  } //成功后的回调；
                })
              }, 2000) //延迟时间
            }
          }
          resolve(res.data);

        } else { //返回错误提示信息
          wx.showModal({
            title: '网络错误',
            content: '网络出错，请刷新重试',
            showCancel: false
          })
          reject(false);
        }
      },
      fail: function () {
        wx.hideLoading();
        wx.showModal({
          title: '网络错误',
          content: '网络出错，请刷新重试',
          showCancel: false
        })
        reject(false)
      }
    })
  })
  return promise;
}

const upLoadImg = BASE_URL + "/100care-wechat/commonController/wechat/uploadimage"
module.exports = {
  get: getReq,
  post: postReq,
  header: header,
  upLoadImg,
  base: BASE_URL
}