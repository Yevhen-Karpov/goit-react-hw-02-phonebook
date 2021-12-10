(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(10),r=n.n(s),i=n(12),o=n(4),l=n(5),u=n(7),b=n(6),m=n(21),d=n(3),h=n.n(d),j=n(0);function p(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:h.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{className:h.a.listItem,children:[Object(j.jsxs)("p",{className:h.a.listItemText,children:[a,": ",Object(j.jsx)("span",{className:h.a.listItemText,children:c})]}),Object(j.jsx)("button",{className:h.a.button,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})}var f=n(11),O=n(2),x=n.n(O),C=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t.handleAddContact=function(e){var n=t.state,a=n.name,c=n.number;e.preventDefault(),t.props.onSubmit(a,c),t.resetState()},t.resetState=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{className:x.a.form,onSubmit:this.handleAddContact,children:[Object(j.jsxs)("label",{className:x.a.label,children:["Name",Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:x.a.input,type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:this.handleChange})]}),Object(j.jsxs)("label",{className:x.a.label,children:["Number",Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:x.a.input,type:"tel",name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:this.handleChange})]}),Object(j.jsx)("button",{className:x.a.button,type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),_=n(9),v=n.n(_);function g(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{className:v.a.label,children:["Find contacts by name",Object(j.jsx)("input",{className:v.a.input,type:"text",value:e,onChange:n})]})}var y=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){if(t.state.contacts.find((function(t){return t.name===e})))alert("".concat(e," is already in contacts."));else{var a={id:Object(m.a)(),name:e,number:n};t.setState((function(t){var e=t.contacts;return{contacts:[a].concat(Object(i.a)(e))}}))}},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(C,{onSubmit:this.addContact}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(g,{value:t,onChange:this.changeFilter}),Object(j.jsx)(p,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);n(18);r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={form:"Form_form__3fdKr",label:"Form_label__31MY8",input:"Form_input__1iZ97",button:"Form_button__1VlFP"}},3:function(t,e,n){t.exports={list:"ContactList_list__30ouF",listItem:"ContactList_listItem___etSG",listItemText:"ContactList_listItemText__1qWy0",button:"ContactList_button__1-Haf"}},9:function(t,e,n){t.exports={label:"Filter_label__38Vuy",input:"Filter_input__24V3b"}}},[[19,1,2]]]);
//# sourceMappingURL=main.95b18b5b.chunk.js.map