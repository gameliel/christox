(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"+coj":function(t,a,s){},"4/os":function(t,a,s){var i={"./logo-gray-200.svg":"oPq9","./logo-white.svg":"SOBf"};function e(t){var a=o(t);return s(a)}function o(t){if(!s.o(i,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return i[t]}e.keys=function(){return Object.keys(i)},e.resolve=o,t.exports=e,e.id="4/os"},DQNa:function(t,a,s){var i=s("busE"),e=Date.prototype,o=e.toString,n=e.getTime;new Date(NaN)+""!="Invalid Date"&&i(e,"toString",(function(){var t=n.call(this);return t==t?o.call(this):"Invalid Date"}))},SOBf:function(t,a,s){t.exports=s.p+"assets/img/logo-white.f0b0c74a.svg"},bpEU:function(t,a,s){"use strict";s("+coj")},ea96:function(t,a,s){"use strict";s.r(a);s("+2oP"),s("DQNa");var i=s("VTBJ"),e=s("L2JU"),o={props:{ghanaTraffic:{type:Boolean}},data:function(){return{products:[{text:"Bitcoin",link:"https://app.mypatricia.co/products"},{text:"Refill",link:"/refill/"},{text:"Digital Assets",link:"/digital-assets/"},{text:"Patricia Card",link:"/cards/"},{text:"Hank",link:"/hank"},{text:"Patricia Business",link:"https://business.mypatricia.co/"}],ghana_products:[{text:"Giftcard",link:""},{text:"Bitcoin",link:""},{text:"Digital Assets",link:""}],company:[{text:"About us",link:"/about/"},{text:"Careers",link:"/careers/"},{text:"Rates",link:"/rates/"},{text:"Mobile",link:"/mobile/"}],ghana_company:[{text:"About us",link:"/about/"},{text:"Careers",link:"/careers/"},{text:"Rates",link:"/rates/"}],learn:[{text:"Blog",link:"/blog/"},{text:"Learning Portal",link:"/learn/"},{text:"Help Center",link:"/faq/"}],legal:[{text:"Privacy Policy",link:"/privacy-policy/"},{text:"Anti-Money Laundering Policy",link:"/privacy-policy#money-laundering"},{text:"Terms of Service",link:"/privacy-policy#terms-of-service"}]}},computed:Object(i.a)({year:function(){return(new Date).getFullYear()}},Object(e.c)("Theme",{variant:"GET_FOOTER_THEME"})),methods:{capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}}},n=(s("bpEU"),s("KHd+")),r=Object(n.a)(o,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("footer",{staticClass:"base-footer w-9/12 mx-auto"},[i("div",{staticClass:"grid grid-cols-4 gap-10 lg:gap-24 justify-between text-gray-300 mb-16"},[t.ghanaTraffic?i("ul",{staticClass:"lg:col-span-1 col-span-2"},[i("li",{staticClass:"footer-title font-medium mb-6"},[t._v("Product")]),t._l(t.ghana_products,(function(a){return i("li",{key:a.text,staticClass:"mb-4 footer-sub"},[a?i("a",{staticClass:"text-gray-300 font-normal tracking-normal",attrs:{href:a.link?a.link:"https://app.mypatricia.co/products"}},[t._v(t._s(a.text))]):t._e()])}))],2):i("ul",{staticClass:"lg:col-span-1 col-span-2"},[i("li",{staticClass:"footer-title font-medium mb-6"},[t._v("Product")]),t._l(t.products,(function(a){return i("li",{key:a.text,staticClass:"mb-4 footer-sub"},[i("a",{staticClass:"text-gray-300 font-normal tracking-normal",attrs:{href:a.link?a.link:"https://app.mypatricia.co/products"}},[t._v(t._s(a.text))])])}))],2),t.ghanaTraffic?i("ul",{staticClass:"lg:col-span-1 col-span-2"},[i("li",{staticClass:"footer-title font-medium mb-6"},[t._v("Company")]),t._l(t.ghana_company,(function(a){return i("li",{key:a.text,staticClass:"mb-4 footer-sub"},[i("g-link",{staticClass:"text-gray-300 font-normal tracking-normal",attrs:{to:a.link}},[t._v(t._s(a.text))])],1)}))],2):i("ul",{staticClass:"lg:col-span-1 col-span-2"},[i("li",{staticClass:"footer-title font-medium mb-6"},[t._v("Company")]),t._l(t.company,(function(a){return i("li",{key:a.text,staticClass:"mb-4 footer-sub"},[i("g-link",{staticClass:"text-gray-300 font-normal tracking-normal",attrs:{to:a.link}},[t._v(t._s(a.text))])],1)}))],2),i("ul",{staticClass:"lg:col-span-1 col-span-2"},[i("li",{staticClass:"footer-title font-medium mb-6"},[t._v("Learn")]),t._l(t.learn,(function(a){return i("li",{key:a.text,staticClass:"mb-4 footer-sub"},[i("g-link",{staticClass:"text-gray-300 font-normal tracking-normal transition-500",attrs:{to:a.link}},[t._v(t._s(a.text))])],1)}))],2),i("div",{staticClass:"lg:col-span-1 col-span-2"},[i("ul",[i("li",{staticClass:"footer-title font-medium mb-6"},[t._v("Legal")]),t._l(t.legal,(function(a){return i("li",{key:a.text,staticClass:"mb-4 footer-sub"},[i("g-link",{staticClass:"text-gray-300 font-normal tracking-normal transition-500",attrs:{to:a.link}},[t._v(t._s(a.text))])],1)}))],2),t._m(0)])]),i("hr",{staticClass:"border-t border-snow-100"}),i("div",{staticClass:"grid grid-cols-4 xl:gap-24 gap-10 justify-between mt-16 mb-16 text-gray-300"},[i("div",{staticClass:"lg:col-span-1 md:col-span-2 col-span-4"},[i("a",{attrs:{href:"/"}},[i("g-image",{staticClass:"w-24",attrs:{src:s("4/os")("./logo-"+t.variant+".svg"),alt:"Patricia logo",title:t.capitalize(t.variant)+" Patricia Logo SVG"}})],1),i("div",{staticClass:"sub-text all-right-reserved text-smoke-dark mt-6"},[i("p",{class:{"text-dark-blue":"light"==t.variant}},[t._v("\n          © "+t._s(t.year)+"\n          "),i("span",{},[t._v("Patricia Technologies. All Rights Reserved")])])])]),i("div",{staticClass:"lg:col-span-1 md:col-span-2 col-span-4"},[i("p",{staticClass:"footer-title font-medium mb-5"},[t._v("Contact")]),i("a",{staticClass:"font-normal duration-500 tracking-normal text-blue",attrs:{href:"mailto:hello@mypatricia.co"}},[t._v("hello@mypatricia.co")]),i("br"),i("a",{staticClass:"font-normal duration-500 tracking-normal text-blue",attrs:{href:"mailto:frauddesk@mypatricia.co"}},[t._v("frauddesk@mypatricia.co")]),i("div",{staticClass:"mt-4 flex justify-between"},[i("a",{staticClass:"mr-3 cursor-pointer",attrs:{href:"https://www.youtube.com/channel/UCxfeniM2_FGIFcXSWa4Y_sA",target:"_blank"}},[i("svg",{staticClass:"icon icon-youtube text-smoke-100 hover:text-smoke-dark duration-500"},[i("use",{attrs:{"xlink:href":"/assets/icomoon/symbol-defs.svg#icon-youtube"}})])]),i("a",{staticClass:"mr-3 cursor-pointer",attrs:{href:"https://mobile.twitter.com/PatriciaSwitch",target:"_blank"}},[i("svg",{staticClass:"icon icon-twitter text-smoke-100 hover:text-smoke-dark duration-500"},[i("use",{attrs:{"xlink:href":"/assets/icomoon/symbol-defs.svg#icon-twitter"}})])]),i("a",{staticClass:"mr-3 cursor-pointer",attrs:{href:"https://instagram.com/patricia.com.ng?igshid=kbwqh89ueud4",target:"_blank"}},[i("svg",{staticClass:"icon icon-instagram text-smoke-100 hover:text-smoke-dark duration-500"},[i("use",{attrs:{"xlink:href":"/assets/icomoon/symbol-defs.svg#icon-instagram"}})])]),i("a",{staticClass:"mr-3 cursor-pointer",attrs:{href:"https://www.facebook.com/patricia.com.ng/",target:"_blank"}},[i("svg",{staticClass:"icon icon-facebook text-smoke-100 hover:text-smoke-dark duration-500"},[i("use",{attrs:{"xlink:href":"/assets/icomoon/symbol-defs.svg#icon-facebook"}})])])])]),t._m(1),t._m(2)]),i("div",{staticClass:"mb-10"},[t.ghanaTraffic?i("p",{staticClass:"text-smoke-dark sub-text leading-22 text-center"},[t._v("\n      MyPatricia.co is a property of Patricia Technologies Limited, a company\n      duly registered with CAC with RC Number: 1484208 in Nigeria & in Ghana\n      with the Registrar-General's Department with Registration Number:\n      CS345632018\n    ")]):i("p",{staticClass:"text-smoke-dark sub-text leading-22"},[t._v("\n      MyPatricia.co is a property of Patricia Technologies Limited, a company\n      duly registered with CAC with RC Number: 1484208. Account numbers and\n      Verve Cards are provided by Rubies Microfinance Bank, a company duly\n      registered under the Laws of the Federal Republic of Nigeria; and duly\n      licensed by the Central Bank of Nigeria, and pursuant to the rules of\n      Verve International Limited.\n    ")])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("ul",{staticClass:"mt-6"},[a("li",{staticClass:"footer-title font-medium mb-6"},[this._v("Community")]),a("li",{staticClass:"mb-4 footer-sub"},[a("a",{staticClass:"text-gray-300 font-normal tracking-normal transition-500",attrs:{href:"https://covid19.mypatricia.co/"}},[this._v("Covid-19")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"lg:col-span-1 md:col-span-2 col-span-4"},[a("div",{staticClass:"mb-10"},[a("p",{staticClass:"footer-title font-medium mb-4"},[this._v("Ghana")]),a("p",{staticClass:"footer-sub leading-26"},[this._v("\n          SCC Junction, near the Taxi Rank, Accra, Weija.\n          "),a("br"),this._v("P.O Box MP 4585, Mamprobi, Accra, GA/R Ghana\n        ")])]),a("div",[a("p",{staticClass:"footer-title font-medium mb-4"},[this._v("Lagos")]),a("p",{staticClass:"footer-sub leading-26 w-10/12"},[this._v("2 Swiss Trade Drive, Opp Ikota First Gate, Ikota Lekki, Lagos.")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"lg:col-span-1 md:col-span-2 col-span-4"},[a("div",{staticClass:"mb-10"},[a("p",{staticClass:"footer-title font-medium mb-4"},[this._v("United Kingdom")]),a("p",{staticClass:"footer-sub leading-26"},[this._v("2nd Floor College House, 17 King Edwards Road RUISLIP London HA4 7AE")])]),a("div",[a("p",{staticClass:"footer-title font-medium mb-4"},[this._v("United States")]),a("p",{staticClass:"footer-sub leading-26"},[this._v("251 Little Falls Drive, Wilmington DE 19807")])])])}],!1,null,"56715881",null);a.default=r.exports},oPq9:function(t,a,s){t.exports=s.p+"assets/img/logo-gray-200.7ed8587d.svg"}}]);