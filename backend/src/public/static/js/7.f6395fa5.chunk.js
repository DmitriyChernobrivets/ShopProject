(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{523:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.classNames,a=e.title,n=e.callback,c=t?"default-btn ".concat(t):"default-btn";return r.a.createElement("button",{className:c,onClick:n},r.a.createElement("span",null,a))}},524:function(e,t,a){"use strict";a.d(t,"d",function(){return o}),a.d(t,"b",function(){return i}),a.d(t,"e",function(){return s}),a.d(t,"c",function(){return l}),a.d(t,"a",function(){return u});var n=a(59),r=a(28),c=a(7),o=function(e){return{type:c.n,payload:e}},i=function(e){return{type:c.c,payload:e}},s=function(){var e=JSON.parse(localStorage.getItem("bucket"))||[],t={total:Object(n.b)(e),items:e};return{type:c.z,payload:t}},u=function(e){var t=JSON.parse(localStorage.getItem("bucket"))||[];t.find(function(t){return t._id===e._id})||(t.push(e),localStorage.setItem("bucket",JSON.stringify(t)),r.NotificationManager.success("Added to bucket!"));var a=Object(n.b)(t);return{type:c.a,payload:{bucketItem:t,total:a}}},l=function(e){var t=JSON.parse(localStorage.getItem("bucket")).filter(function(t){return t._id!==e.id});return localStorage.setItem("bucket",JSON.stringify(t)),r.NotificationManager.success("Deleted!!"),{type:c.d,payload:{newItems:t,price:e.price}}}},526:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",{className:"forsale"},e.forSale?r.a.createElement("span",{className:"forSale-text"},r.a.createElement("i",{className:"fas fa-check"}),"Available"):r.a.createElement("span",{className:"forSale-text"},r.a.createElement("i",{className:"fas fa-times"}),"Sold"))}},527:function(e,t,a){"use strict";var n=a(29),r=a(30),c=a(33),o=a(31),i=a(32),s=a(0),u=a.n(s),l=a(523),p=a(539),m=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={isOpen:!1,disabled:!1},a.toogleDetails=function(){a.setState(function(e){return{isOpen:!e.isOpen}})},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.disabled&&this.setState({isOpen:!0,disabled:!0})}},{key:"render",value:function(){var e=this.state,t=e.isOpen,a=e.disabled,n=this.props.description;return u.a.createElement(s.Fragment,null,!a&&u.a.createElement(l.a,{title:"See More",callback:this.toogleDetails,classNames:"details-btn"}),u.a.createElement(p.a,{className:"product-description",defaultStyle:{height:0},enterStyle:{height:Object(p.b)("150px",400,"ease-in-out")},leaveStyle:{height:Object(p.b)("0",400,"ease-in-out")},activeStyle:{height:"150px"},active:t},u.a.createElement("ul",{className:"items-container"},Object.keys(n).map(function(e){return u.a.createElement("li",{className:"product-description_text",key:e},u.a.createElement("span",null,e," : "),n[e])}))))}}]),t}(s.Component);t.a=m},528:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.rating;return r.a.createElement("div",{className:"stars-container"},[1,2,3,4,5].map(function(e,a){return a+1>=t?r.a.createElement("i",{className:"fa fa-star",key:e,style:{color:"rgb(255, 226, 60)"},"aria-hidden":"true"}):r.a.createElement("i",{className:"fa fa-star",key:e,style:{color:"red"},"aria-hidden":"true"})}),r.a.createElement("span",null,t))}},529:function(e,t,a){"use strict";var n=a(29),r=a(30),c=a(33),o=a(31),i=a(32),s=a(0),u=a.n(s),l=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={isAddedtoBucket:!1},a.handleBucketAdd=function(){var e=a.state.isAddedtoBucket,t=a.props,n=t.product,r=t.addToBucket,c=t.history;e&&c.push("/bucket"),a.setState({isAddedtoBucket:!0}),r(n)},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.bucketItems,a=e.product;t.find(function(e){return e._id===a._id})&&this.setState({isAddedtoBucket:!0})}},{key:"render",value:function(){var e=this.state.isAddedtoBucket,t=this.props.product,a=e?"btn product-card-button added":"btn product-card-button";return u.a.createElement("button",{className:a,onClick:this.handleBucketAdd},e?u.a.createElement("span",null,"In bucket"):u.a.createElement("span",null,t.price," UAH"))}}]),t}(s.Component);t.a=l},576:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a(29),c=a(30),o=a(33),i=a(31),s=a(32),u=a(0),l=a.n(u),p=a(50),m=a(112),d=a(526),h=a(527),f=a(141),b=a(528),v=function(e){var t=e.product,a=t.hot,n=t.images,r=t.rating,c=e.link;return l.a.createElement(u.Fragment,null,a&&l.a.createElement("div",{className:"hot-price"},l.a.createElement("span",null,"HOT")),l.a.createElement("div",{className:"prdouct-image"},l.a.createElement(f.a,{to:c},l.a.createElement("img",{src:n[0],alt:"img"}))),l.a.createElement(b.a,{rating:r}))},k=function(e){var t=e.product.title,a=e.link;return l.a.createElement(f.a,{to:a,className:"card-title"},l.a.createElement("span",null,t))},g=a(531),y=a(529),O=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={isAddedtoBucket:!1},a.handleBucketAdd=function(){var e=a.state.isAddedtoBucket,t=a.props,n=t.product,r=t.addToBucket,c=t.history;e&&c.push("/bucket"),a.setState({isAddedtoBucket:!0}),r(n)},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.bucketItems,a=e.product;t.find(function(e){return e._id===a._id})&&this.setState({isAddedtoBucket:!0})}},{key:"render",value:function(){var e=this.props.product,t=e._id,a=e.description,n=e.forSale,r=this.props,c=r.bucketItems,o=r.product,i=r.addToBucket,s=r.history,u=r.match,p=this.props.match.params.categories+"/"+t;return l.a.createElement(g.a,{className:"product-card",xs:6,sm:6,lg:4},l.a.createElement(v,{product:o,match:u,link:p}),l.a.createElement(k,{product:o,link:p}),l.a.createElement(d.a,{forSale:n}),l.a.createElement(y.a,{product:o,bucketItems:c,addToBucket:i,history:s}),l.a.createElement(h.a,{description:a}))}}]),t}(u.PureComponent),E=a(524),j=Object(p.b)(null,function(e){return{addToBucket:function(t){return e(Object(E.a)(t))}}})(function(e){return l.a.createElement(O,e)}),S=a(532),N=a(533),C=a(36),w=a(80),A=function(e){var t=e.item,a=e.onChangeAction;return l.a.createElement("label",{forhtml:"check",className:"checkbox_label"},l.a.createElement("input",{type:"checkbox",className:"checkbox",id:"check",checked:t.checked,onChange:a}),t.name)},P=a(59),x={Notebooks:{title:[{checked:!1,name:"ThinkPad"},{checked:!1,name:"Lenovo"}],memory:[{checked:!1,name:"32"},{checked:!1,name:"16"},{checked:!1,name:"8"}],price:{min:0,max:15e4}},Mobile:{title:[{checked:!1,name:"HUAWEI"},{checked:!1,name:"Asus"},{checked:!1,name:"SAMSUNG "}],memory:[{checked:!1,name:"128"},{checked:!1,name:"64"},{checked:!1,name:"32"}],price:{min:0,max:15e4}},PCs:{title:[{checked:!1,name:"AMD"},{checked:!1,name:"intel"}],memory:[{checked:!1,name:"32"},{checked:!1,name:"16"},{checked:!1,name:"8"}],price:{min:0,max:15e4}}},B=a(543),I=a.n(B),_=a(523),F=(a(559),function(e){function t(){var e,a;Object(r.a)(this,t);for(var c=arguments.length,s=new Array(c),u=0;u<c;u++)s[u]=arguments[u];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state=x[a.props.match.params.categories],a.resetFilters=function(){if(!Object(P.a)(a.state)){var e=a.props,t=e.sort,r=e.getProducts,c=e.match;a.setState(x[c.params.categories],function(){r(Object(n.a)({},a.state,{sort:t}))})}},a.onRangeChange=function(e){return a.setState(Object(n.a)({},a.state,{price:e}),function(){return a.props.getProducts(a.state)})},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentWillUpdate",value:function(e,t){var a=e.location.pathname.match(/(Mobile|Notebooks|PCs)/);return e.location.pathname!==this.props.location.pathname&&(this.setState(x[a[0]]),!0)}},{key:"onChangeAction",value:function(e,t){var a=this,r=this.props,c=r.sort,o=r.getProducts;this.setState(function(a){var r=a[t].map(function(t,a){return a===e?Object(n.a)({},t,{checked:!t.checked}):t});return Object(C.a)({},t,Object(w.a)(r))},function(){return o(Object(n.a)({},a.state,{sort:c}))})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"filter_container"},l.a.createElement("h3",null,"Filters"),Object.keys(this.state).map(function(t){return l.a.createElement("div",{className:"filter_box",key:t},l.a.createElement("h5",null,"By ","memory"===t?t+", Gb":t),"price"===t?l.a.createElement(I.a,{maxValue:15e4,minValue:0,value:e.state.price,onChange:e.onRangeChange}):e.state[t].map(function(a,n){return l.a.createElement(A,{item:a,key:a.title,onChangeAction:e.onChangeAction.bind(e,n,t)})}))}),l.a.createElement(_.a,{title:"reset filters",callback:this.resetFilters}))}}]),t}(u.Component)),M=a(41),D=a(48),J=a.n(D),T=a(78),U=a(79),H=a(7),W=a(209),R=function(e){return{type:H.j,payload:e}},G=function(){return{type:H.y}},L=function(){return{type:H.e}},V=function(e){return{type:H.v,payload:e}},q=function(e){return{type:H.k,payload:e}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W.a,t=Object(P.c)(e),a=window.location.pathname;return function(){var e=Object(T.a)(J.a.mark(function e(r){var c,o,i,s;return J.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r(G()),e.prev=1,e.next=4,U.a.getProducts(a,t);case 4:c=e.sent,o=c.data,i=o.product,s=o.totalCount,o.Error?r(q(o.Error)):0===o.product.length?r(L()):(r(V(Object(n.a)({},t,{totalPageCount:s}))),r(R(i))),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),r(q(e.t0.message));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}()},K=Object(p.b)(function(e){return{filters:Object(M.h)(e),sort:Object(M.m)(e)}},function(e){return{getProducts:function(t){return e(z(t))}}})(function(e){return l.a.createElement(F,e)}),Q=a(144),X=a(575),Y=[{value:"cheap",label:"Start from cheap"},{value:"exp",label:"Start from expensive"}],Z=function(e){function t(){var e,a;Object(r.a)(this,t);for(var c=arguments.length,s=new Array(c),u=0;u<c;u++)s[u]=arguments[u];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={selectedOption:null},a.onSortChange=function(e){var t=a.props,r=t.getProducts,c=t.currentFilters;a.setState({selectedOption:e},function(){return r(Object(n.a)({},c,{sort:e.value}))})},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.selectedOption;return l.a.createElement(g.a,null,l.a.createElement("div",{className:"sort-menu"},l.a.createElement("h5",null,"Sort by price: "),l.a.createElement(X.a,{className:"price-select",onChange:this.onSortChange,placeholder:"Select...",options:Y,value:e})))}}]),t}(u.PureComponent),$=a(568),ee=a.n($),te=a(147),ae=a(111),ne=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={value:""},a.handleInput=function(e){a.setState({value:e.target.value})},a.onSubmit=function(e){if(e.preventDefault(),""!==a.input.value){var t=a.props,n=t.getProductBySearchInput,r=t.sort;n({value:a.state.value,sort:r})}},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.path;return l.a.createElement(g.a,null,l.a.createElement("form",{className:"search",onSubmit:this.onSubmit},l.a.createElement("input",{type:"text",className:"search-input",placeholder:"Search by title",onChange:this.handleInput,ref:function(t){return e.input=t}}),l.a.createElement("button",{className:"search-btn",onClick:this.onSubmit},l.a.createElement(ae.a,{path:t,viewbox:"0 0 17 17"}))))}}]),t}(u.Component),re=a(519),ce=function(){return l.a.createElement(g.a,{xs:6,sm:6,lg:4},l.a.createElement("div",{className:"card-preloader"},l.a.createElement("div",{className:"card-loader card-loader--tabs"})))},oe=m.a.SEARCH,ie=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={isshow:!1},a.handleClose=function(){a.setState({isshow:!1})},a.handleShow=function(){a.setState({isshow:!0})},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.allproducts,n=t.match,r=t.totalPageCount,c=t.currentFilters,o=t.bucketItems,i=t.location,s=t.history,u=t.getProductBySearchInput,p=t.getProducts,m=t.onPageChange,d=a.products,h=Math.ceil(r/6),f=a.error;return l.a.createElement("main",null,l.a.createElement(S.a,{className:"wrapper"},l.a.createElement(N.a,null,l.a.createElement(g.a,null,l.a.createElement(te.a,{query:"(max-width: 768px)"},function(t){return t?l.a.createElement(_.a,{title:"Filters",callback:e.handleShow}):l.a.createElement(K,{match:n,location:i})})),l.a.createElement(g.a,{md:9},l.a.createElement(N.a,{className:"sort-wrapper"},l.a.createElement(Z,{currentFilters:c,getProducts:p}),l.a.createElement(ne,{path:oe,getProductBySearchInput:u,sort:c.sort})),l.a.createElement(N.a,null,f?l.a.createElement(Q.default,{title:f}):0===d.length?Array(6).fill({}).map(function(e,t){return l.a.createElement(ce,{key:t})}):d.map(function(e){return l.a.createElement(j,{product:e,match:n,history:s,key:e._id,bucketItems:o})})),0!==d.length&&l.a.createElement(ee.a,{containerClassName:"pagination",activeClassName:"pagination_active",activeLinkClassName:"pagination_active-link",pageCount:h,onPageChange:m}))),l.a.createElement(re.a,{show:this.state.isshow,onHide:this.handleClose},l.a.createElement(K,{match:n,location:i}))))}}]),t}(u.Component),se=function(e){function t(){var e,a;Object(r.a)(this,t);for(var c=arguments.length,s=new Array(c),u=0;u<c;u++)s[u]=arguments[u];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).onPageChange=function(e){var t=e.selected,r=a.props,c=r.currentFilters;(0,r.getProducts)(Object(n.a)({},c,{currentPage:t}))},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentFilters,a=e.getProducts;(0,e.resetStore)(),a(t)}},{key:"componentWillUpdate",value:function(e,t){var a=this.props.getProducts;return e.match.params.categories!==this.props.match.params.categories&&(a(),!0)}},{key:"componentWillUnmount",value:function(){(0,this.props.resetFilters)()}},{key:"render",value:function(){return l.a.createElement(ie,Object.assign({},this.props,{onPageChange:this.onPageChange}))}}]),t}(u.Component);t.default=Object(p.b)(function(e){return{totalPageCount:Object(M.n)(e),allproducts:Object(M.b)(e),currentFilters:Object(M.e)(e),bucketItems:Object(M.d)(e)}},function(e){return{getProducts:function(t){return e(z(t))},getProductBySearchInput:function(t){return e(function(e){var t={title:e.value,sort:e.sort},a=window.location.pathname;return function(){var e=Object(T.a)(J.a.mark(function e(n){var r,c,o,i;return J.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n(G()),e.prev=1,e.next=4,U.a.Search(a,t);case 4:r=e.sent,c=r.data,o=c.product,i=c.totalCount,c.Error?n(q(c.Error)):0===c.product.length?n(L()):(n(V({totalPageCount:i})),n(R(o))),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n(q(e.t0.message));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}()}(t))},resetFilters:function(){return e({type:H.s})},resetStore:function(){return e({type:H.t})}}})(se)}}]);
//# sourceMappingURL=7.f6395fa5.chunk.js.map