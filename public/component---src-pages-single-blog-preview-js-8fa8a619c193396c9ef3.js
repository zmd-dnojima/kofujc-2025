"use strict";(self.webpackChunkyanagawa_yoshi=self.webpackChunkyanagawa_yoshi||[]).push([[722],{4020:function(e){var t="%[a-f0-9]{2}",r=new RegExp("("+t+")|([^%]+?)","gi"),n=new RegExp("("+t+")+","gi");function a(e,t){try{return[decodeURIComponent(e.join(""))]}catch(o){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],a(r),a(n))}function o(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(r)||[],n=1;n<t.length;n++)t=(e=a(t,n).join("")).match(r)||[];return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},a=n.exec(e);a;){try{r[a[0]]=decodeURIComponent(a[0])}catch(t){var c=o(a[0]);c!==a[0]&&(r[a[0]]=c)}a=n.exec(e)}r["%C2"]="�";for(var s=Object.keys(r),i=0;i<s.length;i++){var l=s[i];e=e.replace(new RegExp(l,"g"),r[l])}return e}(e)}}},2806:function(e){e.exports=function(e,t){for(var r={},n=Object.keys(e),a=Array.isArray(t),o=0;o<n.length;o++){var c=n[o],s=e[c];(a?-1!==t.indexOf(c):t(c,s,e))&&(r[c]=s)}return r}},3675:function(e,t,r){var n=r(7294),a=r(1883),o=r(1052);t.Z=e=>{let{actTag:t}=e;const r=[],c=[];var s=0;const i=(0,a.useStaticQuery)("3507509735");for(var l in i.allMicrocmsArticles.edges)if(c.push(i.allMicrocmsArticles.edges[l]),c[l].node.category[0].name==t){if((s+=1)>10)break;r.push(c[l])}return n.createElement("div",{classname:o.blogWrapper},n.createElement("div",{className:o.relatedWrapper},r.map(((e,t)=>n.createElement("div",{className:o.relatedCard,key:t},n.createElement(a.Link,{to:"../"+e.node.articlesId},(e.node.eventDate,void e.node.eventDate.split("T")[0]),n.createElement("h4",null,e.node.title),n.createElement("div",{className:o.arrow})))))))}},2890:function(e,t,r){r(7294)},1810:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n={};r.r(n),r.d(n,{nC:function(){return l},SU:function(){return u}});var a=r(7294),o=r(7563),c=r(1883),s=r(5897),i=(r(8183),r(3675)),l="singleBlog-module--container--ff1e9",u="singleBlog-module--contentInner--e93f5",m=r(7896);r(2890);var d=e=>{const t=(0,m.useLocation)().search,r=o.parse(t),d=r.contentId,f=r.draftKey,{0:p,1:g}=(0,a.useState)(null);(0,a.useEffect)((()=>{if(p)return function(){console.log("done")};fetch("https://zmd.microcms.io/api/v1/articles/"+d+"?draftKey="+f,{headers:{"X-API-KEY":"st30CRbI7cULadmlmvetJT0N6ihLK5xkzXW4"}}).then((e=>{if(e.ok)return e.json()})).then((e=>{g(e)}))}));const y=null==p?void 0:p.category[0].name;return a.createElement(s.Z,null,a.createElement("div",{className:n.wrapper},a.createElement("div",{className:l},a.createElement("div",{className:n.blogImgWrapper},a.createElement("img",{src:null==p?void 0:p.mainImage.url,alt:"card-image",className:n.cardImg})),a.createElement("div",{className:n.blogTags},a.createElement(c.Link,{to:"../blog?tag="+y},"#",null==p?void 0:p.category[0].name)),a.createElement("h1",{className:n.subTitle},null==p?void 0:p.title),a.createElement("div",{className:n.blogDate},""+(null==p?void 0:p.eventDate.substring(0,null==p?void 0:p.eventDate.indexOf("T")))),a.createElement("div",{className:u,dangerouslySetInnerHTML:{__html:null==p?void 0:p.body}}),a.createElement("h3",null,"関連する記事"),a.createElement(i.Z,{actTag:null==p?void 0:p.category[0].name}),a.createElement("div",{className:n.moreButton},a.createElement(c.Link,{to:"../blog?tag=all"},"一覧ページへ戻る")))))}},7563:function(e,t,r){const n=r(610),a=r(4020),o=r(500),c=r(2806);function s(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function i(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function l(e,t){return t.decode?a(e):e}function u(e){return Array.isArray(e)?e.sort():"object"==typeof e?u(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function m(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function d(e){const t=(e=m(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function f(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function p(e,t){s((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const a="string"==typeof r&&r.includes(e.arrayFormatSeparator),o="string"==typeof r&&!a&&l(r,e).includes(e.arrayFormatSeparator);r=o?l(r,e):r;const c=a||o?r.split(e.arrayFormatSeparator).map((t=>l(t,e))):null===r?r:l(r,e);n[t]=c};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const a of e.split("&")){if(""===a)continue;let[e,c]=o(t.decode?a.replace(/\+/g," "):a,"=");c=void 0===c?null:["comma","separator"].includes(t.arrayFormat)?c:l(c,t),r(l(e,t),c,n)}for(const a of Object.keys(n)){const e=n[a];if("object"==typeof e&&null!==e)for(const r of Object.keys(e))e[r]=f(e[r],t);else n[a]=f(e,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=u(r):e[t]=r,e}),Object.create(null))}t.extract=d,t.parse=p,t.stringify=(e,t)=>{if(!e)return"";s((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const a=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[i(t,e),"[",a,"]"].join("")]:[...r,[i(t,e),"[",i(a,e),"]=",i(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[i(t,e),"[]"].join("")]:[...r,[i(t,e),"[]=",i(n,e)].join("")];case"comma":case"separator":return t=>(r,n)=>null==n||0===n.length?r:0===r.length?[[i(t,e),"=",i(n,e)].join("")]:[[r,i(n,e)].join(e.arrayFormatSeparator)];default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,i(t,e)]:[...r,[i(t,e),"=",i(n,e)].join("")]}}(t),a={};for(const c of Object.keys(e))r(c)||(a[c]=e[c]);const o=Object.keys(a);return!1!==t.sort&&o.sort(t.sort),o.map((r=>{const a=e[r];return void 0===a?"":null===a?i(r,t):Array.isArray(a)?a.reduce(n(r),[]).join("&"):i(r,t)+"="+i(a,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,n]=o(e,"#");return Object.assign({url:r.split("?")[0]||"",query:p(d(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:l(n,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0},r);const n=m(e.url).split("?")[0]||"",a=t.extract(e.url),o=t.parse(a,{sort:!1}),c=Object.assign(o,e.query);let s=t.stringify(c,r);s&&(s=`?${s}`);let l=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(l=`#${i(e.fragmentIdentifier,r)}`),`${n}${s}${l}`},t.pick=(e,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0},n);const{url:a,query:o,fragmentIdentifier:s}=t.parseUrl(e,n);return t.stringifyUrl({url:a,query:c(o,r),fragmentIdentifier:s},n)},t.exclude=(e,r,n)=>{const a=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,a,n)}},500:function(e){e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},610:function(e){e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))}}]);
//# sourceMappingURL=component---src-pages-single-blog-preview-js-8fa8a619c193396c9ef3.js.map