"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[331],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var l=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=l.createContext({}),p=function(e){var t=l.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},f=l.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),f=a,d=c["".concat(s,".").concat(f)]||c[f]||m[f]||n;return r?l.createElement(d,o(o({ref:t},u),{},{components:r})):l.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<n;p++)o[p]=r[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,r)}f.displayName="MDXCreateElement"},76647:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var l=r(87462),a=(r(67294),r(3905));const n={},o="Offical Repository For Maze-of-Mystery-Game",i={type:"mdx",permalink:"/Node/",source:"@site/pages/index.md",title:"Offical Repository For Maze-of-Mystery-Game",description:"Owner",frontMatter:{}},s=[{value:"Owner",id:"owner",level:2},{value:"Developers",id:"developers",level:2},{value:"Testers",id:"testers",level:2},{value:"Wall types",id:"wall-types",level:3},{value:"FakeWalls",id:"fakewalls",level:3}],p={toc:s},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,l.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"offical-repository-for-maze-of-mystery-game"},"Offical Repository For Maze-of-Mystery-Game"),(0,a.kt)("h2",{id:"owner"},"Owner"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"xxWars_chick (duck)")),(0,a.kt)("h2",{id:"developers"},"Developers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fsndr (\u82b1\u591c)"),(0,a.kt)("li",{parentName:"ul"},"wiltinq_lust (kalopsia)")),(0,a.kt)("h2",{id:"testers"},"Testers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Prestonsfan901 (Oogway)")),(0,a.kt)("h1",{id:"gamepasses"},"Gamepasses"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"690608475 - Seed GamePass"),(0,a.kt)("li",{parentName:"ul"},"690931056 - Bigger Lobby Size GamePass")),(0,a.kt)("h1",{id:"developer-products"},"Developer Products"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1731658102 - Test Product")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Additonal Notes (ONLY FOR SCRIPTERS) "),(0,a.kt)("h3",{id:"wall-types"},"Wall types"),(0,a.kt)("p",null,"There are 5 wall types, fake walls are included for the evaulation of wall type:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DeadEnd: 3 walls, making it look like a dead end"),(0,a.kt)("li",{parentName:"ul"},"Hallway: 2 walls that form a hallway. They aren't touching each other"),(0,a.kt)("li",{parentName:"ul"},'Turn: 2 walls that form a "turn". The two walls are touching each other'),(0,a.kt)("li",{parentName:"ul"},"Edge: 1 wall alone"),(0,a.kt)("li",{parentName:"ul"},"Empty: 0 walls in that cell"),(0,a.kt)("li",{parentName:"ul"},"_ means empty maze event.")),(0,a.kt)("h3",{id:"fakewalls"},"FakeWalls"),(0,a.kt)("p",null,"FakeWalls are a wall that ",(0,a.kt)("strong",{parentName:"p"},"does not")," belong to the node originally, however it ",(0,a.kt)("em",{parentName:"p"},"looks like"),' it belongs to the node. It is a "state" to allow clearer formatting')))}c.isMDXComponent=!0}}]);