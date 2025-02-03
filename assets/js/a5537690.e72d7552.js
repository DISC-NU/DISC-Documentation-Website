"use strict";(self.webpackChunkdisc_documentation=self.webpackChunkdisc_documentation||[]).push([[341],{7998:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"installation","title":"Installation","description":"This guide will walk you through the process of setting up the DISC Workshop Series Website locally for development.","source":"@site/docs/workshop-series/installation.md","sourceDirName":".","slug":"/installation","permalink":"/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/DISC-NU/DISC-Documentation-Website/tree/main/docs/workshop-series/installation.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"installation","title":"Installation","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/"},"next":{"title":"Quick Start","permalink":"/quick-start"}}');var r=s(4848),l=s(8453);const t={id:"installation",title:"Installation",sidebar_position:2},o="Installation and Setup Guide",d={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"System Requirements",id:"system-requirements",level:2},{value:"Installation Steps",id:"installation-steps",level:2},{value:"1. Clone the Repository",id:"1-clone-the-repository",level:3},{value:"2. Install Dependencies",id:"2-install-dependencies",level:3},{value:"3. Start Development Server",id:"3-start-development-server",level:3},{value:"Verification",id:"verification",level:2},{value:"Common Issues and Solutions",id:"common-issues-and-solutions",level:2},{value:"Build Errors",id:"build-errors",level:3},{value:"Port Already in Use",id:"port-already-in-use",level:3},{value:"TypeScript Errors",id:"typescript-errors",level:3},{value:"Development Tools",id:"development-tools",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Need Help?",id:"need-help",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"installation-and-setup-guide",children:"Installation and Setup Guide"})}),"\n",(0,r.jsx)(n.p,{children:"This guide will walk you through the process of setting up the DISC Workshop Series Website locally for development."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"Before you begin, ensure you have the following installed on your system:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Node.js"})," (LTS version 18.x or later)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"npm"})," (comes with Node.js) or ",(0,r.jsx)(n.strong,{children:"yarn"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Git"})," for version control"]}),"\n",(0,r.jsx)(n.li,{children:"A code editor (we recommend VS Code)"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"system-requirements",children:"System Requirements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Operating System"}),": Windows 10+, macOS, or Linux"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Memory"}),": 4GB RAM minimum (8GB recommended)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Disk Space"}),": At least 1GB of free space"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Browser"}),": Chrome, Firefox, Safari, or Edge (latest versions)"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"installation-steps",children:"Installation Steps"}),"\n",(0,r.jsx)(n.h3,{id:"1-clone-the-repository",children:"1. Clone the Repository"}),"\n",(0,r.jsx)(n.p,{children:"First, clone the project repository from GitHub:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/ethanpaneraa/disc-fall-2024-workshop-series-website.git\ncd disc-fall-2024-workshop-series-website\n"})}),"\n",(0,r.jsx)(n.h3,{id:"2-install-dependencies",children:"2. Install Dependencies"}),"\n",(0,r.jsx)(n.p,{children:"Install all required dependencies using npm:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install\n"})}),"\n",(0,r.jsx)(n.p,{children:"Or if you prefer using yarn:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn install\n"})}),"\n",(0,r.jsx)(n.h3,{id:"3-start-development-server",children:"3. Start Development Server"}),"\n",(0,r.jsx)(n.p,{children:"Start the local development server:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,r.jsx)(n.p,{children:"Or with yarn:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn dev\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The website should now be running at ",(0,r.jsx)(n.code,{children:"http://localhost:3000"})]}),"\n",(0,r.jsx)(n.h2,{id:"verification",children:"Verification"}),"\n",(0,r.jsx)(n.p,{children:"After installation, verify that everything is working correctly:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Open your browser and navigate to ",(0,r.jsx)(n.code,{children:"http://localhost:3000"})]}),"\n",(0,r.jsx)(n.li,{children:"Verify that the home page loads correctly"}),"\n",(0,r.jsx)(n.li,{children:"Check that navigation works"}),"\n",(0,r.jsx)(n.li,{children:"Confirm that MDX content renders properly"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"common-issues-and-solutions",children:"Common Issues and Solutions"}),"\n",(0,r.jsx)(n.h3,{id:"build-errors",children:"Build Errors"}),"\n",(0,r.jsx)(n.p,{children:"If you encounter build errors:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Clear your node_modules and reinstall:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"rm -rf node_modules\nnpm install\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Clear Next.js cache:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"rm -rf .next\n"})}),"\n",(0,r.jsx)(n.h3,{id:"port-already-in-use",children:"Port Already in Use"}),"\n",(0,r.jsx)(n.p,{children:"If port 3000 is already in use:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Kill the process using the port:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"lsof -i :3000\nkill -9 <PID>\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Or start the server on a different port:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run dev -- -p 3001\n"})}),"\n",(0,r.jsx)(n.h3,{id:"typescript-errors",children:"TypeScript Errors"}),"\n",(0,r.jsx)(n.p,{children:"If you see TypeScript errors:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Ensure TypeScript is installed:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install typescript @types/react @types/node --save-dev\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Reset TypeScript configuration:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"rm -rf tsconfig.json\nnpm run dev\n"})}),"\n",(0,r.jsx)(n.h2,{id:"development-tools",children:"Development Tools"}),"\n",(0,r.jsx)(n.p,{children:"We recommend installing these tools for better development experience:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VS Code Extensions"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"ESLint"}),"\n",(0,r.jsx)(n.li,{children:"Prettier"}),"\n",(0,r.jsx)(n.li,{children:"Tailwind CSS IntelliSense"}),"\n",(0,r.jsx)(n.li,{children:"MDX"}),"\n",(0,r.jsx)(n.li,{children:"GitHub Copilot (optional)"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Browser Extensions"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"React Developer Tools"}),"\n",(0,r.jsx)(n.li,{children:"Redux DevTools (if using Redux)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,r.jsx)(n.p,{children:"Now that you have the project set up locally, you can:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Review the ",(0,r.jsx)(n.a,{href:"/project-structure",children:"Project Structure"})," documentation"]}),"\n",(0,r.jsxs)(n.li,{children:["Learn about ",(0,r.jsx)(n.a,{href:"/quick-start",children:"how to quickly start working on our project"})]}),"\n",(0,r.jsxs)(n.li,{children:["Check out our ",(0,r.jsx)(n.a,{href:"/contributing",children:"Contributing Guidelines"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"need-help",children:"Need Help?"}),"\n",(0,r.jsx)(n.p,{children:"If you encounter any issues during installation:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Create an issue on GitHub"}),"\n",(0,r.jsxs)(n.li,{children:["Reach out to the development team:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"mailto:ethanpineda2025@u.northwestern.edu",children:"Ethan Pineda"})}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var i=s(6540);const r={},l=i.createContext(r);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);