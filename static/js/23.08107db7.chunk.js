(this["webpackJsonpsmart-cssd"]=this["webpackJsonpsmart-cssd"]||[]).push([[23],{744:function(e,t,n){"use strict";var a=n(244),i=n(0),r=n.n(i),c=n(747),s=n(23);function o(){var e;window.gtag&&(e=window).gtag.apply(e,arguments)}var l={pageview:function(e){o("config","",e)},event:function(e,t){o("event",e,t)}},d=Object(i.forwardRef)((function(e,t){var n=e.title,o=e.children,d=Object(a.a)(e,["title","children"]),u=Object(s.h)(),g=Object(i.useCallback)((function(){l.pageview({page_path:u.pathname})}),[u]);return Object(i.useEffect)((function(){g()}),[g]),r.a.createElement("div",Object.assign({ref:t},d),r.a.createElement(c.a,null,r.a.createElement("title",null,"Smart CSSD - ",n)),o)}));t.a=d},750:function(e,t,n){"use strict";var a=n(1),i=n(3),r=n(13),c=n(0),s=(n(5),n(4)),o=n(6),l=n(8),d=c.forwardRef((function(e,t){var n=e.classes,r=e.className,o=e.component,d=void 0===o?"div":o,u=e.disableGutters,g=void 0!==u&&u,m=e.fixed,x=void 0!==m&&m,p=e.maxWidth,f=void 0===p?"lg":p,b=Object(i.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return(c.createElement(d,Object(a.a)({className:Object(s.a)(n.root,r,x&&n.fixed,g&&n.disableGutters,!1!==f&&n["maxWidth".concat(Object(l.a)(String(f)))]),ref:t},b)))}));t.a=Object(o.a)((function(e){return{root:Object(r.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,n){var a=e.breakpoints.values[n];return 0!==a&&(t[e.breakpoints.up(n)]={maxWidth:a}),t}),{}),maxWidthXs:Object(r.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(r.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(r.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(r.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(r.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(d)},755:function(e,t,n){"use strict";var a=n(3),i=n(1),r=n(0),c=(n(5),n(4)),s=n(6),o=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var u=r.forwardRef((function(e,t){var n=e.alignContent,s=void 0===n?"stretch":n,o=e.alignItems,l=void 0===o?"stretch":o,d=e.classes,u=e.className,g=e.component,m=void 0===g?"div":g,x=e.container,p=void 0!==x&&x,f=e.direction,b=void 0===f?"row":f,v=e.item,h=void 0!==v&&v,j=e.justify,w=void 0===j?"flex-start":j,O=e.lg,W=void 0!==O&&O,k=e.md,S=void 0!==k&&k,y=e.sm,C=void 0!==y&&y,E=e.spacing,N=void 0===E?0:E,M=e.wrap,G=void 0===M?"wrap":M,z=e.xl,R=void 0!==z&&z,I=e.xs,L=void 0!==I&&I,B=e.zeroMinWidth,D=void 0!==B&&B,J=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),X=Object(c.a)(d.root,u,p&&[d.container,0!==N&&d["spacing-xs-".concat(String(N))]],h&&d.item,D&&d.zeroMinWidth,"row"!==b&&d["direction-xs-".concat(String(b))],"wrap"!==G&&d["wrap-xs-".concat(String(G))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==s&&d["align-content-xs-".concat(String(s))],"flex-start"!==w&&d["justify-xs-".concat(String(w))],!1!==L&&d["grid-xs-".concat(String(L))],!1!==C&&d["grid-sm-".concat(String(C))],!1!==S&&d["grid-md-".concat(String(S))],!1!==W&&d["grid-lg-".concat(String(W))],!1!==R&&d["grid-xl-".concat(String(R))]);return r.createElement(m,Object(i.a)({className:X,ref:t},J))})),g=Object(s.a)((function(e){return Object(i.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return o.forEach((function(a){var i=e.spacing(a);0!==i&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(d(i,2)),width:"calc(100% + ".concat(d(i),")"),"& > $item":{padding:d(i,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(i.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(u);t.a=g},858:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(443),c=n(750),s=n(744),o=n(244),l=n(57),d=n(4),u=n(755),g=Object(r.a)((function(){return{root:{}}}));var m=function(e){e.user;var t=e.className,n=Object(o.a)(e,["user","className"]),a=g();return i.a.createElement("div",Object.assign({className:Object(d.a)(a.root,t)},n))},x=Object(r.a)((function(){return{root:{}}}));var p=function(e){var t=e.className,n=Object(o.a)(e,["className"]),a=x(),r=Object(l.c)((function(e){return e.account})).user;return i.a.createElement(u.a,Object.assign({className:Object(d.a)(a.root,t),container:!0,spacing:3},n),i.a.createElement(u.a,{item:!0,lg:8,md:6,xl:9,xs:12},i.a.createElement(m,{user:r})))},f=Object(r.a)((function(e){return{root:{backgroundColor:e.palette.background.default,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));t.default=function(){var e=f();return(i.a.createElement(s.a,{className:e.root,title:"Account"},i.a.createElement(c.a,{maxWidth:"lg"},i.a.createElement(p,null))))}}}]);
//# sourceMappingURL=23.08107db7.chunk.js.map