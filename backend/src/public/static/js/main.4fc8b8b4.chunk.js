(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{111:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(e){var t=e.path,r=e.viewbox,n=e.height,c=e.width;return a.a.createElement("svg",{viewBox:r,height:n||"17",width:c||"17"},t.map(function(e,t){return a.a.createElement("path",{d:e,key:t})}))}},112:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var n={SEARCH:["M16.654,14.994L13.06,11.4A7.2,7.2,0,0,0,7.205,0a7.207,7.207,0,0,0-5.1,12.3,7.2,7.2,0,0,0,9.29.758l3.594,3.592A1.175,1.175,0,1,0,16.654,14.994ZM3.771,10.642a4.86,4.86,0,1,1,3.434,1.422A4.827,4.827,0,0,1,3.771,10.642Z"],CLOSE:["M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"],CABINET:["M24 24.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z","M10.225 24.854c1.728-1.13 3.877-1.989 6.243-2.513-0.47-0.556-0.897-1.176-1.265-1.844-0.95-1.726-1.453-3.627-1.453-5.497 0-2.689 0-5.228 0.956-7.305 0.928-2.016 2.598-3.265 4.976-3.734-0.529-2.39-1.936-3.961-5.682-3.961-6 0-6 4.029-6 9 0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h8.719c0.454-0.403 0.956-0.787 1.506-1.146z"],BUCKET:["M6 32h20l2-22h-24zM20 4v-4h-8v4h-10v6l2-2h24l2 2v-6h-10zM18 4h-4v-2h4v2z"]}},139:function(e,t,r){"use strict";t.a=["Notebooks","Mobile","PCs"]},144:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n);t.default=function(e){var t=e.refresh,r=e.title;return a.a.createElement("div",{className:"error_container"},a.a.createElement("h5",{className:"error_text"},r||"Error 404"),t?a.a.createElement("button",{className:"error_btn",onClick:t},"Try again"):null)}},209:function(e,t,r){"use strict";r.d(t,"a",function(){return c});var n=r(12),a=r(7),c={title:[],memory:[],price:{min:0,max:15e4},sort:"Not Selected",totalPageCount:1};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0,r=t.type,o=t.payload;switch(r){case a.s:return c;case a.v:return Object(n.a)({},e,o);default:return e}}},228:function(e,t,r){e.exports=r(514)},41:function(e,t,r){"use strict";r.d(t,"h",function(){return v}),r.d(t,"i",function(){return E}),r.d(t,"a",function(){return h}),r.d(t,"j",function(){return b}),r.d(t,"e",function(){return f}),r.d(t,"b",function(){return m}),r.d(t,"n",function(){return p}),r.d(t,"p",function(){return n}),r.d(t,"l",function(){return a}),r.d(t,"d",function(){return o}),r.d(t,"o",function(){return c}),r.d(t,"k",function(){return u}),r.d(t,"c",function(){return l}),r.d(t,"g",function(){return i}),r.d(t,"f",function(){return s}),r.d(t,"m",function(){return d});var n=function(e){return e.auth.currentUser},a=function(e){return e.auth.Registration},c=function(e){return e.bucket.total},o=function(e){return e.bucket.items},u=function(e){return e.currentProductInfo},l=function(e){return e.auth.currentUser.status},i=function(e){return e.feedback.items},s=function(e){return e.feedback.error},d=function(e){return e.currentFilters.sort},f=function(e){return e.currentFilters},m=function(e){return e.allProducts},p=function(e){return e.currentFilters.totalPageCount},h=function(e){return e.allProducts.preloader},b=function(e){return e.currentProductInfo.loading},E=function(e){return e.error},v=function(e){return{title:e.currentFilters.title,memory:e.currentFilters.memory,price:e.currentFilters.price}}},513:function(e,t,r){},514:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(23),o=r.n(c),u=r(29),l=r(30),i=r(33),s=r(31),d=r(32),f=r(50),m=r(518),p=function(e){var t=e.categories,r=e.hide;return a.a.createElement("div",{className:r?"burder-list":"header-left"},a.a.createElement("ul",{className:"menu"},a.a.createElement("li",{className:"menu-item"},a.a.createElement(m.a,{exact:!0,to:"/",activeClassName:"active-link"},"Home")),t.map(function(e){return a.a.createElement("li",{className:"menu-item",key:e},a.a.createElement(m.a,{activeClassName:"active-link",to:"/category/"+e},e))})))},h=function(e){function t(){var e,r;Object(u.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(r=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={dropDown:!1},r.openUserMenu=function(e){e.preventDefault(),r.setState({dropDown:!0},function(){document.addEventListener("click",r.closeUserMenu)})},r.closeUserMenu=function(e){r.dropdownMenu.contains(e.target)||r.setState({dropDown:!1},function(){document.removeEventListener("click",r.closeUserMenu)})},r.logout=function(){(0,r.props.logout)()},r}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.closeUserMenu)}},{key:"render",value:function(){var e=this,t=this.state.dropDown,r=this.props.user,n=t?"dp-menu dp-open":"dp-menu";return a.a.createElement("div",{className:"user-garage"},a.a.createElement("div",{className:"welcome"},"Welcome,",r.firstName),a.a.createElement("div",{className:"user-img",onClick:this.openUserMenu},a.a.createElement("span",null,r.firstName[0].toUpperCase(),".",r.lastName[0].toUpperCase())),a.a.createElement("ul",{className:n,ref:function(t){return e.dropdownMenu=t}},a.a.createElement("li",null,a.a.createElement("span",{onClick:this.logout},a.a.createElement("i",{className:"fas fa-user-tie"}),"logout"))))}}]),t}(n.Component),b=r(111),E=r(112),v=r(141),g=E.a.CABINET,O=E.a.BUCKET,y=function(e){var t=e.logout,r=e.user,n=e.bucketitems,c=e.openModal;return a.a.createElement("div",{className:"header-right"},a.a.createElement("div",{className:"user-auth"},"User"===r.status?a.a.createElement(h,{logout:t,user:r.user}):a.a.createElement("div",{className:"user-controls",onClick:c},a.a.createElement(b.a,{path:g,viewbox:"0 0 36 32",height:"23",width:"23"}))),a.a.createElement("div",{className:"user-bucket"},a.a.createElement(v.a,{to:"/bucket"},a.a.createElement(b.a,{path:O,viewbox:"0 0 32 32",height:"23",width:"23"})),0!==n.length?a.a.createElement("div",{className:"bucket-count"},n.length):null),a.a.createElement("a",{href:"https://github.com/DmitriyChernobrivets/ShopProject/tree/master/src",target:"_blank",rel:"noopener noreferrer",className:"Github-icon"},a.a.createElement("i",{className:"fab fa-github-square"})))},j=r(213),N=r(519),k=r(147),w=function(e){var t=e.click,r=e.currentTab,n=1===r?"active-tab":null,c=2===r?"active-tab":null;return a.a.createElement("div",{className:"signin_tabs"},a.a.createElement("span",{className:n,onClick:t(1)},"Login"),a.a.createElement("span",{className:c,onClick:t(2)},"Registration"))},S=r(103),C=r(36),T=r(49),I=r.n(T),R=r(107),_=r.n(R),A=r(59),U=r(28),D=function(e){function t(){var e,r;Object(u.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(r=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={firstName:"",lastName:"",password:"",comparepassword:"",email:"",error:null},r.handleInput=function(e){var t;r.setState((t={},Object(C.a)(t,e.target.name,e.target.value),Object(C.a)(t,"error",null),t))},r.onError=function(e){r.setState({error:e})},r.handleSubmit=function(e){e.preventDefault();var t=r.state,n=(t.error,Object(S.a)(t,["error"])),a=r.props.createUser,c=r.password.props.defaultValue===r.comparepassword.props.defaultValue;Object(A.d)(n)?(r.onError("Wrong Inputs"),U.NotificationManager.error("Wrong Inputs")):c?a(n):U.NotificationManager.error("Passwords do not match")},r}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state,r=t.firstname,n=t.lastname,c=t.password,o=t.email,u=t.error,l=t.comparepassword;return a.a.createElement("form",{className:"signin-form"},a.a.createElement(I.a,{error:!!u,required:!0,name:"firstName",label:"FirstName",defaultValue:r,className:"name",onChange:this.handleInput,helperText:u?"Please fill all fields":null}),a.a.createElement(I.a,{error:!!u,required:!0,name:"lastName",label:"LastName",defaultValue:n,className:"name",onChange:this.handleInput,helperText:u?"Please fill all fields":null}),a.a.createElement(I.a,{error:!!u,required:!0,name:"email",label:"Email",defaultValue:o,className:"name",type:"email",onChange:this.handleInput,helperText:u?"Please fill all fields":null}),a.a.createElement(I.a,{error:!!u,required:!0,name:"password",label:"Password",defaultValue:c,className:"name",type:"password",onChange:this.handleInput,helperText:u?"Please fill all fields":null,ref:function(t){e.password=t}}),a.a.createElement(I.a,{error:!!u,required:!0,name:"comparepassword",label:"Reapeat password",defaultValue:l,className:"name",type:"password",onChange:this.handleInput,helperText:u?"Please fill all fields":null,ref:function(t){e.comparepassword=t}}),a.a.createElement(_.a,{variant:"contained",className:"signin-form_btn",onClick:this.handleSubmit},"Registration"))}}]),t}(n.Component),P=r(81),x=r.n(P),M={apiKey:"AIzaSyBNEZMSCgfoizQ9tAL0SMNDk62HsE9ROJo",authDomain:"shop-project-4ccad.firebaseapp.com"};x.a.initializeApp({apiKey:M.apiKey,authDomain:M.authDomain});var L=r(215),F=r.n(L),z=function(e){function t(){var e,r;Object(u.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(r=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={email:"admin@ukr.net",password:"admin",error:null},r.SocialsCallback=function(e){var t=r.props,n=t.SocialsLoginSuccess,a=t.history;n(e),a.push("/")},r.handleInput=function(e){var t;r.setState((t={},Object(C.a)(t,e.target.name,e.target.value),Object(C.a)(t,"error",null),t))},r.onError=function(){r.setState({error:"Wrond inputs"})},r.onsubmit=function(e){var t=r.state,n=(t.error,Object(S.a)(t,["error"])),a=r.props.login;e.preventDefault(),Object(A.d)(n)?r.onError():a(n)},r}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this.state,r=t.email,n=t.password,c=t.error;return a.a.createElement("form",{className:"signin-form"},a.a.createElement(F.a,{uiConfig:(e=this.SocialsCallback,{signInFlow:"popup",signInOptions:[x.a.auth.FacebookAuthProvider.PROVIDER_ID,x.a.auth.GithubAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:e}}),firebaseAuth:x.a.auth()}),a.a.createElement(I.a,{error:!!c,required:!0,name:"email",label:"Email",defaultValue:r,className:"name",onChange:this.handleInput,helperText:c?"Please fill all fields":null}),a.a.createElement(I.a,{error:!!c,required:!0,name:"password",label:"Password",defaultValue:n,className:"name",type:"password",onChange:this.handleInput,helperText:c?"Please fill all fields":null}),a.a.createElement(_.a,{variant:"contained",className:"signin-form_btn",onClick:this.onsubmit},"Login"))}}]),t}(n.Component),B=(r(227),function(e){function t(){var e,r;Object(u.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(r=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={currentTabidx:1},r.changeTab=function(e){return function(){r.setState({currentTabidx:e})}},r}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.user.user&&this.props.hideModal()}},{key:"render",value:function(){var e=this.props,t=e.history,r=e.login,c=e.SocialsLoginSuccess,o=e.createUser,u=this.state.currentTabidx;return a.a.createElement(n.Fragment,null,a.a.createElement("div",{className:"signin-container"},a.a.createElement(w,{currentTab:u,click:this.changeTab}),1===u?a.a.createElement(z,{history:t,login:r,SocialsLoginSuccess:c}):a.a.createElement(D,{createUser:o})))}}]),t}(n.PureComponent)),q=r(41),G=r(48),K=r.n(G),V=r(78),W=r(79),H=r(7),J=function(e){return{type:H.p,payload:e}},Z=function(e){var t={firstName:e.displayName||e.user.displayName,lastName:e.displayName||e.user.displayName,email:e.email||e.user.email};return{type:H.w,payload:t}},Y=function(e){return{type:H.o,payload:e}},Q=function(e){return{type:H.b,payload:e}},X=function(e){return function(){var t=Object(V.a)(K.a.mark(function t(r){var n,a;return K.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,W.a.login(e);case 3:n=t.sent,(a=n.data).Error?(r(Y(a)),U.NotificationManager.error("Error, ".concat(a.Error))):(r(J(a)),localStorage.setItem("token",a.token)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),r(Y(t.t0.response));case 11:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e){return t.apply(this,arguments)}}()},$=Object(f.b)(function(e){return{user:Object(q.p)(e),signUp:Object(q.l)(e)}},function(e){return{login:function(t){return e(X(t))},SocialsLoginSuccess:function(t){return e(Z(t))},createUser:function(t){return e((r=t,function(){var e=Object(V.a)(K.a.mark(function e(t){var n,a;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.a.createUser(r);case 3:n=e.sent,(a=n.data).Error?(t(Q(a)),U.NotificationManager.error("".concat(a.Error,"!"))):(t(X({email:r.email,password:r.password})),U.NotificationManager.success("User created!")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t(Q(e.t0.response))&&U.NotificationManager.error("Server error bro !");case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t){return e.apply(this,arguments)}}()));var r}}})(function(e){return a.a.createElement(B,e)}),ee=r(139),te=function(e){function t(){var e,r;Object(u.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(r=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={show:!1},r.handleClose=function(){r.setState({show:!1})},r.handleShow=function(){r.setState({show:!0})},r}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.logout,r=e.bucketitems,n=e.user,c=e.history;return a.a.createElement("header",{className:"header"},a.a.createElement(k.a,{query:"(max-width: 768px)"},function(e){return e?a.a.createElement(j.slide,null,a.a.createElement(p,{hide:!0,categories:ee.a})):a.a.createElement(p,{categories:ee.a})}),a.a.createElement(N.a,{show:this.state.show,onHide:this.handleClose},a.a.createElement($,{history:c,hideModal:this.handleClose})),a.a.createElement(y,{logout:t,user:n,bucketitems:r,openModal:this.handleShow}))}}]),t}(n.Component),re=r(521),ne=Object(re.a)(Object(f.b)(function(e){return{user:Object(q.p)(e),bucketitems:Object(q.d)(e)}},function(e){return{logout:function(){return e((localStorage.removeItem("token"),localStorage.removeItem("firebaseui::rememberedAccounts"),function(){var e=Object(V.a)(K.a.mark(function e(t){var r,n;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.a.defaultAuth();case 3:r=e.sent,n=r.data,t((a=n,{type:H.q,payload:a})),localStorage.setItem("token",n.token),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t(Y(e.t0.response));case 12:case"end":return e.stop()}var a},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()))}}})(function(e){return a.a.createElement(te,e)})),ae=r(522),ce=r(211),oe=r(144),ue=r(70),le=r.n(ue),ie=function(){return a.a.createElement("div",{className:"loader-container"},a.a.createElement("div",{className:"loader-main"},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null)))},se={HOME:{path:"/",exact:!0,component:le()({loader:function(){return r.e(9).then(r.bind(null,579))},loading:ie})},MAIN:{path:"/category/:categories",exact:!0,component:le()({loader:function(){return Promise.all([r.e(0),r.e(1),r.e(5),r.e(7)]).then(r.bind(null,576))},loading:ie})},INFO:{path:"/category/:categories/:id",exact:!1,component:le()({loader:function(){return Promise.all([r.e(0),r.e(10),r.e(6)]).then(r.bind(null,577))},loading:ie})},BUCKET:{path:"/bucket",exact:!1,component:le()({loader:function(){return Promise.all([r.e(1),r.e(8)]).then(r.bind(null,578))},loading:ie})},NOT_FOUND:{path:"*",exact:!1,component:le()({loader:function(){return Promise.resolve().then(r.bind(null,144))},loading:ie})}},de=r(221),fe=r(222),me=r(520),pe=function(e){var t=e.preloaderAll,r=e.preloaderID,n=e.errHandler,c=e.resetError;return a.a.createElement(me.a,null,a.a.createElement("div",{className:"App"},a.a.createElement(ne,null),a.a.createElement(ae.a,null,Object.values(se).map(function(e){return a.a.createElement(ce.a,Object.assign({key:e.path},e))})),a.a.createElement(U.NotificationContainer,null),a.a.createElement(de.CircleArrow,{style:{fill:"red",borderColor:"red"}}),t&&a.a.createElement(fe.Circle2,{color:"red",bgColor:"rgba(3, 3, 3, 0.1)",time:1400}),r&&a.a.createElement(ie,null),n&&a.a.createElement(oe.default,{title:n,refresh:c})))},he=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.defaultAuthorization)()}},{key:"render",value:function(){return"unauthorized"!==this.props.auth?a.a.createElement(pe,this.props):null}}]),t}(n.Component),be=Object(f.b)(function(e){return{preloaderAll:Object(q.a)(e),preloaderID:Object(q.j)(e),auth:Object(q.c)(e),errHandler:Object(q.i)(e)}},function(e){return{defaultAuthorization:function(){return e(function(){var e=localStorage.getItem("firebaseui::rememberedAccounts"),t=JSON.parse(e);return function(){var r=Object(V.a)(K.a.mark(function r(n){var a,c;return K.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,W.a.defaultAuth();case 3:a=r.sent,c=a.data,n(e?Z(t[0]):J(c)),localStorage.setItem("token",c.token),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),n(Y(r.t0.response));case 12:case"end":return r.stop()}},r,null,[[0,9]])}));return function(e){return r.apply(this,arguments)}}()}())},resetError:function(){return e((window.location.reload(),{type:H.h}))}}})(he),Ee=r(223),ve=r(45),ge=r(224),Oe=r(80),ye=r(12),je={products:[],preloader:!1,error:null},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;switch(r){case H.t:return Object(ye.a)({},je);case H.j:return Object(ye.a)({},e,{products:Object(Oe.a)(n),error:null,preloader:!1});case H.y:return Object(ye.a)({},e,{preloader:!0});case H.k:return Object(ye.a)({},e,{error:n,preloader:!1});case H.e:return{products:[],preloader:!1,error:"No matches founded!"};default:return e}},ke={product:null,error:null,loading:!1},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;switch(r){case H.u:return ke;case H.l:return Object(ye.a)({},e,{product:Object(ye.a)({},n),error:null,loading:!1});case H.m:return Object(ye.a)({},e,{error:n,loading:!1});case H.r:return Object(ye.a)({},e,{loading:!0});default:return e}},Se=JSON.parse(localStorage.getItem("bucket"))||[],Ce={total:Object(A.b)(Se),items:Se},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;switch(r){case H.a:return Object(ye.a)({},e,{items:n.bucketItem,total:n.total});case H.n:return Object(ye.a)({},e,{total:e.total+n});case H.c:return Object(ye.a)({},e,{total:e.total-n});case H.z:return Object(ye.a)({},e,n);case H.d:return Object(ye.a)({},e,{total:e.total-n.price,items:n.newItems});default:return e}},Ie=r(209),Re={currentUser:{status:"unauthorized",token:null,error:null},Registration:{status:null,error:null}},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0,r=t.payload;switch(t.type){case H.p:return Object(ye.a)({},e,{currentUser:Object(ye.a)({},r,{error:null}),Signnup:{status:"Success",error:null}});case H.w:return Object(ye.a)({},e,{currentUser:{status:"User",user:r,error:null}});case H.b:return Object(ye.a)({},e,{Signnup:r});case H.q:return Object(ye.a)({},e,{currentUser:Object(ye.a)({},r,{error:null})});case H.o:return Object(ye.a)({},e,{Signnup:r});default:return e}},Ae={items:[],error:null},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;switch(r){case H.i:return Object(ye.a)({},e,{items:n,error:null});case H.x:return Object(ye.a)({},e,{error:null});case H.f:return Object(ye.a)({},e,{error:n});default:return e}},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;switch(r){case H.h:return null;case H.g:return n;default:return e}},Pe=Object(ve.combineReducers)({allProducts:Ne,auth:_e,currentProductInfo:we,bucket:Te,currentFilters:Ie.b,feedback:Ue,error:De}),xe=function(e){return function(t){return function(r){r.payload&&r.payload.statusText?e.dispatch({type:H.g,payload:r.payload.statusText}):t(r)}}},Me=(r(513),Object(ve.createStore)(Pe,Object(ge.composeWithDevTools)(Object(ve.compose)(Object(ve.applyMiddleware)(Ee.a),Object(ve.applyMiddleware)(xe)))));o.a.render(a.a.createElement(f.a,{store:Me},a.a.createElement(be,null)),document.getElementById("root"))},59:function(e,t,r){"use strict";r.d(t,"b",function(){return c}),r.d(t,"c",function(){return a}),r.d(t,"d",function(){return o}),r.d(t,"a",function(){return u});var n=r(80),a=(r(28),function(e){return Object.keys(e).reduce(function(t,r){var a=Array.isArray(e[r])?e[r].filter(function(e){return e.checked}):e[r];return t[r]?t[r]=Object(n.a)(a):t[r]=Array.isArray(a)?Object(n.a)(a):a,t},{})}),c=function(e){return e.reduce(function(e,t){return e+t.price},0)},o=function(e){return Object.keys(e).some(function(t){return!e[t]})},u=function(e){return!(!e.title.every(function(e){return!e.checked})||!e.memory.every(function(e){return!e.checked})||0!==e.price.min||15e4!==e.price.max)}},7:function(e,t,r){"use strict";r.d(t,"b",function(){return w}),r.d(t,"o",function(){return k}),r.d(t,"p",function(){return j}),r.d(t,"q",function(){return N}),r.d(t,"k",function(){return E}),r.d(t,"n",function(){return n}),r.d(t,"v",function(){return b}),r.d(t,"y",function(){return h}),r.d(t,"j",function(){return p}),r.d(t,"m",function(){return f}),r.d(t,"l",function(){return d}),r.d(t,"x",function(){return s}),r.d(t,"f",function(){return i}),r.d(t,"c",function(){return a}),r.d(t,"z",function(){return c}),r.d(t,"a",function(){return o}),r.d(t,"d",function(){return u}),r.d(t,"i",function(){return l}),r.d(t,"r",function(){return m}),r.d(t,"s",function(){return v}),r.d(t,"w",function(){return S}),r.d(t,"u",function(){return g}),r.d(t,"t",function(){return O}),r.d(t,"e",function(){return y}),r.d(t,"g",function(){return C}),r.d(t,"h",function(){return T});var n="INCREMENT",a="DECREMENT",c="UPDATE_BUCKET",o="ADD_TO_BUCKET",u="DELETE_ITEM",l="GET_FEEDBACK_ITEMS",i="ERROR_FEEDBACK",s="SUCCESS_SENDED_FEEDBACK",d="GET_PRODUCT_ID",f="GET_PRODUCT_ID_FAILURE",m="PRODUCT_ID_PRELOADER",p="GET_PRODUCTS",h="TURN_ON_PRELOADER",b="SET_FILTERS",E="GET_PRODUCTS_FAILURE",v="RESET_FILTERS",g="RESET_STORE_BY_ID",O="RESET_STORE_ALL_PRODUCTS",y="EMPTY_PRODUCT_LIST",j="LOGIN_SUCCESS",N="LOGOUT",k="LOGIN_FAILURE",w="CREATE_USER_ERROR",S="SOCIALS_LOGIN_SUCCESS",C="ERROR_MSG",T="ERROR_MSG_RESET"},79:function(e,t,r){"use strict";var n=r(216),a=r.n(n).a.create({headers:{"Content-Type":"application/json"}});a.interceptors.request.use(function(e){var t=localStorage.getItem("token");return e.headers.common.Authorization=t?"".concat(t):"",e});var c={defaultAuth:function(){return a.get("/users/auth")},login:function(e){return a.post("/users/auth/login",e)},createUser:function(e){return a.post("/users/create",e)},getProducts:function(e,t){return a.post(e,t)},getProductById:function(e){return a.post(e)},Search:function(e,t){return a.post("".concat(e,"/search"),t)},getFeedbackItems:function(e){return a.get("/feedback?id=".concat(e))},sendFeedback:function(e){return a.post("/feedback",e)}};t.a=c}},[[228,3,4]]]);
//# sourceMappingURL=main.4fc8b8b4.chunk.js.map