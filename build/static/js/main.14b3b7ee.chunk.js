(this["webpackJsonpeleven-realtime-database-starter"]=this["webpackJsonpeleven-realtime-database-starter"]||[]).push([[0],{38:function(e,t,a){e.exports=a(63)},43:function(e,t,a){},47:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(19),l=a.n(r),o=(a(43),a(14)),s=a.n(o),i=a(22),m=a(10),u=a(68),p=a(17),d=a(16),f=a(13),b=(a(45),a(46),a(47),{quality:.2,maxWidth:800,maxHeight:600,autoRotate:!0}),E=a(8),h=a.n(E),g=(a(48),a(64),a(69)),y=a(70),v=a(71),N=a(72),O=a(73),j=a(74),T=a(75),x=a(76),C=a(35),k=a(86),w=Object(n.createContext)(),S=function(){var e=Object(n.useContext)(w),t=e.state,a=e.dispatch,r=t.contactToUpdate,l=t.contactToUpdateKey,o=Object(d.f)(),p=Object(n.useState)(""),E=Object(m.a)(p,2),S=E[0],A=E[1],_=Object(n.useState)(""),U=Object(m.a)(_,2),D=U[0],I=U[1],L=Object(n.useState)(""),G=Object(m.a)(L,2),P=G[0],B=G[1],K=Object(n.useState)(""),R=Object(m.a)(K,2),z=R[0],F=R[1],H=Object(n.useState)(!1),J=Object(m.a)(H,2),W=J[0],M=J[1],q=Object(n.useState)(null),Q=Object(m.a)(q,2),V=Q[0],Y=Q[1],$=Object(n.useState)(!1),X=Object(m.a)($,2),Z=X[0],ee=X[1],te=Object(n.useState)(!1),ae=Object(m.a)(te,2),ne=ae[0],ce=ae[1];Object(n.useEffect)((function(){r&&(A(r.name),I(r.email),B(r.phoneNumber),F(r.address),ee(r.star),Y(r.picture),ce(!0))}),[r]);var re=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,c,r,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=t.target.files[0],n={contentType:a.type},e.next=5,Object(C.readAndCompressImage)(a,b);case 5:return c=e.sent,e.next=8,h.a.storage().ref();case 8:r=e.sent,(l=r.child("image/"+a.name).put(c,n)).on(h.a.storage.TaskEvent.STATE_CHANGED,(function(e){M(!0);var t=e.bytesTransferred/e.totalBytes*100;switch(e.state){case h.a.storage.TaskState.PAUSED:M(!1),console.log("uploading is paused");break;case h.a.storage.TaskState.RUNNING:console.log("uploading is in progress")}100===t&&(M(!1),Object(f.b)("Successfully Uploaded",{type:"success"}))}),(function(e){console.log(e),Object(f.b)("Something went wrong",{type:"error"})}),(function(){l.snapshot.ref.getDownloadURL().then((function(e){Y(e)})).catch((function(e){return console.log(e)}))})),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0),Object(f.b)("something went wrong",{type:"error"});case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),le=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{h.a.database().ref("contacts/"+Object(k.a)()).set({name:S,email:D,phoneNumber:P,address:z,picture:V,star:Z})}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),oe=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{h.a.database().ref("contacts/"+l).set({name:S,email:D,phoneNumber:P,address:z,picture:V,star:Z})}catch(t){console.log(t),Object(f.b)("Error, try again!",{type:"error"})}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(u.a,{fluid:!0,className:"mt-5"},c.a.createElement(g.a,null,c.a.createElement(y.a,{md:"6",className:"offset-md-3 p-2"},c.a.createElement(v.a,{onSubmit:function(e){e.preventDefault(),ne?oe():le(),Object(f.b)("Success",{type:"success"}),a({type:"CONTACT_TO_UPDATE",payload:null,key:null}),o.push("/")}},c.a.createElement("div",{className:"text-center"},W?c.a.createElement(N.a,{type:"grow",color:"primary"}):c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"imagepicker",className:""},c.a.createElement("img",{src:V,alt:"",className:"profile"})),c.a.createElement("input",{type:"file",name:"image",id:"imagepicker",accept:"image/*",multiple:!1,onChange:function(e){return re(e)},className:"hidden"}))),c.a.createElement(O.a,null,c.a.createElement(j.a,{type:"text",name:"name",id:"name",placeholder:"Name",value:S,onChange:function(e){return A(e.target.value)}})),c.a.createElement(O.a,null,c.a.createElement(j.a,{type:"email",name:"email",id:"email",value:D,onChange:function(e){return I(e.target.value)},placeholder:"Email"})),c.a.createElement(O.a,null,c.a.createElement(j.a,{type:"number",name:"number",id:"phonenumber",value:P,onChange:function(e){return B(e.target.value)},placeholder:"phone number"})),c.a.createElement(O.a,null,c.a.createElement(j.a,{type:"textarea",name:"area",id:"area",value:z,onChange:function(e){return F(e.target.value)},placeholder:"address"})),c.a.createElement(O.a,{check:!0},c.a.createElement(T.a,{check:!0},c.a.createElement(j.a,{type:"checkbox",onChange:function(){ee(!Z)},checked:Z})," ",c.a.createElement("span",{className:"text-right"},"Mark as Star"))),c.a.createElement(x.a,{type:"submit",color:"primary",block:!0,className:"text-uppercase"},ne?"Update Contact":"Add Contact")))))},A=a(77),_=a(78),U=a(18),D=a(21),I=function(e){var t=e.contact,a=e.contactKey,r=Object(n.useContext)(w).dispatch,l=Object(d.f)();return c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,null,c.a.createElement(y.a,{md:"1",className:"d-flex justify-content-center align-items-center"},c.a.createElement("div",{className:"icon",onClick:function(){h.a.database.ref("/contacts/".concat(a)).update({star:!t.star},(function(e){console.log(e)})).then((function(){Object(f.b)("Contact updated",{type:"success"})})).catch((function(e){console.log(e)}))}},t.star?c.a.createElement(U.e,{className:" text-primary"}):c.a.createElement(U.d,{className:" text-info"}))),c.a.createElement(y.a,{md:"2",className:"d-flex justify-content-center align-items-center"},c.a.createElement("img",{src:t.picture,alt:"",className:"img-circle profile"})),c.a.createElement(y.a,{md:"8",onClick:function(){return function(e){r({type:"SET_SINGLE_CONTACT",payload:e}),l.push("/contact/view")}(t)}},c.a.createElement("div",{className:"text-primary"},t.name),c.a.createElement("div",{className:"text-secondary"},t.phoneNumber),c.a.createElement("div",{className:"text-secondary"},t.email),c.a.createElement("div",{className:"text-info"},t.address)),c.a.createElement(y.a,{md:"1",className:"d-flex justify-content-center align-items-center"},c.a.createElement(D.b,{onClick:function(){h.a.database().ref("/contacts/".concat(a)).remove().then((function(){return Object(f.b)("Deleted successfully",{type:"warning"})})).catch((function(e){return console.log(e)}))},color:"danger",className:"text-danger icon"}),c.a.createElement(D.c,{className:"icon text-info ml-2",onClick:function(){return r({type:"CONTACT_TO_UPDATE",payload:t,key:a}),void l.push("/contact/add")}}))))},L=function(){var e=Object(n.useContext)(w),t=e.state,a=e.dispatch,r=t.contacts,l=t.isLoading,o=Object(d.f)();return l?c.a.createElement("div",{className:"Center"},c.a.createElement(N.a,{color:"primary"}),c.a.createElement("div",{className:"text-primary"},"Loading...")):c.a.createElement(u.a,{className:"mt-4"},0!==r.length||l?c.a.createElement(A.a,null,Object.entries(r).map((function(e){var t=Object(m.a)(e,2),a=t[0],n=t[1];return c.a.createElement(_.a,{key:a},c.a.createElement(I,{contact:n,contactKey:a}))}))):c.a.createElement("div",{className:"Center text-large text-primary"},"No Contacts"),c.a.createElement(D.a,{className:"fab icon ",onClick:function(){a({type:"CONTACT_TO_UPDATE",payload:null,key:null}),o.push("/contact/add")}}))},G=a(79),P=a(80),B=a(81),K=function(){return c.a.createElement(G.a,{color:"info",light:!0},c.a.createElement(P.a,{className:"text-white"},c.a.createElement(p.b,{to:"/"}," COntact App")),c.a.createElement(B.a,{className:"text-white float-right"},"A simple Contact app"))},R=function(){return c.a.createElement("footer",{className:"bg-info text-center pt-3 pb-2 mt-5 sticky-bottom"},"A simple Contact App")},z=a(82),F=a(83),H=a(84),J=a(85),W=function(){var e=Object(n.useContext)(w).state.contact;return c.a.createElement(u.a,null,c.a.createElement(g.a,{className:"mt-5 mb-5"},c.a.createElement(y.a,{md:"5",className:"offset-md-3"},c.a.createElement(z.a,{className:"pt-3 pb-5"},c.a.createElement(F.a,{className:"text-center "},c.a.createElement("img",{height:"150",width:"150",className:"cardImg profile border-danger",src:null===e||void 0===e?void 0:e.picture}),c.a.createElement(H.a,{className:"text-primary mt-3"},c.a.createElement("h1",null,null===e||void 0===e?void 0:e.name)),c.a.createElement(J.a,null,c.a.createElement("h3",null,c.a.createElement(U.c,{className:"mr-2"}),null===e||void 0===e?void 0:e.phoneNumber)),c.a.createElement("a",{className:"btn btn-primary btn-block",target:"_blank",href:"mailto:{contact?.email}"},c.a.createElement(U.a,{className:"icon mr-2"}),null===e||void 0===e?void 0:e.email),c.a.createElement("a",{className:"btn btn-primary btn-block",target:"_blank"},c.a.createElement(U.b,{className:"icon mr-2"}),null===e||void 0===e?void 0:e.address))))))},M=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"404 page not found"))},q=a(23),Q=function(e,t){switch(t.type){case"SET_CONTACT":return null==t.payload?Object(q.a)({},e,{contact:[]}):Object(q.a)({},e,{contacts:t.payload});case"SET_LOADING":return Object(q.a)({},e,{isLoading:t.payload});case"CONTACT_TO_UPDATE":return Object(q.a)({},e,{contactToUpdate:t.payload,contactToUpdateKey:t.key});case"SET_SINGLE_CONTACT":return Object(q.a)({},e,{contact:t.payload});default:return e}};h.a.initializeApp({apiKey:"AIzaSyB2zjDwndmnbpjsgT5P-kltLk7o1Q2w69Y",authDomain:"gitrepoapp.firebaseapp.com",databaseURL:"https://gitrepoapp-default-rtdb.firebaseio.com",projectId:"gitrepoapp",storageBucket:"gitrepoapp.appspot.com",messagingSenderId:"774116947375",appId:"1:774116947375:web:63212c9548e7eb9a1f2b5a",measurementId:"G-0F9HN6TJVB"});var V={contacts:[],contact:{},contactToUpdate:null,contactToUpdateKey:null,isLoading:!1},Y=function(){var e=Object(n.useReducer)(Q,V),t=Object(m.a)(e,2),a=t[0],r=t[1],l=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:"SET_LOADING",payload:!0}),e.next=3,h.a.database().ref("/contacts");case 3:e.sent.on("value",(function(e){r({type:"SET_CONTACT",payload:e.val()}),r({type:"SET_LOADING",payload:!1})}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l()}),[]),c.a.createElement(p.a,null,c.a.createElement(w.Provider,{value:{state:a,dispatch:r}},c.a.createElement(f.a,null),c.a.createElement(K,null),c.a.createElement(u.a,null,c.a.createElement(d.c,null,c.a.createElement(d.a,{exact:!0,path:"/contact/add",component:S}),c.a.createElement(d.a,{exact:!0,path:"/contact/view",component:W}),c.a.createElement(d.a,{exact:!0,path:"/",component:L}),c.a.createElement(d.a,{exact:!0,path:"*",component:M}))),c.a.createElement(R,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.14b3b7ee.chunk.js.map