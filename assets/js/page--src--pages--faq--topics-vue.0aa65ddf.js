(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"+sOK":function(t,e,s){},"0ALv":function(t,e,s){"use strict";s("+sOK")},QDZX:function(t,e,s){},VsrH:function(t,e,s){"use strict";s.r(e);s("ma9I");var a=s("6ipC"),n=s("Y9eE"),i=s("heA8"),c=s("7Qib"),o={name:"Topics",components:{Layout:a.a,FaqHero:n.a,BreadCrumb:i.a},methods:{faqUrl:function(t){return"/faq/".concat(Object(c.setPathName)(t.category.title),"/").concat(Object(c.setPathName)(t.title))}},computed:{context:function(){return this.$context.topic?this.$context.topic.title:""}}},r=(s("YPWE"),s("KHd+")),l=Object(r.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",[s("Layout",{attrs:{headerTitle:"Help Center"}},[s("FaqHero",{attrs:{disableHeading:""}}),s("section",{staticClass:"faq-topic__section"},[s("BreadCrumb",{attrs:{items:[{path:"/faq",name:"Home"},{path:"/faq/"+t.context.replace(/ /,"-"),name:t.context}]}}),s("div",{staticClass:"faq-topic__content"},[s("h5",{staticClass:"text-gray-200 topic"},[t._v("Topic: "+t._s(t.context))]),s("p",{staticClass:"text-gray-200 sub-text"},[t._v("\n          General information about "+t._s(t.context)+".\n        ")]),s("ul",{staticClass:"faq-topic__lists"},t._l(t.$context.faqs,(function(e){return s("li",{key:e.id},[s("router-link",{staticClass:"text-blue-light",attrs:{to:t.faqUrl(e)}},[s("svg",{staticClass:"icon icon-p-item-list"},[s("use",{attrs:{"xlink:href":"/assets/icomoon/symbol-defs.svg#icon-p-item-list"}})]),t._v("\n              "+t._s(e.title)+"?\n            ")])],1)})),0)])],1)],1)],1)}),[],!1,null,null,null);e.default=l.exports},YPWE:function(t,e,s){"use strict";s("QDZX")},heA8:function(t,e,s){"use strict";var a={name:"bread-crumb",props:{items:{type:Array,required:!0}}},n=(s("0ALv"),s("KHd+")),i=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"bread-crumb flex"},t._l(t.items,(function(e,a){return s("li",{key:a,staticClass:"inline-block"},[s("span",{staticClass:"flex"},[s("g-link",{staticClass:"block font-normal text-smoke-100",class:t.items.length===a+1?"is-active":"",attrs:{to:e.path}},[t._v(t._s(e.name))]),t.items.length!==a+1?s("span",{staticClass:"font-normal text-smoke-100 arrow-right"},[s("svg",{staticClass:"icon icon-p-item-list"},[s("use",{attrs:{"xlink:href":"/assets/icomoon/symbol-defs.svg#icon-p-arrow-right"}})])]):t._e()],1)])})),0)}),[],!1,null,null,null);e.a=i.exports}}]);