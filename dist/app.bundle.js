!function(t){function e(e){for(var n,c,u=e[0],a=e[1],s=e[2],d=0,p=[];d<u.length;d++)c=u[d],o[c]&&p.push(o[c][0]),o[c]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);for(l&&l(e);p.length;)p.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,u=1;u<r.length;u++){var a=r[u];0!==o[a]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},o={0:0},i=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var u=window.webpackJsonp=window.webpackJsonp||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=a;i.push([5,1]),r()}({5:function(t,e,r){t.exports=r(9)},9:function(t,e,r){"use strict";r.r(e);var n=r(2),o=r(3),i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-link",{attrs:{to:{name:"home"}}},[this._v("HOME")]),this._v(" "),e("router-link",{attrs:{to:{name:"product"}}},[this._v("PRODUCT")]),this._v(" "),e("router-link",{attrs:{to:{name:"cart"}}},[this._v("CART")]),this._v(" "),e("router-view")],1)};i._withStripped=!0;var c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",t._l(t.products,function(e){return r("li",{key:e.id},[t._v("\n    "+t._s(e.title)+" - "+t._s(e.price)+"\n    "),r("br"),t._v(" "),r("button",{attrs:{disabled:!e.inventory},on:{click:function(r){t.addProductToCart(e)}}},[t._v("\n      Add to cart\n    ")])])}),0)};c._withStripped=!0;var u=r(0),a={computed:Object(u.d)({products:function(t){return t.products.all}}),methods:Object(u.b)("cart",["addProductToCart"]),created:function(){this.$store.dispatch("products/getAllProducts")}},s=r(1),l=Object(s.a)(a,c,[],!1,null,null,null);l.options.__file="src/view/ProductList.vue";var d=l.exports,p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cart"},[r("h2",[t._v("Your Cart")]),t._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:!t.products.length,expression:"!products.length"}]},[r("i",[t._v("Please add some products to cart.")])]),t._v(" "),r("ul",t._l(t.products,function(e){return r("li",{key:e.id},[t._v("\n      "+t._s(e.title)+" - "+t._s(e.price)+" x "+t._s(e.quantity)+"\n    ")])}),0),t._v(" "),r("p",[t._v("Total: "+t._s(t.total))]),t._v(" "),r("p",[r("button",{attrs:{disabled:!t.products.length},on:{click:function(e){t.checkout(t.products)}}},[t._v("Checkout")])]),t._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:t.checkoutStatus,expression:"checkoutStatus"}]},[t._v("Checkout "+t._s(t.checkoutStatus)+".")])])};function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}p._withStripped=!0;var v={computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){f(t,e,r[e])})}return t}({},Object(u.d)({checkoutStatus:function(t){return t.cart.checkoutStatus}}),Object(u.c)("cart",{products:"cartProducts",total:"cartTotalPrice"})),methods:{checkout:function(t){this.$store.dispatch("cart/checkout",t)}}},h=Object(s.a)(v,p,[],!1,null,null,null);h.options.__file="src/view/ShoppingCart.vue";var m=h.exports,_={components:{ProductList:d,ShoppingCart:m}},y=Object(s.a)(_,i,[],!1,null,null,null);y.options.__file="src/view/App.vue";var b=y.exports,w=function(){var t=this.$createElement;return(this._self._c||t)("h1",[this._v("HOME")])};w._withStripped=!0;var P={name:"home",created:function(){}},g=Object(s.a)(P,w,[],!1,null,null,null);g.options.__file="src/view/Home.vue";var O=g.exports,S="/webpackFourProject",k=new o.a({mode:"history",routes:[{name:"home",path:"".concat(S,"/"),component:O},{name:"product",path:"".concat(S,"/product"),component:d},{name:"cart",path:"".concat(S,"/cart"),component:m}]}),j=[{id:1,title:"iPad 4 Mini",price:500.01,inventory:2},{id:2,title:"H&M T-Shirt White",price:10.99,inventory:10},{id:3,title:"Charli XCX - Sucker CD",price:19.99,inventory:5}],C=function(t){t(j)},T=function(t,e,r){setTimeout(function(){Math.random()>.5||navigator.userAgent.indexOf("PhantomJS")>-1?e():r()},1e3)};function x(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var A={namespaced:!0,state:{items:[],checkoutStatus:null},getters:{cartProducts:function(t,e,r){return t.items.map(function(t){var e=t.id,n=t.quantity,o=r.products.all.find(function(t){return t.id===e});return{title:o.title,price:o.price,quantity:n}})},cartTotalPrice:function(t,e){return e.cartProducts.reduce(function(t,e){return t+e.price*e.quantity},0)}},actions:{checkout:function(t,e){var r=t.commit,n=x(t.state.items);r("setCheckoutStatus",null),r("setCartItems",{items:[]}),T(e,function(){return r("setCheckoutStatus","successful")},function(){r("setCheckoutStatus","failed"),r("setCartItems",{items:n})})},addProductToCart:function(t,e){var r=t.state,n=t.commit;if(n("setCheckoutStatus",null),e.inventory>0){var o=r.items.find(function(t){return t.id===e.id});o?n("incrementItemQuantity",o):n("pushProductToCart",{id:e.id}),n("products/decrementProductInventory",{id:e.id},{root:!0})}}},mutations:{pushProductToCart:function(t,e){var r=e.id;t.items.push({id:r,quantity:1})},incrementItemQuantity:function(t,e){var r=e.id;t.items.find(function(t){return t.id===r}).quantity++},setCartItems:function(t,e){var r=e.items;t.items=r},setCheckoutStatus:function(t,e){t.checkoutStatus=e}}},M={namespaced:!0,state:{all:[]},getters:{},actions:{getAllProducts:function(t){var e=t.commit;C(function(t){e("setProducts",t)})}},mutations:{setProducts:function(t,e){t.all=e},decrementProductInventory:function(t,e){var r=e.id;t.all.find(function(t){return t.id===r}).inventory--}}};n.a.use(u.a);var E=new u.a.Store({modules:{cart:A,products:M},strict:!1});n.a.use(o.a),new n.a({el:"#app",store:E,router:k,render:function(t){return t(b)}})}});