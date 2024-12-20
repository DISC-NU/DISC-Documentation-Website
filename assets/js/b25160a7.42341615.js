"use strict";(self.webpackChunkdisc_documentation=self.webpackChunkdisc_documentation||[]).push([[3467],{7592:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"deployment","title":"Deployment","description":"GitHub Pages Deployment","source":"@site/docs/disc-website/deployment.md","sourceDirName":".","slug":"/deployment","permalink":"/DISC-Documentation-Website/disc-website/deployment","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Styling Guide","permalink":"/DISC-Documentation-Website/disc-website/styling-guide"},"next":{"title":"Contributing","permalink":"/DISC-Documentation-Website/disc-website/contributing"}}');var l=s(4848),t=s(8453);const r={},o="Deployment",c={},d=[{value:"GitHub Pages Deployment",id:"github-pages-deployment",level:2},{value:"Automated Deployment Process",id:"automated-deployment-process",level:3},{value:"Pre-deployment Checks",id:"pre-deployment-checks",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Related Resources",id:"related-resources",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"deployment",children:"Deployment"})}),"\n",(0,l.jsx)(n.h2,{id:"github-pages-deployment",children:"GitHub Pages Deployment"}),"\n",(0,l.jsx)(n.p,{children:"The DISC website is automatically deployed to GitHub Pages using GitHub Actions."}),"\n",(0,l.jsx)(n.h3,{id:"automated-deployment-process",children:"Automated Deployment Process"}),"\n",(0,l.jsx)(n.p,{children:"The deployment is triggered automatically when:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Code is pushed to the ",(0,l.jsx)(n.code,{children:"main"})," branch"]}),"\n",(0,l.jsxs)(n.li,{children:["A pull request is merged into ",(0,l.jsx)(n.code,{children:"main"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Our GitHub Action workflow:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Checks out the repository"}),"\n",(0,l.jsx)(n.li,{children:"Sets up Node.js"}),"\n",(0,l.jsx)(n.li,{children:"Installs dependencies"}),"\n",(0,l.jsx)(n.li,{children:"Builds the project"}),"\n",(0,l.jsx)(n.li,{children:"Deploys to GitHub Pages"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yml",children:'# Example of our deployment workflow\nname: Deploy to GitHub Pages\n\non:\n  push:\n    branches:\n      - main\n\npermissions:\n  contents: write\n\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v3\n\n      - name: Setup Node.js\n        uses: actions/setup-node@v3\n        with:\n          node-version: "18"\n          cache: "npm"\n\n      - name: Install dependencies\n        run: npm ci\n\n      - name: Build\n        run: npm run build\n        env:\n          NODE_ENV: production\n\n      - name: List public directory\n        run: ls -la public/\n\n      - name: List out directory\n        run: ls -la out/\n\n      - name: Add .nojekyll file\n        run: |\n          touch ./out/.nojekyll\n          cp -r public/* out/\n\n      - name: Deploy to GitHub Pages\n        uses: JamesIves/github-pages-deploy-action@v4\n        with:\n          folder: out\n          branch: gh-pages\n          clean: true\n'})}),"\n",(0,l.jsx)(n.h2,{id:"pre-deployment-checks",children:"Pre-deployment Checks"}),"\n",(0,l.jsx)(n.p,{children:"Before pushing to main, verify locally:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Build succeeds: ",(0,l.jsx)(n.code,{children:"npm run build"})]}),"\n",(0,l.jsx)(n.li,{children:"Links work correctly"}),"\n",(0,l.jsx)(n.li,{children:"Images load properly"}),"\n",(0,l.jsx)(n.li,{children:"Components render as expected"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,l.jsx)(n.p,{children:"Common issues and solutions:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Build Failures"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Check the GitHub Actions logs for specific errors"}),"\n",(0,l.jsxs)(n.li,{children:["Verify all dependencies are properly listed in ",(0,l.jsx)(n.code,{children:"package.json"})]}),"\n",(0,l.jsx)(n.li,{children:"Ensure Node.js version matches the workflow"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"404 Errors"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Verify the base path in ",(0,l.jsx)(n.code,{children:"next.config.mjs"})]}),"\n",(0,l.jsx)(n.li,{children:"Check if images and assets use correct paths"}),"\n",(0,l.jsx)(n.li,{children:"Ensure pages are properly exported"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Workflow Failures"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Check GitHub repository permissions"}),"\n",(0,l.jsx)(n.li,{children:"Verify GitHub Actions is enabled"}),"\n",(0,l.jsx)(n.li,{children:"Review workflow logs for specific errors"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://docs.github.com/en/actions",children:"GitHub Actions Documentation"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://docs.github.com/en/pages",children:"GitHub Pages Documentation"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://nextjs.org/docs/pages/building-your-application/deploying/static-exports",children:"Next.js Static Export"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}}}]);