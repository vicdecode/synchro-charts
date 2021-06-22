(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1058:function(e,t,n){"use strict";n.r(t),n.d(t,"monitor_webgl_bar_chart_margin",(function(){return f}));var r,i,o=n(61),a=n(1130),u=(n(1135),n(1132),n(1133),n(1131),n(1134)),c=new Date(1998,1,0),d=new Date(1998,6,0),s={id:"test",color:"red",name:"test stream",resolution:u.f,aggregates:(r={},r[u.f]=[{x:new Date(1998,3,0,0).getTime(),y:1e3},{x:new Date(1998,4,0,0).getTime(),y:3e3}],r),data:[],dataType:a.a.NUMBER},m={id:"test2",color:"orange",name:"test stream2",resolution:u.f,aggregates:(i={},i[u.f]=[{x:new Date(1998,3,0,0).getTime(),y:2e3},{x:new Date(1998,4,0,0).getTime(),y:4e3}],i),data:[],dataType:a.a.NUMBER},f=function(){function e(e){Object(o.i)(this,e),this.data=[]}return e.prototype.render=function(){return Object(o.h)("div",{id:"chart-container",style:{height:"500px",width:"500px",marginTop:"20px"}},Object(o.h)("monitor-bar-chart",{widgetId:"widget-id",dataStreams:[s,m],viewPort:{yMin:0,yMax:5e3,start:c,end:d},bufferFactor:1,minBufferSize:1}),Object(o.h)("monitor-webgl-context",null))},e}()},1130:function(e,t,n){"use strict";var r,i;n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return c})),function(e){e.NUMBER="NUMBER",e.STRING="STRING",e.BOOLEAN="BOOLEAN"}(r||(r={})),function(e){e.ALARM="ALARM",e.ANOMALY="ANOMALY"}(i||(i={}));var o={liveTimeFrameValueLabel:"Value",historicalTimeFrameValueLabel:"Value",noDataStreamsPresentHeader:"No properties or alarms",noDataStreamsPresentSubHeader:"This widget doesn't have any properties or alarms.",noDataPresentHeader:"No data",noDataPresentSubHeader:"There's no data to display for this time range."},a="round",u=3,c="M 2 2 H 15",d="1, 5"},1131:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return u}));var r="-",i="No properties or alarms",o="This widget doesn't have any properties or alarms.",a="No data",u="There's no data to display for this time range."},1132:function(e,t,n){"use strict";var r,i,o;n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),function(e){e.LESS_THAN="LT",e.GREATER_THAN="GT",e.LESS_THAN_EQUAL="LTE",e.GREATER_THAN_EQUAL="GTE",e.EQUAL="EQ"}(r||(r={})),function(e){!function(e){e.EITHER="EITHER",e.RIGHT="RIGHT",e.LEFT="LEFT"}(e.DATA_ALIGNMENT||(e.DATA_ALIGNMENT={}))}(i||(i={})),function(e){e.ERROR="error",e.ACTIVE="active",e.NORMAL="normal",e.ACKNOWLEDGED="acknowledged",e.SNOOZED="snoozed",e.DISABLED="disabled",e.LATCHED="latched"}(o||(o={}))},1133:function(e,t,n){"use strict";var r,i;n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r})),function(e){e.TimeSeries="time-series",e.Log="log",e.Linear="linear"}(r||(r={})),function(e){e.RIGHT="RIGHT",e.BOTTOM="BOTTOM"}(i||(i={}))},1134:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return s}));var r=1e3,i=60*r,o=60*i,a=24*o,u=30*a,c=12*u,d=function(e){if(e<0)throw new Error("Time cannot be negative!");var t=Math.floor(e/1e3),n=Math.floor(t/60),r=Math.floor(n/60);return{day:Math.floor(r/24),hour:r%=24,minute:n%=60,seconds:t%=60}},s=function(e,t,n){var r=n.start,c=n.end.getTime()-r.getTime();return t<o?c<i?e.toLocaleString("en-US",{minute:"numeric",second:"numeric"}):c<=10*i?e.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):c<=o?e.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):c<=a?e.toLocaleString("en-US",{hour12:!0,hour:"numeric",month:"numeric",minute:"numeric",day:"numeric"}):c<=u?e.toLocaleString("en-US",{hour12:!0,hour:"numeric",year:"numeric",month:"numeric",day:"numeric"}):e.toLocaleString("en-US",{day:"numeric",month:"numeric",year:"numeric"}):t<=o?e.toLocaleString("en-US",{hour:"numeric",day:"numeric",month:"numeric",hour12:!0}):t<a?e.toLocaleString("en-US",{day:"numeric",month:"numeric"}):e.toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric"})}},1135:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),n(1130),n(1132),n(1133),n(1131),n(1134),function(e){e.LINEAR="linear-regression"}(r||(r={}))},917:function(e,t,n){"use strict";n.r(t),n.d(t,"monitor_webgl_bar_chart_margin",(function(){return f}));var r,i,o=n(60),a=n(42),u=(n(138),n(68),n(99),n(51),n(69)),c=new Date(1998,1,0),d=new Date(1998,6,0),s={id:"test",color:"red",name:"test stream",resolution:u.f,aggregates:(r={},r[u.f]=[{x:new Date(1998,3,0,0).getTime(),y:1e3},{x:new Date(1998,4,0,0).getTime(),y:3e3}],r),data:[],dataType:a.a.NUMBER},m={id:"test2",color:"orange",name:"test stream2",resolution:u.f,aggregates:(i={},i[u.f]=[{x:new Date(1998,3,0,0).getTime(),y:2e3},{x:new Date(1998,4,0,0).getTime(),y:4e3}],i),data:[],dataType:a.a.NUMBER},f=function(){function e(e){Object(o.i)(this,e),this.data=[]}return e.prototype.render=function(){return Object(o.h)("div",{id:"chart-container",style:{height:"500px",width:"500px",marginTop:"20px"}},Object(o.h)("monitor-bar-chart",{widgetId:"widget-id",dataStreams:[s,m],viewPort:{yMin:0,yMax:5e3,start:c,end:d},bufferFactor:1,minBufferSize:1}),Object(o.h)("monitor-webgl-context",null))},e}()}}]);