(this.webpackJsonpfriday=this.webpackJsonpfriday||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports={wrapper:"Login_wrapper__2nZF2",login:"Login_login__3bGOo",formGroup:"Login_formGroup__1mLpb",formGroupButton:"Login_formGroupButton__36Uht",formWrapper:"Login_formWrapper__3_vIr",shapeIcon:"Login_shapeIcon__ttv2N",formGroupPassword:"Login_formGroupPassword__3N_L9",navLinkGroup:"Login_navLinkGroup__3UUe9",formGroupCheckbox:"Login_formGroupCheckbox__1B3Wh"}},,,,,,function(e,n,t){e.exports={default:"Button_default__2m7fh",red:"Button_red__3NxY9",purple:"Button_purple__1VZ_7"}},,function(e,n,t){e.exports={wrapper:"Error404_wrapper__2VJhJ",errorCode:"Error404_errorCode__1hweM",errorText:"Error404_errorText__3oDLo",errorImg:"Error404_errorImg__36Ohx"}},function(e,n,t){e.exports={wrapper:"Range_wrapper__1JBTV",container:"Range_container__3Gx5H",doubleRange:"Range_doubleRange__GRGaW",sliderTrack:"Range_sliderTrack__yDQc2"}},,,function(e,n,t){e.exports={superInput:"Input_superInput__1KeHF",errorInput:"Input_errorInput__3awlA",error:"Input_error__2tyMR"}},,,function(e,n,t){},,function(e,n,t){e.exports={customRadios:"Radio_customRadios__3fXfH",optionInput:"Radio_optionInput__1aJb4","click-wave":"Radio_click-wave__3DnWv"}},,,function(e,n,t){e.exports={select:"Select_select___hJwW"}},function(e,n,t){e.exports={header:"Header_header__1H8Dc"}},,,,,,,function(e,n,t){},function(e,n,t){},,,,,,,function(e,n,t){"use strict";t.r(n);var r=t(1),c=t(18),a=t.n(c),o=(t(36),t(11)),s=t(3),i=(t(37),t(16)),j=t.n(i),l=t(0),u=function(){return Object(l.jsxs)("div",{className:j.a.wrapper,children:[Object(l.jsx)("div",{className:j.a.errorCode,children:"404"}),Object(l.jsx)("div",{className:j.a.errorText,children:"There is nothing to do here..."}),Object(l.jsx)("img",{src:"https://www.seekpng.com/png/full/359-3590327_shopify-stores-sad-robot-shopify.png",alt:"robot",className:j.a.errorImg})]})},p=t(12),b=t(8),d=t.n(b),h=t(5),O=t(4),x=t(20),m=t.n(x),g=function(e){e.type;var n=e.onChange,t=e.onChangeText,r=e.onKeyPress,c=e.onEnter,a=e.error,o=e.className,s=e.spanClassName,i=Object(O.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(m.a.error," ").concat(s||""),u="".concat(a?m.a.errorInput:m.a.superInput," ").concat(o||"");return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",Object(h.a)({type:"text",onChange:function(e){n&&n(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),c&&"Enter"===e.key&&c()},className:u},i)),a&&Object(l.jsx)("span",{className:j,children:a})]})},f=t(14),_=t.n(f),v=function(e){var n=e.red,t=e.purple,r=e.className,c=Object(O.a)(e,["red","purple","className"]),a="".concat(n?"".concat(_.a.default," ").concat(_.a.red):t?"".concat(_.a.default," ").concat(_.a.purple):_.a.default," ").concat(r);return Object(l.jsx)("button",Object(h.a)({className:a},c))},C=t(23),N=t.n(C),y=function(e){e.type;var n=e.onChange,t=e.onChangeChecked,r=e.className,c=(e.spanClassName,e.children),a=Object(O.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(r||"");return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",Object(h.a)({type:"checkbox",onChange:function(e){n&&n(e),t&&t(e.currentTarget.checked)},className:o},a)),c&&Object(l.jsx)("span",{className:N.a.spanClassName,children:c}),Object(l.jsx)("label",{className:N.a.label})," "]})},w=function(){var e=Object(r.useState)(!1),n=Object(p.a)(e,2),t=n[0],c=n[1];return Object(l.jsx)("div",{className:d.a.wrapper,children:Object(l.jsxs)("div",{className:d.a.login,children:[Object(l.jsx)("h1",{children:"It-incubator"}),Object(l.jsx)("div",{className:d.a.formWrapper,children:Object(l.jsxs)("form",{action:"/",children:[Object(l.jsx)("h2",{children:"Sign In"}),Object(l.jsx)("div",{className:d.a.formGroup,children:Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{children:"Email"}),Object(l.jsx)("br",{}),Object(l.jsx)(g,{type:"text",placeholder:"j&johnson.gmail.com",required:!0})]})}),Object(l.jsx)("div",{className:"".concat(d.a.formGroup," ").concat(d.a.shapeIcon),children:Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{children:"Password"}),Object(l.jsx)("br",{}),Object(l.jsx)(g,{type:"password",placeholder:"*******",required:!0})]})}),Object(l.jsx)("div",{className:"".concat(d.a.formGroup," ").concat(d.a.formGroupCheckbox),children:Object(l.jsxs)("label",{children:[Object(l.jsx)(y,{checked:t,onChange:function(e){c(e.currentTarget.checked)}}),Object(l.jsx)("span",{children:"Remember me"})]})}),Object(l.jsx)("div",{className:"".concat(d.a.formGroup," ").concat(d.a.formGroupPassword),children:Object(l.jsx)(o.b,{to:"/password-recovery",children:"Forgot Password"})}),Object(l.jsx)("div",{className:"".concat(d.a.formGroup," ").concat(d.a.formGroupButton),children:Object(l.jsx)(v,{type:"submit",children:"Login"})})]})}),Object(l.jsx)("p",{children:"Don\u2019t have an account?"}),Object(l.jsx)("div",{className:d.a.navLinkGroup,children:Object(l.jsx)(o.b,{to:"/profile",children:" Sign Up"})})]})})},k=function(){return Object(l.jsx)("h1",{children:"Password Recovery"})},G=function(){return Object(l.jsx)("h1",{children:"Password Update"})},I=function(){return Object(l.jsx)("h1",{children:"Profile"})},R=function(){return Object(l.jsx)("h1",{children:"Register"})},T=t(31),L=function(e){e.autoFocus;var n=e.onBlur,t=e.onEnter,c=e.spanProps,a=Object(O.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(r.useState)(!1),s=Object(p.a)(o,2),i=s[0],j=s[1],u=c||{},b=u.children,d=u.onDoubleClick,x=u.className,m=Object(O.a)(u,["children","onDoubleClick","className"]),f="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",x);return Object(l.jsx)(l.Fragment,{children:i?Object(l.jsx)(g,Object(h.a)({autoFocus:!0,onBlur:function(e){j(!1),n&&n(e)},onEnter:function(){t&&t()}},a)):Object(l.jsxs)("span",Object(h.a)(Object(h.a)({onDoubleClick:function(e){j(!0),d&&d(e)},className:f},m),{},{children:[Object(l.jsx)(T.a,{style:{fontSize:"1.8rem"}})," ",b||a.value]}))})},P=t(25),E=t.n(P),B=function(e){e.type;var n=e.name,t=e.options,r=e.value,c=e.onChange,a=e.onChangeOption,o=(Object(O.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){c&&c(e),a&&a(e.currentTarget.value)}),s=t?t.map((function(e,t){return Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{className:E.a.optionInput,type:"radio",name:n,value:e,checked:r===e,onChange:o}),e]},n+"-"+t)})):[];return Object(l.jsx)("div",{className:E.a.customRadios,children:s})},F=t(28),S=t.n(F),D=function(e){var n=e.options,t=e.onChange,r=e.onChangeOption,c=Object(O.a)(e,["options","onChange","onChangeOption"]),a=n?n.map((function(e,n){return Object(l.jsx)("option",{children:e},n)})):[];return Object(l.jsx)("div",{className:S.a.select,children:Object(l.jsx)("select",Object(h.a)(Object(h.a)({onChange:function(e){t&&t(e),r&&r(e.currentTarget.value),console.log("select "+e.currentTarget.value)}},c),{},{children:a}))})},J=t(17),W=t.n(J),U=function(e){e.type;var n=e.onChange,t=e.onChangeRange,r=(e.className,e.value,Object(O.a)(e,["type","onChange","onChangeRange","className","value"]));return Object(l.jsx)("div",{className:W.a.wrapper,children:Object(l.jsxs)("div",{className:W.a.container,children:[Object(l.jsx)("div",{className:W.a.sliderTrack}),Object(l.jsx)("input",Object(h.a)({type:"range",className:W.a.doubleRange,onChange:function(e){n&&n(e),t&&t(+e.currentTarget.value)}},r))]})})},H=t(29),K=t.n(H),V=function(){return Object(l.jsxs)("header",{className:K.a.header,children:[Object(l.jsx)(o.b,{to:"/login",children:"Login"}),Object(l.jsx)(o.b,{to:"/register",children:"Register"}),Object(l.jsx)(o.b,{to:"/profile",children:"Profile"}),Object(l.jsx)(o.b,{to:"/password-update",children:"Update Password"}),Object(l.jsx)(o.b,{to:"/password-recovery",children:"Recover Password"}),Object(l.jsx)(o.b,{to:"/error-page",children:"ErrorPage"})]})},q=function(){var e=["apple","grape","cherry"],n=Object(r.useState)(e[1]),t=Object(p.a)(n,2),c=t[0],a=t[1],o=Object(r.useState)(50),s=Object(p.a)(o,2),i=s[0],j=s[1],u=Object(r.useState)(!1),b=Object(p.a)(u,2),d=b[0],h=b[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(V,{}),Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center",height:"80vh",marginTop:"5rem"},children:[Object(l.jsx)(v,{children:"button"}),Object(l.jsx)(y,{checked:d,onChange:function(e){h(e.currentTarget.checked)}}),Object(l.jsx)(L,{}),Object(l.jsx)(B,{value:c,options:e,onChangeOption:a}),Object(l.jsx)(g,{}),Object(l.jsx)("span",{style:{fontSize:"1.7rem"},children:i}),Object(l.jsx)(U,{onChangeRange:function(e){j(e)},value:i}),Object(l.jsx)(D,{value:c,options:e,onChangeOption:a})]})]})};var z=function(){return Object(l.jsx)(o.a,{children:Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(s.b,{path:"/",exact:!0,render:function(){return Object(l.jsx)(s.a,{to:"/"})}}),Object(l.jsxs)(s.d,{children:[Object(l.jsx)(s.b,{exact:!0,path:"/",render:function(){return Object(l.jsx)(q,{})}}),Object(l.jsx)(s.b,{exact:!0,path:"/login",render:function(){return Object(l.jsx)(w,{})}}),Object(l.jsx)(s.b,{exact:!0,path:"/error-page",render:function(){return Object(l.jsx)(u,{})}}),Object(l.jsx)(s.b,{exact:!0,path:"/password-update",render:function(){return Object(l.jsx)(G,{})}}),Object(l.jsx)(s.b,{exact:!0,path:"/password-recovery",render:function(){return Object(l.jsx)(k,{})}}),Object(l.jsx)(s.b,{exact:!0,path:"/profile",render:function(){return Object(l.jsx)(I,{})}}),Object(l.jsx)(s.b,{exact:!0,path:"/register",render:function(){return Object(l.jsx)(R,{})}})]})]})})},M=t(30),Z=t(26),A=Object(Z.a)({}),Q=Object(Z.b)(A);a.a.render(Object(l.jsx)(M.a,{store:Q,children:Object(l.jsx)(z,{})}),document.getElementById("root"))}],[[44,1,2]]]);
//# sourceMappingURL=main.c9fc4478.chunk.js.map