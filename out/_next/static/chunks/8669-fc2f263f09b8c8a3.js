"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8669],{58669:function(a,b,c){c.d(b,{Z:function(){return o}});var d=c(85893);c(67294);var e=c(10206),f=c(50972),g=c(22106),h=c(82580),i=c(38315),j=c(40002),k=function(){var a=(0,h.TA)({initialValues:{title:"",name:"",email:"",msg:""},validationSchema:i.Ih,onSubmit:function(a,b){var c=b.resetForm;toast.success("".concat(a.name," your review added successfully"),{position:"top-left"}),c()}}),b=a.handleChange,c=a.handleSubmit,e=a.handleBlur,f=a.errors,g=a.values,k=a.touched;return(0,d.jsx)("form",{className:"comment-form",onSubmit:c,children:(0,d.jsxs)("div",{className:"row g-5",children:[(0,d.jsxs)("div",{className:"form-group col-lg-6",children:[(0,d.jsx)("input",{type:"text",value:g.title,onChange:b,onBlur:e,name:"title",id:"comm-title",placeholder:"Review Title"}),k.title&&(0,d.jsx)(j.Z,{error:f.title})]}),(0,d.jsxs)("div",{className:"form-group col-lg-6",children:[(0,d.jsx)("input",{value:g.name,onChange:b,onBlur:e,type:"text",name:"name",id:"contact-name",placeholder:"Your Name"}),k.name&&(0,d.jsx)(j.Z,{error:f.name})]}),(0,d.jsxs)("div",{className:"form-group col-12",children:[(0,d.jsx)("input",{value:g.email,onChange:b,onBlur:e,type:"email",name:"email",id:"contact-email",placeholder:"Reviewer Email"}),k.email&&(0,d.jsx)(j.Z,{error:f.email})]}),(0,d.jsxs)("div",{className:"form-group col-12",children:[(0,d.jsx)("textarea",{value:g.msg,onChange:b,onBlur:e,name:"msg",id:"comm-message",cols:"30",rows:"5",placeholder:"Review summary"}),k.msg&&(0,d.jsx)(j.Z,{error:f.msg})]}),(0,d.jsx)("div",{className:"form-group col-12",children:(0,d.jsxs)("button",{type:"submit",className:"edu-btn submit-btn",children:["Submit Review ",(0,d.jsx)("i",{className:"icon-4"})]})})]})})},l=c(66286),m=c(34692),n=function(a){var b=a.course,c=b||{},e=c.course_desc,f=c.course_desc_2,h=c.learn_list,i=c.course_desc_3,j=c.curriculum_desc,n=c.course_lessons,o=c.instructor_img,p=c.instructor_title,q=c.instructor_desc,r=c.social_links,s=c.reviews,t=c.instructor,u=c.rating,v=c.rating_count;return(0,d.jsx)("section",{className:"edu-section-gap course-details-area",children:(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("div",{className:"row row--30",children:[(0,d.jsx)("div",{className:"col-lg-8",children:(0,d.jsxs)("div",{className:"course-details-content",children:[(0,d.jsxs)("ul",{className:"nav nav-tabs",id:"myTab",role:"tablist",children:[(0,d.jsx)("li",{className:"nav-item",role:"presentation",children:(0,d.jsx)("button",{className:"nav-link active",id:"overview-tab","data-bs-toggle":"tab","data-bs-target":"#overview",type:"button",role:"tab","aria-controls":"overview","aria-selected":"true",children:"Overview"})}),(0,d.jsx)("li",{className:"nav-item",role:"presentation",children:(0,d.jsx)("button",{className:"nav-link",id:"carriculam-tab","data-bs-toggle":"tab","data-bs-target":"#carriculam",type:"button",role:"tab","aria-controls":"carriculam","aria-selected":"false",children:"Carriculam"})}),(0,d.jsx)("li",{className:"nav-item",role:"presentation",children:(0,d.jsx)("button",{className:"nav-link",id:"instructor-tab","data-bs-toggle":"tab","data-bs-target":"#instructor",type:"button",role:"tab","aria-controls":"instructor","aria-selected":"false",children:"Instructor"})}),(0,d.jsx)("li",{className:"nav-item",role:"presentation",children:(0,d.jsx)("button",{className:"nav-link",id:"review-tab","data-bs-toggle":"tab","data-bs-target":"#review",type:"button",role:"tab","aria-controls":"review","aria-selected":"false",children:"Reviews"})})]}),(0,d.jsxs)("div",{className:"tab-content",id:"myTabContent",children:[(0,d.jsx)("div",{className:"tab-pane fade show active",id:"overview",role:"tabpanel","aria-labelledby":"overview-tab",children:(0,d.jsx)("div",{className:"course-tab-content",children:(0,d.jsxs)("div",{className:"course-overview",children:[(0,d.jsx)("h3",{className:"heading-title",children:"Course Description"}),(0,d.jsx)("p",{children:e}),(0,d.jsx)("p",{className:"mb--60",children:f}),(0,d.jsx)("h5",{className:"title",children:"What You’ll Learn?"}),(0,d.jsx)("ul",{className:"mb--60",children:null==h?void 0:h.map(function(a,b){return(0,d.jsx)("li",{children:a},b)})}),(0,d.jsx)("p",{children:i})]})})}),(0,d.jsx)("div",{className:"tab-pane fade",id:"carriculam",role:"tabpanel","aria-labelledby":"carriculam-tab",children:(0,d.jsx)("div",{className:"course-tab-content",children:(0,d.jsxs)("div",{className:"course-curriculam",children:[(0,d.jsx)("h3",{className:"heading-title",children:"Course Curriculum"}),(0,d.jsx)("p",{children:j}),n.map(function(a,b){var c;return(0,d.jsxs)("div",{className:"course-lesson",children:[(0,d.jsx)("h5",{className:"title",children:null==a?void 0:a.title}),(0,d.jsx)("p",{children:null==a?void 0:a.text}),(0,d.jsx)("ul",{children:null==a?void 0:null===(c=a.lessons)|| void 0===c?void 0:c.map(function(a,b){return(0,d.jsxs)("li",{children:[a.title&&(0,d.jsxs)("div",{className:"text",children:[(0,d.jsx)("i",{className:"icon-65"}),a.title]}),!(null==a?void 0:a.badge_list)&&(0,d.jsx)("div",{className:"icon",children:(0,d.jsx)("i",{className:null==a?void 0:a.icon})}),(null==a?void 0:a.badge_list)&&(0,d.jsxs)("div",{className:"badge-list",children:[(0,d.jsxs)("span",{className:"badge badge-primary",children:[null==a?void 0:a.question," Question"]}),(0,d.jsxs)("span",{className:"badge badge-secondary",children:[null==a?void 0:a.minutes," Minutes"]})]})]},b)})})]},b)})]})})}),(0,d.jsx)("div",{className:"tab-pane fade",id:"instructor",role:"tabpanel","aria-labelledby":"instructor-tab",children:(0,d.jsx)("div",{className:"course-tab-content",children:(0,d.jsxs)("div",{className:"course-instructor",children:[(0,d.jsx)("div",{className:"thumbnail",children:(0,d.jsx)("img",{src:"/assets/images/team/team-02/".concat(o),alt:"team images"})}),(0,d.jsxs)("div",{className:"author-content",children:[(0,d.jsx)("h6",{className:"title",children:t}),(0,d.jsx)("span",{className:"subtitle",children:p}),(0,d.jsx)("p",{children:q}),(0,d.jsx)("ul",{className:"social-share",children:null==r?void 0:r.map(function(a,b){return(0,d.jsx)("li",{children:(0,d.jsx)("a",{href:a.link,target:a.target?a.target:"",children:(0,d.jsx)("i",{className:a.icon})})},b)})})]})]})})}),(0,d.jsx)("div",{className:"tab-pane fade",id:"review",role:"tabpanel","aria-labelledby":"review-tab",children:(0,d.jsx)("div",{className:"course-tab-content",children:(0,d.jsxs)("div",{className:"course-review",children:[(0,d.jsx)("h3",{className:"heading-title",children:"Course Rating"}),(0,d.jsxs)("p",{children:[u," average rating based on ",v," rating"]}),(0,d.jsxs)("div",{className:"row g-0 align-items-center",children:[(0,d.jsx)("div",{className:"col-sm-4",children:(0,d.jsxs)("div",{className:"rating-box",children:[(0,d.jsx)("div",{className:"rating-number",children:u}),(0,d.jsxs)("div",{className:"rating",children:[(0,d.jsx)("i",{className:"icon-23"}),(0,d.jsx)("i",{className:"icon-23"}),(0,d.jsx)("i",{className:"icon-23"}),(0,d.jsx)("i",{className:"icon-23"}),(0,d.jsx)("i",{className:"icon-23"})]}),(0,d.jsxs)("span",{children:["(",v," Review)"]})]})}),(0,d.jsx)("div",{className:"col-sm-8",children:(0,d.jsxs)("div",{className:"review-wrapper",children:[(0,d.jsx)(m.Z,{value:"100",rating_value:v}),(0,d.jsx)(m.Z,{value:"0",rating_value:"0"}),(0,d.jsx)(m.Z,{value:"0",rating_value:"0"}),(0,d.jsx)(m.Z,{value:"0",rating_value:"0"}),(0,d.jsx)(m.Z,{value:"0",rating_value:"0"})]})})]}),(0,d.jsxs)("div",{className:"comment-area",children:[(0,d.jsx)("h3",{className:"heading-title",children:"Reviews"}),(0,d.jsx)("div",{className:"comment-list-wrapper",children:null==s?void 0:s.map(function(a,b){return(0,d.jsx)(l.Z,{review:a},b)})})]}),(0,d.jsxs)("div",{className:"comment-form-area",children:[(0,d.jsx)("h3",{className:"heading-title",children:"Write a Review"}),(0,d.jsxs)("div",{className:"rating-icon",children:[(0,d.jsx)("h6",{className:"title",children:"Rating Here"}),(0,d.jsxs)("div",{className:"rating",children:[(0,d.jsx)("i",{className:"icon-23"}),(0,d.jsx)("i",{className:"icon-23"}),(0,d.jsx)("i",{className:"icon-23"}),(0,d.jsx)("i",{className:"icon-23"}),(0,d.jsx)("i",{className:"icon-23"})]})]}),(0,d.jsx)(k,{})]})]})})})]})]})}),(0,d.jsx)("div",{className:"col-lg-4",children:(0,d.jsx)(g.Z,{course:b})})]})})})},o=function(a){var b=a.course;return(0,d.jsx)("div",{className:"sticky-header",children:(0,d.jsxs)("div",{id:"main-wrapper",className:"main-wrapper",children:[(0,d.jsx)(e.h4,{no_top_bar:!0}),(0,d.jsx)(f.Z,{course:b,subtitle:"Course Details"}),(0,d.jsx)(n,{course:b}),(0,d.jsx)(e.$_,{style_2:"footer-dark bg-image footer-style-2"})]})})}},40002:function(a,b,c){var d=c(85893);c(67294);var e=function(a){var b=a.error;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("p",{style:{color:"red"},children:b})})};b.Z=e},38315:function(a,b,c){c.d(b,{Ih:function(){return h},NA:function(){return g},dm:function(){return f},gY:function(){return e}});var d=c(74231),e=d.Ry().shape({name:d.Z_().required().label("Name"),email:d.Z_().required().email().label("Email"),password:d.Z_().required().min(6).label("Password"),terms:d.Xg().oneOf([!0,"You need to accept the terms and conditions"])}),f=d.Ry().shape({email:d.Z_().required().email().label("Email"),password:d.Z_().required().min(6).label("Password")}),g=d.Ry().shape({name:d.Z_().required().label("Name"),email:d.Z_().required().email().label("Email"),msg:d.Z_().required().min(20).label("Message")});d.Ry().shape({name:d.Z_().required().label("Name"),email:d.Z_().required().email().label("Email"),phone:d.Z_().required().min(11).label("Phone"),msg:d.Z_().required().min(20).label("Message")});var h=d.Ry().shape({title:d.Z_().required().label("Title"),name:d.Z_().required().label("Name"),email:d.Z_().required().email().label("Email"),msg:d.Z_().required().min(20).label("Summery")})}}])