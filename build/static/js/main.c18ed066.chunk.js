(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var s=t(0),r=t.n(s),n=t(3),o=t.n(n),i=(t(15),t(1)),l=t(4),m=t(5),d=t(7),c=t(6),u=t(8);t(16);function p(e){return e.valid?null:r.a.createElement("div",{className:"error-msg"},e.message)}var f=function(e){function a(){var e,t;Object(l.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(t=Object(d.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(r)))).state={username:"",usernameValid:!1,email:"",emailValid:!1,password:"",passwordValid:!1,passwordConfirm:"",passwordConfirmValid:!1,formValid:!1,errorMsg:{}},t.validateForm=function(){var e=t.state,a=e.usernameValid,s=e.emailValid,r=e.passwordValid,n=e.passwordConfirmValid;t.setState({formValid:a&&s&&r&&n})},t.updateUsername=function(e){t.setState({username:e},t.validateUsername)},t.validateUsername=function(){var e=t.state.username,a=!0,s=Object(i.a)({},t.state.errorMsg);e.length<3&&(a=!1,s.username="Must be at least 3 characters long"),t.setState({usernameValid:a,errorMsg:s},t.validateForm)},t.updateEmail=function(e){t.setState({email:e},t.validateEmail)},t.validateEmail=function(){var e=t.state.email,a=!0,s=Object(i.a)({},t.state.errorMsg);/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)||(a=!1,s.email="Invalid email format"),t.setState({emailValid:a,errorMsg:s},t.validateForm)},t.updatePassword=function(e){t.setState({password:e},t.validatePassword)},t.validatePassword=function(){var e=t.state.password,a=!0,s=Object(i.a)({},t.state.errorMsg);e.length<6?(a=!1,s.password="Password must be at least 6 characters long"):/\d/.test(e)?/[!@#$%^&*]/.test(e)||(a=!1,s.password="Password must contain special character: !@#$%^&*"):(a=!1,s.password="Password must contain a digit"),t.setState({passwordValid:a,errorMsg:s},t.validateForm)},t.updatePasswordConfirm=function(e){t.setState({passwordConfirm:e},t.validatePasswordConfirm)},t.validatePasswordConfirm=function(){var e=t.state,a=e.passwordConfirm,s=e.password,r=!0,n=Object(i.a)({},t.state.errorMsg);s!==a&&(r=!1,n.passwordConfirm="Passwords do not match"),t.setState({passwordConfirmValid:r,errorMsg:n},t.validateForm)},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,"Form Page"),r.a.createElement("main",{role:"main"},r.a.createElement("form",{action:"#",id:"js-form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement(p,{valid:this.state.usernameValid,message:this.state.errorMsg.username}),r.a.createElement("input",{type:"text",id:"username",name:"username",className:"form-field",value:this.state.username,onChange:function(a){return e.updateUsername(a.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement(p,{valid:this.state.emailValid,message:this.state.errorMsg.email}),r.a.createElement("input",{type:"email",id:"email",name:"email",className:"form-field",value:this.state.email,onChange:function(a){return e.updateEmail(a.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(p,{valid:this.state.passwordValid,message:this.state.errorMsg.password}),r.a.createElement("input",{type:"password",id:"password",name:"password",className:"form-field",value:this.state.password,onChange:function(a){return e.updatePassword(a.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password-confirmation"},"Password Confirmation"),r.a.createElement(p,{valid:this.state.passwordConfirmValid,message:this.state.errorMsg.passwordConfirm}),r.a.createElement("input",{type:"password",id:"password-confirmation",name:"password-confirmation",className:"form-field",value:this.state.passwordConfirm,onChange:function(a){return e.updatePasswordConfirm(a.target.value)}})),r.a.createElement("div",{className:"form-controls"},r.a.createElement("button",{className:"button",type:"submit",disabled:!this.state.formValid},"Sign Up")))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.c18ed066.chunk.js.map