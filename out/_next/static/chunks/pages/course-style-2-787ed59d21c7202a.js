(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{41482:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/course-style-2",function(){return c(9174)}])},83476:function(a,b,c){"use strict";var d=c(85893),e=c(41664),f=c.n(e);c(67294);var g=c(74752),h=c(56275),i=function(a){var b=a.title,c=a.subtitle,e=(0,h.sr)(),i=e.mouseDirection,j=e.mouseReverse;return(0,d.jsxs)("div",{className:"edu-breadcrumb-area",children:[(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("div",{className:"breadcrumb-inner",children:[(0,d.jsx)("div",{className:"page-title",children:(0,d.jsx)("h1",{className:"title",children:b})}),(0,d.jsxs)("ul",{className:"edu-breadcrumb",children:[(0,d.jsx)("li",{className:"breadcrumb-item",children:(0,d.jsx)(f(),{href:"/",children:(0,d.jsx)("a",{children:"Home"})})}),(0,d.jsx)("li",{className:"separator",children:(0,d.jsx)("i",{className:"icon-angle-right"})}),(0,d.jsx)("li",{className:"breadcrumb-item",children:(0,d.jsx)("a",{href:"#",children:"Pages"})}),(0,d.jsx)("li",{className:"separator",children:(0,d.jsx)("i",{className:"icon-angle-right"})}),(0,d.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:c})]})]})}),(0,d.jsxs)("ul",{className:"shape-group",children:[(0,d.jsx)("li",{className:"shape-1",children:(0,d.jsx)("span",{})}),(0,d.jsx)(g.E.li,{className:"shape-2 scene",animate:{x:j(40).x,y:j(40).y},children:(0,d.jsx)("img",{src:"/assets/images/about/shape-13.png",alt:"shape"})}),(0,d.jsx)(g.E.li,{className:"shape-3 scene",animate:{x:i(40).x,y:i(40).y},children:(0,d.jsx)("img",{src:"/assets/images/about/shape-15.png",alt:"shape"})}),(0,d.jsx)("li",{className:"shape-4",children:(0,d.jsx)("span",{})}),(0,d.jsx)(g.E.li,{className:"shape-5 scene",animate:{x:j(40).x,y:j(40).y},children:(0,d.jsx)("img",{src:"/assets/images/about/shape-07.png",alt:"shape"})})]})]})};b.Z=i},35225:function(a,b,c){"use strict";var d=c(85893),e=c(41664),f=c.n(e);c(67294);var g=c(9473),h=c(51768),i=function(a){var b=a.course_items,c=a.num,e=a.setCourses,i=a.courses,j=a.course_list,k=a.items,l=(0,g.I0)(),m=function(a){if("Filters"===a.target.value)e(b);else if("Low To High"===a.target.value){var c=i.slice().sort(function(a,b){return parseFloat(a.course_price)-parseFloat(b.course_price)});e(c)}else if("High To Low"===a.target.value){var d=i.slice().sort(function(a,b){return parseFloat(b.course_price)-parseFloat(a.course_price)});e(d)}l((0,h.Xn)(0)),l((0,h.CF)(0))};return(0,d.jsxs)("div",{className:"edu-sorting-area",children:[(0,d.jsx)("div",{className:"sorting-left",children:k?(0,d.jsxs)("h6",{className:"showing-text",children:["Showing ",(0,d.jsx)("span",{children:c})," of ",(0,d.jsx)("span",{children:k.length})," courses"]}):(0,d.jsxs)("h6",{className:"showing-text",children:["Showing ",(0,d.jsx)("span",{children:c})," courses"]})}),(0,d.jsxs)("div",{className:"sorting-right",children:[(0,d.jsxs)("div",{className:"layout-switcher",children:[(0,d.jsx)("label",{children:j?"List":"Grid"}),(0,d.jsxs)("ul",{className:"switcher-btn",children:[(0,d.jsx)("li",{children:(0,d.jsx)(f(),{href:"/course-style-1",children:(0,d.jsx)("a",{className:j?"":"active",children:(0,d.jsx)("i",{className:"icon-53"})})})}),(0,d.jsx)("li",{children:(0,d.jsx)(f(),{href:"/course-style-4",children:(0,d.jsx)("a",{className:j?"active":"",children:(0,d.jsx)("i",{className:"icon-54"})})})})]})]}),(0,d.jsxs)("div",{className:"edu-sorting",children:[(0,d.jsx)("div",{className:"icon",children:(0,d.jsx)("i",{className:"icon-55"})}),(0,d.jsxs)("select",{onChange:m,className:"edu-select",children:[(0,d.jsx)("option",{children:"Filters"}),(0,d.jsx)("option",{children:"Low To High"}),(0,d.jsx)("option",{children:"High To Low"})]})]})]})]})};b.Z=i},9284:function(a,b,c){"use strict";var d=c(85893);c(67294);var e=c(41664),f=c.n(e),g=c(9473),h=c(66259),i=function(a){var b=a.data,c=a.classes,e=(0,g.v9)(function(a){return a.cart}).cartCourses,i=(0,g.I0)(),j=function(a){i((0,h.fe)({id:a.id,img:"/assets/images/course/course-06/".concat(a.img),price:a.course_price,title:a.title}))};return(0,d.jsx)("div",{className:"edu-course course-style-3 ".concat(c||""),children:(0,d.jsxs)("div",{className:"inner",children:[(0,d.jsxs)("div",{className:"thumbnail",children:[(0,d.jsx)(f(),{href:"/course-details/".concat(b.id),children:(0,d.jsx)("a",{children:(0,d.jsx)("img",{src:"/assets/images/course/course-04/".concat(b.img),alt:"Course Meta"})})}),(0,d.jsx)("div",{className:"time-top",children:(0,d.jsxs)("span",{className:"duration",children:[(0,d.jsx)("i",{className:"icon-61"}),b.course_outline]})})]}),(0,d.jsxs)("div",{className:"content",children:[(0,d.jsx)("span",{className:"course-level",children:b.level}),(0,d.jsx)("h5",{className:"title",children:(0,d.jsx)(f(),{href:"/course-details/".concat(b.id),children:(0,d.jsx)("a",{children:b.title})})}),(0,d.jsx)("p",{children:b.short_desc}),(0,d.jsxs)("div",{className:"course-rating",children:[(0,d.jsxs)("div",{className:"rating",children:[(0,d.jsx)("i",{className:"icon-23"}),(0,d.jsx)("i",{className:"icon-23"}),(0,d.jsx)("i",{className:"icon-23"}),(0,d.jsx)("i",{className:"icon-23"}),(0,d.jsx)("i",{className:"icon-23"})]}),(0,d.jsxs)("span",{className:"rating-count",children:["(",b.rating," /",b.rating_count," Rating)"]})]}),(0,d.jsx)("div",{className:"read-more-btn",children:(0,d.jsxs)("a",{className:"edu-btn btn-small btn-secondary",onClick:function(){return j(b)},style:{cursor:"pointer"},children:[e.some(function(a){return a.id===b.id})?"Added to cart":"Add to cart",(0,d.jsx)("i",{className:"icon-4"})]})})]})]})})};b.Z=i},9174:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return n}});var d=c(85893),e=c(97569),f=c(10206),g=c(67294),h=c(83476),i=c(31036),j=c(35225),k=c(9284),l=function(){var a,b,c=(0,g.useState)(6),e=c[0],f=c[1],h=(0,g.useState)(i.sG),l=h[0],m=h[1],n=function(){f(function(a){return a+3})};return(0,d.jsx)("div",{className:"edu-course-area course-area-1 gap-tb-text",children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)(j.Z,{course_items:i.sG,num:null===(a=null==l?void 0:l.slice(0,e))|| void 0===a?void 0:a.length,setCourses:m,courses:l}),(0,d.jsx)("div",{className:"row g-5",children:null===(b=null==l?void 0:l.slice(0,e))|| void 0===b?void 0:b.map(function(a){return(0,d.jsx)("div",{className:"col-md-6 col-lg-4",children:(0,d.jsx)(k.Z,{data:a,classes:"course-box-shadow"})},a.id)})}),e<l.length&&(0,d.jsx)("div",{onClick:n,className:"load-more-btn","data-sal-delay":"100","data-sal":"slide-up","data-sal-duration":"1200",children:(0,d.jsxs)("a",{className:"edu-btn",style:{cursor:"pointer"},children:["Load More ",(0,d.jsx)("i",{className:"icon-56"})]})})]})})},m=function(){return(0,d.jsx)("div",{className:"sticky-header",children:(0,d.jsxs)("div",{id:"main-wrapper",className:"main-wrapper",children:[(0,d.jsx)(f.h4,{no_top_bar:!0}),(0,d.jsx)(h.Z,{title:"Course Style 2",subtitle:"Course Style 2"}),(0,d.jsx)(l,{}),(0,d.jsx)(f.$_,{style_2:"footer-dark bg-image footer-style-2"})]})})},n=function(){return(0,d.jsxs)(f.im,{children:[(0,d.jsx)(e.Z,{pageTitle:"Course Style 2"}),(0,d.jsx)(m,{})]})}}},function(a){a.O(0,[4752,1664,206,9774,2888,179],function(){var b;return a(a.s=41482)}),_N_E=a.O()}])