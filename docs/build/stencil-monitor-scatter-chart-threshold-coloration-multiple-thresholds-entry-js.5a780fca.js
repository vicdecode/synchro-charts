(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1039:function(e,t,n){"use strict";n.r(t),n.d(t,"monitor_scatter_chart_threshold_coloration_multiple_thresholds",(function(){return f}));var r=n(64),o=n(43),a=n(71),i=n(72),u=new Date(1998,0,0),c=new Date(2001,0,1),l={x:new Date(1999,0,0).getTime(),y:2e3},s={x:new Date(2e3,0,0).getTime(),y:4e3},d={x:new Date(1999,6,0).getTime(),y:3e3},m={x:new Date(1999,0,0).getTime(),y:4e3},h={x:new Date(2e3,0,0).getTime(),y:2e3},f=function(){function e(e){Object(r.i)(this,e)}return e.prototype.render=function(){var e,t;return Object(r.h)("div",null,Object(r.h)("monitor-scatter-chart",{widgetId:"widget-id",dataStreams:[{id:"test",color:"black",name:"test stream",aggregates:(e={},e[i.f]=[l,s,d],e),data:[],resolution:i.f,dataType:o.a.NUMBER},{id:"test2",color:"red",name:"test stream2",aggregates:(t={},t[i.f]=[m,h],t),data:[],resolution:i.f,dataType:o.a.NUMBER}],annotations:{y:[{value:3500,label:{text:"y label",show:!0},showValue:!0,color:"blue",comparisonOperator:a.a.GREATER_THAN_EQUAL},{value:2500,label:{text:"y label",show:!0},showValue:!0,color:"purple",comparisonOperator:a.a.GREATER_THAN_EQUAL}]},size:{height:500,width:500},viewPort:{start:u,end:c,yMin:0,yMax:5e3}}),Object(r.h)("monitor-webgl-context",null))},e}()},1137:function(e,t,n){"use strict";var r,o;n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return c})),function(e){e.NUMBER="NUMBER",e.STRING="STRING",e.BOOLEAN="BOOLEAN"}(r||(r={})),function(e){e.ALARM="ALARM",e.ANOMALY="ANOMALY"}(o||(o={}));var a={liveTimeFrameValueLabel:"Value",historicalTimeFrameValueLabel:"Value",noDataStreamsPresentHeader:"No properties or alarms",noDataStreamsPresentSubHeader:"This widget doesn't have any properties or alarms.",noDataPresentHeader:"No data",noDataPresentSubHeader:"There's no data to display for this time range."},i="round",u=3,c="M 2 2 H 15",l="1, 5"},1139:function(e,t,n){"use strict";var r,o,a;n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),function(e){e.LESS_THAN="LT",e.GREATER_THAN="GT",e.LESS_THAN_EQUAL="LTE",e.GREATER_THAN_EQUAL="GTE",e.EQUAL="EQ"}(r||(r={})),function(e){!function(e){e.EITHER="EITHER",e.RIGHT="RIGHT",e.LEFT="LEFT"}(e.DATA_ALIGNMENT||(e.DATA_ALIGNMENT={}))}(o||(o={})),function(e){e.ERROR="error",e.ACTIVE="active",e.NORMAL="normal",e.ACKNOWLEDGED="acknowledged",e.SNOOZED="snoozed",e.DISABLED="disabled",e.LATCHED="latched"}(a||(a={}))},1141:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return s}));var r=1e3,o=60*r,a=60*o,i=24*a,u=30*i,c=12*u,l=function(e){if(e<0)throw new Error("Time cannot be negative!");var t=Math.floor(e/1e3),n=Math.floor(t/60),r=Math.floor(n/60);return{day:Math.floor(r/24),hour:r%=24,minute:n%=60,seconds:t%=60}},s=function(e,t,n){var r=n.start,c=n.end.getTime()-r.getTime();return t<a?c<o?e.toLocaleString("en-US",{minute:"numeric",second:"numeric"}):c<=10*o?e.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):c<=a?e.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):c<=i?e.toLocaleString("en-US",{hour12:!0,hour:"numeric",month:"numeric",minute:"numeric",day:"numeric"}):c<=u?e.toLocaleString("en-US",{hour12:!0,hour:"numeric",year:"numeric",month:"numeric",day:"numeric"}):e.toLocaleString("en-US",{day:"numeric",month:"numeric",year:"numeric"}):t<=a?e.toLocaleString("en-US",{hour:"numeric",day:"numeric",month:"numeric",hour12:!0}):t<i?e.toLocaleString("en-US",{day:"numeric",month:"numeric"}):e.toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric"})}},898:function(e,t,n){"use strict";n.r(t),n.d(t,"monitor_scatter_chart_threshold_coloration_multiple_thresholds",(function(){return f}));var r=n(63),o=n(1137),a=n(1139),i=n(1141),u=new Date(1998,0,0),c=new Date(2001,0,1),l={x:new Date(1999,0,0).getTime(),y:2e3},s={x:new Date(2e3,0,0).getTime(),y:4e3},d={x:new Date(1999,6,0).getTime(),y:3e3},m={x:new Date(1999,0,0).getTime(),y:4e3},h={x:new Date(2e3,0,0).getTime(),y:2e3},f=function(){function e(e){Object(r.i)(this,e)}return e.prototype.render=function(){var e,t;return Object(r.h)("div",null,Object(r.h)("monitor-scatter-chart",{widgetId:"widget-id",dataStreams:[{id:"test",color:"black",name:"test stream",aggregates:(e={},e[i.f]=[l,s,d],e),data:[],resolution:i.f,dataType:o.a.NUMBER},{id:"test2",color:"red",name:"test stream2",aggregates:(t={},t[i.f]=[m,h],t),data:[],resolution:i.f,dataType:o.a.NUMBER}],annotations:{y:[{value:3500,label:{text:"y label",show:!0},showValue:!0,color:"blue",comparisonOperator:a.a.GREATER_THAN_EQUAL},{value:2500,label:{text:"y label",show:!0},showValue:!0,color:"purple",comparisonOperator:a.a.GREATER_THAN_EQUAL}]},size:{height:500,width:500},viewPort:{start:u,end:c,yMin:0,yMax:5e3}}),Object(r.h)("monitor-webgl-context",null))},e}()}}]);