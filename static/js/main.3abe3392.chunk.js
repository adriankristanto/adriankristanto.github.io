(this["webpackJsonpadriankristanto.github.io"]=this["webpackJsonpadriankristanto.github.io"]||[]).push([[0],{11:function(e,c,t){"use strict";t.r(c);var s=t(1),l=t.n(s),n=t(4),a=t.n(n),i=(t(9),t(2)),r=t(0);var j=function(e){var c=Object(s.useState)(new Date),t=Object(i.a)(c,2),l=t[0],n=t[1];Object(s.useEffect)((function(){var e=setInterval((function(){n(new Date)}),1e3);return function(){clearInterval(e)}}));var a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][l.getDay()],j=l.getDate(),x=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][l.getMonth()],d=l.getHours()%12;d=("00"+(0===d?12:d).toString()).substr(-2);var h=("00"+l.getMinutes().toString()).substr(-2),b=l.getHours()<12?"am":"pm";return Object(r.jsx)("div",{tabIndex:e.tabIndex,className:e.className,children:"".concat(a," ").concat(j," ").concat(x," ").concat(d,":").concat(h," ").concat(b)})};var x=function(e){var c=Object(s.useState)(!1),t=Object(i.a)(c,2),l=t[0],n=t[1],a=Object(s.useRef)();Object(s.useEffect)((function(){var e=function(e){a.current&&a.current.contains(e.target)||n(!1)};return document.body.addEventListener("click",e),function(){document.body.removeEventListener("click",e)}}),[]);var j="bg-gray-200 dark:bg-gray-700 shadow-lg rounded";return Object(r.jsxs)("div",{ref:a,children:[Object(r.jsx)("div",{tabIndex:e.tabIndex,className:"".concat(e.className," ").concat(l&&"bg-gray-100 dark:bg-gray-500"),onClick:function(){return n(!l)},children:Object(r.jsxs)("svg",{className:"fill-current",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[Object(r.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(r.jsx)("path",{d:"M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zm0-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"})]})}),l&&Object(r.jsxs)("div",{className:"absolute my-0.5 top-8 right-0.5 rounded-lg bg-gray-300 dark:bg-black shadow-xl",children:[Object(r.jsxs)("div",{className:"flex my-3",children:[Object(r.jsxs)("div",{className:"flex flex-col px-4 py-1 mr-1.5 ml-3 ".concat(j," justify-center"),children:[Object(r.jsxs)("div",{className:"flex mb-3",children:[Object(r.jsx)("div",{className:"mr-4",children:Object(r.jsxs)("svg",{className:"fill-current",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[Object(r.jsx)("path",{d:"M0 0h24v24H0V0zm0 0h24v24H0V0z",fill:"none"}),Object(r.jsx)("path",{d:"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"})]})}),Object(r.jsx)("div",{className:"ml-4",children:"Wi-Fi"})]}),Object(r.jsxs)("div",{className:"flex my-3",children:[Object(r.jsx)("div",{className:"mr-4",children:Object(r.jsxs)("svg",{className:"fill-current",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[Object(r.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(r.jsx)("path",{d:"M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"})]})}),Object(r.jsx)("div",{className:"ml-4",children:"Bluetooth"})]}),Object(r.jsxs)("div",{className:"flex mt-3",children:[Object(r.jsx)("div",{className:"mr-4",children:Object(r.jsxs)("svg",{className:"fill-current",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[Object(r.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(r.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"}),Object(r.jsx)("circle",{cx:"12",cy:"9",r:"2.5"})]})}),Object(r.jsx)("div",{className:"ml-4",children:"Location"})]})]}),Object(r.jsxs)("div",{className:"flex flex-col ml-1.5 mr-3",children:[Object(r.jsxs)("div",{className:"flex px-2 py-4 ".concat(j," mb-1"),children:[Object(r.jsx)("div",{className:"mx-4",children:Object(r.jsxs)("svg",{className:"fill-current",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[Object(r.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(r.jsx)("path",{d:"M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM11 20v-5.5H9L13 7v5.5h2L11 20z"})]})}),Object(r.jsx)("div",{className:"mx-4",children:"100%"})]}),Object(r.jsxs)("div",{className:"flex pt-2 justify-between text-sm",children:[Object(r.jsxs)("div",{className:"w-1/2 mr-1.5 px-2 py-2 flex flex-col items-center text-center ".concat(j),children:[Object(r.jsx)("div",{className:"my-1",children:Object(r.jsx)("svg",{className:"fill-current",xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:Object(r.jsxs)("g",{children:[Object(r.jsx)("path",{d:"M22,16v-2l-8.5-5V3.5C13.5,2.67,12.83,2,12,2s-1.5,0.67-1.5,1.5V9L2,14v2l8.5-2.5V19L8,20.5L8,22l4-1l4,1l0-1.5L13.5,19 v-5.5L22,16z"}),Object(r.jsx)("path",{d:"M0,0h24v24H0V0z",fill:"none"})]})})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"Airplane"}),Object(r.jsx)("p",{children:"Mode"})]})]}),Object(r.jsxs)("div",{className:"w-1/2 ml-1.5 px-2 py-2 flex flex-col items-center text-center ".concat(j),children:[Object(r.jsx)("div",{className:"my-1",children:Object(r.jsxs)("svg",{className:"fill-current",xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[Object(r.jsx)("g",{children:Object(r.jsx)("rect",{fill:"none",height:"24",width:"24"})}),Object(r.jsx)("g",{children:Object(r.jsx)("g",{children:Object(r.jsx)("path",{d:"M7,11v2h10v-2H7z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8 s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z"})})})]})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"Do Not"}),Object(r.jsx)("p",{children:"Disturb"})]})]})]})]})]}),Object(r.jsxs)("div",{className:"flex mx-3 my-3 ".concat(j," px-4 py-2 justify-between"),children:[Object(r.jsxs)("svg",{className:"fill-current",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[Object(r.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(r.jsx)("path",{d:"M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z"})]}),Object(r.jsx)("input",{className:"w-5/6",type:"range",min:"0",max:"10",step:"1"})]}),Object(r.jsxs)("div",{className:"flex mx-3 my-3 ".concat(j," px-4 py-2 justify-between"),children:[Object(r.jsxs)("svg",{className:"fill-current",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[Object(r.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(r.jsx)("path",{d:"M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48zM12 6.5c-3.03 0-5.5 2.47-5.5 5.5s2.47 5.5 5.5 5.5 5.5-2.47 5.5-5.5-2.47-5.5-5.5-5.5zm0 9c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"})]}),Object(r.jsx)("input",{className:"w-5/6",type:"range",min:"0",max:"10",step:"1"})]})]})]})};var d=function(e){return Object(r.jsx)("div",{tabIndex:e.tabIndex,className:"".concat(e.className," active:bg-gray-100 dark:active:bg-gray-500"),onClick:function(){document.documentElement.classList.toggle("dark")},children:Object(r.jsxs)("svg",{className:"fill-current",xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[Object(r.jsx)("rect",{fill:"none",height:"24",width:"24"}),Object(r.jsx)("path",{d:"M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"})]})})};var h=function(){var e="px-3 py-1 rounded focus:outline-none";return Object(r.jsxs)("div",{className:"w-screen px-2 flex flex-row flex-nowrap justify-between items-center bg-gray-300 text-black dark:bg-black dark:text-gray-50 cursor-default select-none",children:[Object(r.jsx)("div",{tabIndex:"0",className:e,children:"AK"}),Object(r.jsxs)("div",{className:"flex",children:[Object(r.jsx)(d,{tabIndex:"0",className:e}),Object(r.jsx)(x,{tabIndex:"0",className:e}),Object(r.jsx)(j,{tabIndex:"0",className:e})]})]})};var b=function(){return Object(r.jsx)("div",{className:"h-screen w-screen",children:Object(r.jsx)(h,{})})},o=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,12)).then((function(c){var t=c.getCLS,s=c.getFID,l=c.getFCP,n=c.getLCP,a=c.getTTFB;t(e),s(e),l(e),n(e),a(e)}))};a.a.render(Object(r.jsx)(l.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root")),o()},9:function(e,c,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.3abe3392.chunk.js.map