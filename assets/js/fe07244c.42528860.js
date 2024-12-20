"use strict";(self.webpackChunkdisc_documentation=self.webpackChunkdisc_documentation||[]).push([[2874],{323:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"backend/getting-started","title":"Getting Started","description":"Prerequisites","source":"@site/docs/discover-program-template-project/backend/getting-started.md","sourceDirName":"backend","slug":"/backend/getting-started","permalink":"/DISC-Documentation-Website/discover-program-template-project/backend/getting-started","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"getting-started","title":"Getting Started","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Getting Started","permalink":"/DISC-Documentation-Website/discover-program-template-project/getting-started"},"next":{"title":"Project Structure","permalink":"/DISC-Documentation-Website/discover-program-template-project/backend/project-structure"}}');var s=t(4848),l=t(8453);const r={id:"getting-started",title:"Getting Started",sidebar_position:1},o="Getting Started",a={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Supabase Setup",id:"supabase-setup",level:2},{value:"1. Create a Project",id:"1-create-a-project",level:3},{value:"2. Create Users Table",id:"2-create-users-table",level:3},{value:"3. Configure Authentication",id:"3-configure-authentication",level:3},{value:"Google OAuth Setup",id:"google-oauth-setup",level:2},{value:"1. Google Cloud Console",id:"1-google-cloud-console",level:3},{value:"2. Supabase OAuth Configuration",id:"2-supabase-oauth-configuration",level:3},{value:"Environment Variables",id:"environment-variables",level:2},{value:"Start Development Server",id:"start-development-server",level:2},{value:"Development Tools",id:"development-tools",level:2},{value:"Recommended VS Code Extensions",id:"recommended-vs-code-extensions",level:3},{value:"Available Scripts",id:"available-scripts",level:3},{value:"Next Steps",id:"next-steps",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"getting-started",children:"Getting Started"})}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"Before you begin, make sure you have:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," version 18.0 or higher"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://git-scm.com/",children:"Git"})," for version control"]}),"\n",(0,s.jsxs)(n.li,{children:["A code editor (we recommend ",(0,s.jsx)(n.a,{href:"https://code.visualstudio.com/",children:"VS Code"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://supabase.com/",children:"Supabase"})," account"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://console.cloud.google.com/",children:"Google Cloud Console"})," account (for OAuth)"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Clone the repository:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/disc-template/backend.git\ncd backend\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Install dependencies:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["Copy ",(0,s.jsx)(n.code,{children:".env.example"})," to ",(0,s.jsx)(n.code,{children:".env"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cp .env.example .env\n"})}),"\n",(0,s.jsx)(n.h2,{id:"supabase-setup",children:"Supabase Setup"}),"\n",(0,s.jsx)(n.h3,{id:"1-create-a-project",children:"1. Create a Project"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.a,{href:"https://supabase.com/dashboard",children:"Supabase Dashboard"})]}),"\n",(0,s.jsx)(n.li,{children:'Click "New Project"'}),"\n",(0,s.jsx)(n.li,{children:"Fill in project details"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2-create-users-table",children:"2. Create Users Table"}),"\n",(0,s.jsx)(n.p,{children:"Run this SQL in the Supabase SQL editor:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE users (\n  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,\n  username VARCHAR(255) UNIQUE NOT NULL,\n  email VARCHAR(255) UNIQUE NOT NULL,\n  firstname VARCHAR(255),\n  lastname VARCHAR(255),\n  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),\n  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())\n);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"3-configure-authentication",children:"3. Configure Authentication"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Go to Authentication settings in Supabase dashboard"}),"\n",(0,s.jsx)(n.li,{children:"Enable Email auth provider"}),"\n",(0,s.jsx)(n.li,{children:"Configure Email templates (optional)"}),"\n",(0,s.jsx)(n.li,{children:"Set Site URL to your frontend URL"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"google-oauth-setup",children:"Google OAuth Setup"}),"\n",(0,s.jsx)(n.h3,{id:"1-google-cloud-console",children:"1. Google Cloud Console"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Create a new project in ",(0,s.jsx)(n.a,{href:"https://console.cloud.google.com/",children:"Google Cloud Console"})]}),"\n",(0,s.jsx)(n.li,{children:"Enable Google OAuth API"}),"\n",(0,s.jsx)(n.li,{children:"Configure OAuth consent screen"}),"\n",(0,s.jsxs)(n.li,{children:["Create OAuth 2.0 Client ID","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Add authorized redirect URIs:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"[YOUR_SUPABASE_URL]/auth/v1/callback"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"http://localhost:3000/auth/callback"})," (for development)"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2-supabase-oauth-configuration",children:"2. Supabase OAuth Configuration"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Go to Authentication > Providers in Supabase"}),"\n",(0,s.jsx)(n.li,{children:"Enable Google provider"}),"\n",(0,s.jsx)(n.li,{children:"Add Client ID and Client Secret from Google Cloud Console"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,s.jsxs)(n.p,{children:["Create ",(0,s.jsx)(n.code,{children:".env"})," file with:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"FRONTEND_URL=http://localhost:3001\nSUPABASE_URL=your_supabase_url\nSUPABASE_ANON_KEY=your_supabase_anon_key\nPORT=3000\nNODE_ENV=development\n"})}),"\n",(0,s.jsx)(n.h2,{id:"start-development-server",children:"Start Development Server"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Server will start at ",(0,s.jsx)(n.code,{children:"http://localhost:3000"})]}),"\n",(0,s.jsx)(n.h2,{id:"development-tools",children:"Development Tools"}),"\n",(0,s.jsx)(n.h3,{id:"recommended-vs-code-extensions",children:"Recommended VS Code Extensions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",children:"ESLint"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",children:"Prettier"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"available-scripts",children:"Available Scripts"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"npm run dev"})," - Start development server"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"npm start"})," - Start production server"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"npm test"})," - Run tests"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"npm run lint"})," - Run ESLint"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"npm run format"})," - Format code with Prettier"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Review the ",(0,s.jsx)(n.a,{href:"/DISC-Documentation-Website/discover-program-template-project/backend/project-structure",children:"Project Structure"})]}),"\n",(0,s.jsxs)(n.li,{children:["Check the ",(0,s.jsx)(n.a,{href:"/DISC-Documentation-Website/discover-program-template-project/backend/contributing",children:"Contributing Guide"})]}),"\n",(0,s.jsxs)(n.li,{children:["Set up your ",(0,s.jsx)(n.a,{href:"/DISC-Documentation-Website/discover-program-template-project/backend/development",children:"Development Environment"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);