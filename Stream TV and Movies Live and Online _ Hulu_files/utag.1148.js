//tealium universal tag - utag.1148 ut4.0.202208030156, Copyright 2022 Tealium.com Inc. All Rights Reserved.
!function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))};};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e;},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{},ttq._partner=ttq._partner||"Tealium";};}(window,document,'ttq');try{(function(id,loader){var u={'id':id},md5;utag.o[loader].sender[id]=u;utag.globals=utag.globals||{};if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<41){u.loader=function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=='iframe'){m=a.getElementById(o.id);if(m&&m.tagName=='IFRAME'){b=m;}else{b=a.createElement('iframe');}o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{'height':'1','width':'1','style':'display:none'},0);}else if(o.type=='img'){utag.DB('Attach img: '+o.src);b=new Image();}else{b=a.createElement('script');b.language='javascript';b.type='text/javascript';b.async=1;b.charset='utf-8';}if(o.id){b.id=o.id;}for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute('src',o.src);if(typeof o.cb=='function'){if(b.addEventListener){b.addEventListener('load',function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb();}};}}if(o.type!='img'&&!m){l=o.loc||'head';c=a.getElementsByTagName(l)[0];if(c){utag.DB('Attach to '+l+': '+o.src);if(l=='script'){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}}};}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
if(utag.ut.md5===undefined){md5=function(t,n){var r;if("undefined"!=typeof window&&window.crypto&&(r=window.crypto),!r&&"undefined"!=typeof window&&window.msCrypto&&(r=window.msCrypto),!r&&"undefined"!=typeof global&&global.crypto&&(r=global.crypto),!r&&"function"==typeof require)try{r=require("crypto")}catch(t){}var e=function(){if(r){if("function"==typeof r.getRandomValues)
try{return r.getRandomValues(new Uint32Array(1))[0]}catch(t){}if("function"==typeof r.randomBytes)try{return r.randomBytes(4).readInt32LE()}catch(t){}}throw new Error("Native crypto module could not be used to get secure random number.")},i=Object.create||function(){function t(){}return function(n){var r;return t.prototype=n,r=new t,t.prototype=null,r}}(),o={},s=o.lib={},a=s.Base={extend:function(t){var n=i(this);return t&&n.mixIn(t),n.hasOwnProperty("init")&&this.init!==n.init||(n.init=function(){n.$super.init.apply(this,arguments)}),n.init.prototype=n,n.$super=this,n},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var n in t)t.hasOwnProperty(n)&&(this[n]=t[n]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},c=s.WordArray=a.extend({init:function(t,n){t=this.words=t||[],this.sigBytes=null!=n?n:4*t.length},toString:function(t){return(t||f).stringify(this)},concat:function(t){var n=this.words,r=t.words,e=this.sigBytes,i=t.sigBytes;if(this.clamp(),e%4)for(var o=0;o<i;o++){var s=r[o>>>2]>>>24-o%4*8&255;n[e+o>>>2]|=s<<24-(e+o)%4*8}else for(o=0;o<i;o+=4)n[e+o>>>2]=r[o>>>2];return this.sigBytes+=i,this},clamp:function(){var n=this.words,r=this.sigBytes;n[r>>>2]&=4294967295<<32-r%4*8,n.length=t.ceil(r/4)},clone:function(){var t=a.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var n=[],r=0;r<t;r+=4)n.push(e());return new c.init(n,t)}}),u=o.enc={},f=u.Hex={stringify:function(t){for(var n=t.words,r=t.sigBytes,e=[],i=0;i<r;i++){var o=n[i>>>2]>>>24-i%4*8&255;e.push((o>>>4).toString(16)),e.push((15&o).toString(16))}return e.join("")},parse:function(t){for(var n=t.length,r=[],e=0;e<n;e+=2)r[e>>>3]|=parseInt(t.substr(e,2),16)<<24-e%8*4;return new c.init(r,n/2)}},h=u.Latin1={stringify:function(t){for(var n=t.words,r=t.sigBytes,e=[],i=0;i<r;i++){var o=n[i>>>2]>>>24-i%4*8&255;e.push(String.fromCharCode(o))}
return e.join("")},parse:function(t){for(var n=t.length,r=[],e=0;e<n;e++)r[e>>>2]|=(255&t.charCodeAt(e))<<24-e%4*8;return new c.init(r,n)}},d=u.Utf8={stringify:function(t){try{return decodeURIComponent(escape(h.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return h.parse(unescape(encodeURIComponent(t)))}},l=s.BufferedBlockAlgorithm=a.extend({reset:function(){this._data=new c.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=d.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(n){var r,e=this._data,i=e.words,o=e.sigBytes,s=this.blockSize,a=o/(4*s),u=(a=n?t.ceil(a):t.max((0|a)-this._minBufferSize,0))*s,f=t.min(4*u,o);if(u){for(var h=0;h<u;h+=s)this._doProcessBlock(i,h);r=i.splice(0,u),e.sigBytes-=f}
return new c.init(r,f)},clone:function(){var t=a.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),p=(s.Hasher=l.extend({cfg:a.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(n,r){return new t.init(r).finalize(n)}},_createHmacHelper:function(t){return function(n,r){return new p.HMAC.init(t,r).finalize(n)}}}),o.algo={});return o}(Math);(function(t){var n=md5,r=n.lib,e=r.WordArray,i=r.Hasher,o=n.algo,s=[];!function(){for(var n=0;n<64;n++)s[n]=4294967296*t.abs(t.sin(n+1))|0}();var a=o.MD5=i.extend({_doReset:function(){this._hash=new e.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,n){for(var r=0;r<16;r++){var e=n+r,i=t[e];t[e]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8)}
var o=this._hash.words,a=t[n+0],d=t[n+1],l=t[n+2],p=t[n+3],y=t[n+4],g=t[n+5],w=t[n+6],v=t[n+7],_=t[n+8],m=t[n+9],B=t[n+10],x=t[n+11],b=t[n+12],S=t[n+13],H=t[n+14],z=t[n+15],C=o[0],M=o[1],A=o[2],D=o[3];C=c(C,M,A,D,a,7,s[0]),D=c(D,C,M,A,d,12,s[1]),A=c(A,D,C,M,l,17,s[2]),M=c(M,A,D,C,p,22,s[3]),C=c(C,M,A,D,y,7,s[4]),D=c(D,C,M,A,g,12,s[5]),A=c(A,D,C,M,w,17,s[6]),M=c(M,A,D,C,v,22,s[7]),C=c(C,M,A,D,_,7,s[8]),D=c(D,C,M,A,m,12,s[9]),A=c(A,D,C,M,B,17,s[10]),M=c(M,A,D,C,x,22,s[11]),C=c(C,M,A,D,b,7,s[12]),D=c(D,C,M,A,S,12,s[13]),A=c(A,D,C,M,H,17,s[14]),C=u(C,M=c(M,A,D,C,z,22,s[15]),A,D,d,5,s[16]),D=u(D,C,M,A,w,9,s[17]),A=u(A,D,C,M,x,14,s[18]),M=u(M,A,D,C,a,20,s[19]),C=u(C,M,A,D,g,5,s[20]),D=u(D,C,M,A,B,9,s[21]),A=u(A,D,C,M,z,14,s[22]),M=u(M,A,D,C,y,20,s[23]),C=u(C,M,A,D,m,5,s[24]),D=u(D,C,M,A,H,9,s[25]),A=u(A,D,C,M,p,14,s[26]),M=u(M,A,D,C,_,20,s[27]),C=u(C,M,A,D,S,5,s[28]),D=u(D,C,M,A,l,9,s[29]),A=u(A,D,C,M,v,14,s[30]),C=f(C,M=u(M,A,D,C,b,20,s[31]),A,D,g,4,s[32]),D=f(D,C,M,A,_,11,s[33]),A=f(A,D,C,M,x,16,s[34]),M=f(M,A,D,C,H,23,s[35]),C=f(C,M,A,D,d,4,s[36]),D=f(D,C,M,A,y,11,s[37]),A=f(A,D,C,M,v,16,s[38]),M=f(M,A,D,C,B,23,s[39]),C=f(C,M,A,D,S,4,s[40]),D=f(D,C,M,A,a,11,s[41]),A=f(A,D,C,M,p,16,s[42]),M=f(M,A,D,C,w,23,s[43]),C=f(C,M,A,D,m,4,s[44]),D=f(D,C,M,A,b,11,s[45]),A=f(A,D,C,M,z,16,s[46]),C=h(C,M=f(M,A,D,C,l,23,s[47]),A,D,a,6,s[48]),D=h(D,C,M,A,v,10,s[49]),A=h(A,D,C,M,H,15,s[50]),M=h(M,A,D,C,g,21,s[51]),C=h(C,M,A,D,b,6,s[52]),D=h(D,C,M,A,p,10,s[53]),A=h(A,D,C,M,B,15,s[54]),M=h(M,A,D,C,d,21,s[55]),C=h(C,M,A,D,_,6,s[56]),D=h(D,C,M,A,z,10,s[57]),A=h(A,D,C,M,w,15,s[58]),M=h(M,A,D,C,S,21,s[59]),C=h(C,M,A,D,y,6,s[60]),D=h(D,C,M,A,x,10,s[61]),A=h(A,D,C,M,l,15,s[62]),M=h(M,A,D,C,m,21,s[63]),o[0]=o[0]+C|0,o[1]=o[1]+M|0,o[2]=o[2]+A|0,o[3]=o[3]+D|0},_doFinalize:function(){var n=this._data,r=n.words,e=8*this._nDataBytes,i=8*n.sigBytes;r[i>>>5]|=128<<24-i%32;var o=t.floor(e/4294967296),s=e;r[15+(i+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),r[14+(i+64>>>9<<4)]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),n.sigBytes=4*(r.length+1),this._process();for(var a=this._hash,c=a.words,u=0;u<4;u++){var f=c[u];c[u]=16711935&(f<<8|f>>>24)|4278255360&(f<<24|f>>>8)}return a},clone:function(){var t=i.clone.call(this);return t._hash=this._hash.clone(),t}});function c(t,n,r,e,i,o,s){var a=t+(n&r|~n&e)+i+s;return(a<<o|a>>>32-o)+n}function u(t,n,r,e,i,o,s){var a=t+(n&e|r&~e)+i+s;return(a<<o|a>>>32-o)+n}function f(t,n,r,e,i,o,s){var a=t+(n^r^e)+i+s;return(a<<o|a>>>32-o)+n}function h(t,n,r,e,i,o,s){var a=t+(r^(n|~e))+i+s;return(a<<o|a>>>32-o)+n}n.MD5=i._createHelper(a),n.HmacMD5=i._createHmacHelper(a)}(Math));}else{md5=utag.ut.md5;}
u.ev={'view':1,'link':1};u.scriptrequested=false;u.pixels_initialized={};u.clearEmptyKeys=function(object){Object.keys(object).forEach(function(key){if(object[key]===''||object[key]===undefined){delete object[key];}});return object;};u.forceBoolean=function(input){var bool;if(typeof input==='boolean'){bool=input;}else if(typeof input==='string'&&input.toLowerCase()==='true'){bool=true;}else{bool=false;}
return bool;};u.map_func=function(arr,obj,item){var i=arr.shift();obj[i]=obj[i]||{};if(arr.length>0){u.map_func(arr,obj[i],item);}else{obj[i]=item;}};u.sumItems=function(arr){var totalItems=0;arr.forEach(function(arrayItem){totalItems+=parseInt(arrayItem);});return totalItems;};u.generateEventID=function(event,data,lookup_id){var hash_input=(data["tealium_timestamp_epoch"]||(function(){var d=new Date();return Math.floor(d.getTime()/1000);})())+"-"+lookup_id+"-"+event+"-"+id,event_id=md5.MD5(hash_input).toString();return event_id;};u.map={"pixel_id":"pixel_code","tiktok_event:AddPaymentInfo":"AddPaymentInfo","tiktok_event:InitiateCheckout":"InitiateCheckout","tiktok_event:AddToCart":"AddToCart","tiktok_event:ClickButton":"ClickButton","order_id":"order_id","_sm_1148_4":"order_currency","product_price":"product_unit_price","_sm_1148_6":"content_type","product_name":"content_name","_sm_1148_8":"content_category"};u.extend=[function(a,b){try{b['_sm_1148_4']="USD";}catch(e){utag.DB(e);}
try{b['_sm_1148_6']="product";}catch(e){utag.DB(e);}
try{b['_sm_1148_8']="Hulu";}catch(e){utag.DB(e);}},function(a,b){try{if((b['dom.pathname'].toString().toLowerCase().indexOf('planeswap'.toLowerCase())<0&&b['dom.pathname'].toString().toLowerCase().indexOf('/watch/'.toLowerCase())<0&&b['dom.pathname'].toString().toLowerCase().indexOf('look-at-me-resources'.toLowerCase())<0&&b['dom.pathname'].toString().toLowerCase().indexOf('/bonnaroo'.toLowerCase())<0&&b['dom.pathname'].toString().toLowerCase().indexOf('/the-hulu-effect'.toLowerCase())<0&&b['dom.pathname'].toString().toLowerCase().indexOf('/aftershock-resources'.toLowerCase())<0&&b['dom.pathname'].toString().toLowerCase().indexOf('/this-is-hulu'.toLowerCase())<0&&b['dom.pathname'].toString().toLowerCase().indexOf('/essencefest'.toLowerCase())<0&&b['dom.pathname'].toString().toLowerCase().indexOf('/lollapalooza'.toLowerCase())<0&&b['dom.pathname'].toString().toLowerCase().indexOf('/who-killed-bunny'.toLowerCase())<0&&b['dom.pathname'].toString().toLowerCase().indexOf('bonnaroo'.toLowerCase())<0&&b['dom.pathname'].toString().toLowerCase().indexOf('/the-hulu-effect'.toLowerCase())<0)){try{b['pixel_id']=b.pixel_id?b.pixel_id+',C860FQ0JVRJHAP8GQHA0':'C860FQ0JVRJHAP8GQHA0'}catch(e){}}}catch(e){utag.DB(e);}},function(a,b){try{if(b['dom.pathname'].toString().toLowerCase().indexOf('/movie/the-princess-395'.toLowerCase())>-1){try{b['pixel_id']=b.pixel_id?b.pixel_id+',CAFR9QRC77U9MLGRG8PG':'CAFR9QRC77U9MLGRG8PG'}catch(e){}}}catch(e){utag.DB(e);}},function(a,b){try{if(b['dom.pathname'].toString().toLowerCase().indexOf('/movie/prey-5534'.toLowerCase())>-1||(b['dom.pathname'].toString().toLowerCase().indexOf('/plans'.toLowerCase())>-1&&typeof b['cp.utag_main__prevpage']!='undefined'&&b['cp.utag_main__prevpage'].toString().toLowerCase().indexOf('55349764'.toLowerCase())>-1)){try{b['pixel_id']=b.pixel_id?b.pixel_id+',CAFR6ERC77U9DGAS3E10':'CAFR6ERC77U9DGAS3E10'}catch(e){}}}catch(e){utag.DB(e);}},function(a,b){try{if(b['dom.pathname'].toString().toLowerCase().indexOf('/movie/not-okay'.toLowerCase())>-1||(b['dom.pathname'].toString().toLowerCase().indexOf('/plans'.toLowerCase())>-1&&typeof b['cp.utag_main__prevpage']!='undefined'&&b['cp.utag_main__prevpage'].toString().toLowerCase().indexOf('4d60a861'.toLowerCase())>-1&&b['ut.event'].toString().toLowerCase().indexOf('view'.toLowerCase())>-1)){try{b['pixel_id']=b.pixel_id?b.pixel_id+',CAV2VCRC77U65FNEJVM0':'CAV2VCRC77U65FNEJVM0'}catch(e){}}}catch(e){utag.DB(e);}},function(a,b){try{if((typeof b['page_name']!='undefined'&&b['page_name']=='billing')){b['tiktok_event']='AddPaymentInfo'}}catch(e){utag.DB(e);}},function(a,b){try{if((typeof b['page_name']!='undefined'&&b['page_name']=='account')){b['tiktok_event']='InitiateCheckout'}}catch(e){utag.DB(e);}},function(a,b){try{if((typeof b['page_name']!='undefined'&&b['page_name']=='plans_hybrid_live_disney_espn_noah_sash')||(typeof b['page_name']!='undefined'&&b['page_name']=='hybrid_live_disney_espn')||(typeof b['floodlight_activity_group']!='undefined'&&b['floodlight_activity_group']=='plan')||b['floodlight_activity']=='land'){b['tiktok_event']='AddToCart'}}catch(e){utag.DB(e);}},function(a,b){try{if((typeof b['page_name']!='undefined'&&b['page_name'].toString().toLowerCase().indexOf('add-on_confirm'.toLowerCase())>-1)){b['tiktok_event']='ClickButton'}}catch(e){utag.DB(e);}}];u.handleEvent=function(event_name,data_layer,lookup_id){if(!event_name){return;}
var event_data={};event_data.description=u.data.description;event_data.search_string=u.data.search_string;event_data.success=u.data.success;if(event_name!=='Pageview'){event_data.currency=u.data.currency||u.data.order_currency;event_data.item_category=u.data.item_category||u.data.product_category;event_data.item_ids=u.data.item_ids||u.data.product_id;event_data.number_items=u.data.number_items||u.sumItems(u.data.product_quantity);event_data.payment_info_available=u.data.payment_info_available;event_data.price=u.data.price||u.data.order_subtotal;event_data.sign_up_method=u.data.sign_up_method;event_data.transaction_id=u.data.transaction_id||u.data.order_id;event_data.content_category=u.data.content_category;event_data.content_name=u.data.content_name;event_data.content_id=u.data.content_id;event_data.value=u.data.value;event_data.quantity=u.data.quantity;event_data.query=u.data.query;event_data.content_type=u.data.content_type;event_data.customer_id=u.data.customer_id;event_data.product_unit_price=u.data.product_unit_price;event_data.contents=u.data.contents;}
if(u.forceBoolean(u.data.event_id)){var eventId=u.generateEventID(event_name,data_layer,lookup_id);if(window.utag.globals[data_layer.tealium_random]){window.utag.globals[data_layer.tealium_random]["tiktok_event_id_"+event_name]=eventId;window.utag.globals[data_layer.tealium_random]["tiktok_event_id_"+event_name+"_"+id]=eventId;}
window.ttq.track(event_name,u.clearEmptyKeys(event_data),{event_id:event_name+'_'+eventId});}else{window.ttq.track(event_name,u.clearEmptyKeys(event_data));}};u.send=function(utag_event,data_layer){if(u.ev[utag_event]||u.ev.all!==undefined){utag.DB('send:1148');utag.DB(data_layer);var a,b,c,f,i,pixel_list,query_params;a=utag_event;b=data_layer;u.data={base_url:'https://analytics.tiktok.com/i18n/pixel/events.js?sdkid=&lib=ttq',pixel_code:'',event_id:'false',content_type:'product',auto_page_tracking:true,auto_purchase_tracking:true,email:'',phone_number:'',sha256_email:'',sha256_phone_number:'',currency:'',content_category:'',content_name:'',content_id:'',value:0,quantity:'',price:null,query:'',contents:[],order_id:'',order_subtotal:'',order_currency:'',customer_id:'',product_id:[],product_category:[],product_quantity:[],product_unit_price:[],event:[],user_data:{}};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};utag.DB('send:1148:EXTENSIONS');utag.DB(data_layer);c=[];Object.keys(utag.loader.GV(u.map)).forEach(function(mapping_key){if(data_layer[mapping_key]!==undefined&&data_layer[mapping_key]!==''){var destinations=u.map[mapping_key].split(',');destinations.forEach(function(parameter){if(parameter==='email'||parameter==='phone_number'||parameter==='sha256_email'||parameter==='sha256_phone_number'){u.data.user_data[parameter]=data_layer[mapping_key];}else if(u.data.hasOwnProperty(parameter)||parameter.indexOf('.')>-1){u.map_func(parameter.split('.'),u.data,data_layer[mapping_key]);}});}else{var event_destinations=mapping_key.split(':');if(event_destinations.length===2&&String(data_layer[event_destinations[0]])===String(event_destinations[1])){if(u.map[mapping_key]){u.data.event=u.data.event.concat(u.map[mapping_key].split(","));}}}});utag.DB('send:1148:MAPPINGS');utag.DB(u.data);var eCommerceMapping=[{eCommerceData:b._corder,name:'order_id',isArray:false},{eCommerceData:b._csubtotal,name:'order_subtotal',isArray:false},{eCommerceData:b._ccurrency,name:'order_currency',isArray:false},{eCommerceData:b._ccustid,name:'customer_id',isArray:false},{eCommerceData:b._cprod,name:'product_id',isArray:true},{eCommerceData:b._ccat,name:'product_category',isArray:true},{eCommerceData:b._cquan,name:'product_quantity',isArray:true},{eCommerceData:b._cprice,name:'product_unit_price',isArray:true},];eCommerceMapping.forEach(function(dataObject){if(!dataObject.isArray){u.data[dataObject.name]=u.data[dataObject.name]||dataObject.eCommerceData||'';}else if(u.data[dataObject.name].length===0&&dataObject.eCommerceData!==undefined&&dataObject.isArray){u.data[dataObject.name]=dataObject.eCommerceData.slice(0);}});if(u.forceBoolean(u.data.event_id)){var lookup_id=b.tealium_random;if(typeof lookup_id!=="undefined"){utag.globals[lookup_id]=window.utag.globals[lookup_id]||{};}else{lookup_id=Math.random().toFixed(16).substring(2);utag.DB("send:1148: The tealium_random variable was not defined. Any Facebook event IDs generated will not be collected by Tealium Collect. Please ensure you are using the latest version of utag.js to generate a tealium_random value.");}}
if(u.data.event.length===0&&b._cevent!==undefined){u.data.event=(u.typeOf(b._cevent)==='array')?b._cevent.slice(0):[b._cevent];}
if(u.data.contents.length>0){u.data.contents.forEach(function(element){u.data.value+=parseInt(element.price);});}
if(u.data.product_unit_price.length>0){u.data.product_unit_price.forEach(function(price){u.data.value+=price;});}
if(!u.data.pixel_code){utag.DB(u.id+': Tag not fired: Required attribute pixel_code not populated');return;}
pixel_list=u.data.pixel_code.split(',');pixel_list.forEach(function(pixel){if(!u.pixels_initialized[pixel]){window.ttq.load(pixel);window.ttq.identify(u.data.user_data);u.pixels_initialized[pixel]=true;}});if(u.forceBoolean(u.data.auto_page_tracking)&&a==='view'){window.ttq.page();}
if(u.data.event.join(',').indexOf('PlaceAnOrder')===-1&&u.data.order_id&&u.forceBoolean(u.data.auto_purchase_tracking)){u.data.event.push('PlaceAnOrder');}
u.data.event.forEach(function(e){u.handleEvent(e,data_layer,lookup_id);});if(!u.scriptrequested){u.scriptrequested=true;u.loader({type:'script',src:u.data.base_url,cb:null,loc:'script',id:'utag_1148',attrs:{}});}
utag.DB('send:1148:COMPLETE');}};utag.o[loader].loader.LOAD(id);}('1148','hulu.main'));}catch(error){utag.DB(error);}
