(this["webpackJsonpax-movies"]=this["webpackJsonpax-movies"]||[]).push([[3],{105:function(e,t,r){"use strict";r(1);var a=r(43),c=r(0);t.a=function(){return Object(c.jsxs)(a.a,{children:[Object(c.jsx)("script",{type:"text/javascript",src:"//hrscompetepickles.com/af/20/fa/af20fa02ac66c69048e7b1084a4c98f5.js"}),Object(c.jsx)("script",{"data-cfasync":"false",async:!0,type:"text/javascript",src:"//sawedhindgut.com/rxFhXdVo5KDSugZX0/43565"}),Object(c.jsx)("script",{"data-cfasync":"false",src:"//d2kd9y1bp4zc6.cloudfront.net/?bydkd=949007"})]})}},106:function(e,t,r){"use strict";r.d(t,"b",(function(){return v})),r.d(t,"a",(function(){return w})),r.d(t,"d",(function(){return x})),r.d(t,"c",(function(){return m}));var a=r(10),c=r(9),s=r.n(c),n=r(13),i=r(7),o=r(1),l=r(4),u=r(8),d=r(25),b=r(0);function j(e){var t=e.item,r=e.category;console.log("item: ",t);u.d.w500Image(t.backdrop_path?t.backdrop_path:t.poster_path);var a="movie"===r?"/home/catalog/movie/".concat(t.id,"/play"):"/home/catalog/tv/".concat(t.id,"/play"),c="movie"===r?"/home/catalog/movie/".concat(t.id):"/home/catalog/tv/".concat(t.id);return Object(b.jsx)(l.b,{to:c,onClick:d.a,children:Object(b.jsxs)("div",{className:"relative movie__item h-380 bg-cover bg-center bg-no-repeat group duration-200 my-3 mx-3 shadow-lg hover:shadow-lg border-l-0 hover:border-l-4 border-red-600 overflow-hidden rounded-md",children:[Object(b.jsx)("div",{className:"absolute top-0 left-0 w-full h-full",children:Object(b.jsx)("img",{src:u.d.w500Image(t.poster_path),className:"h-380 w-auto object-cover my-auto rounded-md shadow-lg w-full",alt:""})}),Object(b.jsx)("div",{className:"absolute top-0 left-0 w-full h-full overlay overlay-5"}),Object(b.jsx)("div",{className:"absolute top-0 left-0 w-full h-full",children:Object(b.jsxs)("div",{className:"text-gray-300 block mx-auto h-full p-5",children:[Object(b.jsx)("h3",{className:"line-2 text-xl hover:text-gray-400 duration-200",children:t.title||t.name}),Object(b.jsxs)("div",{className:"text-sm line-2 space-x-2",children:[Object(b.jsxs)("span",{children:[t.vote_average.toFixed(1),"/10"]}),Object(b.jsx)("span",{children:"\u2022"}),Object(b.jsx)("span",{children:t.release_date?t.release_date.slice(0,4):t.first_air_date?t.first_air_date.slice(0,4):""})]}),Object(b.jsx)("div",{className:"absolute top-40 left-5",children:Object(b.jsxs)(l.b,{to:a,className:"flex items-center px-3 py-2 bg-red-600  font-semibold tracking-wider uppercase text-sm btn__primary space-x-1 rounded overflow-hidden",children:[Object(b.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",className:"fill-current text-gray-300 ",children:Object(b.jsx)("path",{d:"M7 6v12l10-6z"})}),Object(b.jsx)("span",{className:"pt-0.5",children:"Play now"})]})})]})})]})})}var p=r(26),f=r.n(p);function x(e){var t=e.onClick;return Object(b.jsx)("div",{onClick:t,className:"mt-1024:opacity-0 group-hover:opacity-100 absolute top-1/2 z-10 transform -translate-y-1/2 left-3 w-7 h-16 flex items-center justify-center cursor-pointer rounded hover:opacity-70 duration-300 bg-penetration-5",children:Object(b.jsx)("svg",{width:"150",height:"150",viewBox:"0 0 24 24",className:"fill-current text-gray-300 hover:text-gray-500 duration-200",children:Object(b.jsx)("path",{d:"M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"})})})}function m(e){var t=e.onClick;return Object(b.jsx)("div",{onClick:t,className:"mt-1024:opacity-0 group-hover:opacity-100 absolute top-1/2 z-10 transform -translate-y-1/2 right-3 w-7 h-16 flex items-center justify-center cursor-pointer rounded hover:opacity-70 duration-300 bg-penetration-5",children:Object(b.jsx)("svg",{width:"150",height:"150",viewBox:"0 0 24 24",className:"fill-current text-gray-300 hover:text-gray-500 duration-200",children:Object(b.jsx)("path",{d:"M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"})})})}var h=r(24);function v(e){var t=e.type,r=e.category,c=e.title,l=e.id,d=Object(o.useState)([]),p=Object(i.a)(d,2),v=p[0],g=p[1],O=Object(o.useState)(!0),y=Object(i.a)(O,2),w=y[0],k=y[1],N={infinite:!0,autoplay:!0,slidesToShow:5,slidesToScroll:5,centerPadding:0,swipeToSlide:!0,pauseOnHover:!0,nextArrow:Object(b.jsx)(m,{}),prevArrow:Object(b.jsx)(x,{}),responsive:[{breakpoint:1700,settings:{slidesToShow:5,slidesToScroll:4}},{breakpoint:1280,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:813,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]};return Object(o.useEffect)((function(){var e=function(){var e=Object(n.a)(s.a.mark((function e(){var a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=null,c={},e.prev=2,"similar"===t){e.next=29;break}e.t0=r,e.next=e.t0===u.a.movie?7:17;break;case 7:if(t!==u.e.trending){e.next=13;break}return e.next=10,u.f.getTrendingList(r,{params:c});case 10:a=e.sent,e.next=16;break;case 13:return e.next=15,u.f.getMoviesList(t,{params:c});case 15:a=e.sent;case 16:return e.abrupt("break",27);case 17:if(t!==u.g.trending){e.next=23;break}return e.next=20,u.f.getTrendingList(r,{params:c});case 20:a=e.sent,e.next=26;break;case 23:return e.next=25,u.f.getTvList(t,{params:c});case 25:a=e.sent;case 26:return e.abrupt("break",27);case 27:e.next=32;break;case 29:return e.next=31,u.f.similar(r,l);case 31:a=e.sent;case 32:e.next=36;break;case 34:e.prev=34,e.t1=e.catch(2);case 36:g(a.results),k(!1);case 38:case"end":return e.stop()}}),e,null,[[2,34]])})));return function(){return e.apply(this,arguments)}}();e()}),[l]),w?Object(b.jsx)(h.a,{}):Object(b.jsxs)("div",{className:"py-5",children:[Object(b.jsx)("h2",{className:"capitalize px-3 text-gray-300 mt-812:text-3xl text-2xl font-semibold tracking-wide",children:c}),Object(b.jsx)("div",{className:"relative group",children:Object(b.jsx)(f.a,Object(a.a)(Object(a.a)({},N),{},{children:v&&v.map((function(e,t){return Object(b.jsx)(j,{item:e,category:r},t)}))}))})]})}var g=r(21);var O=r(15);function y(e){return function(e){if(Array.isArray(e))return Object(g.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(O.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e){var t=e.category,r=Object(o.useState)([]),a=Object(i.a)(r,2),c=a[0],l=a[1],d=Object(o.useState)([]),p=Object(i.a)(d,2),f=p[0],x=p[1],m=Object(o.useState)(""),v=Object(i.a)(m,2),g=v[0],O=v[1],w=Object(o.useState)(1),k=Object(i.a)(w,2),N=k[0],S=k[1],T=Object(o.useState)(0),_=Object(i.a)(T,2),L=_[0],z=_[1],M=Object(o.useState)(!0),C=Object(i.a)(M,2),B=C[0],E=C[1],A=function(e,t){var r=Object(o.useState)(e),a=Object(i.a)(r,2),c=a[0],s=a[1];return Object(o.useEffect)((function(){var r=setTimeout((function(){s(e)}),t);return function(){clearTimeout(r)}}),[e,t]),c}(g,1e3);Object(o.useEffect)((function(){var e=function(){var e=Object(n.a)(s.a.mark((function e(){var r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E(!0),r=null,a={},e.prev=3,e.t0=t,e.next=e.t0===u.a.movie?7:11;break;case 7:return e.next=9,u.f.getMoviesList(u.e.upcoming,{params:a});case 9:return r=e.sent,e.abrupt("break",14);case 11:return e.next=13,u.f.getTvList(u.g.popular,{params:a});case 13:r=e.sent;case 14:e.next=18;break;case 16:e.prev=16,e.t1=e.catch(3);case 18:l(r.results),x(r.results),z(r.total_pages),E(!1);case 22:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(){return e.apply(this,arguments)}}();e(),O("")}),[t]);var D=function(){var e=Object(n.a)(s.a.mark((function e(){var r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E(!0),r=null,a={page:N+1},e.prev=3,e.t0=t,e.next=e.t0===u.a.movie?7:11;break;case 7:return e.next=9,u.f.getMoviesList(u.e.upcoming,{params:a});case 9:return r=e.sent,e.abrupt("break",14);case 11:return e.next=13,u.f.getTvList(u.g.popular,{params:a});case 13:r=e.sent;case 14:e.next=18;break;case 16:e.prev=16,e.t1=e.catch(3);case 18:l([].concat(y(c),y(r.results))),x([].concat(y(f),y(r.results))),S(N+1),E(!1);case 22:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){Object(n.a)(s.a.mark((function e(){var r,a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A){e.next=2;break}return e.abrupt("return",l(f));case 2:return E(!0),e.prev=3,r={query:A},e.next=7,u.f.search(t,{params:r});case 7:a=e.sent,c=a.results,l(c),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(3);case 14:E(!1);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})))()}),[A]),B?Object(b.jsx)(h.a,{}):Object(b.jsxs)("div",{className:"w-full mt-812:w-11/12 mx-auto",children:[Object(b.jsx)("div",{className:"flex justify-end mr-3 mb-3 text-gray-500 pl-3",children:Object(b.jsxs)("div",{className:"relative w-full mt-568:w-1/2 mt-812:w-1/3 mt-1024:w-1/4",children:[Object(b.jsx)("input",{type:"text",className:"p-2 pl-8 w-full border border-gray-300 bg-gray-300 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent rounded overflow-hidden",placeholder:"Search...",value:g,onChange:function(e){return O(e.target.value)}}),Object(b.jsx)("svg",{className:"w-4 h-4 absolute left-2.5 top-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]})}),Object(b.jsx)("div",{id:"movie__grid",className:"grid grid-cols-1 mt-568:grid-cols-2 mt-812:grid-cols-3 mt-1280:grid-cols-4 mt-1700:grid-cols-5 gap-0 min-h-full",style:{},children:c.length>0&&c.map((function(e,r){return Object(b.jsx)(j,{item:e,category:t},r)}))}),N<L&&c&&Object(b.jsx)("div",{className:"flex justify-center mt-3 mb-10",children:Object(b.jsxs)("button",{onClick:D,className:"flex items-center justify-center font-semibold tracking-wider capitalize text-sm space-x-1 text-gray-300 hover:text-gray-400 duration-200 group",children:[Object(b.jsx)("span",{className:"pt-0.5",children:"Load more"}),Object(b.jsx)("svg",{width:"20",height:"20",className:"ml-0 transform duration-200 group-hover:translate-x-1.5",viewBox:"0 0 24 24",style:{fill:"#D1D5DB"},children:Object(b.jsx)("path",{d:"m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"})})]})})]})}},107:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r(14),c=r.n(a),s=r(105),n=r(0);function i(e){var t=e.title,r=e.children,a=c.a.get("website");return document.title="".concat(t," - ").concat(a),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(s.a,{}),Object(n.jsxs)("div",{children:[" ",r]})]})}},108:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return u}));var a=r(1),c=r(2),s=r(27),n=r(107),i=r(106),o=r(25),l=r(0);function u(){var e=Object(c.g)().category,t="movies"===e;return Object(a.useEffect)((function(){Object(o.a)()}),[e]),Object(l.jsxs)(n.a,{title:t?"Movies":"TV Shows",children:[Object(l.jsx)(s.b,{category:t?"Movies":"TV Shows"}),Object(l.jsx)(i.a,{category:t?"movie":"tv"})]})}}}]);
//# sourceMappingURL=3.b294f8dd.chunk.js.map