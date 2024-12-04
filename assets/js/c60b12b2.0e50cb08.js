"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6979],{8202:(e,s,t)=>{t.r(s),t.d(s,{contentTitle:()=>n,default:()=>o,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=t(74848),i=t(28453);const l={},n="Get features available to a class at the requested level.",a={type:"api",id:"get-features-available-to-a-class-at-the-requested-level",title:"Get features available to a class at the requested level.",description:"",slug:"/get-features-available-to-a-class-at-the-requested-level",frontMatter:{},api:{tags:["Class Levels"],parameters:[{name:"index",in:"path",required:!0,description:"The `index` of the class to get.\n",schema:{type:"string",enum:["barbarian","bard","cleric","druid","fighter","monk","paladin","ranger","rogue","sorcerer","warlock","wizard"],example:"paladin"}},{name:"class_level",in:"path",required:!0,schema:{type:"number",minimum:0,maximum:20,example:3}}],responses:{200:{description:"OK",content:{"application/json":{schema:{description:"`APIReferenceList`\n",type:"object",properties:{count:{description:"Total number of resources available.",type:"number"},results:{type:"array",items:{description:"`APIReference`\n",type:"object",properties:{index:{description:"Resource index for shorthand searching.",type:"string"},name:{description:"Name of the referenced resource.",type:"string"},url:{description:"URL of the referenced resource.",type:"string"}}}}}},example:{count:2,results:[{index:"barbarian-unarmored-defense",name:"Unarmored Defense",url:"/api/features/barbarian-unarmored-defense"},{index:"rage",name:"Rage",url:"/api/features/rage"}]}}}}},description:"Get features available to a class at the requested level.",method:"get",path:"/api/classes/{index}/levels/{class_level}/features",servers:[{url:"https://www.dnd5eapi.co",description:"Production"},{url:"http://localhost:3000",description:"Local Development"}],info:{title:"D&D 5e API",description:"",version:"0.1",license:{name:"MIT License",url:"https://github.com/5e-bits/5e-srd-api/blob/main/LICENSE.md"},contact:{name:"5eBits",url:"https://github.com/5e-bits"}},postman:{name:"Get features available to a class at the requested level.",description:{type:"text/plain"},url:{path:["api","classes",":index","levels",":class_level","features"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) The `index` of the class to get.\n",type:"text/plain"},type:"any",value:"<string>",key:"index"},{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<number>",key:"class_level"}]},method:"GET"}},source:"@site/openapi.json",sourceDirName:".",permalink:"/docs/api/get-features-available-to-a-class-at-the-requested-level",previous:{title:"Get level resource for a class and level.",permalink:"/docs/api/get-level-resource-for-a-class-and-level"},next:{title:"Get spells of the requested level available to the class.",permalink:"/docs/api/get-spells-of-the-requested-level-available-to-the-class"}},c=[];function d(e){const s={code:"code",h1:"h1",header:"header",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"get-features-available-to-a-class-at-the-requested-level",children:"Get features available to a class at the requested level."})}),"\n",(0,r.jsx)(s.p,{children:"Get features available to a class at the requested level."}),"\n",(0,r.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:(0,r.jsx)("th",{style:{textAlign:"left"},children:"Path Parameters"})})}),(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"index"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Possible values:"})," [",(0,r.jsx)(s.code,{children:"barbarian"}),", ",(0,r.jsx)(s.code,{children:"bard"}),", ",(0,r.jsx)(s.code,{children:"cleric"}),", ",(0,r.jsx)(s.code,{children:"druid"}),", ",(0,r.jsx)(s.code,{children:"fighter"}),", ",(0,r.jsx)(s.code,{children:"monk"}),", ",(0,r.jsx)(s.code,{children:"paladin"}),", ",(0,r.jsx)(s.code,{children:"ranger"}),", ",(0,r.jsx)(s.code,{children:"rogue"}),", ",(0,r.jsx)(s.code,{children:"sorcerer"}),", ",(0,r.jsx)(s.code,{children:"warlock"}),", ",(0,r.jsx)(s.code,{children:"wizard"}),"]"]})}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"index"})," of the class to get."]})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"class_level"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" number"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Possible values:"})," value \u2264 20"]})})]})})]})]}),"\n",(0,r.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:(0,r.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,r.jsx)("tbody",{children:(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)("code",{children:"200"})}),(0,r.jsx)("div",{children:(0,r.jsx)(s.p,{children:"OK"})})]}),(0,r.jsx)("div",{children:(0,r.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:(0,r.jsxs)("th",{style:{textAlign:"left"},children:[(0,r.jsx)("span",{children:"Schema "}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{})]})})}),(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"count"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" number"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(s.p,{children:"Total number of resources available."})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"results"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"index"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(s.p,{children:"Resource index for shorthand searching."})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"name"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(s.p,{children:"Name of the referenced resource."})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"url"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(s.p,{children:"URL of the referenced resource."})})]})})]})})]})})]})]})})]})})})]})]})}function o(e){void 0===e&&(e={});const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>n,x:()=>a});var r=t(96540);const i={},l=r.createContext(i);function n(e){const s=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),r.createElement(l.Provider,{value:s},e.children)}}}]);