var str = require("templates/index.string");
var IScroll = require('./libs/iscroll-probe.js');
document.addEventListener('deviceready',onDeviceReady,false);

var photoPath;
function onDeviceReady(){
	var body = document.body;
	body.innerHTML = str + body.innerHTML;
	var myScroll = new IScroll('#main-scroll',{mouseWheel:true, hScrollbar:false, vScrollvar:false});
	document.getElementById("camera").addEventListener("touchend",function(){
		navigator.camera.getPicture(onSuccess,onFail,{
			destinationType:Camera.DestinationType.FILE_URI,
			sourceType: Camera.PictureSourceType.CAMERA,
			correctOrientation: true,
			cameraDirection:0
		});
	}); 
	
	function onSuccess(path){
		photoPath = path;
		document.getElementById("photo").style.backgroundImage = "url(" + path + ")";
		document.getElementById("photo").style.backgroundSize = "cover";
	}
	
	function onFail(){
		alert("失败！")
	}	
}