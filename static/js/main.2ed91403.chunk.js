(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),i=n(5),s=n(1),d=(n(10),n(11),n(12),n(4)),b=n.n(d),r=n(0),o=function(t){var e=t.tabId,n=t.tabTitle,c=t.activeId,a=t.setId;return Object(r.jsx)("li",{className:b()({"is-active":e===c}),"data-cy":"Tab",children:Object(r.jsx)("a",{href:"#".concat(e),"data-cy":"TabLink",onClick:function(){return a(e)},children:n})})},l=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=function(){var t=Object(s.useState)("tab-1"),e=Object(i.a)(t,2),n=e[0],c=e[1],a=function(t,e){var n=t.find((function(t){return t.id===e}));return void 0!==n?n:t.find((function(t){return"tab-1"===t.id}))}(l,n),d=a.id,b=a.title,j=a.content;return Object(r.jsxs)("div",{className:"section",children:[Object(r.jsx)("h1",{className:"title",children:"Selected tab is ".concat(b)}),Object(r.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:l.map((function(t){return Object(r.jsx)(o,{tabId:t.id,tabTitle:t.title,activeId:d,setId:function(t){c(t)}},t.id)}))})}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:j})]})]})};a.a.render(Object(r.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2ed91403.chunk.js.map