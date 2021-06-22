(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{1063:function(n,e,t){"use strict";t.r(e),t.d(e,"monitor_webgl_bar_chart_threshold_coloration_band",(function(){return c}));var r=t(61),o=t(1130),i=(t(1135),t(1132)),u=(t(1133),t(1131),t(1134)),a=t(1149),c=function(){function n(n){Object(r.i)(this,n)}return n.prototype.render=function(){var n;return Object(r.h)("div",null,Object(r.h)("monitor-bar-chart",{dataStreams:[{id:"test",color:"black",name:"test stream",aggregates:(n={},n[u.c]=[a.a],n),data:[],resolution:u.c,dataType:o.a.NUMBER}],annotations:{y:[{value:2e3,label:{text:"y label",show:!0},showValue:!0,color:"blue",comparisonOperator:i.a.GREATER_THAN_EQUAL},{value:3e3,label:{text:"y label2",show:!0},showValue:!0,color:"red",comparisonOperator:i.a.LESS_THAN_EQUAL}],thresholdOptions:{showColor:!0}},widgetId:"test-id",size:{width:500,height:500},viewPort:{yMin:a.d,yMax:a.e,start:a.b,end:a.f}}),Object(r.h)("monitor-webgl-context",null))},n}()},1130:function(n,e,t){"use strict";var r,o;t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return d})),t.d(e,"d",(function(){return i})),t.d(e,"e",(function(){return u})),t.d(e,"f",(function(){return a})),t.d(e,"g",(function(){return c})),function(n){n.NUMBER="NUMBER",n.STRING="STRING",n.BOOLEAN="BOOLEAN"}(r||(r={})),function(n){n.ALARM="ALARM",n.ANOMALY="ANOMALY"}(o||(o={}));var i={liveTimeFrameValueLabel:"Value",historicalTimeFrameValueLabel:"Value",noDataStreamsPresentHeader:"No properties or alarms",noDataStreamsPresentSubHeader:"This widget doesn't have any properties or alarms.",noDataPresentHeader:"No data",noDataPresentSubHeader:"There's no data to display for this time range."},u="round",a=3,c="M 2 2 H 15",d="1, 5"},1131:function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return i})),t.d(e,"d",(function(){return u})),t.d(e,"e",(function(){return a}));var r="-",o="No properties or alarms",i="This widget doesn't have any properties or alarms.",u="No data",a="There's no data to display for this time range."},1132:function(n,e,t){"use strict";var r,o,i;t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return o})),function(n){n.LESS_THAN="LT",n.GREATER_THAN="GT",n.LESS_THAN_EQUAL="LTE",n.GREATER_THAN_EQUAL="GTE",n.EQUAL="EQ"}(r||(r={})),function(n){!function(n){n.EITHER="EITHER",n.RIGHT="RIGHT",n.LEFT="LEFT"}(n.DATA_ALIGNMENT||(n.DATA_ALIGNMENT={}))}(o||(o={})),function(n){n.ERROR="error",n.ACTIVE="active",n.NORMAL="normal",n.ACKNOWLEDGED="acknowledged",n.SNOOZED="snoozed",n.DISABLED="disabled",n.LATCHED="latched"}(i||(i={}))},1133:function(n,e,t){"use strict";var r,o;t.d(e,"a",(function(){return o})),t.d(e,"b",(function(){return r})),function(n){n.TimeSeries="time-series",n.Log="log",n.Linear="linear"}(r||(r={})),function(n){n.RIGHT="RIGHT",n.BOTTOM="BOTTOM"}(o||(o={}))},1134:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return o})),t.d(e,"d",(function(){return r})),t.d(e,"e",(function(){return c})),t.d(e,"f",(function(){return a})),t.d(e,"g",(function(){return d})),t.d(e,"h",(function(){return s}));var r=1e3,o=60*r,i=60*o,u=24*i,a=30*u,c=12*a,d=function(n){if(n<0)throw new Error("Time cannot be negative!");var e=Math.floor(n/1e3),t=Math.floor(e/60),r=Math.floor(t/60);return{day:Math.floor(r/24),hour:r%=24,minute:t%=60,seconds:e%=60}},s=function(n,e,t){var r=t.start,c=t.end.getTime()-r.getTime();return e<i?c<o?n.toLocaleString("en-US",{minute:"numeric",second:"numeric"}):c<=10*o?n.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):c<=i?n.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):c<=u?n.toLocaleString("en-US",{hour12:!0,hour:"numeric",month:"numeric",minute:"numeric",day:"numeric"}):c<=a?n.toLocaleString("en-US",{hour12:!0,hour:"numeric",year:"numeric",month:"numeric",day:"numeric"}):n.toLocaleString("en-US",{day:"numeric",month:"numeric",year:"numeric"}):e<=i?n.toLocaleString("en-US",{hour:"numeric",day:"numeric",month:"numeric",hour12:!0}):e<u?n.toLocaleString("en-US",{day:"numeric",month:"numeric"}):n.toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric"})}},1135:function(n,e,t){"use strict";var r;t.d(e,"a",(function(){return r})),t(1130),t(1132),t(1133),t(1131),t(1134),function(n){n.LINEAR="linear-regression"}(r||(r={}))},1148:function(n,e,t){"use strict";t.d(e,"a",(function(){return c})),t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return a})),t.d(e,"d",(function(){return r})),t.d(e,"e",(function(){return o})),t.d(e,"f",(function(){return u}));var r=0,o=5e3,i=new Date(2e3,0,0,0,0),u=new Date(2e3,0,0,0,10),a=2500,c={x:(i.getTime()+u.getTime())/2,y:a}},1149:function(n,e,t){"use strict";t.d(e,"a",(function(){return c})),t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return a})),t.d(e,"d",(function(){return r})),t.d(e,"e",(function(){return o})),t.d(e,"f",(function(){return u}));var r=0,o=5e3,i=new Date(2e3,0,0,0,0),u=new Date(2e3,0,0,0,10),a=2500,c={x:(i.getTime()+u.getTime())/2,y:a}},922:function(n,e,t){"use strict";t.r(e),t.d(e,"monitor_webgl_bar_chart_threshold_coloration_band",(function(){return c}));var r=t(60),o=t(42),i=(t(138),t(68)),u=(t(99),t(51),t(69)),a=t(1148),c=function(){function n(n){Object(r.i)(this,n)}return n.prototype.render=function(){var n;return Object(r.h)("div",null,Object(r.h)("monitor-bar-chart",{dataStreams:[{id:"test",color:"black",name:"test stream",aggregates:(n={},n[u.c]=[a.a],n),data:[],resolution:u.c,dataType:o.a.NUMBER}],annotations:{y:[{value:2e3,label:{text:"y label",show:!0},showValue:!0,color:"blue",comparisonOperator:i.a.GREATER_THAN_EQUAL},{value:3e3,label:{text:"y label2",show:!0},showValue:!0,color:"red",comparisonOperator:i.a.LESS_THAN_EQUAL}],thresholdOptions:{showColor:!0}},widgetId:"test-id",size:{width:500,height:500},viewPort:{yMin:a.d,yMax:a.e,start:a.b,end:a.f}}),Object(r.h)("monitor-webgl-context",null))},n}()}}]);