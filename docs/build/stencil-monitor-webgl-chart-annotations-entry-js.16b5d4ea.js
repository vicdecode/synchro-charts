(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1070:function(e,n,t){"use strict";t.r(n),t.d(n,"monitor_webgl_chart_annotations",(function(){return c}));var r=t(61),o=t(1130),i=(t(1135),t(1132),t(1133),t(1131),t(1134),new Date(1998,0,0)),u=new Date(2e3,0,1),a={x:new Date((i.getTime()+u.getTime())/2).getTime(),y:2500},c=function(){function e(e){Object(r.i)(this,e)}return e.prototype.render=function(){return Object(r.h)("div",null,Object(r.h)("monitor-line-chart",{widgetId:"widget-id",dataStreams:[{id:"test",color:"black",name:"test stream",data:[a],resolution:0,dataType:o.a.NUMBER}],annotations:{x:[{value:i,label:{text:"x label",show:!0},showValue:!0,color:"red"}],y:[{value:0,label:{text:"y label",show:!0},showValue:!0,color:"blue"}],thresholdOptions:!1},size:{height:500,width:500},viewPort:{start:i,end:u,yMin:0,yMax:5e3}}),Object(r.h)("monitor-webgl-context",null))},e}()},1130:function(e,n,t){"use strict";var r,o;t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return d})),t.d(n,"d",(function(){return i})),t.d(n,"e",(function(){return u})),t.d(n,"f",(function(){return a})),t.d(n,"g",(function(){return c})),function(e){e.NUMBER="NUMBER",e.STRING="STRING",e.BOOLEAN="BOOLEAN"}(r||(r={})),function(e){e.ALARM="ALARM",e.ANOMALY="ANOMALY"}(o||(o={}));var i={liveTimeFrameValueLabel:"Value",historicalTimeFrameValueLabel:"Value",noDataStreamsPresentHeader:"No properties or alarms",noDataStreamsPresentSubHeader:"This widget doesn't have any properties or alarms.",noDataPresentHeader:"No data",noDataPresentSubHeader:"There's no data to display for this time range."},u="round",a=3,c="M 2 2 H 15",d="1, 5"},1131:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return i})),t.d(n,"d",(function(){return u})),t.d(n,"e",(function(){return a}));var r="-",o="No properties or alarms",i="This widget doesn't have any properties or alarms.",u="No data",a="There's no data to display for this time range."},1132:function(e,n,t){"use strict";var r,o,i;t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return o})),function(e){e.LESS_THAN="LT",e.GREATER_THAN="GT",e.LESS_THAN_EQUAL="LTE",e.GREATER_THAN_EQUAL="GTE",e.EQUAL="EQ"}(r||(r={})),function(e){!function(e){e.EITHER="EITHER",e.RIGHT="RIGHT",e.LEFT="LEFT"}(e.DATA_ALIGNMENT||(e.DATA_ALIGNMENT={}))}(o||(o={})),function(e){e.ERROR="error",e.ACTIVE="active",e.NORMAL="normal",e.ACKNOWLEDGED="acknowledged",e.SNOOZED="snoozed",e.DISABLED="disabled",e.LATCHED="latched"}(i||(i={}))},1133:function(e,n,t){"use strict";var r,o;t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return r})),function(e){e.TimeSeries="time-series",e.Log="log",e.Linear="linear"}(r||(r={})),function(e){e.RIGHT="RIGHT",e.BOTTOM="BOTTOM"}(o||(o={}))},1134:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return o})),t.d(n,"d",(function(){return r})),t.d(n,"e",(function(){return c})),t.d(n,"f",(function(){return a})),t.d(n,"g",(function(){return d})),t.d(n,"h",(function(){return s}));var r=1e3,o=60*r,i=60*o,u=24*i,a=30*u,c=12*a,d=function(e){if(e<0)throw new Error("Time cannot be negative!");var n=Math.floor(e/1e3),t=Math.floor(n/60),r=Math.floor(t/60);return{day:Math.floor(r/24),hour:r%=24,minute:t%=60,seconds:n%=60}},s=function(e,n,t){var r=t.start,c=t.end.getTime()-r.getTime();return n<i?c<o?e.toLocaleString("en-US",{minute:"numeric",second:"numeric"}):c<=10*o?e.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):c<=i?e.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):c<=u?e.toLocaleString("en-US",{hour12:!0,hour:"numeric",month:"numeric",minute:"numeric",day:"numeric"}):c<=a?e.toLocaleString("en-US",{hour12:!0,hour:"numeric",year:"numeric",month:"numeric",day:"numeric"}):e.toLocaleString("en-US",{day:"numeric",month:"numeric",year:"numeric"}):n<=i?e.toLocaleString("en-US",{hour:"numeric",day:"numeric",month:"numeric",hour12:!0}):n<u?e.toLocaleString("en-US",{day:"numeric",month:"numeric"}):e.toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric"})}},1135:function(e,n,t){"use strict";var r;t.d(n,"a",(function(){return r})),t(1130),t(1132),t(1133),t(1131),t(1134),function(e){e.LINEAR="linear-regression"}(r||(r={}))},929:function(e,n,t){"use strict";t.r(n),t.d(n,"monitor_webgl_chart_annotations",(function(){return c}));var r=t(60),o=t(42),i=(t(138),t(68),t(99),t(51),t(69),new Date(1998,0,0)),u=new Date(2e3,0,1),a={x:new Date((i.getTime()+u.getTime())/2).getTime(),y:2500},c=function(){function e(e){Object(r.i)(this,e)}return e.prototype.render=function(){return Object(r.h)("div",null,Object(r.h)("monitor-line-chart",{widgetId:"widget-id",dataStreams:[{id:"test",color:"black",name:"test stream",data:[a],resolution:0,dataType:o.a.NUMBER}],annotations:{x:[{value:i,label:{text:"x label",show:!0},showValue:!0,color:"red"}],y:[{value:0,label:{text:"y label",show:!0},showValue:!0,color:"blue"}],thresholdOptions:!1},size:{height:500,width:500},viewPort:{start:i,end:u,yMin:0,yMax:5e3}}),Object(r.h)("monitor-webgl-context",null))},e}()}}]);