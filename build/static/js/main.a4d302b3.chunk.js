(this.webpackJsonphomeworkapp=this.webpackJsonphomeworkapp||[]).push([[0],{20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(13),c=a.n(s),i=(a(20),a(21),a(22),a(0)),d=function(){return Object(i.jsxs)("div",{className:"header",children:[Object(i.jsx)("h1",{children:"Employee Directory"}),Object(i.jsxs)("p",{children:["Welcome to Employee Directory! ",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),"Please use the search box below to find employees by name or click on the column headings to sort."]})]})},l=a(3),o=a(15),j=(a(24),r.a.createContext({})),h=function(){var e=Object(n.useContext)(j);function t(e){var t=e.split("-"),a=t[0];return[t[1],t[2].split("T")[0],a].join("-")}return Object(i.jsx)("tbody",{children:void 0!==e.developerState.filteredUsers[0]&&void 0!==e.developerState.filteredUsers[0].name?e.developerState.filteredUsers.map((function(e){var a=e.login,n=e.name,r=e.picture,s=e.phone,c=e.email,d=e.dob;return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{"data-th":"Image",className:"align-middle",children:Object(i.jsx)("img",{src:r.medium,alt:"profile image for "+n.first+" "+n.last,className:"img-responsive"})}),Object(i.jsxs)("td",{"data-th":"Name",className:"name-cell align-middle",children:[n.first," ",n.last]}),Object(i.jsx)("td",{"data-th":"Phone",className:"align-middle",children:s}),Object(i.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(i.jsx)("a",{href:"mailto:"+c,target:"__blank",children:c})}),Object(i.jsx)("td",{"data-th":"DOB",className:"align-middle",children:t(d.date)})]},a.uuid)})):Object(i.jsx)(i.Fragment,{})})},b=(a(25),function(){var e=Object(n.useContext)(j);return Object(i.jsx)("div",{className:"datatable mt-5",children:Object(i.jsxs)("table",{id:"table",className:"table table-striped table-hover table-condensed",children:[Object(i.jsx)("thead",{children:Object(i.jsx)("tr",{children:e.developerState.headings.map((function(t){var a=t.name,n=t.width;return Object(i.jsxs)("th",{className:"col",style:{width:n},onClick:function(){e.headingSort(a.toLowerCase())},children:[a,Object(i.jsx)("span",{className:"pointer"})]},a)}))})}),Object(i.jsx)(h,{})]})})}),u=(a(26),function(){var e=Object(n.useContext)(j);return Object(i.jsx)("div",{className:"searchbox",children:Object(i.jsx)("form",{className:"form-inline",children:Object(i.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(t){return e.headingSearchChange(t)}})})})});a(27);var m=function(){return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(i.jsx)("div",{className:"search-area col-4",children:Object(i.jsx)(u,{})})})},f=a(14),O=a.n(f),x={getUsers:function(){return O.a.get("https://randomuser.me/api/?results=100&nat=gb")}},v=(a(46),function(){var e=Object(n.useState)({users:[],order:"ascend",filteredUsers:[],headings:[{name:"Image",width:"10%"},{name:"Name",width:"10%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"},{name:"DOB",width:"10%"}]}),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){x.getUsers().then((function(e){r(Object(l.a)(Object(l.a)({},a),{},{users:e.data.results,filteredUsers:e.data.results}))}))}),[]),Object(i.jsxs)(j.Provider,{value:{developerState:a,headingSearchChange:function(e){var t=e.target.value,n=a.users.filter((function(e){return-1!==e.name.first.toLowerCase().indexOf(t.toLowerCase())}));r(Object(l.a)(Object(l.a)({},a),{},{filteredUsers:n}))},headingSort:function(e){"descend"===a.order?r({order:"ascend"}):r({order:"descend"});var t=a.filteredUsers.sort((function(t,n){return"ascend"===a.order?void 0===t[e]?1:void 0===n[e]?-1:"name"===e?t[e].first.localeCompare(n[e].first):n[e]-t[e]:void 0===t[e]?1:void 0===n[e]?-1:"name"===e?n[e].first.localeCompare(t[e].first):n[e]-t[e]}));r(Object(l.a)(Object(l.a)({},a),{},{filteredUsers:t}))}},children:[Object(i.jsx)(m,{}),Object(i.jsx)("div",{className:"data-area",children:a.filteredUsers.length>0?Object(i.jsx)(b,{}):Object(i.jsx)("div",{})})]})});a(47);var p=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(v,{})})};var g=function(e){var t=e.children;return Object(i.jsx)("div",{className:"wrapper",children:t})};var N=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(g,{children:[Object(i.jsx)(d,{}),Object(i.jsx)(p,{})]})})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,50)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};a(48);c.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(N,{})}),document.getElementById("root")),w()}},[[49,1,2]]]);
//# sourceMappingURL=main.a4d302b3.chunk.js.map