(this.webpackJsonpfriday=this.webpackJsonpfriday||[]).push([[0],{11:function(e,n,t){e.exports={wrapper:"Range_wrapper__1jCIW",container:"Range_container__3yAd_",doubleRange:"Range_doubleRange__3dHez",sliderTrack:"Range_sliderTrack__17no4"}},13:function(e,n,t){e.exports={wrapper:"Error404_wrapper__1PQcW",errorCode:"Error404_errorCode__2TQ0K",errorText:"Error404_errorText__rZJxm",errorImg:"Error404_errorImg__dI4o-"}},14:function(e,n,t){e.exports={superInput:"Input_superInput__101bN",errorInput:"Input_errorInput__2kQCt",error:"Input_error__2JFCz"}},17:function(e,n,t){e.exports={default:"Button_default__1knTv",red:"Button_red__2SQ74"}},18:function(e,n,t){},19:function(e,n,t){e.exports={customRadios:"Radio_customRadios__3ilr1",optionInput:"Radio_optionInput__3zbtW","click-wave":"Radio_click-wave__6phRY"}},23:function(e,n,t){e.exports={select:"Select_select__3masx"}},32:function(e,n,t){},33:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t(22),c=t.n(r),s=(t(32),t(24)),o=t(2),i=(t(33),t(13)),u=t.n(i),j=t(0),l=function(){return Object(j.jsxs)("div",{className:u.a.wrapper,children:[Object(j.jsx)("div",{className:u.a.errorCode,children:"404"}),Object(j.jsx)("div",{className:u.a.errorText,children:"There is nothing to do here..."}),Object(j.jsx)("img",{src:"https://www.seekpng.com/png/full/359-3590327_shopify-stores-sad-robot-shopify.png",alt:"robot",className:u.a.errorImg})]})},p=function(){return Object(j.jsx)("h1",{children:"Login"})},b=function(){return Object(j.jsx)("h1",{children:"Password Recovery"})},d=function(){return Object(j.jsx)("h1",{children:"Password Update"})},h=function(){return Object(j.jsx)("h1",{children:"Profile"})},O=function(){return Object(j.jsx)("h1",{children:"Register"})},x=t(10),g=t(5),f=t(4),m=t(17),_=t.n(m),C=function(e){var n=e.red,t=e.className,a=Object(f.a)(e,["red","className"]),r="".concat(n?_.a.red:_.a.default," ").concat(t);return Object(j.jsx)("button",Object(g.a)({className:r},a))},v=t(18),N=t.n(v),y=function(e){e.type;var n=e.onChange,t=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(f.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(a||"");return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",Object(g.a)({type:"checkbox",onChange:function(e){n&&n(e),t&&t(e.currentTarget.checked)},className:s},c)),r&&Object(j.jsx)("span",{className:N.a.spanClassName,children:r}),Object(j.jsx)("label",{className:N.a.label})," "]})},k=t(27),I=t(14),R=t.n(I),T=function(e){e.type;var n=e.onChange,t=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,i=Object(f.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(R.a.error," ").concat(o||""),l="".concat(c?R.a.errorInput:R.a.superInput," ").concat(s||"");return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",Object(g.a)({type:"text",onChange:function(e){n&&n(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:l},i)),c&&Object(j.jsx)("span",{className:u,children:c})]})},w=function(e){e.autoFocus;var n=e.onBlur,t=e.onEnter,r=e.spanProps,c=Object(f.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),o=Object(x.a)(s,2),i=o[0],u=o[1],l=r||{},p=l.children,b=l.onDoubleClick,d=l.className,h=Object(f.a)(l,["children","onDoubleClick","className"]),O="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",d);return Object(j.jsx)(j.Fragment,{children:i?Object(j.jsx)(T,Object(g.a)({autoFocus:!0,onBlur:function(e){u(!1),n&&n(e)},onEnter:function(){t&&t()}},c)):Object(j.jsxs)("span",Object(g.a)(Object(g.a)({onDoubleClick:function(e){u(!0),b&&b(e)},className:O},h),{},{children:[Object(j.jsx)(k.a,{style:{fontSize:"1.8rem"}})," ",p||c.value]}))})},E=t(19),P=t.n(E),F=function(e){e.type;var n=e.name,t=e.options,a=e.value,r=e.onChange,c=e.onChangeOption,s=(Object(f.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){r&&r(e),c&&c(e.currentTarget.value)}),o=t?t.map((function(e,t){return Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{className:P.a.optionInput,type:"radio",name:n,value:e,checked:a===e,onChange:s}),e]},n+"-"+t)})):[];return Object(j.jsx)("div",{className:P.a.customRadios,children:o})},S=t(23),B=t.n(S),z=function(e){var n=e.options,t=e.onChange,a=e.onChangeOption,r=Object(f.a)(e,["options","onChange","onChangeOption"]),c=n?n.map((function(e,n){return Object(j.jsx)("option",{children:e},n)})):[];return Object(j.jsx)("div",{className:B.a.select,children:Object(j.jsx)("select",Object(g.a)(Object(g.a)({onChange:function(e){t&&t(e),a&&a(e.currentTarget.value),console.log("select "+e.currentTarget.value)}},r),{},{children:c}))})},D=t(11),J=t.n(D),K=function(e){e.type;var n=e.onChange,t=e.onChangeRange,a=e.className,r=(e.value,Object(f.a)(e,["type","onChange","onChangeRange","className","value"]));"".concat(J.a.slider," ").concat(a||"");return Object(j.jsx)("div",{className:J.a.wrapper,children:Object(j.jsxs)("div",{className:J.a.container,children:[Object(j.jsx)("div",{className:J.a.sliderTrack}),Object(j.jsx)("input",Object(g.a)({type:"range",className:J.a.doubleRange,onChange:function(e){n&&n(e),t&&t(+e.currentTarget.value)}},r))]})})},Q=function(){var e=["apple","grape","cherry"],n=Object(a.useState)(e[1]),t=Object(x.a)(n,2),r=t[0],c=t[1],s=Object(a.useState)(50),o=Object(x.a)(s,2),i=o[0],u=o[1],l=Object(a.useState)(!1),p=Object(x.a)(l,2),b=p[0],d=p[1];return Object(j.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center",height:"80vh",marginTop:"5rem"},children:[Object(j.jsx)(C,{children:"button"}),Object(j.jsx)(y,{checked:b,onChange:function(e){d(e.currentTarget.checked)}}),Object(j.jsx)(w,{}),Object(j.jsx)(F,{value:r,options:e,onChangeOption:c}),Object(j.jsx)(T,{}),Object(j.jsx)("span",{style:{fontSize:"1.7rem"},children:i}),Object(j.jsx)(K,{onChangeRange:function(e){u(e)},value:i}),Object(j.jsx)(z,{value:r,options:e,onChangeOption:c})]})};var W=function(){return Object(j.jsx)(s.a,{children:Object(j.jsx)("div",{className:"app",children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/friday",render:function(){return Object(j.jsx)(Q,{})}}),Object(j.jsx)(o.a,{exact:!0,path:"/login",render:function(){return Object(j.jsx)(p,{})}}),Object(j.jsx)(o.a,{exact:!0,path:"/error-page",render:function(){return Object(j.jsx)(l,{})}}),Object(j.jsx)(o.a,{exact:!0,path:"/password-update",render:function(){return Object(j.jsx)(d,{})}}),Object(j.jsx)(o.a,{exact:!0,path:"/password-recovery",render:function(){return Object(j.jsx)(b,{})}}),Object(j.jsx)(o.a,{exact:!0,path:"/profile",render:function(){return Object(j.jsx)(h,{})}}),Object(j.jsx)(o.a,{exact:!0,path:"/register",render:function(){return Object(j.jsx)(O,{})}})]})})})};c.a.render(Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(W,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.ec270f34.chunk.js.map