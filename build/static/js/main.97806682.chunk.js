(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r),c=t(16),a=t.n(c),u=t(3),i=t(0);var s=function(e){var n=e.handleChange,t=e.fiterString;return Object(i.jsxs)("div",{children:["Filter shown with: ",Object(i.jsx)("input",{type:"text",value:t,onChange:n})]})};var l=function(e){var n=e.handleSubmit,t=e.handleNameChange,r=e.handleNumberChange,o=e.newName,c=e.newNumber;return Object(i.jsxs)("form",{onSubmit:n,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{type:"text",value:o,onChange:t})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{type:"number",value:c,onChange:r})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})};var d=function(e){var n=e.persons,t=e.filterString,r=e.handleDelete;console.log(n);var o=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(i.jsx)("div",{children:o.map((function(e){return Object(i.jsxs)("p",{children:[e.name," ",e.number," ",Object(i.jsx)("button",{onClick:function(){return r(e._id)},children:"Delete"})]},e.name)}))})},h=t(4),b=t.n(h),j="/api/persons/",f={getAll:function(){return b.a.get(j).then((function(e){return e.data}))},create:function(e){return b.a.post(j,e).then((function(e){return e.data})).catch((function(e){console.log("failed",e)}))},remove:function(e){b.a.delete(j+e).then((function(e){console.log(e)})).catch((function(e){console.log("failed",e)}))},update:function(e,n){return console.log(e,n),b.a.put(j+e,n).then((function(e){return e.data}))}};var m=function(e){var n=e.message,t=e.error,r=void 0!==t&&t;return null===n?null:Object(i.jsx)("div",{className:r?"error-message":"success-message",children:n})},g=function(){Object(r.useEffect)((function(){f.getAll().then((function(e){o(e)}))}),[]);var e=Object(r.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],c=Object(r.useState)(""),a=Object(u.a)(c,2),h=a[0],b=a[1],j=Object(r.useState)(""),g=Object(u.a)(j,2),O=g[0],p=g[1],v=Object(r.useState)(""),w=Object(u.a)(v,2),x=w[0],C=w[1],S=Object(r.useState)({message:null,error:!1}),y=Object(u.a)(S,2),N=y[0],k=y[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(m,{message:N.message,error:N.error}),Object(i.jsx)(s,{handleChange:function(e){return C(e.target.value)},filterString:x}),Object(i.jsx)("h3",{children:"Add a New"}),Object(i.jsx)(l,{handleSubmit:function(e){e.preventDefault();var n={name:h,number:O},r=t.find((function(e){return e.name.toLowerCase()===h.toLowerCase()}));console.log(r),r?window.confirm("".concat(r.name," is already added to phonebook, replace the old number with the new one?"))&&(f.update(r._id,n).then((function(e){o(t.map((function(n){return n._id!==r._id?n:e}))),k({message:"".concat(r.name,"'s number was succesfully updated"),error:!1})})).catch((function(e){console.log("Something went wrong"),o(t.filter((function(e){return e._id!==r._id}))),k({message:"Person was already deleted",error:!0})})),setTimeout((function(){k({message:null,error:null})}),5e3)):f.create(n).then((function(e){o(t.concat(e)),k({message:"".concat(e.name," was succesfully added to phonebook"),error:!1}),setTimeout((function(){k({message:null,error:null})}),5e3)})),b(""),p("")},handleNameChange:function(e){return b(e.target.value)},handleNumberChange:function(e){return p(e.target.value)},newName:h,newNumber:O}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)(d,{persons:t,filterString:x,handleDelete:function(e){window.confirm("Are you sure you wish to delete this person from phonebook?")&&(f.remove(e),o(t.filter((function(n){return n._id!==e}))))}})]})};t(40);a.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.97806682.chunk.js.map