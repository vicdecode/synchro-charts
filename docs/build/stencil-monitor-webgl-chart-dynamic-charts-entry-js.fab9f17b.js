(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1072:function(t,e,n){"use strict";n.r(e),n.d(e,"monitor_webgl_chart_dynamic_charts",(function(){return f}));var r=n(61),i=n(1130),o=(n(1135),n(1132),n(1133),n(1131),n(1134),n(1138),n(1163)),a=function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var o=arguments[e],a=0,c=o.length;a<c;a++,i++)r[i]=o[a];return r},c=new Date(1998,0,0),u=new Date(2e3,0,1),h={x:new Date((c.getTime()+u.getTime())/2).getTime(),y:250},s=function(t,e){return new Array(e).fill(0).map((function(e,n){return{x:t.x,y:t.y+250*n}}))},d=1,f=function(){function t(t){var e=this;Object(r.i)(this,t),this.chartKeys=[],this.width=500,this.xOffset=0,this.shiftLeft=function(){e.xOffset-=100},this.shiftRight=function(){e.xOffset+=100},this.increaseWidth=function(){e.width+=100},this.decreaseWidth=function(){e.width>100&&(e.width-=100)},this.addChartAtFront=function(){var t=Object(o.a)();e.chartKeys=a([{key:t,data:[{id:t,color:"black",name:"test stream",data:s(h,d),resolution:0,dataType:i.a.NUMBER}]}],e.chartKeys),d+=1},this.addChartAtBack=function(){var t=Object(o.a)();e.chartKeys=a(e.chartKeys,[{key:t,data:[{id:t,color:"black",name:"test stream",data:s(h,d),resolution:0,dataType:i.a.NUMBER}]}]),d+=1},this.removeFrontChart=function(){e.chartKeys.length>0&&(e.chartKeys=e.chartKeys.slice(1))},this.removeBackChart=function(){e.chartKeys.length>0&&(e.chartKeys=e.chartKeys.slice(0,-1))}}return t.prototype.render=function(){var t=this;return Object(r.h)("div",null,Object(r.h)("button",{id:"shift-right",onClick:this.shiftRight},"Shift Right"),Object(r.h)("button",{id:"shift-left",onClick:this.shiftLeft},"Shift Left"),Object(r.h)("button",{id:"increase-width",onClick:this.increaseWidth},"Increase Width"),Object(r.h)("button",{id:"decrease-width",onClick:this.decreaseWidth},"Decrease Width"),Object(r.h)("button",{id:"add-chart-to-front",onClick:this.addChartAtFront},"Add Chart To Front"),Object(r.h)("button",{id:"add-chart-to-back",onClick:this.addChartAtBack},"Add Chart To Back"),Object(r.h)("button",{id:"remove-chart-from-back",onClick:this.removeBackChart},"Remove Chart From Back"),Object(r.h)("button",{id:"remove-chart-from-front",onClick:this.removeFrontChart},"Remove Chart From Front"),Object(r.h)("hr",null),this.chartKeys.map((function(e){var n=e.key,i=e.data;return Object(r.h)("div",{key:n,style:{marginLeft:t.xOffset+"px",width:t.width+"px",height:"500px"}},Object(r.h)("monitor-line-chart",{dataStreams:i,widgetId:n,viewPort:{start:c,end:u,yMin:0,yMax:5e3}}))})),Object(r.h)("monitor-webgl-context",null))},t}()},1130:function(t,e,n){"use strict";var r,i;n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return h})),n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return a})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return u})),function(t){t.NUMBER="NUMBER",t.STRING="STRING",t.BOOLEAN="BOOLEAN"}(r||(r={})),function(t){t.ALARM="ALARM",t.ANOMALY="ANOMALY"}(i||(i={}));var o={liveTimeFrameValueLabel:"Value",historicalTimeFrameValueLabel:"Value",noDataStreamsPresentHeader:"No properties or alarms",noDataStreamsPresentSubHeader:"This widget doesn't have any properties or alarms.",noDataPresentHeader:"No data",noDataPresentSubHeader:"There's no data to display for this time range."},a="round",c=3,u="M 2 2 H 15",h="1, 5"},1131:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return c}));var r="-",i="No properties or alarms",o="This widget doesn't have any properties or alarms.",a="No data",c="There's no data to display for this time range."},1132:function(t,e,n){"use strict";var r,i,o;n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),function(t){t.LESS_THAN="LT",t.GREATER_THAN="GT",t.LESS_THAN_EQUAL="LTE",t.GREATER_THAN_EQUAL="GTE",t.EQUAL="EQ"}(r||(r={})),function(t){!function(t){t.EITHER="EITHER",t.RIGHT="RIGHT",t.LEFT="LEFT"}(t.DATA_ALIGNMENT||(t.DATA_ALIGNMENT={}))}(i||(i={})),function(t){t.ERROR="error",t.ACTIVE="active",t.NORMAL="normal",t.ACKNOWLEDGED="acknowledged",t.SNOOZED="snoozed",t.DISABLED="disabled",t.LATCHED="latched"}(o||(o={}))},1133:function(t,e,n){"use strict";var r,i;n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r})),function(t){t.TimeSeries="time-series",t.Log="log",t.Linear="linear"}(r||(r={})),function(t){t.RIGHT="RIGHT",t.BOTTOM="BOTTOM"}(i||(i={}))},1134:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return h})),n.d(e,"h",(function(){return s}));var r=1e3,i=60*r,o=60*i,a=24*o,c=30*a,u=12*c,h=function(t){if(t<0)throw new Error("Time cannot be negative!");var e=Math.floor(t/1e3),n=Math.floor(e/60),r=Math.floor(n/60);return{day:Math.floor(r/24),hour:r%=24,minute:n%=60,seconds:e%=60}},s=function(t,e,n){var r=n.start,u=n.end.getTime()-r.getTime();return e<o?u<i?t.toLocaleString("en-US",{minute:"numeric",second:"numeric"}):u<=10*i?t.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):u<=o?t.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):u<=a?t.toLocaleString("en-US",{hour12:!0,hour:"numeric",month:"numeric",minute:"numeric",day:"numeric"}):u<=c?t.toLocaleString("en-US",{hour12:!0,hour:"numeric",year:"numeric",month:"numeric",day:"numeric"}):t.toLocaleString("en-US",{day:"numeric",month:"numeric",year:"numeric"}):e<=o?t.toLocaleString("en-US",{hour:"numeric",day:"numeric",month:"numeric",hour12:!0}):e<a?t.toLocaleString("en-US",{day:"numeric",month:"numeric"}):t.toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric"})}},1135:function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return r})),n(1130),n(1132),n(1133),n(1131),n(1134),function(t){t.LINEAR="linear-regression"}(r||(r={}))},1136:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i}));var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{};function i(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function o(t,e){return t(e={exports:{}},e.exports),e.exports}}).call(this,n(34))},1138:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i}));var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{};function i(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function o(t,e){return t(e={exports:{}},e.exports),e.exports}}).call(this,n(34))},1160:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));for(var r=n(1136),i=Object(r.a)((function(t){var e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(e){var n=new Uint8Array(16);t.exports=function(){return e(n),n}}else{var r=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),r[e]=t>>>((3&e)<<3)&255;return r}}})),o=[],a=0;a<256;++a)o[a]=(a+256).toString(16).substr(1);var c=function(t,e){var n=e||0,r=o;return[r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]]].join("")},u=function(t,e,n){var r=e&&n||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var o=(t=t||{}).random||(t.rng||i)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e)for(var a=0;a<16;++a)e[r+a]=o[a];return e||c(o)}},1163:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));for(var r=n(1138),i=Object(r.a)((function(t){var e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(e){var n=new Uint8Array(16);t.exports=function(){return e(n),n}}else{var r=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),r[e]=t>>>((3&e)<<3)&255;return r}}})),o=[],a=0;a<256;++a)o[a]=(a+256).toString(16).substr(1);var c=function(t,e){var n=e||0,r=o;return[r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]]].join("")},u=function(t,e,n){var r=e&&n||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var o=(t=t||{}).random||(t.rng||i)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e)for(var a=0;a<16;++a)e[r+a]=o[a];return e||c(o)}},931:function(t,e,n){"use strict";n.r(e),n.d(e,"monitor_webgl_chart_dynamic_charts",(function(){return f}));var r=n(60),i=n(42),o=(n(138),n(68),n(99),n(51),n(69),n(1136),n(1160)),a=function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var o=arguments[e],a=0,c=o.length;a<c;a++,i++)r[i]=o[a];return r},c=new Date(1998,0,0),u=new Date(2e3,0,1),h={x:new Date((c.getTime()+u.getTime())/2).getTime(),y:250},s=function(t,e){return new Array(e).fill(0).map((function(e,n){return{x:t.x,y:t.y+250*n}}))},d=1,f=function(){function t(t){var e=this;Object(r.i)(this,t),this.chartKeys=[],this.width=500,this.xOffset=0,this.shiftLeft=function(){e.xOffset-=100},this.shiftRight=function(){e.xOffset+=100},this.increaseWidth=function(){e.width+=100},this.decreaseWidth=function(){e.width>100&&(e.width-=100)},this.addChartAtFront=function(){var t=Object(o.a)();e.chartKeys=a([{key:t,data:[{id:t,color:"black",name:"test stream",data:s(h,d),resolution:0,dataType:i.a.NUMBER}]}],e.chartKeys),d+=1},this.addChartAtBack=function(){var t=Object(o.a)();e.chartKeys=a(e.chartKeys,[{key:t,data:[{id:t,color:"black",name:"test stream",data:s(h,d),resolution:0,dataType:i.a.NUMBER}]}]),d+=1},this.removeFrontChart=function(){e.chartKeys.length>0&&(e.chartKeys=e.chartKeys.slice(1))},this.removeBackChart=function(){e.chartKeys.length>0&&(e.chartKeys=e.chartKeys.slice(0,-1))}}return t.prototype.render=function(){var t=this;return Object(r.h)("div",null,Object(r.h)("button",{id:"shift-right",onClick:this.shiftRight},"Shift Right"),Object(r.h)("button",{id:"shift-left",onClick:this.shiftLeft},"Shift Left"),Object(r.h)("button",{id:"increase-width",onClick:this.increaseWidth},"Increase Width"),Object(r.h)("button",{id:"decrease-width",onClick:this.decreaseWidth},"Decrease Width"),Object(r.h)("button",{id:"add-chart-to-front",onClick:this.addChartAtFront},"Add Chart To Front"),Object(r.h)("button",{id:"add-chart-to-back",onClick:this.addChartAtBack},"Add Chart To Back"),Object(r.h)("button",{id:"remove-chart-from-back",onClick:this.removeBackChart},"Remove Chart From Back"),Object(r.h)("button",{id:"remove-chart-from-front",onClick:this.removeFrontChart},"Remove Chart From Front"),Object(r.h)("hr",null),this.chartKeys.map((function(e){var n=e.key,i=e.data;return Object(r.h)("div",{key:n,style:{marginLeft:t.xOffset+"px",width:t.width+"px",height:"500px"}},Object(r.h)("monitor-line-chart",{dataStreams:i,widgetId:n,viewPort:{start:c,end:u,yMin:0,yMax:5e3}}))})),Object(r.h)("monitor-webgl-context",null))},t}()}}]);