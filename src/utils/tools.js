
export const getUrlParmas = (widhtHash = false) => {
  var url = widhtHash ? window.location.hash.substr(2) : window.location.search; // #/删掉
  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    var strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
  }
  return theRequest;
}

export const checkBrowser = () => {
  if (/MicroMessenger/.test(window.navigator.userAgent)) {
    // 微信 
    return 'wechat';
  } else if (/AlipayClient/.test(window.navigator.userAgent)) {
    // 支付宝 
    return 'alipay';
  } else {
    return 'other';
  }
}

export const checkPhone = () => {
  let u = navigator.userAgent, app = navigator.appVersion;
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
  let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1){
    return 'android'
  }else if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
    return 'ios'
  }else{
    return 'other'
  }
}


Date.prototype.Format = function(fmt) { //author: meizz 
  var o = {
    "M+": this.getMonth() + 1, //月份 
    "d+": this.getDate(), //日 
    "h+": this.getHours(), //小时 
    "m+": this.getMinutes(), //分 
    "s+": this.getSeconds(), //秒 
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
    "S": this.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}
Date.prototype.DateDiff = function(interval, objDate2) {
  var d = this,
    i = {},
    t = d.getTime(),
    t2 = objDate2.getTime();
  i['y'] = objDate2.getFullYear() - d.getFullYear();
  i['q'] = i['y'] * 4 + Math.floor(objDate2.getMonth() / 4) - Math.floor(d.getMonth() / 4);
  i['m'] = i['y'] * 12 + objDate2.getMonth() - d.getMonth();
  i['ms'] = objDate2.getTime() - d.getTime();
  i['w'] = Math.floor((t2 + 345600000) / (604800000)) - Math.floor((t + 345600000) / (604800000));
  i['d'] = Math.floor(t2 / 86400000) - Math.floor(t / 86400000);
  i['h'] = Math.floor(t2 / 3600000) - Math.floor(t / 3600000);
  i['n'] = Math.floor(t2 / 60000) - Math.floor(t / 60000);
  i['s'] = Math.floor(t2 / 1000) - Math.floor(t / 1000);
  return i[interval];
}
Date.prototype.DateAdd = function(strInterval, Number) {
  var dtTmp = this;
  switch (strInterval) {
    case 's':
      return new Date(Date.parse(dtTmp) + (1000 * Number));
    case 'n':
      return new Date(Date.parse(dtTmp) + (60000 * Number));
    case 'h':
      return new Date(Date.parse(dtTmp) + (3600000 * Number));
    case 'd':
      return new Date(Date.parse(dtTmp) + (86400000 * Number));
    case 'w':
      return new Date(Date.parse(dtTmp) + ((86400000 * 7) * Number));
    case 'q':
      return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number * 3, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
    case 'm':
      return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
    case 'y':
      return new Date((dtTmp.getFullYear() + Number), dtTmp.getMonth(), dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
  }
}