(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1015:function(n,e,t){"use strict";t.r(e),t.d(e,"monitor_kpi_standard",(function(){return y}));var r,u=t(61),i=t(1130),a=t(1134),o=t(1147),c=new URLSearchParams(window.location.search),d="true"===c.get("isEnabled"),m=c.get("latestValue"),l=c.get("numCharts");r=null==m||"null"===m||"undefined"===m?null:Object(o.a)(m)?Number.parseInt(m,10):m;var s=l&&Object(o.a)(l)?Number.parseInt(l,10):1,f=new Date(1998,0,0),h=new Date(2e3,0,1),g=new Array(3).fill(null).map((function(n,e){return{x:f.getTime()+a.f*(e+1),y:2===e&&null!=r?r:0+30*(e+1)}})),S="string"==typeof r?i.a.STRING:i.a.NUMBER,b=new Array(s).fill(null).map((function(n,e){return{id:e.toString(),resolution:0,data:0===e?g:[],color:"black",name:"Quality "+(e+1),detailedName:"/BellevueWA/QualitySmogIndex-"+e,unit:"%",dataType:S}})),y=function(){function n(n){Object(u.i)(this,n)}return n.prototype.render=function(){return Object(u.h)("monitor-kpi",{widgetId:"test-widget",dataStreams:b,viewPort:{start:f,end:h,yMin:0,yMax:5e3,duration:d?a.e:void 0}})},n}()},1130:function(n,e,t){"use strict";var r,u;t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return u})),t.d(e,"c",(function(){return d})),t.d(e,"d",(function(){return i})),t.d(e,"e",(function(){return a})),t.d(e,"f",(function(){return o})),t.d(e,"g",(function(){return c})),function(n){n.NUMBER="NUMBER",n.STRING="STRING",n.BOOLEAN="BOOLEAN"}(r||(r={})),function(n){n.ALARM="ALARM",n.ANOMALY="ANOMALY"}(u||(u={}));var i={liveTimeFrameValueLabel:"Value",historicalTimeFrameValueLabel:"Value",noDataStreamsPresentHeader:"No properties or alarms",noDataStreamsPresentSubHeader:"This widget doesn't have any properties or alarms.",noDataPresentHeader:"No data",noDataPresentSubHeader:"There's no data to display for this time range."},a="round",o=3,c="M 2 2 H 15",d="1, 5"},1134:function(n,e,t){"use strict";t.d(e,"a",(function(){return a})),t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return u})),t.d(e,"d",(function(){return r})),t.d(e,"e",(function(){return c})),t.d(e,"f",(function(){return o})),t.d(e,"g",(function(){return d})),t.d(e,"h",(function(){return m}));var r=1e3,u=60*r,i=60*u,a=24*i,o=30*a,c=12*o,d=function(n){if(n<0)throw new Error("Time cannot be negative!");var e=Math.floor(n/1e3),t=Math.floor(e/60),r=Math.floor(t/60);return{day:Math.floor(r/24),hour:r%=24,minute:t%=60,seconds:e%=60}},m=function(n,e,t){var r=t.start,c=t.end.getTime()-r.getTime();return e<i?c<u?n.toLocaleString("en-US",{minute:"numeric",second:"numeric"}):c<=10*u?n.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):c<=i?n.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):c<=a?n.toLocaleString("en-US",{hour12:!0,hour:"numeric",month:"numeric",minute:"numeric",day:"numeric"}):c<=o?n.toLocaleString("en-US",{hour12:!0,hour:"numeric",year:"numeric",month:"numeric",day:"numeric"}):n.toLocaleString("en-US",{day:"numeric",month:"numeric",year:"numeric"}):e<=i?n.toLocaleString("en-US",{hour:"numeric",day:"numeric",month:"numeric",hour12:!0}):e<a?n.toLocaleString("en-US",{day:"numeric",month:"numeric"}):n.toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric"})}},1146:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return r}));var r=function(n){if(Number.isNaN(n)||n===1/0||n===-1/0)return n;if(Math.abs(n)<1)return Number(n.toPrecision(4));var e=Math.trunc(n);return e+Number((n-e).toFixed(4))},u=function(n){return/^(\+|-)?(Infinity|\d+)(\.\d+)?e?((\+|-)?\d+)?$/.test(String(n))}},1147:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return r}));var r=function(n){if(Number.isNaN(n)||n===1/0||n===-1/0)return n;if(Math.abs(n)<1)return Number(n.toPrecision(4));var e=Math.trunc(n);return e+Number((n-e).toFixed(4))},u=function(n){return/^(\+|-)?(Infinity|\d+)(\.\d+)?e?((\+|-)?\d+)?$/.test(String(n))}},874:function(n,e,t){"use strict";t.r(e),t.d(e,"monitor_kpi_standard",(function(){return y}));var r,u=t(60),i=t(42),a=t(69),o=t(1146),c=new URLSearchParams(window.location.search),d="true"===c.get("isEnabled"),m=c.get("latestValue"),l=c.get("numCharts");r=null==m||"null"===m||"undefined"===m?null:Object(o.a)(m)?Number.parseInt(m,10):m;var s=l&&Object(o.a)(l)?Number.parseInt(l,10):1,f=new Date(1998,0,0),h=new Date(2e3,0,1),g=new Array(3).fill(null).map((function(n,e){return{x:f.getTime()+a.f*(e+1),y:2===e&&null!=r?r:0+30*(e+1)}})),S="string"==typeof r?i.a.STRING:i.a.NUMBER,b=new Array(s).fill(null).map((function(n,e){return{id:e.toString(),resolution:0,data:0===e?g:[],color:"black",name:"Quality "+(e+1),detailedName:"/BellevueWA/QualitySmogIndex-"+e,unit:"%",dataType:S}})),y=function(){function n(n){Object(u.i)(this,n)}return n.prototype.render=function(){return Object(u.h)("monitor-kpi",{widgetId:"test-widget",dataStreams:b,viewPort:{start:f,end:h,yMin:0,yMax:5e3,duration:d?a.e:void 0}})},n}()}}]);