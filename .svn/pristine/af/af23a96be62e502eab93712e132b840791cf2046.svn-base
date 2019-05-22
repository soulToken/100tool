var http = require('http.js')



//兑换openid  
export function getUserOpenId(data, headParam) {
  var newparam = Object.assign({},getApp().globalData.httpRequestData, data)
  return http.post('/100care-wechat/wechatOfficialController/getUserOpenId', data, headParam, 1)
}


//登录     
/* ==============入参  data参数 ============
 * mobile      医生手机号
 * verifyCode  手机号验证码
 * openId      小程序获得的openid
 */
// 
/*==============返回参数============
 *      
 * "clinicName":       诊所名称
 * "doctorClinicId":   70539,
 * "doctorName":       医生名字
 * "clinicId":        诊所的id，基本上每次交易都要传
 * "mobile":         登录的医生手机号，每次要传,
 * "doctorId":       医生的id
 * "token":          每次交易都要验证的token
 * 数据存储在  userLoginInfo 
 *  wx.setStorageSync('userLoginInfo', res.result)
 */
export function login(data, headParam) {

  return http.post('/100care-wechat/doctorUserController/login', data, headParam, 1)
}


//获取验证码     
/* ==============入参  data参数 ============
 * mobile      手机号
 */
export function getVerifyCode(data,headParam) {
  return http.post('/100care-wechat/commonController/getVerifyCode', data, headParam, false)
}


//医生查询诊所的统计信息，首页显示     
/* ==============入参  data参数 ============
 * mobile      手机号
 * token       Token验证是否登录
 * clinicId    诊所的id
 */
/* ==============返回参数 ============
 * "paymenAppointmentNum":       统计当天截止目前成功支付的订单数量
 * "allPaymentAmount":   统计机构的总收入，不包含已退款的 ,
 * "appointmentNum":       统计当天截止目前成功支付的订单数量 
 * "customerNum":        统计该机构下小程序或公众号的总用户
 * "paymentAmount":         统计当日截止目前的收入
 *  visitsTimes     统计当天截止目前请求该机构首页或机构配置接口的数量
 */
export function inforStatistics(data, headParam) {
  var newparam = Object.assign({},getApp().globalData.httpRequestData, data)
  return http.post('/100care-wechat/doctorUserController/inforStatistics', newparam, headParam, 1)
}

//获取banner信息，首页显示     
/* ==============返回参数============
 * bannerUrl  显示的图片
 * linkUrl    点击跳转
 */
export function getBannerList(data, headParam) {
  return http.post('/100care-wechat/houskeeeperController/getBannerList', data, headParam, 1)
}


//医生用户的预约信息列表   
/* ==============入参  data参数 ============
 * mobile      手机号
 * token       Token验证是否登录
 * clinicId    诊所的id
 * dateTime     要查询的日期,第一次进入页面不需要输入默认查询当天的  例如“ 2018-12-27”
 */ 
/* ==============返回参数============
 * cacel 取消数量  completeNum ：已完成数量  total全部预约数
 * appointmentList列表参数
 * symptomSelect            预约症状
 * appointmentServeritem    预约服务
 * appointmentStatus        预约状态(1:成功,2:失败,3:爽约,4:取消预约,5:预约已完成,6:预约异常,7:已过期未被修改状态)
 * appointmentMobile        预约用户电话
 * appointmentTime          预约时间
 * paymentAmount            支付金额
 * paymentId                支付订单号
 * id                       预约订单id
 * appointmentDate          预约日期
 * appointmentName          预约人姓名
 * doctorName               医生名称
 */
export function getAppointmentList(data, headParam) {
  var newparam = Object.assign({},getApp().globalData.httpRequestData, data)
  return http.post('/100care-wechat/doctorAppointmentController/getAppointmentList', newparam, headParam, 1)
}



// 医生用户的预约信息详情
/* ==============入参  data参数 ============
 * mobile      手机号
 * token       Token验证是否登录
 * appointmentId    预约订单id
 */ 
