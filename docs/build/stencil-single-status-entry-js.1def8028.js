(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{1097:function(t,e,a){"use strict";a.r(e),a.d(e,"single_status",(function(){return p}));var r=a(64),n=a(43),o=(a(144),a(71),a(105),a(52),a(72)),i=(a(1145),a(1150),a(1172)),s=(a(1146),a(1169),a(1170),a(1158),a(1152),a(1160),a(1154),a(1148),a(1180)),c=(a(1164),a(1192)),h=new Date(2e3,0,0),u=new Date(2e3,0,1),l=u.getTime()-h.getTime(),d={x:h.getTime()+l/3,y:12},p=function(){function t(t){Object(r.i)(this,t)}return t.prototype.componentDidLoad=function(){var t,e=this.el.querySelector("#test-container"),a=Object(c.c)({alarms:{expires:o.a},viewPort:{start:h,end:u,yMin:0,yMax:c.a},dataStreams:[{id:"test-stream",name:"test-stream-name",color:"black",resolution:o.a,aggregates:(t={},t[o.a]=[d],t),data:[],dataType:n.a.NUMBER}],container:e,chartSize:s.a,minBufferSize:100,bufferFactor:2,thresholdOptions:{showColor:!1},thresholds:[]});i.b.addChartScene(a);var r=e.getBoundingClientRect();i.b.setChartRect(a.id,Object.assign({density:1},r.toJSON()))},t.prototype.render=function(){return Object(r.h)("monitor-webgl-context",null,Object(r.h)("div",{id:"test-container",style:{width:s.a.width+"px",height:s.a.height+"px"}}))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(r.g)(this)},enumerable:!0,configurable:!0}),t}()},1163:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var r=function(t,e){return Math.abs(t(new Date(e).getTime())-t(new Date(0).getTime()))}},1164:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var r=function(t,e){return Math.abs(t(new Date(e).getTime())-t(new Date(0).getTime()))}},1190:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return p})),a.d(e,"d",(function(){return f})),a(1141);var r=a(1149),n=a(1151),o=a(1147),i=a(1163),s=1,c=33.5,h=[165,165,165],u=function(t){var e=t.dataStreams,a=t.mesh,r=t.toClipSpace,u=t.thresholds,l=t.thresholdOptions,d=t.chartSize,p=t.alarms,f=e.map((function(t){return Object(n.f)(t,t.resolution)}));a.count=function(t){return t.reduce((function(t,e){return t+Math.max(e.length,0)}),0)}(f);var m=a.geometry.attributes,S=m.color,b=m.status,g=0,v=0,w=s/e.length,C=c/d.height,y=w-C;f.forEach((function(t,e){t.forEach((function(a,c){var d=(t[c+1]||[])[0],f=void 0===d?void 0:d,m=a[0],C=a[1],O=Object(o.a)(C,u);if(null!=O&&l.showColor){var j=Object(n.d)(O.color),z=j[0],x=j[1],M=j[2];S.array[v]=z,S.array[v+1]=x,S.array[v+2]=M}else{var A=h[0],D=h[1],F=h[2];S.array[v]=A,S.array[v+1]=D,S.array[v+2]=F}v+=3,b.array[g]=r(m),b.array[g+1]=s-w*(e+1),b.array[g+2]=function(t){var e=t.nextX,a=t.currX,r=t.toClipSpace,n=t.alarms,o=n?n.expires:void 0;if(null!=o){var s=Object(i.a)(r,o);return null==e?s:Math.min(Object(i.a)(r,e-a),s)}return null!=e?Object(i.a)(r,e-a):Object(i.a)(r,Date.now()-a)}({currX:m,nextX:f,toClipSpace:r,alarms:p}),b.array[g+3]=y,g+=4}))})),b.needsUpdate=!0,S.needsUpdate=!0},l=[0,0,0,1,1,0,0,1,1,0,1,1],d=function(t){var e=t.alarms,a=t.dataStreams,o=t.toClipSpace,i=t.bufferFactor,s=t.minBufferSize,c=t.thresholdOptions,h=t.thresholds,d=t.chartSize,p=new r.c,f=Math.max(s,Object(n.e)(a)*i);!function(t,e){t.setAttribute("position",new r.i(new Float32Array(l),2)),t.setAttribute("status",new r.k(new Float32Array(4*e),4,!1)),t.setAttribute("color",new r.k(new Uint8Array(3*e),3,!0))}(p,f);var m=new r.f({vertexShader:"\nprecision highp float;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nattribute vec4 status;\nattribute vec2 position;\nattribute vec3 color;\nvarying vec3 vColor;\n\nvoid main() {\n  float width = status.z;\n  float height = status.w;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x * width + status.x, position.y * height + status.y, 0.0, 1.0);\n  vColor = color;\n}\n",fragmentShader:"\nprecision highp float;\nvarying vec3 vColor;\n\nvoid main() {\n  gl_FragColor = vec4(vColor, 1.0);\n}\n",side:r.b,transparent:!1}),S=new r.j(p,m,f);return u({dataStreams:a,mesh:S,toClipSpace:o,thresholds:h,thresholdOptions:c,chartSize:d,alarms:e}),S.frustumCulled=!1,S},p=function(t){var e=t.alarms,a=t.dataStreams,o=t.container,i=t.viewPort,s=t.bufferFactor,c=t.minBufferSize,h=t.onUpdate,u=t.thresholdOptions,l=t.thresholds,p=t.chartSize,f=new r.l,m=Object(n.a)(i);return f.add(d({alarms:e,dataStreams:a,toClipSpace:m,bufferFactor:s,minBufferSize:c,thresholdOptions:u,thresholds:l,chartSize:p})),Object(n.c)({scene:f,viewPort:i,container:o,toClipSpace:m,onUpdate:h})},f=function(t){var e=t.scene,a=t.alarms,r=t.dataStreams,o=t.minBufferSize,i=t.bufferFactor,s=t.viewPort,c=t.container,h=t.onUpdate,l=t.chartSize,d=t.thresholdOptions,f=t.thresholds,m=t.hasDataChanged,S=t.hasAnnotationChanged,b=t.hasSizeChanged,g=e.scene.children[0];return function(t){return t.geometry.attributes.status.array.length/4}(g)<Object(n.e)(r)||Object(n.b)(s,e.toClipSpace)?p({onUpdate:h,dataStreams:r,alarms:a,container:c,viewPort:s,minBufferSize:o,bufferFactor:i,chartSize:l,thresholdOptions:d,thresholds:f}):(function(t){var e=t.alarms,a=t.statuses,r=t.dataStreams,n=t.toClipSpace,o=t.thresholdOptions,i=t.thresholds,s=t.chartSize,c=t.hasDataChanged,h=t.hasAnnotationChanged,l=t.hasSizeChanged;(c||h||l)&&u({dataStreams:r,mesh:a,toClipSpace:n,thresholds:i,thresholdOptions:o,chartSize:s,alarms:e})}({alarms:a,statuses:g,dataStreams:r,toClipSpace:e.toClipSpace,thresholdOptions:d,thresholds:f,chartSize:l,hasDataChanged:m,hasAnnotationChanged:S,hasSizeChanged:b}),e)}},1192:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return p})),a.d(e,"d",(function(){return f})),a(72);var r=a(1150),n=a(1152),o=a(1148),i=a(1164),s=1,c=33.5,h=[165,165,165],u=function(t){var e=t.dataStreams,a=t.mesh,r=t.toClipSpace,u=t.thresholds,l=t.thresholdOptions,d=t.chartSize,p=t.alarms,f=e.map((function(t){return Object(n.f)(t,t.resolution)}));a.count=function(t){return t.reduce((function(t,e){return t+Math.max(e.length,0)}),0)}(f);var m=a.geometry.attributes,S=m.color,b=m.status,g=0,v=0,w=s/e.length,C=c/d.height,y=w-C;f.forEach((function(t,e){t.forEach((function(a,c){var d=(t[c+1]||[])[0],f=void 0===d?void 0:d,m=a[0],C=a[1],O=Object(o.a)(C,u);if(null!=O&&l.showColor){var j=Object(n.d)(O.color),z=j[0],x=j[1],M=j[2];S.array[v]=z,S.array[v+1]=x,S.array[v+2]=M}else{var A=h[0],D=h[1],F=h[2];S.array[v]=A,S.array[v+1]=D,S.array[v+2]=F}v+=3,b.array[g]=r(m),b.array[g+1]=s-w*(e+1),b.array[g+2]=function(t){var e=t.nextX,a=t.currX,r=t.toClipSpace,n=t.alarms,o=n?n.expires:void 0;if(null!=o){var s=Object(i.a)(r,o);return null==e?s:Math.min(Object(i.a)(r,e-a),s)}return null!=e?Object(i.a)(r,e-a):Object(i.a)(r,Date.now()-a)}({currX:m,nextX:f,toClipSpace:r,alarms:p}),b.array[g+3]=y,g+=4}))})),b.needsUpdate=!0,S.needsUpdate=!0},l=[0,0,0,1,1,0,0,1,1,0,1,1],d=function(t){var e=t.alarms,a=t.dataStreams,o=t.toClipSpace,i=t.bufferFactor,s=t.minBufferSize,c=t.thresholdOptions,h=t.thresholds,d=t.chartSize,p=new r.c,f=Math.max(s,Object(n.e)(a)*i);!function(t,e){t.setAttribute("position",new r.i(new Float32Array(l),2)),t.setAttribute("status",new r.k(new Float32Array(4*e),4,!1)),t.setAttribute("color",new r.k(new Uint8Array(3*e),3,!0))}(p,f);var m=new r.f({vertexShader:"\nprecision highp float;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nattribute vec4 status;\nattribute vec2 position;\nattribute vec3 color;\nvarying vec3 vColor;\n\nvoid main() {\n  float width = status.z;\n  float height = status.w;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x * width + status.x, position.y * height + status.y, 0.0, 1.0);\n  vColor = color;\n}\n",fragmentShader:"\nprecision highp float;\nvarying vec3 vColor;\n\nvoid main() {\n  gl_FragColor = vec4(vColor, 1.0);\n}\n",side:r.b,transparent:!1}),S=new r.j(p,m,f);return u({dataStreams:a,mesh:S,toClipSpace:o,thresholds:h,thresholdOptions:c,chartSize:d,alarms:e}),S.frustumCulled=!1,S},p=function(t){var e=t.alarms,a=t.dataStreams,o=t.container,i=t.viewPort,s=t.bufferFactor,c=t.minBufferSize,h=t.onUpdate,u=t.thresholdOptions,l=t.thresholds,p=t.chartSize,f=new r.l,m=Object(n.a)(i);return f.add(d({alarms:e,dataStreams:a,toClipSpace:m,bufferFactor:s,minBufferSize:c,thresholdOptions:u,thresholds:l,chartSize:p})),Object(n.c)({scene:f,viewPort:i,container:o,toClipSpace:m,onUpdate:h})},f=function(t){var e=t.scene,a=t.alarms,r=t.dataStreams,o=t.minBufferSize,i=t.bufferFactor,s=t.viewPort,c=t.container,h=t.onUpdate,l=t.chartSize,d=t.thresholdOptions,f=t.thresholds,m=t.hasDataChanged,S=t.hasAnnotationChanged,b=t.hasSizeChanged,g=e.scene.children[0];return function(t){return t.geometry.attributes.status.array.length/4}(g)<Object(n.e)(r)||Object(n.b)(s,e.toClipSpace)?p({onUpdate:h,dataStreams:r,alarms:a,container:c,viewPort:s,minBufferSize:o,bufferFactor:i,chartSize:l,thresholdOptions:d,thresholds:f}):(function(t){var e=t.alarms,a=t.statuses,r=t.dataStreams,n=t.toClipSpace,o=t.thresholdOptions,i=t.thresholds,s=t.chartSize,c=t.hasDataChanged,h=t.hasAnnotationChanged,l=t.hasSizeChanged;(c||h||l)&&u({dataStreams:r,mesh:a,toClipSpace:n,thresholds:i,thresholdOptions:o,chartSize:s,alarms:e})}({alarms:a,statuses:g,dataStreams:r,toClipSpace:e.toClipSpace,thresholdOptions:d,thresholds:f,chartSize:l,hasDataChanged:m,hasAnnotationChanged:S,hasSizeChanged:b}),e)}},956:function(t,e,a){"use strict";a.r(e),a.d(e,"single_status",(function(){return p}));var r=a(63),n=a(1137),o=(a(1142),a(1139),a(1140),a(1138),a(1141)),i=(a(1143),a(1149),a(1171)),s=(a(1144),a(1166),a(1167),a(1157),a(1151),a(1159),a(1153),a(1147),a(1179)),c=(a(1163),a(1190)),h=new Date(2e3,0,0),u=new Date(2e3,0,1),l=u.getTime()-h.getTime(),d={x:h.getTime()+l/3,y:12},p=function(){function t(t){Object(r.i)(this,t)}return t.prototype.componentDidLoad=function(){var t,e=this.el.querySelector("#test-container"),a=Object(c.c)({alarms:{expires:o.a},viewPort:{start:h,end:u,yMin:0,yMax:c.a},dataStreams:[{id:"test-stream",name:"test-stream-name",color:"black",resolution:o.a,aggregates:(t={},t[o.a]=[d],t),data:[],dataType:n.a.NUMBER}],container:e,chartSize:s.a,minBufferSize:100,bufferFactor:2,thresholdOptions:{showColor:!1},thresholds:[]});i.b.addChartScene(a);var r=e.getBoundingClientRect();i.b.setChartRect(a.id,Object.assign({density:1},r.toJSON()))},t.prototype.render=function(){return Object(r.h)("monitor-webgl-context",null,Object(r.h)("div",{id:"test-container",style:{width:s.a.width+"px",height:s.a.height+"px"}}))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(r.g)(this)},enumerable:!0,configurable:!0}),t}()}}]);