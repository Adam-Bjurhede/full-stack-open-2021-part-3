(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r),a=t(16),u=t.n(a),c=t(3),s=t(0);var i=function(e){var n=e.handleChange,t=e.fiterString;return Object(s.jsxs)("div",{children:["Filter shown with: ",Object(s.jsx)("input",{type:"text",value:t,onChange:n})]})};var l=function(e){var n=e.handleSubmit,t=e.handleNameChange,r=e.handleNumberChange,o=e.newName,a=e.newNumber;return Object(s.jsxs)("form",{onSubmit:n,children:[Object(s.jsxs)("div",{children:["name: ",Object(s.jsx)("input",{type:"text",value:o,onChange:t})]}),Object(s.jsxs)("div",{children:["number: ",Object(s.jsx)("input",{type:"number",value:a,onChange:r})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"add"})})]})};var d=function(e){var n=e.persons,t=e.filterString,r=e.handleDelete,o=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(s.jsx)("div",{children:o.map((function(e){return Object(s.jsxs)("p",{children:[e.name," ",e.number," ",Object(s.jsx)("button",{onClick:function(){return r(e.id)},children:"Delete"})]},e.name)}))})},h=t(4),b=t.n(h),j="/api/persons/",m={getAll:function(){return b.a.get(j).then((function(e){return e.data}))},create:function(e){return b.a.post(j,e).then((function(e){return e.data}))},remove:function(e){b.a.delete(j+e).then((function(e){}))},update:function(e,n){return b.a.put(j+e,n).then((function(e){return e.data}))}};var f=function(e){var n=e.message,t=e.error,r=void 0!==t&&t;return null===n?null:Object(s.jsx)("div",{className:r?"error-message":"success-message",children:n})},g=function(){Object(r.useEffect)((function(){m.getAll().then((function(e){o(e)}))}),[]);var e=Object(r.useState)([]),n=Object(c.a)(e,2),t=n[0],o=n[1],a=Object(r.useState)(""),u=Object(c.a)(a,2),h=u[0],b=u[1],j=Object(r.useState)(""),g=Object(c.a)(j,2),p=g[0],O=g[1],v=Object(r.useState)(""),x=Object(c.a)(v,2),w=x[0],C=x[1],S=Object(r.useState)({message:null,error:!1}),N=Object(c.a)(S,2),y=N[0],k=N[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(f,{message:y.message,error:y.error}),Object(s.jsx)(i,{handleChange:function(e){return C(e.target.value)},filterString:w}),Object(s.jsx)("h3",{children:"Add a New"}),Object(s.jsx)(l,{handleSubmit:function(e){e.preventDefault();var n={name:h,number:p},r=t.find((function(e){return e.name.toLowerCase()===h.toLowerCase()}));r?window.confirm("".concat(r.name," is already added to phonebook, replace the old number with the new one?"))&&(m.update(r.id,n).then((function(e){o(t.map((function(n){return n.id!==r.id?n:e}))),k({message:"".concat(r.name,"'s number was succesfully updated"),error:!1})})).catch((function(e){console.log(e),k({message:e.response.data.error,error:!0}),setTimeout((function(){k({message:null,error:null})}),5e3)})),setTimeout((function(){k({message:null,error:null})}),5e3)):m.create(n).then((function(e){o(t.concat(e)),k({message:"".concat(e.name," was succesfully added to phonebook"),error:!1}),setTimeout((function(){k({message:null,error:null})}),5e3)})).catch((function(e){console.log(e),k({message:e.response.data.error,error:!0}),setTimeout((function(){k({message:null,error:null})}),5e3)})),b(""),O("")},handleNameChange:function(e){return b(e.target.value)},handleNumberChange:function(e){return O(e.target.value)},newName:h,newNumber:p}),Object(s.jsx)("h2",{children:"Numbers"}),Object(s.jsx)(d,{persons:t,filterString:w,handleDelete:function(e){window.confirm("Are you sure you wish to delete this person from phonebook?")&&(m.remove(e),o(t.filter((function(n){return n.id!==e}))))}})]})};t(40);u.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.25b3fa15.chunk.js.map