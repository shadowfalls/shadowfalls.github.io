!function(i){function e(e){for(var t,r,n=e[0],a=e[1],o=e[2],l=0,c=[];l<n.length;l++)r=n[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&c.push(s[r][0]),s[r]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(i[t]=a[t]);for(m&&m(e);c.length;)c.shift()();return f.push.apply(f,o||[]),u()}function u(){for(var e,t=0;t<f.length;t++){for(var r=f[t],n=!0,a=1;a<r.length;a++){var o=r[a];0!==s[o]&&(n=!1)}n&&(f.splice(t--,1),e=l(l.s=r[0]))}return e}var r={},s={0:0},f=[];function l(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=i,l.c=r,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(r,n,function(e){return t[e]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var a=0;a<t.length;a++)e(t[a]);var m=n;f.push([149,1]),u()}({149:function(e,t,r){r(150),e.exports=r(370)},356:function(e,t,r){},370:function(e,t,r){"use strict";r.r(t);var F=r(1),T=r.n(F),n=r(57),a=r.n(n),J=(r(356),r(357),r(380)),M=r(381),U=r(382),G=r(383),W=r(378),$=r(384),V=r(385),B=r(386),R=r(387),X=r(388),Y=r(389),Z=r(30),q=r(31);function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var z=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e=e||{},this.email=e.email?e.email:"",this.password=e.password?e.password:"",this.description=e.description?e.description:"",this.tag=e.tag?e.tag:""}var e,r,n;return e=t,(r=[{key:"isInValid",value:function(){return!this.email||!this.password}}])&&o(e.prototype,r),n&&o(e,n),t}(),m=r(390),p=r(371),d=r(372),y=r(373),b=r(374),g=r(375),E=r(376),v=r(377),h=r(391),w=r(379);function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function H(t){var e=O(Object(F.useState)(new z),2),l=e[0],c=e[1],r=O(Object(F.useState)({}),2),i=r[0],u=r[1],n=O(Object(F.useState)(!1),2),a=n[0],o=n[1];Object(F.useEffect)(function(){t.file&&c(new z(t.file))},[t.file]);function s(e){var t=e.target,r=t.value,n=t.name;l[n]=r;var a=new z(l);c(a);var o=JSON.parse(JSON.stringify(i));o[n]=!r,u(o)}function f(){t.handleDialog(),c(new z)}return T.a.createElement(m.a,{isOpen:t.open,toggle:f,className:"lg"},T.a.createElement(p.a,{toggle:f},"Add Password"),T.a.createElement(d.a,null,T.a.createElement(y.a,null,T.a.createElement(b.a,null,T.a.createElement(g.a,{for:"email"},"Email"),T.a.createElement(E.a,{onChange:s,value:l.email,type:"text",name:"email",id:"email",placeholder:"email"})),T.a.createElement(b.a,null,T.a.createElement(g.a,{for:"password"},"Password"),T.a.createElement(v.a,null,a?T.a.createElement(E.a,{onChange:s,value:l.password,type:"text",name:"password",id:"password",placeholder:"password"}):T.a.createElement(E.a,{onChange:s,value:l.password,type:"password",name:"password",id:"password",placeholder:"password"}),T.a.createElement(h.a,{addonType:"append"},T.a.createElement(W.a,{onClick:function(){return o(!a)},color:"primary"},a?T.a.createElement(Z.a,{icon:q.c}):T.a.createElement(Z.a,{icon:q.b}))))),T.a.createElement(b.a,null,T.a.createElement(g.a,{for:"description"},"Description"),T.a.createElement(E.a,{onChange:s,value:l.description,type:"text",name:"description",id:"description",placeholder:"description"})),T.a.createElement(b.a,null,T.a.createElement(g.a,{for:"tag"},"Tag"),T.a.createElement(E.a,{onChange:s,value:l.tag,type:"text",name:"tag",id:"tag",placeholder:"tag"})))),T.a.createElement(w.a,null,T.a.createElement(W.a,{color:"primary",onClick:function(){if(l.isInValid()){var e={};return l.description||(e.description=!0),l.email||(e.email=!0),void u(e)}t.handleDialog(l),c(new z)}},"Save")," ",T.a.createElement(W.a,{color:"secondary",onClick:f},"Cancel")))}var K={LOGIN:"LOGIN",ADD_FILE:"ADD_FILE",UPDATE_FILE:"UPDATE_FILE",DELETE_FILE:"DELETE_FILE",LOAD_FILE:"LOAD_FILE"};function Q(e){var t;e&&(t=window.btoa(JSON.stringify(e)),localStorage.setItem(window.btoa("p"),t))}var c={password:"ZmFsbGFwYXJ0"};function i(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function u(a){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach(function(e){var t,r,n;t=a,n=o[r=e],r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(o,e))})}return a}var s={loggedIn:!1,files:[]};function f(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:s,t=1<arguments.length?arguments[1]:void 0;switch(t.type){case K.LOGIN:return c.password===t.password?u(u({},e),{},{loggedIn:!0}):u(u({},e),{},{loggedIn:!1});case K.ADD_FILE:case K.UPDATE_FILE:case K.DELETE_FILE:case K.LOAD_FILE:return u(u({},e),{},{files:t.files});default:return e}}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var A=T.a.createContext(),ee=function(){return T.a.useContext(A)};function I(e){var t=j(T.a.useReducer(f,s),2),r={state:t[0],dispatch:t[1]};return T.a.createElement(A.Provider,{value:r},e.children)}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function te(r){function e(){r.close(),c("")}var t=ee(),n=t.state,a=t.dispatch,o=C(Object(F.useState)(),2),l=o[0],c=o[1];return T.a.createElement(m.a,{isOpen:r.open,toggle:e,className:"lg"},T.a.createElement(p.a,{toggle:e},"Load Files"),T.a.createElement(d.a,null,T.a.createElement(y.a,null,T.a.createElement(b.a,null,T.a.createElement(g.a,{for:"text"},"Text"),T.a.createElement(E.a,{onChange:function(e){var t=e.target;c(t.value)},value:l,type:"textarea",name:"text",id:"text",placeholder:"text"})))),T.a.createElement(w.a,null,T.a.createElement(W.a,{color:"primary",onClick:function(){var e,t;l&&n.loggedIn&&(a((t=[],(e=l)&&"string"==typeof(t=window.atob(e))&&(t=JSON.parse(t),Array.isArray(t)?localStorage.setItem(window.btoa("p"),e):t=[]),{type:K.LOAD_FILE,files:t})),r.close())}},"Save")," ",T.a.createElement(W.a,{color:"secondary",onClick:e},"Cancel")))}function L(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function re(a){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?L(Object(o),!0).forEach(function(e){var t,r,n;t=a,n=o[r=e],r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(o)):L(Object(o)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(o,e))})}return a}function ne(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return D(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function P(){var e=ee(),t=e.state,i=e.dispatch,u=t.files,r=ne(Object(F.useState)(),2),n=r[0],s=r[1],a=ne(Object(F.useState)({}),2),o=a[0],l=a[1],c=ne(Object(F.useState)(null),2),f=c[0],m=c[1],p=ne(Object(F.useState)(null),2),d=p[0],y=p[1],b=ne(Object(F.useState)(u),2),g=b[0],E=b[1],v=ne(Object(F.useState)(!1),2),h=v[0],w=v[1],O=ne(Object(F.useState)([]),2),j=O[0],S=O[1],A=ne(Object(F.useState)([]),2),I=A[0],C=A[1],N=ne(Object(F.useState)(!1),2),L=N[0],D=N[1];Object(F.useEffect)(function(){var t,e,r;E(u),I.length&&(t=[],u.forEach(function(e){return t.push(e.tag)}),e=I.filter(function(e){return t.includes(e)}),C(e)),Array.isArray(u)&&u.length&&(r={},u.forEach(function(e){e.tag&&(r[e.tag]=!0)}),S(Object.keys(r)))},[u]),Object(F.useEffect)(function(){var e;I.length?(e=u.filter(function(e){return I.includes(e.tag)}),E(e)):E(u)},[I]);function P(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}function k(t){var e,r,n,a;t&&((e=u.findIndex(function(e){return e.email===t.email&&e.password===t.password&&e.description===t.description&&e.tag===t.tag}))<0||i((r=u,n=e,a=[],Array.isArray(r)&&r[n]&&(a=JSON.parse(JSON.stringify(r))).splice(n,1),Q(a),{type:K.DELETE_FILE,files:a})))}var x=g||[],_=L?j:j.slice(0,3);return T.a.createElement(T.a.Fragment,null,T.a.createElement(H,{handleDialog:function(e){var t,r,n,a,o,l,c;e&&(f?u[d]&&(i((t=u,r=e,n=d,Array.isArray(t)&&t[n]&&((a=JSON.parse(JSON.stringify(t)))[n]=r),Q(a),{type:K.UPDATE_FILE,files:a})),y(0),m(null)):i((o=u,l=e,Array.isArray(o)?(c=JSON.parse(JSON.stringify(o))).unshift(l):c=[l],Q(c),{type:K.ADD_FILE,files:c}))),s(!1)},open:n,file:f}),T.a.createElement(te,{close:function(){return w(!1)},open:h}),T.a.createElement(J.a,null,T.a.createElement(M.a,null,T.a.createElement(U.a,{className:"mt-2 mb-2"},T.a.createElement(G.a,{className:"w-100"},T.a.createElement(W.a,{onClick:function(){var e=localStorage.getItem(window.btoa("p"));P(e)},outline:!0,color:"primary"},T.a.createElement(Z.a,{icon:q.a})),T.a.createElement(W.a,{onClick:function(){w(!0)},outline:!0,color:"primary"},T.a.createElement(Z.a,{icon:q.g})))),T.a.createElement(U.a,{className:"mt-2 mb-2"},T.a.createElement(W.a,{onClick:function(){return s(!0)},color:"primary",className:"w-100"},T.a.createElement(Z.a,{icon:q.e})," Add"))),T.a.createElement("div",{className:"tag-filter-list"},_.map(function(e,t){return T.a.createElement("h3",{key:t},T.a.createElement($.a,{onClick:function(){return n=e,void C(function(e){var t,r=e.slice();return r.includes(n)?(t=r.indexOf(n),r.splice(t,1)):r.push(n),r});var n},className:"tag",color:I.includes(e)?"success":"secondary"},e))})),0<j.length&&T.a.createElement(M.a,null,3<j.length&&T.a.createElement(U.a,{className:"mt-2 mb-2"},T.a.createElement(W.a,{onClick:function(){D(function(e){return!e})},color:"link",className:"w-100"},L?"less":"more")),T.a.createElement(U.a,{className:"mt-2 mb-2"},T.a.createElement(W.a,{onClick:function(){return C([])},disabled:I.length<=0,outline:!0,color:"primary",className:"w-100"},"clear"))),T.a.createElement(M.a,null,x.map(function(a,r){return T.a.createElement(U.a,{key:r,sm:12,className:"mb-2"},T.a.createElement(V.a,{className:"file-card"},T.a.createElement(B.a,{onClick:function(){return P(a.email)}},a.email,a.tag&&T.a.createElement($.a,{className:"tag",color:"secondary"},a.tag)),T.a.createElement(R.a,{onClick:function(e){return t=e,r=a.password,void(((n=t.target).classList.contains("password")||n.classList.contains("card-body"))&&P(r));var t,r,n}},T.a.createElement(X.a,null,T.a.createElement("span",{className:"password"},o[r]?a.password:function(e){for(var t="",r=0;r<e.length;r+=1)t+="*";return t}(a.password)),T.a.createElement(G.a,{className:"actions"},T.a.createElement(W.a,{onClick:function(){return e=r,(t=re({},o))[e]=!t[e],void l(t);var e,t},outline:!0,color:"primary",className:"show"},o[r]?T.a.createElement(Z.a,{icon:q.c}):T.a.createElement(Z.a,{icon:q.b})),T.a.createElement(W.a,{onClick:function(){var t,e;(t=a)&&((e=u.findIndex(function(e){return e.email===t.email&&e.password===t.password&&e.description===t.description&&e.tag===t.tag}))<0||(m(new z(u[e])),y(e),s(!0)))},outline:!0,color:"primary",className:"edit"},T.a.createElement(Z.a,{icon:q.d})),T.a.createElement(W.a,{onClick:function(){return k(a)},outline:!0,color:"primary"},T.a.createElement(Z.a,{icon:q.f}))))),a.description&&T.a.createElement(Y.a,null,a.description)))}))))}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return x(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _(){var n=ee().dispatch,e=k(Object(F.useState)("fallapart"),2),a=e[0],r=e[1];return T.a.createElement("div",{className:"login"},T.a.createElement(J.a,null,T.a.createElement(M.a,null,T.a.createElement(U.a,{sm:12},T.a.createElement(E.a,{value:a,name:"password",onChange:function(e){var t=e.target;r(t.value)},className:"password",type:"password"})),T.a.createElement(U.a,{sm:12},T.a.createElement(W.a,{onClick:function(){var e,t,r;a&&(e=window.btoa(a),n((t={password:e},{type:K.LOGIN,password:t.password})),n(((r=localStorage.getItem(window.btoa("p")))&&"string"==typeof(r=window.atob(r))&&(r=JSON.parse(r),Array.isArray(r)||(r=[])),{type:K.LOAD_FILE,files:r})))},className:"enter",color:"primary"},"Enter")))))}function ae(e){var t=e.children;return T.a.createElement(I,null,t)}function oe(){return T.a.createElement(ae,null,T.a.createElement(le,null))}function le(){var e=ee().state;return T.a.createElement(T.a.Fragment,null,e.loggedIn?T.a.createElement(P,null):T.a.createElement(_,null))}a.a.render(T.a.createElement(oe,null),document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker&&navigator.serviceWorker.register("/sw.js").then(function(e){console.log("SW registered: ",e)}).catch(function(e){console.log("SW registration failed: ",e)})})}});