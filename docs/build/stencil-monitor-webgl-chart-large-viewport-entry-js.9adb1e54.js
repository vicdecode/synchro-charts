(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{1080:function(e,n,t){"use strict";t.r(n),t.d(n,"monitor_webgl_chart_large_viewport",(function(){return a}));var r=t(64),i=t(43),o=(t(144),t(71),t(105),t(52),t(72),{yMin:0,yMax:5e3,start:new Date(2e3,0,0),end:new Date(2001,0,0)}),u={x:new Date((o.start.getTime()+o.end.getTime())/2).getTime(),y:(o.yMin+o.yMax)/2},a=function(){function e(e){Object(r.i)(this,e)}return e.prototype.render=function(){return Object(r.h)("div",null,Object(r.h)("monitor-line-chart",{dataStreams:[{id:"test",color:"black",name:"test stream",data:[u],resolution:0,dataType:i.a.NUMBER}],widgetId:"widget-id",size:{height:500,width:500},viewPort:o}),Object(r.h)("monitor-webgl-context",null))},e}()},1137:function(e,n,t){"use strict";var r,i;t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return d})),t.d(n,"d",(function(){return o})),t.d(n,"e",(function(){return u})),t.d(n,"f",(function(){return a})),t.d(n,"g",(function(){return c})),function(e){e.NUMBER="NUMBER",e.STRING="STRING",e.BOOLEAN="BOOLEAN"}(r||(r={})),function(e){e.ALARM="ALARM",e.ANOMALY="ANOMALY"}(i||(i={}));var o={liveTimeFrameValueLabel:"Value",historicalTimeFrameValueLabel:"Value",noDataStreamsPresentHeader:"No properties or alarms",noDataStreamsPresentSubHeader:"This widget doesn't have any properties or alarms.",noDataPresentHeader:"No data",noDataPresentSubHeader:"There's no data to display for this time range."},u="round",a=3,c="M 2 2 H 15",d="1, 5"},1138:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return o})),t.d(n,"d",(function(){return u})),t.d(n,"e",(function(){return a}));var r="-",i="No properties or alarms",o="This widget doesn't have any properties or alarms.",u="No data",a="There's no data to display for this time range."},1139:function(e,n,t){"use strict";var r,i,o;t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return i})),function(e){e.LESS_THAN="LT",e.GREATER_THAN="GT",e.LESS_THAN_EQUAL="LTE",e.GREATER_THAN_EQUAL="GTE",e.EQUAL="EQ"}(r||(r={})),function(e){!function(e){e.EITHER="EITHER",e.RIGHT="RIGHT",e.LEFT="LEFT"}(e.DATA_ALIGNMENT||(e.DATA_ALIGNMENT={}))}(i||(i={})),function(e){e.ERROR="error",e.ACTIVE="active",e.NORMAL="normal",e.ACKNOWLEDGED="acknowledged",e.SNOOZED="snoozed",e.DISABLED="disabled",e.LATCHED="latched"}(o||(o={}))},1140:function(e,n,t){"use strict";var r,i;t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return r})),function(e){e.TimeSeries="time-series",e.Log="log",e.Linear="linear"}(r||(r={})),function(e){e.RIGHT="RIGHT",e.BOTTOM="BOTTOM"}(i||(i={}))},1141:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return i})),t.d(n,"d",(function(){return r})),t.d(n,"e",(function(){return c})),t.d(n,"f",(function(){return a})),t.d(n,"g",(function(){return d})),t.d(n,"h",(function(){return s}));var r=1e3,i=60*r,o=60*i,u=24*o,a=30*u,c=12*a,d=function(e){if(e<0)throw new Error("Time cannot be negative!");var n=Math.floor(e/1e3),t=Math.floor(n/60),r=Math.floor(t/60);return{day:Math.floor(r/24),hour:r%=24,minute:t%=60,seconds:n%=60}},s=function(e,n,t){var r=t.start,c=t.end.getTime()-r.getTime();return n<o?c<i?e.toLocaleString("en-US",{minute:"numeric",second:"numeric"}):c<=10*i?e.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):c<=o?e.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):c<=u?e.toLocaleString("en-US",{hour12:!0,hour:"numeric",month:"numeric",minute:"numeric",day:"numeric"}):c<=a?e.toLocaleString("en-US",{hour12:!0,hour:"numeric",year:"numeric",month:"numeric",day:"numeric"}):e.toLocaleString("en-US",{day:"numeric",month:"numeric",year:"numeric"}):n<=o?e.toLocaleString("en-US",{hour:"numeric",day:"numeric",month:"numeric",hour12:!0}):n<u?e.toLocaleString("en-US",{day:"numeric",month:"numeric"}):e.toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric"})}},1142:function(e,n,t){"use strict";var r;t.d(n,"a",(function(){return r})),t(1137),t(1139),t(1140),t(1138),t(1141),function(e){e.LINEAR="linear-regression"}(r||(r={}))},939:function(e,n,t){"use strict";t.r(n),t.d(n,"monitor_webgl_chart_large_viewport",(function(){return a}));var r=t(63),i=t(1137),o=(t(1142),t(1139),t(1140),t(1138),t(1141),{yMin:0,yMax:5e3,start:new Date(2e3,0,0),end:new Date(2001,0,0)}),u={x:new Date((o.start.getTime()+o.end.getTime())/2).getTime(),y:(o.yMin+o.yMax)/2},a=function(){function e(e){Object(r.i)(this,e)}return e.prototype.render=function(){return Object(r.h)("div",null,Object(r.h)("monitor-line-chart",{dataStreams:[{id:"test",color:"black",name:"test stream",data:[u],resolution:0,dataType:i.a.NUMBER}],widgetId:"widget-id",size:{height:500,width:500},viewPort:o}),Object(r.h)("monitor-webgl-context",null))},e}()}}]);