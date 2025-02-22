"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9951],{4675:(e,i,s)=>{s.r(i),s.d(i,{contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"type":"api","id":"get-a-spell-by-index","title":"Get a spell by index.","description":"","slug":"/get-a-spell-by-index","frontMatter":{},"api":{"tags":["Spells"],"parameters":[{"name":"index","in":"path","required":true,"description":"The `index` of the `Spell` to get.\\n\\nAvailable values can be found in the [`ResourceList`](#get-/api/2014/-endpoint-) for `spells`.\\n","schema":{"type":"string","example":"sacred-flame"}}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"description":"`Spell`\\n","type":"object","properties":{"index":{"description":"Resource index for shorthand searching.","type":"string"},"name":{"description":"Name of the referenced resource.","type":"string"},"url":{"description":"URL of the referenced resource.","type":"string"},"updated_at":{"description":"Date and time the resource was last updated.","type":"string"},"desc":{"description":"Description of the resource.","type":"array","items":{"type":"string"}},"higher_level":{"description":"List of descriptions for casting the spell at higher levels.","type":"array","items":{"type":"string"}},"range":{"description":"Range of the spell, usually expressed in feet.","type":"string"},"components":{"description":"List of shorthand for required components of the spell.\\nV: verbal\\nS: somatic\\nM: material\\n","type":"array","items":{"type":"string","enum":["V","S","M"]}},"material":{"description":"Material component for the spell to be cast.","type":"string"},"area_of_effect":{"type":"object","properties":{"size":{"type":"number"},"type":{"type":"string","enum":["sphere","cone","cylinder","line","cube"]}}},"ritual":{"description":"Determines if a spell can be cast in a 10-min(in-game) ritual.","type":"boolean"},"duration":{"description":"How long the spell effect lasts.","type":"string"},"concentration":{"description":"Determines if a spell needs concentration to persist.","type":"boolean"},"casting_time":{"description":"How long it takes for the spell to activate.","type":"string"},"level":{"description":"Level of the spell.","type":"number"},"attack_type":{"description":"Attack type of the spell.","type":"string"},"damage":{"oneOf":[{"description":"\'Spell Damage\'\\n","type":"object","properties":{"damage_at_character_level":{"type":"object","additionalProperties":true},"damage_type":{"description":"`APIReference`\\n","type":"object","properties":{"index":{"description":"Resource index for shorthand searching.","type":"string"},"name":{"description":"Name of the referenced resource.","type":"string"},"url":{"description":"URL of the referenced resource.","type":"string"},"updated_at":{"description":"Date and time the resource was last updated.","type":"string"}}}}},{"description":"\'Spell Damage\'\\n","type":"object","properties":{"damage_at_slot_level":{"type":"object","additionalProperties":true},"damage_type":{"description":"`APIReference`\\n","type":"object","properties":{"index":{"description":"Resource index for shorthand searching.","type":"string"},"name":{"description":"Name of the referenced resource.","type":"string"},"url":{"description":"URL of the referenced resource.","type":"string"},"updated_at":{"description":"Date and time the resource was last updated.","type":"string"}}}}}]},"school":{"description":"`APIReference`\\n","type":"object","properties":{"index":{"description":"Resource index for shorthand searching.","type":"string"},"name":{"description":"Name of the referenced resource.","type":"string"},"url":{"description":"URL of the referenced resource.","type":"string"},"updated_at":{"description":"Date and time the resource was last updated.","type":"string"}}},"classes":{"description":"List of classes that are able to learn the spell.","type":"array","items":{"description":"`APIReference`\\n","type":"object","properties":{"index":{"description":"Resource index for shorthand searching.","type":"string"},"name":{"description":"Name of the referenced resource.","type":"string"},"url":{"description":"URL of the referenced resource.","type":"string"},"updated_at":{"description":"Date and time the resource was last updated.","type":"string"}}}},"subclasses":{"description":"List of subclasses that have access to the spell.","type":"array","items":{"description":"`APIReference`\\n","type":"object","properties":{"index":{"description":"Resource index for shorthand searching.","type":"string"},"name":{"description":"Name of the referenced resource.","type":"string"},"url":{"description":"URL of the referenced resource.","type":"string"},"updated_at":{"description":"Date and time the resource was last updated.","type":"string"}}}}}},"example":{"index":"sacred-flame","name":"Sacred Flame","url":"/api/2014/spells/sacred-flame","attack_type":"ranged","casting_time":"1 action","classes":[{"index":"cleric","name":"Cleric","url":"/api/2014/classes/cleric"}],"components":["V","S"],"concentration":false,"damage":{"damage_at_character_level":{"1":"1d8","5":"2d8","11":"3d8","17":"4d8"},"damage_type":{"index":"radiant","name":"Radiant","url":"/api/2014/damage-types/radiant"}},"dc":{"dc_success":"none","dc_type":{"index":"dex","name":"DEX","url":"/api/2014/ability-scores/dex"}},"desc":["Flame-like radiance descends on a creature that you can see within range. The target must succeed on a dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw.","The spell\'s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."],"duration":"Instantaneous","higher_level":[],"level":0,"range":"60 feet","ritual":false,"school":{"index":"evocation","name":"Evocation","url":"/api/2014/magic-schools/evocation"},"subclasses":[{"index":"lore","name":"Lore","url":"/api/2014/subclasses/lore"}]}}}}},"description":"Get a spell by index.","method":"get","path":"/api/2014/spells/{index}","servers":[{"url":"https://www.dnd5eapi.co","description":"Production"},{"url":"http://localhost:3000","description":"Local Development"}],"info":{"title":"D&D 5e API","description":"","version":"0.1","license":{"name":"MIT License","url":"https://github.com/5e-bits/5e-srd-api/blob/main/LICENSE.md"},"contact":{"name":"5eBits","url":"https://github.com/5e-bits"}},"postman":{"name":"Get a spell by index.","description":{"type":"text/plain"},"url":{"path":["api","2014","spells",":index"],"host":["{{baseUrl}}"],"query":[],"variable":[{"disabled":false,"description":{"content":"(Required) The `index` of the `Spell` to get.\\n\\nAvailable values can be found in the [`ResourceList`](#get-/api/2014/-endpoint-) for `spells`.\\n","type":"text/plain"},"type":"any","value":"<string>","key":"index"}]},"header":[{"key":"Accept","value":"application/json"}],"method":"GET"}},"source":"@site/openapi.json","sourceDirName":".","permalink":"/docs/api/get-a-spell-by-index","previous":{"title":"Get list of spells with optional filtering.","permalink":"/docs/api/get-list-of-spells-with-optional-filtering"},"next":{"title":"Get a subclass by index.","permalink":"/docs/api/get-a-subclass-by-index"}}');var n=s(74848),r=s(28453);const l={},a="Get a spell by index.",o=[];function c(e){const i={a:"a",code:"code",h1:"h1",header:"header",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"get-a-spell-by-index",children:"Get a spell by index."})}),"\n",(0,n.jsx)(i.p,{children:"Get a spell by index."}),"\n",(0,n.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("th",{style:{textAlign:"left"},children:"Path Parameters"})})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"index"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,n.jsxs)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:[(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"index"})," of the ",(0,n.jsx)(i.code,{children:"Spell"})," to get."]}),(0,n.jsxs)(i.p,{children:["Available values can be found in the ",(0,n.jsx)(i.a,{href:"#get-/api/2014/-endpoint-",children:(0,n.jsx)(i.code,{children:"ResourceList"})})," for ",(0,n.jsx)(i.code,{children:"spells"}),"."]})]})]})})})]}),"\n",(0,n.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)("code",{children:"200"})}),(0,n.jsx)("div",{children:(0,n.jsx)(i.p,{children:"OK"})})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("th",{style:{textAlign:"left"},children:[(0,n.jsx)("span",{children:"Schema "}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{})]})})}),(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"index"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Resource index for shorthand searching."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"name"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Name of the referenced resource."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"url"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"URL of the referenced resource."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"updated_at"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Date and time the resource was last updated."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"desc"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string[]"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Description of the resource."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"higher_level"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string[]"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"List of descriptions for casting the spell at higher levels."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"range"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Range of the spell, usually expressed in feet."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"components"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string[]"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Possible values:"})," [",(0,n.jsx)(i.code,{children:"V"}),", ",(0,n.jsx)(i.code,{children:"S"}),", ",(0,n.jsx)(i.code,{children:"M"}),"]"]})}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"List of shorthand for required components of the spell.\nV: verbal\nS: somatic\nM: material"})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"material"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Material component for the spell to be cast."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"area_of_effect"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" object"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"size"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" number"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"type"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Possible values:"})," [",(0,n.jsx)(i.code,{children:"sphere"}),", ",(0,n.jsx)(i.code,{children:"cone"}),", ",(0,n.jsx)(i.code,{children:"cylinder"}),", ",(0,n.jsx)(i.code,{children:"line"}),", ",(0,n.jsx)(i.code,{children:"cube"}),"]"]})})]})})]})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"ritual"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" boolean"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Determines if a spell can be cast in a 10-min(in-game) ritual."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"duration"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"How long the spell effect lasts."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"concentration"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" boolean"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Determines if a spell needs concentration to persist."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"casting_time"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"How long it takes for the spell to activate."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"level"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" number"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Level of the spell."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"attack_type"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Attack type of the spell."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"damage"}),(0,n.jsx)("span",{style:{opacity:"0.6"}}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"school"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" object"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"APIReference"})})}),(0,n.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"index"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Resource index for shorthand searching."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"name"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Name of the referenced resource."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"url"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"URL of the referenced resource."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"updated_at"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Date and time the resource was last updated."})})]})})]})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"classes"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"List of classes that are able to learn the spell."})}),(0,n.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"index"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Resource index for shorthand searching."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"name"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Name of the referenced resource."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"url"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"URL of the referenced resource."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"updated_at"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Date and time the resource was last updated."})})]})})]})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"subclasses"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"List of subclasses that have access to the spell."})}),(0,n.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"index"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Resource index for shorthand searching."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"name"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Name of the referenced resource."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"url"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"URL of the referenced resource."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"updated_at"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Date and time the resource was last updated."})})]})})]})})]})})]})]})})]})})})]})]})}function d(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,i,s)=>{s.d(i,{R:()=>l,x:()=>a});var t=s(96540);const n={},r=t.createContext(n);function l(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);