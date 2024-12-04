"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1169],{52022:(e,n,i)=>{i.r(n),i.d(n,{contentTitle:()=>a,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var t=i(74848),s=i(28453);const r={},a="Get a language by index.",d={type:"api",id:"get-a-language-by-index",title:"Get a language by index.",description:"",slug:"/get-a-language-by-index",frontMatter:{},api:{description:"# Language\n\nYour race indicates the languages your character can speak by default, and your background might give you access to one or more additional languages of your choice. [[SRD p59](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=59)]\n",tags:["Character Data"],parameters:[{name:"index",in:"path",required:!0,description:"The `index` of the language to get.\n",schema:{type:"string",enum:["abyssal","celestial","common","deep-speech","draconic","dwarvish","elvish","giant","gnomish","goblin","halfling","infernal","orc","primordial","sylvan","undercommon"],example:"abyssal"}}],responses:{200:{description:"OK",content:{"application/json":{schema:{description:"`Language`\n",type:"object",properties:{index:{description:"Resource index for shorthand searching.",type:"string"},name:{description:"Name of the referenced resource.",type:"string"},url:{description:"URL of the referenced resource.",type:"string"},desc:{description:"Brief description of the language.",type:"string"},type:{type:"string",enum:["Standard","Exotic"]},script:{description:"Script used for writing in the language.",type:"string"},typical_speakers:{description:"List of races that tend to speak the language.",type:"array",items:{type:"string"}}}},example:{index:"elvish",name:"Elvish",url:"/api/languages/elvish",desc:"Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.",type:"Standard",script:"Elvish",typical_speakers:["Elves"]}}}}},method:"get",path:"/api/languages/{index}",servers:[{url:"https://www.dnd5eapi.co",description:"Production"},{url:"http://localhost:3000",description:"Local Development"}],info:{title:"D&D 5e API",description:"",version:"0.1",license:{name:"MIT License",url:"https://github.com/5e-bits/5e-srd-api/blob/main/LICENSE.md"},contact:{name:"5eBits",url:"https://github.com/5e-bits"}},postman:{name:"Get a language by index.",description:{content:"# Language\n\nYour race indicates the languages your character can speak by default, and your background might give you access to one or more additional languages of your choice. [[SRD p59](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=59)]\n",type:"text/plain"},url:{path:["api","languages",":index"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) The `index` of the language to get.\n",type:"text/plain"},type:"any",value:"<string>",key:"index"}]},method:"GET"}},source:"@site/openapi.json",sourceDirName:".",permalink:"/docs/api/get-a-language-by-index",previous:{title:"Get a feature by index.",permalink:"/docs/api/get-a-feature-by-index"},next:{title:"Get a magic item by index.",permalink:"/docs/api/get-a-magic-item-by-index"}},l=[];function c(e){const n={a:"a",code:"code",h1:"h1",header:"header",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"get-a-language-by-index",children:"Get a language by index."})}),"\n",(0,t.jsx)(n.h1,{id:"language",children:"Language"}),"\n",(0,t.jsxs)(n.p,{children:["Your race indicates the languages your character can speak by default, and your background might give you access to one or more additional languages of your choice. [",(0,t.jsx)(n.a,{href:"https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=59",children:"SRD p59"}),"]"]}),"\n",(0,t.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{children:(0,t.jsx)("th",{style:{textAlign:"left"},children:"Path Parameters"})})}),(0,t.jsx)("tbody",{children:(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"index"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Possible values:"})," [",(0,t.jsx)(n.code,{children:"abyssal"}),", ",(0,t.jsx)(n.code,{children:"celestial"}),", ",(0,t.jsx)(n.code,{children:"common"}),", ",(0,t.jsx)(n.code,{children:"deep-speech"}),", ",(0,t.jsx)(n.code,{children:"draconic"}),", ",(0,t.jsx)(n.code,{children:"dwarvish"}),", ",(0,t.jsx)(n.code,{children:"elvish"}),", ",(0,t.jsx)(n.code,{children:"giant"}),", ",(0,t.jsx)(n.code,{children:"gnomish"}),", ",(0,t.jsx)(n.code,{children:"goblin"}),", ",(0,t.jsx)(n.code,{children:"halfling"}),", ",(0,t.jsx)(n.code,{children:"infernal"}),", ",(0,t.jsx)(n.code,{children:"orc"}),", ",(0,t.jsx)(n.code,{children:"primordial"}),", ",(0,t.jsx)(n.code,{children:"sylvan"}),", ",(0,t.jsx)(n.code,{children:"undercommon"}),"]"]})}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"index"})," of the language to get."]})})]})})})]}),"\n",(0,t.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{children:(0,t.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,t.jsx)("tbody",{children:(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsxs)("div",{style:{display:"flex"},children:[(0,t.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)("code",{children:"200"})}),(0,t.jsx)("div",{children:(0,t.jsx)(n.p,{children:"OK"})})]}),(0,t.jsx)("div",{children:(0,t.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{children:(0,t.jsxs)("th",{style:{textAlign:"left"},children:[(0,t.jsx)("span",{children:"Schema "}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{})]})})}),(0,t.jsxs)("tbody",{children:[(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"index"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(n.p,{children:"Resource index for shorthand searching."})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"name"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(n.p,{children:"Name of the referenced resource."})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"url"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(n.p,{children:"URL of the referenced resource."})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"desc"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(n.p,{children:"Brief description of the language."})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"type"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Possible values:"})," [",(0,t.jsx)(n.code,{children:"Standard"}),", ",(0,t.jsx)(n.code,{children:"Exotic"}),"]"]})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"script"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(n.p,{children:"Script used for writing in the language."})})]})}),(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"typical_speakers"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" string[]"}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,t.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,t.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,t.jsx)(n.p,{children:"List of races that tend to speak the language."})})]})})]})]})})]})})})]})]})}function o(e){void 0===e&&(e={});const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>d});var t=i(96540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);