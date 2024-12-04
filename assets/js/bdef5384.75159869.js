"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2484],{27399:(e,s,i)=>{i.r(s),i.d(s,{contentTitle:()=>t,default:()=>d,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var r=i(74848),l=i(28453);const n={},t="Get a subclass by index.",a={type:"api",id:"get-a-subclass-by-index",title:"Get a subclass by index.",description:"",slug:"/get-a-subclass-by-index",frontMatter:{},api:{description:"Subclasses reflect the different paths a class may take as levels are gained.",tags:["Subclasses"],parameters:[{name:"index",in:"path",required:!0,description:"The `index` of the subclass to get.\n",schema:{type:"string",enum:["berserker","champion","devotion","draconic","evocation","fiend","hunter","land","life","lore","open-hand","thief"],example:"fiend"}}],responses:{200:{description:"OK",content:{"application/json":{schema:{description:"`Subclass`\n",type:"object",properties:{index:{description:"Resource index for shorthand searching.",type:"string"},name:{description:"Name of the referenced resource.",type:"string"},url:{description:"URL of the referenced resource.",type:"string"},desc:{description:"Description of the resource.",type:"array",items:{type:"string"}},class:{description:"`APIReference`\n",type:"object",properties:{index:{description:"Resource index for shorthand searching.",type:"string"},name:{description:"Name of the referenced resource.",type:"string"},url:{description:"URL of the referenced resource.",type:"string"}}},subclass_flavor:{description:"Lore-friendly flavor text for a classes respective subclass.",type:"string"},subclass_levels:{description:"Resource url that shows the subclass level progression.",type:"string"},spells:{type:"array",items:{type:"object",properties:{prerequisites:{type:"array",items:{description:"`SpellPrerequisite`\n",type:"object",properties:{index:{description:"Resource index for shorthand searching.",type:"string"},name:{description:"Name of the referenced resource.",type:"string"},url:{description:"URL of the referenced resource.",type:"string"},type:{description:"The type of prerequisite.",type:"string"}}}},spell:{description:"`APIReference`\n",type:"object",properties:{index:{description:"Resource index for shorthand searching.",type:"string"},name:{description:"Name of the referenced resource.",type:"string"},url:{description:"URL of the referenced resource.",type:"string"}}}}}}}},example:{index:"fiend",name:"Fiend",url:"/api/subclasses/fiend",class:{index:"warlock",name:"Warlock",url:"/api/classes/warlock"},desc:["You have made a pact with a fiend from the lower planes of existence, a being whose aims are evil, even if you strive against those aims. Such beings desire the corruption or destruction of all things, ultimately including you. Fiends powerful enough to forge a pact include demon lords such as Demogorgon, Orcus, Fraz'Urb-luu, and Baphomet; archdevils such as Asmodeus, Dispater, Mephistopheles, and Belial; pit fiends and balors that are especially mighty; and ultroloths and other lords of the yugoloths."],spells:[{prerequisites:[{index:"warlock-1",name:"Warlock 1",type:"level",url:"/api/classes/warlock/levels/1"}],spell:{index:"burning-hands",name:"Burning Hands",url:"/api/spells/burning-hands"}},{prerequisites:[{index:"warlock-1",name:"Warlock 1",type:"level",url:"/api/classes/warlock/levels/1"}],spell:{index:"command",name:"Command",url:"/api/spells/command"}},{prerequisites:[{index:"warlock-3",name:"Warlock 3",type:"level",url:"/api/classes/warlock/levels/3"}],spell:{index:"blindness-deafness",name:"Blindness/Deafness",url:"/api/spells/blindness-deafness"}},{prerequisites:[{index:"warlock-3",name:"Warlock 3",type:"level",url:"/api/classes/warlock/levels/3"}],spell:{index:"scorching-ray",name:"Scorching Ray",url:"/api/spells/scorching-ray"}},{prerequisites:[{index:"warlock-5",name:"Warlock 5",type:"level",url:"/api/classes/warlock/levels/5"}],spell:{index:"fireball",name:"Fireball",url:"/api/spells/fireball"}},{prerequisites:[{index:"warlock-5",name:"Warlock 5",type:"level",url:"/api/classes/warlock/levels/5"}],spell:{index:"stinking-cloud",name:"Stinking Cloud",url:"/api/spells/stinking-cloud"}},{prerequisites:[{index:"warlock-7",name:"Warlock 7",type:"level",url:"/api/classes/warlock/levels/7"}],spell:{index:"fire-shield",name:"Fire Shield",url:"/api/spells/fire-shield"}},{prerequisites:[{index:"warlock-7",name:"Warlock 7",type:"level",url:"/api/classes/warlock/levels/7"}],spell:{index:"wall-of-fire",name:"Wall of Fire",url:"/api/spells/wall-of-fire"}},{prerequisites:[{index:"warlock-9",name:"Warlock 9",type:"level",url:"/api/classes/warlock/levels/9"}],spell:{index:"flame-strike",name:"Flame Strike",url:"/api/spells/flame-strike"}},{prerequisites:[{index:"warlock-9",name:"Warlock 9",type:"level",url:"/api/classes/warlock/levels/9"}],spell:{index:"hallow",name:"Hallow",url:"/api/spells/hallow"}}],subclass_flavor:"Otherworldly Patron",subclass_levels:"/api/subclasses/fiend/levels"}}}}},method:"get",path:"/api/subclasses/{index}",servers:[{url:"https://www.dnd5eapi.co",description:"Production"},{url:"http://localhost:3000",description:"Local Development"}],info:{title:"D&D 5e API",description:"",version:"0.1",license:{name:"MIT License",url:"https://github.com/5e-bits/5e-srd-api/blob/main/LICENSE.md"},contact:{name:"5eBits",url:"https://github.com/5e-bits"}},postman:{name:"Get a subclass by index.",description:{content:"Subclasses reflect the different paths a class may take as levels are gained.",type:"text/plain"},url:{path:["api","subclasses",":index"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) The `index` of the subclass to get.\n",type:"text/plain"},type:"any",value:"<string>",key:"index"}]},method:"GET"}},source:"@site/openapi.json",sourceDirName:".",permalink:"/docs/api/get-a-subclass-by-index",previous:{title:"Get a spell by index.",permalink:"/docs/api/get-a-spell-by-index"},next:{title:"Get features available for a subclass.",permalink:"/docs/api/get-features-available-for-a-subclass"}},c=[];function o(e){const s={code:"code",h1:"h1",header:"header",p:"p",strong:"strong",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"get-a-subclass-by-index",children:"Get a subclass by index."})}),"\n",(0,r.jsx)(s.p,{children:"Subclasses reflect the different paths a class may take as levels are gained."}),"\n",(0,r.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:(0,r.jsx)("th",{style:{textAlign:"left"},children:"Path Parameters"})})}),(0,r.jsx)("tbody",{children:(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"index"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Possible values:"})," [",(0,r.jsx)(s.code,{children:"berserker"}),", ",(0,r.jsx)(s.code,{children:"champion"}),", ",(0,r.jsx)(s.code,{children:"devotion"}),", ",(0,r.jsx)(s.code,{children:"draconic"}),", ",(0,r.jsx)(s.code,{children:"evocation"}),", ",(0,r.jsx)(s.code,{children:"fiend"}),", ",(0,r.jsx)(s.code,{children:"hunter"}),", ",(0,r.jsx)(s.code,{children:"land"}),", ",(0,r.jsx)(s.code,{children:"life"}),", ",(0,r.jsx)(s.code,{children:"lore"}),", ",(0,r.jsx)(s.code,{children:"open-hand"}),", ",(0,r.jsx)(s.code,{children:"thief"}),"]"]})}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"index"})," of the subclass to get."]})})]})})})]}),"\n",(0,r.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:(0,r.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,r.jsx)("tbody",{children:(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)("code",{children:"200"})}),(0,r.jsx)("div",{children:(0,r.jsx)(s.p,{children:"OK"})})]}),(0,r.jsx)("div",{children:(0,r.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:(0,r.jsxs)("th",{style:{textAlign:"left"},children:[(0,r.jsx)("span",{children:"Schema "}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{})]})})}),(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"index"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(s.p,{children:"Resource index for shorthand searching."})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"name"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(s.p,{children:"Name of the referenced resource."})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"url"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(s.p,{children:"URL of the referenced resource."})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"desc"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" string[]"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(s.p,{children:"Description of the resource."})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"class"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" object"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"APIReference"})})}),(0,r.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"index"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(s.p,{children:"Resource index for shorthand searching."})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"name"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(s.p,{children:"Name of the referenced resource."})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"url"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(s.p,{children:"URL of the referenced resource."})})]})})]})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"subclass_flavor"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(s.p,{children:"Lore-friendly flavor text for a classes respective subclass."})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"subclass_levels"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(s.p,{children:"Resource url that shows the subclass level progression."})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"spells"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"prerequisites"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"index"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(s.p,{children:"Resource index for shorthand searching."})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"name"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(s.p,{children:"Name of the referenced resource."})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"url"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(s.p,{children:"URL of the referenced resource."})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"type"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(s.p,{children:"The type of prerequisite."})})]})})]})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"spell"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" object"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"APIReference"})})}),(0,r.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"index"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(s.p,{children:"Resource index for shorthand searching."})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"name"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(s.p,{children:"Name of the referenced resource."})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"url"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(s.p,{children:"URL of the referenced resource."})})]})})]})})]})})]})})]})})]})]})})]})})})]})]})}function d(e){void 0===e&&(e={});const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>t,x:()=>a});var r=i(96540);const l={},n=r.createContext(l);function t(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);