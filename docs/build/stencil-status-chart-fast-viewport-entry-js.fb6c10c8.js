(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{1113:function(e,t,n){"use strict";n.r(t),n.d(t,"status_chart_fast_viewport",(function(){return h}));var r=n(64),i=n(43),a=n(72),o=new Date(1999,9,0,0,0),u=new Date(2e3,2,0,0,10),c=Array.from({length:50},(function(e,t){return{x:new Date(2e3,0,t,0,0).getTime(),y:2500}})),h=function(){function e(e){var t=this;Object(r.i)(this,e),this.dataStreams=[],this.colorIndex=0,this.start=o,this.end=u,this.idx=0,this.timeRange=[[new Date(2e3,2,0,0,0),new Date(2e3,3,0,0,0)],[new Date(2010,4,0,0,0),new Date(2020,5,0,0,0)],[new Date(2030,6,0,0,0),new Date(2040,7,0,0,0)],[o,u]],this.changeViewport=function(){var e=t.timeRange[t.idx%t.timeRange.length],n=e[0],r=e[1];t.start=n,t.end=r,t.idx+=1}}return e.prototype.render=function(){var e;return Object(r.h)("div",null,Object(r.h)("button",{id:"change-viewport",onClick:this.changeViewport},"Change Viewport"),Object(r.h)("br",null),Object(r.h)("br",null),Object(r.h)("div",{id:"chart-container",style:{border:"1px solid lightgray",height:"500px",width:"500px"}},Object(r.h)("monitor-status-chart",{alarms:{expires:a.b},dataStreams:[{id:"test",color:"#264653",name:"test stream",aggregates:(e={},e[a.b]=c,e),data:[],resolution:a.b,dataType:i.a.NUMBER}],widgetId:"widget-id",size:{height:500,width:500},viewPort:{yMin:0,yMax:5e3,start:this.start,end:this.end}}),Object(r.h)("monitor-webgl-context",null)))},e}()},1137:function(e,t,n){"use strict";var r,i;n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return c})),function(e){e.NUMBER="NUMBER",e.STRING="STRING",e.BOOLEAN="BOOLEAN"}(r||(r={})),function(e){e.ALARM="ALARM",e.ANOMALY="ANOMALY"}(i||(i={}));var a={liveTimeFrameValueLabel:"Value",historicalTimeFrameValueLabel:"Value",noDataStreamsPresentHeader:"No properties or alarms",noDataStreamsPresentSubHeader:"This widget doesn't have any properties or alarms.",noDataPresentHeader:"No data",noDataPresentSubHeader:"There's no data to display for this time range."},o="round",u=3,c="M 2 2 H 15",h="1, 5"},1141:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return h})),n.d(t,"h",(function(){return s}));var r=1e3,i=60*r,a=60*i,o=24*a,u=30*o,c=12*u,h=function(e){if(e<0)throw new Error("Time cannot be negative!");var t=Math.floor(e/1e3),n=Math.floor(t/60),r=Math.floor(n/60);return{day:Math.floor(r/24),hour:r%=24,minute:n%=60,seconds:t%=60}},s=function(e,t,n){var r=n.start,c=n.end.getTime()-r.getTime();return t<a?c<i?e.toLocaleString("en-US",{minute:"numeric",second:"numeric"}):c<=10*i?e.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):c<=a?e.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):c<=o?e.toLocaleString("en-US",{hour12:!0,hour:"numeric",month:"numeric",minute:"numeric",day:"numeric"}):c<=u?e.toLocaleString("en-US",{hour12:!0,hour:"numeric",year:"numeric",month:"numeric",day:"numeric"}):e.toLocaleString("en-US",{day:"numeric",month:"numeric",year:"numeric"}):t<=a?e.toLocaleString("en-US",{hour:"numeric",day:"numeric",month:"numeric",hour12:!0}):t<o?e.toLocaleString("en-US",{day:"numeric",month:"numeric"}):e.toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric"})}},972:function(e,t,n){"use strict";n.r(t),n.d(t,"status_chart_fast_viewport",(function(){return h}));var r=n(63),i=n(1137),a=n(1141),o=new Date(1999,9,0,0,0),u=new Date(2e3,2,0,0,10),c=Array.from({length:50},(function(e,t){return{x:new Date(2e3,0,t,0,0).getTime(),y:2500}})),h=function(){function e(e){var t=this;Object(r.i)(this,e),this.dataStreams=[],this.colorIndex=0,this.start=o,this.end=u,this.idx=0,this.timeRange=[[new Date(2e3,2,0,0,0),new Date(2e3,3,0,0,0)],[new Date(2010,4,0,0,0),new Date(2020,5,0,0,0)],[new Date(2030,6,0,0,0),new Date(2040,7,0,0,0)],[o,u]],this.changeViewport=function(){var e=t.timeRange[t.idx%t.timeRange.length],n=e[0],r=e[1];t.start=n,t.end=r,t.idx+=1}}return e.prototype.render=function(){var e;return Object(r.h)("div",null,Object(r.h)("button",{id:"change-viewport",onClick:this.changeViewport},"Change Viewport"),Object(r.h)("br",null),Object(r.h)("br",null),Object(r.h)("div",{id:"chart-container",style:{border:"1px solid lightgray",height:"500px",width:"500px"}},Object(r.h)("monitor-status-chart",{alarms:{expires:a.b},dataStreams:[{id:"test",color:"#264653",name:"test stream",aggregates:(e={},e[a.b]=c,e),data:[],resolution:a.b,dataType:i.a.NUMBER}],widgetId:"widget-id",size:{height:500,width:500},viewPort:{yMin:0,yMax:5e3,start:this.start,end:this.end}}),Object(r.h)("monitor-webgl-context",null)))},e}()}}]);