(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{1115:function(t,e,n){"use strict";n.r(e),n.d(e,"status_chart_multiple_data_streams",(function(){return u}));var r=n(64),a=n(43),i=(n(144),n(71),n(105),n(52),n(72)),o=n(1156),u=function(){function t(t){Object(r.i)(this,t)}return t.prototype.render=function(){var t,e,n;return Object(r.h)("div",null,Object(r.h)("monitor-status-chart",{alarms:{expires:i.c},dataStreams:[{id:"test",color:"black",name:"test stream 1",aggregates:(t={},t[i.c]=[Object.assign(Object.assign({},o.a),{y:70})],t),data:[],resolution:i.c,dataType:a.a.NUMBER},{id:"test2",color:"blue",name:"test stream 2",aggregates:(e={},e[i.c]=[Object.assign(Object.assign({},o.a),{y:170})],e),data:[],resolution:i.c,dataType:a.a.NUMBER},{id:"test3",color:"red",name:"test stream 3",aggregates:(n={},n[i.c]=[Object.assign(Object.assign({},o.a),{y:60})],n),data:[],resolution:i.c,dataType:a.a.NUMBER}],widgetId:"test-id",size:{width:500,height:500},viewPort:{yMin:o.d,yMax:o.e,start:o.b,end:o.f}}),Object(r.h)("monitor-webgl-context",null))},t}()},1137:function(t,e,n){"use strict";var r,a;n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return c})),function(t){t.NUMBER="NUMBER",t.STRING="STRING",t.BOOLEAN="BOOLEAN"}(r||(r={})),function(t){t.ALARM="ALARM",t.ANOMALY="ANOMALY"}(a||(a={}));var i={liveTimeFrameValueLabel:"Value",historicalTimeFrameValueLabel:"Value",noDataStreamsPresentHeader:"No properties or alarms",noDataStreamsPresentSubHeader:"This widget doesn't have any properties or alarms.",noDataPresentHeader:"No data",noDataPresentSubHeader:"There's no data to display for this time range."},o="round",u=3,c="M 2 2 H 15",s="1, 5"},1138:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return u}));var r="-",a="No properties or alarms",i="This widget doesn't have any properties or alarms.",o="No data",u="There's no data to display for this time range."},1139:function(t,e,n){"use strict";var r,a,i;n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),function(t){t.LESS_THAN="LT",t.GREATER_THAN="GT",t.LESS_THAN_EQUAL="LTE",t.GREATER_THAN_EQUAL="GTE",t.EQUAL="EQ"}(r||(r={})),function(t){!function(t){t.EITHER="EITHER",t.RIGHT="RIGHT",t.LEFT="LEFT"}(t.DATA_ALIGNMENT||(t.DATA_ALIGNMENT={}))}(a||(a={})),function(t){t.ERROR="error",t.ACTIVE="active",t.NORMAL="normal",t.ACKNOWLEDGED="acknowledged",t.SNOOZED="snoozed",t.DISABLED="disabled",t.LATCHED="latched"}(i||(i={}))},1140:function(t,e,n){"use strict";var r,a;n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r})),function(t){t.TimeSeries="time-series",t.Log="log",t.Linear="linear"}(r||(r={})),function(t){t.RIGHT="RIGHT",t.BOTTOM="BOTTOM"}(a||(a={}))},1141:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return s})),n.d(e,"h",(function(){return d}));var r=1e3,a=60*r,i=60*a,o=24*i,u=30*o,c=12*u,s=function(t){if(t<0)throw new Error("Time cannot be negative!");var e=Math.floor(t/1e3),n=Math.floor(e/60),r=Math.floor(n/60);return{day:Math.floor(r/24),hour:r%=24,minute:n%=60,seconds:e%=60}},d=function(t,e,n){var r=n.start,c=n.end.getTime()-r.getTime();return e<i?c<a?t.toLocaleString("en-US",{minute:"numeric",second:"numeric"}):c<=10*a?t.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):c<=i?t.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):c<=o?t.toLocaleString("en-US",{hour12:!0,hour:"numeric",month:"numeric",minute:"numeric",day:"numeric"}):c<=u?t.toLocaleString("en-US",{hour12:!0,hour:"numeric",year:"numeric",month:"numeric",day:"numeric"}):t.toLocaleString("en-US",{day:"numeric",month:"numeric",year:"numeric"}):e<=i?t.toLocaleString("en-US",{hour:"numeric",day:"numeric",month:"numeric",hour12:!0}):e<o?t.toLocaleString("en-US",{day:"numeric",month:"numeric"}):t.toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric"})}},1142:function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return r})),n(1137),n(1139),n(1140),n(1138),n(1141),function(t){t.LINEAR="linear-regression"}(r||(r={}))},1155:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return a})),n.d(e,"f",(function(){return o}));var r=0,a=5e3,i=new Date(2e3,0,0,0,0),o=new Date(2e3,0,0,0,10),u=2500,c={x:(i.getTime()+o.getTime())/2,y:u}},1156:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return a})),n.d(e,"f",(function(){return o}));var r=0,a=5e3,i=new Date(2e3,0,0,0,0),o=new Date(2e3,0,0,0,10),u=2500,c={x:(i.getTime()+o.getTime())/2,y:u}},974:function(t,e,n){"use strict";n.r(e),n.d(e,"status_chart_multiple_data_streams",(function(){return u}));var r=n(63),a=n(1137),i=(n(1142),n(1139),n(1140),n(1138),n(1141)),o=n(1155),u=function(){function t(t){Object(r.i)(this,t)}return t.prototype.render=function(){var t,e,n;return Object(r.h)("div",null,Object(r.h)("monitor-status-chart",{alarms:{expires:i.c},dataStreams:[{id:"test",color:"black",name:"test stream 1",aggregates:(t={},t[i.c]=[Object.assign(Object.assign({},o.a),{y:70})],t),data:[],resolution:i.c,dataType:a.a.NUMBER},{id:"test2",color:"blue",name:"test stream 2",aggregates:(e={},e[i.c]=[Object.assign(Object.assign({},o.a),{y:170})],e),data:[],resolution:i.c,dataType:a.a.NUMBER},{id:"test3",color:"red",name:"test stream 3",aggregates:(n={},n[i.c]=[Object.assign(Object.assign({},o.a),{y:60})],n),data:[],resolution:i.c,dataType:a.a.NUMBER}],widgetId:"test-id",size:{width:500,height:500},viewPort:{yMin:o.d,yMax:o.e,start:o.b,end:o.f}}),Object(r.h)("monitor-webgl-context",null))},t}()}}]);