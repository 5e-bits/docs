"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4243],{15254:(e,i,n)=>{n.r(i),n.d(i,{contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=n(74848),t=n(28453);const r={},c="Get a skill by index.",l={type:"api",id:"get-a-skill-by-index",title:"Get a skill by index.",description:"",slug:"/get-a-skill-by-index",frontMatter:{},api:{description:"# Skill\n\nEach ability covers a broad range of capabilities, including skills that a character or a monster can be proficient in. A skill represents a specific aspect of an ability score, and an individual's proficiency in a skill demonstrates a focus on that aspect. [[SRD p77](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=77)]\n",tags:["Character Data"],parameters:[{name:"index",in:"path",required:!0,description:"The `index` of the skill to get.\n",schema:{type:"string",enum:["acrobatics","animal-handling","arcana","athletics","deception","history","insight","intimidation","investigation","medicine","nature","perception","performance","persuasion","religion","sleight-of-hand","stealth","survival"],example:"nature"}}],responses:{200:{description:"OK",content:{"application/json":{schema:{description:"`Skill`\n",type:"object",properties:{index:{description:"Resource index for shorthand searching.",type:"string"},name:{description:"Name of the referenced resource.",type:"string"},url:{description:"URL of the referenced resource.",type:"string"},desc:{description:"Description of the resource.",type:"array",items:{type:"string"}},ability_score:{description:"`APIReference`\n",type:"object",properties:{index:{description:"Resource index for shorthand searching.",type:"string"},name:{description:"Name of the referenced resource.",type:"string"},url:{description:"URL of the referenced resource.",type:"string"}}}}},example:{index:"acrobatics",name:"Acrobatics",url:"/api/skills/acrobatics",ability_score:{index:"dex",name:"DEX",url:"/api/ability-scores/dex"},desc:["Your Dexterity (Acrobatics) check covers your attempt to stay on your feet in a tricky situation, such as when you're trying to run across a sheet of ice, balance on a tightrope, or stay upright on a rocking ship's deck. The GM might also call for a Dexterity (Acrobatics) check to see if you can perform acrobatic stunts, including dives, rolls, somersaults, and flips."]}}}}},method:"get",path:"/api/skills/{index}",servers:[{url:"https://www.dnd5eapi.co",description:"Production"},{url:"http://localhost:3000",description:"Local Development"}],info:{title:"D&D 5e API",description:"",version:"0.1",license:{name:"MIT License",url:"https://github.com/5e-bits/5e-srd-api/blob/main/LICENSE.md"},contact:{name:"5eBits",url:"https://github.com/5e-bits"}},postman:{name:"Get a skill by index.",description:{content:"# Skill\n\nEach ability covers a broad range of capabilities, including skills that a character or a monster can be proficient in. A skill represents a specific aspect of an ability score, and an individual's proficiency in a skill demonstrates a focus on that aspect. [[SRD p77](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=77)]\n",type:"text/plain"},url:{path:["api","skills",":index"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) The `index` of the skill to get.\n",type:"text/plain"},type:"any",value:"<string>",key:"index"}]},method:"GET"}},source:"@site/openapi.json",sourceDirName:".",permalink:"/docs/api/get-a-skill-by-index",previous:{title:"Get a rule by index.",permalink:"/docs/api/get-a-rule-by-index"},next:{title:"Get list of spells with optional filtering.",permalink:"/docs/api/get-list-of-spells-with-optional-filtering"}},a=[];function o(e){const i={a:"a",code:"code",h1:"h1",header:"header",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"get-a-skill-by-index",children:"Get a skill by index."})}),"\n",(0,s.jsx)(i.h1,{id:"skill",children:"Skill"}),"\n",(0,s.jsxs)(i.p,{children:["Each ability covers a broad range of capabilities, including skills that a character or a monster can be proficient in. A skill represents a specific aspect of an ability score, and an individual's proficiency in a skill demonstrates a focus on that aspect. [",(0,s.jsx)(i.a,{href:"https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=77",children:"SRD p77"}),"]"]}),"\n",(0,s.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsx)("th",{style:{textAlign:"left"},children:"Path Parameters"})})}),(0,s.jsx)("tbody",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"index"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,s.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Possible values:"})," [",(0,s.jsx)(i.code,{children:"acrobatics"}),", ",(0,s.jsx)(i.code,{children:"animal-handling"}),", ",(0,s.jsx)(i.code,{children:"arcana"}),", ",(0,s.jsx)(i.code,{children:"athletics"}),", ",(0,s.jsx)(i.code,{children:"deception"}),", ",(0,s.jsx)(i.code,{children:"history"}),", ",(0,s.jsx)(i.code,{children:"insight"}),", ",(0,s.jsx)(i.code,{children:"intimidation"}),", ",(0,s.jsx)(i.code,{children:"investigation"}),", ",(0,s.jsx)(i.code,{children:"medicine"}),", ",(0,s.jsx)(i.code,{children:"nature"}),", ",(0,s.jsx)(i.code,{children:"perception"}),", ",(0,s.jsx)(i.code,{children:"performance"}),", ",(0,s.jsx)(i.code,{children:"persuasion"}),", ",(0,s.jsx)(i.code,{children:"religion"}),", ",(0,s.jsx)(i.code,{children:"sleight-of-hand"}),", ",(0,s.jsx)(i.code,{children:"stealth"}),", ",(0,s.jsx)(i.code,{children:"survival"}),"]"]})}),(0,s.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"index"})," of the skill to get."]})})]})})})]}),"\n",(0,s.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,s.jsx)("tbody",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)("code",{children:"200"})}),(0,s.jsx)("div",{children:(0,s.jsx)(i.p,{children:"OK"})})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("th",{style:{textAlign:"left"},children:[(0,s.jsx)("span",{children:"Schema "}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{})]})})}),(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"index"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)(i.p,{children:"Resource index for shorthand searching."})})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"name"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)(i.p,{children:"Name of the referenced resource."})})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"url"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)(i.p,{children:"URL of the referenced resource."})})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"desc"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string[]"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)(i.p,{children:"Description of the resource."})})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"ability_score"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" object"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"APIReference"})})}),(0,s.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"index"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)(i.p,{children:"Resource index for shorthand searching."})})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"name"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)(i.p,{children:"Name of the referenced resource."})})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"url"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)(i.p,{children:"URL of the referenced resource."})})]})})]})})]})})]})]})})]})})})]})]})}function d(e){void 0===e&&(e={});const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>c,x:()=>l});var s=n(96540);const t={},r=s.createContext(t);function c(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);