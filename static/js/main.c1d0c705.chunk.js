(this["webpackJsonpcv-code-viewer"]=this["webpackJsonpcv-code-viewer"]||[]).push([[0],{15:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(7),i=c.n(a),r=(c(15),c(2)),l=c(6),o=c(10),d=c(0),u=["title","children","className"];function m(e){var t=e.title,c=e.children,s=e.className,n=void 0===s?"":s,a=Object(o.a)(e,u);return Object(d.jsxs)("div",Object(l.a)(Object(l.a)({className:"card "+n},a),{},{children:[Object(d.jsx)("h1",{children:t}),Object(d.jsx)("div",{className:"card-content",style:{backgroundColor:"#70FFD319"},children:c})]}))}var j=c(4),p=c.n(j),h=c(8),b=c(5),f=c.n(b);c(19);function g(e){var t=e.file,c=Object(s.useState)(),n=Object(r.a)(c,2),a=n[0],i=n[1],l=Object(s.useState)(!1),o=Object(r.a)(l,2),u=o[0],m=o[1];return Object(s.useEffect)((function(){t&&!t.dir?Object(h.a)(p.a.mark((function e(){var c,s,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.prev=1,e.next=4,fetch("https://raw.githubusercontent.com/chronixlo/cv-code-viewer/master/".concat(t.path));case 4:return c=e.sent,e.next=7,c.text();case 7:s=e.sent,n=f.a.highlight(s,f.a.languages.javascript,"javascript"),i(n),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(1);case 14:m(!1);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))():i(null)}),[t]),!t||t.dir?"Select a file":Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{children:[null===t||void 0===t?void 0:t.name," ",u&&"..."]}),Object(d.jsx)("div",{dangerouslySetInnerHTML:{__html:a},className:"code-viewer-source"})]})}var x=c(9);var v=function e(t){var c,s=t.item,n=t.inset,a=t.selectedFile,i=t.setSelectedFile;return Object(d.jsxs)("div",{style:{marginLeft:n&&10},className:"directory-item",children:[Object(d.jsxs)("span",{children:[s.children?"\ud83d\udcc1":"\ud83d\udcc4"," ",Object(d.jsx)("span",{className:"directory-item-name",onClick:function(){return i(s)},children:s.name})]}),null===(c=s.children)||void 0===c?void 0:c.map((function(t,c){return Object(d.jsx)(e,{selectedFile:a,setSelectedFile:i,item:t,inset:!0},c)}))]})};var O=function(e){var t=e.selectedFile,c=e.setSelectedFile;return Object(d.jsx)("div",{children:x.map((function(e,s){return Object(d.jsx)(v,{selectedFile:t,setSelectedFile:c,item:e},s)}))})};function y(){return Object(d.jsx)("div",{className:"welcome",style:{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%"},children:Object(d.jsx)("div",{style:{background:"#000a",textAlign:"center",height:200,display:"flex",justifyContent:"center",alignItems:"center"},children:Object(d.jsx)("h1",{className:"display",children:"welcome"})})})}var N=function(){var e=Object(s.useState)(),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!0),i=Object(r.a)(a,2),l=i[0],o=i[1];return Object(s.useEffect)((function(){setTimeout((function(){return o(!1)}),1e3)}),[]),l?Object(d.jsx)(y,{}):Object(d.jsxs)("div",{className:"app",children:[Object(d.jsxs)(m,{className:"bio-card",title:"Bio",children:[Object(d.jsx)("div",{className:"flex",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam obcaecati voluptatum in aliquam beatae sint aliquid assumenda. Necessitatibus a atque, magnam dolorum officia labore. Magnam corporis assumenda ad obcaecati."}),Object(d.jsxs)("a",{className:"icon-link",href:"https://www.github.com/chronixlo",children:[Object(d.jsx)("img",{src:"github-light.png",alt:"Github"}),"@chronixlo"]})]}),Object(d.jsx)(m,{className:"directory-list-card",title:"Directory",children:Object(d.jsx)(O,{selectedFile:c,setSelectedFile:n})}),Object(d.jsx)(m,{className:"source-card",title:"Source",children:Object(d.jsx)(g,{file:c})})]})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,22)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};c(20);!function(e){var t=document.querySelector("#splash"),c=function(){document.body.style.backgroundImage="url(".concat(s.src),e(),t.classList.add("hide"),setTimeout((function(){return t.parentElement.removeChild(t)}),1e3)},s=document.createElement("img");s.src="./bg.jpg",s.addEventListener("load",c),s.addEventListener("error",c)}((function(){return i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))})),w()},9:function(e){e.exports=JSON.parse('[{"name":"public","dir":true,"path":"public","children":[{"name":"favicon.ico","dir":false,"path":"public/favicon.ico"},{"name":"github-light.png","dir":false,"path":"public/github-light.png"},{"name":"index.html","dir":false,"path":"public/index.html"},{"name":"logo192.png","dir":false,"path":"public/logo192.png"},{"name":"logo512.png","dir":false,"path":"public/logo512.png"},{"name":"manifest.json","dir":false,"path":"public/manifest.json"},{"name":"robots.txt","dir":false,"path":"public/robots.txt"}]},{"name":"src","dir":true,"path":"src","children":[{"name":"components","dir":true,"path":"src/components","children":[{"name":"App.js","dir":false,"path":"src/components/App.js"},{"name":"Card.js","dir":false,"path":"src/components/Card.js"},{"name":"CodeViewer.js","dir":false,"path":"src/components/CodeViewer.js"},{"name":"DirectoryItem.js","dir":false,"path":"src/components/DirectoryItem.js"},{"name":"DirectoryList.js","dir":false,"path":"src/components/DirectoryList.js"}]},{"name":"generated","dir":true,"path":"src/generated","children":[{"name":"directoryList.json","dir":false,"path":"src/generated/directoryList.json"}]},{"name":"scripts","dir":true,"path":"src/scripts","children":[{"name":"generateDirectoryList.js","dir":false,"path":"src/scripts/generateDirectoryList.js"}]},{"name":"bg.jpg","dir":false,"path":"src/bg.jpg"},{"name":"index.css","dir":false,"path":"src/index.css"},{"name":"index.js","dir":false,"path":"src/index.js"},{"name":"reportWebVitals.js","dir":false,"path":"src/reportWebVitals.js"},{"name":"setupTests.js","dir":false,"path":"src/setupTests.js"}]},{"name":".gitignore","dir":false,"path":".gitignore"},{"name":"package-lock.json","dir":false,"path":"package-lock.json"},{"name":"package.json","dir":false,"path":"package.json"},{"name":"README.md","dir":false,"path":"README.md"}]')}},[[21,1,2]]]);
//# sourceMappingURL=main.c1d0c705.chunk.js.map