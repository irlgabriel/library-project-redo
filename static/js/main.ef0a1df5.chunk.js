(this.webpackJsonplibrary_project=this.webpackJsonplibrary_project||[]).push([[0],{40:function(n,e,t){n.exports=t(59)},59:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(30),i=t.n(o),l=t(12),c=t(17),u=t(5),s=t(2),d=t(3);function m(){var n=Object(s.a)(["\n  user-select: none;\n  padding: 0.675rem 1.35rem;\n  border: none;\n  border-radius: 5px;\n  background: #101522;\n  color: white;\n  border: 1px solid white;\n  transition: all 0.5s ease;\n  &:hover {\n    background: white;\n    color: #101522;\n    border: 1px solid #101522;\n  }\n  &:hover:disabled {\n    background: #101522;\n    color: white;\n    border: 1px solid white;\n  }\n  &:disabled {\n    opacity: 0.4;\n  }\n"]);return m=function(){return n},n}function b(){var n=Object(s.a)(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"]);return b=function(){return n},n}function p(){var n=Object(s.a)(["\n  z-index: 1;\n  width: 100%;\n  max-width: 1300px;\n  margin: 0 auto;\n  padding: 0px 50px 0px 50px;\n"]);return p=function(){return n},n}function f(){var n=Object(s.a)(["\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: 'Source Sans Pro', sans-serif;\n    \n  }\n"]);return f=function(){return n},n}var g=Object(d.a)(f()),h=d.b.div(p()),x=d.b.div(b()),v=d.b.button(m()),E=g,j=t(9),w=t.n(j),y=t(34),k=t(35),O=t(14);function S(){var n=Object(s.a)(["\n  display: none;\n  @media screen and (max-width: 960px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 60%);\n    font-size: 1.8rem;\n    cursor: pointer;\n  }\n"]);return S=function(){return n},n}function C(){var n=Object(s.a)(["\n  text-decoration: none;\n  font-size: 1.5rem;\n  color: white;\n  &:hover {\n    color: lightcoral;\n  }\n"]);return C=function(){return n},n}function L(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  height: 80px;\n\n  ","\n"]);return L=function(){return n},n}function z(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  height: 80px;\n  border-bottom: 2px solid transparent;\n  padding: 0px 10px;\n  color: ",";\n  @media screen and (max-width: 960px) {\n    border-bottom: 1px solid white;\n    width: 100%;\n    justify-content: center;\n    &:hover {\n      color: lightcoral;\n    }\n    &:first-of-type {\n      border-top: 1px solid white;\n    }\n  }\n"]);return z=function(){return n},n}function F(){var n=Object(s.a)(["\n  display: flex;\n  list-style: none;\n  align-items: center;\n  text-align: center;\n  @media screen and (max-width: 960px) {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 90vh;\n    position: absolute;\n    top: 80px;\n    left: ",";\n    opacity: 1;\n    transition: all 0.5s ease;\n    background: #101522;\n  }\n"]);return F=function(){return n},n}function B(){var n=Object(s.a)(["\n  color: white;\n  font-size: 2rem;\n"]);return B=function(){return n},n}function P(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  color: black;\n"]);return P=function(){return n},n}function A(){var n=Object(s.a)(["\n  height: 80px;\n  background: #101522;\n  color: white;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.2rem;\n  position: sticky;\n  top: 0;\n  z-index: 999;\n"]);return A=function(){return n},n}var U=d.b.nav(A()),V=Object(d.b)(c.b)(P()),q=Object(d.b)(O.c)(B()),I=d.b.ul(F(),(function(n){return n.click?0:"-100%"})),T=d.b.li(z(),(function(n){return n.bgLightMenu?"white":"black"})),_=Object(d.b)(h)(L(),h),G=Object(d.b)(c.b)(C()),M=d.b.div(S());function R(n){var e=n.user,t=Object(r.useState)(!1),o=Object(l.a)(t,2),i=o[0],c=o[1],u=Object(r.useState)(!0),s=Object(l.a)(u,2),d=(s[0],s[1]),m=function(){return c(!1)};return window.addEventListener("resize",(function(){window.innerWidth<=960?d(!1):d(!0)})),a.a.createElement(a.a.Fragment,null,a.a.createElement(U,null,a.a.createElement(_,null,a.a.createElement(V,{to:"/"},a.a.createElement(q,{onClick:m})),a.a.createElement(M,{onClick:function(){return c(!i)},click:i},i?a.a.createElement(O.d,null):a.a.createElement(O.b,null)),a.a.createElement(I,{bgLightMenu:!0,click:i},a.a.createElement(T,null,a.a.createElement(G,{user:e,onClick:m,to:"/"},"Library")),e?a.a.createElement(T,null,a.a.createElement(G,{onClick:m,to:"/profile"},"Profile")):"",e?a.a.createElement(T,null,a.a.createElement(G,{onClick:m,to:"/logout"},"Logout")):"",e?"":a.a.createElement(T,null,a.a.createElement(G,{onClick:m,to:"/login"},"Log In")),e?"":a.a.createElement(T,null,a.a.createElement(G,{onClick:m,to:"/sign-up"},"Sign Up"))))))}function D(){var n=Object(s.a)(["\n  text-align: center;\n  margin-bottom: 10px;\n"]);return D=function(){return n},n}function W(){var n=Object(s.a)(["\n  text-decoration: none;\n  text-align: center;\n  margin: 3px 0;\n  font-size: 1.4rem;\n  color: white;\n  padding: 5px;\n  background: darkgrey;\n  border-radius: 5px;\n  transition: all 0.3s ease;\n  &:hover {\n    background: white;\n    color: darkgrey;\n  }\n"]);return W=function(){return n},n}function J(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 10px auto;\n  width: 500px;\n  background: lightsalmon;\n  padding: 15px;\n  border-radius: 5px;\n"]);return J=function(){return n},n}function K(){var n=Object(s.a)(["\n  padding: 10px;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n"]);return K=function(){return n},n}function H(){var n=Object(s.a)(["\n  text-align: center;\n"]);return H=function(){return n},n}var N=d.b.h1(H()),X=d.b.div(K()),Y=d.b.div(J()),Q=Object(d.b)(c.b)(W()),Z=d.b.h4(D());function $(n){var e=n.user,t=n.books,r=n.setBooks;return a.a.createElement(a.a.Fragment,null,e?a.a.createElement(h,null,a.a.createElement(Pn,{user:e}),a.a.createElement(N,null,"Library(".concat(t.length,")")),a.a.createElement(X,null,t.map((function(n){return a.a.createElement(dn,{user:e,key:n.id,book:n,setBooks:r,books:t})})))):a.a.createElement(h,null,a.a.createElement(Y,null,a.a.createElement(Z,null,"You need to be logged in to see your books Library!"),a.a.createElement(Q,{to:"/sign-up"},"Sign Up"),a.a.createElement(Q,{to:"/login"},"Login"))))}function nn(){var n=Object(s.a)(["\n  transform: rotate(0deg);\n  transition: all 0.5s ease-in-out;\n  font-size: 2rem;\n  &:hover {\n    transform: rotate(45deg);\n    color: red;\n  }\n"]);return nn=function(){return n},n}function en(){var n=Object(s.a)(["\n  text-align: center;\n  margin-top: auto;\n  margin-bottom: 10px;\n"]);return en=function(){return n},n}function tn(){var n=Object(s.a)(["\n  margin-top: 25px;\n  text-align: right;\n  font-size: 1rem;\n"]);return tn=function(){return n},n}function rn(){var n=Object(s.a)(["\n  text-align: center;\n  font-size: 1.5rem;\n  font-weight: bold;\n  user-select: none;\n"]);return rn=function(){return n},n}function an(){var n=Object(s.a)(["\n  \n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 10px;\n  opacity: ",";\n  background: ",";\n  border-radius: 5px;\n  height: 350px;\n  width: 250px;\n  margin: 10px;\n  transition: all 0.3s ease;\n  &:hover {\n    background: ",";\n  }\n\n  @media screen and (max-width: 768px) {\n    width: 350px;\n    height: 450px;\n  }\n\n  @media screen and (max-width: 980px) {\n    width: 300px;\n    height: 400px;\n  }\n"]);return an=function(){return n},n}var on=d.b.div(an(),(function(n){return"read"===n.bookStatus?"0.4":"1"}),(function(n){return n.bookStatus?"lightblue":"lightcoral"}),(function(n){return n.bookStatus?"lightcoral":"lightblue"})),ln=d.b.p(rn()),cn=d.b.p(tn()),un=d.b.p(en()),sn=Object(d.b)(O.e)(nn());function dn(n){var e=n.user,t=n.book,r=(n.books,n.setBooks,w.a.firestore()),o="Books".concat(e.uid),i=r.collection(o);return a.a.createElement(a.a.Fragment,null,a.a.createElement(on,{bookStatus:t.status,"data-id":t.id,onClick:function(n){var e=n.target.getAttribute("data-id");i.doc(e).update({status:"read"===t.status?"unread":"read"})}},a.a.createElement(ln,null,t.title),a.a.createElement(cn,null,t.author),a.a.createElement(un,null,t.pages,"p."),a.a.createElement(sn,{onClick:function(n){if(n.stopPropagation(),window.confirm("Are you sure you want to delete this book? This action cannot be undone.")){var e=n.target.parentElement.parentElement.getAttribute("data-id");console.log(e),i.doc(e).delete()}}})))}function mn(){var n=Object(s.a)(["\n  font-size: 20px;\n  transition: all 0.3s ease-in-out;\n  transform: ",";\n"]);return mn=function(){return n},n}function bn(){var n=Object(s.a)(["\n  flex-basis: 100%;\n"]);return bn=function(){return n},n}function pn(){var n=Object(s.a)(["\n  cursor: pointer;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(50, 168, 82, 0.4);\n  padding: 0.375rem 0.75rem;\n  border-radius: 5px;\n  user-select: none;\n  text-align: center;\n  margin: auto;\n  min-width: 150px;\n  max-width: 200px;\n  margin-top: 10px;\n"]);return pn=function(){return n},n}function fn(){var n=Object(s.a)([""]);return fn=function(){return n},n}function gn(){var n=Object(s.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return gn=function(){return n},n}function hn(){var n=Object(s.a)(["\n  padding: 0.375rem 0.75rem;\n  width: 200px;\n  margin: auto;\n\n  &:hover {\n  }\n"]);return hn=function(){return n},n}function xn(){var n=Object(s.a)(["\n  padding: 0.5rem 1rem;\n  border-radius: 5px;\n  box-shadow: none;\n  outline: none;\n  border: 2px solid lightgray;\n  box-sizing: border-box;\n  &:focus {\n    border: 2px solid lightgray;\n  }\n  &:focus:invalid {\n    border: 2px solid rgba(219, 22, 22, 0.4);\n  }\n  &:focus:valid {\n    border: 2px solid rgba(50, 168, 82, 0.4);\n  }\n"]);return xn=function(){return n},n}function vn(){var n=Object(s.a)(["\n  text-align: center;\n  margin-bottom: 5px;\n"]);return vn=function(){return n},n}function En(){var n=Object(s.a)(['\n  user-select: none;\n  \n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,\n    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n  text-transform: uppercase;\n  text-align: center;\n  display: inline-block;\n']);return En=function(){return n},n}function jn(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 10px;\n\n  &:last-of-type {\n    width: 100%;\n    flex-direction: row;\n    justify-content: center;\n  }\n"]);return jn=function(){return n},n}function wn(){var n=Object(s.a)(["\n  display: ",";\n  flex-wrap: wrap;\n  margin: auto;\n  margin-top: 10px;\n  width: 700px;\n  justify-content: center;\n\n  @media screen and (max-width: 768px) {\n    width: auto;\n    flex-direction: column;\n    padding: 0px 50px;\n  }\n"]);return wn=function(){return n},n}var yn=d.b.form(wn(),(function(n){return n.formToggled?"flex":"none"})),kn=d.b.div(jn()),On=d.b.p(En()),Sn=d.b.label(vn()),Cn=d.b.input(xn()),Ln=(d.b.button(hn()),d.b.div(gn())),zn=d.b.select(fn()),Fn=d.b.div(pn()),Bn=(d.b.div(bn()),Object(d.b)(O.a)(mn(),(function(n){return n.formToggled?"rotate(180deg)":"rotate(0deg)"})));function Pn(n){var e=n.user,t=Object(r.useState)(!1),o=Object(l.a)(t,2),i=o[0],c=o[1],u=Object(r.useState)(""),s=Object(l.a)(u,2),d=s[0],m=s[1],b=Object(r.useState)(""),p=Object(l.a)(b,2),f=p[0],g=p[1],h=Object(r.useState)(0),x=Object(l.a)(h,2),E=x[0],j=x[1],y=Object(r.useState)("unread"),k=Object(l.a)(y,2),O=k[0],S=k[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(Fn,{onClick:function(){c(!i)}},a.a.createElement(On,null,"Add a new Book\xa0"),a.a.createElement(Bn,{formToggled:i})),a.a.createElement(yn,{formToggled:i,onSubmit:function(n){n.preventDefault();var t={title:d,author:f,pages:E,status:O};w.a.firestore().collection("Books".concat(e?e.uid:"")).add(t).then((function(n){var e=n.id;n.update({id:e}),m(""),g(""),S("unread"),j(0)})).catch((function(n){return console.log(n.message)}))}},a.a.createElement(kn,null,a.a.createElement(Sn,{htmlFor:"title"},"Book Title"),a.a.createElement(Cn,{value:d,minLength:"5",maxLength:"50",type:"text",required:!0,name:"title",placeholder:"e.g. Man's Search for Reason",onChange:function(n){m(n.target.value)}})),a.a.createElement(kn,null,a.a.createElement(Sn,{htmlFor:"author"},"Book Author"),a.a.createElement(Cn,{value:f,minLength:"5",maxLength:"30",type:"text",name:"author",required:!0,placeholder:"e.g. Viktor E. Frankl",onChange:function(n){g(n.target.value)}})),a.a.createElement(kn,null,a.a.createElement(Sn,{htmlFor:"pages"},"Pages"),a.a.createElement(Cn,{value:E,required:!0,type:"number",placeholder:"e.g. 123",min:"0",max:"10001",name:"pages",onChange:function(n){j(n.target.value)}})),a.a.createElement(Ln,null,a.a.createElement(Sn,{htmlFor:"status"},"Status"),a.a.createElement(zn,{value:O,onChange:function(n){S(n.target.value)},name:"status",defaultValue:"unread"},a.a.createElement("option",{value:"read"},"Read"),a.a.createElement("option",{value:"unread"},"Unread"))),a.a.createElement(kn,null,a.a.createElement(v,{type:"submit"},"Add Book"))))}function An(){var n=Object(s.a)(["\n  padding: 0.175rem 0.5rem;\n  margin: auto;\n"]);return An=function(){return n},n}function Un(){var n=Object(s.a)(["\n  padding: 0.5rem 1rem;\n  border-radius: 5px;\n  box-shadow: none;\n  outline: none;\n  border: 2px solid lightgray;\n  box-sizing: border-box;\n  &:focus {\n    border: 2px solid lightgray;\n  }\n  &:focus:invalid {\n    border: 3px solid rgba(219, 22, 22, 0.4);\n  }\n  &:focus:valid {\n    border: 3px solid rgba(50, 168, 82, 0.4);\n  }\n"]);return Un=function(){return n},n}function Vn(){var n=Object(s.a)(["\n  text-align: center;\n  margin-bottom: 5px;\n"]);return Vn=function(){return n},n}function qn(){var n=Object(s.a)(["\n  width: 100%;\n  text-align: center;\n"]);return qn=function(){return n},n}function In(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0;\n\n  &:last-of-type {\n    flex-direction: row;\n    justify-content: center;\n  }\n"]);return In=function(){return n},n}function Tn(){var n=Object(s.a)(["\n  max-width: 600px;\n  margin: auto;\n  margin-top: 10px;\n  justify-content: space-between;\n  @media screen and (max-width: 768px) {\n    flex-direction: column;\n  }\n"]);return Tn=function(){return n},n}var _n=d.b.form(Tn()),Gn=d.b.div(In()),Mn=d.b.h3(qn()),Rn=d.b.label(Vn()),Dn=d.b.input(Un());d.b.button(An());function Wn(n){n.googleLogin;return function(n){var e=w.a.auth();return a.a.createElement(h,null,a.a.createElement(_n,{onSubmit:function(n){n.preventDefault();var t=n.target.email.value,r=n.target.password.value;e.signInWithEmailAndPassword(t,r).then((function(){window.location="/"})).catch((function(n){return console.log(n.message)}))}},a.a.createElement(Mn,null,"Log in"),a.a.createElement(Gn,null,a.a.createElement(Rn,{htmlFor:"email"},"Email"),a.a.createElement(Dn,{type:"email",name:"email",placeholder:"Email",required:!0,minLength:"6"})),a.a.createElement(Gn,null,a.a.createElement(Rn,{htmlFor:"password"},"Password"),a.a.createElement(Dn,{type:"password",name:"password",placeholder:"********",required:!0,minLength:"6"})),a.a.createElement(Gn,null,a.a.createElement(v,{type:"submit"},"Login"))),a.a.createElement(Gn,null,a.a.createElement(v,{onClick:function(){var n=new w.a.auth.GoogleAuthProvider;e.signInWithPopup(n).then((function(n){window.location="/profile"})).catch((function(n){return console.log(n.message)}))}},"Login with Google")))}()}function Jn(){var n=w.a.auth();function e(n){var e=n.target.parentElement.parentElement,t=e.password,r=e.password_confirmation;t.value!==r.value?(t.setCustomValidity("Passwords do not match!"),r.setCustomValidity("Passwords do not match!")):(t.setCustomValidity(""),r.setCustomValidity(""))}return a.a.createElement(h,null,a.a.createElement(_n,{onSubmit:function(e){e.preventDefault();var t=e.target.email.value,r=e.target.password.value;e.target.checkValidity()?n.createUserWithEmailAndPassword(t,r).then((function(n){console.log(n),window.location="/"})).catch((function(n){})):e.target.reportValidity()}},a.a.createElement(Mn,null,"Sign Up"),a.a.createElement(Gn,null,a.a.createElement(Rn,{htmlFor:"email"},"Email"),a.a.createElement(Dn,{onChange:function(e){var t=e.target;n.fetchSignInMethodsForEmail(t.value).then((function(n){0===n.length?t.setCustomValidity(""):t.setCustomValidity("Email Already in Use!"),t.reportValidity()}))},placeholder:"Email",required:!0,minLength:"6",type:"email",name:"email"})),a.a.createElement(Gn,null,a.a.createElement(Rn,{htmlFor:"password"},"Password"),a.a.createElement(Dn,{onChange:e,placeholder:"********",required:!0,minLength:"6",type:"password",name:"password"})),a.a.createElement(Gn,null,a.a.createElement(Rn,{htmlFor:"password_confirmation"},"Password Confirmation"),a.a.createElement(Dn,{onChange:e,placeholder:"********",required:!0,minLength:"6",type:"password",name:"password_confirmation"})),a.a.createElement(Gn,null,a.a.createElement(v,{type:"submit"},"Sign Up"))))}var Kn=t(36),Hn=t(37),Nn=t(39),Xn=t(38);function Yn(){var n=Object(s.a)(["\n  display: inline-block;\n  text-align: center;\n  text-decoration: none;\n  color: lightcoral;\n"]);return Yn=function(){return n},n}function Qn(){var n=Object(s.a)(["\n  display: block;\n"]);return Qn=function(){return n},n}function Zn(){var n=Object(s.a)(["\n\n  margin-top: auto;\n  text-align: center;\n  background: #101522;\n  color: white;\n  padding: 20px 0;\n"]);return Zn=function(){return n},n}var $n=d.b.footer(Zn()),ne=d.b.h3(Qn()),ee=d.b.a(Yn()),te=function(n){Object(Nn.a)(t,n);var e=Object(Xn.a)(t);function t(){return Object(Kn.a)(this,t),e.apply(this,arguments)}return Object(Hn.a)(t,[{key:"render",value:function(){return a.a.createElement($n,null,a.a.createElement(ne,null,"This project was built using"," ",a.a.createElement(ee,{href:"https://reactjs.org/"},"React")),a.a.createElement(ee,{href:"https://github.com/irlgabriel"},"Github"))}}]),t}(a.a.Component);function re(){return Object(r.useEffect)((function(){w.a.auth().signOut().then((function(){console.log("User successfully Signed out"),window.location="/"})).catch((function(n){return console.log(n.message)}))}),[]),a.a.createElement(a.a.Fragment,null)}function ae(){var n=Object(s.a)(["\n  margin: 10px 0;\n  display: inline-block;\n"]);return ae=function(){return n},n}function oe(){var n=Object(s.a)(["\n  user-select: none;\n  margin: 0 5px;\n  display: inline-block;\n  padding: 5px;\n  border-radius: 5px;\n  background: lightgoldenrodyellow;\n  transition: all 0.3s ease;\n  &:hover {\n    background-color: orange;\n    color: white;\n  }  \n"]);return oe=function(){return n},n}function ie(){var n=Object(s.a)(["\n  user-select: none;\n  margin: 0 5px;\n  display: inline-block;\n  padding: 5px;\n  border-radius: 5px;\n  background: lightgreen;\n  transition: all 0.3s ease;\n  &:hover {\n    background-color: orange;\n    color: white;\n  }\n"]);return ie=function(){return n},n}function le(){var n=Object(s.a)(["\n"]);return le=function(){return n},n}function ce(){var n=Object(s.a)(["\n  margin-bottom: 10px;\n  text-align: center;\n"]);return ce=function(){return n},n}function ue(){var n=Object(s.a)(["\n  min-width: 400px;\n  margin: 20px auto;\n  padding: 10px;\n  border-radius: 10px;\n  background: lightpink;\n"]);return ue=function(){return n},n}var se=d.b.div(ue()),de=d.b.p(ce()),me=d.b.div(le()),be=d.b.p(ie()),pe=d.b.p(oe()),fe=d.b.p(ae());function ge(n){var e=n.books,t=n.user,r=[],o=[];return e.forEach((function(n){"read"===n.status?r.push(n):o.push(n)})),a.a.createElement(a.a.Fragment,null,t?a.a.createElement(se,null,a.a.createElement(de,null,"Logged in as: ",t.email),a.a.createElement(me,null,"Library Size: ",e.length,a.a.createElement("br",null),a.a.createElement(fe,null,"Read Books(",r.length,"):"),r.map((function(n){return a.a.createElement(be,null,n.title)})),a.a.createElement("br",null),a.a.createElement(fe,null,"Unread Books(",o.length,"):"),o.map((function(n){return a.a.createElement(pe,null,n.title)})))):"")}w.a.initializeApp({apiKey:"AIzaSyDGfkgO__SMjKni5qL8G4Pku1XT5khByfs",authDomain:"javascript-book-library.firebaseapp.com",databaseURL:"https://javascript-book-library.firebaseio.com",projectId:"javascript-book-library",storageBucket:"javascript-book-library.appspot.com",messagingSenderId:"517788260684",appId:"1:517788260684:web:2073e5778ecce98401d7e9",measurementId:"G-S8CBW08016"});var he=w.a.auth(),xe=w.a.firestore();var ve=function(){var n=Object(y.a)(he),e=Object(l.a)(n,1)[0],t=xe.collection("Books".concat(e?e.uid:"")),o=Object(k.a)(t),i=Object(l.a)(o,3),s=i[0],d=(i[1],i[2],Object(r.useState)([])),m=Object(l.a)(d,2),b=m[0],p=m[1];return s&&b!==s&&p(s),a.a.createElement(c.a,null,a.a.createElement(x,null,a.a.createElement(E,null),a.a.createElement(R,{user:e}),a.a.createElement(u.a,{path:"/",exact:!0,render:function(){return a.a.createElement($,{user:e,setBooks:p,books:b})}}),a.a.createElement(u.a,{path:"/login",render:function(){return a.a.createElement(Wn,null)}}),a.a.createElement(u.a,{path:"/sign-up",component:Jn}),a.a.createElement(u.a,{path:"/logout",component:re}),a.a.createElement(u.a,{path:"/profile",render:function(){return a.a.createElement(ge,{books:b,user:e})}}),a.a.createElement(te,null)))};i.a.render(a.a.createElement(ve,null),document.querySelector("#root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.ef0a1df5.chunk.js.map