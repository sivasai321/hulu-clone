(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/Lgz":function(e,a,o){"use strict";o.r(a);var t=o("q1tI"),n=o.n(t),l=o("CVsM"),i=o.n(l),r=o("TSYQ"),s=o.n(r),d=o("0OO0"),c=o("l6fN"),u=o.n(c),v=o("aESo"),f=o("WH+W"),p=o("Dhxv"),m=o("b518"),b=o("0gIZ"),y=o("Cxy3"),g=n.a.createElement,_=function(e){var a=Object(t.useState)(!1),o=a[0],n=a[1],l=e.model,i=l.section,r=l.items,d=e.asPath,c=e.pageType,_=Object(p.c)(d,c),h=function(){n(!o),!1===o&&(Object(b.fireUserInteraction)("view_footer_section_".concat(i),"click","click"),Object(b.fireUtagLink)({event_name:"view_footer_section"}))},w=function(e,a,o){return g("div",{key:a,className:"footer--row-section col-md-".concat(12/o," col-xs-12")},e.map((function(e){var a=e.title,o=e.link,t=e.rel,n=e.modalId,l=Object(y.f)({event_name:"footer_link",event_label:e.link,page_type:_},Object(y.e)("a","footer",Object(m.normalize)(e.title)));return g(l,{key:"footer-".concat(o),href:o,"aria-label":a,title:a,rel:t,onClick:n?function(){return function(e){e&&document.getElementById(e).getElementsByClassName("modal--toggle")[0].click()}(n)}:null},g(u.a,{variant:"body14"},a))})))},F=s()("footer-section-container","col-lg-".concat(2*(null===r||void 0===r?void 0:r.length)),"col-md-".concat((null===r||void 0===r?void 0:r.length)>1?"12 footer-section-container-single":"4"),"col-xs-12");return g("div",{className:F},g(u.a,{as:"h3",variant:"eyebrow12",className:"footer--section-expand","aria-label":"".concat(i," Section"),tabIndex:"0"},i),g(u.a,{as:"h3",variant:"eyebrow12",role:"button","aria-label":"".concat(i," Section"),tabIndex:"0",onClick:h,onKeyDown:Object(f.a)(h),onMouseDown:f.b,className:"footer--section-expand-mobile","aria-expanded":o},i,g(v.a,{className:"footer__icon-plus-mobile ".concat(o?"footer__icon-plus-mobile-open":"")})),g("div",{className:"footer-row-expandable ".concat(o?"footer-row-expanded":"footer-row-collapsed")},null===r||void 0===r?void 0:r.map((function(e,a){var o="footer-".concat(i,"-").concat(a);return w(e,o,r.length)}))))},h=o("v/+M"),w=o("tk0C"),F=o("/Byj"),P=o("V6W6"),k=(o("ppTL"),n.a.createElement),O=function(e){var a=e.featureFlags,o=e.asPath,t=e.pageType,n=e.footerSects,l=e.modals,i=Object(F.b)().match(w.USER_AGENTS_REGEX.GM),r=s()("footer--legal-links-left",{hidden:i});return k("footer",{className:"cu-footer",role:"region","aria-label":"Footer",id:"FooterLg"},l&&k("span",{className:"footer-modals"},l.map((function(e){return k(h.view,{model:{id:null===e||void 0===e?void 0:e.id},className:null===e||void 0===e?void 0:e.css_class,key:null===e||void 0===e?void 0:e.id},k("div",null,(null===e||void 0===e?void 0:e.title)&&k("div",{className:"modal-dialog__title"},k(u.a,{as:"h2",variant:"title24"},null===e||void 0===e?void 0:e.title)),(null===e||void 0===e?void 0:e.body)&&k("div",{className:"modal-dialog__body",dangerouslySetInnerHTML:{__html:null===e||void 0===e?void 0:e.body}}),(null===e||void 0===e?void 0:e.footer)&&k("div",{className:"modal-dialog__footer",dangerouslySetInnerHTML:{__html:null===e||void 0===e?void 0:e.footer}})))}))),k("div",{className:"container-width"},k("div",{className:"hulu-footer"},k("div",{className:"footer--row footer--site-links"},n.map((function(e,a){return k(_,{key:a,model:e,asPath:o,pageType:t})}))),k("div",{className:"footer--row footer--legal-links"},k("div",{className:r},!i&&k(P.b,{asPath:o,featureFlags:a,pageType:t})),k("div",{className:"footer--legal-links-right"},k(P.a,{asPath:o,pageType:t}))))))},T=o("dfHm"),j=n.a.createElement,N=function(e){var a=e.asPath,o=e.featureFlags,t=e.options,n=e.pageType,l=e.footerSects,i=e.modals;switch(n){case w.CMS_PAGETYPE.start:return j(T.a,{asPath:a,featureFlags:o,pageType:n});case w.CMS_PAGETYPE.micro:return"big"===t.footer?j(O,{asPath:a,featureFlags:o,footerSects:l,pageType:n,modals:i}):"small"===t.footer?j(T.a,{asPath:a,featureFlags:o,pageType:n}):null;default:return j(O,{asPath:a,featureFlags:o,footerSects:l,pageType:n,modals:i})}},S=o("80UV"),A=o("K9PZ"),E=n.a.createElement,M=function(e){var a,o,n,l,r,c,u,v,f,p=e.asPath,m=e.pageType,b=e.query,y=e.featureFlags,g=e.latestSeason,_=e.appsFlyerBannerKey,h=e.layout,w=e.cartAbandonment,P=e.geodata,k=e.user,O=(k=void 0===k?{}:k).isSubscriber,T=h.components,j=h.locale,M=h.options,I=Object(F.b)().mobile()&&_,B=s()("content-wrapper",{"content-wrapper--brand":null!==(a=null===M||void 0===M?void 0:M.enableBrand)&&void 0!==a&&a}),x=null!==(o=null===M||void 0===M?void 0:M.displayTheme)&&void 0!==o?o:"",C=null!==(n=null===M||void 0===M?void 0:M.disableFooter)&&void 0!==n?n:"",K=Object(S.b)().isOneHulu;Object(t.useEffect)((function(){var a,o,t;Object(A.h)({allowSubscriberTraffic:null!==(a=null===e||void 0===e?void 0:null===(o=e.layout)||void 0===o?void 0:null===(t=o.options)||void 0===t?void 0:t.allowSubscriberTraffic)&&void 0!==a&&a,isSubscriber:O,pathname:window.location.pathname})&&(window.location="/")}),[]);return h&&h.components?E("div",{className:s()("page",{"theme__one-hulu":K,theme__muse:!K,theme__dark:"dark"===x})},I&&E(i.a,{bannerKey:_}),E("div",{className:B},function(){var e,a=null!==(e=null===M||void 0===M?void 0:M.enableBrand)&&void 0!==e&&e,o=null===M||void 0===M?void 0:M.contentOverrides,t=p?p.split("?")[0]:null;return T.map((function(e,n){var l=Object(d.a)(e.type);return l?E(l,{key:n,model:e,locale:j,enableBrand:a,displayTheme:x,asPath:t,query:b,featureFlags:y,pageType:m,latestSeason:g,cartAbandonment:w,contentOverrides:o,geodata:P}):null}))}()),!C&&E(N,{options:M,asPath:p,featureFlags:y,footerSects:null!==(l=null===h||void 0===h?void 0:null===(r=h.bigFooter)||void 0===r?void 0:null===(c=r[0])||void 0===c?void 0:c.sections)&&void 0!==l?l:[],pageType:m,modals:null!==(u=null===h||void 0===h?void 0:null===(v=h.bigFooter)||void 0===v?void 0:null===(f=v[0])||void 0===f?void 0:f.modals)&&void 0!==u?u:[]})):null};M.getInitialProps=function(e){var a,o,t,n,l=e.req,i=e.query,r=e.asPath,s=e.pathname;return{asPath:r,pageType:Object(m.getPageType)(null!==(a=null===l||void 0===l?void 0:null===(o=l.layout)||void 0===o?void 0:null===(t=o.options)||void 0===t?void 0:t.pageType)&&void 0!==a?a:"",s.substring(1)),query:i,appsFlyerBannerKey:null===l||void 0===l?void 0:null===(n=l.appsFlyer)||void 0===n?void 0:n.bannerKey}};a.default=M},"7jF1":function(e,a,o){"use strict";var t=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var o in e)Object.hasOwnProperty.call(e,o)&&(a[o]=e[o]);return a.default=e,a},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});var l=t(o("q1tI")),i=n(o("aeRQ"));a.useAppsFlyerBanner=function(e){var a=e.bannerKey,o=e.onError;return l.useEffect((function(){if(!window.AF)try{i.default(window,document,"script",0,"AF","banners",{banners:{key:a}})}catch(e){o&&o(e)}}),[]),[l.useCallback((function(e){var o=e.bannerKey,t=e.creativeId,n=e.additionalParams;window.AF&&window.AF("banners","showBanner",{key:void 0!==o?o:a,creativeId:t,additionalParams:n})}),[]),l.useCallback((function(){window.AF&&window.AF("banners","hideBanner")}),[])]},a.default=a.useAppsFlyerBanner},CVsM:function(e,a,o){"use strict";var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});var n=t(o("apDF")),l=t(o("7jF1"));a.useAppsFlyerBanner=l.default,a.default=n.default},aeRQ:function(e,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.default=function(e,a,o,t,n,l,i,r,s){e.AppsFlyerSdkObject=n,e.AF=e.AF||function(){(e.AF.q=e.AF.q||[]).push([Date.now()].concat(Array.prototype.slice.call(arguments)))},e.AF.id=e.AF.id||i,e.AF.plugins={},r=a.createElement(o),s=a.getElementsByTagName(o)[0],r.async=1,r.src="https://websdk.appsflyer.com?"+(l.length>0?"st="+l.split(",").sort().join(",")+"&":"")+(i.length>0?"af_id="+i:""),s.parentNode.insertBefore(r,s)}},apDF:function(e,a,o){"use strict";var t=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var o in e)Object.hasOwnProperty.call(e,o)&&(a[o]=e[o]);return a.default=e,a},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});var l=t(o("q1tI")),i=n(o("7jF1"));a.default=function(e){var a=e.bannerKey,o=e.creativeId,t=e.additionalParams,n=e.onError,r=i.default({bannerKey:a,onError:n}),s=r[0],d=r[1];return l.useEffect((function(){return s({bannerKey:a,creativeId:o,additionalParams:t}),function(){d()}}),[a,o,t]),null}},ppTL:function(e,a,o){}}]);