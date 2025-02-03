"use strict";(self.webpackChunkdisc_documentation=self.webpackChunkdisc_documentation||[]).push([[8390],{5115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"overview","title":"Overview of the Project Template","description":"This guide will walk you through setting up your team\'s development environment using our template repositories.","source":"@site/docs/discover-program-template-project/overview.md","sourceDirName":".","slug":"/overview","permalink":"/DISC-Documentation-Website/discover-program-template-project/overview","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"overview","title":"Overview of the Project Template","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/DISC-Documentation-Website/discover-program-template-project/intro"},"next":{"title":"Getting Started","permalink":"/DISC-Documentation-Website/discover-program-template-project/getting-started"}}');var i=n(4848),s=n(8453);const o={id:"overview",title:"Overview of the Project Template",sidebar_position:1},a="Getting Started with DISCover Program Templates",l={},c=[{value:"Repository Setup",id:"repository-setup",level:2},{value:"Initial Setup by Tech Lead",id:"initial-setup-by-tech-lead",level:3},{value:"Team Access",id:"team-access",level:3},{value:"Development Workflow",id:"development-workflow",level:2},{value:"Step-by-Step Process",id:"step-by-step-process",level:3},{value:"Why This Structure?",id:"why-this-structure",level:2},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"getting-started-with-discover-program-templates",children:"Getting Started with DISCover Program Templates"})}),"\n",(0,i.jsx)(t.p,{children:"This guide will walk you through setting up your team's development environment using our template repositories."}),"\n",(0,i.jsx)(t.h2,{id:"repository-setup",children:"Repository Setup"}),"\n",(0,i.jsx)(t.h3,{id:"initial-setup-by-tech-lead",children:"Initial Setup by Tech Lead"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["The team's tech lead will receive access to the ",(0,i.jsx)(t.code,{children:"disc-template"})," GitHub organization"]}),"\n",(0,i.jsxs)(t.li,{children:["Tech lead needs to create two new repositories by copying from our templates:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Frontend: ",(0,i.jsx)(t.code,{children:"https://github.com/disc-template/frontend"})]}),"\n",(0,i.jsxs)(t.li,{children:["Backend: ",(0,i.jsx)(t.code,{children:"https://github.com/disc-template/backend"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.mermaid,{value:"graph TB\n    A[disc-template/frontend] --\x3e|Copy| B[your-team/frontend]\n    C[disc-template/backend] --\x3e|Copy| D[your-team/backend]\n    B --\x3e|Deploy| E[Vercel Frontend]\n    D --\x3e|Deploy| F[Vercel Backend]"}),"\n",(0,i.jsx)(t.h3,{id:"team-access",children:"Team Access"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Tech lead adds team members as collaborators to both repositories"}),"\n",(0,i.jsx)(t.li,{children:"Each team member then:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"# Clone frontend repository\ngit clone https://github.com/your-team-name/frontend.git\n\n# Clone backend repository\ngit clone https://github.com/your-team-name/backend.git\n"})}),"\n",(0,i.jsx)(t.h2,{id:"development-workflow",children:"Development Workflow"}),"\n",(0,i.jsx)(t.mermaid,{value:"graph LR\n    A[Create Branch] --\x3e|Make Changes| B[Commit]\n    B --\x3e|Push| C[Create PR]\n    C --\x3e|Review| D[Merge]\n    D --\x3e|Auto Deploy| E[Vercel]"}),"\n",(0,i.jsx)(t.h3,{id:"step-by-step-process",children:"Step-by-Step Process"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Create feature branch:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"git checkout -b feature/your-feature-name\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsx)(t.li,{children:"Make changes and commit:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'git add .\ngit commit -m "feat: description"\ngit push origin feature/your-feature-name\n'})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsx)(t.li,{children:"Create Pull Request and get reviews"}),"\n",(0,i.jsx)(t.li,{children:"Merge to main triggers automatic deployment"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"why-this-structure",children:"Why This Structure?"}),"\n",(0,i.jsx)(t.p,{children:"Our repository structure is designed to:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Enable free deployments on Vercel"}),"\n",(0,i.jsx)(t.li,{children:"Maintain separate environments for each team"}),"\n",(0,i.jsx)(t.li,{children:"Keep codebase organized and manageable"}),"\n",(0,i.jsx)(t.li,{children:"Enable proper code review processes"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Set up the ",(0,i.jsx)(t.a,{href:"./backend/getting-started",children:"Backend Environment"}),"\n\xba"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(6540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);