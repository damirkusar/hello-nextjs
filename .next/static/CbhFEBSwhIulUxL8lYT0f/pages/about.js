(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/a9y":function(e,t,n){"use strict";var a=n("KI45"),r=a(n("/HRN")),l=a(n("WaGi")),i=a(n("ZDA2")),o=a(n("/+P4")),E=a(n("N9n2")),u=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=u(n("q1tI")),s=(u(n("17x9")),u(n("SVmy"))),d=u(n("PgRs")),T=function(e){function t(){return(0,r.default)(this,t),(0,i.default)(this,(0,o.default)(t).apply(this,arguments))}return(0,E.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props.statusCode,t=404===e?"This page could not be found":s.default[e]||"An unexpected error has occurred";return c.default.createElement("div",{style:R.error},c.default.createElement(d.default,null,c.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),c.default.createElement("title",null,e,": ",t)),c.default.createElement("div",null,c.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?c.default.createElement("h1",{style:R.h1},e):null,c.default.createElement("div",{style:R.desc},c.default.createElement("h2",{style:R.h2},t,"."))))}}],[{key:"getInitialProps",value:function(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}}]),t}(c.default.Component);T.displayName="ErrorPage",t.default=T;var R={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},Juyh:function(e,t,n){"use strict";n.r(t);var a=n("ln6h"),r=n.n(a),l=n("O40h"),i=n("0iUn"),o=n("sLSF"),E=n("MI3g"),u=n("a7VT"),c=n("Tit0"),s=n("q1tI"),d=n.n(s),T=(n("KWe9"),n("eomm")),R=n.n(T),N=n("YFqc"),m=n.n(N),f=[{href:"https://github.com/zeit/next.js",label:"Github"},{href:"https://nextjs.org/docs",label:"Docs"}],_=function(e){function t(){return Object(i.default)(this,t),Object(E.default)(this,Object(u.default)(t).apply(this,arguments))}return Object(c.default)(t,e),Object(o.default)(t,[{key:"render",value:function(){return d.a.createElement(d.a.Fragment,null,"Hello World",d.a.createElement("div",null,d.a.createElement("nav",null,d.a.createElement("ul",{className:"flex justify-between items-center p-8"},d.a.createElement("li",{className:"list-reset"},d.a.createElement(m.a,{prefetch:!0,href:"/"},d.a.createElement("a",{className:"text-blue no-underline"},"Home"))),d.a.createElement("ul",{className:"flex justify-between items-center"},f.map(function(e){var t=e.href,n=e.label;return d.a.createElement("li",{key:"".concat(t).concat(n),className:"list-reset ml-4"},d.a.createElement(m.a,{href:t},d.a.createElement("a",{className:"btn-blue no-underline"},n)))})))),d.a.createElement("div",{className:"hero"},d.a.createElement("h1",{className:"title"},"Next.js + Tailwind css"))),d.a.createElement(R.a,{statusCode:500}))}}],[{key:"getInitialProps",value:function(){var e=Object(l.default)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.req,t.query,"this.props.query.title",e.abrupt("return",{Title:"this.props.query.title"});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),t}(d.a.Component);_.Title="Hello from About",t.default=_},KWe9:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),l=n("b0oO"),i=n("PgRs"),o=n.n(i);t.a=function(e){var t=e.children,n=e.title,a=void 0===n?"Default title in MyLayout":n;return r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement("title",null,a),r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),r.a.createElement("header",null,r.a.createElement("nav",{style:{border:"4px dashed green"}},r.a.createElement(l.a,null))),t,r.a.createElement("footer",null,"I`m here to stay"))}},SVmy:function(e,t){e.exports={100:"Continue",101:"Switching Protocols",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",306:"Switch Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Time-out",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Large",415:"Unsupported Media Type",416:"Requested Range not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Time-out",505:"HTTP Version not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",510:"Not Extended",511:"Network Authentication Required",CONTINUE:100,SWITCHING_PROTOCOLS:101,OK:200,CREATED:201,ACCEPTED:202,NON_AUTHORITATIVE_INFORMATION:203,NO_CONTENT:204,RESET_CONTENT:205,PARTIAL_CONTENT:206,MULTI_STATUS:207,ALREADY_REPORTED:208,IM_USED:226,MULTIPLE_CHOICES:300,MOVED_PERMANENTLY:301,FOUND:302,SEE_OTHER:303,NOT_MODIFIED:304,USE_PROXY:305,SWITCH_PROXY:306,TEMPORARY_REDIRECT:307,PERMANENT_REDIRECT:308,BAD_REQUEST:400,UNAUTHORIZED:401,PAYMENT_REQUIRED:402,FORBIDDEN:403,NOT_FOUND:404,METHOD_NOT_ALLOWED:405,NOT_ACCEPTABLE:406,PROXY_AUTHENTICATION_REQUIRED:407,REQUEST_TIMEOUT:408,CONFLICT:409,GONE:410,LENGTH_REQUIRED:411,PRECONDITION_FAILED:412,REQUEST_ENTITY_TOO_LARGE:413,REQUEST_URI_TOO_LONG:414,UNSUPPORTED_MEDIA_TYPE:415,REQUESTED_RANGE_NOT_SATISFIABLE:416,EXPECTATION_FAILED:417,IM_A_TEAPOT:418,MISDIRECTED_REQUEST:421,UNPROCESSABLE_ENTITY:422,UPGRADE_REQUIRED:426,PRECONDITION_REQUIRED:428,LOCKED:423,FAILED_DEPENDENCY:424,TOO_MANY_REQUESTS:429,REQUEST_HEADER_FIELDS_TOO_LARGE:431,UNAVAILABLE_FOR_LEGAL_REASONS:451,INTERNAL_SERVER_ERROR:500,NOT_IMPLEMENTED:501,BAD_GATEWAY:502,SERVICE_UNAVAILABLE:503,GATEWAY_TIMEOUT:504,HTTP_VERSION_NOT_SUPPORTED:505,VARIANT_ALSO_NEGOTIATES:506,INSUFFICIENT_STORAGE:507,LOOP_DETECTED:508,NOT_EXTENDED:510,NETWORK_AUTHENTICATION_REQUIRED:511}},eomm:function(e,t,n){e.exports=n("/a9y")},rB5V:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){var e=n("Juyh");return{page:e.default||e}}])}},[["rB5V",1,0]]]);