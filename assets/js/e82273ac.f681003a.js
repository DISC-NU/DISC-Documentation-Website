"use strict";(self.webpackChunkdisc_documentation=self.webpackChunkdisc_documentation||[]).push([[7150],{4332:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"backend/deployment","title":"Deployment Guide","description":"The backend service is deployed on Vercel for seamless integration with our frontend application.","source":"@site/docs/discover-program-template-project/backend/deployment.md","sourceDirName":"backend","slug":"/backend/deployment","permalink":"/DISC-Documentation-Website/discover-program-template-project/backend/deployment","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"deployment","title":"Deployment Guide","sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Development Guide","permalink":"/DISC-Documentation-Website/discover-program-template-project/backend/development"},"next":{"title":"Contributing","permalink":"/DISC-Documentation-Website/discover-program-template-project/backend/contributing"}}');var l=i(4848),t=i(8453);const o={id:"deployment",title:"Deployment Guide",sidebar_position:5},s="Deploying the Backend",c={},d=[{value:"Vercel Deployment",id:"vercel-deployment",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Deployment Process",id:"deployment-process",level:3},{value:"Automatic Deployments",id:"automatic-deployments",level:3},{value:"Monitoring",id:"monitoring",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Rolling Back",id:"rolling-back",level:3},{value:"Resources",id:"resources",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"deploying-the-backend",children:"Deploying the Backend"})}),"\n",(0,l.jsx)(n.p,{children:"The backend service is deployed on Vercel for seamless integration with our frontend application."}),"\n",(0,l.jsx)(n.h2,{id:"vercel-deployment",children:"Vercel Deployment"}),"\n",(0,l.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"A Vercel account"}),"\n",(0,l.jsx)(n.li,{children:"Access to the project repository"}),"\n",(0,l.jsx)(n.li,{children:"Your environment variables ready"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,l.jsx)(n.p,{children:"Make sure to set these in your Vercel project settings:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"FRONTEND_URL=your_frontend_url\nSUPABASE_URL=your_supabase_url\nSUPABASE_ANON_KEY=your_supabase_key\nNODE_ENV=production\nAPI_URL=you_api_url\n"})}),"\n",(0,l.jsx)(n.h3,{id:"deployment-process",children:"Deployment Process"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Connect your GitHub repository to Vercel"}),"\n",(0,l.jsx)(n.li,{children:"Vercel will automatically detect the Express.js application"}),"\n",(0,l.jsx)(n.li,{children:"Configure your environment variables in the Vercel dashboard"}),"\n",(0,l.jsx)(n.li,{children:"Deploy!"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"automatic-deployments",children:"Automatic Deployments"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Each push to ",(0,l.jsx)(n.code,{children:"main"})," triggers a production deployment"]}),"\n",(0,l.jsx)(n.li,{children:"Pull requests create preview deployments"}),"\n",(0,l.jsx)(n.li,{children:"Failed builds prevent merging to main"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"monitoring",children:"Monitoring"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"View deployment logs in the Vercel dashboard"}),"\n",(0,l.jsx)(n.li,{children:"Monitor API endpoints using Vercel Analytics"}),"\n",(0,l.jsx)(n.li,{children:"Check deployment status in GitHub checks"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,l.jsx)(n.p,{children:"Common deployment issues:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Missing environment variables"}),"\n",(0,l.jsx)(n.li,{children:"Incorrect build settings"}),"\n",(0,l.jsx)(n.li,{children:"CORS configuration errors"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"rolling-back",children:"Rolling Back"}),"\n",(0,l.jsx)(n.p,{children:"To roll back to a previous version:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Visit your project on Vercel"}),"\n",(0,l.jsx)(n.li,{children:"Go to Deployments"}),"\n",(0,l.jsx)(n.li,{children:"Select the desired previous deployment"}),"\n",(0,l.jsx)(n.li,{children:'Click "Promote to Production"'}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://vercel.com/docs",children:"Vercel Documentation"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://vercel.com/docs/cli",children:"Vercel CLI Documentation"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/disc-template/backend",children:"Backend Repository"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>s});var r=i(6540);const l={},t=r.createContext(l);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);