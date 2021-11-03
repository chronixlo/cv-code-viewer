(this["webpackJsonpcv-code-viewer"]=this["webpackJsonpcv-code-viewer"]||[]).push([[0],{13:function(e,i,t){},17:function(e,i,t){"use strict";t.r(i);var a=t(1),n=t.n(a),r=t(5),s=t.n(r),c=(t(13),t(7)),l=t(4),d=t(8),o=t(0),m=["title","children","className"];function u(e){var i=e.title,t=e.children,a=e.className,n=void 0===a?"":a,r=Object(d.a)(e,m);return Object(o.jsxs)("div",Object(l.a)(Object(l.a)({className:"card "+n},r),{},{children:[Object(o.jsx)("h1",{children:i}),Object(o.jsx)("div",{className:"card-content",style:{backgroundColor:"#70FFD319"},children:t})]}))}var j=t(3),f=t.n(j);t(16);function b(e){var i=e.file,t=f.a.highlight('import { useState } from "react";\nimport Card from "./Card";\nimport CodeViewer from "./CodeViewer";\nimport DirectoryList from "./DirectoryList";\n\nfunction App() {\n  const [selectedFile, setSelectedFile] = useState();\n\n  return (\n    <div className="app">\n      <Card className="bio-card" title="Bio">\n        <div className="flex">\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum\n          numquam obcaecati voluptatum in aliquam beatae sint aliquid assumenda.\n          Necessitatibus a atque, magnam dolorum officia labore. Magnam corporis\n          assumenda ad obcaecati.\n        </div>\n\n        <a className="icon-link" href="https://www.github.com/chronixlo">\n          <img src="github-light.png" alt="Github" />\n          @chronixlo\n        </a>\n      </Card>\n\n      <Card className="directory-list-card" title="Directory">\n        <DirectoryList\n          selectedFile={selectedFile}\n          setSelectedFile={setSelectedFile}\n        />\n      </Card>\n\n      <Card className="source-card" title="Source">\n        <CodeViewer file={selectedFile} />\n      </Card>\n    </div>\n  );\n}\n\nexport default App;\n',f.a.languages.javascript,"javascript");return i?Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:null===i||void 0===i?void 0:i.name}),Object(o.jsx)("div",{dangerouslySetInnerHTML:{__html:t},className:"code-viewer-source"})]}):"Select a file"}var h=t(6);var p=function e(i){var t,a=i.item,n=i.inset,r=i.selectedFile,s=i.setSelectedFile;return Object(o.jsxs)("div",{style:{marginLeft:n&&10},className:"directory-item",children:[Object(o.jsxs)("span",{children:[a.children?"\ud83d\udcc1":"\ud83d\udcc4"," ",Object(o.jsx)("span",{className:"directory-item-name",onClick:function(){return s(a)},children:a.name})]}),null===(t=a.children)||void 0===t?void 0:t.map((function(i,t){return Object(o.jsx)(e,{selectedFile:r,setSelectedFile:s,item:i,inset:!0},t)}))]})};var g=function(e){var i=e.selectedFile,t=e.setSelectedFile;return Object(o.jsx)("div",{children:h.map((function(e,a){return Object(o.jsx)(p,{selectedFile:i,setSelectedFile:t,item:e},a)}))})};var v=function(){var e=Object(a.useState)(),i=Object(c.a)(e,2),t=i[0],n=i[1];return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsxs)(u,{className:"bio-card",title:"Bio",children:[Object(o.jsx)("div",{className:"flex",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam obcaecati voluptatum in aliquam beatae sint aliquid assumenda. Necessitatibus a atque, magnam dolorum officia labore. Magnam corporis assumenda ad obcaecati."}),Object(o.jsxs)("a",{className:"icon-link",href:"https://www.github.com/chronixlo",children:[Object(o.jsx)("img",{src:"github-light.png",alt:"Github"}),"@chronixlo"]})]}),Object(o.jsx)(u,{className:"directory-list-card",title:"Directory",children:Object(o.jsx)(g,{selectedFile:t,setSelectedFile:n})}),Object(o.jsx)(u,{className:"source-card",title:"Source",children:Object(o.jsx)(b,{file:t})})]})},x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(i){var t=i.getCLS,a=i.getFID,n=i.getFCP,r=i.getLCP,s=i.getTTFB;t(e),a(e),n(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),x()},6:function(e){e.exports=JSON.parse('[{"name":"public","dir":true,"children":[{"name":"favicon.ico","dir":false},{"name":"github-light.png","dir":false},{"name":"index.html","dir":false},{"name":"logo192.png","dir":false},{"name":"logo512.png","dir":false},{"name":"manifest.json","dir":false},{"name":"robots.txt","dir":false}]},{"name":"src","dir":true,"children":[{"name":"components","dir":true,"children":[{"name":"App.js","dir":false},{"name":"Card.js","dir":false},{"name":"CodeViewer.js","dir":false},{"name":"DirectoryItem.js","dir":false},{"name":"DirectoryList.js","dir":false}]},{"name":"generated","dir":true,"children":[{"name":"directoryList.json","dir":false}]},{"name":"scripts","dir":true,"children":[{"name":"generateDirectoryList.js","dir":false}]},{"name":"bg.jpg","dir":false},{"name":"index.css","dir":false},{"name":"index.js","dir":false},{"name":"reportWebVitals.js","dir":false},{"name":"setupTests.js","dir":false}]},{"name":".gitignore","dir":false},{"name":"package-lock.json","dir":false},{"name":"package.json","dir":false},{"name":"README.md","dir":false}]')}},[[17,1,2]]]);
//# sourceMappingURL=main.fcc9ed5c.chunk.js.map