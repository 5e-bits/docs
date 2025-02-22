"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2627],{91099:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>d,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"type":"api","id":"get-a-damage-type-by-index","title":"Get a damage type by index.","description":"","slug":"/get-a-damage-type-by-index","frontMatter":{},"api":{"description":"# Damage type\\n\\nDifferent attacks, damaging spells, and other harmful effects deal different\\ntypes of damage. Damage types have no rules of their own, but other rules,\\nsuch as damage resistance, rely on the types.\\n","tags":["Game Mechanics"],"parameters":[{"name":"index","in":"path","required":true,"description":"The `index` of the damage type to get.\\n","schema":{"type":"string","enum":["acid","bludgeoning","cold","fire","force","lightning","necrotic","piercing","poison","psychic","radiant","slashing","thunder"],"example":"acid"}}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"description":"`DamageType`\\n","type":"object","properties":{"index":{"description":"Resource index for shorthand searching.","type":"string"},"name":{"description":"Name of the referenced resource.","type":"string"},"url":{"description":"URL of the referenced resource.","type":"string"},"updated_at":{"description":"Date and time the resource was last updated.","type":"string"},"desc":{"description":"Description of the resource.","type":"array","items":{"type":"string"}}}},"example":{"index":"acid","name":"Acid","url":"/api/2014/damage-types/acid","desc":["The corrosive spray of a black dragon\'s breath and the dissolving enzymes secreted by a black pudding deal acid damage."]}}}}},"method":"get","path":"/api/2014/damage-types/{index}","servers":[{"url":"https://www.dnd5eapi.co","description":"Production"},{"url":"http://localhost:3000","description":"Local Development"}],"info":{"title":"D&D 5e API","description":"","version":"0.1","license":{"name":"MIT License","url":"https://github.com/5e-bits/5e-srd-api/blob/main/LICENSE.md"},"contact":{"name":"5eBits","url":"https://github.com/5e-bits"}},"postman":{"name":"Get a damage type by index.","description":{"content":"# Damage type\\n\\nDifferent attacks, damaging spells, and other harmful effects deal different\\ntypes of damage. Damage types have no rules of their own, but other rules,\\nsuch as damage resistance, rely on the types.\\n","type":"text/plain"},"url":{"path":["api","2014","damage-types",":index"],"host":["{{baseUrl}}"],"query":[],"variable":[{"disabled":false,"description":{"content":"(Required) The `index` of the damage type to get.\\n","type":"text/plain"},"type":"any","value":"<string>","key":"index"}]},"header":[{"key":"Accept","value":"application/json"}],"method":"GET"}},"source":"@site/openapi.json","sourceDirName":".","permalink":"/docs/api/get-a-damage-type-by-index","previous":{"title":"Get a condition by index.","permalink":"/docs/api/get-a-condition-by-index"},"next":{"title":"Get an equipment item by index.","permalink":"/docs/api/get-an-equipment-item-by-index"}}');var s=n(74848),r=n(28453);const a={},d="Get a damage type by index.",c=[];function o(e){const t={code:"code",h1:"h1",header:"header",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"get-a-damage-type-by-index",children:"Get a damage type by index."})}),"\n",(0,s.jsx)(t.h1,{id:"damage-type",children:"Damage type"}),"\n",(0,s.jsx)(t.p,{children:"Different attacks, damaging spells, and other harmful effects deal different\ntypes of damage. Damage types have no rules of their own, but other rules,\nsuch as damage resistance, rely on the types."}),"\n",(0,s.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsx)("th",{style:{textAlign:"left"},children:"Path Parameters"})})}),(0,s.jsx)("tbody",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"index"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,s.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Possible values:"})," [",(0,s.jsx)(t.code,{children:"acid"}),", ",(0,s.jsx)(t.code,{children:"bludgeoning"}),", ",(0,s.jsx)(t.code,{children:"cold"}),", ",(0,s.jsx)(t.code,{children:"fire"}),", ",(0,s.jsx)(t.code,{children:"force"}),", ",(0,s.jsx)(t.code,{children:"lightning"}),", ",(0,s.jsx)(t.code,{children:"necrotic"}),", ",(0,s.jsx)(t.code,{children:"piercing"}),", ",(0,s.jsx)(t.code,{children:"poison"}),", ",(0,s.jsx)(t.code,{children:"psychic"}),", ",(0,s.jsx)(t.code,{children:"radiant"}),", ",(0,s.jsx)(t.code,{children:"slashing"}),", ",(0,s.jsx)(t.code,{children:"thunder"}),"]"]})}),(0,s.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"index"})," of the damage type to get."]})})]})})})]}),"\n",(0,s.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,s.jsx)("tbody",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)("code",{children:"200"})}),(0,s.jsx)("div",{children:(0,s.jsx)(t.p,{children:"OK"})})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("th",{style:{textAlign:"left"},children:[(0,s.jsx)("span",{children:"Schema "}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{})]})})}),(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"index"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)(t.p,{children:"Resource index for shorthand searching."})})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"name"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)(t.p,{children:"Name of the referenced resource."})})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"url"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)(t.p,{children:"URL of the referenced resource."})})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"updated_at"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)(t.p,{children:"Date and time the resource was last updated."})})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"desc"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string[]"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)(t.p,{children:"Description of the resource."})})]})})]})]})})]})})})]})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>d});var i=n(96540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);