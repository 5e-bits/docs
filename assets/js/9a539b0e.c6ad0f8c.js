"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1621],{15245:(e,s,r)=>{r.r(s),r.d(s,{contentTitle:()=>t,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=r(74848),n=r(28453);const l={},t="Get level resource for a class and level.",o={type:"api",id:"get-level-resource-for-a-class-and-level",title:"Get level resource for a class and level.",description:"",slug:"/get-level-resource-for-a-class-and-level",frontMatter:{},api:{tags:["Class Levels"],parameters:[{name:"index",in:"path",required:!0,description:"The `index` of the class to get.\n",schema:{type:"string",enum:["barbarian","bard","cleric","druid","fighter","monk","paladin","ranger","rogue","sorcerer","warlock","wizard"],example:"paladin"}},{name:"class_level",in:"path",required:!0,schema:{type:"number",minimum:0,maximum:20,example:3}}],responses:{200:{description:"OK",content:{"application/json":{schema:{description:"`ClassLevel`\n",type:"object",properties:{index:{description:"Resource index for shorthand searching.",type:"string"},url:{description:"URL of the referenced resource.",type:"string"},level:{description:"The number value for the current level object.",type:"number"},ability_score_bonuses:{description:"Total number of ability score bonuses gained, added from previous levels.",type:"number"},prof_bonus:{description:"Proficiency bonus for this class at the specified level.",type:"number"},features:{description:"Features automatically gained at this level.",type:"array",items:{description:"`APIReference`\n",type:"object",properties:{index:{description:"Resource index for shorthand searching.",type:"string"},level:{description:"Level of the referenced resource.",type:"integer"},name:{description:"Name of the referenced resource.",type:"string"},url:{description:"URL of the referenced resource.",type:"string"}}}},spellcasting:{description:"Summary of spells known at this level.",type:"object",properties:{cantrips_known:{type:"number"},spells_known:{type:"number"},spell_slots_level_1:{type:"number"},spell_slots_level_2:{type:"number"},spell_slots_level_3:{type:"number"},spell_slots_level_4:{type:"number"},spell_slots_level_5:{type:"number"},spell_slots_level_6:{type:"number"},spell_slots_level_7:{type:"number"},spell_slots_level_8:{type:"number"},spell_slots_level_9:{type:"number"}}},class_specific:{description:"Class specific information such as dice values for bard songs and number of warlock invocations.",anyOf:[{description:"Barbarian Class Specific Features",type:"object",properties:{rage_count:{type:"number"},rage_damage_bonus:{type:"number"},brutal_critical_dice:{type:"number"}}},{description:"Bard Class Specific Features",type:"object",properties:{bardic_inspiration_dice:{type:"number"},song_of_rest_die:{type:"number"},magical_secrets_max_5:{type:"number"},magical_secrets_max_7:{type:"number"},magical_secrets_max_9:{type:"number"}}},{description:"Cleric Class Specific Features",type:"object",properties:{channel_divinity_charges:{type:"number"},destroy_undead_cr:{type:"number"}}},{description:"Druid Class Specific Features",type:"object",properties:{wild_shape_max_cr:{type:"number"},wild_shape_swim:{type:"boolean"},wild_shape_fly:{type:"boolean"}}},{description:"Fighter Class Specific Features",type:"object",properties:{action_surges:{type:"number"},indomitable_uses:{type:"number"},extra_attacks:{type:"number"}}},{description:"Monk Class Specific Features",type:"object",properties:{ki_points:{type:"number"},unarmored_movement:{type:"number"},martial_arts:{type:"object",properties:{dice_count:{type:"number"},dice_value:{type:"number"}}}}},{description:"Paladin Class Specific Features",type:"object",properties:{aura_range:{type:"number"}}},{description:"Bard Ranger Specific Features",type:"object",properties:{favored_enemies:{type:"number"},favored_terrain:{type:"number"}}},{description:"Bard Rogue Specific Features",type:"object",properties:{sneak_attack:{type:"object",properties:{dice_count:{type:"number"},dice_value:{type:"number"}}}}},{description:"Bard Sorcerer Specific Features",type:"object",properties:{sorcery_points:{type:"number"},metamagic_known:{type:"number"},creating_spell_slots:{type:"array",items:{type:"object",properties:{spell_slot_level:{type:"number"},sorcery_point_cost:{type:"number"}}}}}},{description:"Bard Warlock Specific Features",type:"object",properties:{invocations_known:{type:"number"},mystic_arcanum_level_6:{type:"number"},mystic_arcanum_level_7:{type:"number"},mystic_arcanum_level_8:{type:"number"},mystic_arcanum_level_9:{type:"number"}}},{description:"Wizard Class Specific Features",type:"object",properties:{arcane_recover_levels:{type:"number"}}}]}}},example:{level:1,ability_score_bonuses:0,prof_bonus:2,features:[{index:"rage",name:"Rage",url:"/api/features/rage"},{index:"barbarian-unarmored-defense",name:"Unarmored Defense",url:"/api/features/barbarian-unarmored-defense"}],class_specific:{rage_count:2,rage_damage_bonus:2,brutal_critical_dice:0},index:"barbarian-1",class:{index:"barbarian",name:"Barbarian",url:"/api/classes/barbarian"},url:"/api/classes/barbarian/levels/1"}}}}},description:"Get level resource for a class and level.",method:"get",path:"/api/classes/{index}/levels/{class_level}",servers:[{url:"https://www.dnd5eapi.co",description:"Production"},{url:"http://localhost:3000",description:"Local Development"}],info:{title:"D&D 5e API",description:"",version:"0.1",license:{name:"MIT License",url:"https://github.com/5e-bits/5e-srd-api/blob/main/LICENSE.md"},contact:{name:"5eBits",url:"https://github.com/5e-bits"}},postman:{name:"Get level resource for a class and level.",description:{type:"text/plain"},url:{path:["api","classes",":index","levels",":class_level"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) The `index` of the class to get.\n",type:"text/plain"},type:"any",value:"<string>",key:"index"},{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<number>",key:"class_level"}]},method:"GET"}},source:"@site/openapi.json",sourceDirName:".",permalink:"/docs/api/get-level-resource-for-a-class-and-level",previous:{title:"Get all level resources for a class.",permalink:"/docs/api/get-all-level-resources-for-a-class"},next:{title:"Get features available to a class at the requested level.",permalink:"/docs/api/get-features-available-to-a-class-at-the-requested-level"}},c=[];function a(e){const s={code:"code",h1:"h1",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"get-level-resource-for-a-class-and-level",children:"Get level resource for a class and level."}),"\n",(0,i.jsx)(s.p,{children:"Get level resource for a class and level."}),"\n",(0,i.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("th",{style:{textAlign:"left"},children:"Path Parameters"})})}),(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"index"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,i.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Possible values:"})," [",(0,i.jsx)(s.code,{children:"barbarian"}),", ",(0,i.jsx)(s.code,{children:"bard"}),", ",(0,i.jsx)(s.code,{children:"cleric"}),", ",(0,i.jsx)(s.code,{children:"druid"}),", ",(0,i.jsx)(s.code,{children:"fighter"}),", ",(0,i.jsx)(s.code,{children:"monk"}),", ",(0,i.jsx)(s.code,{children:"paladin"}),", ",(0,i.jsx)(s.code,{children:"ranger"}),", ",(0,i.jsx)(s.code,{children:"rogue"}),", ",(0,i.jsx)(s.code,{children:"sorcerer"}),", ",(0,i.jsx)(s.code,{children:"warlock"}),", ",(0,i.jsx)(s.code,{children:"wizard"}),"]"]})}),(0,i.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"index"})," of the class to get."]})})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"class_level"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" number"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,i.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Possible values:"})," value \u2264 20"]})})]})})]})]}),"\n",(0,i.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,i.jsx)("tbody",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)("code",{children:"200"})}),(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"OK"})})]}),(0,i.jsx)("div",{children:(0,i.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("th",{style:{textAlign:"left"},children:[(0,i.jsx)("span",{children:"Schema "}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{})]})})}),(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"index"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)(s.p,{children:"Resource index for shorthand searching."})})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"url"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)(s.p,{children:"URL of the referenced resource."})})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"level"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" number"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)(s.p,{children:"The number value for the current level object."})})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"ability_score_bonuses"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" number"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)(s.p,{children:"Total number of ability score bonuses gained, added from previous levels."})})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"prof_bonus"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" number"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)(s.p,{children:"Proficiency bonus for this class at the specified level."})})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"features"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)(s.p,{children:"Features automatically gained at this level."})}),(0,i.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"index"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)(s.p,{children:"Resource index for shorthand searching."})})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"level"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" integer"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)(s.p,{children:"Level of the referenced resource."})})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"name"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)(s.p,{children:"Name of the referenced resource."})})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"url"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)(s.p,{children:"URL of the referenced resource."})})]})})]})})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"spellcasting"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" object"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)(s.p,{children:"Summary of spells known at this level."})}),(0,i.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"cantrips_known"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" number"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"spells_known"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" number"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"spell_slots_level_1"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" number"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"spell_slots_level_2"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" number"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"spell_slots_level_3"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" number"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"spell_slots_level_4"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" number"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"spell_slots_level_5"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" number"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"spell_slots_level_6"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" number"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"spell_slots_level_7"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" number"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"spell_slots_level_8"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" number"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"spell_slots_level_9"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" number"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})})]})})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"class_specific"}),(0,i.jsx)("span",{style:{opacity:"0.6"}}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)(s.p,{children:"Class specific information such as dice values for bard songs and number of warlock invocations."})})]})})]})]})})]})})})]})]})}function d(e){void 0===e&&(e={});const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>t,x:()=>o});var i=r(96540);const n={},l=i.createContext(n);function t(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);