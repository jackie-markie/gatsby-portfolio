(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{OH8X:function(e,t,n){e.exports={aboutSection:"aboutSection-module--aboutSection--dCNbz",title:"aboutSection-module--title---qW28",link:"aboutSection-module--link--KPjnR",text:"aboutSection-module--text--3mrgf",videos:"aboutSection-module--videos--3_cDB",videoColumn:"aboutSection-module--videoColumn--386sU",videoColumnFirst:"aboutSection-module--videoColumnFirst--2lniu",video:"aboutSection-module--video--1RwYR"}},RXBc:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),a=n("SRy1"),r=n("ZMKu"),o=n("7pXE"),s=n("1oc3"),c=n("kXCs"),l=n("sFx5"),u=n("JwsL");n("IXuT"),n("+oJU");t.default=function(){var e=Object(i.useState)(""),t=e[0],n=e[1],m=Object(i.useState)("default"),d=m[0],v=m[1],f=i.useRef(null),p=null,b=null;if("undefined"!=typeof window){var g=Object(a.a)(f,{enterDelay:0,leaveDelay:0,fps:60});0!==g.x&&(p=g.clientX),0!==g.y&&(b=g.clientY)}var y={default:{opacity:1,height:10,width:10,fontSize:"16px",backgroundColor:"rgba(30, 145, 214, 1)",x:p-6,y:b-6,transition:{type:"spring",mass:.4,stiffness:130}},project:{opacity:1,backgroundColor:"rgba(255, 255, 255, 0.9)",color:"#000",height:80,width:80,fontSize:"18px",x:p-60,y:b-60,transition:{type:"spring",mass:.4,stiffness:130,duration:.3}},contact:{opacity:1,backgroundColor:"rgba(255, 189, 189, 0.85)",color:"#000",height:64,width:64,fontSize:"32px",x:p-48,y:b-48,transition:{type:"spring",mass:.4,stiffness:130}},link:{opacity:1,backgroundColor:"rgba(30, 145, 214, 0.1)",color:"#000",height:80,width:80,zIndex:1,fontSize:"32px",x:p-40,y:b-40,transition:{type:"spring",mass:.4,stiffness:130}},initial:{opacity:0,height:10,width:10,fontSize:"16px",backgroundColor:"#1e91d6",x:"50%",y:"50%",transition:{type:"spring",mass:0,stiffness:0,duration:.1}}};function w(e){n(""),v("default")}function h(e){n(""),v("link")}return i.createElement("main",null,i.createElement("div",{ref:f},i.createElement(r.a.div,{variants:y,className:"circle",animate:d,transition:{type:"spring",stiffness:500,damping:28,mass:.5}},i.createElement("span",{className:"cursor-text"},t)),i.createElement(o.a,{onLinkEnter:h,onLinkLeave:w}),i.createElement(s.a,{text:"I’m a designer who’s passionate about solving problems and creating delightful user experiences.",details:!0}),i.createElement(c.a,{onProjectEnter:function(e){n("View"),v("project")},onProjectLeave:w}),i.createElement(l.a,null),i.createElement(u.a,{onFooterEnter:function(e){n("👋"),v("contact")},onFooterLeave:w,onLinkEnter:h,onLinkLeave:w})))}},TRPC:function(e,t,n){"use strict";var i=n("q1tI");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var r=function(e){var t=Object(i.useRef)(e);return Object(i.useEffect)((function(){t.current=e})),t};t.a=function(e){var t=void 0===e?{}:e,n=t.ref,o=t.root,s=t.rootMargin,c=t.threshold,l=void 0===c?0:c,u=t.trackVisibility,m=t.delay,d=t.unobserveOnEnter,v=void 0!==d&&d,f=t.onChange,p=t.onEnter,b=t.onLeave,g=Object(i.useState)({inView:!1,scrollDirection:{}}),y=g[0],w=g[1],h=Object(i.useRef)(!1),E=Object(i.useRef)({}),j=Object(i.useRef)(!1),O=Object(i.useRef)(null),S=Object(i.useRef)(!1),C=r(f),k=r(p),P=r(b),x=Object(i.useRef)(null),z=n||x,N=Object(i.useCallback)((function(){!j.current&&O.current&&(O.current.observe(z.current),j.current=!0)}),[z]),R=Object(i.useCallback)((function(){j.current&&O.current&&(O.current.disconnect(),j.current=!1)}),[]),L=Object(i.useCallback)((function(){if(z.current){var e=z.current.getBoundingClientRect(),t=e.x,n=e.y;E.current={x:t,y:n}}}),[z]);return Object(i.useEffect)((function(){return z.current?"IntersectionObserver"in window&&"IntersectionObserverEntry"in window?(O.current=new IntersectionObserver((function(e){var t=e[0],n=t.intersectionRatio,i=t.isIntersecting,r=t.boundingClientRect,o=r.x,s=r.y,c=t.isVisible,m={},d=Array.isArray(l)?Math.min.apply(Math,l):l,f=void 0!==i?i:n>0;f=d>0?n>=d:f,o<E.current.x&&(m.horizontal="left"),o>E.current.x&&(m.horizontal="right"),E.current.x=o,s<E.current.y&&(m.vertical="up"),s>E.current.y&&(m.vertical="down"),E.current.y=s;var p={entry:t,scrollDirection:m,observe:N,unobserve:R};u&&(void 0!==c||S.current||(console.warn("💡 react-cool-inview: the browser doesn't support Intersection Observer v2, fallback to v1 behavior"),S.current=!0),void 0!==c&&(f=c)),f&&!h.current&&(v&&R(),k.current&&k.current(p)),!f&&h.current&&P.current&&P.current(p),C.current&&C.current(a({},p,{inView:f})),w({inView:f,scrollDirection:m,entry:t}),h.current=f}),{root:o,rootMargin:s,threshold:l,trackVisibility:u,delay:m}),N(),function(){R()}):(console.error("💡 react-cool-inview: the browser doesn't support Intersection Observer, please install polyfill: https://github.com/wellyshen/react-cool-inview#intersection-observer-polyfill"),function(){return null}):function(){return null}}),[z,v,o,s,JSON.stringify(l),u,m,N,R]),a({ref:z},y,{observe:N,unobserve:R,updatePosition:L})}},kXCs:function(e,t,n){"use strict";var i=n("q1tI"),a=n.n(i),r=n("ZMKu"),o=n("TRPC"),s=n("QS3V"),c=n("Wbzz"),l=n("tKSW"),u=n("iQoL"),m=n.n(u);var d=function(e){Object(i.useRef)();var t=Object(i.useState)(!1),n=t[0],o=t[1],s=Object(i.useState)(!1),u=s[0],d=s[1],v=[900,481],f=Object(r.b)(v),p=Object(l.a)([0,1800],[2.7,-2.7]),b=Object(r.d)(f,(function(e){var t=e[0];return p(t)})),g=Object(l.a)([0,962],[-1.443,1.443]),y=Object(r.d)(f,(function(e){var t=e[1];return g(t)})),w={stiffness:200,damping:25},h=Object(r.c)(y,w),E=Object(r.c)(b,w);function j(e){if(!u){var t=e.target.getBoundingClientRect();f.set([e.clientX-t.left,e.clientY-t.top])}}return Object(i.useEffect)((function(){n||f.set(v)}),[n,f,v]),a.a.createElement("div",{className:m.a.cardPerspectiveWrapper+" "+m.a.featured+" "},a.a.createElement(c.a,{to:"/server-video"},a.a.createElement(r.a.div,{className:""+m.a.contentWrapper,style:{scale:1,rotateX:h,rotateY:E},onTapCancel:function(e){d(!1),j(e)},onTapStart:function(){d(!0)},onTap:function(e){d(!1)},onHoverStart:function(){o(!0),e.onProjectEnter()},onHoverEnd:function(){o(!1),e.onProjectLeave()},onMouseMove:j},a.a.createElement("div",{className:m.a.card+" "+m.a[e.color]},a.a.createElement("img",{src:e.image,alt:m.a.imageAlt,className:m.a.image}),a.a.createElement("h6",{className:m.a.title},e.title)))))};t.a=function(e){var t=Object(i.useState)("initial"),n=t[0],c=t[1],l=Object(o.a)({threshold:.05,unobserveOnEnter:!0,onEnter:function(e){e.scrollDirection,e.entry,e.observe,e.unobserve;c("visible")},onLeave:function(e){e.scrollDirection,e.entry,e.observe,e.unobserve;c("initial")}}),u=l.ref;function m(t){e.onProjectEnter()}function v(t){e.onProjectLeave()}return l.inView,l.scrollDirection,l.entry,l.observe,l.unobserve,a.a.createElement(r.a.div,{className:"grid",ref:u,variants:{initial:{opacity:.25,scale:.98,y:100,transition:{type:"spring",duration:.8}},visible:{opacity:1,scale:1,y:0,transition:{type:"spring",duration:.8}}},initial:"initial",animate:n},a.a.createElement("div",{className:"work-grid"},a.a.createElement(d,{image:"https://newportfolio.s3-us-west-2.amazonaws.com/server-video-image.png",imageAlt:"Discord server video ui",color:"pink",title:"Server Video",key:"Server Video",size:"featured",onProjectEnter:m,onProjectLeave:v}),a.a.createElement(s.a,{image:"https://newportfolio.s3-us-west-2.amazonaws.com/discord-onboarding-image.png",imageAlt:"Image of Destiny Medals Project",color:"blue",title:"Discord Onboarding",size:"normal",onProjectEnter:m,onProjectLeave:v}),a.a.createElement(s.a,{image:"https://newportfolio.s3-us-west-2.amazonaws.com/design-tooling-image.png",imageAlt:"UI of Design Tooling Plugins in Figma",color:"green",title:"Design Tooling",size:"normal",onProjectEnter:m,onProjectLeave:v}),a.a.createElement(s.a,{image:"https://newportfolio.s3-us-west-2.amazonaws.com/destiny-medals-image.png",imageAlt:"Image of Destiny Medals Project",title:"Destiny Medals",color:"purple",size:"normal",onProjectEnter:m,onProjectLeave:v}),a.a.createElement(s.a,{image:"https://newportfolio.s3-us-west-2.amazonaws.com/steelseries-image.png",imageAlt:"SteelSeries Engine UI",title:"SteelSeries",color:"pink",size:"normal",onProjectEnter:m,onProjectLeave:v})))}},sFx5:function(e,t,n){"use strict";var i=n("q1tI"),a=n.n(i),r=n("Wbzz"),o=n("OH8X"),s=n.n(o),c=n("ZMKu"),l=n("TRPC");t.a=function(){var e=Object(i.useState)("initial"),t=e[0],n=e[1],o=Object(l.a)({threshold:.25,unobserveOnEnter:!0,onEnter:function(e){e.scrollDirection,e.entry,e.observe,e.unobserve;n("visible")},onLeave:function(e){e.scrollDirection,e.entry,e.observe,e.unobserve;n("initial")}}),u=o.ref,m=(o.inView,o.scrollDirection,o.entry,o.observe,o.unobserve,{initial:{opacity:0,y:80,transition:{type:"spring",delay:.2,mass:1,damping:10,stiffness:80,delayChildren:.3,staggerChildren:.3}},visible:{opacity:1,y:0,transition:{type:"spring",delay:.2,mass:1,damping:10,stiffness:80,delayChildren:.3,staggerChildren:.3}}});return a.a.createElement(c.a.div,{className:"grid",ref:u,variants:{initial:{opacity:.25,transition:{type:"spring",duration:.6,delayChildren:.1}},visible:{opacity:1,transition:{type:"spring",duration:.6,delayChildren:.1}}},initial:"initial",animate:t},a.a.createElement("div",{className:s.a.aboutSection},a.a.createElement(c.a.div,{className:s.a.text,variants:m,initial:"initial",animate:t},a.a.createElement("h2",{className:s.a.title},"Besides design, I love writing music, programming, games and taking my dog to his favorite parks."),a.a.createElement(r.a,{to:"/about"},a.a.createElement("a",{href:"/about",className:s.a.link},"About Me ->"))),a.a.createElement(c.a.div,{className:s.a.videos,variants:m,initial:"initial",animate:t},a.a.createElement("div",{className:s.a.videoColumn+" "+s.a.videoColumnFirst},a.a.createElement("video",{src:"https://newportfolio.s3-us-west-2.amazonaws.com/daniel.mp4",className:s.a.video,autoPlay:!0,muted:!0,loop:!0})),a.a.createElement(c.a.div,{className:s.a.videoColumn,variants:m,initial:"initial",animate:t},a.a.createElement("video",{src:"https://newportfolio.s3-us-west-2.amazonaws.com/mag-final.mp4",className:s.a.video,autoPlay:!0,muted:!0,loop:!0}),a.a.createElement("video",{src:"https://newportfolio.s3-us-west-2.amazonaws.com/beach.mp4",className:s.a.video,autoPlay:!0,muted:!0,loop:!0})))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-79fa0a0af0e9222533ee.js.map