(this["webpackJsonpax-movies"]=this["webpackJsonpax-movies"]||[]).push([[8],{111:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return g}));var s=c(32),r=c.n(s),a=c(33),i=c(6),l=c(1),n=c(2),o=c(36),d=c(35),j=c(38),u=c.n(j),b=c(30),m=c(0);function x(e){var t=e.cast,c=b.d.w500Image(t.profile_path);return Object(m.jsxs)("div",{className:"relative movie__item h-44 bg-cover bg-center bg-no-repeat group duration-200 my-3 mx-3 shadow-lg hover:shadow-lg border-l-0 hover:border-l-4 border-red-600 overflow-hidden rounded-md",children:[Object(m.jsxs)("div",{className:"absolute flex top-0 left-0 w-full h-full",children:[Object(m.jsx)("img",{src:c,className:"w-2/5 h-full object-cover",alt:""}),Object(m.jsx)("div",{className:"text-gray-300 h-full p-5",children:Object(m.jsxs)("div",{className:"line-6",children:[Object(m.jsx)("h3",{className:"text-lg",children:t.name}),Object(m.jsx)("h4",{className:"text-red-600 font-semibold",children:t.character})]})})]}),Object(m.jsx)("div",{className:"absolute top-0 left-0 w-full h-full overlay overlay-2"})]})}var h=c(34);function p(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],o=Object(n.g)(),j=o.category,p=o.id,f={infinite:!0,autoplay:!0,slidesToShow:5,slidesToScroll:5,centerPadding:0,swipeToSlide:!0,pauseOnHover:!0,nextArrow:Object(m.jsx)(h.c,{}),prevArrow:Object(m.jsx)(h.d,{}),responsive:[{breakpoint:1700,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:1280,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:813,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]};return Object(l.useEffect)((function(){var e=function(){var e=Object(a.a)(r.a.mark((function e(){var t,c,a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={},e.next=4,b.f.credits(j,p,{params:t});case 4:c=e.sent,a=c.cast,i=a.filter((function(e){if(e.profile_path&&!e.character.toLowerCase().includes("uncredited"))return e})),s(i),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[j,p]),Object(m.jsx)(m.Fragment,{children:c&&c.length>0&&Object(m.jsx)("div",{className:"w-11/12 mx-auto",children:Object(m.jsxs)("div",{className:"block -mx-3",children:[Object(m.jsx)("h2",{className:"capitalize px-3 text-gray-300 mt-812:text-3xl text-2xl font-semibold tracking-wide",children:"Cast (".concat(c.length,")")}),c&&c.length>4?Object(m.jsx)("div",{className:"relative group",children:Object(m.jsx)(u.a,Object(d.a)(Object(d.a)({},f),{},{children:c&&c.map((function(e,t){return Object(m.jsx)(x,{cast:e},t)}))}))}):Object(m.jsx)("div",{id:"movie__grid",className:"grid grid-cols-1 mt-568:grid-cols-2 mt-812:grid-cols-3 mt-1280:grid-cols-4 mt-1700:grid-cols-5 gap-0 min-h-full",children:c&&c.map((function(e,t){return Object(m.jsx)(x,{cast:e},t)}))})]})})})}var f=c(11),v=c(43);function O(e){var t=e.item;return Object(m.jsxs)("div",{className:"max-w-screen-2xl mx-auto w-11/12 space-y-3",children:[Object(m.jsx)("h3",{className:"mt-812:text-3xl text-2xl font-medium tracking-wide text-gray-300",children:t.type}),Object(m.jsx)("div",{className:"overflow-hidden",children:Object(m.jsx)("iframe",{width:"100%",src:"https://www.youtube.com/embed/".concat(t.key),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:"rounded-md",style:{height:"calc(50/100 * 100vw)"}})})]})}function g(){var e=Object(n.g)(),t=e.category,c=e.id,s=Object(l.useState)({}),d=Object(i.a)(s,2),j=d[0],u=d[1],x=Object(l.useState)([]),g=Object(i.a)(x,2),w=g[0],y=g[1],N=Object(l.useState)(!0),S=Object(i.a)(N,2),k=S[0],T=S[1],_=Object(l.useState)(""),A=Object(i.a)(_,2),C=A[0],E=A[1],F=function(){var e=Object(a.a)(r.a.mark((function e(){var s,a,i,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s={},e.next=4,b.f.detail(t,c,{params:s});case 4:return a=e.sent,u(a),e.next=8,b.f.getVideos(t,c);case 8:i=e.sent,y(i.results),l=a.title?a.title:a.name,E(l),T(!1),e.next=17;break;case 15:e.prev=15,e.t0=e.catch(0);case 17:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){F()}),[c]),k?Object(m.jsx)(f.a,{}):Object(m.jsxs)(o.a,{title:C,children:[Object(m.jsx)(v.a,{movieDetails:j}),Object(m.jsx)("div",{className:"space-y-10 mb-10",children:w&&w.map((function(e){return Object(m.jsx)(O,{item:e},e.id)}))}),Object(m.jsx)(p,{}),Object(m.jsx)("div",{className:"w-11/12 mx-auto",children:Object(m.jsx)("div",{className:"-mx-3",children:Object(m.jsx)(h.b,{category:t,type:"similar",title:"Similar",id:c})})})]})}}}]);
//# sourceMappingURL=8.ac97f277.chunk.js.map