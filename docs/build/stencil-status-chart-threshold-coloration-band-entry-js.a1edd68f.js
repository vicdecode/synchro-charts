(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{1111:function(t,e,n){"use strict";n.r(e),n.d(e,"status_chart_threshold_coloration_band",(function(){return h}));var r=n(61),o=n(1130),a=n(1132),i=n(1134),u=n(1149),c=new URLSearchParams(window.location.search),s=c.get("isDiscreteNumericData"),d=c.get("isStringData"),l=u.a,m="1"===s?o.a.STRING:o.a.NUMBER;l.y=2e3,"1"===s&&(l.y=2e3),"1"===d&&(l.y="test");var h=function(){function t(t){Object(r.i)(this,t)}return t.prototype.render=function(){var t;return Object(r.h)("div",null,Object(r.h)("monitor-status-chart",{alarms:{expires:i.c},dataStreams:[{id:"test",color:"black",name:"test stream",aggregates:(t={},t[i.c]=[l],t),data:[],resolution:i.c,dataType:m}],annotations:{y:[{value:d?"test":2e3,label:{text:"y label",show:!0},showValue:!0,color:"blue",comparisonOperator:a.a.EQUAL}],thresholdOptions:{showColor:!0}},widgetId:"test-id",size:{width:500,height:500},viewPort:{yMin:u.d,yMax:u.e,start:u.b,end:u.f}}),Object(r.h)("monitor-webgl-context",null))},t}()},1130:function(t,e,n){"use strict";var r,o;n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return i})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return c})),function(t){t.NUMBER="NUMBER",t.STRING="STRING",t.BOOLEAN="BOOLEAN"}(r||(r={})),function(t){t.ALARM="ALARM",t.ANOMALY="ANOMALY"}(o||(o={}));var a={liveTimeFrameValueLabel:"Value",historicalTimeFrameValueLabel:"Value",noDataStreamsPresentHeader:"No properties or alarms",noDataStreamsPresentSubHeader:"This widget doesn't have any properties or alarms.",noDataPresentHeader:"No data",noDataPresentSubHeader:"There's no data to display for this time range."},i="round",u=3,c="M 2 2 H 15",s="1, 5"},1132:function(t,e,n){"use strict";var r,o,a;n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),function(t){t.LESS_THAN="LT",t.GREATER_THAN="GT",t.LESS_THAN_EQUAL="LTE",t.GREATER_THAN_EQUAL="GTE",t.EQUAL="EQ"}(r||(r={})),function(t){!function(t){t.EITHER="EITHER",t.RIGHT="RIGHT",t.LEFT="LEFT"}(t.DATA_ALIGNMENT||(t.DATA_ALIGNMENT={}))}(o||(o={})),function(t){t.ERROR="error",t.ACTIVE="active",t.NORMAL="normal",t.ACKNOWLEDGED="acknowledged",t.SNOOZED="snoozed",t.DISABLED="disabled",t.LATCHED="latched"}(a||(a={}))},1134:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return s})),n.d(e,"h",(function(){return d}));var r=1e3,o=60*r,a=60*o,i=24*a,u=30*i,c=12*u,s=function(t){if(t<0)throw new Error("Time cannot be negative!");var e=Math.floor(t/1e3),n=Math.floor(e/60),r=Math.floor(n/60);return{day:Math.floor(r/24),hour:r%=24,minute:n%=60,seconds:e%=60}},d=function(t,e,n){var r=n.start,c=n.end.getTime()-r.getTime();return e<a?c<o?t.toLocaleString("en-US",{minute:"numeric",second:"numeric"}):c<=10*o?t.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):c<=a?t.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):c<=i?t.toLocaleString("en-US",{hour12:!0,hour:"numeric",month:"numeric",minute:"numeric",day:"numeric"}):c<=u?t.toLocaleString("en-US",{hour12:!0,hour:"numeric",year:"numeric",month:"numeric",day:"numeric"}):t.toLocaleString("en-US",{day:"numeric",month:"numeric",year:"numeric"}):e<=a?t.toLocaleString("en-US",{hour:"numeric",day:"numeric",month:"numeric",hour12:!0}):e<i?t.toLocaleString("en-US",{day:"numeric",month:"numeric"}):t.toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric"})}},1148:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return i}));var r=0,o=5e3,a=new Date(2e3,0,0,0,0),i=new Date(2e3,0,0,0,10),u=2500,c={x:(a.getTime()+i.getTime())/2,y:u}},1149:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return i}));var r=0,o=5e3,a=new Date(2e3,0,0,0,0),i=new Date(2e3,0,0,0,10),u=2500,c={x:(a.getTime()+i.getTime())/2,y:u}},970:function(t,e,n){"use strict";n.r(e),n.d(e,"status_chart_threshold_coloration_band",(function(){return h}));var r=n(60),o=n(42),a=n(68),i=n(69),u=n(1148),c=new URLSearchParams(window.location.search),s=c.get("isDiscreteNumericData"),d=c.get("isStringData"),l=u.a,m="1"===s?o.a.STRING:o.a.NUMBER;l.y=2e3,"1"===s&&(l.y=2e3),"1"===d&&(l.y="test");var h=function(){function t(t){Object(r.i)(this,t)}return t.prototype.render=function(){var t;return Object(r.h)("div",null,Object(r.h)("monitor-status-chart",{alarms:{expires:i.c},dataStreams:[{id:"test",color:"black",name:"test stream",aggregates:(t={},t[i.c]=[l],t),data:[],resolution:i.c,dataType:m}],annotations:{y:[{value:d?"test":2e3,label:{text:"y label",show:!0},showValue:!0,color:"blue",comparisonOperator:a.a.EQUAL}],thresholdOptions:{showColor:!0}},widgetId:"test-id",size:{width:500,height:500},viewPort:{yMin:u.d,yMax:u.e,start:u.b,end:u.f}}),Object(r.h)("monitor-webgl-context",null))},t}()}}]);