(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"6euJ":function(t,e,i){"use strict";var a={name:"quick-search",props:{items:{items:{type:Array,required:!0}}}},c=(i("aa9j"),i("KHd+")),n=Object(c.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"quick-search text-center"},[i("li",{staticClass:"inline-block text-blue-pale text-white font-normal mr-2"},[t._v("\n    Quick Search:\n  ")]),t._l(t.items,(function(e,a){return i("li",{key:a,staticClass:"inline-block"},[i("g-link",{staticClass:"text-blue-pale text-xs md:text-sm lg:text-sm font-normal rounded block",attrs:{to:e.path}},[t._v(t._s(e.text))])],1)}))],2)}),[],!1,null,null,null);e.a=n.exports},"7Qib":function(t,e,i){i("DQNa"),i("rB9j"),i("UxlC");t.exports={setPathName:function(t){return t.replace(/ /g,"-").replace(/[0-9`~!@#$%^&*()_|+=?;:'",.<>\{\}\[\]\\\/]/g,"").toLowerCase()},toDateObject:function(t){return new Date(t)},replaceSpaceWithHyphen:function(t){return t.replace(/ /g,"-").toLowerCase()},replaceHyphenWithSpace:function(t){return(t=t.replace(/^./,t[0].toUpperCase())).replace(/-/g," ")}}},CsP6:function(t,e,i){},DQNa:function(t,e,i){var a=i("busE"),c=Date.prototype,n=c.toString,o=c.getTime;new Date(NaN)+""!="Invalid Date"&&a(c,"toString",(function(){var t=o.call(this);return t==t?n.call(this):"Invalid Date"}))},EHvl:function(t,e,i){},HM74:function(t,e,i){"use strict";i("CsP6")},JTJg:function(t,e,i){"use strict";var a=i("I+eb"),c=i("WjRb"),n=i("HYAF");a({target:"String",proto:!0,forced:!i("qxPZ")("includes")},{includes:function(t){return!!~String(n(this)).indexOf(c(t),arguments.length>1?arguments[1]:void 0)}})},TeQF:function(t,e,i){"use strict";var a=i("I+eb"),c=i("tycR").filter,n=i("Hd5f"),o=i("rkAj"),d=n("filter"),r=o("filter");a({target:"Array",proto:!0,forced:!d||!r},{filter:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},WW7V:function(t,e,i){"use strict";i("EHvl")},Y9eE:function(t,e,i){"use strict";i("ma9I"),i("TeQF"),i("yq1k"),i("2B1R"),i("07d7"),i("JTJg");var a=i("VTBJ"),c=i("6euJ"),n=i("cRs8"),o=i("7Qib"),d={name:"faq-hero",components:{TextInput:function(){return i.e(1).then(i.t.bind(null,"3bxA",7)).then((function(t){return t.TextInput})).catch()},QuickSearch:c.a,Dropdown:n.a},props:{disableHeading:{type:Boolean,default:!1}},data:function(){return{isDropdownVisible:!1,searchValue:"",dropdownItems:[]}},mounted:function(){this.dropdownItems=this.$static.allFaqs.edges.map((function(t){var e=t.node;return Object(a.a)(Object(a.a)({},e),{},{url:"/faq/".concat(Object(o.setPathName)(e.category.title),"/").concat(Object(o.setPathName)(e.title))})})),this.dropdownItemsCopy=this.dropdownItems},methods:{setPathName:function(t){return Object(o.setPathName)(t)},handleInputChange:function(){this.filterDropdown(),""==this.searchValue?this.closeDropdown():this.isDropdownVisible=!0},closeDropdown:function(){this.isDropdownVisible=!1},filterDropdown:function(){var t=this;this.dropdownItems=this.dropdownItemsCopy.filter((function(e){return e.title.toLowerCase().includes(t.searchValue.toLowerCase())}))}}},r=(i("HM74"),i("KHd+")),l=i("Kw5r"),f=l.default.config.optionMergeStrategies.computed,s={allTopics:{edges:[{node:{id:"5e96f92cd49cf31059bf47c9",title:"Giftcard Trading"}},{node:{id:"5e98be44d49cf31059bf47ee",title:"Perfect Money"}},{node:{id:"5e98c1d8d49cf31059bf47ef",title:"Trading instructions"}},{node:{id:"5e98c23cd49cf31059bf47f0",title:"Patricia Refill"}},{node:{id:"5e9acae11c0b057ae85afd38",title:"Patricia Pay"}},{node:{id:"5e9b41f0d49cf31059bf480f",title:"Payment"}}]},allFaqs:{edges:[{node:{id:"5e98910cd49cf31059bf47db",title:"What is an e-Code",category:{title:"Giftcard Trading"}}},{node:{id:"5e98955bd49cf31059bf47dd",title:"What are Large Cards",category:{title:"Giftcard Trading"}}},{node:{id:"5e9895f0d49cf31059bf47de",title:'What does "INVALID CODE" mean',category:{title:"Giftcard Trading"}}},{node:{id:"5e9897c7d49cf31059bf47df",title:'What is an "ACTIVATED CARD" and when can it be used',category:{title:"Giftcard Trading"}}},{node:{id:"5e989bbdd49cf31059bf47e0",title:"How do I activate an Inactivated Gift Card",category:{title:"Giftcard Trading"}}},{node:{id:"5e98a443d49cf31059bf47e1",title:"What does “No Currency exist for this card” mean",category:{title:"Giftcard Trading"}}},{node:{id:"5e98a92ad49cf31059bf47e3",title:"Why is the rate of Gift card low on Patricia",category:{title:"Giftcard Trading"}}},{node:{id:"5e98ac85d49cf31059bf47e4",title:'Why is my activated Gift Card declined as an "Already Redeemed Card" ',category:{title:"Giftcard Trading"}}},{node:{id:"5e98ae4ad49cf31059bf47e6",title:"What is the rate of my Card",category:{title:"Giftcard Trading"}}},{node:{id:"5e98aecdd49cf31059bf47e7",title:"Why is my Transaction Pending",category:{title:"Giftcard Trading"}}},{node:{id:"5e98b150d49cf31059bf47ea",title:'What does "Book Balance" mean',category:{title:"Giftcard Trading"}}},{node:{id:"5e98b33bd49cf31059bf47ec",title:'I got a notification that states "I have a Flagged Transaction", why',category:{title:"Giftcard Trading"}}},{node:{id:"5e9a0aecd49cf31059bf47f3",title:"WHAT ARE BTC TRANSFER FEES",category:{title:"Bitcoin"}}},{node:{id:"5e9a0ba9d49cf31059bf47f4",title:"BTC TRANSACTION ID",category:{title:"Bitcoin"}}},{node:{id:"5e9a2d0ad49cf31059bf47f5",title:"REASON FOR DELAYED BTC CONFIRMATIONS",category:{title:"Bitcoin"}}},{node:{id:"5e9a2d56d49cf31059bf47f6",title:"HOW TO GET YOUR BTC HASH ID",category:{title:"Bitcoin"}}},{node:{id:"5e9a2d97d49cf31059bf47f7",title:"WHAT DOES USD VALUE IN BTC MEAN",category:{title:"Bitcoin"}}},{node:{id:"5e9a2de2d49cf31059bf47f8",title:"HOW TO CONVERT BTC VALUE TO USD",category:{title:"Bitcoin"}}},{node:{id:"5e9a2e1cd49cf31059bf47f9",title:"WHAT IS BTC VALUE",category:{title:"Bitcoin"}}},{node:{id:"5e9a2f4dd49cf31059bf47fb",title:"WHAT IS BITCOIN MINING",category:{title:"Bitcoin"}}},{node:{id:"5e9a2fc2d49cf31059bf47fc",title:"IS BTC TRANSFER FEE NECESSARY",category:{title:"Bitcoin"}}},{node:{id:"5e9a3048d49cf31059bf47fd",title:"WHAT IS THE ACTUAL VALUE OF A TRANSACTION FEE",category:{title:"Bitcoin"}}},{node:{id:"5e9a30a3d49cf31059bf47fe",title:"CAN I BUY BTC FROM PATRICIA AND TRANSFER TO ANOTHER WALLET",category:{title:"Bitcoin"}}},{node:{id:"5e9a332ed49cf31059bf47ff",title:"HOW CAN I OPEN A BTC ACCOUNT",category:{title:"Bitcoin"}}},{node:{id:"5e9a34afd49cf31059bf4800",title:"HOW MUCH IS 1 BTC",category:{title:"Bitcoin"}}},{node:{id:"5e9a3585d49cf31059bf4801",title:"WHAT DETERMINES BITCOIN RATES AND PRICES",category:{title:"Bitcoin"}}},{node:{id:"5e9a387ad49cf31059bf4804",title:"MAXIMUM AMOUNT OF BTC YOU CAN BUY/SELL",category:{title:"Bitcoin"}}},{node:{id:"5e9a3f87d49cf31059bf4807",title:"MY INCOMING BTC HAS BEEN PENDING FOR HOURS, WHAT IS THE CAUSE",category:{title:"Bitcoin"}}},{node:{id:"5e9a3fccd49cf31059bf4808",title:"WHAT IS PERFECT MONEY",category:{title:"Perfect Money"}}},{node:{id:"5e9a4010d49cf31059bf4809",title:"IS PERFECT MONEY SAFE",category:{title:"Perfect Money"}}},{node:{id:"5e9a40d0d49cf31059bf480b",title:"WHERE CAN I LOCATE MY PERFECT MONEY ADDRESS",category:{title:"Perfect Money"}}},{node:{id:"5e9a41c0d49cf31059bf480e",title:"CONFIRMATION TIME FOR PERFECT MONEY TRANSACTIONS",category:{title:"Perfect Money"}}},{node:{id:"5e9b42b3d49cf31059bf4810",title:"WHY IS MY PAYMENT BEING DELAYED",category:{title:"Payment"}}},{node:{id:"5e9b42f3d49cf31059bf4811",title:"WHY AM I BEING CHARGED #100 AS WITHDRAWAL CHARGE",category:{title:"Payment"}}},{node:{id:"5e9b47e0d49cf31059bf4816",title:" I DEPOSITED MONEY IN MY WALLET AND IT’S YET TO REFLECT, WHY",category:{title:"Patricia Pay"}}},{node:{id:"5e9b4ac6d49cf31059bf4818",title:"CAN I MAKE TRANSFERS USING THE PAY PAL OPTION",category:{title:"PAY PAL Transaction"}}},{node:{id:"5e9b4be6d49cf31059bf4819",title:"HOW DO I GET PAID AFTER A SUCCESSFUL TRANSACTION",category:{title:"Payment"}}},{node:{id:"5e9b4d07d49cf31059bf481a",title:"WHY CAN’T I FIND MY BANK AT THE POINT OF WITHDRAWAL",category:{title:"Patricia Pay"}}},{node:{id:"5e9b4d63d49cf31059bf481b",title:"CAN I MAKE DEPOSITS USING A FOREIGN CARD",category:{title:"Payment"}}},{node:{id:"5e9b5dbed49cf31059bf4822",title:"HOW DO I GET AN OTP",category:{title:"Security"}}},{node:{id:"5e9c7a8cd49cf31059bf4825",title:"WHY IS MY PIN NOT WORKING",category:{title:"Security"}}},{node:{id:"5e9c7b5ed49cf31059bf4827",title:"ARE MY PERSONAL DETAILS SAFE ON THE WEBSITE",category:{title:"Security"}}},{node:{id:"5e9c7b9fd49cf31059bf4828",title:"CAN MY WALLET BE HACKED",category:{title:"Security"}}},{node:{id:"5e9c7be6d49cf31059bf4829",title:"HOW DO I RECEIVE A GIFT CARD I PURCHASED",category:{title:"Giftcard Trading"}}},{node:{id:"5e9c86f5d49cf31059bf482b",title:"WHAT IS TWO FACTOR AUTHENTICATION",category:{title:"Security"}}},{node:{id:"5e9c89cfd49cf31059bf482f",title:"WHAT IS BVN",category:{title:"Patricia Pay"}}},{node:{id:"5e9c8a4cd49cf31059bf4830",title:"WHY DO I NEED TO UPDATE MY BVN ON THE WEBSITE",category:{title:"Payment"}}},{node:{id:"5e9c8c0dd49cf31059bf4832",title:"WHY DO I NEED TO UPGRADE MY ACCOUNT",category:{title:"Security"}}},{node:{id:"5e9c8d06d49cf31059bf4834",title:"HOW LONG WILL IT TAKE FOR VERIFICATION USING MY GOVERNMENT ISSUED IDENTITY CARD",category:{title:"Payment"}}},{node:{id:"5e9c8d5ed49cf31059bf4835",title:"WHY CAN’T I COME TO YOUR OFFICE TO TRADE",category:{title:"Security"}}},{node:{id:"5e9c8dc5d49cf31059bf4836",title:"WHY CAN’T WE TRADE ON LIVE CHAT OR WHATSAPP",category:{title:"Trading instructions"}}},{node:{id:"5e9c90aad49cf31059bf483c",title:"WHAT GIFT ITEMS DOES PATRICIA SEND",category:{title:"9robee (Patricia Gifts)"}}},{node:{id:"5e9c90f1d49cf31059bf483d",title:"WHAT COUNTRIES DOES PATRICIA DELIVER GIFTS TO",category:{title:"9robee (Patricia Gifts)"}}},{node:{id:"5e9c9126d49cf31059bf483e",title:"DO YOU DO DELIVERIES WITHIN NIGERIA",category:{title:"9robee (Patricia Gifts)"}}},{node:{id:"5e9c9163d49cf31059bf483f",title:"DO YOU DO SAME DAY DELIVERIES",category:{title:"9robee (Patricia Gifts)"}}},{node:{id:"5e9c91a1d49cf31059bf4840",title:"CAN I GET A TRACKING NUMBER AFTER PLACING AN ORDER",category:{title:"9robee (Patricia Gifts)"}}},{node:{id:"5e9c920ad49cf31059bf4841",title:"WILL THE SENDER’S LOCATION BE DISCLOSED WHEN THE ORDER IS PLACED",category:{title:"9robee (Patricia Gifts)"}}},{node:{id:"5e9c9236d49cf31059bf4842",title:"CAN ONE ATTACH A NOTE TO THE GIFT",category:{title:"9robee (Patricia Gifts)"}}},{node:{id:"5e9c9267d49cf31059bf4843",title:"HOW LONG DO DELIVERIES TAKE",category:{title:"9robee (Patricia Gifts)"}}},{node:{id:"5e9c9294d49cf31059bf4844",title:"DO YOU DO NEXT DAY DELIVERIES",category:{title:"9robee (Patricia Gifts)"}}},{node:{id:"5e9c92dad49cf31059bf4845",title:"WHAT GIFT ITEMS DO YOU DELIVER TO NIGERIA",category:{title:"9robee (Patricia Gifts)"}}},{node:{id:"5e9c9311d49cf31059bf4846",title:"DO YOU OFFER PICK UP/ COURIER SERVICES",category:{title:"9robee (Patricia Gifts)"}}},{node:{id:"5eaaf41aeca0dd487ca5df67",title:"WHAT IS 'AIRTIME TO CASH'",category:{title:"Patricia Refill"}}},{node:{id:"5f803356359eea28866a9b67",title:"james",category:{title:"Bitcoin"}}},{node:{id:"5f80342c359eea28866a9b8a",title:"What are Card Types",category:{title:"Giftcard Trading"}}},{node:{id:"5f898def359eea28866a9ee9",title:"Don't have access to your BVN Phone Number",category:{title:"Security"}}},{node:{id:"5f8dcabe359eea28866aa06a",title:"Have you lost access to your Patricia email",category:{title:"Security"}}}]}},u=function(t){var e=t.options;e.__staticData?e.__staticData.data=s:(e.__staticData=l.default.observable({data:s}),e.computed=f({$static:function(){return e.__staticData.data}},e.computed))},T=Object(r.a)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"faq-hero bg-blue-base",style:t.disableHeading?{minHeight:"300px",paddingTop:"120px"}:{}},[i("div",{staticClass:"flex hero-content  flex-col content-center fadeIn animated"},[t.disableHeading?t._e():i("h1",{staticClass:"text-white heading text-center"},[t._v("\n      Chief, how can we help?\n    ")]),i("form",{staticClass:"faq-form"},[i("div",{staticClass:"input-container"},[i("ClientOnly",[i("TextInput",{attrs:{inputClasses:"faq-input text-smoke-dark rounded",placeholder:"Search the help centre",autocomplete:"off"},on:{input:t.handleInputChange},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}})],1),i("svg",{staticClass:"icon icon-search"},[i("use",{attrs:{"xlink:href":"/assets/icomoon/symbol-defs.svg#icon-search"}})])],1),i("Dropdown",{attrs:{items:t.dropdownItems,isVisible:t.isDropdownVisible},on:{close:t.closeDropdown}})],1),i("QuickSearch",{attrs:{items:t.$static.allTopics.edges.map((function(e){var i=e.node,a=(i.id,i.title);return{text:a,path:"/faq/"+t.setPathName(a)}}))}})],1)])}),[],!1,null,null,null);"function"==typeof u&&u(T);e.a=T.exports},aa9j:function(t,e,i){"use strict";i("dWrq")},cRs8:function(t,e,i){"use strict";var a=i("VTBJ"),c=i("x9sl"),n={name:"dropdown",props:{items:{type:Array,required:!0},isVisible:{type:Boolean,required:!0},styles:{type:Object,default:function(){}}},data:function(){return{resetHeight:!1,height:0}},mixins:[c.mixin],computed:{dropdownStyle:function(){var t=Object(a.a)({},this.styles);return this.isVisible&&(t.transform="translateY(0px)",t.opacity="1",t.visibility="visible",t.WebkitTransform="translateY(0px)"),this.resetHeight&&(t.height=this.height),t}},methods:{away:function(t){this.$emit("close")}},watch:{items:function(t,e){var i=this.items.length;0===i&&this.$emit("close"),i<=5&&0!==i?(this.resetHeight=!0,this.height="".concat(60*this.items.length,"px")):this.resetHeight=!1}}},o=(i("WW7V"),i("KHd+")),d=Object(o.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dropdown-container"},[i("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.away,expression:"away"}],staticClass:"dropdown rounded",style:t.dropdownStyle},[i("ul",t._l(t.items,(function(e){return i("li",{key:e.id,on:{click:function(e){return t.$emit("close")}}},[i("g-link",{staticClass:"flex items-center rounded",attrs:{to:e.url}},[i("svg",{staticClass:"icon icon-p-document"},[i("use",{attrs:{"xlink:href":"/assets/icomoon/symbol-defs.svg#icon-p-document"}})]),t._v("\n          "+t._s(e.title)+"\n        ")])],1)})),0)])])}),[],!1,null,"96dcb5ea",null);e.a=d.exports},dWrq:function(t,e,i){},x9sl:function(t,e,i){"use strict";var a=i("Kw5r");a="default"in a?a.default:a;/^2\./.test(a.version)||a.util.warn("VueClickaway 2.2.2 only supports Vue 2.x, and does not support Vue "+a.version);var c="_vue_clickaway_handler";function n(t,e,i){o(t);var a=i.context,n=e.value;if("function"==typeof n){var d=!1;setTimeout((function(){d=!0}),0),t[c]=function(e){var i=e.path||(e.composedPath?e.composedPath():void 0);if(d&&(i?i.indexOf(t)<0:!t.contains(e.target)))return n.call(a,e)},document.documentElement.addEventListener("click",t[c],!1)}}function o(t){document.documentElement.removeEventListener("click",t[c],!1),delete t[c]}var d={bind:n,update:function(t,e){e.value!==e.oldValue&&n(t,e)},unbind:o},r={directives:{onClickaway:d}};e.version="2.2.2",e.directive=d,e.mixin=r},yq1k:function(t,e,i){"use strict";var a=i("I+eb"),c=i("TWQb").includes,n=i("RNIs");a({target:"Array",proto:!0,forced:!i("rkAj")("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),n("includes")}}]);