/* ==============返回参数============
 * symptomSelect            预约症状
 * appointmentServeritem    预约服务
 * appointmentStatus        预约状态(1:成功,2:失败,3:爽约,4:取消预约,5:预约已完成,6:预约异常,7:已过期未被修改状态)
 * appointmentMobile        预约用户电话
 * appointmentTime          预约时间
 * paymentAmount            支付金额
 * paymentId                支付订单号
 * id                       预约订单id
 * appointmentDate          预约日期
 * appointmentName          预约人姓名
 * doctorName               医生名称
 */
export function getAppointmentDetail(data, headParam) {
  var newparam = Object.assign({},getApp().globalData.httpRequestData, data)
  return http.post('/100care-wechat/doctorAppointmentController/getAppointmentDetail', newparam, headParam, 1)
}

// 医生取消用户的申请订单
/* ==============入参  data参数 ============
 * mobile           手机号
 * token            Token验证是否登录
 * appointmentId    预约订单id
 * doctorId         医生id
 */ 
export function doctorCancelAppointment(data, headParam) {
  var newparam = Object.assign({},getApp().globalData.httpRequestData, data)
  return http.post('/100care-wechat/doctorAppointmentController/doctorCancelAppointment', newparam, headParam, 1)
}


// 医生确认用户的申请订单
/* ==============入参  data参数 ============
 * mobile           手机号
 * token            Token验证是否登录
 * appointmentId    预约订单id
 * doctorId         医生id
 */ 
export function doctorConfirmAppointment(data, headParam) {
  var newparam = Object.assign({},getApp().globalData.httpRequestData, data)
  return http.post('/100care-wechat/doctorAppointmentController/doctorConfirmAppointment', newparam, headParam, 1)
}


// 医生扫码核销
/* ==============入参  data参数 ============
 * mobile           手机号
 * token            Token验证是否登录
 * appointmentId    预约订单id
 * doctorId         医生id
 * writeOffCode     核销碼
 */ 
export function writeOffPaymentAppointment(data, headParam) {
  var newparam = Object.assign({},getApp().globalData.httpRequestData, data)
  return http.post('/100care-wechat/doctorAppointmentController/writeOffPaymentAppointment', newparam, headParam, 1)
}



// 医生查询诊所的优惠券列表
/* ==============入参  data参数 ============
 * mobile           手机号
 * token            Token验证是否登录
 * clinicId         诊所id
 * position         起始点
 * count            需要查询的条数
 */ 
/* ==============返回参数============
 * couponName         优惠券名称       
 * couponType         优惠券类型(1:店铺优惠券，2:抵扣支付优惠券)
 * couponAmount       金额
 * timingType         计时类型：1：区间  2：有效天数
 * startDate          开始日期  
 * endDate            结束日期
 * expiryDate         有效期天数
 * enableAmount       金额使用上限金额
 * couponRemark       优惠券使用限制说明
 * couponDesc         优惠券介绍
 */
export function getValidCouponList(data, headParam) {
  var newparam = Object.assign({},getApp().globalData.httpRequestData, data)
  return http.post('/100care-wechat/doctorCouponController/getValidCouponList', newparam, headParam, 1)
}


// 医生删除现有的优惠券订单
/* ==============入参  data参数 ============
 * mobile           手机号
 * token            Token验证是否登录
 * couponId         优惠券id
 * doctorId         医生id
 */ 
export function doctorDelCoupon(data, headParam) {
  var newparam = Object.assign({},getApp().globalData.httpRequestData, data)
  return http.post('/100care-wechat/doctorCouponController/doctorDelCoupon', newparam, headParam, 1)
}

// 医生新增优惠券
/* ==============入参  data参数 ============
 * mobile           手机号
 * token            Token验证是否登录
 * doctorId         医生id
 * clinicId         诊所id
 * 业务参数
 * couponName       优惠券名
 * couponAmount     优惠券金额
 * couponType       优惠券类型(1:线下消费,2:在线支付)
 * timingType       计时类型(1:第一种,2:第二种)'
 * startDate        第一种:活动开始时间
 * endDate          第一种:活动结束时间
 * expiryDate       第二种:自领取后的有效期天数'
 * enableAmount     '最低金额限制
 * couponRemark     优惠券使用限制说明
 * couponDesc       优惠券介绍'

 */ 
export function doctorAddCoupon(data, headParam) {
  var newparam = Object.assign({},getApp().globalData.httpRequestData, data)
  console.log(newparam)
  return http.post('/100care-wechat/doctorCouponController/doctorAddCoupon', newparam, headParam, 1)
}


