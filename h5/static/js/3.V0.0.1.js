webpackJsonp([3],{"2NXm":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"main"},[s("div",{staticClass:"swiperBox",attrs:{id:"swiper"}},[s("mt-swipe",t._l(t.list,function(t,i){return s("mt-swipe-item",{key:i},[t.url?s("router-link",{attrs:{to:{name:"extraLink",query:{title:t.name,url:t.url}}}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy.swiper",value:t.imgUrl,expression:"item.imgUrl",modifiers:{swiper:!0}}]})]):s("img",{attrs:{src:t.imgUrl}})],1)}),1)],1),t._v(" "),s("div",{staticClass:"pd30"},[s("h2",{staticClass:"tc"},[t._v("经典案例")]),t._v(" "),s("router-link",{attrs:{to:{name:"index"}}},[s("div",{staticClass:"cover-item border-bottom pd30"},[s("div",{staticClass:"cover"},[s("img",{attrs:{src:"https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg",alt:""}})]),t._v(" "),s("div",{staticClass:"info"},[s("div",[s("p",{staticClass:"title ellipsis-1"},[t._v("标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题")]),t._v(" "),s("div",{staticClass:"desc ellipsis-2"},[t._v("两行简介两行简介两行简介两行简介两行简介两行简介两行简介两行简简简")])]),t._v(" "),s("div",{staticClass:"tip"},[s("span",{staticClass:"tip-left"},[t._v("2018-02-01")]),t._v(" "),s("span",{staticClass:"tip-right"},[t._v("456")])])])])])],1)])},staticRenderFns:[]};var a=s("VU/8")({data:function(){return{list:[]}},created:function(){this.getBannerList()},methods:{getBannerList:function(){var t=this;this.$store.dispatch("getSlideList",{}).then(function(i){t.list=i.info})}}},e,!1,function(t){s("ivrj")},"data-v-36a1b8d3",null);i.default=a.exports},ivrj:function(t,i){}});