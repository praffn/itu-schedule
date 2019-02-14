(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{199:function(e,t,n){e.exports=n(335)},335:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(16),o=n.n(c),i=n(49),s=n(115),u=n(19),l=n(73),d=n(116),h=n.n(d),m=n(23),E=n(18),f="SET_SCHEDULE";function v(e){return{type:f,schedule:e}}var p="TOGGLE_SHOW_OLD_EVENTS";function O(){return{type:p}}var b="ADD_HIDDEN_COURSE";function g(e){return{type:b,courseId:e}}var C="REMOVE_HIDDEN_COURSE";var y="RESET_HIDDEN_COURSES";function w(){return{type:y}}var j={showOldEvents:!1,schedule:[],hiddenCourses:[]};var S={key:"root",storage:h.a,blacklist:["schedule"]},k=Object(l.a)(S,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(E.a)({},e,{schedule:t.schedule});case p:return Object(E.a)({},e,{showOldEvents:!e.showOldEvents});case b:return Object(E.a)({},e,{hiddenCourses:[].concat(Object(m.a)(e.hiddenCourses),[t.courseId])});case C:return Object(E.a)({},e,{hiddenCourses:e.hiddenCourses.filter(function(e){return e!==t.courseId})});case y:return Object(E.a)({},e,{hiddenCourses:[]});default:return e}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=n(28),_=n.n(D),H=n(45),A=n(46),M=n(47),I=n(50),N=n(48),T=n(51),x=n(5),R=n(119),U=n.n(R),W=n(117),B=n.n(W),F=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],J=["January","February","March","April","May","June","July","August","September","October","November","December"];var L=/Aud 1/,Q=/Aud 2/,V=/Aud 3/,X=/Aud 4/,Z=/Room: .*/;function G(e){return Object(E.a)({id:e.uid,start:new Date(e.dtstart),end:new Date(e.dtend),location:(t=e.location,L.test(t)?"Aud 1":Q.test(t)?"Aud 2":V.test(t)?"Aud 3":X.test(t)?"Aud 4 (4A60)":Z?t.split(",").map(function(e){return e.replace("Room: ","")}).join(", "):t)},function(e){var t=e.split(","),n=function(e){var t=e.match(/\s+:\s+([\w\s]+).\s([\d\w]+)/);return{course:t[1],courseId:t[2]}}(t[1]),r=n.course,a=n.courseId,c=t.reduce(function(e,t){return t.startsWith(" Name: ")?[].concat(Object(m.a)(e),[t.replace(" Name: ","")]):e},[]),o=t.find(function(e){return e.trim().startsWith("Activity: ")});return{course:r,courseId:a,lecturers:c,activity:o?o.replace("Activity: ","").trim():""}}(e.summary));var t}var Y={SWU3:"https://cloud.timeedit.net/itu/web/public/ri6159Z5QQZ96YQ50gQ4ZyQ9Zn550x6.ics"};Object.keys(Y);function z(e){return P.apply(this,arguments)}function P(){return(P=Object(H.a)(_.a.mark(function e(t){var n,r,a;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(Y[t]){e.next=2;break}throw new Error("".concat(t," not a valid schedule id"));case 2:return e.next=4,fetch(Y[t]);case 4:return n=e.sent,e.next=7,n.text();case 7:return r=e.sent,a=B.a.parse(r),e.abrupt("return",a[2].map(function(e){return G(function(e){for(var t={},n=0;n<e[1].length;n++)t[e[1][n][0]]=e[1][n][3];return t}(e))}).sort(function(e,t){return new Date(e.start)-new Date(t.start)}));case 10:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function $(e){return e.reduce(function(e,t){var n=e.find(function(e){return n=e.date,r=t.start,n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()&&n.getDate()===r.getDate();var n,r});return n?e.map(function(e){return e.date===n.date?Object(E.a)({},e,{events:[].concat(Object(m.a)(e.events),[t])}):e}):[].concat(Object(m.a)(e),[{date:t.start,events:[t]}])},[])}var q=n(17),K=n(20),ee=n(118),te=n.n(ee);function ne(e){var t=e.getHours().toString().padStart(2,"0"),n=e.getMinutes().toString().padStart(2,"0");return"".concat(t,":").concat(n)}var re=function(e){function t(e){var n;return Object(A.a)(this,t),(n=Object(I.a)(this,Object(N.a)(t).call(this,e))).state={moreButtonAnchorEl:null},n.handleMoreClick=n.handleMoreClick.bind(Object(q.a)(Object(q.a)(n))),n.handleMenuClose=n.handleMenuClose.bind(Object(q.a)(Object(q.a)(n))),n.handleHideCourseClick=n.handleHideCourseClick.bind(Object(q.a)(Object(q.a)(n))),n}return Object(T.a)(t,e),Object(M.a)(t,[{key:"handleMoreClick",value:function(e){this.setState({moreButtonAnchorEl:e.currentTarget})}},{key:"handleMenuClose",value:function(){this.setState({moreButtonAnchorEl:null})}},{key:"handleHideCourseClick",value:function(){this.props.onHideCourse(this.props.courseId)}},{key:"render",value:function(){var e=this.props,t=e.course,n=e.start,r=e.location,c=e.activity,o=(e.courseId,e.classes),i=e.id,s=e.lecturers,u=this.state.moreButtonAnchorEl,l=Boolean(u);return a.a.createElement(x.b,null,a.a.createElement(x.d,{title:a.a.createElement(x.f,{container:!0,justify:"space-between",alignItems:"center"},a.a.createElement(x.f,{item:!0},a.a.createElement(x.m,{variant:"h4"},t)),a.a.createElement(x.f,{item:!0},a.a.createElement(x.m,{variant:"h5"},ne(n)))),subheader:c,action:a.a.createElement(a.a.Fragment,null,a.a.createElement(x.g,{onClick:this.handleMoreClick},a.a.createElement(te.a,null)),a.a.createElement(x.h,{id:"menu-".concat(i),anchorEl:u,open:l,onClose:this.handleMenuClose},a.a.createElement(x.i,{onClick:this.handleHideCourseClick},"Hide this course")))}),a.a.createElement(x.c,null,a.a.createElement(x.m,{className:o.location},r,a.a.createElement("br",null),s.length>0?s.join(", "):"")))}}]),t}(r.Component);re.defaultProps={location:"No location",activity:"Misc."};var ae=Object(K.withStyles)({activity:{fontSize:14},time:{fontSize:18}})(re),ce=function(e){var t=e.date,n=e.events,r=e.onHideCourse;return a.a.createElement(x.f,{container:!0,direction:"column",spacing:16},a.a.createElement(x.f,{item:!0,style:{marginTop:"4rem"}},a.a.createElement(x.m,{variant:"h2"},function(e){return F[e.getDay()]}(t)),a.a.createElement(x.m,{variant:"h5"},function(e){return J[e.getMonth()]}(t)," ",t.getDate())),a.a.createElement(x.f,{item:!0},a.a.createElement(x.f,{container:!0,direction:"column",spacing:16},n.map(function(e){return a.a.createElement(x.f,{item:!0,key:e.id},a.a.createElement(ae,Object.assign({},e,{onHideCourse:r})))}))))},oe=function(e){var t=e.schedule,n=e.onHideCourse;return a.a.createElement("div",null,t.map(function(e){return a.a.createElement(ce,Object.assign({key:e.date.toString()},e,{onHideCourse:n}))}))},ie=function(e){function t(){return Object(A.a)(this,t),Object(I.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){var e=Object(H.a)(_.a.mark(function e(){var t;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=$,e.next=3,z("SWU3");case 3:e.t1=e.sent,t=(0,e.t0)(e.t1),this.props.setSchedule(t);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.showOldEvents,n=e.schedule,r=e.hiddenCourses,c=e.resetHiddenCourses,o=n.reduce(function(e,t){var n=t.events.filter(function(e){return!r.includes(e.courseId)});return 0===n.length?e:[].concat(Object(m.a)(e),[Object(E.a)({},t,{events:n})])},[]),i=t?o:o.filter(function(e){return t=e.date,!(new Date(t.toDateString())<new Date((new Date).toDateString()));var t});return a.a.createElement(a.a.Fragment,null,a.a.createElement(x.e,null),a.a.createElement(x.a,{position:"static"},a.a.createElement(x.k,null,a.a.createElement(x.m,{variant:"h6",color:"inherit",style:{flexGrow:1}},"ITU Schedule"),a.a.createElement(x.l,{title:"Reset hidden courses"},a.a.createElement(x.g,{color:"default",onClick:c},a.a.createElement(U.a,null))),a.a.createElement(x.l,{title:"Show old events"},a.a.createElement(x.j,{checked:t,onChange:this.props.toggleShowOldEvents})))),a.a.createElement("main",{style:{maxWidth:"600px",margin:"0 auto",padding:"1rem"}},a.a.createElement(oe,{hiddenCourses:this.props.hiddenCourses,schedule:i,onHideCourse:this.props.addHiddenCourse})))}}]),t}(r.Component),se=Object(i.b)(function(e){return{showOldEvents:e.showOldEvents,schedule:e.schedule,hiddenCourses:e.hiddenCourses}},function(e){return Object(u.a)({toggleShowOldEvents:O,setSchedule:v,addHiddenCourse:g,resetHiddenCourses:w},e)})(ie),ue=function(){var e=Object(u.c)(k,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());return{store:e,persistor:Object(l.b)(e)}}(),le=ue.store,de=ue.persistor;console.log(le,de),o.a.render(a.a.createElement(i.a,{store:le},a.a.createElement(s.a,{loading:null,persistor:de},a.a.createElement(se,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[199,1,2]]]);
//# sourceMappingURL=main.cb505e00.chunk.js.map