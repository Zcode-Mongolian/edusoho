(window.webpackJsonp=window.webpackJsonp||[]).push([["testpaperIntro"],{3025:function(t,e,i){"use strict";i.r(e),i("8e6e"),i("ac6a"),i("456d"),i("e17f");var n=i("2241"),r=(i("c5f6"),i("e7e5"),i("d399")),s=i("bd86"),a=i("3ce7"),o=i("2f62"),c=i("0d25"),l=i("b7cf"),u=i("c8a5"),p=i("7c97");function h(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?h(Object(i),!0).forEach((function(e){Object(s.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):h(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var m={name:"TestpaperIntro",mixins:[l.a,u.a],components:{OutFocusMask:p.a},data:function(){return{enable_facein:"",testpaper:null,testpaperTitle:"",info:{},startTime:null,limitTime:null,score:null,total:0,testId:null,targetId:null,counts:{},result:null,question_type_seq:[],answerName:null,timeName:null,answer:null,time:null,obj:{single_choice:"courseLearning.singleChoice",choice:"courseLearning.choice",essay:"courseLearning.essay",uncertain_choice:"courseLearning.uncertainChoice",determine:"courseLearning.determine",fill:"courseLearning.fill",material:"courseLearning.material"}}},computed:d({sum:function(){var t=0;for(var e in this.counts)t+=parseInt(this.counts[e]);return t},disabled:function(){var t=(new Date).getTime();return this.startTime>t}},Object(o.e)({isLoading:function(t){return t.isLoading},user:function(t){return t.user},selectedPlanId:function(t){return t.course.selectedPlanId}})),mounted:function(){this.initReport(),this.getInfo()},beforeRouteEnter:function(t,e,i){document.getElementById("app").style.background="#f6f6f6",i()},beforeRouteLeave:function(t,e,i){document.getElementById("app").style.background="",i()},methods:d(d({},Object(o.c)("course",["handExamdo"])),{},{initReport:function(){this.initReportData(this.selectedPlanId,this.$route.query.targetId,"testpaper")},getInfo:function(){var t=this;this.testId=this.$route.query.testId,this.targetId=this.$route.query.targetId,a.a.testpaperIntro({params:{targetId:this.targetId,targetType:"task"},query:{testId:this.testId}}).then((function(e){t.counts=e.items,t.testpaperTitle=e.task.title,t.testpaper=e.testpaper,t.result=e.testpaperResult,t.info=e.task.activity.testpaperInfo,t.enable_facein=e.task.enable_facein,t.score=t.testpaper.score,t.startTime=1e3*parseInt(t.info.startTime),t.limitTime=parseInt(t.info.limitTime),t.question_type_seq=t.testpaper.metas.question_type_seq,t.canDoing(t.result,t.user.id).then((function(){t.startTestpaper()})).catch((function(e){var i=e.answer,n=e.endTime;t.submitExam(i,n)}))})).catch((function(t){r.a.fail(t.message)}))},submitExam:function(t,e){var i=this;e=e||(new Date).getTime();var n={answer:t,resultId:this.result.id,userId:this.user.id,beginTime:Number(this.result.beginTime),endTime:e};this.handExamdo(n).then((function(t){i.showResult()})).catch((function(t){r.a.fail(t.message)}))},startTestpaper:function(){1===this.enable_facein?n.a.alert({title:"",confirmButtonText:this.$t("courseLearning.iKnow"),message:"本场考试已开启云监考，暂不支持在移动端答题，请前往PC端进行答题。"}).then((function(){})):this.goDoTestpaper()},goDoTestpaper:function(){this.$router.push({name:"testpaperDo",query:{testId:this.testId,targetId:this.targetId,title:this.testpaperTitle,action:"do"},params:{KeepDoing:!0}})},showResult:function(){this.$router.push({name:"testpaperResult",query:{resultId:this.result.id,testId:this.testId,targetId:this.targetId}})},formateStartTime:function(t){return Object(c.formatTime)(new Date(t))}})},f=i("0c7c"),v=Object(f.a)(m,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("out-focus-mask",{attrs:{type:t.outFocusMaskType,isShow:t.isShowOutFocusMask,reportType:t.reportType},on:{outFocusMask:t.outFocusMask}}),t.isLoading?i("e-loading"):t._e(),i("div",{staticClass:"intro-body"},[i("van-panel",{staticClass:"panel intro-panel",attrs:{title:t.$t("courseLearning.testName")}},[i("div",{staticClass:"intro-panel__content intro-panel__content--title"},[t._v("\n        "+t._s(t.testpaperTitle)+"\n      ")])]),t.startTime?i("van-panel",{staticClass:"panel intro-panel",attrs:{title:t.$t("courseLearning.openingTime")}},[i("div",{class:["intro-panel__content",t.result||!t.disabled?"":"intro-tip"]},[t._v("\n        "+t._s(t.formateStartTime(t.startTime))+"\n      ")])]):t._e(),i("van-panel",{staticClass:"panel intro-panel",attrs:{title:t.$t("courseLearning.examinationDuration")}},[t.limitTime?i("div",{class:["intro-panel__content",t.result||!t.disabled?"":"intro-tip"]},[t._v("\n        "+t._s(t.limitTime)+"\n        "+t._s(t.$t("courseLearning.minutes"))+"\n        "+t._s("    ("+t.$t("courseLearning.tips")+")")+"\n      ")]):i("div",{staticClass:"intro-panel__content"},[t._v(t._s(t.$t("courseLearning.noRestrictions")))])]),i("van-panel",{staticClass:"panel intro-panel",attrs:{title:t.$t("courseLearning.fullScoreOfTestPaper")}},[i("div",{staticClass:"intro-panel__content"},[t._v(t._s(t.$t("courseLearning.fullMark",{number:t.score})))])]),i("van-panel",{staticClass:"panel intro-panel",attrs:{title:t.$t("courseLearning.numberOfTopics")}},[i("div",{staticClass:"intro-panel__content"},[i("van-cell",{staticClass:"intro-cell intro-cell--total",attrs:{border:!1,value:""+t.sum+t.$t("courseLearning.topic"),title:t.$t("courseLearning.total")}}),t._l(t.question_type_seq,(function(e){return i("van-cell",{key:e,staticClass:"intro-cell",attrs:{border:!1,title:t.$t(t.obj[e]),value:""+t.counts[e]+t.$t("courseLearning.topic")}})}))],2)])],1),i("div",{staticClass:"intro-footer"},[t.result?i("van-button",{staticClass:"intro-footer__btn",attrs:{type:"primary"},on:{click:t.showResult}},[t._v(t._s(t.$t("courseLearning.viewResult")))]):i("van-button",{staticClass:"intro-footer__btn",attrs:{disabled:t.disabled,type:"primary"},on:{click:function(e){return t.startTestpaper()}}},[t._v(t._s(t.$t("courseLearning.startTheExam")))])],1)],1)}),[],!1,null,null,null);e.default=v.exports},"7c97":function(t,e,i){"use strict";var n={props:{type:{type:String,default:""},isShow:{type:Boolean,default:!1},reportType:{type:String,default:""}},methods:{onKeepLearning:function(t){this.$emit("outFocusMask",t)}}},r=i("0c7c"),s=Object(r.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isShow?i("div",{staticClass:"out-focus-mask"},[i("div",{staticClass:"report-go-back",on:{click:function(e){return t.$router.go(-1)}}},[i("van-icon",{attrs:{name:"arrow-left",size:"25",color:"#43bc60"}})],1),"kick_previous"===t.type?[i("div",{staticClass:"content"},[t._m(0),i("van-button",{attrs:{color:"#43bc60",size:"small"},on:{click:function(e){return t.onKeepLearning("kick_previous")}}},[t._v("\n        继续学习\n      ")])],1)]:t._e(),"reject_current"===t.type?[t._m(1)]:t._e()],2):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tips"},[e("p",{staticClass:"kick-each-other"},[this._v("请勿同时多开任务学习")]),e("p",{staticClass:"kick-each-other"},[this._v("不要一心多用哦！")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("div",{staticClass:"tips"},[e("p",{staticClass:"kick-each-other"},[this._v("请勿同时多开任务学习")]),e("p",{staticClass:"kick-each-other"},[this._v("不要一心多用哦！")])])])}],!1,null,null,null);e.a=s.exports},b7cf:function(t,e,i){"use strict";i("c5f6"),i("e17f");var n=i("2241");i("456d"),i("ac6a"),e.a={methods:{canDoing:function(t,e){return new Promise((function(i,r){if(t&&"doing"===t.status){var s="".concat(e,"-").concat(t.id),a=JSON.parse(localStorage.getItem(s));a=a?Object.keys(a).forEach((function(t){a[t]=a[t].filter((function(t){return""!==t}))})):{},n.a.confirm({title:"提示",cancelButtonText:"放弃考试",confirmButtonText:"继续考试",message:"您有未完成的考试，是否继续？"}).then((function(){if(Number(t.limitedTime)>0){var e=Math.ceil(((new Date).getTime()-1e3*t.beginTime)/1e3/60);if(Number(e)>Number(t.limitedTime)){var n=Number(1e3*t.beginTime)+Number(60*t.limitedTime*1e3);return void r({answer:a,endTime:n})}}i()})).catch((function(){r({answer:a,endTime:null})}))}}))}}}},c8a5:function(t,e,i){"use strict";i("6762"),i("2fdb");var n=i("3ce7"),r=i("faa5");e.a={data:function(){return{reportIntervalTime:null,reportLearnTime:null,reportFinishCondition:null,reportData:{courseId:null,taskId:null},reportResult:null,isFinish:!1,reportType:null,learnTime:0,isShowOutFocusMask:!1,outFocusMaskType:"",sign:"",record:{},absorbed:0,learnedTime:0}},beforeRouteLeave:function(t,e,i){this.sign.length>0&&localStorage.setItem("flowSign",this.sign),i()},beforeDestroy:function(){this.clearReportIntervalTime(),window.removeEventListener("beforeunload",this.onbeforeunloadFlowSign),this.toggleReportMaskHidden("remove")},methods:{initReportData:function(t,e,i){var n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];this.clearReportIntervalTime(),this.reportData={courseId:t,taskId:e},this.reportType=i,this.isFinish=!1,this.reportIntervalTime=null,this.reportLearnTime=null,this.reportResult=null,this.learnTime=0,this.reportFinishCondition=null,n&&this.initReportEvent(),this.onbeforeunload()},initReportEvent:function(){this.reprtData(),this.intervalReportData(),this.intervalReportLearnTime()},getCourseData:function(t,e){var i=this,r={courseId:t,taskId:e};return new Promise((function(t,e){n.a.getCourseData({query:r}).then((function(e){i.reportFinishCondition=e.activity.finishCondition,t(e)})).catch((function(t){e(t)}))}))},reprtData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{eventName:"doing",ContinuousReport:!1,watchTime:null};if(null!==this.reportData.courseId&&null!==this.reportData.taskId&&(!this.isFinish||t.ContinuousReport))if(""===this.sign){var e={client:"h5"},i=localStorage.getItem("flowSign");i&&(e.lastSign=i,localStorage.removeItem("flowSign")),this.start(t,e)}else this.reportTaskEvent(t)},start:function(t,e){var i=this;n.a.reportTaskEvent({query:{courseId:this.reportData.courseId,taskId:this.reportData.taskId,eventName:"start"},data:e}).then((function(e){if(i.handleReportResult(e),e.learnControl.allowLearn)i.sign=e.record.flowSign,i.record=e.record,i.reportTaskEvent(t);else{var n=e.learnControl.denyReason;i.reportJudge(n)}}))},reportTaskEvent:function(t){var e=this;if(0!==this.sign.length){var i={client:"h5",sign:this.sign,duration:this.learnTime,status:this.absorbed};if(t.reActive&&(i.reActive=t.reActive),this.sourceType&&"video"===this.sourceType){var r=parseInt(this.nowWatchTime-this.lastWatchTime);this.lastWatchTime=this.nowWatchTime;var s={watchData:{duration:r}};i=Object.assign(i,s)}this.learnTime=0,n.a.reportTaskEvent({query:{courseId:this.reportData.courseId,taskId:this.reportData.taskId,eventName:t.eventName},data:i}).then((function(t){if(e.handleReportResult(t),e.record=t.record,e.absorbed=0,e.sign=t.record.flowSign,!t.learnControl.allowLearn){var i=t.learnControl.denyReason;e.reportJudge(i)}})).catch((function(t){e.clearReportIntervalTime()}))}},handleReportResult:function(t){this.reportResult=t,this.learnedTime=t.learnedTime,t.taskResult&&"finish"===t.taskResult.status?(this.isFinish=!0,this.$store.commit(r.z,"finish"),this.$store.commit("course/".concat(r.D),t.completionRate)):this.$store.commit(r.z,"start")},intervalReportLearnTime:function(){var t=this;this.reportLearnTime=setInterval((function(){t.checkoutTime(),t.learnTime++}),1e3)},intervalReportData:function(){var t=this,e=60*(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)*1e3;this.reportIntervalTime=setInterval((function(){t.reprtData({eventName:"doing",ContinuousReport:!0})}),e)},checkoutTime:function(){this.reportFinishCondition&&["time","watchTime"].includes(this.reportFinishCondition.type)&&parseInt(this.learnTime/60,10)>=parseInt(this.reportFinishCondition.data,10)&&this.reprtData({eventName:"finish",ContinuousReport:!0})},clearReportIntervalTime:function(){clearInterval(this.reportIntervalTime),clearInterval(this.reportLearnTime),this.reportIntervalTime=null,this.reportLearnTime=null},reportJudge:function(t){"kick_previous"===t?this.kickEachOther("kick_previous"):"reject_current"===t&&(this.clearReportIntervalTime(),this.kickEachOther("reject_current"))},outFocusMask:function(t){this.absorbed=1,this.isShowOutFocusMask=!1,!this.player||"video"!==this.reportType&&"audio"!==this.reportType||this.player.play(),this.toggleReportMaskHidden("remove"),this.reprtData({eventName:"doing",ContinuousReport:!0,reActive:1})},kickEachOther:function(t){if(this.absorbed=1,"testpaper"!==this.reportType&&"live"!==this.reportType&&"homework"!==this.reportType||"kick_previous"!==t){if(this.isShowOutFocusMask=!0,this.outFocusMaskType=t,"video"===this.reportType||"audio"===this.reportType){if(this.player&&this.player.destory&&"reject_current"===t)return void this.player.destory();this.player&&this.player.pause&&this.player.pause()}this.toggleReportMaskHidden("add")}},ineffectiveLearning:function(t){this.isShowOutFocusMask||(this.absorbed=0,this.isShowOutFocusMask=!0,this.outFocusMaskType=t,this.player&&"video"===this.reportType&&this.player.pause(),this.reprtData({eventName:"doing",ContinuousReport:!0}))},toggleReportMaskHidden:function(t){"video"!==this.reportType&&"audio"!==this.reportType&&("add"===t?document.getElementsByTagName("body")[0].classList.add("report-mask-hidden"):"remove"===t&&document.getElementsByTagName("body")[0].classList.remove("report-mask-hidden"))},initVisibilitychange:function(){document.addEventListener("visibilitychange",this.visibilityState)},visibilityState:function(){"video"===this.reportType&&("hidden"===document.visibilityState?this.ineffectiveLearning("ineffective_learning"):"visible"===document.visibilityState&&this.player.pause())},onbeforeunload:function(){window.addEventListener("beforeunload",this.onbeforeunloadFlowSign)},onbeforeunloadFlowSign:function(){this.sign.length>0&&localStorage.setItem("flowSign",this.sign)}}}}}]);