// 医生核销用户的优惠券
/* ==============入参  data参数 ============
 * mobile           手机号
 * token            Token验证是否登录
 * userCouponId     用户优惠券id
 * doctorId         医生id
 * writeOffCode     核销码
 * clinicId         诊所id
 */ 
export function doctorWriteOffCoupon(data, headParam) {
  var newparam = Object.assign({},getApp().globalData.httpRequestData, data)
  return http.post('/100care-wechat/doctorCouponController/doctorWriteOffCoupon', newparam, headParam, 1)
}



//医生查看订单列表
/* ==============入参  data参数 ============
 * mobile      手机号
 * token       Token验证是否登录
 * clinicId    诊所的id
 * dateTime     要查询的日期,第一次进入页面不需要输入默认查询当天的  例如“ 2018-12-27”
 */ 
/* ==============返回参数============
 * cacel 取消数量  completeNum ：已完成数量  total全部预约数
 * appointmentList列表参数
 * symptomSelect            预约症状
 * appointmentServeritem    预约服务
 * appointmentStatus        预约状态(1:成功,2:失败,3:爽约,4:取消预约,5:预约已完成,6:预约异常,7:已过期未被修改状态)
 * appointmentMobile        预约用户电话
 * appointmentTime          预约时间
 * paymentAmount            支付金额
 * paymentId                支付订单号
 * id                       预约订单id
 * appointmentDate          预约日期
 * appointmentName          预约人姓名
 * doctorName               医生名称
 */
export function getPaymenAppointmentList(data, headParam) {
  var newparam = Object.assign({},getApp().globalData.httpRequestData, data)
  return http.post('/100care-wechat/doctorAppointmentController/getPaymenAppointmentList', newparam, headParam, 1)
}


// 获取优惠券详情
/* ==============入参  data参数 ============
 * mobile           手机号
 * token            Token验证是否登录
 * couponId         用户优惠券id 等同于userCouponId
 */ 
export function getValidUserCouponDetail(data, headParam) {
  var newparam = Object.assign({},getApp().globalData.httpRequestData, data)
  return http.post('/100care-wechat/doctorCouponController/getValidUserCouponDetail', newparam, headParam, 1)
}


// 
// writeOffCode 核销码查询
/* ==============入参  data参数 ============
 * mobile           手机号
 * token            Token验证是否登录
 * writeOffCode     核销码
 */ 
export function getmWriteOffDetailId(data, headParam) {
  var newparam = Object.assign({},getApp().globalData.httpRequestData, data)
  return http.post('/100care-wechat/doctorUserController/getmWriteOffDetailId', newparam, headParam, 1)
}


 
// passwordLogin 密码登陆
/* ==============入参  data参数 ============
 * mobile           手机号
 * password         登陆密码MD5加密
 * openId           opendi
 */
//返回数据遇验证码登录相同
export function passwordLogin(data, headParam) {
  var newparam = Object.assign({}, getApp().globalData.httpRequestData, data)
  return http.post('/100care-wechat/doctorUserController/passwordLogin', newparam, headParam, 1)
}



// getDoctorColleague 医生查询同事
/* ==============入参  data参数 ============
 * mobile           手机号
 * token            token
 * clinicId         诊所id
 * doctorId         医生id
 */
/* ==============返回参数============
 * doctorName       医生名字
 * doctorId         医生id
 * mobile           医生电话
 * headUrl          医生头像
 */
export function getDoctorColleague(data, headParam) {
  var newparam = Object.assign({}, getApp().globalData.httpRequestData, data)
  return http.post('/100care-wechat/doctorUserController/getDoctorColleague', newparam, headParam, 1)
}



// getClinicUserInfo 医生查询同事
/* ==============入参  data参数 ============
 * mobile           手机号
 * token            token
 * clinicId         诊所id
 * keyword          搜索关键字
 */
/* ==============返回参数============
 * birthday         用户生日
 * nickName         用户名
 * noteName         备注名
 * headUrl          头像
 * mobile           电话
 * userType         类型1：公众号，3：小程序
 * userId           用户id
 */
