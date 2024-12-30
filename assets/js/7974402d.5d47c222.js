"use strict";(self.webpackChunkdisc_documentation=self.webpackChunkdisc_documentation||[]).push([[1836],{4367:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"frontend/getting-started","title":"Getting Started","description":"Prerequisites","source":"@site/docs/discover-program-template-project/frontend/getting-started.md","sourceDirName":"frontend","slug":"/frontend/getting-started","permalink":"/DISC-Documentation-Website/discover-program-template-project/frontend/getting-started","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"getting-started","title":"Getting Started","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Contributing","permalink":"/DISC-Documentation-Website/discover-program-template-project/backend/contributing"},"next":{"title":"Project Structure","permalink":"/DISC-Documentation-Website/discover-program-template-project/frontend/project-structure"}}');var r=n(4848),s=n(8453);const o={id:"getting-started",title:"Getting Started",sidebar_position:1},l="Getting Started",c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Development Environment Setup",id:"development-environment-setup",level:2},{value:"Code Editor Configuration",id:"code-editor-configuration",level:3},{value:"Code Formatting Setup",id:"code-formatting-setup",level:3},{value:"Running the Application",id:"running-the-application",level:2},{value:"Additional Scripts",id:"additional-scripts",level:3},{value:"Project Structure Overview",id:"project-structure-overview",level:2},{value:"Next Steps",id:"next-steps",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"getting-started",children:"Getting Started"})}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(t.p,{children:"Before you begin, make sure you have:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://nodejs.org/",children:"Node.js"})," version 18.0 or higher"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://git-scm.com/",children:"Git"})," for version control"]}),"\n",(0,r.jsxs)(t.li,{children:["A code editor (we recommend ",(0,r.jsx)(t.a,{href:"https://code.visualstudio.com/",children:"VS Code"}),")"]}),"\n",(0,r.jsx)(t.li,{children:"NPM (comes with Node.js)"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Clone the repository:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/disc-template/frontend.git\ncd frontend\n"})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsx)(t.li,{children:"Install dependencies:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm i\n"})}),"\n",(0,r.jsx)(t.h2,{id:"development-environment-setup",children:"Development Environment Setup"}),"\n",(0,r.jsx)(t.h3,{id:"code-editor-configuration",children:"Code Editor Configuration"}),"\n",(0,r.jsx)(t.p,{children:"We strongly recommend using Visual Studio Code with the following extensions:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint",children:"Prettier ESLint VSCode extension"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",children:"ESLint VSCode extension"})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"After installing the extensions:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Restart VSCode completely (quit app and reopen)"}),"\n",(0,r.jsxs)(t.li,{children:["The project's ",(0,r.jsx)(t.code,{children:".vscode"})," settings will automatically enable format-on-save"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"code-formatting-setup",children:"Code Formatting Setup"}),"\n",(0,r.jsx)(t.p,{children:"Our project uses ESLint and Prettier for consistent code formatting. The configuration is already set up in:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"eslint.config.mjs"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:".prettierrc.json"})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"All code must follow these formatting rules:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["JSX must be in ",(0,r.jsx)(t.code,{children:".jsx"})," files only"]}),"\n",(0,r.jsx)(t.li,{children:"Single quotes for strings"}),"\n",(0,r.jsx)(t.li,{children:"Semicolons required"}),"\n",(0,r.jsx)(t.li,{children:"80 character line width"}),"\n",(0,r.jsx)(t.li,{children:"2-space indentation"}),"\n",(0,r.jsxs)(t.li,{children:["Structured import ordering (see ",(0,r.jsx)(t.a,{href:"/DISC-Documentation-Website/discover-program-template-project/frontend/development",children:"Development Guide"})," for details)"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"running-the-application",children:"Running the Application"}),"\n",(0,r.jsx)(t.p,{children:"Start the development server:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm start\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The application will be available at ",(0,r.jsx)(t.code,{children:"http://localhost:3000"})]}),"\n",(0,r.jsx)(t.h3,{id:"additional-scripts",children:"Additional Scripts"}),"\n",(0,r.jsx)(t.p,{children:"Run tests:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm test\n"})}),"\n",(0,r.jsx)(t.p,{children:"Create production build:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm run build\n"})}),"\n",(0,r.jsx)(t.h2,{id:"project-structure-overview",children:"Project Structure Overview"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"\u251c\u2500\u2500 public          # Static files\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 assets     # Icons, images, etc.\n\u2502   \u251c\u2500\u2500 common     # Shared components and utilities\n\u2502   \u251c\u2500\u2500 pages      # Page components\n\u2502   \u251c\u2500\u2500 App.css    # Global styles\n\u2502   \u2514\u2500\u2500 App.jsx    # Root component\n\u2514\u2500\u2500 README.md      # Project documentation\n"})}),"\n",(0,r.jsxs)(t.p,{children:["See ",(0,r.jsx)(t.a,{href:"/DISC-Documentation-Website/discover-program-template-project/frontend/project-structure",children:"Project Structure"})," for detailed information."]}),"\n",(0,r.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Review the ",(0,r.jsx)(t.a,{href:"/DISC-Documentation-Website/discover-program-template-project/frontend/project-structure",children:"Project Structure"})]}),"\n",(0,r.jsxs)(t.li,{children:["Read the ",(0,r.jsx)(t.a,{href:"/DISC-Documentation-Website/discover-program-template-project/frontend/development",children:"Development Guide"})]}),"\n",(0,r.jsxs)(t.li,{children:["Check the ",(0,r.jsx)(t.a,{href:"/DISC-Documentation-Website/discover-program-template-project/frontend/contributing",children:"Contributing Guidelines"})]}),"\n",(0,r.jsxs)(t.li,{children:["Learn about ",(0,r.jsx)(t.a,{href:"/DISC-Documentation-Website/discover-program-template-project/frontend/deployment",children:"Deployment"})]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var i=n(6540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);