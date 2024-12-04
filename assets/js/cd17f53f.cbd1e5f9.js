"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[598],{2523:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var n=i(74848),s=i(28453);const r={},l="Get list of monsters with optional filtering",o={type:"api",id:"get-list-of-monsters-with-optional-filtering",title:"Get list of monsters with optional filtering",description:"",slug:"/get-list-of-monsters-with-optional-filtering",frontMatter:{},api:{tags:["Monsters"],parameters:[{name:"challenge_rating",in:"query",required:!1,description:"The challenge rating or ratings to filter on.",schema:{type:"array",items:{type:"number"}},examples:{"single-value":{value:[1]},"multiple-value":{value:[1,2]},"multiple-value-with-float":{value:[2,.25]}}}],responses:{200:{description:"OK",content:{"application/json":{schema:{description:"`APIReferenceList`\n",type:"object",properties:{count:{description:"Total number of resources available.",type:"number"},results:{type:"array",items:{description:"`APIReference`\n",type:"object",properties:{index:{description:"Resource index for shorthand searching.",type:"string"},name:{description:"Name of the referenced resource.",type:"string"},url:{description:"URL of the referenced resource.",type:"string"}}}}}}}}}},description:"Get list of monsters with optional filtering",method:"get",path:"/api/monsters",servers:[{url:"https://www.dnd5eapi.co",description:"Production"},{url:"http://localhost:3000",description:"Local Development"}],info:{title:"D&D 5e API",description:"",version:"0.1",license:{name:"MIT License",url:"https://github.com/5e-bits/5e-srd-api/blob/main/LICENSE.md"},contact:{name:"5eBits",url:"https://github.com/5e-bits"}},postman:{name:"Get list of monsters with optional filtering",description:{type:"text/plain"},url:{path:["api","monsters"],host:["{{baseUrl}}"],query:[{description:{content:"The challenge rating or ratings to filter on.",type:"text/plain"},key:"challenge_rating",value:"<number>"},{description:{content:"The challenge rating or ratings to filter on.",type:"text/plain"},key:"challenge_rating",value:"<number>"}],variable:[]},method:"GET"}},source:"@site/openapi.json",sourceDirName:".",permalink:"/docs/api/get-list-of-monsters-with-optional-filtering",previous:{title:"Get a magic school by index.",permalink:"/docs/api/get-a-magic-school-by-index"},next:{title:"Get monster by index.",permalink:"/docs/api/get-monster-by-index"}},a=[];function c(e){const t={h1:"h1",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"get-list-of-monsters-with-optional-filtering",children:"Get list of monsters with optional filtering"})}),"\n",(0,n.jsx)(t.p,{children:"Get list of monsters with optional filtering"}),"\n",(0,n.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("th",{style:{textAlign:"left"},children:"Query Parameters"})})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"challenge_rating"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" number[]"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(t.p,{children:"The challenge rating or ratings to filter on."})}),(0,n.jsxs)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:[(0,n.jsx)("div",{children:(0,n.jsxs)(t.p,{children:["Example (single-value):\n",(0,n.jsx)("code",{children:"1"})]})}),(0,n.jsx)("div",{children:(0,n.jsxs)(t.p,{children:["Example (multiple-value):\n",(0,n.jsx)("code",{children:"1,2"})]})}),(0,n.jsx)("div",{children:(0,n.jsxs)(t.p,{children:["Example (multiple-value-with-float):\n",(0,n.jsx)("code",{children:"2,0.25"})]})})]})]})})})]}),"\n",(0,n.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)("code",{children:"200"})}),(0,n.jsx)("div",{children:(0,n.jsx)(t.p,{children:"OK"})})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("th",{style:{textAlign:"left"},children:[(0,n.jsx)("span",{children:"Schema "}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{})]})})}),(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"count"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" number"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(t.p,{children:"Total number of resources available."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"results"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"index"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(t.p,{children:"Resource index for shorthand searching."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"name"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(t.p,{children:"Name of the referenced resource."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"url"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(t.p,{children:"URL of the referenced resource."})})]})})]})})]})})]})]})})]})})})]})]})}function d(e){void 0===e&&(e={});const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>o});var n=i(96540);const s={},r=n.createContext(s);function l(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);