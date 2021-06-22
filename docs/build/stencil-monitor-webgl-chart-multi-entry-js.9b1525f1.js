(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{1081:function(t,e,n){"use strict";n.r(e),n.d(e,"monitor_webgl_chart_multi",(function(){return d}));var r=n(64),i=n(43),o=(n(144),n(71),n(105),n(52),n(72),"group"),a=new Date(1998,0,0),u=new Date(2e3,0,1),c={x:new Date((a.getTime()+u.getTime())/2).getTime(),y:2500},d=function(){function t(t){Object(r.i)(this,t)}return t.prototype.render=function(){return Object(r.h)("div",{id:"chart-container",style:{border:"1px solid lightgray",height:"500px",width:"500px"}},Object(r.h)("monitor-line-chart",{widgetId:"widget-a",dataStreams:[{id:"test",color:"black",name:"test stream",data:[c],resolution:0,dataType:i.a.NUMBER}],viewPort:{start:a,end:u,yMin:0,yMax:5e3,group:o}}),Object(r.h)("monitor-line-chart",{widgetId:"widget-b",dataStreams:[{id:"test",color:"black",name:"test stream",data:[c],resolution:0,dataType:i.a.NUMBER}],size:{height:150,width:500},viewPort:{start:a,end:u,yMin:0,yMax:5e3,group:o}}),Object(r.h)("monitor-webgl-context",null))},t}()},1137:function(t,e,n){"use strict";var r,i;n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return a})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return c})),function(t){t.NUMBER="NUMBER",t.STRING="STRING",t.BOOLEAN="BOOLEAN"}(r||(r={})),function(t){t.ALARM="ALARM",t.ANOMALY="ANOMALY"}(i||(i={}));var o={liveTimeFrameValueLabel:"Value",historicalTimeFrameValueLabel:"Value",noDataStreamsPresentHeader:"No properties or alarms",noDataStreamsPresentSubHeader:"This widget doesn't have any properties or alarms.",noDataPresentHeader:"No data",noDataPresentSubHeader:"There's no data to display for this time range."},a="round",u=3,c="M 2 2 H 15",d="1, 5"},1138:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return u}));var r="-",i="No properties or alarms",o="This widget doesn't have any properties or alarms.",a="No data",u="There's no data to display for this time range."},1139:function(t,e,n){"use strict";var r,i,o;n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),function(t){t.LESS_THAN="LT",t.GREATER_THAN="GT",t.LESS_THAN_EQUAL="LTE",t.GREATER_THAN_EQUAL="GTE",t.EQUAL="EQ"}(r||(r={})),function(t){!function(t){t.EITHER="EITHER",t.RIGHT="RIGHT",t.LEFT="LEFT"}(t.DATA_ALIGNMENT||(t.DATA_ALIGNMENT={}))}(i||(i={})),function(t){t.ERROR="error",t.ACTIVE="active",t.NORMAL="normal",t.ACKNOWLEDGED="acknowledged",t.SNOOZED="snoozed",t.DISABLED="disabled",t.LATCHED="latched"}(o||(o={}))},1140:function(t,e,n){"use strict";var r,i;n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r})),function(t){t.TimeSeries="time-series",t.Log="log",t.Linear="linear"}(r||(r={})),function(t){t.RIGHT="RIGHT",t.BOTTOM="BOTTOM"}(i||(i={}))},1141:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return d})),n.d(e,"h",(function(){return s}));var r=1e3,i=60*r,o=60*i,a=24*o,u=30*a,c=12*u,d=function(t){if(t<0)throw new Error("Time cannot be negative!");var e=Math.floor(t/1e3),n=Math.floor(e/60),r=Math.floor(n/60);return{day:Math.floor(r/24),hour:r%=24,minute:n%=60,seconds:e%=60}},s=function(t,e,n){var r=n.start,c=n.end.getTime()-r.getTime();return e<o?c<i?t.toLocaleString("en-US",{minute:"numeric",second:"numeric"}):c<=10*i?t.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):c<=o?t.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):c<=a?t.toLocaleString("en-US",{hour12:!0,hour:"numeric",month:"numeric",minute:"numeric",day:"numeric"}):c<=u?t.toLocaleString("en-US",{hour12:!0,hour:"numeric",year:"numeric",month:"numeric",day:"numeric"}):t.toLocaleString("en-US",{day:"numeric",month:"numeric",year:"numeric"}):e<=o?t.toLocaleString("en-US",{hour:"numeric",day:"numeric",month:"numeric",hour12:!0}):e<a?t.toLocaleString("en-US",{day:"numeric",month:"numeric"}):t.toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric"})}},1142:function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return r})),n(1137),n(1139),n(1140),n(1138),n(1141),function(t){t.LINEAR="linear-regression"}(r||(r={}))},940:function(t,e,n){"use strict";n.r(e),n.d(e,"monitor_webgl_chart_multi",(function(){return d}));var r=n(63),i=n(1137),o=(n(1142),n(1139),n(1140),n(1138),n(1141),"group"),a=new Date(1998,0,0),u=new Date(2e3,0,1),c={x:new Date((a.getTime()+u.getTime())/2).getTime(),y:2500},d=function(){function t(t){Object(r.i)(this,t)}return t.prototype.render=function(){return Object(r.h)("div",{id:"chart-container",style:{border:"1px solid lightgray",height:"500px",width:"500px"}},Object(r.h)("monitor-line-chart",{widgetId:"widget-a",dataStreams:[{id:"test",color:"black",name:"test stream",data:[c],resolution:0,dataType:i.a.NUMBER}],viewPort:{start:a,end:u,yMin:0,yMax:5e3,group:o}}),Object(r.h)("monitor-line-chart",{widgetId:"widget-b",dataStreams:[{id:"test",color:"black",name:"test stream",data:[c],resolution:0,dataType:i.a.NUMBER}],size:{height:150,width:500},viewPort:{start:a,end:u,yMin:0,yMax:5e3,group:o}}),Object(r.h)("monitor-webgl-context",null))},t}()}}]);