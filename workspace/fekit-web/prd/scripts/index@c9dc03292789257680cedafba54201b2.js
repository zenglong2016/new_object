(function(e){var t={id:"e97a8616a9d97799157183abbecfb39e",filename:"index.string",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(e,t,n){if(typeof window.QTMPL==="undefined")window.QTMPL={};window.QTMPL["index"]='<div class="m-container">\n	<header>\n		<ul class="iconfont">\n			<li>&#xe745;</li>\n			<li>   \n				<span class="active">热点</span>\n				<span>关注</span>\n			</li>\n			<li id="scan">&#xe684;</li>\n		</ul>\n	</header>	\n	<nav>\n		<ul>\n			<li class="active">足球现场</li> \n			<li>足球生活</li>\n			<li>足球美女</li>\n		</ul>\n	</nav>\n	<section id="main-scroll">\n		<ul>\n			<li>\n				<img src="/course-webapp/images/img1.jpg">\n				<b>西甲-巴萨3-4负 皇马1-1丢榜首</b>\n			</li>\n			<li>\n				<img src="/course-webapp/images/img2.png">\n				<b>西甲-巴萨3-4负 皇马1-1丢榜首</b>\n			</li>\n			<li>\n				<img src="/course-webapp/images/img3.jpg">\n				<b>西甲-巴萨3-4负 皇马1-1丢榜首</b>\n			</li>\n			<li>\n				<img src="/course-webapp/images/img4.jpg">\n				<b>西甲-巴萨3-4负 皇马1-1丢榜首</b>\n			</li>\n			<li>\n				<img src="/course-webapp/images/img1.jpg">\n				<b>西甲-巴萨3-4负 皇马1-1丢榜首</b>\n			</li>\n			<li>\n				<img src="/course-webapp/images/img2.png">\n				<b>西甲-巴萨3-4负 皇马1-1丢榜首</b>\n			</li>\n			<li>\n				<img src="/course-webapp/images/img3.jpg">\n				<b>西甲-巴萨3-4负 皇马1-1丢榜首</b>\n			</li>\n			<li>\n				<img src="/course-webapp/images/img4.jpg">\n				<b>西甲-巴萨3-4负 皇马1-1丢榜首</b>\n			</li>\n		</ul>\n	</section>\n	<footer>\n		<ul>\n			<li class="active">\n				<i class="iconfont">&#xe6bb;</i>\n				<b>首页</b>\n			</li>\n			<li>\n				<i class="iconfont" id="zhoubian">&#xe65c;</i>\n				<b>发现</b>\n			</li>\n			<li>\n				<i class="iconfont" id="camera">&#xe664;</i>\n			</li>\n			<li>\n				<i class="iconfont">&#xe735;</i>\n				<b>我的</b>\n			</li>\n			<li>\n				<i class="iconfont">&#xe603;</i>\n				<b>退出</b>\n			</li>\n		</ul>\n	</footer>\n</div>';if(typeof t!=="undefined")t.exports=window.QTMPL["index"]}(t.exports,t,e);e.____MODULES["e97a8616a9d97799157183abbecfb39e"]=t.exports})(this);(function(e){var t={id:"447a005a9f9b6580e6a84d8c441ecd30",filename:"iscroll-probe.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(e,t,n){(function(e,n,r){function o(t,r){this.wrapper=typeof t=="string"?n.querySelector(t):t;this.scroller=this.wrapper.children[0];this.scrollerStyle=this.scroller.style;this.options={resizeScrollbars:true,mouseWheelSpeed:20,snapThreshold:.334,disablePointer:!s.hasPointer,disableTouch:s.hasPointer||!s.hasTouch,disableMouse:s.hasPointer||s.hasTouch,startX:0,startY:0,scrollY:true,directionLockThreshold:5,momentum:true,bounce:true,bounceTime:600,bounceEasing:"",preventDefault:true,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:true,useTransition:true,useTransform:true,bindToWrapper:typeof e.onmousedown==="undefined"};for(var i in r){this.options[i]=r[i]}this.translateZ=this.options.HWCompositing&&s.hasPerspective?" translateZ(0)":"";this.options.useTransition=s.hasTransition&&this.options.useTransition;this.options.useTransform=s.hasTransform&&this.options.useTransform;this.options.eventPassthrough=this.options.eventPassthrough===true?"vertical":this.options.eventPassthrough;this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault;this.options.scrollY=this.options.eventPassthrough=="vertical"?false:this.options.scrollY;this.options.scrollX=this.options.eventPassthrough=="horizontal"?false:this.options.scrollX;this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough;this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold;this.options.bounceEasing=typeof this.options.bounceEasing=="string"?s.ease[this.options.bounceEasing]||s.ease.circular:this.options.bounceEasing;this.options.resizePolling=this.options.resizePolling===undefined?60:this.options.resizePolling;if(this.options.tap===true){this.options.tap="tap"}if(!this.options.useTransition&&!this.options.useTransform){if(!/relative|absolute/i.test(this.scrollerStyle.position)){this.scrollerStyle.position="relative"}}if(this.options.shrinkScrollbars=="scale"){this.options.useTransition=false}this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1;if(this.options.probeType==3){this.options.useTransition=false}this.x=0;this.y=0;this.directionX=0;this.directionY=0;this._events={};this._init();this.refresh();this.scrollTo(this.options.startX,this.options.startY);this.enable()}function u(e,t,r){var i=n.createElement("div"),s=n.createElement("div");if(r===true){i.style.cssText="position:absolute;z-index:9999";s.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"}s.className="iScrollIndicator";if(e=="h"){if(r===true){i.style.cssText+=";height:7px;left:2px;right:2px;bottom:0";s.style.height="100%"}i.className="iScrollHorizontalScrollbar"}else{if(r===true){i.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px";s.style.width="100%"}i.className="iScrollVerticalScrollbar"}i.style.cssText+=";overflow:hidden";if(!t){i.style.pointerEvents="none"}i.appendChild(s);return i}function a(t,r){this.wrapper=typeof r.el=="string"?n.querySelector(r.el):r.el;this.wrapperStyle=this.wrapper.style;this.indicator=this.wrapper.children[0];this.indicatorStyle=this.indicator.style;this.scroller=t;this.options={listenX:true,listenY:true,interactive:false,resize:true,defaultScrollbars:false,shrink:false,fade:false,speedRatioX:0,speedRatioY:0};for(var o in r){this.options[o]=r[o]}this.sizeRatioX=1;this.sizeRatioY=1;this.maxPosX=0;this.maxPosY=0;if(this.options.interactive){if(!this.options.disableTouch){s.addEvent(this.indicator,"touchstart",this);s.addEvent(e,"touchend",this)}if(!this.options.disablePointer){s.addEvent(this.indicator,s.prefixPointerEvent("pointerdown"),this);s.addEvent(e,s.prefixPointerEvent("pointerup"),this)}if(!this.options.disableMouse){s.addEvent(this.indicator,"mousedown",this);s.addEvent(e,"mouseup",this)}}if(this.options.fade){this.wrapperStyle[s.style.transform]=this.scroller.translateZ;var u=s.style.transitionDuration;if(!u){return}this.wrapperStyle[u]=s.isBadAndroid?"0.0001ms":"0ms";var a=this;if(s.isBadAndroid){i(function(){if(a.wrapperStyle[u]==="0.0001ms"){a.wrapperStyle[u]="0s"}})}this.wrapperStyle.opacity="0"}}var i=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t){e.setTimeout(t,1e3/60)};var s=function(){function o(e){if(s===false)return false;if(s==="")return e;return s+e.charAt(0).toUpperCase()+e.substr(1)}var t={};var i=n.createElement("div").style;var s=function(){var e=["t","webkitT","MozT","msT","OT"],t,n=0,r=e.length;for(;n<r;n++){t=e[n]+"ransform";if(t in i)return e[n].substr(0,e[n].length-1)}return false}();t.getTime=Date.now||function(){return(new Date).getTime()};t.extend=function(e,t){for(var n in t){e[n]=t[n]}};t.addEvent=function(e,t,n,r){e.addEventListener(t,n,!!r)};t.removeEvent=function(e,t,n,r){e.removeEventListener(t,n,!!r)};t.prefixPointerEvent=function(t){return e.MSPointerEvent?"MSPointer"+t.charAt(7).toUpperCase()+t.substr(8):t};t.momentum=function(e,t,n,i,s,o){var u=e-t,a=r.abs(u)/n,f,l;o=o===undefined?6e-4:o;f=e+a*a/(2*o)*(u<0?-1:1);l=a/o;if(f<i){f=s?i-s/2.5*(a/8):i;u=r.abs(f-e);l=u/a}else if(f>0){f=s?s/2.5*(a/8):0;u=r.abs(e)+f;l=u/a}return{destination:r.round(f),duration:l}};var u=o("transform");t.extend(t,{hasTransform:u!==false,hasPerspective:o("perspective")in i,hasTouch:"ontouchstart"in e,hasPointer:!!(e.PointerEvent||e.MSPointerEvent),hasTransition:o("transition")in i});t.isBadAndroid=function(){var t=e.navigator.appVersion;if(/Android/.test(t)&&!/Chrome\/\d/.test(t)){var n=t.match(/Safari\/(\d+.\d)/);if(n&&typeof n==="object"&&n.length>=2){return parseFloat(n[1])<535.19}else{return true}}else{return false}}();t.extend(t.style={},{transform:u,transitionTimingFunction:o("transitionTimingFunction"),transitionDuration:o("transitionDuration"),transitionDelay:o("transitionDelay"),transformOrigin:o("transformOrigin")});t.hasClass=function(e,t){var n=new RegExp("(^|\\s)"+t+"(\\s|$)");return n.test(e.className)};t.addClass=function(e,n){if(t.hasClass(e,n)){return}var r=e.className.split(" ");r.push(n);e.className=r.join(" ")};t.removeClass=function(e,n){if(!t.hasClass(e,n)){return}var r=new RegExp("(^|\\s)"+n+"(\\s|$)","g");e.className=e.className.replace(r," ")};t.offset=function(e){var t=-e.offsetLeft,n=-e.offsetTop;while(e=e.offsetParent){t-=e.offsetLeft;n-=e.offsetTop}return{left:t,top:n}};t.preventDefaultException=function(e,t){for(var n in t){if(t[n].test(e[n])){return true}}return false};t.extend(t.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3});t.extend(t.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(e){return e*(2-e)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(e){return r.sqrt(1- --e*e)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(e){var t=4;return(e=e-1)*e*((t+1)*e+t)+1}},bounce:{style:"",fn:function(e){if((e/=1)<1/2.75){return 7.5625*e*e}else if(e<2/2.75){return 7.5625*(e-=1.5/2.75)*e+.75}else if(e<2.5/2.75){return 7.5625*(e-=2.25/2.75)*e+.9375}else{return 7.5625*(e-=2.625/2.75)*e+.984375}}},elastic:{style:"",fn:function(e){var t=.22,n=.4;if(e===0){return 0}if(e==1){return 1}return n*r.pow(2,-10*e)*r.sin((e-t/4)*2*r.PI/t)+1}}});t.tap=function(e,t){var r=n.createEvent("Event");r.initEvent(t,true,true);r.pageX=e.pageX;r.pageY=e.pageY;e.target.dispatchEvent(r)};t.click=function(t){var r=t.target,i;if(!/(SELECT|INPUT|TEXTAREA)/i.test(r.tagName)){i=n.createEvent(e.MouseEvent?"MouseEvents":"Event");i.initEvent("click",true,true);i.view=t.view||e;i.detail=1;i.screenX=r.screenX||0;i.screenY=r.screenY||0;i.clientX=r.clientX||0;i.clientY=r.clientY||0;i.ctrlKey=!!t.ctrlKey;i.altKey=!!t.altKey;i.shiftKey=!!t.shiftKey;i.metaKey=!!t.metaKey;i.button=0;i.relatedTarget=null;i._constructed=true;r.dispatchEvent(i)}};return t}();o.prototype={version:"5.2.0",_init:function(){this._initEvents();if(this.options.scrollbars||this.options.indicators){this._initIndicators()}if(this.options.mouseWheel){this._initWheel()}if(this.options.snap){this._initSnap()}if(this.options.keyBindings){this._initKeys()}},destroy:function(){this._initEvents(true);clearTimeout(this.resizeTimeout);this.resizeTimeout=null;this._execEvent("destroy")},_transitionEnd:function(e){if(e.target!=this.scroller||!this.isInTransition){return}this._transitionTime();if(!this.resetPosition(this.options.bounceTime)){this.isInTransition=false;this._execEvent("scrollEnd")}},_start:function(e){if(s.eventType[e.type]!=1){var t;if(!e.which){t=e.button<2?0:e.button==4?1:2}else{t=e.button}if(t!==0){return}}if(!this.enabled||this.initiated&&s.eventType[e.type]!==this.initiated){return}if(this.options.preventDefault&&!s.isBadAndroid&&!s.preventDefaultException(e.target,this.options.preventDefaultException)){e.preventDefault()}var n=e.touches?e.touches[0]:e,i;this.initiated=s.eventType[e.type];this.moved=false;this.distX=0;this.distY=0;this.directionX=0;this.directionY=0;this.directionLocked=0;this.startTime=s.getTime();if(this.options.useTransition&&this.isInTransition){this._transitionTime();this.isInTransition=false;i=this.getComputedPosition();this._translate(r.round(i.x),r.round(i.y));this._execEvent("scrollEnd")}else if(!this.options.useTransition&&this.isAnimating){this.isAnimating=false;this._execEvent("scrollEnd")}this.startX=this.x;this.startY=this.y;this.absStartX=this.x;this.absStartY=this.y;this.pointX=n.pageX;this.pointY=n.pageY;this._execEvent("beforeScrollStart")},_move:function(e){if(!this.enabled||s.eventType[e.type]!==this.initiated){return}if(this.options.preventDefault){e.preventDefault()}var t=e.touches?e.touches[0]:e,n=t.pageX-this.pointX,i=t.pageY-this.pointY,o=s.getTime(),u,a,f,l;this.pointX=t.pageX;this.pointY=t.pageY;this.distX+=n;this.distY+=i;f=r.abs(this.distX);l=r.abs(this.distY);if(o-this.endTime>300&&f<10&&l<10){return}if(!this.directionLocked&&!this.options.freeScroll){if(f>l+this.options.directionLockThreshold){this.directionLocked="h"}else if(l>=f+this.options.directionLockThreshold){this.directionLocked="v"}else{this.directionLocked="n"}}if(this.directionLocked=="h"){if(this.options.eventPassthrough=="vertical"){e.preventDefault()}else if(this.options.eventPassthrough=="horizontal"){this.initiated=false;return}i=0}else if(this.directionLocked=="v"){if(this.options.eventPassthrough=="horizontal"){e.preventDefault()}else if(this.options.eventPassthrough=="vertical"){this.initiated=false;return}n=0}n=this.hasHorizontalScroll?n:0;i=this.hasVerticalScroll?i:0;u=this.x+n;a=this.y+i;if(u>0||u<this.maxScrollX){u=this.options.bounce?this.x+n/3:u>0?0:this.maxScrollX}if(a>0||a<this.maxScrollY){a=this.options.bounce?this.y+i/3:a>0?0:this.maxScrollY}this.directionX=n>0?-1:n<0?1:0;this.directionY=i>0?-1:i<0?1:0;if(!this.moved){this._execEvent("scrollStart")}this.moved=true;this._translate(u,a);if(o-this.startTime>300){this.startTime=o;this.startX=this.x;this.startY=this.y;if(this.options.probeType==1){this._execEvent("scroll")}}if(this.options.probeType>1){this._execEvent("scroll")}},_end:function(e){if(!this.enabled||s.eventType[e.type]!==this.initiated){return}if(this.options.preventDefault&&!s.preventDefaultException(e.target,this.options.preventDefaultException)){e.preventDefault()}var t=e.changedTouches?e.changedTouches[0]:e,n,i,o=s.getTime()-this.startTime,u=r.round(this.x),a=r.round(this.y),f=r.abs(u-this.startX),l=r.abs(a-this.startY),c=0,h="";this.isInTransition=0;this.initiated=0;this.endTime=s.getTime();if(this.resetPosition(this.options.bounceTime)){return}this.scrollTo(u,a);if(!this.moved){if(this.options.tap){s.tap(e,this.options.tap)}if(this.options.click){s.click(e)}this._execEvent("scrollCancel");return}if(this._events.flick&&o<200&&f<100&&l<100){this._execEvent("flick");return}if(this.options.momentum&&o<300){n=this.hasHorizontalScroll?s.momentum(this.x,this.startX,o,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:u,duration:0};i=this.hasVerticalScroll?s.momentum(this.y,this.startY,o,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:a,duration:0};u=n.destination;a=i.destination;c=r.max(n.duration,i.duration);this.isInTransition=1}if(this.options.snap){var p=this._nearestSnap(u,a);this.currentPage=p;c=this.options.snapSpeed||r.max(r.max(r.min(r.abs(u-p.x),1e3),r.min(r.abs(a-p.y),1e3)),300);u=p.x;a=p.y;this.directionX=0;this.directionY=0;h=this.options.bounceEasing}if(u!=this.x||a!=this.y){if(u>0||u<this.maxScrollX||a>0||a<this.maxScrollY){h=s.ease.quadratic}this.scrollTo(u,a,c,h);return}this._execEvent("scrollEnd")},_resize:function(){var e=this;clearTimeout(this.resizeTimeout);this.resizeTimeout=setTimeout(function(){e.refresh()},this.options.resizePolling)},resetPosition:function(e){var t=this.x,n=this.y;e=e||0;if(!this.hasHorizontalScroll||this.x>0){t=0}else if(this.x<this.maxScrollX){t=this.maxScrollX}if(!this.hasVerticalScroll||this.y>0){n=0}else if(this.y<this.maxScrollY){n=this.maxScrollY}if(t==this.x&&n==this.y){return false}this.scrollTo(t,n,e,this.options.bounceEasing);return true},disable:function(){this.enabled=false},enable:function(){this.enabled=true},refresh:function(){var e=this.wrapper.offsetHeight;this.wrapperWidth=this.wrapper.clientWidth;this.wrapperHeight=this.wrapper.clientHeight;this.scrollerWidth=this.scroller.offsetWidth;this.scrollerHeight=this.scroller.offsetHeight;this.maxScrollX=this.wrapperWidth-this.scrollerWidth;this.maxScrollY=this.wrapperHeight-this.scrollerHeight;this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0;this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0;if(!this.hasHorizontalScroll){this.maxScrollX=0;this.scrollerWidth=this.wrapperWidth}if(!this.hasVerticalScroll){this.maxScrollY=0;this.scrollerHeight=this.wrapperHeight}this.endTime=0;this.directionX=0;this.directionY=0;this.wrapperOffset=s.offset(this.wrapper);this._execEvent("refresh");this.resetPosition()},on:function(e,t){if(!this._events[e]){this._events[e]=[]}this._events[e].push(t)},off:function(e,t){if(!this._events[e]){return}var n=this._events[e].indexOf(t);if(n>-1){this._events[e].splice(n,1)}},_execEvent:function(e){if(!this._events[e]){return}var t=0,n=this._events[e].length;if(!n){return}for(;t<n;t++){this._events[e][t].apply(this,[].slice.call(arguments,1))}},scrollBy:function(e,t,n,r){e=this.x+e;t=this.y+t;n=n||0;this.scrollTo(e,t,n,r)},scrollTo:function(e,t,n,r){r=r||s.ease.circular;this.isInTransition=this.options.useTransition&&n>0;var i=this.options.useTransition&&r.style;if(!n||i){if(i){this._transitionTimingFunction(r.style);this._transitionTime(n)}this._translate(e,t)}else{this._animate(e,t,n,r.fn)}},scrollToElement:function(e,t,n,i,o){e=e.nodeType?e:this.scroller.querySelector(e);if(!e){return}var u=s.offset(e);u.left-=this.wrapperOffset.left;u.top-=this.wrapperOffset.top;if(n===true){n=r.round(e.offsetWidth/2-this.wrapper.offsetWidth/2)}if(i===true){i=r.round(e.offsetHeight/2-this.wrapper.offsetHeight/2)}u.left-=n||0;u.top-=i||0;u.left=u.left>0?0:u.left<this.maxScrollX?this.maxScrollX:u.left;u.top=u.top>0?0:u.top<this.maxScrollY?this.maxScrollY:u.top;t=t===undefined||t===null||t==="auto"?r.max(r.abs(this.x-u.left),r.abs(this.y-u.top)):t;this.scrollTo(u.left,u.top,t,o)},_transitionTime:function(e){if(!this.options.useTransition){return}e=e||0;var t=s.style.transitionDuration;if(!t){return}this.scrollerStyle[t]=e+"ms";if(!e&&s.isBadAndroid){this.scrollerStyle[t]="0.0001ms";var n=this;i(function(){if(n.scrollerStyle[t]==="0.0001ms"){n.scrollerStyle[t]="0s"}})}if(this.indicators){for(var r=this.indicators.length;r--;){this.indicators[r].transitionTime(e)}}},_transitionTimingFunction:function(e){this.scrollerStyle[s.style.transitionTimingFunction]=e;if(this.indicators){for(var t=this.indicators.length;t--;){this.indicators[t].transitionTimingFunction(e)}}},_translate:function(e,t){if(this.options.useTransform){this.scrollerStyle[s.style.transform]="translate("+e+"px,"+t+"px)"+this.translateZ}else{e=r.round(e);t=r.round(t);this.scrollerStyle.left=e+"px";this.scrollerStyle.top=t+"px"}this.x=e;this.y=t;if(this.indicators){for(var n=this.indicators.length;n--;){this.indicators[n].updatePosition()}}},_initEvents:function(t){var n=t?s.removeEvent:s.addEvent,r=this.options.bindToWrapper?this.wrapper:e;n(e,"orientationchange",this);n(e,"resize",this);if(this.options.click){n(this.wrapper,"click",this,true)}if(!this.options.disableMouse){n(this.wrapper,"mousedown",this);n(r,"mousemove",this);n(r,"mousecancel",this);n(r,"mouseup",this)}if(s.hasPointer&&!this.options.disablePointer){n(this.wrapper,s.prefixPointerEvent("pointerdown"),this);n(r,s.prefixPointerEvent("pointermove"),this);n(r,s.prefixPointerEvent("pointercancel"),this);n(r,s.prefixPointerEvent("pointerup"),this)}if(s.hasTouch&&!this.options.disableTouch){n(this.wrapper,"touchstart",this);n(r,"touchmove",this);n(r,"touchcancel",this);n(r,"touchend",this)}n(this.scroller,"transitionend",this);n(this.scroller,"webkitTransitionEnd",this);n(this.scroller,"oTransitionEnd",this);n(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var t=e.getComputedStyle(this.scroller,null),n,r;if(this.options.useTransform){t=t[s.style.transform].split(")")[0].split(", ");n=+(t[12]||t[4]);r=+(t[13]||t[5])}else{n=+t.left.replace(/[^-\d.]/g,"");r=+t.top.replace(/[^-\d.]/g,"")}return{x:n,y:r}},_initIndicators:function(){function o(e){if(i.indicators){for(var t=i.indicators.length;t--;){e.call(i.indicators[t])}}}var e=this.options.interactiveScrollbars,t=typeof this.options.scrollbars!="string",n=[],r;var i=this;this.indicators=[];if(this.options.scrollbars){if(this.options.scrollY){r={el:u("v",e,this.options.scrollbars),interactive:e,defaultScrollbars:true,customStyle:t,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenX:false};this.wrapper.appendChild(r.el);n.push(r)}if(this.options.scrollX){r={el:u("h",e,this.options.scrollbars),interactive:e,defaultScrollbars:true,customStyle:t,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenY:false};this.wrapper.appendChild(r.el);n.push(r)}}if(this.options.indicators){n=n.concat(this.options.indicators)}for(var s=n.length;s--;){this.indicators.push(new a(this,n[s]))}if(this.options.fadeScrollbars){this.on("scrollEnd",function(){o(function(){this.fade()})});this.on("scrollCancel",function(){o(function(){this.fade()})});this.on("scrollStart",function(){o(function(){this.fade(1)})});this.on("beforeScrollStart",function(){o(function(){this.fade(1,true)})})}this.on("refresh",function(){o(function(){this.refresh()})});this.on("destroy",function(){o(function(){this.destroy()});delete this.indicators})},_initWheel:function(){s.addEvent(this.wrapper,"wheel",this);s.addEvent(this.wrapper,"mousewheel",this);s.addEvent(this.wrapper,"DOMMouseScroll",this);this.on("destroy",function(){clearTimeout(this.wheelTimeout);this.wheelTimeout=null;s.removeEvent(this.wrapper,"wheel",this);s.removeEvent(this.wrapper,"mousewheel",this);s.removeEvent(this.wrapper,"DOMMouseScroll",this)})},_wheel:function(e){if(!this.enabled){return}e.preventDefault();var t,n,i,s,o=this;if(this.wheelTimeout===undefined){o._execEvent("scrollStart")}clearTimeout(this.wheelTimeout);this.wheelTimeout=setTimeout(function(){if(!o.options.snap){o._execEvent("scrollEnd")}o.wheelTimeout=undefined},400);if("deltaX"in e){if(e.deltaMode===1){t=-e.deltaX*this.options.mouseWheelSpeed;n=-e.deltaY*this.options.mouseWheelSpeed}else{t=-e.deltaX;n=-e.deltaY}}else if("wheelDeltaX"in e){t=e.wheelDeltaX/120*this.options.mouseWheelSpeed;n=e.wheelDeltaY/120*this.options.mouseWheelSpeed}else if("wheelDelta"in e){t=n=e.wheelDelta/120*this.options.mouseWheelSpeed}else if("detail"in e){t=n=-e.detail/3*this.options.mouseWheelSpeed}else{return}t*=this.options.invertWheelDirection;n*=this.options.invertWheelDirection;if(!this.hasVerticalScroll){t=n;n=0}if(this.options.snap){i=this.currentPage.pageX;s=this.currentPage.pageY;if(t>0){i--}else if(t<0){i++}if(n>0){s--}else if(n<0){s++}this.goToPage(i,s);return}i=this.x+r.round(this.hasHorizontalScroll?t:0);s=this.y+r.round(this.hasVerticalScroll?n:0);this.directionX=t>0?-1:t<0?1:0;this.directionY=n>0?-1:n<0?1:0;if(i>0){i=0}else if(i<this.maxScrollX){i=this.maxScrollX}if(s>0){s=0}else if(s<this.maxScrollY){s=this.maxScrollY}this.scrollTo(i,s,0);if(this.options.probeType>1){this._execEvent("scroll")}},_initSnap:function(){this.currentPage={};if(typeof this.options.snap=="string"){this.options.snap=this.scroller.querySelectorAll(this.options.snap)}this.on("refresh",function(){var e=0,t,n=0,i,s,o,u=0,a,f=this.options.snapStepX||this.wrapperWidth,l=this.options.snapStepY||this.wrapperHeight,c;this.pages=[];if(!this.wrapperWidth||!this.wrapperHeight||!this.scrollerWidth||!this.scrollerHeight){return}if(this.options.snap===true){s=r.round(f/2);o=r.round(l/2);while(u>-this.scrollerWidth){this.pages[e]=[];t=0;a=0;while(a>-this.scrollerHeight){this.pages[e][t]={x:r.max(u,this.maxScrollX),y:r.max(a,this.maxScrollY),width:f,height:l,cx:u-s,cy:a-o};a-=l;t++}u-=f;e++}}else{c=this.options.snap;t=c.length;i=-1;for(;e<t;e++){if(e===0||c[e].offsetLeft<=c[e-1].offsetLeft){n=0;i++}if(!this.pages[n]){this.pages[n]=[]}u=r.max(-c[e].offsetLeft,this.maxScrollX);a=r.max(-c[e].offsetTop,this.maxScrollY);s=u-r.round(c[e].offsetWidth/2);o=a-r.round(c[e].offsetHeight/2);this.pages[n][i]={x:u,y:a,width:c[e].offsetWidth,height:c[e].offsetHeight,cx:s,cy:o};if(u>this.maxScrollX){n++}}}this.goToPage(this.currentPage.pageX||0,this.currentPage.pageY||0,0);if(this.options.snapThreshold%1===0){this.snapThresholdX=this.options.snapThreshold;this.snapThresholdY=this.options.snapThreshold}else{this.snapThresholdX=r.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width*this.options.snapThreshold);this.snapThresholdY=r.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height*this.options.snapThreshold)}});this.on("flick",function(){var e=this.options.snapSpeed||r.max(r.max(r.min(r.abs(this.x-this.startX),1e3),r.min(r.abs(this.y-this.startY),1e3)),300);this.goToPage(this.currentPage.pageX+this.directionX,this.currentPage.pageY+this.directionY,e)})},_nearestSnap:function(e,t){if(!this.pages.length){return{x:0,y:0,pageX:0,pageY:0}}var n=0,i=this.pages.length,s=0;if(r.abs(e-this.absStartX)<this.snapThresholdX&&r.abs(t-this.absStartY)<this.snapThresholdY){return this.currentPage}if(e>0){e=0}else if(e<this.maxScrollX){e=this.maxScrollX}if(t>0){t=0}else if(t<this.maxScrollY){t=this.maxScrollY}for(;n<i;n++){if(e>=this.pages[n][0].cx){e=this.pages[n][0].x;break}}i=this.pages[n].length;for(;s<i;s++){if(t>=this.pages[0][s].cy){t=this.pages[0][s].y;break}}if(n==this.currentPage.pageX){n+=this.directionX;if(n<0){n=0}else if(n>=this.pages.length){n=this.pages.length-1}e=this.pages[n][0].x}if(s==this.currentPage.pageY){s+=this.directionY;if(s<0){s=0}else if(s>=this.pages[0].length){s=this.pages[0].length-1}t=this.pages[0][s].y}return{x:e,y:t,pageX:n,pageY:s}},goToPage:function(e,t,n,i){i=i||this.options.bounceEasing;if(e>=this.pages.length){e=this.pages.length-1}else if(e<0){e=0}if(t>=this.pages[e].length){t=this.pages[e].length-1}else if(t<0){t=0}var s=this.pages[e][t].x,o=this.pages[e][t].y;n=n===undefined?this.options.snapSpeed||r.max(r.max(r.min(r.abs(s-this.x),1e3),r.min(r.abs(o-this.y),1e3)),300):n;this.currentPage={x:s,y:o,pageX:e,pageY:t};this.scrollTo(s,o,n,i)},next:function(e,t){var n=this.currentPage.pageX,r=this.currentPage.pageY;n++;if(n>=this.pages.length&&this.hasVerticalScroll){n=0;r++}this.goToPage(n,r,e,t)},prev:function(e,t){var n=this.currentPage.pageX,r=this.currentPage.pageY;n--;if(n<0&&this.hasVerticalScroll){n=0;r--}this.goToPage(n,r,e,t)},_initKeys:function(t){var n={pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40};var r;if(typeof this.options.keyBindings=="object"){for(r in this.options.keyBindings){if(typeof this.options.keyBindings[r]=="string"){this.options.keyBindings[r]=this.options.keyBindings[r].toUpperCase().charCodeAt(0)}}}else{this.options.keyBindings={}}for(r in n){this.options.keyBindings[r]=this.options.keyBindings[r]||n[r]}s.addEvent(e,"keydown",this);this.on("destroy",function(){s.removeEvent(e,"keydown",this)})},_key:function(e){if(!this.enabled){return}var t=this.options.snap,n=t?this.currentPage.pageX:this.x,i=t?this.currentPage.pageY:this.y,o=s.getTime(),u=this.keyTime||0,a=.25,f;if(this.options.useTransition&&this.isInTransition){f=this.getComputedPosition();this._translate(r.round(f.x),r.round(f.y));this.isInTransition=false}this.keyAcceleration=o-u<200?r.min(this.keyAcceleration+a,50):0;switch(e.keyCode){case this.options.keyBindings.pageUp:if(this.hasHorizontalScroll&&!this.hasVerticalScroll){n+=t?1:this.wrapperWidth}else{i+=t?1:this.wrapperHeight}break;case this.options.keyBindings.pageDown:if(this.hasHorizontalScroll&&!this.hasVerticalScroll){n-=t?1:this.wrapperWidth}else{i-=t?1:this.wrapperHeight}break;case this.options.keyBindings.end:n=t?this.pages.length-1:this.maxScrollX;i=t?this.pages[0].length-1:this.maxScrollY;break;case this.options.keyBindings.home:n=0;i=0;break;case this.options.keyBindings.left:n+=t?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.up:i+=t?1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.right:n-=t?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.down:i-=t?1:5+this.keyAcceleration>>0;break;default:return}if(t){this.goToPage(n,i);return}if(n>0){n=0;this.keyAcceleration=0}else if(n<this.maxScrollX){n=this.maxScrollX;this.keyAcceleration=0}if(i>0){i=0;this.keyAcceleration=0}else if(i<this.maxScrollY){i=this.maxScrollY;this.keyAcceleration=0}this.scrollTo(n,i,0);this.keyTime=o},_animate:function(e,t,n,r){function c(){var h=s.getTime(),p,d,v;if(h>=l){o.isAnimating=false;o._translate(e,t);if(!o.resetPosition(o.options.bounceTime)){o._execEvent("scrollEnd")}return}h=(h-f)/n;v=r(h);p=(e-u)*v+u;d=(t-a)*v+a;o._translate(p,d);if(o.isAnimating){i(c)}if(o.options.probeType==3){o._execEvent("scroll")}}var o=this,u=this.x,a=this.y,f=s.getTime(),l=f+n;this.isAnimating=true;c()},handleEvent:function(e){switch(e.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(e);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(e);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(e);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(e);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(e);break;case"keydown":this._key(e);break;case"click":if(this.enabled&&!e._constructed){e.preventDefault();e.stopPropagation()}break}}};a.prototype={handleEvent:function(e){switch(e.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(e);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(e);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(e);break}},destroy:function(){if(this.options.fadeScrollbars){clearTimeout(this.fadeTimeout);this.fadeTimeout=null}if(this.options.interactive){s.removeEvent(this.indicator,"touchstart",this);s.removeEvent(this.indicator,s.prefixPointerEvent("pointerdown"),this);s.removeEvent(this.indicator,"mousedown",this);s.removeEvent(e,"touchmove",this);s.removeEvent(e,s.prefixPointerEvent("pointermove"),this);s.removeEvent(e,"mousemove",this);s.removeEvent(e,"touchend",this);s.removeEvent(e,s.prefixPointerEvent("pointerup"),this);s.removeEvent(e,"mouseup",this)}if(this.options.defaultScrollbars){this.wrapper.parentNode.removeChild(this.wrapper)}},_start:function(t){var n=t.touches?t.touches[0]:t;t.preventDefault();t.stopPropagation();this.transitionTime();this.initiated=true;this.moved=false;this.lastPointX=n.pageX;this.lastPointY=n.pageY;this.startTime=s.getTime();if(!this.options.disableTouch){s.addEvent(e,"touchmove",this)}if(!this.options.disablePointer){s.addEvent(e,s.prefixPointerEvent("pointermove"),this)}if(!this.options.disableMouse){s.addEvent(e,"mousemove",this)}this.scroller._execEvent("beforeScrollStart")},_move:function(e){var t=e.touches?e.touches[0]:e,n,r,i,o,u=s.getTime();if(!this.moved){this.scroller._execEvent("scrollStart")}this.moved=true;n=t.pageX-this.lastPointX;this.lastPointX=t.pageX;r=t.pageY-this.lastPointY;this.lastPointY=t.pageY;i=this.x+n;o=this.y+r;this._pos(i,o);if(this.scroller.options.probeType==1&&u-this.startTime>300){this.startTime=u;this.scroller._execEvent("scroll")}else if(this.scroller.options.probeType>1){this.scroller._execEvent("scroll")}e.preventDefault();e.stopPropagation()},_end:function(t){if(!this.initiated){return}this.initiated=false;t.preventDefault();t.stopPropagation();s.removeEvent(e,"touchmove",this);s.removeEvent(e,s.prefixPointerEvent("pointermove"),this);s.removeEvent(e,"mousemove",this);if(this.scroller.options.snap){var n=this.scroller._nearestSnap(this.scroller.x,this.scroller.y);var i=this.options.snapSpeed||r.max(r.max(r.min(r.abs(this.scroller.x-n.x),1e3),r.min(r.abs(this.scroller.y-n.y),1e3)),300);if(this.scroller.x!=n.x||this.scroller.y!=n.y){this.scroller.directionX=0;this.scroller.directionY=0;this.scroller.currentPage=n;this.scroller.scrollTo(n.x,n.y,i,this.scroller.options.bounceEasing)}}if(this.moved){this.scroller._execEvent("scrollEnd")}},transitionTime:function(e){e=e||0;var t=s.style.transitionDuration;if(!t){return}this.indicatorStyle[t]=e+"ms";if(!e&&s.isBadAndroid){this.indicatorStyle[t]="0.0001ms";var n=this;i(function(){if(n.indicatorStyle[t]==="0.0001ms"){n.indicatorStyle[t]="0s"}})}},transitionTimingFunction:function(e){this.indicatorStyle[s.style.transitionTimingFunction]=e},refresh:function(){this.transitionTime();if(this.options.listenX&&!this.options.listenY){this.indicatorStyle.display=this.scroller.hasHorizontalScroll?"block":"none"}else if(this.options.listenY&&!this.options.listenX){this.indicatorStyle.display=this.scroller.hasVerticalScroll?"block":"none"}else{this.indicatorStyle.display=this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?"block":"none"}if(this.scroller.hasHorizontalScroll&&this.scroller.hasVerticalScroll){s.addClass(this.wrapper,"iScrollBothScrollbars");s.removeClass(this.wrapper,"iScrollLoneScrollbar");if(this.options.defaultScrollbars&&this.options.customStyle){if(this.options.listenX){this.wrapper.style.right="8px"}else{this.wrapper.style.bottom="8px"}}}else{s.removeClass(this.wrapper,"iScrollBothScrollbars");s.addClass(this.wrapper,"iScrollLoneScrollbar");if(this.options.defaultScrollbars&&this.options.customStyle){if(this.options.listenX){this.wrapper.style.right="2px"}else{this.wrapper.style.bottom="2px"}}}var e=this.wrapper.offsetHeight;if(this.options.listenX){this.wrapperWidth=this.wrapper.clientWidth;if(this.options.resize){this.indicatorWidth=r.max(r.round(this.wrapperWidth*this.wrapperWidth/(this.scroller.scrollerWidth||this.wrapperWidth||1)),8);this.indicatorStyle.width=this.indicatorWidth+"px"}else{this.indicatorWidth=this.indicator.clientWidth}this.maxPosX=this.wrapperWidth-this.indicatorWidth;if(this.options.shrink=="clip"){this.minBoundaryX=-this.indicatorWidth+8;this.maxBoundaryX=this.wrapperWidth-8}else{this.minBoundaryX=0;this.maxBoundaryX=this.maxPosX}this.sizeRatioX=this.options.speedRatioX||this.scroller.maxScrollX&&this.maxPosX/this.scroller.maxScrollX}if(this.options.listenY){this.wrapperHeight=this.wrapper.clientHeight;if(this.options.resize){this.indicatorHeight=r.max(r.round(this.wrapperHeight*this.wrapperHeight/(this.scroller.scrollerHeight||this.wrapperHeight||1)),8);this.indicatorStyle.height=this.indicatorHeight+"px"}else{this.indicatorHeight=this.indicator.clientHeight}this.maxPosY=this.wrapperHeight-this.indicatorHeight;if(this.options.shrink=="clip"){this.minBoundaryY=-this.indicatorHeight+8;this.maxBoundaryY=this.wrapperHeight-8}else{this.minBoundaryY=0;this.maxBoundaryY=this.maxPosY}this.maxPosY=this.wrapperHeight-this.indicatorHeight;this.sizeRatioY=this.options.speedRatioY||this.scroller.maxScrollY&&this.maxPosY/this.scroller.maxScrollY}this.updatePosition()},updatePosition:function(){var e=this.options.listenX&&r.round(this.sizeRatioX*this.scroller.x)||0,t=this.options.listenY&&r.round(this.sizeRatioY*this.scroller.y)||0;if(!this.options.ignoreBoundaries){if(e<this.minBoundaryX){if(this.options.shrink=="scale"){this.width=r.max(this.indicatorWidth+e,8);this.indicatorStyle.width=this.width+"px"}e=this.minBoundaryX}else if(e>this.maxBoundaryX){if(this.options.shrink=="scale"){this.width=r.max(this.indicatorWidth-(e-this.maxPosX),8);this.indicatorStyle.width=this.width+"px";e=this.maxPosX+this.indicatorWidth-this.width}else{e=this.maxBoundaryX}}else if(this.options.shrink=="scale"&&this.width!=this.indicatorWidth){this.width=this.indicatorWidth;this.indicatorStyle.width=this.width+"px"}if(t<this.minBoundaryY){if(this.options.shrink=="scale"){this.height=r.max(this.indicatorHeight+t*3,8);this.indicatorStyle.height=this.height+"px"}t=this.minBoundaryY}else if(t>this.maxBoundaryY){if(this.options.shrink=="scale"){this.height=r.max(this.indicatorHeight-(t-this.maxPosY)*3,8);this.indicatorStyle.height=this.height+"px";t=this.maxPosY+this.indicatorHeight-this.height}else{t=this.maxBoundaryY}}else if(this.options.shrink=="scale"&&this.height!=this.indicatorHeight){this.height=this.indicatorHeight;this.indicatorStyle.height=this.height+"px"}}this.x=e;this.y=t;if(this.scroller.options.useTransform){this.indicatorStyle[s.style.transform]="translate("+e+"px,"+t+"px)"+this.scroller.translateZ}else{this.indicatorStyle.left=e+"px";this.indicatorStyle.top=t+"px"}},_pos:function(e,t){if(e<0){e=0}else if(e>this.maxPosX){e=this.maxPosX}if(t<0){t=0}else if(t>this.maxPosY){t=this.maxPosY}e=this.options.listenX?r.round(e/this.sizeRatioX):this.scroller.x;t=this.options.listenY?r.round(t/this.sizeRatioY):this.scroller.y;this.scroller.scrollTo(e,t)},fade:function(e,t){if(t&&!this.visible){return}clearTimeout(this.fadeTimeout);this.fadeTimeout=null;var n=e?250:500,r=e?0:300;e=e?"1":"0";this.wrapperStyle[s.style.transitionDuration]=n+"ms";this.fadeTimeout=setTimeout(function(e){this.wrapperStyle.opacity=e;this.visible=+e}.bind(this,e),r)}};o.utils=s;if(typeof t!="undefined"&&t.exports){t.exports=o}else if(typeof define=="function"&&define.amd){define(function(){return o})}else{e.IScroll=o}})(window,document,Math)}(t.exports,t,e);e.____MODULES["447a005a9f9b6580e6a84d8c441ecd30"]=t.exports})(this);(function(e){var t={id:"7fc25abbb7043592d8b4b2937cdfd89b",filename:"index.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(t,n,r){var i=e.____MODULES["e97a8616a9d97799157183abbecfb39e"];var s=e.____MODULES["447a005a9f9b6580e6a84d8c441ecd30"];var o=document.body;o.innerHTML=i+o.innerHTML;window.onload=function(){var e=new s("#main-scroll",{mouseWheel:true,hScrollbar:false,vScrollvar:false});var t=document.getElementById("scan");t.onclick=function(){wx.scanQRCode({needResult:0,scanType:["qrCode","barCode"],success:function(e){var t=e.resultStr}})};var n=document.getElementById("camera");n.onclick=function(){wx.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){var t=e.localIds}})};var r=document.getElementById("zhoubian");r.onclick=function(){wx.getLocation({type:"wgs84",success:function(e){var t=e.latitude;var n=e.longitude;var r=e.speed;var i=e.accuracy}})}}}(t.exports,t,e);e.____MODULES["7fc25abbb7043592d8b4b2937cdfd89b"]=t.exports})(this)