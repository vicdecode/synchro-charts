(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1137:function(n,r,t){"use strict";var e,u;t.d(r,"a",(function(){return e})),t.d(r,"b",(function(){return u})),t.d(r,"c",(function(){return f})),t.d(r,"d",(function(){return o})),t.d(r,"e",(function(){return i})),t.d(r,"f",(function(){return a})),t.d(r,"g",(function(){return c})),function(n){n.NUMBER="NUMBER",n.STRING="STRING",n.BOOLEAN="BOOLEAN"}(e||(e={})),function(n){n.ALARM="ALARM",n.ANOMALY="ANOMALY"}(u||(u={}));var o={liveTimeFrameValueLabel:"Value",historicalTimeFrameValueLabel:"Value",noDataStreamsPresentHeader:"No properties or alarms",noDataStreamsPresentSubHeader:"This widget doesn't have any properties or alarms.",noDataPresentHeader:"No data",noDataPresentSubHeader:"There's no data to display for this time range."},i="round",a=3,c="M 2 2 H 15",f="1, 5"},1139:function(n,r,t){"use strict";var e,u,o;t.d(r,"a",(function(){return e})),t.d(r,"b",(function(){return o})),t.d(r,"c",(function(){return u})),function(n){n.LESS_THAN="LT",n.GREATER_THAN="GT",n.LESS_THAN_EQUAL="LTE",n.GREATER_THAN_EQUAL="GTE",n.EQUAL="EQ"}(e||(e={})),function(n){!function(n){n.EITHER="EITHER",n.RIGHT="RIGHT",n.LEFT="LEFT"}(n.DATA_ALIGNMENT||(n.DATA_ALIGNMENT={}))}(u||(u={})),function(n){n.ERROR="error",n.ACTIVE="active",n.NORMAL="normal",n.ACKNOWLEDGED="acknowledged",n.SNOOZED="snoozed",n.DISABLED="disabled",n.LATCHED="latched"}(o||(o={}))},1141:function(n,r,t){"use strict";t.d(r,"a",(function(){return i})),t.d(r,"b",(function(){return o})),t.d(r,"c",(function(){return u})),t.d(r,"d",(function(){return e})),t.d(r,"e",(function(){return c})),t.d(r,"f",(function(){return a})),t.d(r,"g",(function(){return f})),t.d(r,"h",(function(){return l}));var e=1e3,u=60*e,o=60*u,i=24*o,a=30*i,c=12*a,f=function(n){if(n<0)throw new Error("Time cannot be negative!");var r=Math.floor(n/1e3),t=Math.floor(r/60),e=Math.floor(t/60);return{day:Math.floor(e/24),hour:e%=24,minute:t%=60,seconds:r%=60}},l=function(n,r,t){var e=t.start,c=t.end.getTime()-e.getTime();return r<o?c<u?n.toLocaleString("en-US",{minute:"numeric",second:"numeric"}):c<=10*u?n.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):c<=o?n.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):c<=i?n.toLocaleString("en-US",{hour12:!0,hour:"numeric",month:"numeric",minute:"numeric",day:"numeric"}):c<=a?n.toLocaleString("en-US",{hour12:!0,hour:"numeric",year:"numeric",month:"numeric",day:"numeric"}):n.toLocaleString("en-US",{day:"numeric",month:"numeric",year:"numeric"}):r<=o?n.toLocaleString("en-US",{hour:"numeric",day:"numeric",month:"numeric",hour12:!0}):r<i?n.toLocaleString("en-US",{day:"numeric",month:"numeric"}):n.toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric"})}},1144:function(n,r,t){"use strict";t.d(r,"a",(function(){return a})),t.d(r,"b",(function(){return u})),t.d(r,"c",(function(){return i})),t.d(r,"d",(function(){return c})),t.d(r,"e",(function(){return o}));var e=t(1137),u=function(n){return null!=n},o=function(n){return function(r){return n(r)}},i=function(n){return function(r){var t=r.dataType;return n&&t===e.a.STRING||t!==e.a.STRING}},a=function(n){return n.dataType===e.a.NUMBER},c=function(n){return"number"==typeof n}},1146:function(n,r,t){"use strict";t.d(r,"a",(function(){return a})),t.d(r,"b",(function(){return u})),t.d(r,"c",(function(){return i})),t.d(r,"d",(function(){return c})),t.d(r,"e",(function(){return o}));var e=t(43),u=function(n){return null!=n},o=function(n){return function(r){return n(r)}},i=function(n){return function(r){var t=r.dataType;return n&&t===e.a.STRING||t!==e.a.STRING}},a=function(n){return n.dataType===e.a.NUMBER},c=function(n){return"number"==typeof n}},1147:function(n,r,t){"use strict";t.d(r,"a",(function(){return y})),t.d(r,"b",(function(){return N})),t.d(r,"c",(function(){return h})),t.d(r,"d",(function(){return d})),t.d(r,"e",(function(){return v})),t.d(r,"f",(function(){return m})),t.d(r,"g",(function(){return f})),t.d(r,"h",(function(){return l})),t.d(r,"i",(function(){return g})),t.d(r,"j",(function(){return E}));var e,u=t(1139),o=t(1141),i=t(1144),a=t(1159),c=t(1153),f=function(n){return n.filter((function(n){return Object(c.a)(n.value)}))},l=function(n){var r=n&&Array.isArray(n.y)&&n.y;if(!r)return n;var t=r.filter((function(n){return Object(c.a)(n.value)}));return t.length<1?function(n,r){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(t[e]=n[e]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var u=0;for(e=Object.getOwnPropertySymbols(n);u<e.length;u++)r.indexOf(e[u])<0&&Object.prototype.propertyIsEnumerable.call(n,e[u])&&(t[e[u]]=n[e[u]])}return t}(n,["y"]):Object.assign(Object.assign({},n),{y:t})},s=function(n){var r=n.value,t=n.resolution,e=n.viewPort;return"number"==typeof r?r.toString():"string"==typeof r?r:Object(o.h)(r,t,e)},d=function(n){return n.color},h=function(n){var r=n.annotation,t=n.resolution,e=n.viewPort,u=r.showValue?s({value:r.value,resolution:t,viewPort:e}):null,o=r.label&&r.label.show?r.label.text:null;return o&&u?o+" ("+u+")":!u&&o?o:!o&&u?"("+u+")":""},v=function(n){var r=n.label&&n.label.show?n.label.text:null;return r?""+r:""},m=function(n){var r=n.annotation,t=n.resolution,e=n.viewPort,u=r.showValue?s({value:r.value,resolution:t,viewPort:e}):null;return u?""+u:""},p=function(n,r){var t=Object(c.a)(n)?Number(n):n,e=Object(c.a)(r.value)?Number(r.value):r.value,o=r.comparisonOperator;if("number"==typeof t&&"number"==typeof e)switch(o){case u.a.GREATER_THAN:return t>e;case u.a.GREATER_THAN_EQUAL:return t>=e;case u.a.LESS_THAN:return t<e;case u.a.LESS_THAN_EQUAL:return t<=e;case u.a.EQUAL:return t===e;default:throw new Error("Unsupported number threshold comparison operator: "+o)}if("string"==typeof t&&"string"==typeof e){if(o===u.a.EQUAL)return t===e;throw new Error("Unsupported string threshold comparison operator: "+o)}return!1},b=Object(a.b)((function(n){return n.value})).left,A=((e={})[u.a.LESS_THAN_EQUAL]=1,e[u.a.LESS_THAN]=2,e[u.a.GREATER_THAN_EQUAL]=3,e[u.a.GREATER_THAN]=4,e[u.a.EQUAL]=5,e),E=function(n){return function(){for(var n=0,r=0,t=arguments.length;r<t;r++)n+=arguments[r].length;var e=Array(n),u=0;for(r=0;r<t;r++)for(var o=arguments[r],i=0,a=o.length;i<a;i++,u++)e[u]=o[i];return e}(n).sort((function(n,r){return n.value===r.value?A[n.comparisonOperator]-A[r.comparisonOperator]:n.value-r.value}))},y=function(n,r){if(0!==r.length){if("string"==typeof n)return r.find((function(r){return p(n,r)}))||void 0;var t=f(r),e=E(t),u=b(e,n),o=e[u-1],i=e[u];if(u===t.length&&t.length>1&&e[u-1].value===e[u-2].value&&(o=e[u-2],i=e[u-1]),0===u&&t.length>1&&e[u].value===e[u+1].value&&(o=e[u],i=e[u+1]),null!=o||null!=i)return null!=o&&null==i?p(n,o)?o:void 0:null==o&&null!=i?p(n,i)?i:void 0:p(n,o)&&p(n,i)?n>=0?i:o:p(n,o)&&!p(n,i)?o:!p(n,o)&&p(n,i)?i:void 0}},g=Object(i.e)((function(n){return null!=n.comparisonOperator})),N=function(n){return n&&n.y?n.y.filter(g):[]}},1148:function(n,r,t){"use strict";t.d(r,"a",(function(){return y})),t.d(r,"b",(function(){return N})),t.d(r,"c",(function(){return h})),t.d(r,"d",(function(){return d})),t.d(r,"e",(function(){return v})),t.d(r,"f",(function(){return m})),t.d(r,"g",(function(){return f})),t.d(r,"h",(function(){return l})),t.d(r,"i",(function(){return g})),t.d(r,"j",(function(){return E}));var e,u=t(71),o=t(72),i=t(1146),a=t(1160),c=t(1154),f=function(n){return n.filter((function(n){return Object(c.a)(n.value)}))},l=function(n){var r=n&&Array.isArray(n.y)&&n.y;if(!r)return n;var t=r.filter((function(n){return Object(c.a)(n.value)}));return t.length<1?function(n,r){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(t[e]=n[e]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var u=0;for(e=Object.getOwnPropertySymbols(n);u<e.length;u++)r.indexOf(e[u])<0&&Object.prototype.propertyIsEnumerable.call(n,e[u])&&(t[e[u]]=n[e[u]])}return t}(n,["y"]):Object.assign(Object.assign({},n),{y:t})},s=function(n){var r=n.value,t=n.resolution,e=n.viewPort;return"number"==typeof r?r.toString():"string"==typeof r?r:Object(o.h)(r,t,e)},d=function(n){return n.color},h=function(n){var r=n.annotation,t=n.resolution,e=n.viewPort,u=r.showValue?s({value:r.value,resolution:t,viewPort:e}):null,o=r.label&&r.label.show?r.label.text:null;return o&&u?o+" ("+u+")":!u&&o?o:!o&&u?"("+u+")":""},v=function(n){var r=n.label&&n.label.show?n.label.text:null;return r?""+r:""},m=function(n){var r=n.annotation,t=n.resolution,e=n.viewPort,u=r.showValue?s({value:r.value,resolution:t,viewPort:e}):null;return u?""+u:""},p=function(n,r){var t=Object(c.a)(n)?Number(n):n,e=Object(c.a)(r.value)?Number(r.value):r.value,o=r.comparisonOperator;if("number"==typeof t&&"number"==typeof e)switch(o){case u.a.GREATER_THAN:return t>e;case u.a.GREATER_THAN_EQUAL:return t>=e;case u.a.LESS_THAN:return t<e;case u.a.LESS_THAN_EQUAL:return t<=e;case u.a.EQUAL:return t===e;default:throw new Error("Unsupported number threshold comparison operator: "+o)}if("string"==typeof t&&"string"==typeof e){if(o===u.a.EQUAL)return t===e;throw new Error("Unsupported string threshold comparison operator: "+o)}return!1},b=Object(a.b)((function(n){return n.value})).left,A=((e={})[u.a.LESS_THAN_EQUAL]=1,e[u.a.LESS_THAN]=2,e[u.a.GREATER_THAN_EQUAL]=3,e[u.a.GREATER_THAN]=4,e[u.a.EQUAL]=5,e),E=function(n){return function(){for(var n=0,r=0,t=arguments.length;r<t;r++)n+=arguments[r].length;var e=Array(n),u=0;for(r=0;r<t;r++)for(var o=arguments[r],i=0,a=o.length;i<a;i++,u++)e[u]=o[i];return e}(n).sort((function(n,r){return n.value===r.value?A[n.comparisonOperator]-A[r.comparisonOperator]:n.value-r.value}))},y=function(n,r){if(0!==r.length){if("string"==typeof n)return r.find((function(r){return p(n,r)}))||void 0;var t=f(r),e=E(t),u=b(e,n),o=e[u-1],i=e[u];if(u===t.length&&t.length>1&&e[u-1].value===e[u-2].value&&(o=e[u-2],i=e[u-1]),0===u&&t.length>1&&e[u].value===e[u+1].value&&(o=e[u],i=e[u+1]),null!=o||null!=i)return null!=o&&null==i?p(n,o)?o:void 0:null==o&&null!=i?p(n,i)?i:void 0:p(n,o)&&p(n,i)?n>=0?i:o:p(n,o)&&!p(n,i)?o:!p(n,o)&&p(n,i)?i:void 0}},g=Object(i.e)((function(n){return null!=n.comparisonOperator})),N=function(n){return n&&n.y?n.y.filter(g):[]}},1153:function(n,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return e}));var e=function(n){if(Number.isNaN(n)||n===1/0||n===-1/0)return n;if(Math.abs(n)<1)return Number(n.toPrecision(4));var r=Math.trunc(n);return r+Number((n-r).toFixed(4))},u=function(n){return/^(\+|-)?(Infinity|\d+)(\.\d+)?e?((\+|-)?\d+)?$/.test(String(n))}},1154:function(n,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return e}));var e=function(n){if(Number.isNaN(n)||n===1/0||n===-1/0)return n;if(Math.abs(n)<1)return Number(n.toPrecision(4));var r=Math.trunc(n);return r+Number((n-r).toFixed(4))},u=function(n){return/^(\+|-)?(Infinity|\d+)(\.\d+)?e?((\+|-)?\d+)?$/.test(String(n))}},1159:function(n,r,t){"use strict";function e(n,r){return n<r?-1:n>r?1:n>=r?0:NaN}function u(n){return 1===n.length&&(n=function(n){return function(r,t){return e(n(r),t)}}(n)),{left:function(r,t,e,u){for(null==e&&(e=0),null==u&&(u=r.length);e<u;){var o=e+u>>>1;n(r[o],t)<0?e=o+1:u=o}return e},right:function(r,t,e,u){for(null==e&&(e=0),null==u&&(u=r.length);e<u;){var o=e+u>>>1;n(r[o],t)>0?u=o:e=o+1}return e}}}t.d(r,"a",(function(){return o})),t.d(r,"b",(function(){return u})),t.d(r,"c",(function(){return f})),t.d(r,"d",(function(){return l})),t.d(r,"e",(function(){return s}));var o=u(e).right,i=Math.sqrt(50),a=Math.sqrt(10),c=Math.sqrt(2);function f(n,r,t){var e,u,o,i,a=-1;if(t=+t,(n=+n)===(r=+r)&&t>0)return[n];if((e=r<n)&&(u=n,n=r,r=u),0===(i=l(n,r,t))||!isFinite(i))return[];if(i>0)for(n=Math.ceil(n/i),r=Math.floor(r/i),o=new Array(u=Math.ceil(r-n+1));++a<u;)o[a]=(n+a)*i;else for(n=Math.floor(n*i),r=Math.ceil(r*i),o=new Array(u=Math.ceil(n-r+1));++a<u;)o[a]=(n-a)/i;return e&&o.reverse(),o}function l(n,r,t){var e=(r-n)/Math.max(0,t),u=Math.floor(Math.log(e)/Math.LN10),o=e/Math.pow(10,u);return u>=0?(o>=i?10:o>=a?5:o>=c?2:1)*Math.pow(10,u):-Math.pow(10,-u)/(o>=i?10:o>=a?5:o>=c?2:1)}function s(n,r,t){var e=Math.abs(r-n)/Math.max(0,t),u=Math.pow(10,Math.floor(Math.log(e)/Math.LN10)),o=e/u;return o>=i?u*=10:o>=a?u*=5:o>=c&&(u*=2),r<n?-u:u}},1160:function(n,r,t){"use strict";function e(n,r){return n<r?-1:n>r?1:n>=r?0:NaN}function u(n){return 1===n.length&&(n=function(n){return function(r,t){return e(n(r),t)}}(n)),{left:function(r,t,e,u){for(null==e&&(e=0),null==u&&(u=r.length);e<u;){var o=e+u>>>1;n(r[o],t)<0?e=o+1:u=o}return e},right:function(r,t,e,u){for(null==e&&(e=0),null==u&&(u=r.length);e<u;){var o=e+u>>>1;n(r[o],t)>0?u=o:e=o+1}return e}}}t.d(r,"a",(function(){return o})),t.d(r,"b",(function(){return u})),t.d(r,"c",(function(){return f})),t.d(r,"d",(function(){return l})),t.d(r,"e",(function(){return s}));var o=u(e).right,i=Math.sqrt(50),a=Math.sqrt(10),c=Math.sqrt(2);function f(n,r,t){var e,u,o,i,a=-1;if(t=+t,(n=+n)===(r=+r)&&t>0)return[n];if((e=r<n)&&(u=n,n=r,r=u),0===(i=l(n,r,t))||!isFinite(i))return[];if(i>0)for(n=Math.ceil(n/i),r=Math.floor(r/i),o=new Array(u=Math.ceil(r-n+1));++a<u;)o[a]=(n+a)*i;else for(n=Math.floor(n*i),r=Math.ceil(r*i),o=new Array(u=Math.ceil(n-r+1));++a<u;)o[a]=(n-a)/i;return e&&o.reverse(),o}function l(n,r,t){var e=(r-n)/Math.max(0,t),u=Math.floor(Math.log(e)/Math.LN10),o=e/Math.pow(10,u);return u>=0?(o>=i?10:o>=a?5:o>=c?2:1)*Math.pow(10,u):-Math.pow(10,-u)/(o>=i?10:o>=a?5:o>=c?2:1)}function s(n,r,t){var e=Math.abs(r-n)/Math.max(0,t),u=Math.pow(10,Math.floor(Math.log(e)/Math.LN10)),o=e/u;return o>=i?u*=10:o>=a?u*=5:o>=c&&(u*=2),r<n?-u:u}}}]);