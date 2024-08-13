"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7222],{3408:(e,t,a)=>{a.d(t,{A:()=>u});var n=a(96540),l=a(34164),o=a(21312),s=a(17559),i=a(23104),c=a(75062);const r={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var d=a(74848);function u(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[a,l]=(0,n.useState)(!1),o=(0,n.useRef)(!1),{startScroll:s,cancelScroll:r}=(0,i.gk)();return(0,i.Mq)(((e,a)=>{let{scrollY:n}=e;const s=a?.scrollY;s&&(o.current?o.current=!1:n>=s?(r(),l(!1)):n<t?l(!1):n+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,c.$)((e=>{e.location.hash&&(o.current=!0,l(!1))})),{shown:a,scrollToTop:()=>s(0)}}({threshold:300});return(0,d.jsx)("button",{"aria-label":(0,o.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.A)("clean-btn",s.G.common.backToTopButton,r.backToTopButton,e&&r.backToTopButtonShow),type:"button",onClick:t})}},93975:(e,t,a)=>{a.d(t,{A:()=>X});var n=a(96540),l=a(24581),o=a(34164),s=a(6342),i=a(23465),c=a(21312),r=a(85861);const d={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};var u=a(74848);function m(e){let{onClick:t}=e;return(0,u.jsx)("button",{type:"button",title:(0,c.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.A)("button button--secondary button--outline",d.collapseSidebarButton),onClick:t,children:(0,u.jsx)(r.A,{className:d.collapseSidebarButtonIcon})})}var h=a(17559),b=a(65041),p=a(23104),x=a(84142),v=a(89532);const f=Symbol("EmptyContext"),k=n.createContext(f);function A(e){let{children:t}=e;const[a,l]=(0,n.useState)(null),o=(0,n.useMemo)((()=>({expandedItem:a,setExpandedItem:l})),[a]);return(0,u.jsx)(k.Provider,{value:o,children:t})}var j=a(41422),_=a(99169),g=a(28774),T=a(92303);function N(e){let{collapsed:t,categoryLabel:a,onClick:n}=e;return(0,u.jsx)("button",{"aria-label":t?(0,c.T)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:a}):(0,c.T)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:a}),"aria-expanded":!t,type:"button",className:"clean-btn menu__caret",onClick:n})}function S(e){let{item:t,onItemClick:a,activePath:l,level:i,index:c,...r}=e;const{items:d,label:m,collapsible:b,className:p,href:A}=t,{docs:{sidebar:{autoCollapseCategories:S}}}=(0,s.p)(),C=function(e){const t=(0,T.A)();return(0,n.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,x.Nr)(e):void 0),[e,t])}(t),I=(0,x.w8)(t,l),y=(0,_.ys)(A,l),{collapsed:L,setCollapsed:B}=(0,j.u)({initialState:()=>!!b&&(!I&&t.collapsed)}),{expandedItem:w,setExpandedItem:M}=function(){const e=(0,n.useContext)(k);if(e===f)throw new v.dV("DocSidebarItemsExpandedStateProvider");return e}(),E=function(e){void 0===e&&(e=!L),M(e?null:c),B(e)};return function(e){let{isActive:t,collapsed:a,updateCollapsed:l}=e;const o=(0,v.ZC)(t);(0,n.useEffect)((()=>{t&&!o&&a&&l(!1)}),[t,o,a,l])}({isActive:I,collapsed:L,updateCollapsed:E}),(0,n.useEffect)((()=>{b&&null!=w&&w!==c&&S&&B(!0)}),[b,w,c,B,S]),(0,u.jsxs)("li",{className:(0,o.A)(h.G.docs.docSidebarItemCategory,h.G.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":L},p),children:[(0,u.jsxs)("div",{className:(0,o.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":y}),children:[(0,u.jsx)(g.A,{className:(0,o.A)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!A&&b,"menu__link--active":I}),onClick:b?e=>{a?.(t),A?E(!1):(e.preventDefault(),E())}:()=>{a?.(t)},"aria-current":y?"page":void 0,role:b&&!A?"button":void 0,"aria-expanded":b&&!A?!L:void 0,href:b?C??"#":C,...r,children:m}),A&&b&&(0,u.jsx)(N,{collapsed:L,categoryLabel:m,onClick:e=>{e.preventDefault(),E()}})]}),(0,u.jsx)(j.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:L,children:(0,u.jsx)(G,{items:d,tabIndex:L?-1:0,onItemClick:a,activePath:l,level:i+1})})]})}var C=a(16654),I=a(43186);const y={menuExternalLink:"menuExternalLink_NmtK"};function L(e){let{item:t,onItemClick:a,activePath:n,level:l,index:s,...i}=e;const{href:c,label:r,className:d,autoAddBaseUrl:m}=t,b=(0,x.w8)(t,n),p=(0,C.A)(c);return(0,u.jsx)("li",{className:(0,o.A)(h.G.docs.docSidebarItemLink,h.G.docs.docSidebarItemLinkLevel(l),"menu__list-item",d),children:(0,u.jsxs)(g.A,{className:(0,o.A)("menu__link",!p&&y.menuExternalLink,{"menu__link--active":b}),autoAddBaseUrl:m,"aria-current":b?"page":void 0,to:c,...p&&{onClick:a?()=>a(t):void 0},...i,children:[r,!p&&(0,u.jsx)(I.A,{})]})},r)}const B={menuHtmlItem:"menuHtmlItem_M9Kj"};function w(e){let{item:t,level:a,index:n}=e;const{value:l,defaultStyle:s,className:i}=t;return(0,u.jsx)("li",{className:(0,o.A)(h.G.docs.docSidebarItemLink,h.G.docs.docSidebarItemLinkLevel(a),s&&[B.menuHtmlItem,"menu__list-item"],i),dangerouslySetInnerHTML:{__html:l}},n)}function M(e){let{item:t,...a}=e;switch(t.type){case"category":return(0,u.jsx)(S,{item:t,...a});case"html":return(0,u.jsx)(w,{item:t,...a});default:return(0,u.jsx)(L,{item:t,...a})}}function E(e){let{items:t,...a}=e;const n=(0,x.Y)(t,a.activePath);return(0,u.jsx)(A,{children:n.map(((e,t)=>(0,u.jsx)(M,{item:e,index:t,...a},t)))})}const G=(0,n.memo)(E),P={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function H(e){let{path:t,sidebar:a,className:l}=e;const s=function(){const{isActive:e}=(0,b.M)(),[t,a]=(0,n.useState)(e);return(0,p.Mq)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}();return(0,u.jsx)("nav",{"aria-label":(0,c.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.A)("menu thin-scrollbar",P.menu,s&&P.menuWithAnnouncementBar,l),children:(0,u.jsx)("ul",{className:(0,o.A)(h.G.docs.docSidebarMenu,"menu__list"),children:(0,u.jsx)(G,{items:a,activePath:t,level:1})})})}const F="sidebar_njMd",W="sidebarWithHideableNavbar_wUlq",D="sidebarHidden_VK0M",R="sidebarLogo_isFc";function U(e){let{path:t,sidebar:a,onCollapse:n,isHidden:l}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:r}}}=(0,s.p)();return(0,u.jsxs)("div",{className:(0,o.A)(F,c&&W,l&&D),children:[c&&(0,u.jsx)(i.A,{tabIndex:-1,className:R}),(0,u.jsx)(H,{path:t,sidebar:a}),r&&(0,u.jsx)(m,{onClick:n})]})}const Y=n.memo(U);var q=a(75600),z=a(22069);const K=e=>{let{sidebar:t,path:a}=e;const n=(0,z.M)();return(0,u.jsx)("ul",{className:(0,o.A)(h.G.docs.docSidebarMenu,"menu__list"),children:(0,u.jsx)(G,{items:t,activePath:a,onItemClick:e=>{"category"===e.type&&e.href&&n.toggle(),"link"===e.type&&n.toggle()},level:1})})};function O(e){return(0,u.jsx)(q.GX,{component:K,props:e})}const V=n.memo(O);function X(e){const t=(0,l.l)(),a="desktop"===t||"ssr"===t,n="mobile"===t;return(0,u.jsxs)(u.Fragment,{children:[a&&(0,u.jsx)(Y,{...e}),n&&(0,u.jsx)(V,{...e})]})}},85861:(e,t,a)=>{a.d(t,{A:()=>l});a(96540);var n=a(74848);function l(e){return(0,n.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,n.jsxs)("g",{fill:"#7a7a7a",children:[(0,n.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,n.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}},23363:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var n=a(34164),l=a(21312),o=a(51107),s=a(74848);function i(e){let{className:t}=e;return(0,s.jsx)("main",{className:(0,n.A)("container margin-vert--xl",t),children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,s.jsx)(o.A,{as:"h1",className:"hero__title",children:(0,s.jsx)(l.A,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,s.jsx)("p",{children:(0,s.jsx)(l.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,s.jsx)("p",{children:(0,s.jsx)(l.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);