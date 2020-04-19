(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-154e6011"],{1:function(t,e){},"38fb":function(t,e,a){"use strict";var l=a("75e9"),n=a.n(l);n.a},7456:function(t,e,a){},"75e9":function(t,e,a){},"90fe":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"Title"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter(e)}},model:{value:t.listQuery.sub_title,callback:function(e){t.$set(t.listQuery,"sub_title",e)},expression:"listQuery.sub_title"}}),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"90px"},attrs:{placeholder:"Status",clearable:""},model:{value:t.listQuery.status,callback:function(e){t.$set(t.listQuery,"status",e)},expression:"listQuery.status"}},t._l(t.statusSelectOptions,(function(t){return a("el-option",{key:t.key,attrs:{label:t.label,value:t.key}})})),1),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("\n      Search\n    ")]),t._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("\n      Add\n    ")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"ID",width:"54"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.id)+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"Title",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.sub_title)+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"Distractor title",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.distractor_title))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"Answer",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.answer)+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"Distractor answer",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.distractor))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"Cover",width:"210"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticClass:"cover",attrs:{src:t.row.cover}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"Video",width:"310"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("video",{staticClass:"video-js",attrs:{id:"myVideo",controls:"","autoplay:true":"",preload:"auto",poster:t.row.cover,width:"200px"}},[a("source",{attrs:{src:t.row.video,type:"video/mp4"}})])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"Level",width:"60",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(1==e.row.level?"简单":2==e.row.level?"中等":"困难")+"\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"Status",width:"70",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(1==e.row.status?"有效":"无效")+"\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"Created Date",width:"156"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.created_at))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"Updated Date",width:"156"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.updated_at))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"Actions",align:"center",width:"80","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.row;return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleUpdate(l)}}},[t._v("\n          Edit\n        ")])]}}])})],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.current_page,limit:t.listQuery.per_page},on:{"update:page":function(e){return t.$set(t.listQuery,"current_page",e)},"update:limit":function(e){return t.$set(t.listQuery,"per_page",e)},pagination:t.fetchData}}),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"350px","margin-left":"20px"},attrs:{rules:t.rules,model:t.temp,"label-position":"left","label-width":"80px"}},[a("el-form-item",{attrs:{label:"Title",prop:"title"}},[a("el-input",{model:{value:t.temp.sub_title,callback:function(e){t.$set(t.temp,"sub_title",e)},expression:"temp.sub_title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"Answer",prop:"answer"}},[a("el-input",{model:{value:t.temp.answer,callback:function(e){t.$set(t.temp,"answer",e)},expression:"temp.answer"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"Distractor",prop:"distractor"}},[a("el-input",{model:{value:t.temp.distractor,callback:function(e){t.$set(t.temp,"distractor",e)},expression:"temp.distractor"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"Status",prop:"status"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:t.temp.status,callback:function(e){t.$set(t.temp,"status",e)},expression:"temp.status"}},t._l(t.statusOptions,(function(t){return a("el-option",{key:t.key,attrs:{label:t.label,value:t.key}})})),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"Level",prop:"level"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:t.temp.level,callback:function(e){t.$set(t.temp,"level",e)},expression:"temp.level"}},t._l(t.levelOptions,(function(t){return a("el-option",{key:t.key,attrs:{label:t.label,value:t.key}})})),1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("\n        Cancel\n      ")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){"create"===t.dialogStatus?t.createData():t.updateData()}}},[t._v("\n        Confirm\n      ")])],1)],1)],1)},n=[],i=(a("20d6"),a("f0e2")),s=a("2b0e"),o=(a("fda2"),a("b775"));function r(t){return Object(o["a"])({url:"/admin/question/list",method:"get",params:t})}function u(t){return Object(o["a"])({url:"/admin/question/update",method:"post",params:t})}function c(t){return Object(o["a"])({url:"/admin/question/add",method:"post",params:t})}var d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},p=[];a("c5f6");Math.easeInOutQuad=function(t,e,a,l){return t/=l/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var f=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function m(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function b(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function v(t,e,a){var l=b(),n=t-l,i=20,s=0;e="undefined"===typeof e?500:e;var o=function t(){s+=i;var o=Math.easeInOutQuad(s,l,n,e);m(o),s<e?f(t):a&&"function"===typeof a&&a()};o()}var h={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&v(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&v(0,800)}}},g=h,y=(a("e498"),a("2877")),_=Object(y["a"])(g,d,p,!1,null,"6af373ef",null),w=_.exports;s["default"].prototype.$video=i["a"];var k={components:{Pagination:w},filters:{statusFilter:function(t){var e={published:"success",draft:"gray",deleted:"danger"};return e[t]}},data:function(){return{list:null,listLoading:!0,total:0,listQuery:{current_page:1,per_page:20,status:0,sub_title:""},statusSelectOptions:[{label:"全部",key:0},{label:"有效",key:1},{label:"无效",key:2}],statusOptions:[{label:"有效",key:1},{label:"无效",key:2}],levelOptions:[{label:"简单",key:1},{label:"中等",key:2},{label:"困难",key:3}],dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},temp:{id:void 0,status:1,sub_title:"",distractor_title:"",answer:"",distractor:"",level:1},rules:{}}},created:function(){this.fetchData()},mounted:function(){},methods:{fetchData:function(){var t=this;this.listLoading=!0,r(this.listQuery).then((function(e){t.list=e.data.list,t.total=e.data.pageInfo&&e.data.pageInfo.total,t.listLoading=!1}))},handleFilter:function(){this.listQuery.current_page=1,this.fetchData()},resetTemp:function(){this.temp={id:void 0,status:1,sub_title:"",distractor_title:"",answer:"",distractor:"",level:1}},handleCreate:function(){this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0},createData:function(){var t=this;this.$refs["dataForm"].validate((function(e){e&&(t.temp.id=parseInt(100*Math.random())+1024,c(t.temp).then((function(){t.list.unshift(t.temp),t.dialogFormVisible=!1,t.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3})})))}))},handleUpdate:function(t){var e=this;console.log("row>>>",t),this.temp=Object.assign({},t),this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},updateData:function(){var t=this;this.$refs["dataForm"].validate((function(e){if(e){var a=Object.assign({},t.temp);console.log("temp",t.temp),u(a).then((function(){var e=t.list.findIndex((function(e){return e.id===t.temp.id}));t.list.splice(e,1,t.temp),t.dialogFormVisible=!1,t.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})}))}}))},initVideo:function(){this.$video(myVideo,{controls:!0,autoplay:!0,preload:"auto",width:"200px"})}}},S=k,x=(a("38fb"),Object(y["a"])(S,l,n,!1,null,"f28fb1c0",null));e["default"]=x.exports},e498:function(t,e,a){"use strict";var l=a("7456"),n=a.n(l);n.a}}]);