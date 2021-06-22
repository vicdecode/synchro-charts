(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{1114:function(e,t,n){"use strict";n.r(t),n.d(t,"status_chart_threshold_coloration_multiple_thresholds",(function(){return c}));var r=n(61),o=n(1130),i=(n(1135),n(1132)),u=(n(1133),n(1131),n(1134)),a=n(1149),c=function(){function e(e){Object(r.i)(this,e)}return e.prototype.render=function(){var e;return Object(r.h)("div",null,Object(r.h)("monitor-status-chart",{alarms:{expires:u.c},dataStreams:[{id:"test",color:"black",name:"test stream",aggregates:(e={},e[u.c]=[a.a],e),data:[],resolution:u.c,dataType:o.a.NUMBER}],annotations:{y:[{value:2e3,label:{text:"y label",show:!0},showValue:!0,color:"blue",comparisonOperator:i.a.GREATER_THAN_EQUAL},{value:1e3,label:{text:"y label",show:!0},showValue:!0,color:"red",comparisonOperator:i.a.GREATER_THAN_EQUAL}]},widgetId:"test-id",size:{width:500,height:500},viewPort:{yMin:a.d,yMax:a.e,start:a.b,end:a.f}}),Object(r.h)("monitor-webgl-context",null))},e}()},1130:function(e,t,n){"use strict";var r,o;n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return a})),n.d(t,"g",(function(){return c})),function(e){e.NUMBER="NUMBER",e.STRING="STRING",e.BOOLEAN="BOOLEAN"}(r||(r={})),function(e){e.ALARM="ALARM",e.ANOMALY="ANOMALY"}(o||(o={}));var i={liveTimeFrameValueLabel:"Value",historicalTimeFrameValueLabel:"Value",noDataStreamsPresentHeader:"No properties or alarms",noDataStreamsPresentSubHeader:"This widget doesn't have any properties or alarms.",noDataPresentHeader:"No data",noDataPresentSubHeader:"There's no data to display for this time range."},u="round",a=3,c="M 2 2 H 15",s="1, 5"},1131:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return a}));var r="-",o="No properties or alarms",i="This widget doesn't have any properties or alarms.",u="No data",a="There's no data to display for this time range."},1132:function(e,t,n){"use strict";var r,o,i;n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),function(e){e.LESS_THAN="LT",e.GREATER_THAN="GT",e.LESS_THAN_EQUAL="LTE",e.GREATER_THAN_EQUAL="GTE",e.EQUAL="EQ"}(r||(r={})),function(e){!function(e){e.EITHER="EITHER",e.RIGHT="RIGHT",e.LEFT="LEFT"}(e.DATA_ALIGNMENT||(e.DATA_ALIGNMENT={}))}(o||(o={})),function(e){e.ERROR="error",e.ACTIVE="active",e.NORMAL="normal",e.ACKNOWLEDGED="acknowledged",e.SNOOZED="snoozed",e.DISABLED="disabled",e.LATCHED="latched"}(i||(i={}))},1133:function(e,t,n){"use strict";var r,o;n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r})),function(e){e.TimeSeries="time-series",e.Log="log",e.Linear="linear"}(r||(r={})),function(e){e.RIGHT="RIGHT",e.BOTTOM="BOTTOM"}(o||(o={}))},1134:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return a})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return d}));var r=1e3,o=60*r,i=60*o,u=24*i,a=30*u,c=12*a,s=function(e){if(e<0)throw new Error("Time cannot be negative!");var t=Math.floor(e/1e3),n=Math.floor(t/60),r=Math.floor(n/60);return{day:Math.floor(r/24),hour:r%=24,minute:n%=60,seconds:t%=60}},d=function(e,t,n){var r=n.start,c=n.end.getTime()-r.getTime();return t<i?c<o?e.toLocaleString("en-US",{minute:"numeric",second:"numeric"}):c<=10*o?e.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):c<=i?e.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):c<=u?e.toLocaleString("en-US",{hour12:!0,hour:"numeric",month:"numeric",minute:"numeric",day:"numeric"}):c<=a?e.toLocaleString("en-US",{hour12:!0,hour:"numeric",year:"numeric",month:"numeric",day:"numeric"}):e.toLocaleString("en-US",{day:"numeric",month:"numeric",year:"numeric"}):t<=i?e.toLocaleString("en-US",{hour:"numeric",day:"numeric",month:"numeric",hour12:!0}):t<u?e.toLocaleString("en-US",{day:"numeric",month:"numeric"}):e.toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric"})}},1135:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),n(1130),n(1132),n(1133),n(1131),n(1134),function(e){e.LINEAR="linear-regression"}(r||(r={}))},1148:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return u}));var r=0,o=5e3,i=new Date(2e3,0,0,0,0),u=new Date(2e3,0,0,0,10),a=2500,c={x:(i.getTime()+u.getTime())/2,y:a}},1149:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return u}));var r=0,o=5e3,i=new Date(2e3,0,0,0,0),u=new Date(2e3,0,0,0,10),a=2500,c={x:(i.getTime()+u.getTime())/2,y:a}},973:function(e,t,n){"use strict";n.r(t),n.d(t,"status_chart_threshold_coloration_multiple_thresholds",(function(){return c}));var r=n(60),o=n(42),i=(n(138),n(68)),u=(n(99),n(51),n(69)),a=n(1148),c=function(){function e(e){Object(r.i)(this,e)}return e.prototype.render=function(){var e;return Object(r.h)("div",null,Object(r.h)("monitor-status-chart",{alarms:{expires:u.c},dataStreams:[{id:"test",color:"black",name:"test stream",aggregates:(e={},e[u.c]=[a.a],e),data:[],resolution:u.c,dataType:o.a.NUMBER}],annotations:{y:[{value:2e3,label:{text:"y label",show:!0},showValue:!0,color:"blue",comparisonOperator:i.a.GREATER_THAN_EQUAL},{value:1e3,label:{text:"y label",show:!0},showValue:!0,color:"red",comparisonOperator:i.a.GREATER_THAN_EQUAL}]},widgetId:"test-id",size:{width:500,height:500},viewPort:{yMin:a.d,yMax:a.e,start:a.b,end:a.f}}),Object(r.h)("monitor-webgl-context",null))},e}()}}]);