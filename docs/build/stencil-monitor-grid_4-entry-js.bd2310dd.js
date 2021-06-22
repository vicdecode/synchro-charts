(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1013:function(t,e,i){"use strict";i.r(e),i.d(e,"monitor_grid",(function(){return b})),i.d(e,"monitor_grid_tooltip",(function(){return f})),i.d(e,"monitor_help_tooltip",(function(){return v})),i.d(e,"monitor_widget_grid",(function(){return j}));var n=i(61),r=i(1130),o=i(1132),a=(i(1131),i(1134),i(1138),i(1143),i(1165)),s=i(1139),l=(i(1151),i(1153),i(1147),i(1141)),c=(i(1161),i(1170)),d=i(1178),u=i(1206),h=i(1179),p=i(1218),m=i(1204),b=function(){function t(t){Object(n.i)(this,t)}return t.prototype.render=function(){return Object(n.h)("div",{class:"grid-wrapper"},Object(n.h)("div",{class:"grid"},Object(n.h)("slot",null)))},t}();b.style="monitor-grid .grid{--widget-min-width:190px;--widget-min-height:100px;display:grid;grid-template-columns:repeat(auto-fit, minmax(var(--widget-min-width), 1fr));grid-auto-rows:minmax(var(--widget-min-height), 1fr);grid-gap:10px;margin:10px}monitor-grid .grid-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center}";var f=function(){function t(t){var e=this;Object(n.i)(this,t),this.displayToolTip=function(){var t=e.el.querySelector(".tooltip-container"),i=e.el.querySelector(".cell-tooltip");null!=i&&null!=t&&(i.style.display="block",e.tooltip=Object(p.b)(t,Object.assign(Object.assign({},p.a),{placement:"left",content:i})))}}return t.prototype.componentDidLoad=function(){this.displayToolTip()},t.prototype.disconnectedCallback=function(){this.tooltip&&this.tooltip.destroy()},t.prototype.render=function(){var t=null!=this.propertyPoint||null!=this.alarmPoint,e=this.breachedThreshold?this.breachedThreshold.color:void 0,i=t&&this.isEnabled;return Object(n.h)("div",{onMouseOver:this.displayToolTip,onFocus:this.displayToolTip,class:"tooltip-container"},Object(n.h)("div",{class:"cell-tooltip awsui-util-container awsui",style:{display:"none"}},Object(n.h)("div",{class:{"awsui-util-container-header":!0,"awsui-util-mb-m":i}},Object(n.h)("h3",null,this.title)),i&&Object(n.h)("div",null,Object(n.h)("div",{class:"awsui-util-spacing-v-s"},this.propertyPoint&&Object(n.h)("div",null,Object(n.h)("div",{class:"awsui-util-label"},"Latest value:"),Object(n.h)("div",null,Object(n.h)("strong",{style:{color:e}},Object(n.h)(h.a,{value:this.propertyPoint.y}))," ","at"," ",new Date(this.propertyPoint.x).toLocaleString("en-US",{hour12:!0,minute:"numeric",hour:"numeric",year:"numeric",month:"numeric",day:"numeric"}))),this.alarmPoint&&Object(n.h)("div",null,Object(n.h)("div",{class:"awsui-util-label"},"Status:"),Object(n.h)("div",null,Object(n.h)("strong",{style:{color:e}},this.alarmPoint.y)," since"," ",new Date(this.alarmPoint.x).toLocaleString("en-US",{hour12:!0,minute:"numeric",hour:"numeric",year:"numeric",month:"numeric",day:"numeric"}),this.breachedThreshold&&this.breachedThreshold.description&&Object(n.h)("div",null,"(",this.breachedThreshold.description,")")))))),Object(n.h)("slot",null))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.g)(this)},enumerable:!0,configurable:!0}),t}(),g=function(){return Object(n.h)("svg",{width:"25px",height:"25px",viewBox:"0 0 30 30"},Object(n.h)("defs",null,Object(n.h)("path",{d:"M14.8742857,24.7485714 C20.3277031,24.7485714 24.7485714,20.3277031 24.7485714,14.8742857 C24.7485714,9.4208683 20.3277031,5 14.8742857,5 C9.4208683,5 5,9.4208683 5,14.8742857 C5,20.3277031 9.4208683,24.7485714 14.8742857,24.7485714 Z M13.64,18.5771429 L16.1566605,18.5771429 L16.1566605,21.0457143 L13.64,21.0457143 L13.64,18.5771429 Z M10.7019512,12.6821943 C10.7134712,12.0601112 10.8200302,11.4898769 11.0216312,10.9714743 C11.2232322,10.4530717 11.5054693,10.0037962 11.8683512,9.62363429 C12.231233,9.24347238 12.6689886,8.94683535 13.1816312,8.73371429 C13.6942737,8.52059322 14.267388,8.41403429 14.9009912,8.41403429 C15.7189152,8.41403429 16.4014684,8.52635316 16.9486712,8.75099429 C17.4958739,8.97563541 17.9365095,9.25499262 18.2705912,9.58907429 C18.6046728,9.92315596 18.8437104,10.2831524 18.9877112,10.6690743 C19.1317119,11.0549962 19.2037112,11.4149926 19.2037112,11.7490743 C19.2037112,12.3020371 19.1317119,12.7570725 18.9877112,13.1141943 C18.8437104,13.4713161 18.6651522,13.776593 18.4520312,14.0300343 C18.2389101,14.2834756 18.0027525,14.4994734 17.7435512,14.6780343 C17.4843499,14.8565952 17.2395523,15.0351534 17.0091512,15.2137143 C16.77875,15.3922752 16.5742721,15.5967531 16.3957112,15.8271543 C16.2171503,16.0575554 16.1546517,16.3455526 16.1085714,16.6911543 L16.1085714,17.3477943 L13.64,17.3477943 L13.64,16.5701943 C13.64,15.9718011 13.7557976,15.6706595 13.9113184,15.3365778 C14.0668391,15.0024962 14.3480301,14.7068355 14.5553912,14.4706743 C14.7627522,14.2345131 14.98163,14.0300351 15.2120312,13.8572343 C15.4424323,13.6844334 15.6555502,13.5116351 15.8513912,13.3388343 C16.0472321,13.1660334 16.2056306,12.9759553 16.3265912,12.7685943 C16.4475518,12.5612332 16.5022712,12.3020358 16.4907512,11.9909943 C16.4907512,11.4610716 16.3611525,11.0693956 16.1019512,10.8159543 C15.8427499,10.562513 15.4827535,10.4357943 15.0219512,10.4357943 C14.7109096,10.4357943 14.4430723,10.4962737 14.2184312,10.6172343 C13.99379,10.7381949 13.8094719,10.8994733 13.6654712,11.1010743 C13.5214704,11.3026753 13.4149115,11.5388329 13.3457912,11.8095543 C13.2766708,12.0802756 13.2421112,12.3711527 13.2421112,12.6821943 L10.7019512,12.6821943 Z",id:"path-1"})),Object(n.h)("g",{fill:"none"},Object(n.h)("rect",{x:"0",y:"0",width:"30",height:"30"}),Object(n.h)("mask",{id:"mask-2",fill:"white"},Object(n.h)("use",{xlinkHref:"#path-1"})),Object(n.h)("g",{id:"Oval"}),Object(n.h)("g",{mask:"url(#mask-2)",fill:"#DEE0E2"},Object(n.h)("rect",{x:"0",y:"0",width:"30",height:"30"}))))},v=function(){function t(t){var e=this;Object(n.i)(this,t),this.displayToolTip=function(){var t=e.el.querySelector(".help-icon"),i=e.el.querySelector('[role="tooltip"]');null!=i&&null!=t&&(i.style.display="block",e.tooltip=Object(p.b)(t,Object.assign(Object.assign({},p.a),{content:i})))}}return t.prototype.disconnectedCallback=function(){this.tooltip&&this.tooltip.destroy()},t.prototype.render=function(){return Object(n.h)("div",{class:"help-icon",tabIndex:-1,onMouseOver:this.displayToolTip,onFocus:this.displayToolTip},Object(n.h)(g,null),Object(n.h)("div",{role:"tooltip",class:"awsui-util-container awsui",style:{display:"none"}},Object(n.h)("div",{class:"awsui-util-spacing-v-s"},Object(n.h)("p",null,this.message))))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.g)(this)},enumerable:!0,configurable:!0}),t}(),y=function(t){return function(t){var e=t.filter((function(t){return t.streamType===r.b.ALARM})),i=t.filter((function(t){return t.streamType!==r.b.ALARM})),n=e.filter((function(t){var e=t.id;return!i.some((function(t){var i=t.associatedStreams;return(void 0===i?[]:i).some((function(t){return t.id===e}))}))})),o=function(){for(var t=0,e=0,i=arguments.length;e<i;e++)t+=arguments[e].length;var n=Array(t),r=0;for(e=0;e<i;e++)for(var o=arguments[e],a=0,s=o.length;a<s;a++,r++)n[r]=o[a];return n}(i,n).map((function(t){return t.id}));return t.filter((function(t){var e=t.id;return o.includes(e)})).filter(s.b)}(t).map((function(e){return e.streamType===r.b.ALARM?[{alarm:e}]:null!=e.associatedStreams&&e.associatedStreams.some((function(t){return t.type===r.b.ALARM}))?(e.associatedStreams||[]).map((function(e){var i=e.id;return t.find((function(t){return t.id===i}))})).filter(s.b).map((function(t){return{property:e,alarm:t}})):[{property:e}]})).flat()},O=o.c.DATA_ALIGNMENT,w=function(t){var e=t.alarm,i=t.property;return i?i.detailedName||i.name:e?e.detailedName||e.name:""},j=function(){function t(t){var e=this;Object(n.i)(this,t),this.collapseVertically=!0,this.isEditing=!1,this.messageOverrides={},this.liveModeOnlyMessage="This visualization displays only live data. Choose a live time frame to display data in this visualization.",this.names=[],this.start=Object(u.b)(this.viewPort),this.end=Object(u.a)(this.viewPort),this.duration=this.viewPort.duration,this.onUpdate=function(t){var i=t.start,n=t.end,r=t.duration;e.start=i,e.end=n,e.duration=r},this.onChangeLabel=function(t){var i=t.streamId,n=t.name;e.names=Object(m.b)(e.names,n,i),e.onWidgetUpdated()},this.getPoints=function(){return Object(c.b)({viewPort:{start:e.start,end:e.end},dataStreams:e.rawData(),selectedDate:e.end,allowMultipleDates:!0,dataAlignment:O.EITHER})},this.getBreachedThreshold=function(t,i){return Object(d.a)({value:t&&t.y,date:e.viewPort.end||new Date,dataStreams:e.dataStreams,dataStream:i,thresholds:Object(l.b)(e.annotations)})},this.rawData=function(){return e.dataStreams.filter((function(t){return 0===t.resolution}))},this.widgetUpdated=Object(n.f)(this,"widgetUpdated",7)}return t.prototype.componentDidLoad=function(){a.b.addChartScene({id:this.widgetId,viewPortGroup:this.viewPort.group,dispose:function(){},updateViewPort:this.onUpdate})},t.prototype.onViewPortChange=function(t){this.onUpdate(Object.assign(Object.assign({},t),{start:Object(u.b)(this.viewPort),end:Object(u.a)(this.viewPort)}))},t.prototype.disconnectedCallback=function(){a.b.removeChartScene(this.widgetId)},t.prototype.onWidgetUpdated=function(){var t=this,e={widgetId:this.widgetId,dataStreams:this.dataStreams.map((function(e){var i=t.names.find((function(t){var i=t.id;return e.id===i})),n=null!=i?i.name:e.name;return{id:e.id,name:n}}))};this.widgetUpdated.emit(e)},t.prototype.render=function(){var t=this,e=null!=this.duration,i=this.getPoints(),r=y(this.dataStreams),o=r.length>1;return Object(n.h)("div",{class:{tall:!this.collapseVertically}},!e&&Object(n.h)("div",{class:"help-icon-container"},Object(n.h)("monitor-help-tooltip",{message:this.liveModeOnlyMessage})),Object(n.h)("monitor-grid",null,r.map((function(r){var a=r.alarm,s=r.property;if(null!=(a||s)){var l=a&&i.find((function(t){return t.streamId===a.id})),c=s&&i.find((function(t){return t.streamId===s.id})),d=l?l.point:void 0,u=c?c.point:void 0,h=d||u,p=a||s,m=h&&p&&t.getBreachedThreshold(h,p),b=a&&t.rawData().find((function(t){return t.id===a.id})),f=a?b:s;return Object(n.h)("monitor-grid-tooltip",{title:w({alarm:a,property:s}),propertyPoint:u,alarmPoint:d,breachedThreshold:m,isEnabled:e},t.renderCell({isEnabled:e,trendStream:s,propertyStream:s,propertyPoint:u,alarmStream:b,alarmPoint:d,breachedThreshold:m,isEditing:t.isEditing,viewPort:{start:t.start,end:t.end},miniVersion:o,onChangeLabel:t.onChangeLabel,messageOverrides:t.messageOverrides,labelsConfig:t.labelsConfig,icon:m?m.icon:void 0,valueColor:m?m.color:void 0,error:f?f.error:void 0,isLoading:f&&f.isLoading||!1,isRefreshing:f&&f.isRefreshing||!1}))}}))))},Object.defineProperty(t,"watchers",{get:function(){return{viewPort:["onViewPortChange"]}},enumerable:!0,configurable:!0}),t}();j.style="monitor-widget-grid .help-icon-container{z-index:100;position:absolute;right:0;top:0}monitor-widget-grid .container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;overflow:auto;position:relative;-ms-overflow-style:none;scrollbar-width:none}monitor-widget-grid .container::-webkit-scrollbar{display:none}"},1194:function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return n}));var n=function(t){var e=t.start,i=t.end,n=t.duration;return e||(i&&null!=n?new Date(i.getTime()-n):null!=n?new Date(Date.now()-n):new Date(Date.now()))},r=function(t){var e=t.start,i=t.end,n=t.duration;return i||(e&&null!=n?new Date(e.getTime()+n):new Date(Date.now()))}},1206:function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return n}));var n=function(t){var e=t.start,i=t.end,n=t.duration;return e||(i&&null!=n?new Date(i.getTime()-n):null!=n?new Date(Date.now()-n):new Date(Date.now()))},r=function(t){var e=t.start,i=t.end,n=t.duration;return i||(e&&null!=n?new Date(e.getTime()+n):new Date(Date.now()))}},872:function(t,e,i){"use strict";i.r(e),i.d(e,"monitor_grid",(function(){return b})),i.d(e,"monitor_grid_tooltip",(function(){return f})),i.d(e,"monitor_help_tooltip",(function(){return v})),i.d(e,"monitor_widget_grid",(function(){return j}));var n=i(60),r=i(42),o=i(68),a=(i(51),i(69),i(1136),i(1142),i(1164)),s=i(1137),l=(i(1150),i(1152),i(1146),i(1140)),c=(i(1158),i(1167)),d=i(1175),u=i(1194),h=i(1176),p=i(1215),m=i(1192),b=function(){function t(t){Object(n.i)(this,t)}return t.prototype.render=function(){return Object(n.h)("div",{class:"grid-wrapper"},Object(n.h)("div",{class:"grid"},Object(n.h)("slot",null)))},t}();b.style="monitor-grid .grid{--widget-min-width:190px;--widget-min-height:100px;display:grid;grid-template-columns:repeat(auto-fit, minmax(var(--widget-min-width), 1fr));grid-auto-rows:minmax(var(--widget-min-height), 1fr);grid-gap:10px;margin:10px}monitor-grid .grid-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center}";var f=function(){function t(t){var e=this;Object(n.i)(this,t),this.displayToolTip=function(){var t=e.el.querySelector(".tooltip-container"),i=e.el.querySelector(".cell-tooltip");null!=i&&null!=t&&(i.style.display="block",e.tooltip=Object(p.b)(t,Object.assign(Object.assign({},p.a),{placement:"left",content:i})))}}return t.prototype.componentDidLoad=function(){this.displayToolTip()},t.prototype.disconnectedCallback=function(){this.tooltip&&this.tooltip.destroy()},t.prototype.render=function(){var t=null!=this.propertyPoint||null!=this.alarmPoint,e=this.breachedThreshold?this.breachedThreshold.color:void 0,i=t&&this.isEnabled;return Object(n.h)("div",{onMouseOver:this.displayToolTip,onFocus:this.displayToolTip,class:"tooltip-container"},Object(n.h)("div",{class:"cell-tooltip awsui-util-container awsui",style:{display:"none"}},Object(n.h)("div",{class:{"awsui-util-container-header":!0,"awsui-util-mb-m":i}},Object(n.h)("h3",null,this.title)),i&&Object(n.h)("div",null,Object(n.h)("div",{class:"awsui-util-spacing-v-s"},this.propertyPoint&&Object(n.h)("div",null,Object(n.h)("div",{class:"awsui-util-label"},"Latest value:"),Object(n.h)("div",null,Object(n.h)("strong",{style:{color:e}},Object(n.h)(h.a,{value:this.propertyPoint.y}))," ","at"," ",new Date(this.propertyPoint.x).toLocaleString("en-US",{hour12:!0,minute:"numeric",hour:"numeric",year:"numeric",month:"numeric",day:"numeric"}))),this.alarmPoint&&Object(n.h)("div",null,Object(n.h)("div",{class:"awsui-util-label"},"Status:"),Object(n.h)("div",null,Object(n.h)("strong",{style:{color:e}},this.alarmPoint.y)," since"," ",new Date(this.alarmPoint.x).toLocaleString("en-US",{hour12:!0,minute:"numeric",hour:"numeric",year:"numeric",month:"numeric",day:"numeric"}),this.breachedThreshold&&this.breachedThreshold.description&&Object(n.h)("div",null,"(",this.breachedThreshold.description,")")))))),Object(n.h)("slot",null))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.g)(this)},enumerable:!0,configurable:!0}),t}(),g=function(){return Object(n.h)("svg",{width:"25px",height:"25px",viewBox:"0 0 30 30"},Object(n.h)("defs",null,Object(n.h)("path",{d:"M14.8742857,24.7485714 C20.3277031,24.7485714 24.7485714,20.3277031 24.7485714,14.8742857 C24.7485714,9.4208683 20.3277031,5 14.8742857,5 C9.4208683,5 5,9.4208683 5,14.8742857 C5,20.3277031 9.4208683,24.7485714 14.8742857,24.7485714 Z M13.64,18.5771429 L16.1566605,18.5771429 L16.1566605,21.0457143 L13.64,21.0457143 L13.64,18.5771429 Z M10.7019512,12.6821943 C10.7134712,12.0601112 10.8200302,11.4898769 11.0216312,10.9714743 C11.2232322,10.4530717 11.5054693,10.0037962 11.8683512,9.62363429 C12.231233,9.24347238 12.6689886,8.94683535 13.1816312,8.73371429 C13.6942737,8.52059322 14.267388,8.41403429 14.9009912,8.41403429 C15.7189152,8.41403429 16.4014684,8.52635316 16.9486712,8.75099429 C17.4958739,8.97563541 17.9365095,9.25499262 18.2705912,9.58907429 C18.6046728,9.92315596 18.8437104,10.2831524 18.9877112,10.6690743 C19.1317119,11.0549962 19.2037112,11.4149926 19.2037112,11.7490743 C19.2037112,12.3020371 19.1317119,12.7570725 18.9877112,13.1141943 C18.8437104,13.4713161 18.6651522,13.776593 18.4520312,14.0300343 C18.2389101,14.2834756 18.0027525,14.4994734 17.7435512,14.6780343 C17.4843499,14.8565952 17.2395523,15.0351534 17.0091512,15.2137143 C16.77875,15.3922752 16.5742721,15.5967531 16.3957112,15.8271543 C16.2171503,16.0575554 16.1546517,16.3455526 16.1085714,16.6911543 L16.1085714,17.3477943 L13.64,17.3477943 L13.64,16.5701943 C13.64,15.9718011 13.7557976,15.6706595 13.9113184,15.3365778 C14.0668391,15.0024962 14.3480301,14.7068355 14.5553912,14.4706743 C14.7627522,14.2345131 14.98163,14.0300351 15.2120312,13.8572343 C15.4424323,13.6844334 15.6555502,13.5116351 15.8513912,13.3388343 C16.0472321,13.1660334 16.2056306,12.9759553 16.3265912,12.7685943 C16.4475518,12.5612332 16.5022712,12.3020358 16.4907512,11.9909943 C16.4907512,11.4610716 16.3611525,11.0693956 16.1019512,10.8159543 C15.8427499,10.562513 15.4827535,10.4357943 15.0219512,10.4357943 C14.7109096,10.4357943 14.4430723,10.4962737 14.2184312,10.6172343 C13.99379,10.7381949 13.8094719,10.8994733 13.6654712,11.1010743 C13.5214704,11.3026753 13.4149115,11.5388329 13.3457912,11.8095543 C13.2766708,12.0802756 13.2421112,12.3711527 13.2421112,12.6821943 L10.7019512,12.6821943 Z",id:"path-1"})),Object(n.h)("g",{fill:"none"},Object(n.h)("rect",{x:"0",y:"0",width:"30",height:"30"}),Object(n.h)("mask",{id:"mask-2",fill:"white"},Object(n.h)("use",{xlinkHref:"#path-1"})),Object(n.h)("g",{id:"Oval"}),Object(n.h)("g",{mask:"url(#mask-2)",fill:"#DEE0E2"},Object(n.h)("rect",{x:"0",y:"0",width:"30",height:"30"}))))},v=function(){function t(t){var e=this;Object(n.i)(this,t),this.displayToolTip=function(){var t=e.el.querySelector(".help-icon"),i=e.el.querySelector('[role="tooltip"]');null!=i&&null!=t&&(i.style.display="block",e.tooltip=Object(p.b)(t,Object.assign(Object.assign({},p.a),{content:i})))}}return t.prototype.disconnectedCallback=function(){this.tooltip&&this.tooltip.destroy()},t.prototype.render=function(){return Object(n.h)("div",{class:"help-icon",tabIndex:-1,onMouseOver:this.displayToolTip,onFocus:this.displayToolTip},Object(n.h)(g,null),Object(n.h)("div",{role:"tooltip",class:"awsui-util-container awsui",style:{display:"none"}},Object(n.h)("div",{class:"awsui-util-spacing-v-s"},Object(n.h)("p",null,this.message))))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.g)(this)},enumerable:!0,configurable:!0}),t}(),y=function(t){return function(t){var e=t.filter((function(t){return t.streamType===r.b.ALARM})),i=t.filter((function(t){return t.streamType!==r.b.ALARM})),n=e.filter((function(t){var e=t.id;return!i.some((function(t){var i=t.associatedStreams;return(void 0===i?[]:i).some((function(t){return t.id===e}))}))})),o=function(){for(var t=0,e=0,i=arguments.length;e<i;e++)t+=arguments[e].length;var n=Array(t),r=0;for(e=0;e<i;e++)for(var o=arguments[e],a=0,s=o.length;a<s;a++,r++)n[r]=o[a];return n}(i,n).map((function(t){return t.id}));return t.filter((function(t){var e=t.id;return o.includes(e)})).filter(s.b)}(t).map((function(e){return e.streamType===r.b.ALARM?[{alarm:e}]:null!=e.associatedStreams&&e.associatedStreams.some((function(t){return t.type===r.b.ALARM}))?(e.associatedStreams||[]).map((function(e){var i=e.id;return t.find((function(t){return t.id===i}))})).filter(s.b).map((function(t){return{property:e,alarm:t}})):[{property:e}]})).flat()},O=o.c.DATA_ALIGNMENT,w=function(t){var e=t.alarm,i=t.property;return i?i.detailedName||i.name:e?e.detailedName||e.name:""},j=function(){function t(t){var e=this;Object(n.i)(this,t),this.collapseVertically=!0,this.isEditing=!1,this.messageOverrides={},this.liveModeOnlyMessage="This visualization displays only live data. Choose a live time frame to display data in this visualization.",this.names=[],this.start=Object(u.b)(this.viewPort),this.end=Object(u.a)(this.viewPort),this.duration=this.viewPort.duration,this.onUpdate=function(t){var i=t.start,n=t.end,r=t.duration;e.start=i,e.end=n,e.duration=r},this.onChangeLabel=function(t){var i=t.streamId,n=t.name;e.names=Object(m.b)(e.names,n,i),e.onWidgetUpdated()},this.getPoints=function(){return Object(c.b)({viewPort:{start:e.start,end:e.end},dataStreams:e.rawData(),selectedDate:e.end,allowMultipleDates:!0,dataAlignment:O.EITHER})},this.getBreachedThreshold=function(t,i){return Object(d.a)({value:t&&t.y,date:e.viewPort.end||new Date,dataStreams:e.dataStreams,dataStream:i,thresholds:Object(l.b)(e.annotations)})},this.rawData=function(){return e.dataStreams.filter((function(t){return 0===t.resolution}))},this.widgetUpdated=Object(n.f)(this,"widgetUpdated",7)}return t.prototype.componentDidLoad=function(){a.b.addChartScene({id:this.widgetId,viewPortGroup:this.viewPort.group,dispose:function(){},updateViewPort:this.onUpdate})},t.prototype.onViewPortChange=function(t){this.onUpdate(Object.assign(Object.assign({},t),{start:Object(u.b)(this.viewPort),end:Object(u.a)(this.viewPort)}))},t.prototype.disconnectedCallback=function(){a.b.removeChartScene(this.widgetId)},t.prototype.onWidgetUpdated=function(){var t=this,e={widgetId:this.widgetId,dataStreams:this.dataStreams.map((function(e){var i=t.names.find((function(t){var i=t.id;return e.id===i})),n=null!=i?i.name:e.name;return{id:e.id,name:n}}))};this.widgetUpdated.emit(e)},t.prototype.render=function(){var t=this,e=null!=this.duration,i=this.getPoints(),r=y(this.dataStreams),o=r.length>1;return Object(n.h)("div",{class:{tall:!this.collapseVertically}},!e&&Object(n.h)("div",{class:"help-icon-container"},Object(n.h)("monitor-help-tooltip",{message:this.liveModeOnlyMessage})),Object(n.h)("monitor-grid",null,r.map((function(r){var a=r.alarm,s=r.property;if(null!=(a||s)){var l=a&&i.find((function(t){return t.streamId===a.id})),c=s&&i.find((function(t){return t.streamId===s.id})),d=l?l.point:void 0,u=c?c.point:void 0,h=d||u,p=a||s,m=h&&p&&t.getBreachedThreshold(h,p),b=a&&t.rawData().find((function(t){return t.id===a.id})),f=a?b:s;return Object(n.h)("monitor-grid-tooltip",{title:w({alarm:a,property:s}),propertyPoint:u,alarmPoint:d,breachedThreshold:m,isEnabled:e},t.renderCell({isEnabled:e,trendStream:s,propertyStream:s,propertyPoint:u,alarmStream:b,alarmPoint:d,breachedThreshold:m,isEditing:t.isEditing,viewPort:{start:t.start,end:t.end},miniVersion:o,onChangeLabel:t.onChangeLabel,messageOverrides:t.messageOverrides,labelsConfig:t.labelsConfig,icon:m?m.icon:void 0,valueColor:m?m.color:void 0,error:f?f.error:void 0,isLoading:f&&f.isLoading||!1,isRefreshing:f&&f.isRefreshing||!1}))}}))))},Object.defineProperty(t,"watchers",{get:function(){return{viewPort:["onViewPortChange"]}},enumerable:!0,configurable:!0}),t}();j.style="monitor-widget-grid .help-icon-container{z-index:100;position:absolute;right:0;top:0}monitor-widget-grid .container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;overflow:auto;position:relative;-ms-overflow-style:none;scrollbar-width:none}monitor-widget-grid .container::-webkit-scrollbar{display:none}"}}]);