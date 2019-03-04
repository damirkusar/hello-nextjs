module.exports=function(e){var t=require("../../../ssr-module-cache.js");function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}},a=!0;try{e[n].call(o.exports,o,o.exports,r),a=!1}finally{a&&delete t[n]}return o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}({"/+P4":function(e,t,r){var n=r("Bhuq"),o=r("TRZx");function a(t){return e.exports=a=o?n:function(e){return e.__proto__||n(e)},a(t)}e.exports=a},"/+oN":function(e,t){e.exports=require("core-js/library/fn/object/get-prototype-of")},"/HRN":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"/a9y":function(e,t,r){"use strict";var n=r("KI45"),o=n(r("/HRN")),a=n(r("WaGi")),u=n(r("ZDA2")),i=n(r("/+P4")),c=n(r("N9n2")),l=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var f=l(r("cDcd")),s=(l(r("rf6O")),l(r("SVmy"))),p=l(r("U7sd")),d=function(e){function t(){return(0,o.default)(this,t),(0,u.default)(this,(0,i.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){var e=this.props.statusCode,t=404===e?"This page could not be found":s.default[e]||"An unexpected error has occurred";return f.default.createElement("div",{style:E.error},f.default.createElement(p.default,null,f.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),f.default.createElement("title",null,e,": ",t)),f.default.createElement("div",null,f.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?f.default.createElement("h1",{style:E.h1},e):null,f.default.createElement("div",{style:E.desc},f.default.createElement("h2",{style:E.h2},t,"."))))}}],[{key:"getInitialProps",value:function(e){var t=e.res,r=e.err;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}}]),t}(f.default.Component);d.displayName="ErrorPage",t.default=d;var E={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"0Bsm":function(e,t,r){"use strict";var n=r("KI45"),o=n(r("UXZV")),a=n(r("/HRN")),u=n(r("WaGi")),i=n(r("ZDA2")),c=n(r("/+P4")),l=n(r("N9n2")),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},s=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=f(r("cDcd")),d=s(r("rf6O")),E=s(r("2mql")),h=r("p8BD");t.default=function(e){var t=h.getDisplayName(e),r=function(t){function r(){return(0,a.default)(this,r),(0,i.default)(this,(0,c.default)(r).apply(this,arguments))}return(0,l.default)(r,t),(0,u.default)(r,[{key:"render",value:function(){return p.default.createElement(e,(0,o.default)({router:this.context.router},this.props))}}]),r}(p.Component);return r.contextTypes={router:d.default.object},r.displayName="withRouter(".concat(t,")"),E.default(r,e)}},"0iUn":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",function(){return n})},1:function(e,t,r){e.exports=r("Juyh")},"20a2":function(e,t,r){e.exports=r("nOHt")},"2mql":function(e,t,r){"use strict";var n=r("UWCm"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u={};u[n.ForwardRef]={$$typeof:!0,render:!0};var i=Object.defineProperty,c=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(p){var d=s(r);d&&d!==p&&e(t,d,n)}var E=c(r);l&&(E=E.concat(l(r)));for(var h=u[t.$$typeof]||o,y=u[r.$$typeof]||o,m=0;m<E.length;++m){var v=E[m];if(!(a[v]||n&&n[v]||y&&y[v]||h&&h[v])){var T=f(r,v);try{i(t,v,T)}catch(e){}}}return t}return t}},"9Jkg":function(e,t,r){e.exports=r("fozc")},Bhuq:function(e,t,r){e.exports=r("/+oN")},Juyh:function(e,t,r){"use strict";r.r(t);var n=r("ln6h"),o=r.n(n),a=r("O40h"),u=r("0iUn"),i=r("sLSF"),c=r("MI3g"),l=r("a7VT"),f=r("Tit0"),s=r("cDcd"),p=r.n(s),d=(r("KWe9"),r("eomm")),E=r.n(d),h=r("YFqc"),y=r.n(h),m=[{href:"https://github.com/zeit/next.js",label:"Github"},{href:"https://nextjs.org/docs",label:"Docs"}],v=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return p.a.createElement(p.a.Fragment,null,"Hello World",p.a.createElement("div",null,p.a.createElement("nav",null,p.a.createElement("ul",{className:"flex justify-between items-center p-8"},p.a.createElement("li",{className:"list-reset"},p.a.createElement(y.a,{prefetch:!0,href:"/"},p.a.createElement("a",{className:"text-blue no-underline"},"Home"))),p.a.createElement("ul",{className:"flex justify-between items-center"},m.map(function(e){var t=e.href,r=e.label;return p.a.createElement("li",{key:"".concat(t).concat(r),className:"list-reset ml-4"},p.a.createElement(y.a,{href:t},p.a.createElement("a",{className:"btn-blue no-underline"},r)))})))),p.a.createElement("div",{className:"hero"},p.a.createElement("h1",{className:"title"},"Next.js + Tailwind css"))),p.a.createElement(E.a,{statusCode:500}))}}],[{key:"getInitialProps",value:function(){var e=Object(a.a)(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.req,t.query,"this.props.query.title",e.abrupt("return",{Title:"this.props.query.title"});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),t}(p.a.Component);v.Title="Hello from About",t.default=v},K47E:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},KI45:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},KWe9:function(e,t,r){"use strict";var n=r("cDcd"),o=r.n(n),a=r("b0oO"),u=r("U7sd"),i=r.n(u);t.a=function(e){var t=e.children,r=e.title,n=void 0===r?"Default title in MyLayout":r;return o.a.createElement("div",null,o.a.createElement(i.a,null,o.a.createElement("title",null,n),o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),o.a.createElement("header",null,o.a.createElement("nav",{style:{border:"4px dashed green"}},o.a.createElement(a.a,null))),t,o.a.createElement("footer",null,"I`m here to stay"))}},MI3g:function(e,t,r){"use strict";var n=r("XVgq"),o=r.n(n),a=r("Z7t5"),u=r.n(a);function i(e){return(i="function"==typeof u.a&&"symbol"==typeof o.a?function(e){return typeof e}:function(e){return e&&"function"==typeof u.a&&e.constructor===u.a&&e!==u.a.prototype?"symbol":typeof e})(e)}function c(e){return(c="function"==typeof u.a&&"symbol"===i(o.a)?function(e){return i(e)}:function(e){return e&&"function"==typeof u.a&&e.constructor===u.a&&e!==u.a.prototype?"symbol":i(e)})(e)}function l(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}r.d(t,"a",function(){return l})},N9n2:function(e,t,r){var n=r("SqZg"),o=r("vjea");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=n(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},O40h:function(e,t,r){"use strict";r.d(t,"a",function(){return u});var n=r("eVuF"),o=r.n(n);function a(e,t,r,n,a,u,i){try{var c=e[u](i),l=c.value}catch(e){return void r(e)}c.done?t(l):o.a.resolve(l).then(n,a)}function u(e){return function(){var t=this,r=arguments;return new o.a(function(n,o){var u=e.apply(t,r);function i(e){a(u,n,o,i,c,"next",e)}function c(e){a(u,n,o,i,c,"throw",e)}i(void 0)})}}},SVmy:function(e,t){e.exports={100:"Continue",101:"Switching Protocols",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",306:"Switch Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Time-out",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Large",415:"Unsupported Media Type",416:"Requested Range not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Time-out",505:"HTTP Version not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",510:"Not Extended",511:"Network Authentication Required",CONTINUE:100,SWITCHING_PROTOCOLS:101,OK:200,CREATED:201,ACCEPTED:202,NON_AUTHORITATIVE_INFORMATION:203,NO_CONTENT:204,RESET_CONTENT:205,PARTIAL_CONTENT:206,MULTI_STATUS:207,ALREADY_REPORTED:208,IM_USED:226,MULTIPLE_CHOICES:300,MOVED_PERMANENTLY:301,FOUND:302,SEE_OTHER:303,NOT_MODIFIED:304,USE_PROXY:305,SWITCH_PROXY:306,TEMPORARY_REDIRECT:307,PERMANENT_REDIRECT:308,BAD_REQUEST:400,UNAUTHORIZED:401,PAYMENT_REQUIRED:402,FORBIDDEN:403,NOT_FOUND:404,METHOD_NOT_ALLOWED:405,NOT_ACCEPTABLE:406,PROXY_AUTHENTICATION_REQUIRED:407,REQUEST_TIMEOUT:408,CONFLICT:409,GONE:410,LENGTH_REQUIRED:411,PRECONDITION_FAILED:412,REQUEST_ENTITY_TOO_LARGE:413,REQUEST_URI_TOO_LONG:414,UNSUPPORTED_MEDIA_TYPE:415,REQUESTED_RANGE_NOT_SATISFIABLE:416,EXPECTATION_FAILED:417,IM_A_TEAPOT:418,MISDIRECTED_REQUEST:421,UNPROCESSABLE_ENTITY:422,UPGRADE_REQUIRED:426,PRECONDITION_REQUIRED:428,LOCKED:423,FAILED_DEPENDENCY:424,TOO_MANY_REQUESTS:429,REQUEST_HEADER_FIELDS_TOO_LARGE:431,UNAVAILABLE_FOR_LEGAL_REASONS:451,INTERNAL_SERVER_ERROR:500,NOT_IMPLEMENTED:501,BAD_GATEWAY:502,SERVICE_UNAVAILABLE:503,GATEWAY_TIMEOUT:504,HTTP_VERSION_NOT_SUPPORTED:505,VARIANT_ALSO_NEGOTIATES:506,INSUFFICIENT_STORAGE:507,LOOP_DETECTED:508,NOT_EXTENDED:510,NETWORK_AUTHENTICATION_REQUIRED:511}},SqZg:function(e,t,r){e.exports=r("o5io")},TRZx:function(e,t,r){e.exports=r("Wk4r")},TUA0:function(e,t){e.exports=require("core-js/library/fn/object/define-property")},Tit0:function(e,t,r){"use strict";var n=r("SqZg"),o=r.n(n),a=r("TRZx"),u=r.n(a);function i(e,t){return(i=u.a||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=o()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}r.d(t,"a",function(){return c})},U7sd:function(e,t){e.exports=require("next-server/head")},UWCm:function(e,t){e.exports=require("react-is")},UXZV:function(e,t,r){e.exports=r("dGr4")},WaGi:function(e,t,r){var n=r("hfKm");function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),n(e,o.key,o)}}e.exports=function(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}},Wk4r:function(e,t){e.exports=require("core-js/library/fn/object/set-prototype-of")},XVgq:function(e,t,r){e.exports=r("gHn/")},YFqc:function(e,t,r){e.exports=r("cTJO")},Z7t5:function(e,t,r){e.exports=r("vqFK")},ZDA2:function(e,t,r){var n=r("iZP3"),o=r("K47E");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t}},a7VT:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var n=r("Bhuq"),o=r.n(n),a=r("TRZx"),u=r.n(a);function i(e){return(i=u.a?o.a:function(e){return e.__proto__||o()(e)})(e)}},aAV7:function(e,t){e.exports=require("core-js/library/fn/reflect/construct")},aC71:function(e,t){e.exports=require("core-js/library/fn/promise")},b0oO:function(e,t,r){"use strict";var n=r("cDcd"),o=r.n(n),a=r("YFqc"),u=r.n(a),i={marginRight:15};t.a=function(){return o.a.createElement("div",null,o.a.createElement(u.a,{href:"/"},o.a.createElement("a",{style:i},"Home")),o.a.createElement(u.a,{href:"/about"},o.a.createElement("a",{style:i},"About")),o.a.createElement(u.a,{href:"/blog"},o.a.createElement("a",{style:i},"Blog")))}},b3CU:function(e,t,r){var n=r("pbKT"),o=r("vjea");function a(t,r,u){return!function(){if("undefined"==typeof Reflect||!n)return!1;if(n.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(n(Date,[],function(){})),!0}catch(e){return!1}}()?e.exports=a=function(e,t,r){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return r&&o(a,r.prototype),a}:e.exports=a=n,a.apply(null,arguments)}e.exports=a},bzos:function(e,t){e.exports=require("url")},cDcd:function(e,t){e.exports=require("react")},cTJO:function(e,t,r){"use strict";var n=r("KI45"),o=n(r("9Jkg")),a=n(r("iZP3")),u=n(r("/HRN")),i=n(r("WaGi")),c=n(r("ZDA2")),l=n(r("/+P4")),f=n(r("N9n2")),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},p=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var d=r("bzos"),E=s(r("cDcd")),h=(p(r("rf6O")),s(r("20a2"))),y=r("p8BD");var m=function(e){function t(){var e,r,n,o,i;return(0,u.default)(this,t),(e=(0,c.default)(this,(0,l.default)(t).apply(this,arguments))).formatUrls=(r=function(e,t){return{href:e&&"object"===(0,a.default)(e)?y.formatWithValidation(e):e,as:t&&"object"===(0,a.default)(t)?y.formatWithValidation(t):t}},n=null,o=null,i=null,function(e,t){if(e===n&&t===o)return i;var a=r(e,t);return n=e,o=t,i=a,a}),e.linkClicked=function(t){var r=t.currentTarget,n=r.nodeName,o=r.target;if("A"!==n||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var a=e.formatUrls(e.props.href,e.props.as),u=a.href,i=a.as;if(function(e){var t=d.parse(e,!1,!0),r=d.parse(y.getLocationOrigin(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(u)){var c=window.location.pathname;u=d.resolve(c,u),i=i?d.resolve(c,i):u,t.preventDefault();var l=e.props.scroll;null==l&&(l=i.indexOf("#")<0),h.default[e.props.replace?"replace":"push"](u,i,{shallow:e.props.shallow}).then(function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,f.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,o.default)(this.props.href)!==(0,o.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,r=d.resolve(e,t);h.default.prefetch(r)}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"==typeof t&&(t=E.default.createElement("a",null,t));var a=E.Children.only(t),u={onClick:function(t){a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(u.href=o||n),u.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(u.href=h.Router._rewriteUrlForNextExport(u.href)),E.default.cloneElement(a,u)}}]),t}(E.Component);t.default=m},cu1A:function(e,t){e.exports=require("regenerator-runtime")},dGr4:function(e,t){e.exports=require("core-js/library/fn/object/assign")},eVuF:function(e,t,r){e.exports=r("aC71")},eomm:function(e,t,r){e.exports=r("/a9y")},fozc:function(e,t){e.exports=require("core-js/library/fn/json/stringify")},"gHn/":function(e,t){e.exports=require("core-js/library/fn/symbol/iterator")},hfKm:function(e,t,r){e.exports=r("TUA0")},iZP3:function(e,t,r){var n=r("XVgq"),o=r("Z7t5");function a(e){return(a="function"==typeof o&&"symbol"==typeof n?function(e){return typeof e}:function(e){return e&&"function"==typeof o&&e.constructor===o&&e!==o.prototype?"symbol":typeof e})(e)}function u(t){return"function"==typeof o&&"symbol"===a(n)?e.exports=u=function(e){return a(e)}:e.exports=u=function(e){return e&&"function"==typeof o&&e.constructor===o&&e!==o.prototype?"symbol":a(e)},u(t)}e.exports=u},ln6h:function(e,t,r){e.exports=r("cu1A")},nOHt:function(e,t,r){"use strict";var n=r("KI45"),o=n(r("UXZV")),a=n(r("iZP3")),u=n(r("b3CU")),i=n(r("hfKm")),c=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=c(r("qxCs")),f={router:null,readyCallbacks:[],ready:function(e){if(this.router)return e();"undefined"!=typeof window&&this.readyCallbacks.push(e)}},s=["pathname","route","query","asPath"],p=["components"],d=["push","replace","reload","back","prefetch","beforePopState"];function E(){if(!f.router){throw new Error('No router instance found.\nYou should only use "next/router" inside the client side of your app.\n')}}Object.defineProperty(f,"events",{get:function(){return l.default.events}}),p.concat(s).forEach(function(e){(0,i.default)(f,e,{get:function(){return E(),f.router[e]}})}),d.forEach(function(e){f[e]=function(){var t;return E(),(t=f.router)[e].apply(t,arguments)}}),["routeChangeStart","beforeHistoryChange","routeChangeComplete","routeChangeError","hashChangeStart","hashChangeComplete"].forEach(function(e){f.ready(function(){l.default.events.on(e,function(){var t="on".concat(e.charAt(0).toUpperCase()).concat(e.substring(1));if(f[t])try{f[t].apply(f,arguments)}catch(e){console.error("Error when running the Router event: ".concat(t)),console.error("".concat(e.message,"\n").concat(e.stack))}})})}),t.default=f;var h=r("0Bsm");t.withRouter=h.default,t.createRouter=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return f.router=(0,u.default)(l.default,t),f.readyCallbacks.forEach(function(e){return e()}),f.readyCallbacks=[],f.router},t.Router=l.default,t.makePublicRouterInstance=function(e){for(var t={},r=0;r<s.length;r++){var n=s[r];"object"!==(0,a.default)(e[n])?t[n]=e[n]:t[n]=(0,o.default)({},e[n])}return t.events=l.default.events,p.forEach(function(r){(0,i.default)(t,r,{get:function(){return e[r]}})}),d.forEach(function(r){t[r]=function(){return e[r].apply(e,arguments)}}),t}},o5io:function(e,t){e.exports=require("core-js/library/fn/object/create")},p8BD:function(e,t){e.exports=require("next-server/dist/lib/utils")},pbKT:function(e,t,r){e.exports=r("aAV7")},qxCs:function(e,t){e.exports=require("next-server/dist/lib/router/router")},rf6O:function(e,t){e.exports=require("prop-types")},sLSF:function(e,t,r){"use strict";r.d(t,"a",function(){return u});var n=r("hfKm"),o=r.n(n);function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),o()(e,n.key,n)}}function u(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}},vjea:function(e,t,r){var n=r("TRZx");function o(t,r){return e.exports=o=n||function(e,t){return e.__proto__=t,e},o(t,r)}e.exports=o},vqFK:function(e,t){e.exports=require("core-js/library/fn/symbol")}});