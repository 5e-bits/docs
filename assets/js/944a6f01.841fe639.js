"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[940],{61674:(e,i,s)=>{s.r(i),s.d(i,{contentTitle:()=>c,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var r=s(74848),n=s(28453);const t={},c="Get proficiencies available for a class.",l={type:"api",id:"get-proficiencies-available-for-a-class",title:"Get proficiencies available for a class.",description:"",slug:"/get-proficiencies-available-for-a-class",frontMatter:{},api:{tags:["Class Resource Lists"],parameters:[{name:"index",in:"path",required:!0,description:"The `index` of the class to get.\n",schema:{type:"string",enum:["barbarian","bard","cleric","druid","fighter","monk","paladin","ranger","rogue","sorcerer","warlock","wizard"],example:"paladin"}}],responses:{200:{description:"List of proficiencies for the class.",content:{"application/json":{schema:{description:"`APIReferenceList`\n",type:"object",properties:{count:{description:"Total number of resources available.",type:"number"},results:{type:"array",items:{description:"`APIReference`\n",type:"object",properties:{index:{description:"Resource index for shorthand searching.",type:"string"},name:{description:"Name of the referenced resource.",type:"string"},url:{description:"URL of the referenced resource.",type:"string"}}}}}}}}}},description:"Get proficiencies available for a class.",method:"get",path:"/api/classes/{index}/proficiencies",servers:[{url:"https://www.dnd5eapi.co",description:"Production"},{url:"http://localhost:3000",description:"Local Development"}],info:{title:"D&D 5e API",description:"",version:"0.1",license:{name:"MIT License",url:"https://github.com/5e-bits/5e-srd-api/blob/main/LICENSE.md"},contact:{name:"5eBits",url:"https://github.com/5e-bits"}},postman:{name:"Get proficiencies available for a class.",description:{type:"text/plain"},url:{path:["api","classes",":index","proficiencies"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) The `index` of the class to get.\n",type:"text/plain"},type:"any",value:"<string>",key:"index"}]},method:"GET"}},source:"@site/openapi.json",sourceDirName:".",permalink:"/docs/api/get-proficiencies-available-for-a-class",previous:{title:"Get features available for a class.",permalink:"/docs/api/get-features-available-for-a-class"},next:{title:"Get multiclassing resource for a class.",permalink:"/docs/api/get-multiclassing-resource-for-a-class"}},a=[];function o(e){const i={code:"code",h1:"h1",header:"header",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"get-proficiencies-available-for-a-class",children:"Get proficiencies available for a class."})}),"\n",(0,r.jsx)(i.p,{children:"Get proficiencies available for a class."}),"\n",(0,r.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:(0,r.jsx)("th",{style:{textAlign:"left"},children:"Path Parameters"})})}),(0,r.jsx)("tbody",{children:(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"index"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Possible values:"})," [",(0,r.jsx)(i.code,{children:"barbarian"}),", ",(0,r.jsx)(i.code,{children:"bard"}),", ",(0,r.jsx)(i.code,{children:"cleric"}),", ",(0,r.jsx)(i.code,{children:"druid"}),", ",(0,r.jsx)(i.code,{children:"fighter"}),", ",(0,r.jsx)(i.code,{children:"monk"}),", ",(0,r.jsx)(i.code,{children:"paladin"}),", ",(0,r.jsx)(i.code,{children:"ranger"}),", ",(0,r.jsx)(i.code,{children:"rogue"}),", ",(0,r.jsx)(i.code,{children:"sorcerer"}),", ",(0,r.jsx)(i.code,{children:"warlock"}),", ",(0,r.jsx)(i.code,{children:"wizard"}),"]"]})}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"index"})," of the class to get."]})})]})})})]}),"\n",(0,r.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:(0,r.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,r.jsx)("tbody",{children:(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)("code",{children:"200"})}),(0,r.jsx)("div",{children:(0,r.jsx)(i.p,{children:"List of proficiencies for the class."})})]}),(0,r.jsx)("div",{children:(0,r.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:(0,r.jsxs)("th",{style:{textAlign:"left"},children:[(0,r.jsx)("span",{children:"Schema "}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{})]})})}),(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"count"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" number"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(i.p,{children:"Total number of resources available."})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"results"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"index"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(i.p,{children:"Resource index for shorthand searching."})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"name"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(i.p,{children:"Name of the referenced resource."})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"url"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(i.p,{children:"URL of the referenced resource."})})]})})]})})]})})]})]})})]})})})]})]})}function d(e){void 0===e&&(e={});const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,i,s)=>{s.d(i,{R:()=>c,x:()=>l});var r=s(96540);const n={},t=r.createContext(n);function c(e){const i=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);