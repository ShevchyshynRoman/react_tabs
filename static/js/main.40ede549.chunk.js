(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(3),s=n.n(c),a=n(4),i=n(1),b=(n(9),n(10),n(0)),l=function(t){var e=t.tabs,n=t.selectedTabId,c=t.onTabSelected;return Object(b.jsx)("div",{children:Object(b.jsx)("ul",{className:"tabs-list",children:e.map((function(t){return Object(b.jsxs)("li",{className:"tabs-list__item",children:[Object(b.jsx)("button",{type:"button",className:"btn",onClick:function(){return c(t)},children:t.title}),Object(b.jsx)("div",{className:"item-content",children:n===t.id?t.content:null})]},t.id)}))})})},d=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],o=function(){var t=Object(i.useState)(d[0]),e=Object(a.a)(t,2),n=e[0],c=e[1];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("h1",{children:["Selected tab is"," ",n.title]}),Object(b.jsx)(l,{tabs:d,selectedTabId:n.id,onTabSelected:c})]})};s.a.render(Object(b.jsx)(o,{}),document.getElementById("root"))},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.40ede549.chunk.js.map