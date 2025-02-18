"use strict";(self.webpackChunkdisc_documentation=self.webpackChunkdisc_documentation||[]).push([[6151],{5745:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"getting-started","title":"Getting Started","description":"This entire setup should setup should be done only by _one person_ on the team It should take anywhere between 3-6 hours to complete","source":"@site/docs/discover-program-template-project/getting-started.md","sourceDirName":".","slug":"/getting-started","permalink":"/discover-program-template-project/getting-started","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"getting-started","title":"Getting Started","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/discover-program-template-project/intro"},"next":{"title":"Project Structure","permalink":"/discover-program-template-project/frontend/project-structure"}}');var s=t(4848),l=t(8453);const r={id:"getting-started",title:"Getting Started",sidebar_position:1},o="Getting Started",d={},c=[{value:"Creating Your GitHub Account",id:"creating-your-github-account",level:3},{value:"Forking the Template Repositories",id:"forking-the-template-repositories",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Frontend <code>env</code> example:",id:"frontend-env-example",level:4},{value:"Backend <code>env</code> example:",id:"backend-env-example",level:4},{value:"Supabase Setup",id:"supabase-setup",level:2},{value:"1. Create a Project",id:"1-create-a-project",level:3},{value:"2. Create Users Table",id:"2-create-users-table",level:3},{value:"3. Configure Authentication",id:"3-configure-authentication",level:3},{value:"Google OAuth Setup",id:"google-oauth-setup",level:2},{value:"1. Google Cloud Console Setup",id:"1-google-cloud-console-setup",level:3},{value:"2. Supabase OAuth Configuration",id:"2-supabase-oauth-configuration",level:3},{value:"3. Verify Setup",id:"3-verify-setup",level:3},{value:"Start Development Server (same for frontend and backend)",id:"start-development-server-same-for-frontend-and-backend",level:2},{value:"Development Tools",id:"development-tools",level:2},{value:"Recommended VS Code Extensions",id:"recommended-vs-code-extensions",level:3},{value:"Available Scripts",id:"available-scripts",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"getting-started",children:"Getting Started"})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["This entire setup should setup should be done only by ",(0,s.jsx)(n.em,{children:"one person"})," on the team"]})," It should take anywhere between 3-6 hours to complete"]}),(0,s.jsx)(n.p,{children:"if you are not the member of your team responsible for setting up the starter template, scroll to the bottom"})]}),"\n",(0,s.jsx)(n.h3,{id:"creating-your-github-account",children:"Creating Your GitHub Account"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["You need to create your own GitHub account (unless one was provided to you from your client) at ",(0,s.jsx)(n.a,{href:"https://github.com/signup",children:"https://github.com/signup"})," if they don't already have one"]}),"\n",(0,s.jsx)(n.li,{children:"Complete your GitHub profile setup and verify your email address"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"forking-the-template-repositories",children:"Forking the Template Repositories"}),"\n",(0,s.jsx)(n.p,{children:"Next, you need too:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Navigate to the template repositories:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Frontend: ",(0,s.jsx)(n.code,{children:"https://github.com/disc-template/frontend"})]}),"\n",(0,s.jsxs)(n.li,{children:["Backend: ",(0,s.jsx)(n.code,{children:"https://github.com/disc-template/backend"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:'Click the "Fork" button in the top-right corner of each repository'}),"\n",(0,s.jsx)(n.li,{children:"Select your personal GitHub account as the destination for the fork"}),"\n"]}),"\n",(0,s.jsx)(n.mermaid,{value:"graph TB\n    A[disc-template/frontend] --\x3e|Fork| B[your-account/frontend]\n    C[disc-template/backend] --\x3e|Fork| D[your-account/backend]\n    B --\x3e|Deploy| E[Vercel Frontend]\n    D --\x3e|Deploy| F[Vercel Backend]"}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"Before you begin, make sure you have:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," version 18.0 or higher"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://git-scm.com/",children:"Git"})," for version control"]}),"\n",(0,s.jsxs)(n.li,{children:["A code editor (we recommend ",(0,s.jsx)(n.a,{href:"https://code.visualstudio.com/",children:"VS Code"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://supabase.com/",children:"Supabase"})," account"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://console.cloud.google.com/",children:"Google Cloud Console"})," account (for OAuth)"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.ol,{start:"0",children:["\n",(0,s.jsx)(n.li,{children:"Setup directories"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd # whereever you want your code to live in, make sure you can easily access this in the future\nmkdir disc-template\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Clone the repositories:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/disc-template/frontend.git\ngit clone https://github.com/disc-template/backend.git\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Install dependencies for the frontend:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd frontend\nnpm i\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Install dependencie for the backend"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd backend\nnpm i\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["Copy ",(0,s.jsx)(n.code,{children:".env.example"})," to ",(0,s.jsx)(n.code,{children:".env"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cp .env.example .env\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsxs)(n.li,{children:["Create ",(0,s.jsx)(n.code,{children:".env"})," files (in both frontend and backend repos)"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# cd into the root directory of wherever the template live\n# if following steps exactly:\ncd ..\ntouch frontend/.env && touch backend/.env\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsxs)(n.li,{children:["Create ",(0,s.jsx)(n.code,{children:".env"})," variables"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["you can also just use the ",(0,s.jsx)(n.code,{children:".env.example"})," ",(0,s.jsx)(n.code,{children:".env"})," files in both repos. Just create a ",(0,s.jsx)(n.code,{children:".env"})," file in both directories and copy and paste the keys and default values"]})}),"\n",(0,s.jsxs)(n.h4,{id:"frontend-env-example",children:["Frontend ",(0,s.jsx)(n.code,{children:"env"})," example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"REACT_APP_BACKEND_URL=http://localhost:5050\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"backend-env-example",children:["Backend ",(0,s.jsx)(n.code,{children:"env"})," example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"SUPABASE_URL= #your supabase url here\nSUPABASE_ANON_KEY= # your supabase anon key here\nPORT=5050 # this is the default that we used when making the template\nFRONTEND_URL=http://localhost:3001 # this is the default we used when making the template\nAPI_URL=http://localhost:5050 # this is the default we used when making the template\nFRONTEND_URL_DEV=http://localhost:3001 # this is the default we used when making the template\nNODE_ENV=development # NOTE: you should change this to `production` when you deploy to vercel!!!!\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["After you setup and verified your ",(0,s.jsx)(n.code,{children:".env"})," variables, share your credentials in a ",(0,s.jsx)(n.strong,{children:"private channel"})," with the rest of your team"]})}),"\n",(0,s.jsx)(n.h2,{id:"supabase-setup",children:"Supabase Setup"}),"\n",(0,s.jsx)(n.h3,{id:"1-create-a-project",children:"1. Create a Project"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.a,{href:"https://supabase.com/dashboard",children:"Supabase Dashboard"})]}),"\n",(0,s.jsx)(n.li,{children:'Click "New Project"'}),"\n",(0,s.jsx)(n.li,{children:"Fill in project details"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2-create-users-table",children:"2. Create Users Table"}),"\n",(0,s.jsx)(n.p,{children:"Run this SQL in the Supabase SQL editor:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE users (\n  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,\n  username VARCHAR(255) UNIQUE NOT NULL,\n  email VARCHAR(255) UNIQUE NOT NULL,\n  firstname VARCHAR(255),\n  lastname VARCHAR(255),\n  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),\n  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())\n);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"3-configure-authentication",children:"3. Configure Authentication"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Go to Authentication settings in Supabase dashboard:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Log into your Supabase account"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Select your project"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Click on "Authentication" in the left sidebar'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Click on "Providers" tab'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Enable Email auth provider:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Find "Email" in the list of providers'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Toggle the switch to enable it"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Under "Email Provider Settings", keep defaults for now'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Set Site URL to your frontend URL:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'In the left sidebar, click on "URL Configuration"'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For Site URL, enter: ",(0,s.jsx)(n.a,{href:"http://localhost:3001",children:"http://localhost:3001"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Save changes"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Note: You'll update this to your Vercel URL after deployment"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"google-oauth-setup",children:"Google OAuth Setup"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Note that for this section, you will ",(0,s.jsx)(n.em,{children:"not"})," be able to do the following steps with your northwestern email! Either create a new gmail account for a team or delegate someone to be the sole owner of the google cloud console"]})}),"\n",(0,s.jsx)(n.h3,{id:"1-google-cloud-console-setup",children:"1. Google Cloud Console Setup"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create a new project:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.a,{href:"https://console.cloud.google.com/",children:"Google Cloud Console"})]}),"\n",(0,s.jsx)(n.li,{children:"Click the project dropdown at the top"}),"\n",(0,s.jsx)(n.li,{children:'Click "New Project"'}),"\n",(0,s.jsx)(n.li,{children:'Enter a project name and click "Create"'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Enable Google OAuth API:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'In the left sidebar, go to "APIs & Services" > "Library"'}),"\n",(0,s.jsx)(n.li,{children:'Search for "Google OAuth2"'}),"\n",(0,s.jsx)(n.li,{children:'Click on "Google OAuth2 API"'}),"\n",(0,s.jsx)(n.li,{children:'Click "Enable"'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Configure OAuth consent screen:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Go to "APIs & Services" > "OAuth consent screen"'}),"\n",(0,s.jsx)(n.li,{children:'Choose "External" user type'}),"\n",(0,s.jsxs)(n.li,{children:["Fill in required fields:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"App name"}),"\n",(0,s.jsx)(n.li,{children:"User support email"}),"\n",(0,s.jsx)(n.li,{children:"Developer contact email"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:'For Scopes, add: "email" and "profile"'}),"\n",(0,s.jsx)(n.li,{children:"Skip adding test users for now"}),"\n",(0,s.jsx)(n.li,{children:'Click "Save and Continue" through remaining steps'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create OAuth 2.0 Client ID:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Go to "APIs & Services" > "Credentials"'}),"\n",(0,s.jsx)(n.li,{children:'Click "Create Credentials" > "OAuth client ID"'}),"\n",(0,s.jsx)(n.li,{children:'Choose "Web application" as Application type'}),"\n",(0,s.jsx)(n.li,{children:"Name your client"}),"\n",(0,s.jsxs)(n.li,{children:["Add these Authorized redirect URIs:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[YOUR_SUPABASE_URL]/auth/v1/callback"}),"\n(Find your Supabase URL in your project settings)"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"http://localhost:3000/auth/callback"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:'Click "Create"'}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Important"}),": Save the Client ID and Client Secret that appear - you'll need these for Supabase"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2-supabase-oauth-configuration",children:"2. Supabase OAuth Configuration"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Configure Google provider in Supabase:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In your Supabase dashboard, go to Authentication > Providers"}),"\n",(0,s.jsx)(n.li,{children:"Find Google in the list"}),"\n",(0,s.jsx)(n.li,{children:"Toggle to enable it"}),"\n",(0,s.jsx)(n.li,{children:"Paste your Google Client ID and Client Secret from the previous step"}),"\n",(0,s.jsx)(n.li,{children:"Save changes"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"3-verify-setup",children:"3. Verify Setup"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Your authentication should now be configured for both email and Google login"}),"\n",(0,s.jsxs)(n.li,{children:["Test both methods in development:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Run your frontend locally (",(0,s.jsx)(n.code,{children:"npm run dev"}),")"]}),"\n",(0,s.jsx)(n.li,{children:"Try creating an account with email"}),"\n",(0,s.jsx)(n.li,{children:"Try signing in with Google"}),"\n",(0,s.jsx)(n.li,{children:"If either fails, double-check all URLs and credentials"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"start-development-server-same-for-frontend-and-backend",children:"Start Development Server (same for frontend and backend)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Backend server will start at ",(0,s.jsx)(n.code,{children:"http://localhost:5050"})]}),"\n",(0,s.jsxs)(n.p,{children:["Frontend server will start at ",(0,s.jsx)(n.code,{children:"http://localhost:3001"})]}),"\n",(0,s.jsx)(n.h2,{id:"development-tools",children:"Development Tools"}),"\n",(0,s.jsx)(n.h3,{id:"recommended-vs-code-extensions",children:"Recommended VS Code Extensions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",children:"ESLint"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",children:"Prettier"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"available-scripts",children:"Available Scripts"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"npm run dev"})," - Start development server"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"npm start"})," - Start production server"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"npm test"})," - Run tests"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"npm run lint"})," - Run ESLint"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"npm run format"})," - Format code with Prettier"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(6540);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);