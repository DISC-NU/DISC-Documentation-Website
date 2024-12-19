"use strict";(self.webpackChunkdisc_documentation=self.webpackChunkdisc_documentation||[]).push([[528],{1044:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"contributing","title":"Contributing Guidelines","description":"This guide explains how to contribute to the DISC Workshop Series Website. Due to our deployment setup, we follow a specific fork-based workflow.","source":"@site/docs/workshop-series/contributing.md","sourceDirName":".","slug":"/contributing","permalink":"/DISC-Documentation-Website/workshop-series/contributing","draft":false,"unlisted":false,"editUrl":"https://github.com/DISC-NU/DISC-Documentation-Website/tree/main/docs/workshop-series/contributing.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"contributing","sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Project Structure","permalink":"/DISC-Documentation-Website/workshop-series/project-structure"}}');var t=i(4848),l=i(8453);const r={id:"contributing",sidebar_position:5},o="Contributing Guidelines",c={},d=[{value:"Repository Setup",id:"repository-setup",level:2},{value:"Contributing Workflow",id:"contributing-workflow",level:2},{value:"1. Initial Setup",id:"1-initial-setup",level:3},{value:"2. Making Changes",id:"2-making-changes",level:3},{value:"3. Submitting Changes",id:"3-submitting-changes",level:3},{value:"Step 1: Pull Request to DISC-NU Fork",id:"step-1-pull-request-to-disc-nu-fork",level:4},{value:"Step 2: Pull Request to Main Repository",id:"step-2-pull-request-to-main-repository",level:4},{value:"Best Practices",id:"best-practices",level:2},{value:"Commit Messages",id:"commit-messages",level:3},{value:"Branch Naming",id:"branch-naming",level:3},{value:"Pull Request Guidelines",id:"pull-request-guidelines",level:3},{value:"Code Style",id:"code-style",level:3},{value:"Common Tasks",id:"common-tasks",level:2},{value:"Adding Workshop Content",id:"adding-workshop-content",level:3},{value:"Fixing Bugs",id:"fixing-bugs",level:3},{value:"Getting Help",id:"getting-help",level:2},{value:"Why This Setup?",id:"why-this-setup",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"contributing-guidelines",children:"Contributing Guidelines"})}),"\n",(0,t.jsx)(n.p,{children:"This guide explains how to contribute to the DISC Workshop Series Website. Due to our deployment setup, we follow a specific fork-based workflow."}),"\n",(0,t.jsx)(n.h2,{id:"repository-setup",children:"Repository Setup"}),"\n",(0,t.jsx)(n.p,{children:"There are two main repositories involved in our workflow:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"DISC-NU Organization Fork"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["URL: ",(0,t.jsx)(n.a,{href:"https://github.com/DISC-NU/disc-fall-2024-workshop-series-website",children:"https://github.com/DISC-NU/disc-fall-2024-workshop-series-website"})]}),"\n",(0,t.jsx)(n.li,{children:"This is where all contributors should make their initial contributions"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Main Repository"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["URL: ",(0,t.jsx)(n.a,{href:"https://github.com/ethanpaneraa/disc-fall-2024-workshop-series-website",children:"https://github.com/ethanpaneraa/disc-fall-2024-workshop-series-website"})]}),"\n",(0,t.jsx)(n.li,{children:"This is the production repository where approved changes are ultimately merged"}),"\n",(0,t.jsx)(n.li,{children:"Hosted on Vercel under the hobbyist tier plan"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),": We use this two-repository setup to maintain deployment on Vercel's hobbyist tier plan, which isn't available for organization-owned repositories."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"contributing-workflow",children:"Contributing Workflow"}),"\n",(0,t.jsx)(n.h3,{id:"1-initial-setup",children:"1. Initial Setup"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Clone the DISC-NU organization fork\ngit clone https://github.com/DISC-NU/disc-fall-2024-workshop-series-website.git\ncd disc-fall-2024-workshop-series-website\n\n# Add the main repository as a remote\ngit remote add upstream https://github.com/ethanpaneraa/disc-fall-2024-workshop-series-website.git\n"})}),"\n",(0,t.jsx)(n.h3,{id:"2-making-changes",children:"2. Making Changes"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Ensure your local main branch is up to date:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git checkout main\ngit pull origin main\ngit pull upstream main\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Create a new branch for your changes:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git checkout -b feature/your-feature-name\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Make your changes and commit them:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'git add .\ngit commit -m "Descriptive commit message"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"3-submitting-changes",children:"3. Submitting Changes"}),"\n",(0,t.jsx)(n.h4,{id:"step-1-pull-request-to-disc-nu-fork",children:"Step 1: Pull Request to DISC-NU Fork"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Push your changes to the DISC-NU fork:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git push origin feature/your-feature-name\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Go to the ",(0,t.jsx)(n.a,{href:"https://github.com/DISC-NU/disc-fall-2024-workshop-series-website",children:"DISC-NU repository"})]}),"\n",(0,t.jsx)(n.li,{children:"Create a Pull Request from your branch to the main branch"}),"\n",(0,t.jsx)(n.li,{children:"Wait for review and approval"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"step-2-pull-request-to-main-repository",children:"Step 2: Pull Request to Main Repository"}),"\n",(0,t.jsx)(n.p,{children:"After your changes are approved and merged into the DISC-NU fork:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"A maintainer will create a Pull Request from the DISC-NU fork to the main repository"}),"\n",(0,t.jsx)(n.li,{children:"Changes will be reviewed again"}),"\n",(0,t.jsx)(n.li,{children:"Upon approval, changes will be merged and automatically deployed via Vercel"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,t.jsx)(n.h3,{id:"commit-messages",children:"Commit Messages"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Use clear, descriptive commit messages"}),"\n",(0,t.jsx)(n.li,{children:'Start with a verb (e.g., "Add", "Fix", "Update")'}),"\n",(0,t.jsx)(n.li,{children:"Keep the first line under 50 characters"}),"\n",(0,t.jsx)(n.li,{children:"Add more detailed explanation in the body if needed"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'git commit -m "Add workshop 3 content" -m "Added content for Git and VSCode workshop including:\n- Installation guides\n- Basic commands\n- Best practices"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"branch-naming",children:"Branch Naming"}),"\n",(0,t.jsx)(n.p,{children:"Follow this format:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Features: ",(0,t.jsx)(n.code,{children:"feature/description"})]}),"\n",(0,t.jsxs)(n.li,{children:["Fixes: ",(0,t.jsx)(n.code,{children:"fix/description"})]}),"\n",(0,t.jsxs)(n.li,{children:["Content: ",(0,t.jsx)(n.code,{children:"content/description"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Examples:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"feature/add-search"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"fix/navigation-bug"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"content/workshop-3"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"pull-request-guidelines",children:"Pull Request Guidelines"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Title"}),": Clear and descriptive"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Description"}),": Include:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"What changes were made"}),"\n",(0,t.jsx)(n.li,{children:"Why changes were made"}),"\n",(0,t.jsx)(n.li,{children:"Any related issues or PRs"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Size"}),": Keep PRs focused and reasonably sized"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Testing"}),": Ensure all changes work locally"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"code-style",children:"Code Style"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Follow existing code patterns"}),"\n",(0,t.jsx)(n.li,{children:"Use TypeScript features appropriately"}),"\n",(0,t.jsx)(n.li,{children:"Follow Tailwind CSS conventions"}),"\n",(0,t.jsx)(n.li,{children:"Comment complex logic"}),"\n",(0,t.jsx)(n.li,{children:"Use meaningful variable names"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"common-tasks",children:"Common Tasks"}),"\n",(0,t.jsx)(n.h3,{id:"adding-workshop-content",children:"Adding Workshop Content"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Create new branch: ",(0,t.jsx)(n.code,{children:"content/workshop-X"})]}),"\n",(0,t.jsxs)(n.li,{children:["Add content in ",(0,t.jsx)(n.code,{children:"/contents/content/workshops/workshop-X"})]}),"\n",(0,t.jsx)(n.li,{children:"Update route configuration if needed"}),"\n",(0,t.jsx)(n.li,{children:"Follow PR process as described above"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"fixing-bugs",children:"Fixing Bugs"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Create branch: ",(0,t.jsx)(n.code,{children:"fix/bug-description"})]}),"\n",(0,t.jsx)(n.li,{children:"Make minimal necessary changes"}),"\n",(0,t.jsx)(n.li,{children:"Add tests if possible"}),"\n",(0,t.jsx)(n.li,{children:"Follow PR process"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"getting-help",children:"Getting Help"}),"\n",(0,t.jsx)(n.p,{children:"If you need assistance:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Check existing documentation"}),"\n",(0,t.jsx)(n.li,{children:"Ask in DISC Discord channel"}),"\n",(0,t.jsx)(n.li,{children:"Contact the maintainers"}),"\n",(0,t.jsx)(n.li,{children:"Create an issue in the DISC-NU repository"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"why-this-setup",children:"Why This Setup?"}),"\n",(0,t.jsx)(n.p,{children:"We use this two-repository setup because:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"It allows us to use Vercel's hobbyist tier plan for deployment"}),"\n",(0,t.jsx)(n.li,{children:"Provides a clear review process"}),"\n",(0,t.jsx)(n.li,{children:"Maintains code quality through double review"}),"\n",(0,t.jsx)(n.li,{children:"Keeps deployment costs minimal"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Remember, while this workflow might seem complex, it's designed to ensure quality while keeping our deployment costs at zero."})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var s=i(6540);const t={},l=s.createContext(t);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);