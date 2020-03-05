(function(t){function e(e){for(var a,s,i=e[0],c=e[1],u=e[2],l=0,f=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f028717c"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(t);var u=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,n[1](u)}r[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[t.$store.getters.loggedIn?n("router-link",{attrs:{to:"/"}},[t._v("Expense App")]):n("h3",[t._v("Log in to Access the Expense App")]),t.$store.getters.loggedIn?n("button",{staticStyle:{float:"right"},on:{click:t.logout}},[n("i",{staticClass:"material-icons"},[t._v("exit_to_app")])]):t._e()],1),n("router-view")],1)},o=[],s=(n("4d5c"),n("dc53"),{methods:{logout:function(){localStorage.removeItem("access_token"),this.$store.commit("logOut"),this.$router.push("/login")}}}),i=s,c=(n("034f"),n("2877")),u=Object(c["a"])(i,r,o,!1,null,null,null),l=u.exports,d=(n("45fc"),n("d3b7"),n("8c4f")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home container"},[n("h1",[t._v("Expense Tracker")]),n("div",{staticClass:"row"},[n("div",{staticClass:"col s12",attrs:{id:"total"},on:{click:function(e){t.table="total"}}},[n("h4",[t._v("Total Balance: "+t._s(t._f("currency")(t.totalBalance)))])]),n("div",{staticClass:"col s6",attrs:{id:"income"},on:{click:function(e){t.table="income"}}},[n("h4",[t._v("Total Income")]),n("h5",[t._v(t._s(t._f("currency")(t.totalIncome)))])]),n("div",{staticClass:"col s6",attrs:{id:"expense"},on:{click:function(e){t.table="expense"}}},[n("h4",[t._v("Total Expense")]),n("h5",[t._v(t._s(t._f("currency")(t.totalExpense)))])])]),n("div",{staticClass:"main"},[n("form",[n("div",{staticClass:"row"},[n("div",{staticClass:"input-field col s6"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.item.text,expression:"item.text"}],staticClass:"validate",attrs:{type:"text",id:"name"},domProps:{value:t.item.text},on:{input:function(e){e.target.composing||t.$set(t.item,"text",e.target.value)}}}),n("label",{attrs:{for:"name"}},[t._v("Expense Name")])]),n("div",{staticClass:"input-field col s6"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.item.amount,expression:"item.amount"}],staticClass:"validate",attrs:{type:"text",id:"amount"},domProps:{value:t.item.amount},on:{input:function(e){e.target.composing||t.$set(t.item,"amount",e.target.value)}}}),n("label",{attrs:{for:"amount"}},[t._v("Amount")])])]),n("button",{staticClass:"waves-effect waves-light btn",on:{click:function(e){return e.preventDefault(),t.addTransaction()}}},[t._v("Add")])]),n("div",{staticClass:"list"},[n("h3",[t._v("History")]),n("div",{staticClass:"row"},[n("div",{staticClass:"col s8 offset-s2",attrs:{id:t.table}},["total"===t.table?n("table",{staticClass:"centered"},[t._m(0),t._l(t.orderBy(t.items,"createdAt",-1),(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(t._f("capitalize")(e.text)))]),n("td",[t._v(t._s(t._f("currency")(e.amount)))]),n("td",[n("button",{staticClass:"btn-floating waves-effect waves-light red",on:{click:function(n){return t.deleteTranasaction(e._id)}}},[t._v("X")])])])}))],2):t._e(),"income"===t.table?n("table",{staticClass:"centered"},[t._m(1),t._l(t.orderBy(t.incomeTransaction,"createdAt",-1),(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(t._f("capitalize")(e.text)))]),n("td",[t._v(t._s(t._f("currency")(e.amount)))]),n("td",[n("button",{staticClass:"btn-floating waves-effect waves-light red",on:{click:function(n){return t.deleteTranasaction(e._id)}}},[t._v("X")])])])}))],2):t._e(),"expense"===t.table?n("table",{staticClass:"centered"},[t._m(2),t._l(t.orderBy(t.expenseTransaction,"createdAt",-1),(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(t._f("capitalize")(e.text)))]),n("td",[t._v(t._s(t._f("currency")(e.amount)))]),n("td",[n("button",{staticClass:"btn-floating waves-effect waves-light red",on:{click:function(n){return t.deleteTranasaction(e._id)}}},[t._v("X")])])])}))],2):t._e()])])])])])},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{attrs:{id:"table-heading"}},[n("th",[t._v("Transacation Name")]),n("th",[t._v("Amount")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("Transacation Name")]),n("th",[t._v("Amount")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("Transacation Name")]),n("th",[t._v("Amount")])])}],p=(n("4de4"),n("d81d"),n("13d5"),n("96cf"),n("1da1")),v=n("bc3a"),h=n.n(v),g=n("a7c6"),_=n.n(g);a["a"].use(_.a);var b={headers:{"auth-token":"".concat(localStorage.access_token)}},w={name:"Home",mixins:[_.a.mixin],data:function(){return{items:[],item:{text:"",amount:""},balance:0,expense:0,income:0,err:[],table:"total"}},computed:{totalBalance:function(){var t=this.items,e=t.map((function(t){return t.amount}));return e.reduce((function(t,e){return t+e}),0)},totalExpense:function(){var t=this.items,e=t.map((function(t){return t.amount})),n=e.filter((function(t){return t<0}));return n.reduce((function(t,e){return t+e}),0)},totalIncome:function(){var t=this.items,e=t.map((function(t){return t.amount})),n=e.filter((function(t){return t>0}));return n.reduce((function(t,e){return t+e}),0)},incomeTransaction:function(){var t,e=this.items,n=[];for(t in e)e[t].amount>0&&n.push(e[t]);return n},expenseTransaction:function(){var t,e=this.items,n=[];for(t in e)e[t].amount<0&&n.push(e[t]);return n}},created:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getTransactions();case 2:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getTransactions();case 2:case"end":return e.stop()}}),e)})))()},methods:{addTransaction:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("https://owlf-expense-tracker.herokuapp.com/api/v1/transactions",{text:t.item.text,amount:t.item.amount},b);case 3:return e.next=5,t.getTransactions();case 5:t.item.text="",t.item.amount="",e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),t.error=e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},getTransactions:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("https://owlf-expense-tracker.herokuapp.com/api/v1/transactions",b);case 3:n=e.sent,t.items=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t.error=e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},deleteTranasaction:function(t){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,h.a.delete("https://owlf-expense-tracker.herokuapp.com/api/v1/transactions/".concat(t),b);case 3:return n.next=5,e.getTransactions();case 5:n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),e.error=n.t0;case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()}}},x=w,k=(n("cccb"),Object(c["a"])(x,f,m,!1,null,null,null)),y=k.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login row container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"input-field col s6 offset-s2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"validate",attrs:{type:"text",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),n("label",{attrs:{for:"email"}},[t._v("Email address")])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"input-field col s6 offset-s2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"validate",attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("label",{attrs:{for:"password"}},[t._v("Password")])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col s6 offset-s2"},[n("button",{staticClass:"waves-effect waves-light btn modal-trigger",on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v("Login")])])])])},T=[],O={data:function(){return{email:"",password:""}},methods:{login:function(){var t=this;this.$store.dispatch("retrieveToken",{email:this.email,password:this.password}).then((function(){t.$router.push("/")}))}}},j=O,E=Object(c["a"])(j,C,T,!1,null,null,null),A=E.exports,P=n("2f62");a["a"].use(P["a"]);var $=new P["a"].Store({state:{token:localStorage.getItem("access_token")||null},getters:{loggedIn:function(t){return null!==t.token}},mutations:{retrieveToken:function(t,e){t.token=e},logOut:function(t){t.token=null}},actions:{retrieveToken:function(t,e){return new Promise((function(n,a){h.a.post("https://owlf-expense-tracker.herokuapp.com/api/v1/login",{email:e.email,password:e.password}).then((function(e){var a=e.data;n(e),localStorage.setItem("access_token",a),t.commit("retrieveToken",a)})).catch((function(t){a(t)}))}))},fetchAccessToken:function(t){var e=t.commit;e("retrieveToken",localStorage.getItem("access_token"))}},modules:{}});a["a"].use(d["a"]);var S=[{path:"/",name:"Home",component:y,meta:{requiresAuth:!0}},{path:"/about",name:"About",meta:{requiresAuth:!0},component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"Login",component:A}],I=new d["a"]({mode:"history",base:"/",routes:S});I.beforeEach((function(t,e,n){if(t.matched.some((function(t){return t.meta.requiresAuth}))){if($.getters.loggedIn)return void n();n("/login")}else n()}));var R=I;a["a"].config.productionTip=!1,new a["a"]({router:R,store:$,render:function(t){return t(l)}}).$mount("#app")},"5ced":function(t,e,n){},"85ec":function(t,e,n){},cccb:function(t,e,n){"use strict";var a=n("5ced"),r=n.n(a);r.a}});
//# sourceMappingURL=app.0868539a.js.map