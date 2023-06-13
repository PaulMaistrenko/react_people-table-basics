(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(25),a=n(10),r=n(3),s=(n(34),n(35),n(13)),i=n.n(s),j=n(2),o=function(e){var t=e.to,n=e.text;return Object(j.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},children:n})},l=function(){return Object(j.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(o,{to:"/",text:"Home"}),Object(j.jsx)(o,{to:"/people",text:"People"})]})})})},d=(n(37),function(){return Object(j.jsxs)("div",{"data-cy":"app",children:[Object(j.jsx)(l,{}),Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(r.b,{})})})]})}),b=function(){return Object(j.jsx)("h1",{className:"title",children:"Home Page"})},h=n(4),u=n(6),x=n(5),O=n(0),p=(n(38),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})}),m=function(e){var t=e.person,n=e.name,c=e.sex,r=e.handleSelectedPerson;return Object(j.jsx)("td",{children:Object(j.jsx)(a.b,{to:"#/people/".concat(null===t||void 0===t?void 0:t.slug),className:i()({"has-text-danger":"f"===c}),onClick:function(){r(t)},children:n})})},f=function(e){var t=e.person,n=e.peopleList,c=e.handleSelectedPerson,a=t.sex,r=t.born,s=t.died,i=t.motherName,o=t.fatherName,l=function(e){return n.some((function(t){return t.name===e}))},d=function(e){return n.some((function(t){return t.name===e}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m,{person:t,name:t.name,sex:t.sex,handleSelectedPerson:c}),Object(j.jsx)("td",{children:a}),Object(j.jsx)("td",{children:r}),Object(j.jsx)("td",{children:s}),!i&&Object(j.jsx)("td",{children:"-"}),i&&l(i)&&Object(j.jsx)(m,{person:n.find((function(e){return e.name===i})),name:t.motherName,sex:"m",handleSelectedPerson:c}),i&&!l(i)&&Object(j.jsx)("td",{children:i}),!o&&Object(j.jsx)("td",{children:"-"}),o&&d(o)&&Object(j.jsx)(m,{person:n.find((function(e){return e.name===o})),name:t.fatherName,sex:"f",handleSelectedPerson:c}),o&&!d(o)&&Object(j.jsx)("td",{children:o})]})};function v(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var g=function(){var e=Object(O.useState)(!1),t=Object(x.a)(e,2),n=t[0],c=t[1],a=Object(O.useState)(!1),r=Object(x.a)(a,2),s=r[0],o=r[1],l=Object(O.useState)([]),d=Object(x.a)(l,2),b=d[0],m=d[1],g=Object(O.useState)(void 0),N=Object(x.a)(g,2),P=N[0],S=N[1],y=Object(O.useState)(!1),w=Object(x.a)(y,2),k=w[0],L=w[1];Object(O.useEffect)((function(){var e=function(){var e=Object(u.a)(Object(h.a)().mark((function e(){var t;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),e.next=4,v();case 4:(t=e.sent)||o(!0),m(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),L(!0);case 12:return e.prev=12,c(!1),L(!1),o(!1),e.finish(12);case 17:case"end":return e.stop()}}),e,null,[[0,9,12,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var _=function(e){S(e)};return Object(j.jsxs)("div",{className:"block",children:[Object(j.jsx)("h1",{className:"title",children:"People Page"}),Object(j.jsxs)("div",{className:"box table-container",children:[n&&Object(j.jsx)(p,{}),k&&Object(j.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),s&&Object(j.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),Object(j.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[!!b.length&&Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Sex"}),Object(j.jsx)("th",{children:"Born"}),Object(j.jsx)("th",{children:"Died"}),Object(j.jsx)("th",{children:"Mother"}),Object(j.jsx)("th",{children:"Father"})]})}),Object(j.jsx)("tbody",{children:b.map((function(e){return Object(j.jsx)("tr",{"data-cy":"person",className:i()({"has-background-warning":(null===P||void 0===P?void 0:P.name)===e.name}),children:Object(j.jsx)(f,{person:e,peopleList:b,handleSelectedPerson:_})},e.slug)}))})]})]})]})},N=function(){return Object(j.jsx)("h1",{className:"title",children:"Page not found"})};Object(c.createRoot)(document.getElementById("root")).render(Object(j.jsx)(a.a,{children:Object(j.jsx)(r.e,{children:Object(j.jsxs)(r.c,{path:"/",element:Object(j.jsx)(d,{}),children:[Object(j.jsx)(r.c,{index:!0,element:Object(j.jsx)(b,{})}),Object(j.jsx)(r.c,{path:"people",element:Object(j.jsx)(g,{})}),Object(j.jsx)(r.c,{path:"home",element:Object(j.jsx)(r.a,{to:"/",replace:!0})}),Object(j.jsx)(r.c,{path:"*",element:Object(j.jsx)(N,{})})]})})}))}},[[39,1,2]]]);
//# sourceMappingURL=main.851fea3a.chunk.js.map