const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

//日期格式化
const formatDate = date => {

  const year = date.getFullYear()

  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const dateArr = ["星期日", "星期一", "星期二", '星期三', '星期四', '星期五', '星期六']
// 获取出去今天之外的过去dayNum 天数
const getPastDateArr = function (dayNum) {
  var oDate = new Date();   //获取当前时间  
  var dayArr = []
  for (var i = 0; i < dayNum; i++) {
    var date = new Date(oDate.getTime() - i * 24 * 60 * 60 * 1000)
    var seperator = "-";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator + month + seperator + strDate
    dayArr.push({
      value: dateArr[date.getDay()],
      label: (date.getMonth() + 1) + '.' + date.getDate(),
      time: currentdate
    });  
  }
  //倒序 并且删除最后一个 今天的数据
  dayArr.reverse();
  dayArr.pop();
  return dayArr;
}

const getFutureDateArr = function (dayNum) {
  var oDate = new Date();   //获取当前时间  
  var dayArr = []
  for (var i = 0; i < dayNum; i++) {
    var date = new Date(oDate.getTime() + i * 24 * 60 * 60 * 1000)
    var seperator = "-";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator + month + seperator + strDate
    dayArr.push({
      value: dateArr[date.getDay()],
      label: (date.getMonth() + 1) + '.' + date.getDate(),
      time: currentdate
    });   //把未来几天的时间放到数组里
  }
  return dayArr;
}

const getClicicName = function () {
  var clinicBaseinfo = wx.getStorageSync('clinicBaseinfo')
  if (clinicBaseinfo && clinicBaseinfo.clinicName) {
    wx.setNavigationBarTitle({
      title: clinicBaseinfo.clinicName || ""
    })
  }
}



var getweekTime=function (n) {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDay(); //返回星期几的某一天;
    n = day == 0 ? n + 6 : n + (day - 1)
    now.setDate(now.getDate() - n);
    date = now.getDate();
    var s = year + "-" + (month < 10 ? ('0' + month) : month) + "-" + (date < 10 ? ('0' + date) : date);
    return s;
}

var GetDateStr=function (day,AddDayCount) {
    var dd = new Date(day);
    dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期 
    var y = dd.getFullYear();
    var m = dd.getMonth() + 1; //获取当前月份的日期 
    m = m < 10 ? '0' + m : m;
    var d = dd.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + "-" + m + "-" + d;
}

var getDiffDate=function (start, end) {

    var startTime = gettheDate(start);

    var endTime = gettheDate(end);

    var dateArr = [];

    while ((endTime.getTime() - startTime.getTime()) >= 0) {

        var year = startTime.getFullYear();

        var month = startTime.getMonth().toString().length === 1 ? "0" + (parseInt(startTime.getMonth().toString(),10) + 1) : (startTime.getMonth() + 1);

        var day = startTime.getDate().toString().length === 1 ? "0" + startTime.getDate() : startTime.getDate();

        dateArr.push(year + "-" + month + "-" + day);

        startTime.setDate(startTime.getDate() + 1);

    }

    return dateArr;

}

 

var gettheDate=function  (datestr) {

    var temp = datestr.split("-");

    if (temp[1] === '01') {

        temp[0] = parseInt(temp[0],10) - 1;

        temp[1] = '12';

    } else {

        temp[1] = parseInt(temp[1],10) - 1;

    }

    //new Date()的月份入参实际都是当前值-1

    var date = new Date(temp[0], temp[1], temp[2]);

    return date;

}

var getLastWeekObj = function (dayNum) { 
    var dayArr = []
    var weekDateStar=getweekTime(0);
    var weekDateEnd=getweekTime(-6);
 for (var i = 0; i < dayNum; i++) {
     var obj={}
    var weekDateStar2=GetDateStr(weekDateStar,-(i*7));
    var weekDateEnd2=GetDateStr(weekDateEnd,-(i*7));
    obj.start=weekDateStar2;
    obj.dateArr=getDiffDate(weekDateStar2,weekDateEnd2)||[]
    obj.end=weekDateEnd2
    dayArr.push(obj)

 }
    return dayArr;
}
var getMonths=function () {
    var dataArr = [];
    var data = new Date();
    var year = data.getFullYear();
    data.setMonth(data.getMonth() + 1, 1); //获取到当前月份,设置月份
    var arrive=data.getMonth()
    for (var i = 0; i < arrive; i++) {
      data.setMonth(data.getMonth() - 1); //每次循环一次 月份值减1
      var m = data.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      var obj={

      }
      obj.month=data.getFullYear() + "-" + m
      

      var monArr=[];
      var dArr=[];
      var d = new Date(data.getFullYear(),m,0);
      var f=d.getDate()
      for(j=1; j<= f;j++ ){
        j = j < 10 ? "0" + j : j;
        monArr.push(data.getFullYear()+'-'+m+'-'+j)
        dArr.push(j)
      }
      obj.dateArr=monArr;
      obj.dayArr=dArr;
      dataArr.push(obj);
    }
   return dataArr;
  }











module.exports = {
  formatTime: formatTime,
  formatDate: formatDate,
  getFutureDateArr: getFutureDateArr,
  getPastDateArr:getPastDateArr,
  getLastWeekObj:getLastWeekObj,//获取周数据
  getMonths:getMonths,//获取月份数据
  getClicicName: getClicicName
}
