(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1002:function(t,e,n){"use strict";n.r(e),n.d(e,"bp_asset_explorer_loading",(function(){return o}));var r=n(64),i=n(1184),o=function(){function t(t){Object(r.i)(this,t)}return t.prototype.render=function(){var t=this;return Object(r.h)("bp-asset-explorer",{isLoading:!0,isError:!1,readonly:!1,nodes:i.d,onFetchChildren:function(){return function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function s(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){t.done?i(t.value):function(t){return t instanceof n?t:new n((function(e){e(t)}))}(t.value).then(a,s)}c((r=r.apply(t,e||[])).next())}))}(t,void 0,void 0,(function(){return function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}(this,(function(t){return[2,[]]}))}))}},Object(r.h)("div",{"data-test-tag":"loading-slot",slot:"loading"},"Loading"))},t}()},1181:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return o}));for(var r=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function s(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){t.done?i(t.value):function(t){return t instanceof n?t:new n((function(e){e(t)}))}(t.value).then(a,s)}c((r=r.apply(t,e||[])).next())}))},i=function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},o=[{data:"test",id:"123",displayName:"testAsset",children:[{data:"test",id:"12345",displayName:"testAsset2",children:[],isOpen:!1,isSelected:!1,hasChildren:!1},{data:"test",id:"12344",displayName:"testAsset3",children:[],isOpen:!1,isSelected:!1,hasChildren:!1}],isOpen:!0,isSelected:!1,hasChildren:!0}],a=[],s=0;s<1e4;s+=1)a.push({data:"test",id:s.toString(),displayName:"testAsset"+s,children:[],isOpen:!1,isSelected:!1,hasChildren:!1});var c=[Object.assign({},o[0])];c[0].children=a;var u=[Object.assign(Object.assign({},o[0]),{isSelected:!0})],l=[Object.assign(Object.assign({},o[0]),{isSelected:!0,isOpen:!0,children:[Object.assign(Object.assign({},o[0].children[0]),{isSelected:!0}),o[0].children[1]]})];Object.assign(Object.assign({},o[0]),{data:{assetProperties:[{id:"assetProperty1",name:"assetProperty1",dataPointPromise:function(){return r(void 0,void 0,void 0,(function(){return i(this,(function(t){return[2,[]]}))}))}},{id:"assetProperty2",name:"assetProperty2",dataPointPromise:function(){return r(void 0,void 0,void 0,(function(){return i(this,(function(t){return[2,[]]}))}))}}]}}),Object.assign(Object.assign({},o[0]),{data:{assetProperties:[{id:"assetProperty1",name:"assetProperty1",dataPointPromise:function(){return r(void 0,void 0,void 0,(function(){return i(this,(function(t){throw Error()}))}))}},{id:"assetProperty2",name:"assetProperty2",dataPointPromise:function(){return r(void 0,void 0,void 0,(function(){return i(this,(function(t){return[2,[]]}))}))}}]}})},1184:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return o}));for(var r=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function s(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){t.done?i(t.value):function(t){return t instanceof n?t:new n((function(e){e(t)}))}(t.value).then(a,s)}c((r=r.apply(t,e||[])).next())}))},i=function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},o=[{data:"test",id:"123",displayName:"testAsset",children:[{data:"test",id:"12345",displayName:"testAsset2",children:[],isOpen:!1,isSelected:!1,hasChildren:!1},{data:"test",id:"12344",displayName:"testAsset3",children:[],isOpen:!1,isSelected:!1,hasChildren:!1}],isOpen:!0,isSelected:!1,hasChildren:!0}],a=[],s=0;s<1e4;s+=1)a.push({data:"test",id:s.toString(),displayName:"testAsset"+s,children:[],isOpen:!1,isSelected:!1,hasChildren:!1});var c=[Object.assign({},o[0])];c[0].children=a;var u=[Object.assign(Object.assign({},o[0]),{isSelected:!0})],l=[Object.assign(Object.assign({},o[0]),{isSelected:!0,isOpen:!0,children:[Object.assign(Object.assign({},o[0].children[0]),{isSelected:!0}),o[0].children[1]]})];Object.assign(Object.assign({},o[0]),{data:{assetProperties:[{id:"assetProperty1",name:"assetProperty1",dataPointPromise:function(){return r(void 0,void 0,void 0,(function(){return i(this,(function(t){return[2,[]]}))}))}},{id:"assetProperty2",name:"assetProperty2",dataPointPromise:function(){return r(void 0,void 0,void 0,(function(){return i(this,(function(t){return[2,[]]}))}))}}]}}),Object.assign(Object.assign({},o[0]),{data:{assetProperties:[{id:"assetProperty1",name:"assetProperty1",dataPointPromise:function(){return r(void 0,void 0,void 0,(function(){return i(this,(function(t){throw Error()}))}))}},{id:"assetProperty2",name:"assetProperty2",dataPointPromise:function(){return r(void 0,void 0,void 0,(function(){return i(this,(function(t){return[2,[]]}))}))}}]}})},861:function(t,e,n){"use strict";n.r(e),n.d(e,"bp_asset_explorer_loading",(function(){return o}));var r=n(63),i=n(1181),o=function(){function t(t){Object(r.i)(this,t)}return t.prototype.render=function(){var t=this;return Object(r.h)("bp-asset-explorer",{isLoading:!0,isError:!1,readonly:!1,nodes:i.d,onFetchChildren:function(){return function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function s(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){t.done?i(t.value):function(t){return t instanceof n?t:new n((function(e){e(t)}))}(t.value).then(a,s)}c((r=r.apply(t,e||[])).next())}))}(t,void 0,void 0,(function(){return function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}(this,(function(t){return[2,[]]}))}))}},Object(r.h)("div",{"data-test-tag":"loading-slot",slot:"loading"},"Loading"))},t}()}}]);