export function getClinicUserInfo(data, headParam) {
  var newparam = Object.assign({}, getApp().globalData.httpRequestData, data)
  return http.post('/100care-wechat/doctorUserController/getClinicUserInfo', newparam, headParam, 1)
}



// 
// doctorModifyUserInfo 医生修改用户备注名称
/* ==============入参  data参数 ============
 * mobile           手机号
 * token            Token验证是否登录
 * userId           用户id
 * noteName         备注名字
 */
export function doctorModifyUserInfo(data, headParam) {
  var newparam = Object.assign({}, getApp().globalData.httpRequestData, data)
  return http.post('/100care-wechat/doctorUserController/doctorModifyUserInfo', newparam, headParam, 1)
}


// 
// modifyPassword 医生修改登录密码
/* ==============入参  data参数 ============
 * mobile           手机号
 * token            Token验证是否登录
 * password         要改成的密码
 * clinicId         诊所id
 * doctorId         医生id
 */
export function modifyPassword(data, headParam) {
  var newparam = Object.assign({}, getApp().globalData.httpRequestData, data)
  return http.post('/100care-wechat/doctorUserController/modifyPassword', newparam, headParam, 1)
}


// 
// getClinincInfo 医生查询诊所列表
/* ==============入参  data参数 ============
 * mobile           手机号
 * token            Token验证是否登录
 * clinicId         诊所id
 */

/* ==============返回参数============
 * clinicName       诊所名字
 * clinicId         诊所id
 * headUrl          诊所头像
 * clinicIntroduce  诊所介绍
 * edtPhone         诊所电话
 * provice          省
 * city             市
 * area             区
 * address          具体地址
 */
export function getClinincInfo(data, headParam) {
  var newparam = Object.assign({}, getApp().globalData.httpRequestData, data)
  return http.post('/100care-wechat/clinincInfoController/getClinincInfo', newparam, headParam, 1)
}


// 
// getClinicEnvironmentInfo 医生查询诊所图片
/* ==============入参  data参数 ============
 * mobile           手机号
 * token            Token验证是否登录
 * clinicId         诊所id
 */


/* ==============返回参数============
 * fileId       图片地址
 * fileUrl      图片id
 */
export function getClinicEnvironmentInfo(data, headParam) {
  var newparam = Object.assign({}, getApp().globalData.httpRequestData, data)
  return http.post('/100care-wechat/clinincInfoController/getClinicEnvironmentInfo', newparam, headParam, 1)
}


// 
// modifyClinicEnvironmentInfo 医生查询诊所图片
/* ==============入参  data参数 ============
 * mobile           手机号
 * token            Token验证是否登录
 * clinicId         诊所id
 * fileId           有id的就是要删除图片的
 * fileUrl          有图片的就是要添加图片的
 * doctorId         修改的医生
 */
export function modifyClinicEnvironmentInfo(data, headParam) {
  var newparam = Object.assign({}, getApp().globalData.httpRequestData, data)
  return http.post('/100care-wechat/clinincInfoController/modifyClinicEnvironmentInfo', newparam, headParam, 1)
}

// 
// modifyClinicInfo 医生修改诊所信息
/* ==============入参  data参数 ============
 * mobile           手机号
 * token            Token验证是否登录
 * clinicId         诊所id
 * clinicName       诊所名字
 * clinicIntroduce  诊所介绍
 * edtPhone         诊所电话
 * doctorId         修改的医生
 */
export function modifyClinicInfo(data, headParam) {
  var newparam = Object.assign({}, getApp().globalData.httpRequestData, data)
  return http.post('/100care-wechat/clinincInfoController/modifyClinicInfo', newparam, headParam, 1)
}

//查询诊所详情   /100care-wechat/clinicController/wechat/getClinicBaseinfo
export function getClinicBaseinfo(data, headParam) {
    var newparam = Object.assign({}, getApp().globalData.httpRequestData, data)
    return http.post('/100care-wechat/clinicController/wechat/getClinicBaseinfo', newparam, headParam, 1)
  }


  //查询诊所 详情    /100care-wechat/clinincInfoController/getClinincBasicInfo
  export function getClinincBasicInfo(data, headParam) {
    var newparam = Object.assign({}, getApp().globalData.httpRequestData, data)
    return http.post('/100care-wechat/clinincInfoController/getClinincBasicInfo', newparam, headParam, 1)
  }
