//tealium universal tag - utag.1299 ut4.0.202206131905, Copyright 2022 Tealium.com Inc. All Rights Reserved.
window.snaptr=window.snaptr||function(){window.snaptr.handleRequest?window.snaptr.handleRequest.apply(window.snaptr,arguments):window.snaptr.queue.push(arguments);};window.snaptr.queue=window.snaptr.queue||[];try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<41){u.loader=function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){b=m;}else{b=a.createElement("iframe");}o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}if(o.id){b.id=o.id;}for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){this.onreadystatechange=null;o.cb();}};}}if(o.type!="img"&&!m){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}}};}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1,"link":1};u.initialized=false;u.scriptrequested=false;u.pixels_initialized={};u.clearEmptyKeys=function(object){for(var key in object){if(object[key]===""||object[key]===undefined){delete object[key];}}
return object;};u.forceBoolean=function(input){var bool;if(typeof input==="boolean"){bool=input;}else if(typeof input==="string"&&input.toLowerCase()==="true"){bool=true;}else{bool=false;}
return bool;}
u.map_func=function(arr,obj,item){var i=arr.shift();obj[i]=obj[i]||{};if(arr.length>0){u.map_func(arr,obj[i],item);}else{obj[i]=item;}};u.sumItems=function(arr){var totalItems=0,i;for(i=0;i<arr.length;i++){totalItems+=parseInt(arr[i]);}
return totalItems;};u.map={"fb_ss_email":"user_hashed_email","conversion:conversion":"PAGE_VIEW","event_name:sufo_plan_select":"ADD_CART","event_name:signup_complete":"SIGN_UP","event_name:add-on_signup_complete":"PURCHASE","dom.pathname:/plans":"ADD_CART","page_name:account":"START_CHECKOUT","page_name:billing":"ADD_BILLING","_sm_1299_6":"auto_purchase_tracking","_sm_1299_7":"order_currency","product_price":"order_subtotal"};u.extend=[function(a,b){try{b['_sm_1299_6']="false";}catch(e){utag.DB(e);}
try{b['_sm_1299_7']="USD";}catch(e){utag.DB(e);}}];u.handleEvent=function(event_name){if(!event_name){return;}
var param,event_data={};event_data.description=u.data.description;event_data.search_string=u.data.search_string;event_data.success=u.data.success;if(event_name!=="PAGE_VIEW"){event_data.currency=u.data.currency||u.data.order_currency;event_data.item_category=u.data.item_category||u.data.product_category[0];event_data.item_ids=u.data.item_ids||u.data.product_id;event_data.number_items=u.data.number_items||u.sumItems(u.data.product_quantity);event_data.payment_info_available=u.data.payment_info_available;event_data.price=u.data.price||u.data.order_subtotal;event_data.sign_up_method=u.data.sign_up_method;event_data.transaction_id=u.data.transaction_id||u.data.order_id;}
for(param in u.data.custom){event_data[param]=u.data.custom[param];}
if(typeof u.data[event_name]==="object"){for(param in u.data[event_name]){event_data[param]=u.data[event_name][param];}}
window.snaptr("track",'2c95c6e7-724a-4d17-9cc4-59e903cb7485',event_name,u.clearEmptyKeys(event_data));};u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:1299");utag.DB(b);var c,d,e,f,h,i,pixel_list;u.data={"base_url":"https://sc-static.net/scevent.min.js","pixel_id":"2c95c6e7-724a-4d17-9cc4-59e903cb7485","auto_page_tracking":true,"auto_purchase_tracking":true,"currency":"","description":"","item_category":"","item_ids":"","number_items":"","payment_info_available":undefined,"price":"","search_string":"","sign_up_method":"","success":undefined,"transaction_id":"","order_id":"","order_subtotal":"","order_currency":"","product_id":[],"product_category":[],"product_quantity":[],"product_unit_price":[],"event":[],"user_data":{},"custom":{}};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};utag.DB("send:1299:EXTENSIONS");utag.DB(b);c=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(e[f].indexOf("user_")===0){u.data.user_data[e[f]]=b[d];}else if(u.data.hasOwnProperty(e[f])||e[f].indexOf(".")>-1){u.map_func(e[f].split("."),u.data,b[d]);}else{u.data.custom[e[f]]=b[d];}}}else{h=d.split(":");if(h.length===2&&b[h[0]]===h[1]){if(u.map[d]){u.data.event=u.data.event.concat(u.map[d].split(","));}}}}
utag.DB("send:1299:MAPPINGS");utag.DB(u.data);u.data.order_id=u.data.order_id||b._corder||"";u.data.order_subtotal=u.data.order_subtotal||b._csubtotal||"";u.data.order_currency=u.data.order_currency||b._ccurrency||"";u.data.customer_id=u.data.customer_id||b._ccustid||"";if(u.data.product_id.length===0&&b._cprod!==undefined){u.data.product_id=b._cprod.slice(0);}
if(u.data.product_category.length===0&&b._ccat!==undefined){u.data.product_category=b._ccat.slice(0);}
if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){u.data.product_unit_price=b._cprice.slice(0);}
if(u.data.event.length===0&&b._cevent!==undefined){u.data.event=(u.typeOf(b._cevent)==="array")?b._cevent.slice(0):[b._cevent];}
if(!u.data.pixel_id){utag.DB(u.id+": Tag not fired: Required attribute pixel_id not populated");return;}
pixel_list=u.data.pixel_id.split(",");for(i=0;i<pixel_list.length;i++){if(u.pixels_initialized[pixel_list[i]]){continue;}else{window.snaptr("init",pixel_list[i],u.data.user_data);u.pixels_initialized[pixel_list[i]]=true;}}
if(u.data.event.join(",").indexOf("PAGE_VIEW")<0&&u.forceBoolean(u.data.auto_page_tracking)&&a==="view"){u.data.event.push("PAGE_VIEW");}
if(u.data.event.join(",").indexOf("PURCHASE")<0&&u.data.order_id&&u.forceBoolean(u.data.auto_purchase_tracking)){u.data.event.push("PURCHASE");}
for(i=0;i<u.data.event.length;i++){u.handleEvent(u.data.event[i]);}
if(!u.scriptrequested){u.scriptrequested=true;u.loader({"type":"script","src":u.data.base_url,"cb":null,"loc":"script","id":"utag_1299","attrs":{}});}
utag.DB("send:1299:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("1299","hulu.main"));}catch(error){utag.DB(error);}
