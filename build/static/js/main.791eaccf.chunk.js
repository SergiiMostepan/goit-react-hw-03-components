(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{11:function(t,e,n){t.exports={satisticSection:"Statistics_satisticSection__xMUDt"}},12:function(t,e,n){t.exports={buttonSection:"Buttons_buttonSection__39h9L"}},15:function(t,e,n){t.exports=n(29)},29:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(10),o=n.n(r),l=(n(20),n(1)),s=n(2),u=n(3),i=n(5),m=n(4),h=n(6),d=n(11),f=n.n(d),b=function(t){var e=t.good,n=t.neutral,r=t.bad,o=t.total,l=t.posFeedback;return c.a.createElement(a.Fragment,null,c.a.createElement("h2",null," Statistics "),c.a.createElement("ul",{className:f.a.satisticSection},c.a.createElement("li",null," Good: ",e," ")," ",c.a.createElement("li",null," Neutral: ",n," "),c.a.createElement("li",null," Bad: ",r," ")," ",c.a.createElement("li",null," Total: ",o," "),c.a.createElement("li",null," Positive Feedback: ",l," % ")))},p=n(12),E=n.n(p),v=function(t){var e=t.type,n=t.onIncrementStatistick;return c.a.createElement("div",{className:E.a.buttonSection},c.a.createElement("button",{type:e,name:"good",onClick:n},"Goog"),c.a.createElement("button",{type:e,name:"neutral",onClick:n},"Neutral"),c.a.createElement("button",{type:e,name:"bad",onClick:n},"Bad"))},g=function(t){var e=t.children;return c.a.createElement("div",null,c.a.createElement("h2",null," Please leave feedback ")," ",e)},S=function(t){var e=t.message;return c.a.createElement(a.Fragment,null,c.a.createElement("h2",null," Statistics "),c.a.createElement("div",null,c.a.createElement("span",null," ",e," ")))},k=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(i.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(c)))).state={good:0,neutral:0,bad:0,total:0,posFeedback:0,notifocations:!1},n.hendelIncrementStatistick=function(t){var e=t.target.name;n.setState((function(t){return Object(l.a)({},e,t[e]+n.props.step)})),n.setState((function(t){return{notifocations:!0}})),n.countTotalFeedback(),n.countPositiveFeedbackPercentage(e)},n.countTotalFeedback=function(){n.setState((function(t){return{total:t.good+t.neutral+t.bad}}))},n.countPositiveFeedbackPercentage=function(){n.setState((function(t){return{posFeedback:Math.round(t.good/t.total*100)}}))},n}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return c.a.createElement(g,null,c.a.createElement(v,{type:"button",onIncrementStatistick:this.hendelIncrementStatistick}),this.state.notifocations?c.a.createElement(b,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.state.total,posFeedback:this.state.posFeedback}):c.a.createElement(S,{message:this.props.message}))}}]),e}(a.Component);k.defaultProps={step:1,message:"No feedback given"};var y=n(14),C=n(8),O=function(t){var e=t.children;return c.a.createElement(a.Fragment,null,c.a.createElement("div",null,e))},j=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(i.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(c)))).state={userName:"",userPhone:""},n.handleChange=function(t){n.setState(Object(l.a)({},t.target.name,t.target.value))},n.hendleSubmit=function(t){t.preventDefault(),n.props.onAddContacts(Object(C.a)({},n.state)),n.setState({userName:"",userPhone:""})},n}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h3",null," Name "),c.a.createElement("form",{onSubmit:this.hendleSubmit},c.a.createElement("input",{type:"text",name:"userName",value:this.state.userName,onChange:this.handleChange}),c.a.createElement("h3",null," Number "),c.a.createElement("input",{type:"text",name:"userPhone",value:this.state.userPhone,onChange:this.handleChange}),c.a.createElement("button",{type:"submit"}," Add contact ")))}}]),e}(a.Component),F=n(13),N=n.n(F),P=function(t){var e=t.contacts,n=t.ondeleteContact;return e.length>0?c.a.createElement("ul",null,e.map((function(t){var e=t.userName,a=t.userPhone,r=t.id;return c.a.createElement("li",{key:r},c.a.createElement("span",null,e,": ",a),c.a.createElement("button",{type:"button",onClick:function(){return n(r)}},"Delete"))}))):c.a.createElement("h3",null,"You don`t have any contacts")},w=function(t){var e=t.value,n=t.onChangeFilter;return c.a.createElement("div",null,c.a.createElement("span",null," Find contacts by name "),c.a.createElement("input",{type:"text",name:"filter",value:e,onChange:n,placeholder:"Type to filter tasks..."}))},x=function(t){try{var e=localStorage.getItem(t);return null===e?void 0:JSON.parse(e)}catch(n){console.error("Get state error: ",n)}},A=function(t,e){try{var n=JSON.stringify(e);localStorage.setItem(t,n)}catch(a){console.error("Set state error: ",a)}},I=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(i.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(c)))).state={contacts:[],filter:""},n.addContacts=function(t){if(n.state.contacts.find((function(e){return e.userName.toLowerCase()===t.userName.toLowerCase()})))alert("".concat(t.userName," is already in contact!"));else{var e=Object(C.a)({},t,{id:N.a.generate()});n.setState((function(t){return{contacts:[].concat(Object(y.a)(t.contacts),[e])}}))}},n.deleteContact=function(t){n.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}})),console.log("sadsa")},n.changeFilte=function(t){n.setState({filter:t.target.value})},n}return Object(h.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=x("contacts");t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&A("contacts",this.state.contacts)}},{key:"render",value:function(){var t,e,n=(t=this.state.contacts,e=this.state.filter,t.filter((function(t){return t.userName.toLowerCase().includes(e.toLowerCase())})));return c.a.createElement(O,null,c.a.createElement("h1",null," Phonebook "),c.a.createElement(j,{onAddContacts:this.addContacts}," "),c.a.createElement("h2",null," Contacts "),c.a.createElement(w,{value:this.state.filter,onChangeFilter:this.changeFilte}),c.a.createElement(P,{contacts:this.state.contacts.length>2?n:this.state.contacts,ondeleteContact:this.deleteContact}))}}]),e}(a.Component),_=function(){return c.a.createElement(a.Fragment,null,c.a.createElement(k,null),c.a.createElement(I,null))};o.a.render(c.a.createElement(a.Fragment,null,c.a.createElement(_,null)),document.querySelector("#root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.791eaccf.chunk.js.map