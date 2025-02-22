"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1932],{16894:(e,s,i)=>{i.r(s),i.d(s,{contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"type":"api","id":"get-spellcasting-info-for-a-class","title":"Get spellcasting info for a class.","description":"","slug":"/get-spellcasting-info-for-a-class","frontMatter":{},"api":{"tags":["Class"],"parameters":[{"name":"index","in":"path","required":true,"description":"The `index` of the class to get.\\n","schema":{"type":"string","enum":["barbarian","bard","cleric","druid","fighter","monk","paladin","ranger","rogue","sorcerer","warlock","wizard"],"example":"paladin"}}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"type":"object","description":"`Spellcasting`\\n","properties":{"level":{"description":"Level at which the class can start using its spellcasting abilities.","type":"number"},"info":{"description":"Descriptions of the class\' ability to cast spells.","type":"array","items":{"type":"object","properties":{"name":{"description":"Feature name.","type":"string"},"desc":{"description":"Feature description.","type":"array","items":{"type":"string"}}}}},"spellcasting_ability":{"description":"Reference to the `AbilityScore` used for spellcasting by the class.","type":"object","properties":{"index":{"description":"Resource index for shorthand searching.","type":"string"},"name":{"description":"Name of the referenced resource.","type":"string"},"url":{"description":"URL of the referenced resource.","type":"string"},"updated_at":{"description":"Date and time the resource was last updated.","type":"string"}}}}},"example":{"level":1,"spellcasting_ability":{"index":"cha","name":"CHA","url":"/api/2014/ability-scores/cha"},"info":[{"name":"Cantrips","desc":["You know two cantrips of your choice from the bard spell list. You learn additional bard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Bard table."]},{"name":"Spell Slots","desc":["The Bard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell\'s level or higher. You regain all expended spell slots when you finish a long rest.","For example, if you know the 1st-level spell cure wounds and have a 1st-level and a 2nd-level spell slot available, you can cast cure wounds using either slot."]},{"name":"Spells Known of 1st Level and Higher","desc":["You know four 1st-level spells of your choice from the bard spell list.","The Spells Known column of the Bard table shows when you learn more bard spells of your choice.","Each of these spells must be of a level for which you have spell slots, as shown on the table. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.","Additionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots."]},{"name":"Spellcasting Ability","desc":["Charisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one.","Spell save DC = 8 + your proficiency bonus + your Charisma modifier.","Spell attack modifier = your proficiency bonus + your Charisma modifier."]},{"name":"Ritual Casting","desc":["You can cast any bard spell you know as a ritual if that spell has the ritual tag."]},{"name":"Spellcasting Focus","desc":["You can use a musical instrument (see Equipment) as a spellcasting focus for your bard spells."]}]}}}},"404":{"description":"Not found.","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string"}},"required":["error"]},"example":{"error":"Not found"}}}}},"description":"Get spellcasting info for a class.","method":"get","path":"/api/2014/classes/{index}/spellcasting","servers":[{"url":"https://www.dnd5eapi.co","description":"Production"},{"url":"http://localhost:3000","description":"Local Development"}],"info":{"title":"D&D 5e API","description":"","version":"0.1","license":{"name":"MIT License","url":"https://github.com/5e-bits/5e-srd-api/blob/main/LICENSE.md"},"contact":{"name":"5eBits","url":"https://github.com/5e-bits"}},"postman":{"name":"Get spellcasting info for a class.","description":{"type":"text/plain"},"url":{"path":["api","2014","classes",":index","spellcasting"],"host":["{{baseUrl}}"],"query":[],"variable":[{"disabled":false,"description":{"content":"(Required) The `index` of the class to get.\\n","type":"text/plain"},"type":"any","value":"<string>","key":"index"}]},"header":[{"key":"Accept","value":"application/json"}],"method":"GET"}},"source":"@site/openapi.json","sourceDirName":".","permalink":"/docs/api/get-spellcasting-info-for-a-class","previous":{"title":"Get spells available for a class.","permalink":"/docs/api/get-spells-available-for-a-class"},"next":{"title":"Get features available for a class.","permalink":"/docs/api/get-features-available-for-a-class"}}');var l=i(74848),n=i(28453);const r={},a="Get spellcasting info for a class.",o=[];function c(e){const s={code:"code",h1:"h1",header:"header",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.header,{children:(0,l.jsx)(s.h1,{id:"get-spellcasting-info-for-a-class",children:"Get spellcasting info for a class."})}),"\n",(0,l.jsx)(s.p,{children:"Get spellcasting info for a class."}),"\n",(0,l.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:(0,l.jsx)("th",{style:{textAlign:"left"},children:"Path Parameters"})})}),(0,l.jsx)("tbody",{children:(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"index"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,l.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"Possible values:"})," [",(0,l.jsx)(s.code,{children:"barbarian"}),", ",(0,l.jsx)(s.code,{children:"bard"}),", ",(0,l.jsx)(s.code,{children:"cleric"}),", ",(0,l.jsx)(s.code,{children:"druid"}),", ",(0,l.jsx)(s.code,{children:"fighter"}),", ",(0,l.jsx)(s.code,{children:"monk"}),", ",(0,l.jsx)(s.code,{children:"paladin"}),", ",(0,l.jsx)(s.code,{children:"ranger"}),", ",(0,l.jsx)(s.code,{children:"rogue"}),", ",(0,l.jsx)(s.code,{children:"sorcerer"}),", ",(0,l.jsx)(s.code,{children:"warlock"}),", ",(0,l.jsx)(s.code,{children:"wizard"}),"]"]})}),(0,l.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,l.jsxs)(s.p,{children:["The ",(0,l.jsx)(s.code,{children:"index"})," of the class to get."]})})]})})})]}),"\n",(0,l.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:(0,l.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,l.jsxs)("tbody",{children:[(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,l.jsx)("code",{children:"200"})}),(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"OK"})})]}),(0,l.jsx)("div",{children:(0,l.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:(0,l.jsxs)("th",{style:{textAlign:"left"},children:[(0,l.jsx)("span",{children:"Schema "}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,l.jsx)("div",{})]})})}),(0,l.jsxs)("tbody",{children:[(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"level"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" number"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,l.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,l.jsx)(s.p,{children:"Level at which the class can start using its spellcasting abilities."})})]})}),(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"info"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,l.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,l.jsx)(s.p,{children:"Descriptions of the class' ability to cast spells."})}),(0,l.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,l.jsxs)("tbody",{children:[(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"name"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,l.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,l.jsx)(s.p,{children:"Feature name."})})]})}),(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"desc"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" string[]"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,l.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,l.jsx)(s.p,{children:"Feature description."})})]})})]})})]})}),(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"spellcasting_ability"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" object"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,l.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,l.jsxs)(s.p,{children:["Reference to the ",(0,l.jsx)(s.code,{children:"AbilityScore"})," used for spellcasting by the class."]})}),(0,l.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,l.jsxs)("tbody",{children:[(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"index"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,l.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,l.jsx)(s.p,{children:"Resource index for shorthand searching."})})]})}),(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"name"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,l.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,l.jsx)(s.p,{children:"Name of the referenced resource."})})]})}),(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"url"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,l.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,l.jsx)(s.p,{children:"URL of the referenced resource."})})]})}),(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"updated_at"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,l.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,l.jsx)(s.p,{children:"Date and time the resource was last updated."})})]})})]})})]})})]})]})})]})}),(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,l.jsx)("code",{children:"404"})}),(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Not found."})})]}),(0,l.jsx)("div",{children:(0,l.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:(0,l.jsxs)("th",{style:{textAlign:"left"},children:[(0,l.jsx)("span",{children:"Schema "}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,l.jsx)("div",{})]})})}),(0,l.jsx)("tbody",{children:(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"error"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" string"})]})})})]})})]})})]})]})]})}function d(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>r,x:()=>a});var t=i(96540);const l={},n=t.createContext(l);function r(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);