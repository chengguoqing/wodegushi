var url_d = "https://api.cangniaowl.com/v1/"
//url_d = "http://local_api.cangniaowl.cc/index.php/meifa/"
//url_d = 'http://api.cangniao.cc/index.php/meifa/'
import router from './router'
var wx = require('weixin-js-sdk'),
    sd_iux_er = "/adminconsole/"
import axios from "axios"
import qs from 'qs';
import {
    Dialog
} from 'vant';
export default {
    install(Vue) {
        Vue.prototype.post = function (url, dtat, call) {
            if (dtat.shop_id) {

            } else {
                dtat.token = token
            }

            axios({
                method: 'post',
                url: url_d + url,
                data: dtat
            }).then((res) => {
                if (res.data.err_code == "600022" || res.data.err_code == "600023") {
                    call(res.data)
                    return
                }
                if (res.data.return_code == "FAIL") {
                    Dialog.alert({
                        message: res.data.return_msg
                    }).then(() => {
                        // on close
                    });
                    return
                }
                call(res.data)
            });
        }


        Vue.prototype.post_d = function (url, dtat, call) {
            if (dtat.shop_id) {

            } else {
                dtat.token = token
            }
            return new Promise((resolve, reject) => {
                axios({
                    method: 'post',
                    url: url_d + url,
                    data: dtat
                }).then((res) => {
                    if (res.data.err_code == "600022" || res.data.err_code == "600023") {
                        resolve(res.data)
                        return
                    }
                    if (res.data.return_code == "FAIL") {
                        Dialog.alert({
                            message: res.data.return_msg
                        }).then(() => {
                            // on close
                        });
                        return
                    }
                    resolve(res.data)
                });
            })
        }


        Vue.prototype.up_img_url = '/adminconsole/fileinput/upload?type=image&driver=qiniu' //图片上传地址

        Vue.prototype.ge_t = function (url, cn, xy) {
            axios.get(sd_iux_er + url, {
                params: cn
            }).then(function (response) {
                xy(response.data.data)
            })
        }

        let config = {         
            headers: {                
                'Content-Type': 'multipart/form-data'  //之前说的以表单传数据的格式来传递fromdata             
            }        
        };

        Vue.prototype.post_t = function (url, dtat, call) {
            axios({
                method: 'post',
                url: sd_iux_er + url, 
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                data: qs.stringify(dtat)
            }).then((res) => {
                if (res.data.return_code == "FAIL") {
                    Dialog.alert({
                        message: res.data.return_msg
                    }).then(() => {
                        // on close
                    });
                    return
                }
                call(res.data)
            });
        }



        Vue.prototype.get = function (url, dtat, call) {
            axios.get(url_d + url, {
                params: dtat
            }).then(function (response) {
                call(response)
            })
        }
        Vue.prototype.time_c = function (t) {
            let time = new Date()
            time.setTime(t * 1000)
            let Year = time.getFullYear(),
                Month = time.getMonth() + 1,
                Data = time.getDate() < 10 ? 0 + '' + time.getDate() : time.getDate()
            Month < 10 ? Month = 0 + '' + Month : ''
            return Year + "-" + Month + "-" + Data
        }


        Vue.prototype.time_d = function (t) {
            let time = new Date()
            time.setTime(t)
            let Year = time.getFullYear(),
                Month = time.getMonth() + 1,
                Data = time.getDate() < 10 ? 0 + '' + time.getDate() : time.getDate(),
                hour = time.getHours() < 10 ? 0 + '' + time.getHours() : time.getHours(),
                Minutes = time.getMinutes() < 10 ? 0 + '' + time.getMinutes() : time.getMinutes(),
                Seconds = time.getSeconds() < 10 ? 0 + '' + time.getSeconds() : time.getSeconds()
            Month < 10 ? Month = 0 + '' + Month : ''
            return Year + "-" + Month + "-" + Data + " " + hour + ":" + Minutes + ":" + Seconds
        }


        Vue.prototype.hf = function (url, cu) { //路由跳转
            router.push({
                path: "/" + url,
                query: cu
            })
        }


        Vue.prototype.yanza = {
            mail: function (a) {
                var b = !1;
                return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(a) && (b = !0), b
            },
            phone: function (a) {
                var b = !1;
                return a.match(/^13[0-9]{9}|15[0-9]{9}|14[0-9]{9}|19[0-9]{9}|16[0-9]{9}|17[0-9]{9}|18[0-9]{9}$/) && 11 == a.length && (b = !0), b
            },
            car_t: function (a) {
                var b = !1;
                return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(a) && (b = !0), b
            },
            jine: function (a) {
                var b = !1;
                return /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/.test(a) && (b = !0), b
            }

        };


        //company=分享标题  sd_us=分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致 imgUrl分享图标 desc=详情介绍
        Vue.prototype.fenxiang = function (company, sd_us, shop_logo, desc) {
            wx.ready(function () {
                wx.onMenuShareTimeline({
                    title: company, // 分享标题
                    link: sd_us, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: shop_logo, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
                wx.onMenuShareAppMessage({
                    title: company,
                    desc: desc,
                    link: sd_us,
                    imgUrl: shop_logo,
                    trigger: function () {

                    },
                    success: function () {

                    },
                    cancel: function () {

                    }
                });
            })
        }


        Vue.prototype.wx_config = function (data) {
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: data.appId, // 必填，公众号的唯一标识
                timestamp: data.timestamp, // 必填，生成签名的时间戳
                nonceStr: data.nonceStr, // 必填，生成签名的随机串
                signature: data.signature, // 必填，签名，见附录1
                jsApiList: [
                        'checkJsApi',
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage',
                        'onMenuShareQQ',
                        'onMenuShareWeibo',
                        'onMenuShareQZone',
                        'hideMenuItems',
                        'showMenuItems',
                        'hideAllNonBaseMenuItem',
                        'showAllNonBaseMenuItem',
                        'translateVoice',
                        'startRecord',
                        'stopRecord',
                        'onVoiceRecordEnd',
                        'playVoice',
                        'onVoicePlayEnd',
                        'pauseVoice',
                        'stopVoice',
                        'uploadVoice',
                        'downloadVoice',
                        'chooseImage',
                        'previewImage',
                        'uploadImage',
                        'downloadImage',
                        'getNetworkType',
                        'openLocation',
                        'getLocation',
                        'hideOptionMenu',
                        'showOptionMenu',
                        'closeWindow',
                        'scanQRCode',
                        'chooseWXPay',
                        'openProductSpecificView',
                        'addCard',
                        'chooseCard',
                        'openCard'
                    ]
            });

        }





    }

}
