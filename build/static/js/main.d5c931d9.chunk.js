(this["webpackJsonpsimulador-tuits"]=this["webpackJsonpsimulador-tuits"]||[]).push([[0],{73:function(e,t,n){},74:function(e,t,n){},76:function(e,t,n){},78:function(e,t,n){},81:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),a=n(10),s=n.n(a),r=(n(73),n(19)),o=(n(74),n.p+"static/media/twitter-logo.b413b75b.png"),l=n(5);function u(){return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("img",{src:o}),Object(l.jsx)("h1",{children:"Simulador de tuits"})]})}var j=n(124),d=n(128),m=(n(76),n(121)),b=n(59),O=n.n(b),h=n(39),x=n.n(h),f=n(126);n(78);function p(e){var t=e.isOpenModal,n=e.closeModal,i=e.children;return Object(l.jsx)(f.a,{className:"modal",open:t,onClose:n,closeAfterTransition:!0,children:Object(l.jsx)("div",{children:i})})}var T=n(43),v=n(47),g=n(116),N=n(119),S=n(125),_=n(120);n(81);function y(e){var t=e.sendTuit,n=Object(i.useState)({name:" ",tuit:" ",time:null}),c=Object(r.a)(n,2),a=c[0],s=c[1];return Object(l.jsxs)("div",{className:"formSendTuit",children:[Object(l.jsx)("h2",{className:"formSendTuit__title",children:"Enviar Tweet"}),Object(l.jsxs)("form",{className:"formSendTuit__form",onSubmit:function(e){t(e,a)},onChange:function(e){!function(e){s(Object(v.a)(Object(v.a)({},a),{},Object(T.a)({},e.target.name,[e.target.value])))}(e)},children:[Object(l.jsx)(g.a,{children:Object(l.jsx)(N.a,{children:Object(l.jsx)(S.a,{className:"formSendTuit__formName",type:"text",name:"name",placeholder:"Nombre usuario",margin:"normal"})})}),Object(l.jsx)(N.a,{children:Object(l.jsx)(S.a,{className:"formSendTuit__formTextArea",name:"tuit",multiline:!0,rows:"6",placeholder:"Escribe tu tweet",margin:"normal"})}),Object(l.jsx)(_.a,{type:"submit",children:"Enviar tweet"})]})]})}function M(e){var t=e.setToastProps,n=e.allTuits,c=Object(i.useState)(!1),a=Object(r.a)(c,2),s=a[0],o=a[1],u=function(){o(!1)};return Object(l.jsxs)("div",{className:"sendTuit",children:[Object(l.jsx)(m.a,{className:"sendTuit__abrirModal",color:"primary","aria-label":"add",onClick:function(){o(!0)},children:Object(l.jsx)(O.a,{})}),Object(l.jsx)(p,{isOpenModal:s,closeModal:u,children:Object(l.jsx)(y,{sendTuit:function(e,i){e.preventDefault();var c=i.name,a=i.tuit,s=[];n&&(s=n)," "==c||" "==a?t({open:!0,text:"Todos los campos son obligatorios"}):(t({open:!0,text:"Tuit enviado correctamente"}),i.time=x()(),s.push(i),localStorage.setItem("tuits",JSON.stringify(s)),u()),s=[]}})})]})}n(84);var w=n(122),C=n(123),E=n(60),D=n.n(E);n(85);function F(e){var t=e.tuit,n=t.name,i=t.tuit,c=t.time,a=e.indice,s=e.deleteTuit;return Object(l.jsx)(w.a,{className:"tuit",children:Object(l.jsxs)(C.a,{children:[Object(l.jsxs)("div",{className:"headerTuit",children:[Object(l.jsx)("h5",{children:n}),Object(l.jsx)(D.a,{onClick:function(){s(a)}})]}),Object(l.jsx)("p",{children:i}),Object(l.jsx)("div",{className:"TuitFecha",children:x()(c).format("DD/MM/YYYY HH:mm")})]})})}function I(e){var t=e.allTuits,n=e.deleteTuit;return t&&null!=t&&0!=t.length?Object(l.jsx)("div",{container:!0,spacing:3,className:"listTuit",children:t.map((function(e,t){return Object(l.jsx)("div",{item:!0,xs:4,children:Object(l.jsx)(F,{tuit:e,indice:t,deleteTuit:n})},t)}))}):Object(l.jsx)("div",{className:"listTuitsEmpty",children:Object(l.jsx)("h2",{children:"No hay tuits"})})}var J=function(){var e=Object(i.useState)({open:!1,text:null}),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)([]),s=Object(r.a)(a,2),o=s[0],m=s[1],b=Object(i.useState)(!1),O=Object(r.a)(b,2),h=O[0],x=O[1];return Object(i.useEffect)((function(){var e=JSON.parse(localStorage.getItem("tuits"));m(e),x(!1)}),[h]),Object(l.jsxs)(j.a,{className:"simuladorTuits",maxWidth:!1,children:[Object(l.jsx)(u,{}),Object(l.jsx)(M,{setToastProps:c,allTuits:o}),Object(l.jsx)(I,{allTuits:o,deleteTuit:function(e){o.splice(e,1),m(o),localStorage.setItem("tuits",JSON.stringify(o)),x(!0)}}),Object(l.jsx)(d.a,{anchorOrigin:{vertical:"top",horizontal:"rigth"},open:n.open,autoHideDuration:1e3,message:Object(l.jsx)("span",{id:"message-id",children:n.text})})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,129)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(J,{})}),document.getElementById("root")),k()}},[[86,1,2]]]);
//# sourceMappingURL=main.d5c931d9.chunk.js.map