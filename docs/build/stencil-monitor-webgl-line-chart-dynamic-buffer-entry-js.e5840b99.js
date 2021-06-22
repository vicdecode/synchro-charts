(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{1085:function(t,n,e){"use strict";e.r(n),e.d(n,"monitor_webgl_line_chart_dynamic_buffer",(function(){return d}));var r=e(61),i=e(1130),a=(e(1135),e(1132),e(1133),e(1131),e(1134),function(){for(var t=0,n=0,e=arguments.length;n<e;n++)t+=arguments[n].length;var r=Array(t),i=0;for(n=0;n<e;n++)for(var a=arguments[n],o=0,u=a.length;o<u;o++,i++)r[i]=a[o];return r}),o=new Date(1998,0,0),u=new Date(2e3,0,1),c=u.getTime()-o.getTime(),d=function(){function t(t){var n=this;Object(r.i)(this,t),this.data=[],this.addDataPoint=function(){var t={x:new Date(o.getTime()+c/(2+n.data.length)).getTime(),y:2500};n.data=a([t],n.data)}}return t.prototype.render=function(){return Object(r.h)("div",null,Object(r.h)("button",{id:"add-data-point",onClick:this.addDataPoint},"Add Data Point"),Object(r.h)("div",{id:"chart-container",style:{marginTop:"20px",width:"500px",height:"500px"}},Object(r.h)("monitor-line-chart",{widgetId:"widget-id",dataStreams:[{id:"test",color:"black",name:"test stream",data:this.data,resolution:0,dataType:i.a.NUMBER}],size:{height:500,width:500},viewPort:{start:o,end:u,yMin:0,yMax:5e3},bufferFactor:1,minBufferSize:1}),Object(r.h)("monitor-webgl-context",null)))},t}()},1130:function(t,n,e){"use strict";var r,i;e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return d})),e.d(n,"d",(function(){return a})),e.d(n,"e",(function(){return o})),e.d(n,"f",(function(){return u})),e.d(n,"g",(function(){return c})),function(t){t.NUMBER="NUMBER",t.STRING="STRING",t.BOOLEAN="BOOLEAN"}(r||(r={})),function(t){t.ALARM="ALARM",t.ANOMALY="ANOMALY"}(i||(i={}));var a={liveTimeFrameValueLabel:"Value",historicalTimeFrameValueLabel:"Value",noDataStreamsPresentHeader:"No properties or alarms",noDataStreamsPresentSubHeader:"This widget doesn't have any properties or alarms.",noDataPresentHeader:"No data",noDataPresentSubHeader:"There's no data to display for this time range."},o="round",u=3,c="M 2 2 H 15",d="1, 5"},1131:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"d",(function(){return o})),e.d(n,"e",(function(){return u}));var r="-",i="No properties or alarms",a="This widget doesn't have any properties or alarms.",o="No data",u="There's no data to display for this time range."},1132:function(t,n,e){"use strict";var r,i,a;e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),function(t){t.LESS_THAN="LT",t.GREATER_THAN="GT",t.LESS_THAN_EQUAL="LTE",t.GREATER_THAN_EQUAL="GTE",t.EQUAL="EQ"}(r||(r={})),function(t){!function(t){t.EITHER="EITHER",t.RIGHT="RIGHT",t.LEFT="LEFT"}(t.DATA_ALIGNMENT||(t.DATA_ALIGNMENT={}))}(i||(i={})),function(t){t.ERROR="error",t.ACTIVE="active",t.NORMAL="normal",t.ACKNOWLEDGED="acknowledged",t.SNOOZED="snoozed",t.DISABLED="disabled",t.LATCHED="latched"}(a||(a={}))},1133:function(t,n,e){"use strict";var r,i;e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return r})),function(t){t.TimeSeries="time-series",t.Log="log",t.Linear="linear"}(r||(r={})),function(t){t.RIGHT="RIGHT",t.BOTTOM="BOTTOM"}(i||(i={}))},1134:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"d",(function(){return r})),e.d(n,"e",(function(){return c})),e.d(n,"f",(function(){return u})),e.d(n,"g",(function(){return d})),e.d(n,"h",(function(){return f}));var r=1e3,i=60*r,a=60*i,o=24*a,u=30*o,c=12*u,d=function(t){if(t<0)throw new Error("Time cannot be negative!");var n=Math.floor(t/1e3),e=Math.floor(n/60),r=Math.floor(e/60);return{day:Math.floor(r/24),hour:r%=24,minute:e%=60,seconds:n%=60}},f=function(t,n,e){var r=e.start,c=e.end.getTime()-r.getTime();return n<a?c<i?t.toLocaleString("en-US",{minute:"numeric",second:"numeric"}):c<=10*i?t.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):c<=a?t.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):c<=o?t.toLocaleString("en-US",{hour12:!0,hour:"numeric",month:"numeric",minute:"numeric",day:"numeric"}):c<=u?t.toLocaleString("en-US",{hour12:!0,hour:"numeric",year:"numeric",month:"numeric",day:"numeric"}):t.toLocaleString("en-US",{day:"numeric",month:"numeric",year:"numeric"}):n<=a?t.toLocaleString("en-US",{hour:"numeric",day:"numeric",month:"numeric",hour12:!0}):n<o?t.toLocaleString("en-US",{day:"numeric",month:"numeric"}):t.toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric"})}},1135:function(t,n,e){"use strict";var r;e.d(n,"a",(function(){return r})),e(1130),e(1132),e(1133),e(1131),e(1134),function(t){t.LINEAR="linear-regression"}(r||(r={}))},944:function(t,n,e){"use strict";e.r(n),e.d(n,"monitor_webgl_line_chart_dynamic_buffer",(function(){return d}));var r=e(60),i=e(42),a=(e(138),e(68),e(99),e(51),e(69),function(){for(var t=0,n=0,e=arguments.length;n<e;n++)t+=arguments[n].length;var r=Array(t),i=0;for(n=0;n<e;n++)for(var a=arguments[n],o=0,u=a.length;o<u;o++,i++)r[i]=a[o];return r}),o=new Date(1998,0,0),u=new Date(2e3,0,1),c=u.getTime()-o.getTime(),d=function(){function t(t){var n=this;Object(r.i)(this,t),this.data=[],this.addDataPoint=function(){var t={x:new Date(o.getTime()+c/(2+n.data.length)).getTime(),y:2500};n.data=a([t],n.data)}}return t.prototype.render=function(){return Object(r.h)("div",null,Object(r.h)("button",{id:"add-data-point",onClick:this.addDataPoint},"Add Data Point"),Object(r.h)("div",{id:"chart-container",style:{marginTop:"20px",width:"500px",height:"500px"}},Object(r.h)("monitor-line-chart",{widgetId:"widget-id",dataStreams:[{id:"test",color:"black",name:"test stream",data:this.data,resolution:0,dataType:i.a.NUMBER}],size:{height:500,width:500},viewPort:{start:o,end:u,yMin:0,yMax:5e3},bufferFactor:1,minBufferSize:1}),Object(r.h)("monitor-webgl-context",null)))},t}()}}]);