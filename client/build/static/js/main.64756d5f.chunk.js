(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{168:function(e,t,c){},169:function(e,t,c){},175:function(e,t,c){},193:function(e,t,c){},194:function(e,t,c){},195:function(e,t,c){},196:function(e,t,c){},198:function(e,t,c){},496:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),j=c(15),n=c.n(j),r=(c(34),c(168),c(37)),i=c(58),l=(c(169),c(33)),b=c(1),d=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2);t[0],t[1];return Object(b.jsxs)(i.a,{bg:"#00000",variant:"light",children:[Object(b.jsx)(l.b,{className:"navbar-item e1 ",activeClassName:"is-active",to:"/",children:"HOME"}),Object(b.jsx)(l.b,{className:"navbar-item e1 ",activeClassName:"is-active",to:"/healthcare",children:"HEALTHCARE"}),Object(b.jsx)(l.b,{className:"navbar-item e1 ",activeClassName:"is-active",to:"/education",children:"EDUCATION"}),Object(b.jsx)(l.b,{className:"navbar-item e1 ",activeClassName:"is-active",to:"/jobs",children:"JOBS"}),Object(b.jsx)(l.b,{className:"navbar-item e1 ",activeClassName:"is-active",to:"/feedback",children:"HELP US GROW!"})]})},O=c(70),x=c(71),h=c(73),o=c(72),m=c(498),u=c(499),N=c(161),f=(c(175),c(8)),p=c(48),v=c.n(p);c(193);var y=function(){var e=Object(s.useState)(null),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){v.a.get("/healthcare").then((function(e){a(e.data)}))})),Object(b.jsxs)("div",{style:{color:"#FFE5E5 !important",backgroundColor:"#FFE5E5"},children:[Object(b.jsx)("br",{}),Object(b.jsx)("h1",{children:"HEALTHCARE"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"clincs",children:Object(b.jsx)(m.a,{children:Object(b.jsx)(u.a,{children:c&&c.map((function(e,t){return Object(b.jsxs)("div",{classname:"school",children:[Object(b.jsx)(N.a,{xs:12,md:6,children:Object(b.jsx)(f.a,{style:{width:"18rem"},className:"card1",children:Object(b.jsxs)(f.a.Body,{className:"ct1",children:[Object(b.jsx)(f.a.Title,{children:e.name}),Object(b.jsxs)(f.a.Text,{children:["Address - ",e.address," ",Object(b.jsx)("br",{}),"Contact Info - ",e.contactinfo," ",Object(b.jsx)("br",{}),"Timings - ",e.timings," ",Object(b.jsx)("br",{}),e.votes," votes"]})]})})}),Object(b.jsx)("br",{})]},t)}))})})})]})};c(194);var C=function(){var e=Object(s.useState)(null),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){v.a.get("/education").then((function(e){a(e.data)}))})),Object(b.jsxs)("div",{style:{color:"#FFE5E5 !important",backgroundColor:"#FFE5E5"},children:[Object(b.jsx)("br",{}),Object(b.jsx)("h1",{children:"EDUCATION"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{className:"schools",children:Object(b.jsx)(m.a,{children:Object(b.jsx)(u.a,{children:c&&c.map((function(e,t){return Object(b.jsxs)("div",{classname:"school",children:[Object(b.jsx)(N.a,{xs:12,md:6,children:Object(b.jsx)(f.a,{style:{width:"18rem"},className:"card1",children:Object(b.jsxs)(f.a.Body,{className:"ct1",children:[Object(b.jsx)(f.a.Title,{children:e.name}),Object(b.jsxs)(f.a.Text,{children:["Address - ",e.address," ",Object(b.jsx)("br",{}),"Contact Info - ",e.contactinfo," ",Object(b.jsx)("br",{}),"Timings - ",e.timings," ",Object(b.jsx)("br",{}),e.votes," votes"]})]})})}),Object(b.jsx)("br",{})]},t)}))})})})]})},T=function(e){Object(h.a)(c,e);var t=Object(o.a)(c);function c(){return Object(O.a)(this,c),t.apply(this,arguments)}return Object(x.a)(c,[{key:"render",value:function(){return Object(b.jsxs)(m.a,{fluid:!0,className:"cont",children:[Object(b.jsx)(u.a,{children:Object(b.jsx)(N.a,{xs:3,md:4,children:Object(b.jsx)("h1",{children:" JUNO"})})}),Object(b.jsx)(u.a,{children:Object(b.jsx)(N.a,{xs:6,md:10,children:Object(b.jsx)("h2",{children:"JOIN THE TRANS REVOLUTION"})})}),Object(b.jsx)(u.a,{children:Object(b.jsx)(N.a,{xs:8,className:"descrip",children:"It's time to open those special wings of yours and win the world trans sisters. You are smarter than they think, tougher than they know and prettier than they can see. Go ahead, fulfil your dreams, achieve your goals and bring the change now no one can stop you. "})}),Object(b.jsxs)(u.a,{children:[Object(b.jsx)(N.a,{xs:12,md:4,children:Object(b.jsx)(f.a,{style:{width:"18rem"},className:"card1",children:Object(b.jsxs)(f.a.Body,{className:"ct1",children:[Object(b.jsxs)(f.a.Title,{children:[Object(b.jsx)("a",{href:"./healthcare",children:"HEALTH "})," "]}),Object(b.jsx)(f.a.Text,{children:"Break those chains and open up your heart to a community full of like-minded people."})]})})}),Object(b.jsx)(N.a,{xs:12,md:4,children:Object(b.jsx)(f.a,{style:{width:"18rem"},className:"card2",children:Object(b.jsxs)(f.a.Body,{className:"ct2",children:[Object(b.jsxs)(f.a.Title,{children:[Object(b.jsx)("a",{href:"/education",onClick:this.props.fetchData,children:"EDUCATION "})," "]}),Object(b.jsx)(f.a.Text,{children:"Buckle up its time for school, its time to show this world wisdom evident in your face."})]})})}),Object(b.jsx)(N.a,{xs:12,md:4,children:Object(b.jsx)(f.a,{style:{width:"18rem"},className:"card3",children:Object(b.jsxs)(f.a.Body,{className:"ct3",children:[Object(b.jsxs)(f.a.Title,{children:[" ",Object(b.jsx)("a",{href:"./jobs",children:"JOBS "})," "]}),Object(b.jsx)(f.a.Text,{children:"Feeling unwell?  Dont be afraid, visit a verified hospital near you and get the best medical care"})]})})})]})]})}}]),c}(s.Component);c(195);var E=function(){var e=Object(s.useState)(null),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){v.a.get("/jobs").then((function(e){a(e.data)}))})),Object(b.jsxs)("div",{style:{color:"#FFE5E5 !important",backgroundColor:"#FFE5E5"},children:[Object(b.jsx)("br",{}),Object(b.jsx)("h1",{children:"JOBS"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"jobs",children:Object(b.jsx)(m.a,{children:Object(b.jsx)(u.a,{children:c&&c.map((function(e,t){return Object(b.jsxs)("div",{classname:"school",children:[Object(b.jsx)(N.a,{xs:12,md:6,children:Object(b.jsx)(f.a,{style:{width:"18rem"},className:"card1",children:Object(b.jsxs)(f.a.Body,{className:"ct1",children:[Object(b.jsx)(f.a.Title,{children:e.title}),Object(b.jsx)(f.a.Title,{children:e.company}),Object(b.jsxs)(f.a.Text,{children:["Source - ",e.source," ",Object(b.jsx)("br",{}),"Pay - ",e.pay," ",Object(b.jsx)("br",{}),"Offer - ",e.offer," ",Object(b.jsx)("br",{}),e.votes," votes"]})]})})}),Object(b.jsx)("br",{})]},t)}))})})})]})},g=c(29),I=(c(196),c(7)),A=function(e){Object(h.a)(c,e);var t=Object(o.a)(c);function c(){return Object(O.a)(this,c),t.apply(this,arguments)}return Object(x.a)(c,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(m.a,{children:Object(b.jsxs)(u.a,{xs:12,class:"rightside",style:{backgroundColor:"#FFE5E5"},children:[Object(b.jsx)(N.a,{xs:12,md:4,children:Object(b.jsxs)(I.a,{children:[Object(b.jsx)("h3",{children:"HELP"}),Object(b.jsx)("h2",{className:"fill",children:"HEALTHCARE"}),Object(b.jsxs)(I.a.Group,{children:[Object(b.jsx)(I.a.Label,{children:"NAME OF CLINIC:"}),Object(b.jsx)(I.a.Control,{type:"text",name:"name",className:"e5"})]}),Object(b.jsxs)(I.a.Group,{children:[Object(b.jsx)(I.a.Label,{children:"ADDRESS:"}),Object(b.jsx)(I.a.Control,{type:"text",name:"address",className:"e6"})]}),Object(b.jsxs)(I.a.Group,{children:[Object(b.jsx)(I.a.Label,{children:"CONTACT INFORMATION:"}),Object(b.jsx)(I.a.Control,{type:"text",name:"contact",className:"e5"})]}),Object(b.jsxs)(I.a.Group,{children:[Object(b.jsx)(I.a.Label,{children:"TIMINGS:"}),Object(b.jsx)(I.a.Control,{type:"text",name:"timings",className:"e5"})]}),Object(b.jsx)(g.a,{type:"submit",children:"SUBMIT"})]})}),Object(b.jsx)(N.a,{xs:12,md:4,children:Object(b.jsxs)(I.a,{children:[Object(b.jsx)("h3",{children:"US"}),Object(b.jsx)("h2",{className:"fill",children:"EDUCATION"}),Object(b.jsxs)(I.a.Group,{children:[Object(b.jsx)(I.a.Label,{children:"NAME OF CLINIC:"}),Object(b.jsx)(I.a.Control,{type:"text",name:"name",className:"e5"})]}),Object(b.jsxs)(I.a.Group,{children:[Object(b.jsx)(I.a.Label,{children:"ADDRESS:"}),Object(b.jsx)(I.a.Control,{type:"text",name:"address",className:"e6"})]}),Object(b.jsxs)(I.a.Group,{children:[Object(b.jsx)(I.a.Label,{children:"CONTACT INFORMATION:"}),Object(b.jsx)(I.a.Control,{type:"text",name:"contact",className:"e5"})]}),Object(b.jsxs)(I.a.Group,{children:[Object(b.jsx)(I.a.Label,{children:"TIMINGS:"}),Object(b.jsx)(I.a.Control,{type:"text",name:"timings",className:"e5"})]}),Object(b.jsx)(g.a,{type:"submit",children:"SUBMIT"})]})}),Object(b.jsx)(N.a,{xs:12,md:4,children:Object(b.jsxs)(I.a,{children:[Object(b.jsx)("h3",{children:"GROW!"}),Object(b.jsx)("h2",{className:"fill",children:"EMPLOYMENT"}),Object(b.jsxs)(I.a.Group,{children:[Object(b.jsx)(I.a.Label,{children:"NAME OF CLINIC:"}),Object(b.jsx)(I.a.Control,{type:"text",name:"name",className:"e5"})]}),Object(b.jsxs)(I.a.Group,{children:[Object(b.jsx)(I.a.Label,{children:"ADDRESS:"}),Object(b.jsx)(I.a.Control,{type:"text",name:"address",className:"e6"})]}),Object(b.jsxs)(I.a.Group,{children:[Object(b.jsx)(I.a.Label,{children:"CONTACT INFORMATION:"}),Object(b.jsx)(I.a.Control,{type:"text",name:"contact",className:"e5"})]}),Object(b.jsxs)(I.a.Group,{children:[Object(b.jsx)(I.a.Label,{children:"TIMINGS:"}),Object(b.jsx)(I.a.Control,{type:"text",name:"timings",className:"e5"})]}),Object(b.jsx)(g.a,{type:"submit",children:"SUBMIT"})]})})]})})]})}}]),c}(s.Component),F=(c(198),c(9));c(199);var L=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)(d,{}),Object(b.jsx)("div",{className:"container mt-2",style:{marginTop:40},children:Object(b.jsxs)(F.c,{children:[Object(b.jsx)(F.a,{exact:!0,path:"/",children:Object(b.jsx)(T,{})}),Object(b.jsx)(F.a,{path:"/healthcare",children:Object(b.jsx)(y,{})}),Object(b.jsx)(F.a,{path:"/education",children:Object(b.jsx)(C,{})}),Object(b.jsx)(F.a,{path:"/jobs",children:Object(b.jsx)(E,{})}),Object(b.jsx)(F.a,{path:"/feedback",children:Object(b.jsx)(A,{})})]})})]})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,500)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,j=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),j(e),n(e)}))};n.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(L,{})}),document.getElementById("root")),S()}},[[496,1,2]]]);
//# sourceMappingURL=main.64756d5f.chunk.js.map