var str = require("./templates/index.string");
var IScroll = require('./libs/iscroll-probe.js');

var body = document.body;
body.innerHTML = str + body.innerHTML;
	
window.onload = function(){
	var myScroll = new IScroll('#main-scroll',{mouseWheel:true, hScrollbar:false, vScrollvar:false});
	var scan = document.getElementById("scan");
	scan.onclick = function(){
		wx.scanQRCode({
		    needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
		    scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
		    success: function (res) {
			    var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
			}
		});
	}
	var camera = document.getElementById("camera");
	camera.onclick = function(){
		wx.chooseImage({
		    count: 1, // 默认9
		    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
		    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
		    success: function (res) {
		        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
		    }
		});
	}
	var zhoubian = document.getElementById("zhoubian");
	zhoubian.onclick = function(){
		wx.getLocation({
		    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
		    success: function (res) {
		        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
		        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
		        var speed = res.speed; // 速度，以米/每秒计
		        var accuracy = res.accuracy; // 位置精度
		    }
		});
	}
}
