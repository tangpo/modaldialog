!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.pdDialog=t():e.pdDialog=t()}(this,function(){return function(e){function t(a){if(n[a])return n[a].exports;var i=n[a]={exports:{},id:a,loaded:!1};return e[a].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,exports,t){"use strict";function n(e){var t={};for(var n in e)e.hasOwnProperty(n)&&"undefined"!=typeof e[n]&&(t[n]=e[n]);return t}function a(e){return"[object Object]"==Object.prototype.toString.call(e)}function i(){}function l(){function e(e){var t,i=c.dialogList;a.every(function(n,a){return n!=e?!0:void(t=a)}),null!=t&&(a.slice(t).forEach(function(e){i[n[e]].closeDialog(!0),delete n[e]}),a=a.slice(0,t))}var t=s(),n={},a=[];t.listener(function(t,n){var n=1*n;n&&0>t-n&&e(n)}),c.afterListener(function(e){var i=t.autoUpdateHash();n[i]=e.id,a.push(i)}),c.closedListener(function(e){var i,l=a.length-2,o=a[l];n[o]==e.id?(a.splice(l,1),n[o]=n[a[l]],delete n[a[l]],a[l]--):(i=a.pop(),delete n[i]),t.getCurrentHashPath()>0&&t.back()})}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};t(1);var r=t(10),c=t(11),s=t(13),d=t(14),u=t(15),p=t(16),h=t(17);u=u.replace(/\r\n/g,""),p=p.replace(/\r\n/g,""),h=h.replace(/\r\n/g,""),c.alert=function(e,t,a,l,r){var s=e.clazz?e.clazz:r?r:"";return s+=" alert-dialog","object"!==("undefined"==typeof e?"undefined":o(e))&&(e=n({title:t,content:e,okCallback:a,selector:l})),e.okCallback=e.okCallback||i,s+=e.title?" dlg-has-title":" dlg-no-title",e.clazz=s,c(e)},c.confirm=function(e,t,a,l,r,s,d){var u=e.clazz?e.clazz:d?d:"";return u+=" confirm-dialog","object"!==("undefined"==typeof e?"undefined":o(e))&&(e=n({title:a,content:e,okCallback:t,cancelCallback:s,sureStr:r,cancelStr:l})),u+=e.title?" dlg-has-title":" dlg-no-title",e.okCallback=e.okCallback||i,e.cancelCallback=e.cancelCallback||i,e.clazz=u,c(e)},c.confirmMobile=function(e,t,i,l,o,s,u){function p(e){var n=v.querySelector(".charge-form");return y&&(y.handleKeyUp(),y.handleChange()),n.classList.contains("dlg-success")||l?(y&&y.destroy(),void(t&&!t.call(f,n.querySelector("input").value,e)&&(v=null))):(n.classList.add("dlg-error"),!0)}function h(e){y&&y.destroy(),i&&i.call(f,e),v=null}var g,f,v,m,y,b='<div class="charge-content"><div class="charge-form"><input type="tel" class="valid-input charge-phone"/><label>手机号码:</label><strong class="form-tip">请填写正确的手机号码</strong></div></div>';return g=a(e)?e:n({title:o||"",okCallback:p,cancelCallback:h,sureStr:u,cancelStr:s,phone:e}),v=g.selector=r.createHtmlDom(b),m=v.querySelector("input"),g.clazz="charge-dialog",l?(v.classList.add("hasconfirm"),v.querySelector(".form-tip").textContent="已领奖",m.setAttribute("disabled",!0),m.value=g.phone,g.cancelCallback=null,f=c.alert(g)):(y=d({target:m}),f=c.confirm(g)),f},c.alertAwardList=function(e,t,a,i){var l,o,s=['<div class="dlg-award-list"><ul>'];i=i||{},l=r.assign(n({dataList:e,title:"我的奖品",awardHandle:function(){}}),i),l.clazz="myaward-dialog",o=l.dataList||[];for(var d=0,u=o.length;u>d;d++){var p,h=o[d];switch(s.push('<li data-idx="'+d+'"><img src="'+h.imgUrl+'" /><div class="item-title">'+h.name+'</div><em data-id="handlePrizes" class="item-oper'),h.type){case"electronic":p="查看券码";break;case"actual":h.hasconfirm?(p="修改地址",s.push(" hasconfirm")):p="填写地址";break;case"call_charge":case"liumi_data_recharge":case"mz_money_recharge":case"mz_data_recharge":h.hasconfirm?(p="查看号码",s.push(" hasconfirm")):p="填写号码";break;default:h.hasconfirm?(p=h.showconfirmBtn||"查看信息",s.push(" hasconfirm")):p=h.confirmBtn||"填写信息"}s.push('" >'+p),s.push("</em></li>")}return s.push("</ul></div>"),l.content=s.join(""),l.handlePrizes=function(e){var n=e.target,i=r.closest(n,"li"),s=i.getAttribute("data-idx"),d=n.classList.contains("hasconfirm"),u=o[s],p=t&&t.bind(this,s,u),h=a&&a.bind(this,s,u);switch(u.type){case"electronic":c.alertElectronicDlg(u,"",p,h);break;case"actual":c.alertPersonInfoDlg(p,h,u.values);break;case"call_charge":case"liumi_data_recharge":case"mz_money_recharge":case"mz_data_recharge":c.confirmMobile(u.phone,p,h,d);break;default:l.awardHandle(s,u)}},c.alert(l)};var g=void 0;c.alertRule=function(e){function t(){g=!1}if(!g)return g=!0,c.alert({clazz:"rule-dlg",title:"活动说明",content:e,okCallback:t,cancelAlert:t,useBackground:"cancelAlert"})},c.alertWinnerList=function(e){var t=['<div class="inr-winlist"><ul>'];if(!e)return void c.alert("大奖还没被抽走，赶紧参与活动");for(var n=0,a=e.length;a>n;n++){var i=e[n];t.push("<li><em>"+i.nickName+"</em>"),t.push('<div class="prz-tle">'+i.title+"</div></li>")}return t.push("</ul></div>"),c.alert(t.join(""),"中奖名单",null,null,"winner-list-dlg")},c.alertVirtualDlg=function(e,t,n){function a(e){var n=s.querySelector(".charge-form");return o&&(o.handleKeyUp(),o.handleChange()),n.classList.contains("dlg-success")?(o&&o.destroy(),void(t&&!t.call(l,l.dialogDom.querySelector(".charge-phone").value,e)&&(s=null))):(n.classList.add("dlg-error"),!0)}function i(e){o&&o.destroy(),n&&n.call(l,e),s=null}var l,o,s=r.createHtmlDom(r.replaceTemlate(u,e));o=d({target:s.querySelector("input")}),l=c.confirm({selector:s,title:"中奖啦！",clazz:"virtual-dlg prize-dlg",okCallback:a,cancelCallback:i,sureStr:"领取",cancelStr:"暂不领奖"})},c.alertElectronicDlg=function(e,t,n,a,i){var l,o,s=e.voucher.split(":"),d="electronic-dlg prize-dlg",u=c.options.copyTool;e.voucher1=s[0],e.voucher2=s[1],e.voucher2||(d+=" single-ticket"),l=r.replaceTemlate(p,e),u.supportCopy&&!s[1]&&(i="复制并兑换",o=u.copyAndGo(".modal-dialog .sure-btn",s[0])),c.confirm({content:l,title:null!=t?t:"中奖啦！",clazz:d,okCallback:n,cancelCallback:function(){return o&&o.destroy(),a&&a()},sureStr:i||"立即使用",cancelStr:"确定"})},c.alertActualDlg=function(e,t,n){function a(){c.alertPersonInfoDlg(t,n)}var i=r.replaceTemlate(h,e);c.confirm({content:i,title:"中奖啦！",clazz:"actual-dlg prize-dlg",okCallback:a,cancelCallback:n,sureStr:"填写地址",cancelStr:"暂不领奖"})},c.alertPersonInfoDlg=function(e,t,i,l,o,s){function u(t){for(var n,a,i,o,r=m.querySelectorAll(".charge-form"),c=0,s=[],d=0,u=w.length;u>d;d++){var p=w[d];p.handleKeyUp&&p.handleKeyUp(),p.handleChange&&p.handleChange()}for(var g=0,f=r.length;f>g;g++)n=r[g],a=n.classList,i=n.querySelector(".valid-input").value,o=l[g],a.contains("bevalid")&&!a.contains("dlg-success")||n.classList.contains("required")&&i.length<o.minLen?(n.classList.add("dlg-error"),c++):n.classList.contains("dlg-error")&&c++,s.push(i);return c>0?!0:(h(),void(e&&!e.call(y,s,t)&&(m=null)))}function p(e){h(),t&&t.call(y,e),m=null}function h(){D.removeEventListener("keyup",g),w.forEach(function(e){e.destroy()})}function g(e){var t,n,a=e.target,i=a.previousElementSibling,l=a.value;b||(t=Math.round(getComputedStyle(i).width.replace("px",""))),i.textContent=l,n=Math.round(getComputedStyle(i).width.replace("px","")),!b&&a.scrollHeight>a.clientHeight&&(b=t,b||(b=n-10)),n>b?a.style.height="3.625rem":a.style.height="2.0625rem"}var f,i,v,m,y,b,k=["<form>"],w=[];a(e)?(v=e,e=v.okCallback,t=v.cancelCallback):v=n({formField:l,sureStr:s,cancelStr:o,values:i||[]}),l=v.formField=v.formField||[{name:"recName",value:"联 系 人",option:{keyDownValid:null,keyUpValid:null,changeValid:null}},{name:"mobilephone",value:"手机号码",errMsg:"请填写正确的手机号码",bevalid:!0,option:{initValid:"handleKeyUp"}},{name:"recAddress",value:"收货地址",errMsg:"请填写正确的地址",multiLine:!0,required:!0,initValid:"handleChange",minLen:8,option:{keyDownValid:null,keyUpValid:null,changeValid:function(e,t){return t.length>=8}}}],v.clazz="personinfo-dialog charge-dialog",v.header="";for(var x=0,C=l.length;C>x;x++){var E=l[x],S="";E.bevalid&&(S=" bevalid"),E.required&&(S+=" required"),k.push('<div class="charge-form'+S+'">'),E.multiLine?(k.push('<span class="hiddentxt '+E.name+'_hidden"></span>'),k.push('<textarea class="valid-input" type="text" name="'+E.name+'" rows="1"></textarea>')):k.push('<input class="valid-input" type="text" name="'+E.name+'"/>'),k.push("<label>"),k.push(E.value+"</label>"),E.errMsg&&k.push('<strong class="form-tip">'+E.errMsg+"</strong>"),k.push("</div>")}k.push("</form>"),m=r.createHtmlDom(k.join("")),f=m.querySelectorAll(".valid-input"),i=v.values;for(var x=0,C=f.length;C>x;x++){var z,D=f[x],L=l[x];"undefined"!=typeof i[x]&&(D.value=i[x]),(L.errMsg||L.option)&&(z=d(r.assign({target:D},l[x].option)),w.push(z)),i[x]&&L.initValid&&(D.style.height="3.625rem",z[L.initValid]({target:D,isInitValid:!0})),!L.multiLine||null!=i[x]&&""!=i[x]||D.addEventListener("keyup",g,!1)}return v.selector=m,v.okCallback=u,v.cancelCallback=p,y=c.confirm(v)};var f=0;c.showLoading=function(){f++,document.getElementById("loading-box")||document.body.appendChild(r.createHtmlDom('<div id="loading-box" class="dialog-mask"><div class="load-contain"><span class="load1"></span><span class="load2"></span></div></div>')),document.getElementById("loading-box").style.display="block"},c.hideLoading=function(){document.getElementById("loading-box")&&(f--,0>f&&(f=0),0===f&&(document.getElementById("loading-box").style.display="none"))},c.showMask=function(){var e=document.getElementById("app-mask");e||(e=r.createHtmlDom("<div class='dialog-mask' id='app-mask'></div>"),r.bindEvent(e,"touchstart",function(e){e.preventDefault()}),document.body.appendChild(e)),e.style.display="block"},c.hideMask=function(){document.getElementById("app-mask").style.display="none"};var v={useHash:!1,copyTool:{}},m=!1;c.config=function(e){var t=r.assign({},v,e);return c.options=t,m?void console.info("modaldialg only can config once"):(t.useHash&&l(),void(m=!0))},e.exports=c},function(e,exports){},,,,,,,,,function(e,exports){"use strict";e.exports={createHtmlDom:function(){var e=document.createElement("div");return function(t){var n;return e.innerHTML=t,n=e.children[0],e.removeChild(n),n}}(),replaceTemlate:function(e,t){for(var n,a=new RegExp(/{(.*?)}/g);n=a.exec(e);)e=e.replace(n[0],t[n[1]]||"");return e},bindEvent:function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)},unBindEvent:function(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent("on"+t,n)},getUrlParam:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(t);return null!=n?decodeURI(n[2]):null},assign:function(){for(var e=arguments[0],t=[].slice.call(arguments,1),n=0,a=t.length;a>n;n++){var i=t[n];if(i)for(var l in i)i.hasOwnProperty(l)&&(e[l]=i[l])}return e},closest:function(e,t){function n(e){return e.className.match(a)?!0:i.test(e.nodeName.toLowerCase())?!0:void 0}var a=new RegExp("(^|\\s+)"+t+"(\\s+|$)"),i=new RegExp("^"+t+"$"),l=e;if(n(e))return e;for(;(l=l.parentNode)&&"html"!=l.nodeName.toLowerCase();)if(n(l))return l;return null}}},function(e,exports,t){"use strict";function n(e){var t=[],n=e.header;return n=c.replaceTemlate(n,e),t.push('<div class="rc-modal"><div class="dialog-mask"></div><div class="modal-dialog '+e.clazz+'"><div class="modal-dialog-main"><header>'),t.push(n),t.push('</header><section><div class="dialog-content"></div></section><footer>'),t.push(i.call(this,e)),t.push("</footer></div></div></div>"),t.join("")}function a(){o=window.innerHeight?window.innerHeight:document.body.clientHeight,r=window.innerWidth?window.innerWidth:document.body.clientWidth}function i(e){var t=e.buttons||[],n='<button type="button" class="{cls}" data-id="{id}" >{name}</button>',a="",i=this,l="";return e.cancelCallback&&t.push({id:"cancel",name:e.cancelStr,callback:e.cancelCallback,cls:"cancle-btn"}),0==t.length&&(l=" modal-dialog-onebtn"),e.okCallback&&t.push({id:"ok",name:e.sureStr,callback:e.okCallback,cls:"sure-btn"+l}),e.reverse&&(t=t.reverse()),t.forEach(function(e,l){t.length-1==l&&(e.cls+=" last"),a+=c.replaceTemlate(n,e),i.callbacks[e.id]=e.callback}),a}function l(e,t){if(t.selector){var n=document.createComment("dialog-target replace"),a=t.selector,i=getComputedStyle(a).getPropertyValue("display");a.parentNode&&(a.parentNode.replaceChild(n,a),e._commentDom=n,"none"==i&&(a.style.display="block"),e._originDisplay=i),e.querySelector(".dialog-content").appendChild(a)}else e.querySelector(".dialog-content").innerHTML=t.content.replace(/(\r\n|\n|\r)/gm,"<br/>")}var o,r,c=t(10),s=t(12),d={assign:c.assign},u={clazz:"dialog-theme",cancelStr:"取消",sureStr:"确定",title:"温馨提示",header:'<span class="dialog-title">{title}</span>',animated:!1,buttons:null,useBackground:"cancel"},p=[],h=[],g=[],f=0,v=function m(e){var t,n;return e=d.assign({},u,e),e._callBacks=e._callBacks||{},n=e.id=e.id||f,Object.keys(e).forEach(function(t){"function"==typeof e[t]&&(e._callBacks[t]=e[t])}),p.forEach(function(t){t(e)}),m.dialogList[n]=t=new m.create(e),m.modalCount++,h.forEach(function(e){e(t)}),f++,t};v.create=function(e){var t,a,i,o;if(this.callbacks=e._callBacks,this.id=e.id,t=c.createHtmlDom(n.call(this,e)),l(t,e),document.body.appendChild(t),o=document.documentElement.offsetHeight,this.dlgScroll=s.initTouch(t),i=t.querySelector(".modal-dialog"),a=this.getPos(i),d.assign(i.style,{display:"block",left:a.left+"px",top:a.top+"px"}),e.animated&&(t.querySelector(".modal-dialog-main").className+=" dlg-animation"),e.useBackground){var r=e.useBackground;e._callBacks[r]||(e._callBacks[r]=function(){}),t.querySelector(".dialog-mask").dataset.id=e.useBackground}return t.querySelector(".dialog-mask").style.height=o+"px",this._eventListener=this.proxy(this._clickEvent,t,e),this.dialogDom=t,this.options=e,c.bindEvent(t,"click",this._eventListener),this},d.assign(v.create.prototype,{callbacks:null,getPos:function(e){if(e=e||this.dialogDom,!e)return{left:0,top:0};a();var t=e.offsetHeight,n=e.offsetWidth,i=o-t>0?(o-t)/2:.1*o,l=r-n>0?(r-n)/2:.1*r;return{left:l,top:i}},closeDialog:function(e){var t,n,a=this.dialogDom,i=this.options,l=this;a.style.display="none",i.selector&&a._commentDom&&(t=i.selector,n=a._commentDom,t.style.display=a._originDisplay,n.parentNode.replaceChild(t,n),a._commentDom=null,a._originDisplay=null),c.unBindEvent(a,"click",this._eventListener),a.parentNode.removeChild(a),this.dlgScroll.destroyScroll&&this.dlgScroll.destroyScroll(),e?i.cancelCallback&&i.cancelCallback():g.forEach(function(e){e(l)}),this._eventListener=null,this.dialogDom=a=null,delete v.dialogList[this.id],v.modalCount--},refresh:function(){var e=this.dialogDom,t=this.getPos(e);d.assign(e.style,{display:"block",left:t.left+"px",top:t.top+"px"}),this.dlgScroll.refresh()},_clickEvent:function(e,t,n){var a=e.target,i=a.getAttribute("data-id"),l=this;"function"!=typeof this.callbacks[i]||this.callbacks[i].call(this,e)||l.closeDialog()},proxy:function(e){var t=this,n=Array.prototype.slice.call(arguments,1);return function(){var a=Array.prototype.slice.call(arguments);n.length>0&&(a=a.concat(n)),e.apply(t,a)}}}),v.afterListener=function(e){return h.push(e),function(){h=h.filter(function(t){return t!=e})}},v.preListener=function(e){return p.push(e),function(){p=p.filter(function(t){return t!=e})}},v.closedListener=function(e){return g.push(e),function(){g=g.filter(function(t){return t!=e})}},v.dialogList={},v.modalCount=0,e.exports=v},function(e,exports,t){"use strict";function n(e,t){var n=getComputedStyle(e),a=0;return t&&(a=1*n.getPropertyValue("margin-top").replace("px","")+1*n.getPropertyValue("margin-bottom").replace("px","")),1*n.getPropertyValue("height").replace("px","")+1*n.paddingTop.replace("px","")+1*n.paddingBottom.replace("px","")+1*n.borderTopWidth.replace("px","")+1*n.borderBottomWidth.replace("px","")+a}var a=t(10),i={circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)"}};e.exports={initTouch:function(e){function t(e){var t,n=e.touches[0],i=a.closest(e.target,"dialog-content");i?(C&&(p(),C=!1,t=u(),c(Math.round(t.x),Math.round(t.y))),f=n.pageX,v=n.pageY,y=Date.now(),k=b=0,w=_,x=V,m=!0):m=!1}function l(e){var t,n=e.touches[0],a=n.pageX,i=n.pageY,l=e.target.nodeName.toLowerCase(),o=Date.now(),r=i-v,s=a-f;if(f=a,v=i,k+=s,b+=r,"input"!=l&&"select"!=l&&"textarea"!=l){if(e.preventDefault(),e.stopPropagation(),o-L>300&&Math.abs(b)<10||!m||g>=0)return void e.preventDefault();t=V+r,(t>0||g>t)&&(t=V+r/3),c(E,t),o-y>300&&(y=o,w=_,x=V)}}function o(e){var t,n=Date.now()-y,a=Math.round(V),i=0;f=null,v=null,L=Date.now(),C=0,s(E,500)||g>=0||(r(E,a),300>n&&(t=d(V,x,n),a=t.destination,i=t.duration,C=1),a!=V&&r(E,a,i))}function r(e,t,n){n=n||0,C=n>0,p(n),c(e,t)}function c(e,t){z.webkitTransform="translate3d(0px,"+t+"px,0px)",V=t}function s(e,t){var n=V;return t=t||0,n>=0?n=0:g>n&&(n=g),n==V?!1:(r(e,n,t),!0)}function d(e,t,n){var a,i,l=e-t,o=Math.abs(l)/n,r=6e-4;return a=e+o*o/(2*r)*(0>l?-1:1),i=o/r,g>a?(a=g-D/2.5*(o/8),l=Math.abs(a-e),i=l/o):a>0&&(a=D/2.5*(o/8),l=Math.abs(e)+a,i=l/o),{destination:Math.round(a),duration:i}}function u(){var e,t,n=window.getComputedStyle(E,null);return n=n.webkitTransform.split(")")[0].split(", "),e=+(n[12]||n[4]),t=+(n[13]||n[5]),{x:e,y:t}}function p(e){e=e||0,z.transitionDuration=e+"ms"}function h(){C&&(p(),s(E)||(C=0))}var g,f,v,m,y,b,k,w,x,C,E=e.querySelector(".dialog-content"),S=e.querySelector("section"),z=E.style,D=1*getComputedStyle(S).getPropertyValue("height").replace("px",""),L=0,_=0,V=0;return g=D-n(E,!0),z.transitionTimingFunction=i.circular.style,a.bindEvent(e,"touchmove",l),a.bindEvent(e,"touchstart",t),a.bindEvent(e,"touchend",o),a.bindEvent(E,"transitionend",h),a.bindEvent(E,"webkitTransitionEnd",h),{destroyScroll:function(){a.unBindEvent(e,"touchmove",l),a.unBindEvent(e,"touchstart",t),a.unBindEvent(e,"touchend",o),a.unBindEvent(E,"transitionend",h),a.unBindEvent(E,"webkitTransitionEnd",h),E=S=null},refresh:function(){D=1*getComputedStyle(S).getPropertyValue("height").replace("px",""),g=D-n(E,!0)}}}}},function(e,exports,t){"use strict";var n=t(10),a="hashchange",i="_dg_hash",l=function(e){var t="",l=[],o=function(){var e=window.location.href,t=new RegExp("^"+i+"=(.*)"),n=e.indexOf("#"),a=void 0,l="",o=void 0;return-1!=n&&(l=e.substring(n+1)||"",(a=l.indexOf("?")>0)&&(l=l.substring(0,a)),o=t.exec(l),l=o?o[1]:""),l},r=function(){(0,n.unBindEvent)(window,a,g)},c=function(e){return l.push(e),function(){return l=l.filter(function(t){return t!==e})}},s=function(e){return window.location.hash=e},d=function(e){return window.location.replace(window.location.pathname+window.location.search+"#"+e)},u=function(){var e=1*o();return e?e++:e=1,s(i+"="+e),e},p=function(e){e&&window.history.go(e)},h=function(){window.history.back()},g=function(){var e=o();t!==e&&(l.forEach(function(n){n(e,t)}),t=e)};return(0,n.bindEvent)(window,a,g),{getCurrentHashPath:o,listener:c,stopListener:r,pushHashPath:s,replaceHashPath:d,autoUpdateHash:u,go:p,back:h}};e.exports=l},function(e,exports,t){"use strict";function n(e){return new n.create(e)}var a=t(10),i={keyDownValid:function(e,t){t.length>11&&8!=e.keyCode&&13!=e.keyCode&&e.preventDefault()},keyUpValid:function(e,t){return/^1\d{10}$/.test(t)},changeValid:function(e,t){return/^1\d{1,10}$/.test(t)}};n.create=function(e){var t=e.target;this.options=a.assign({},i,e),e.initValid&&this[e.initValid]({target:t}),this.options.keyDownValid&&a.bindEvent(t,"keydown",this.handleKeyDown.bind(this)),a.bindEvent(t,"keyup",this.handleKeyUp.bind(this)),a.bindEvent(t,"change",this.handleChange.bind(this))},n.create.prototype={constructor:n.create,handleKeyDown:function(e){e=e||{target:this.options.target};var t=e.target,n=t.value;n+=String.fromCharCode(e.keyCode),this.options.keyDownValid&&this.options.keyDownValid(e,n)},handleKeyUp:function(e){e=e||{target:this.options.target};var t=e.target,n=t.value,a=t.parentNode;this.options.keyUpValid&&(this.options.keyUpValid(e,n)?a.classList.add("dlg-success"):a.classList.remove("dlg-success")),13!=e.keyCode&&a.classList.remove("dlg-error")},handleChange:function(e){e=e||{target:this.options.target};var t=e.target,n=t.value,a=t.parentNode.classList,i=e.isInitValid;this.options.changeValid&&(this.options.changeValid(e,n)?a.remove("dlg-error"):setTimeout(function(){a.add("dlg-error")},0)),i||(n.length>0?a.add("dirty"):a.remove("dirty"))},destroy:function(){var e=this.options.target;a.bindEvent(e,"keydown",this.handleKeyDown),a.bindEvent(e,"keyup",this.handleKeyUp),a.bindEvent(e,"change",this.handleChange)}},e.exports=n},function(e,exports){e.exports='<div class=inr-prz> <div><span>恭喜获得</span><strong class=prz-name>{desc}</strong></div> <div class=dec-prize><img src={imgUrl} height=80px width=80px class=prz-logo></div> <div class=charge-form> <input placeholder=填写手机号码 type=text maxlength=11 class="valid-input charge-phone"/> <strong class=form-tip>请填写正确的手机号码</strong> </div> <div class=ele-userule><em class=rule-content>{winMessage}</em></div> </div>'},function(e,exports){e.exports="<div class=inr-prz> <div class=prz-sub-tle><span>恭喜获得</span><strong class=prz-name>{desc}</strong></div> <div class=dec-code> <div class=ticket-code><span>{voucher1}</span></div> <div class=ticket-code><span>{voucher2}</span></div> </div> <div class=ele-userule><em class=rule-content>{winMessage}</em></div> </div>"},function(e,exports){e.exports="<div class=inr-prz> <div class=prz-sub-tle><span>恭喜获得</span><strong class=prz-name>{desc}</strong></div> <div class=dec-prize><img src={imgUrl} height=80px width=80px class=prz-logo></div> <div class=ele-userule><em class=rule-content>{winMessage}</em></div> </div>"}])});