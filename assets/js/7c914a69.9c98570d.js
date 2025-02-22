"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8317],{56767:(e,i,s)=>{s.r(i),s.d(i,{contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"type":"api","id":"get-a-race-by-index","title":"Get a race by index.","description":"","slug":"/get-a-race-by-index","frontMatter":{},"api":{"description":"Each race grants your character ability and skill bonuses as well as racial traits.","tags":["Races"],"parameters":[{"name":"index","in":"path","required":true,"description":"The `index` of the race to get.\\n","schema":{"type":"string","enum":["dragonborn","dwarf","elf","gnome","half-elf","half-orc","halfling","human","tiefling"],"example":"elf"}}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"description":"`Race`\\n","type":"object","properties":{"index":{"description":"Resource index for shorthand searching.","type":"string"},"name":{"description":"Name of the referenced resource.","type":"string"},"url":{"description":"URL of the referenced resource.","type":"string"},"updated_at":{"description":"Date and time the resource was last updated.","type":"string"},"speed":{"description":"Base move speed for this race (in feet per round).","type":"number"},"ability_bonuses":{"description":"Racial bonuses to ability scores.","type":"array","items":{"type":"object","properties":{"bonus":{"description":"Bonus amount for this ability score.","type":"number"},"ability_score":{"description":"`APIReference`\\n","type":"object","properties":{"index":{"description":"Resource index for shorthand searching.","type":"string"},"name":{"description":"Name of the referenced resource.","type":"string"},"url":{"description":"URL of the referenced resource.","type":"string"},"updated_at":{"description":"Date and time the resource was last updated.","type":"string"}}}}}},"alignment":{"description":"Flavor description of likely alignments this race takes.","type":"string"},"age":{"description":"Flavor description of possible ages for this race.","type":"string"},"size":{"description":"Size class of this race.","type":"string"},"size_description":{"description":"Flavor description of height and weight for this race.","type":"string"},"starting_proficiencies":{"description":"Starting proficiencies for all new characters of this race.","type":"array","items":{"description":"`APIReference`\\n","type":"object","properties":{"index":{"description":"Resource index for shorthand searching.","type":"string"},"name":{"description":"Name of the referenced resource.","type":"string"},"url":{"description":"URL of the referenced resource.","type":"string"},"updated_at":{"description":"Date and time the resource was last updated.","type":"string"}}}},"starting_proficiency_options":{"description":"`Choice`\\n","type":"object","properties":{"desc":{"description":"Description of the choice to be made.","type":"string"},"choose":{"description":"Number of items to pick from the list.","type":"number"},"type":{"description":"Type of the resources to choose from.","type":"string"},"from":{"$ref":"#/components/schemas/OptionSet"}}},"languages":{"description":"Starting languages for all new characters of this race.","type":"array","items":{"description":"`APIReference`\\n","type":"object","properties":{"index":{"description":"Resource index for shorthand searching.","type":"string"},"name":{"description":"Name of the referenced resource.","type":"string"},"url":{"description":"URL of the referenced resource.","type":"string"},"updated_at":{"description":"Date and time the resource was last updated.","type":"string"}}}},"language_desc":{"description":"Flavor description of the languages this race knows.","type":"string"},"traits":{"description":"Racial traits that provide benefits to its members.","type":"array","items":{"description":"`APIReference`\\n","type":"object","properties":{"index":{"description":"Resource index for shorthand searching.","type":"string"},"name":{"description":"Name of the referenced resource.","type":"string"},"url":{"description":"URL of the referenced resource.","type":"string"},"updated_at":{"description":"Date and time the resource was last updated.","type":"string"}}}},"subraces":{"description":"All possible subraces that this race includes.","type":"array","items":{"description":"`APIReference`\\n","type":"object","properties":{"index":{"description":"Resource index for shorthand searching.","type":"string"},"name":{"description":"Name of the referenced resource.","type":"string"},"url":{"description":"URL of the referenced resource.","type":"string"},"updated_at":{"description":"Date and time the resource was last updated.","type":"string"}}}}}},"example":{"index":"elf","name":"Elf","url":"/api/2014/races/elf","ability_bonuses":[{"ability_score":{"index":"dex","name":"DEX","url":"/api/2014/ability-scores/dex"},"bonus":2}],"age":"Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.","alignment":"Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others\' freedom as well as their own, and they are more often good than not. The drow are an exception; their exile has made them vicious and dangerous. Drow are more often evil than not.","language_desc":"You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.","languages":[{"index":"common","name":"Common","url":"/api/2014/languages/common"},{"index":"elvish","name":"Elvish","url":"/api/2014/languages/elvish"}],"size":"Medium","size_description":"Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.","speed":30,"starting_proficiencies":[{"index":"skill-perception","name":"Skill: Perception","url":"/api/2014/proficiencies/skill-perception"}],"subraces":[{"index":"high-elf","name":"High Elf","url":"/api/2014/subraces/high-elf"}],"traits":[{"index":"darkvision","name":"Darkvision","url":"/api/2014/traits/darkvision"},{"index":"fey-ancestry","name":"Fey Ancestry","url":"/api/2014/traits/fey-ancestry"},{"index":"trance","name":"Trance","url":"/api/2014/traits/trance"}]}}}}},"method":"get","path":"/api/2014/races/{index}","servers":[{"url":"https://www.dnd5eapi.co","description":"Production"},{"url":"http://localhost:3000","description":"Local Development"}],"info":{"title":"D&D 5e API","description":"","version":"0.1","license":{"name":"MIT License","url":"https://github.com/5e-bits/5e-srd-api/blob/main/LICENSE.md"},"contact":{"name":"5eBits","url":"https://github.com/5e-bits"}},"postman":{"name":"Get a race by index.","description":{"content":"Each race grants your character ability and skill bonuses as well as racial traits.","type":"text/plain"},"url":{"path":["api","2014","races",":index"],"host":["{{baseUrl}}"],"query":[],"variable":[{"disabled":false,"description":{"content":"(Required) The `index` of the race to get.\\n","type":"text/plain"},"type":"any","value":"<string>","key":"index"}]},"header":[{"key":"Accept","value":"application/json"}],"method":"GET"}},"source":"@site/openapi.json","sourceDirName":".","permalink":"/docs/api/get-a-race-by-index","previous":{"title":"Get a proficiency by index.","permalink":"/docs/api/get-a-proficiency-by-index"},"next":{"title":"Get subraces available for a race.","permalink":"/docs/api/get-subraces-available-for-a-race"}}');var n=s(74848),t=s(28453);const a={},l="Get a race by index.",o=[];function c(e){const i={code:"code",h1:"h1",header:"header",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"get-a-race-by-index",children:"Get a race by index."})}),"\n",(0,n.jsx)(i.p,{children:"Each race grants your character ability and skill bonuses as well as racial traits."}),"\n",(0,n.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("th",{style:{textAlign:"left"},children:"Path Parameters"})})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"index"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Possible values:"})," [",(0,n.jsx)(i.code,{children:"dragonborn"}),", ",(0,n.jsx)(i.code,{children:"dwarf"}),", ",(0,n.jsx)(i.code,{children:"elf"}),", ",(0,n.jsx)(i.code,{children:"gnome"}),", ",(0,n.jsx)(i.code,{children:"half-elf"}),", ",(0,n.jsx)(i.code,{children:"half-orc"}),", ",(0,n.jsx)(i.code,{children:"halfling"}),", ",(0,n.jsx)(i.code,{children:"human"}),", ",(0,n.jsx)(i.code,{children:"tiefling"}),"]"]})}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"index"})," of the race to get."]})})]})})})]}),"\n",(0,n.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)("code",{children:"200"})}),(0,n.jsx)("div",{children:(0,n.jsx)(i.p,{children:"OK"})})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("th",{style:{textAlign:"left"},children:[(0,n.jsx)("span",{children:"Schema "}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{})]})})}),(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"index"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Resource index for shorthand searching."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"name"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Name of the referenced resource."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"url"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"URL of the referenced resource."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"updated_at"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Date and time the resource was last updated."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"speed"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" number"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Base move speed for this race (in feet per round)."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"ability_bonuses"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Racial bonuses to ability scores."})}),(0,n.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"bonus"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" number"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Bonus amount for this ability score."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"ability_score"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" object"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"APIReference"})})}),(0,n.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"index"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Resource index for shorthand searching."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"name"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Name of the referenced resource."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"url"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"URL of the referenced resource."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"updated_at"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Date and time the resource was last updated."})})]})})]})})]})})]})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"alignment"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Flavor description of likely alignments this race takes."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"age"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Flavor description of possible ages for this race."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"size"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Size class of this race."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"size_description"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Flavor description of height and weight for this race."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"starting_proficiencies"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Starting proficiencies for all new characters of this race."})}),(0,n.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"index"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Resource index for shorthand searching."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"name"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Name of the referenced resource."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"url"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"URL of the referenced resource."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"updated_at"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Date and time the resource was last updated."})})]})})]})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"starting_proficiency_options"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" object"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"Choice"})})}),(0,n.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"desc"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Description of the choice to be made."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"choose"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" number"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Number of items to pick from the list."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"type"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Type of the resources to choose from."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"from"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:"  (circular)"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})})]})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"languages"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Starting languages for all new characters of this race."})}),(0,n.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"index"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Resource index for shorthand searching."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"name"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Name of the referenced resource."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"url"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"URL of the referenced resource."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"updated_at"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Date and time the resource was last updated."})})]})})]})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"language_desc"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Flavor description of the languages this race knows."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"traits"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Racial traits that provide benefits to its members."})}),(0,n.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"index"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Resource index for shorthand searching."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"name"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Name of the referenced resource."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"url"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"URL of the referenced resource."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"updated_at"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Date and time the resource was last updated."})})]})})]})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"subraces"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"All possible subraces that this race includes."})}),(0,n.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"index"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Resource index for shorthand searching."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"name"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Name of the referenced resource."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"url"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"URL of the referenced resource."})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"updated_at"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(i.p,{children:"Date and time the resource was last updated."})})]})})]})})]})})]})]})})]})})})]})]})}function d(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,i,s)=>{s.d(i,{R:()=>a,x:()=>l});var r=s(96540);const n={},t=r.createContext(n);function a(e){const i=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);