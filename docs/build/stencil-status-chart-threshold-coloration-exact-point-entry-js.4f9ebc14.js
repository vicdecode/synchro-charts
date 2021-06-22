(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{1119:function(n,t,e){"use strict";e.r(t),e.d(t,"status_chart_threshold_coloration_exact_point",(function(){return c}));var r=e(64),o=e(43),i=(e(144),e(71)),u=(e(105),e(52),e(72)),a=e(1156),c=function(){function n(n){Object(r.i)(this,n)}return n.prototype.render=function(){var n;return Object(r.h)("div",null,Object(r.h)("monitor-status-chart",{alarms:{expires:u.c},dataStreams:[{id:"test",color:"black",name:"test stream",aggregates:(n={},n[u.c]=[a.a],n),data:[],resolution:u.c,dataType:o.a.NUMBER}],annotations:{y:[{value:2500,label:{text:"y label",show:!0},showValue:!0,color:"blue",comparisonOperator:i.a.GREATER_THAN_EQUAL}],thresholdOptions:{showColor:!0}},widgetId:"test-id",size:{width:500,height:500},viewPort:{yMin:a.d,yMax:a.e,start:a.b,end:a.f}}),Object(r.h)("monitor-webgl-context",null))},n}()},1137:function(n,t,e){"use strict";var r,o;e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return s})),e.d(t,"d",(function(){return i})),e.d(t,"e",(function(){return u})),e.d(t,"f",(function(){return a})),e.d(t,"g",(function(){return c})),function(n){n.NUMBER="NUMBER",n.STRING="STRING",n.BOOLEAN="BOOLEAN"}(r||(r={})),function(n){n.ALARM="ALARM",n.ANOMALY="ANOMALY"}(o||(o={}));var i={liveTimeFrameValueLabel:"Value",historicalTimeFrameValueLabel:"Value",noDataStreamsPresentHeader:"No properties or alarms",noDataStreamsPresentSubHeader:"This widget doesn't have any properties or alarms.",noDataPresentHeader:"No data",noDataPresentSubHeader:"There's no data to display for this time range."},u="round",a=3,c="M 2 2 H 15",s="1, 5"},1138:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return i})),e.d(t,"d",(function(){return u})),e.d(t,"e",(function(){return a}));var r="-",o="No properties or alarms",i="This widget doesn't have any properties or alarms.",u="No data",a="There's no data to display for this time range."},1139:function(n,t,e){"use strict";var r,o,i;e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),function(n){n.LESS_THAN="LT",n.GREATER_THAN="GT",n.LESS_THAN_EQUAL="LTE",n.GREATER_THAN_EQUAL="GTE",n.EQUAL="EQ"}(r||(r={})),function(n){!function(n){n.EITHER="EITHER",n.RIGHT="RIGHT",n.LEFT="LEFT"}(n.DATA_ALIGNMENT||(n.DATA_ALIGNMENT={}))}(o||(o={})),function(n){n.ERROR="error",n.ACTIVE="active",n.NORMAL="normal",n.ACKNOWLEDGED="acknowledged",n.SNOOZED="snoozed",n.DISABLED="disabled",n.LATCHED="latched"}(i||(i={}))},1140:function(n,t,e){"use strict";var r,o;e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return r})),function(n){n.TimeSeries="time-series",n.Log="log",n.Linear="linear"}(r||(r={})),function(n){n.RIGHT="RIGHT",n.BOTTOM="BOTTOM"}(o||(o={}))},1141:function(n,t,e){"use strict";e.d(t,"a",(function(){return u})),e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"d",(function(){return r})),e.d(t,"e",(function(){return c})),e.d(t,"f",(function(){return a})),e.d(t,"g",(function(){return s})),e.d(t,"h",(function(){return d}));var r=1e3,o=60*r,i=60*o,u=24*i,a=30*u,c=12*a,s=function(n){if(n<0)throw new Error("Time cannot be negative!");var t=Math.floor(n/1e3),e=Math.floor(t/60),r=Math.floor(e/60);return{day:Math.floor(r/24),hour:r%=24,minute:e%=60,seconds:t%=60}},d=function(n,t,e){var r=e.start,c=e.end.getTime()-r.getTime();return t<i?c<o?n.toLocaleString("en-US",{minute:"numeric",second:"numeric"}):c<=10*o?n.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):c<=i?n.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):c<=u?n.toLocaleString("en-US",{hour12:!0,hour:"numeric",month:"numeric",minute:"numeric",day:"numeric"}):c<=a?n.toLocaleString("en-US",{hour12:!0,hour:"numeric",year:"numeric",month:"numeric",day:"numeric"}):n.toLocaleString("en-US",{day:"numeric",month:"numeric",year:"numeric"}):t<=i?n.toLocaleString("en-US",{hour:"numeric",day:"numeric",month:"numeric",hour12:!0}):t<u?n.toLocaleString("en-US",{day:"numeric",month:"numeric"}):n.toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric"})}},1142:function(n,t,e){"use strict";var r;e.d(t,"a",(function(){return r})),e(1137),e(1139),e(1140),e(1138),e(1141),function(n){n.LINEAR="linear-regression"}(r||(r={}))},1155:function(n,t,e){"use strict";e.d(t,"a",(function(){return c})),e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return a})),e.d(t,"d",(function(){return r})),e.d(t,"e",(function(){return o})),e.d(t,"f",(function(){return u}));var r=0,o=5e3,i=new Date(2e3,0,0,0,0),u=new Date(2e3,0,0,0,10),a=2500,c={x:(i.getTime()+u.getTime())/2,y:a}},1156:function(n,t,e){"use strict";e.d(t,"a",(function(){return c})),e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return a})),e.d(t,"d",(function(){return r})),e.d(t,"e",(function(){return o})),e.d(t,"f",(function(){return u}));var r=0,o=5e3,i=new Date(2e3,0,0,0,0),u=new Date(2e3,0,0,0,10),a=2500,c={x:(i.getTime()+u.getTime())/2,y:a}},978:function(n,t,e){"use strict";e.r(t),e.d(t,"status_chart_threshold_coloration_exact_point",(function(){return c}));var r=e(63),o=e(1137),i=(e(1142),e(1139)),u=(e(1140),e(1138),e(1141)),a=e(1155),c=function(){function n(n){Object(r.i)(this,n)}return n.prototype.render=function(){var n;return Object(r.h)("div",null,Object(r.h)("monitor-status-chart",{alarms:{expires:u.c},dataStreams:[{id:"test",color:"black",name:"test stream",aggregates:(n={},n[u.c]=[a.a],n),data:[],resolution:u.c,dataType:o.a.NUMBER}],annotations:{y:[{value:2500,label:{text:"y label",show:!0},showValue:!0,color:"blue",comparisonOperator:i.a.GREATER_THAN_EQUAL}],thresholdOptions:{showColor:!0}},widgetId:"test-id",size:{width:500,height:500},viewPort:{yMin:a.d,yMax:a.e,start:a.b,end:a.f}}),Object(r.h)("monitor-webgl-context",null))},n}()}}]);