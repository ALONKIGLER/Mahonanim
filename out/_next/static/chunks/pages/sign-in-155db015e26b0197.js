(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1312],{42839:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sign-in",function(){return c(9015)}])},83476:function(a,b,c){"use strict";var d=c(85893),e=c(41664),f=c.n(e);c(67294);var g=c(74752),h=c(56275),i=function(a){var b=a.title,c=a.subtitle,e=(0,h.sr)(),i=e.mouseDirection,j=e.mouseReverse;return(0,d.jsxs)("div",{className:"edu-breadcrumb-area",children:[(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("div",{className:"breadcrumb-inner",children:[(0,d.jsx)("div",{className:"page-title",children:(0,d.jsx)("h1",{className:"title",children:b})}),(0,d.jsxs)("ul",{className:"edu-breadcrumb",children:[(0,d.jsx)("li",{className:"breadcrumb-item",children:(0,d.jsx)(f(),{href:"/",children:(0,d.jsx)("a",{children:"Home"})})}),(0,d.jsx)("li",{className:"separator",children:(0,d.jsx)("i",{className:"icon-angle-right"})}),(0,d.jsx)("li",{className:"breadcrumb-item",children:(0,d.jsx)("a",{href:"#",children:"Pages"})}),(0,d.jsx)("li",{className:"separator",children:(0,d.jsx)("i",{className:"icon-angle-right"})}),(0,d.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:c})]})]})}),(0,d.jsxs)("ul",{className:"shape-group",children:[(0,d.jsx)("li",{className:"shape-1",children:(0,d.jsx)("span",{})}),(0,d.jsx)(g.E.li,{className:"shape-2 scene",animate:{x:j(40).x,y:j(40).y},children:(0,d.jsx)("img",{src:"/assets/images/about/shape-13.png",alt:"shape"})}),(0,d.jsx)(g.E.li,{className:"shape-3 scene",animate:{x:i(40).x,y:i(40).y},children:(0,d.jsx)("img",{src:"/assets/images/about/shape-15.png",alt:"shape"})}),(0,d.jsx)("li",{className:"shape-4",children:(0,d.jsx)("span",{})}),(0,d.jsx)(g.E.li,{className:"shape-5 scene",animate:{x:j(40).x,y:j(40).y},children:(0,d.jsx)("img",{src:"/assets/images/about/shape-07.png",alt:"shape"})})]})]})};b.Z=i},40002:function(a,b,c){"use strict";var d=c(85893);c(67294);var e=function(a){var b=a.error;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("p",{style:{color:"red"},children:b})})};b.Z=e},9015:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return B}});var d=c(85893),e=c(97569),f=c(10206),g=c(67294),h=c(83476),i=c(82580),j=c(17702),k=c(9473),l=c(22920),m=c(15503),n=c(64249);(0,m.ZF)({apiKey:"AIzaSyBBUsU6zVh1unjDVE2zGgZSgtBzFdHAgYg",authDomain:"edu-blink.firebaseapp.com",projectId:"edu-blink",storageBucket:"edu-blink.appspot.com",messagingSenderId:"568463423109",appId:"1:568463423109:web:66e8a7a12aaa3af3619bec"});var o=(0,j.v0)(),p=function(){var a=(0,k.I0)();return{registerWithEmailPassword:function(b,c,d){(0,j.Xb)(o,b,c).then(function(b){(0,j.ck)(o.currentUser,{displayName:d}).then(function(){}).catch(function(a){}),a((0,n.jb)({name:d,email:b.user.email,uid:b.user.uid})),l.Am.success("".concat(d," register successfully"),{position:"top-left"})}).catch(function(a){var b=null==a?void 0:a.message;l.Am.error("".concat(b),{position:"top-left"})})},loginWithEmailPassword:function(b,c){(0,j.e5)(o,b,c).then(function(b){var c=b.user,d=c.displayName,e=c.email,f=c.uid;a((0,n.bT)({name:d,email:e,uid:f})),l.Am.success("".concat(d," login successfully"),{position:"top-left"})}).catch(function(a){var b=a.message;l.Am.error("".concat(b),{position:"top-left"})})},resetPassword:function(a){(0,j.LS)(o,a).then(function(){l.Am.success("Password reset email sent!",{position:"top-left"})}).catch(function(a){var b=null==a?void 0:a.message;l.Am.error("".concat(b),{position:"top-left"})})},logout:function(){(0,j.w7)(o).then(function(){a((0,n.QA)()),l.Am.success("Sign-out successful.",{position:"top-left"})}).catch(function(a){})}}},q=c(38315),r=c(40002),s=function(){var a=(0,g.useState)(!1),b=a[0],c=a[1],e=p(),f=e.loginWithEmailPassword,h=e.resetPassword,j=(0,i.TA)({initialValues:{email:"",password:""},validationSchema:q.dm,onSubmit:function(a,b){var c=b.resetForm;f(a.email,a.password),c()}}),k=j.handleChange,l=j.handleSubmit,m=j.handleBlur,n=j.errors,o=j.values,s=j.touched,t=function(a){h(a)};return(0,d.jsxs)("form",{onSubmit:l,children:[(0,d.jsxs)("div",{className:"form-group",children:[(0,d.jsx)("label",{htmlFor:"current-log-email",children:"Username or email*"}),(0,d.jsx)("input",{value:o.email,onChange:k,onBlur:m,type:"email",name:"email",placeholder:"Email or username"}),s.email&&(0,d.jsx)(r.Z,{error:n.email})]}),(0,d.jsxs)("div",{className:"form-group",children:[(0,d.jsx)("label",{htmlFor:"current-log-password",children:"Password*"}),(0,d.jsx)("input",{value:o.password,onChange:k,onBlur:m,type:b?"text":"password",name:"password",placeholder:"Password"}),(0,d.jsx)("span",{onClick:function(){return c(!b)},className:"password-show",children:(0,d.jsx)("i",{className:"icon-76"})})]}),s.password&&(0,d.jsx)(r.Z,{error:n.password}),(0,d.jsxs)("div",{className:"form-group chekbox-area",children:[(0,d.jsxs)("div",{className:"edu-form-check",children:[(0,d.jsx)("input",{type:"checkbox",id:"remember-me"}),(0,d.jsx)("label",{htmlFor:"remember-me",children:"Remember Me"})]}),(0,d.jsx)("a",{href:"#",onClick:function(){return t(o.email)},className:"password-reset",children:"Lost your password?"})]}),(0,d.jsx)("div",{className:"form-group",children:(0,d.jsxs)("button",{type:"submit",className:"edu-btn btn-medium",children:["Sign in ",(0,d.jsx)("i",{className:"icon-4"})]})})]})},t=c(41664),u=c.n(t),v=function(){var a,b=(0,g.useState)(!1),c=b[0],e=b[1],f=p().registerWithEmailPassword,h=(0,i.TA)({initialValues:{name:"",email:"",password:"",terms:!1},validationSchema:q.gY,onSubmit:function(a,b){var c=b.resetForm;f(a.email,a.password,a.name),c()}}),j=h.handleChange,k=h.handleSubmit,l=h.handleBlur,m=h.errors,n=h.values,o=h.touched;return(0,d.jsxs)("form",{onSubmit:k,children:[(0,d.jsxs)("div",{className:"form-group",children:[(0,d.jsx)("label",{htmlFor:"reg-name",children:"Name*"}),(0,d.jsx)("input",{value:n.name,onChange:j,onBlur:l,type:"text",name:"name",id:"reg-name",placeholder:"Full name"}),o.name&&(0,d.jsx)(r.Z,{error:m.name})]}),(0,d.jsxs)("div",{className:"form-group",children:[(0,d.jsx)("label",{htmlFor:"log-email",children:"Username or email*"}),(0,d.jsx)("input",{value:n.email,onChange:j,onBlur:l,type:"email",name:"email",id:"log-email",placeholder:"Email or username"}),o.email&&(0,d.jsx)(r.Z,{error:m.email})]}),(0,d.jsxs)("div",{className:"form-group",children:[(0,d.jsx)("label",{htmlFor:"log-password",children:"Password*"}),(0,d.jsx)("input",{value:n.password,onChange:j,onBlur:l,type:c?"text":"password",name:"password",id:"log-password",placeholder:"Password"}),(0,d.jsx)("span",{onClick:function(){return e(!c)},className:"password-show",children:(0,d.jsx)("i",{className:"icon-76"})})]}),o.password&&(0,d.jsx)(r.Z,{error:m.password}),(0,d.jsx)("div",{className:"form-group chekbox-area",children:(0,d.jsxs)("div",{className:"edu-form-check",children:[(0,d.jsx)("input",{value:n.terms,onChange:j,onBlur:l,type:"checkbox",name:"terms",id:"terms-condition"}),(0,d.jsxs)("label",{htmlFor:"terms-condition",children:["I agree the User Agreement and",(0,d.jsx)(u(),{href:"/terms-condition",children:(0,d.jsx)("a",{children:"Terms & Condition."})})]})]})}),o.terms&&(0,d.jsx)(r.Z,{error:null===(a=m.terms)|| void 0===a?void 0:a.split("true,")[1]}),(0,d.jsx)("div",{className:"form-group",children:(0,d.jsxs)("button",{type:"submit",className:"edu-btn btn-medium",children:["Create Account ",(0,d.jsx)("i",{className:"icon-4"})]})})]})},w=v,x=function(){return(0,d.jsx)("section",{className:"account-page-area section-gap-equal",children:(0,d.jsxs)("div",{className:"container position-relative",children:[(0,d.jsxs)("div",{className:"row g-5 justify-content-center",children:[(0,d.jsx)("div",{className:"col-lg-5",children:(0,d.jsxs)("div",{className:"login-form-box",children:[(0,d.jsx)("h3",{className:"title",children:"Sign in"}),(0,d.jsxs)("p",{children:["Don’t have an account? ",(0,d.jsx)("a",{href:"#",children:"Sign up"})]}),(0,d.jsx)(s,{})]})}),(0,d.jsx)("div",{className:"col-lg-5",children:(0,d.jsxs)("div",{className:"login-form-box registration-form",children:[(0,d.jsx)("h3",{className:"title",children:"Registration"}),(0,d.jsxs)("p",{children:["Already have an account? ",(0,d.jsx)("a",{href:"#",children:"Sign in"})]}),(0,d.jsx)(w,{})]})})]}),(0,d.jsxs)("ul",{className:"shape-group",children:[(0,d.jsx)("li",{className:"shape-1 scene",children:(0,d.jsx)("img",{src:"/assets/images/about/shape-07.png",alt:"Shape"})}),(0,d.jsx)("li",{className:"shape-2 scene",children:(0,d.jsx)("img",{src:"/assets/images/about/shape-13.png",alt:"Shape"})}),(0,d.jsx)("li",{className:"shape-3 scene",children:(0,d.jsx)("img",{src:"/assets/images/counterup/shape-02.png",alt:"Shape"})})]})]})})},y=x,z=function(){return(0,d.jsx)("div",{className:"sticky-header",children:(0,d.jsxs)("div",{id:"main-wrapper",className:"main-wrapper",children:[(0,d.jsx)(f.h4,{no_top_bar:!0}),(0,d.jsx)(h.Z,{title:"My Account",subtitle:"Account"}),(0,d.jsx)(y,{}),(0,d.jsx)(f.$_,{style_2:"footer-dark bg-image footer-style-2"})]})})},A=z;function B(){return(0,d.jsxs)(f.im,{children:[(0,d.jsx)(e.Z,{pageTitle:"Sign In"}),(0,d.jsx)(A,{})]})}},38315:function(a,b,c){"use strict";c.d(b,{Ih:function(){return h},NA:function(){return g},dm:function(){return f},gY:function(){return e}});var d=c(74231),e=d.Ry().shape({name:d.Z_().required().label("Name"),email:d.Z_().required().email().label("Email"),password:d.Z_().required().min(6).label("Password"),terms:d.Xg().oneOf([!0,"You need to accept the terms and conditions"])}),f=d.Ry().shape({email:d.Z_().required().email().label("Email"),password:d.Z_().required().min(6).label("Password")}),g=d.Ry().shape({name:d.Z_().required().label("Name"),email:d.Z_().required().email().label("Email"),msg:d.Z_().required().min(20).label("Message")});d.Ry().shape({name:d.Z_().required().label("Name"),email:d.Z_().required().email().label("Email"),phone:d.Z_().required().min(11).label("Phone"),msg:d.Z_().required().min(20).label("Message")});var h=d.Ry().shape({title:d.Z_().required().label("Title"),name:d.Z_().required().label("Name"),email:d.Z_().required().email().label("Email"),msg:d.Z_().required().min(20).label("Summery")})}},function(a){a.O(0,[7117,4752,1664,551,6433,206,9774,2888,179],function(){var b;return a(a.s=42839)}),_N_E=a.O()}])