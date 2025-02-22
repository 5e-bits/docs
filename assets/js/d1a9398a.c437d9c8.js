"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2589],{33579:(e,i,t)=>{t.r(i),t.d(i,{contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"type":"api","id":"get-a-magic-school-by-index","title":"Get a magic school by index.","description":"","slug":"/get-a-magic-school-by-index","frontMatter":{},"api":{"description":"# Magic School\\n\\nAcademies of magic group spells into eight categories called schools of\\nmagic. Scholars, particularly wizards, apply these categories to all spells,\\nbelieving that all magic functions in essentially the same way, whether it\\nderives from rigorous study or is bestowed by a deity.\\n","tags":["Game Mechanics"],"parameters":[{"name":"index","in":"path","required":true,"description":"The `index` of the magic school to get.\\n","schema":{"type":"string","enum":["abjuration","conjuration","divination","enchantment","evocation","illusion","necromancy","transmutation"],"example":"abjuration"}}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"description":"`MagicSchool`\\n","type":"object","properties":{"index":{"description":"Resource index for shorthand searching.","type":"string"},"name":{"description":"Name of the referenced resource.","type":"string"},"url":{"description":"URL of the referenced resource.","type":"string"},"updated_at":{"description":"Date and time the resource was last updated.","type":"string"},"desc":{"description":"Brief description of the resource.","type":"string"}}},"example":{"index":"conjuration","name":"Conjuration","url":"/api/2014/magic-schools/conjuration","desc":"Conjuration spells involve the transportation of objects and creatures from one location to another. Some spells summon creatures or objects to the caster\'s side, whereas others allow the caster to teleport to another location. Some conjurations create objects or effects out of nothing."}}}}},"method":"get","path":"/api/2014/magic-schools/{index}","servers":[{"url":"https://www.dnd5eapi.co","description":"Production"},{"url":"http://localhost:3000","description":"Local Development"}],"info":{"title":"D&D 5e API","description":"","version":"0.1","license":{"name":"MIT License","url":"https://github.com/5e-bits/5e-srd-api/blob/main/LICENSE.md"},"contact":{"name":"5eBits","url":"https://github.com/5e-bits"}},"postman":{"name":"Get a magic school by index.","description":{"content":"# Magic School\\n\\nAcademies of magic group spells into eight categories called schools of\\nmagic. Scholars, particularly wizards, apply these categories to all spells,\\nbelieving that all magic functions in essentially the same way, whether it\\nderives from rigorous study or is bestowed by a deity.\\n","type":"text/plain"},"url":{"path":["api","2014","magic-schools",":index"],"host":["{{baseUrl}}"],"query":[],"variable":[{"disabled":false,"description":{"content":"(Required) The `index` of the magic school to get.\\n","type":"text/plain"},"type":"any","value":"<string>","key":"index"}]},"header":[{"key":"Accept","value":"application/json"}],"method":"GET"}},"source":"@site/openapi.json","sourceDirName":".","permalink":"/docs/api/get-a-magic-school-by-index","previous":{"title":"Get a magic item by index.","permalink":"/docs/api/get-a-magic-item-by-index"},"next":{"title":"Get list of monsters with optional filtering","permalink":"/docs/api/get-list-of-monsters-with-optional-filtering"}}');var s=t(74848),o=t(28453);const r={},c="Get a magic school by index.",a=[];function l(e){const i={code:"code",h1:"h1",header:"header",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"get-a-magic-school-by-index",children:"Get a magic school by index."})}),"\n",(0,s.jsx)(i.h1,{id:"magic-school",children:"Magic School"}),"\n",(0,s.jsx)(i.p,{children:"Academies of magic group spells into eight categories called schools of\nmagic. Scholars, particularly wizards, apply these categories to all spells,\nbelieving that all magic functions in essentially the same way, whether it\nderives from rigorous study or is bestowed by a deity."}),"\n",(0,s.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsx)("th",{style:{textAlign:"left"},children:"Path Parameters"})})}),(0,s.jsx)("tbody",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"index"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,s.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Possible values:"})," [",(0,s.jsx)(i.code,{children:"abjuration"}),", ",(0,s.jsx)(i.code,{children:"conjuration"}),", ",(0,s.jsx)(i.code,{children:"divination"}),", ",(0,s.jsx)(i.code,{children:"enchantment"}),", ",(0,s.jsx)(i.code,{children:"evocation"}),", ",(0,s.jsx)(i.code,{children:"illusion"}),", ",(0,s.jsx)(i.code,{children:"necromancy"}),", ",(0,s.jsx)(i.code,{children:"transmutation"}),"]"]})}),(0,s.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"index"})," of the magic school to get."]})})]})})})]}),"\n",(0,s.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,s.jsx)("tbody",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)("code",{children:"200"})}),(0,s.jsx)("div",{children:(0,s.jsx)(i.p,{children:"OK"})})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("th",{style:{textAlign:"left"},children:[(0,s.jsx)("span",{children:"Schema "}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{})]})})}),(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"index"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)(i.p,{children:"Resource index for shorthand searching."})})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"name"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)(i.p,{children:"Name of the referenced resource."})})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"url"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)(i.p,{children:"URL of the referenced resource."})})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"updated_at"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)(i.p,{children:"Date and time the resource was last updated."})})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"desc"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)(i.p,{children:"Brief description of the resource."})})]})})]})]})})]})})})]})]})}function d(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>c});var n=t(96540);const s={},o=n.createContext(s);function r(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);