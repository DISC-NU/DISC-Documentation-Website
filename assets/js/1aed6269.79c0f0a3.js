"use strict";(self.webpackChunkdisc_documentation=self.webpackChunkdisc_documentation||[]).push([[7713],{504:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"quick-start","title":"Quick Start Guide","description":"Get started with the DISC Workshop Series Website quickly. This guide focuses on common development tasks and content management.","source":"@site/docs/workshop-series/quick-start.md","sourceDirName":".","slug":"/quick-start","permalink":"/DISC-Documentation-Website/quick-start","draft":false,"unlisted":false,"editUrl":"https://github.com/DISC-NU/DISC-Documentation-Website/tree/main/docs/workshop-series/quick-start.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"quick-start","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Installation","permalink":"/DISC-Documentation-Website/installation"},"next":{"title":"Project Structure","permalink":"/DISC-Documentation-Website/project-structure"}}');var t=i(4848),o=i(8453);const r={id:"quick-start",sidebar_position:3},c="Quick Start Guide",l={},d=[{value:"Quick Setup",id:"quick-setup",level:2},{value:"Website Structure and Routes",id:"website-structure-and-routes",level:2},{value:"Getting Started Section",id:"getting-started-section",level:3},{value:"Workshops Section",id:"workshops-section",level:3},{value:"Assignments Section",id:"assignments-section",level:3},{value:"Working with Content",id:"working-with-content",level:2},{value:"Adding New Content",id:"adding-new-content",level:3},{value:"MDX File Structure",id:"mdx-file-structure",level:3},{value:"Route Configuration",id:"route-configuration",level:3},{value:"Development Workflow",id:"development-workflow",level:2},{value:"Creating New Pages",id:"creating-new-pages",level:3},{value:"Using Components in MDX",id:"using-components-in-mdx",level:3},{value:"Common MDX Components Available",id:"common-mdx-components-available",level:3},{value:"Content Guidelines",id:"content-guidelines",level:2},{value:"Workshop Content Structure",id:"workshop-content-structure",level:3},{value:"Assignment Structure",id:"assignment-structure",level:3},{value:"Next Steps",id:"next-steps",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"quick-start-guide",children:"Quick Start Guide"})}),"\n",(0,t.jsx)(n.p,{children:"Get started with the DISC Workshop Series Website quickly. This guide focuses on common development tasks and content management."}),"\n",(0,t.jsx)(n.h2,{id:"quick-setup",children:"Quick Setup"}),"\n",(0,t.jsxs)(n.p,{children:["If you haven't installed the project yet, follow our ",(0,t.jsx)(n.a,{href:"/installation",children:"Installation Guide"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"website-structure-and-routes",children:"Website Structure and Routes"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Future Improvement Note"}),": The current routing system requires manual updates to both the routes configuration and file structure. This process should be automated in future versions to reduce manual work and potential errors. Possible improvements include:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Automatic route generation based on file structure"}),"\n",(0,t.jsx)(n.li,{children:"CLI tool for creating new content with proper routing"}),"\n",(0,t.jsx)(n.li,{children:"Validation system to ensure route and file structure consistency"}),"\n",(0,t.jsx)(n.li,{children:"Dynamic route loading without manual configuration"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The website follows a specific routing structure defined in ",(0,t.jsx)(n.code,{children:"lib/routes-config.ts"}),". Here's the main navigation structure:"]}),"\n",(0,t.jsx)(n.h3,{id:"getting-started-section",children:"Getting Started Section"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Base Path: ",(0,t.jsx)(n.code,{children:"/content/getting-started"})]}),"\n",(0,t.jsxs)(n.li,{children:["Main Route: ",(0,t.jsx)(n.code,{children:"/introduction"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"workshops-section",children:"Workshops Section"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Base Path: ",(0,t.jsx)(n.code,{children:"/content/workshops"})]}),"\n",(0,t.jsxs)(n.li,{children:["Available Routes:","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/workshop-1"})," - UI/UX"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/workshop-2"})," - HTML & CSS"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/workshop-3"})," - VSCode & Git"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/workshop-4"})," - React Basics"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/workshop-5"})," - Better React"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/workshop-6"})," - Best React"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/workshop-7"})," - Backend Basics"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/workshop-8"})," - Complex Backends"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/workshop-9"})," - Bonus Topics"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"assignments-section",children:"Assignments Section"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Base Path: ",(0,t.jsx)(n.code,{children:"/content/assignments"})]}),"\n",(0,t.jsxs)(n.li,{children:["Available Routes:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/project-overview"})," - Project Overview"]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/assignment-1"})," - Figma"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/assignment-2"})," - HTML & CSS"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/assignment-3"})," - Git"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/assignment-4"})," - Basic React App"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/assignment-5"})," - Routing & Fetching"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/assignment-6"})," - Code Improvements"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/assignment-7"})," - Basic API"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/assignment-8"})," - Supabase"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/assignment-9"})," - Deploy & Bonus Feature"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"working-with-content",children:"Working with Content"}),"\n",(0,t.jsx)(n.h3,{id:"adding-new-content",children:"Adding New Content"}),"\n",(0,t.jsxs)(n.p,{children:["When adding new content, ensure it follows the routing structure defined above. Content should be placed in the corresponding directory under ",(0,t.jsx)(n.code,{children:"/contents/"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Example for a new workshop page:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"contents/\n\u2514\u2500\u2500 content/\n    \u2514\u2500\u2500 workshops/\n        \u2514\u2500\u2500 workshop-1/\n            \u2514\u2500\u2500 index.mdx\n"})}),"\n",(0,t.jsx)(n.h3,{id:"mdx-file-structure",children:"MDX File Structure"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mdx",children:'---\ntitle: "Workshop 1: UI/UX"\ndescription: "Introduction to UI/UX Design Principles"\n---\n\n# Workshop Content Here\n'})}),"\n",(0,t.jsx)(n.h3,{id:"route-configuration",children:"Route Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["The routes are configured using TypeScript interfaces. If you need to add new routes, modify the ",(0,t.jsx)(n.code,{children:"ROUTES"})," array in ",(0,t.jsx)(n.code,{children:"lib/routes-config.ts"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'export type EachRoute = {\n  title: string;\n  href: string;\n  basePath?: string;\n  noLink?: true;\n  items?: EachRoute[];\n};\n\n// Example of adding a new workshop\nconst ROUTES: EachRoute[] = [\n  {\n    title: "Workshops",\n    href: "/workshops",\n    noLink: true,\n    basePath: "content",\n    items: [\n      { title: "1: UI/UX", href: "/workshop-1" },\n      // Add new workshop here\n    ],\n  },\n  // ... other routes\n];\n'})}),"\n",(0,t.jsx)(n.h2,{id:"development-workflow",children:"Development Workflow"}),"\n",(0,t.jsx)(n.h3,{id:"creating-new-pages",children:"Creating New Pages"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Add the route to ",(0,t.jsx)(n.code,{children:"lib/routes-config.ts"})]}),"\n",(0,t.jsxs)(n.li,{children:["Create the corresponding directory and ",(0,t.jsx)(n.code,{children:"index.mdx"})," file"]}),"\n",(0,t.jsx)(n.li,{children:"Add your content using MDX format"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example for adding a new workshop:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Add to routes configuration:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'{\n  title: "10: Advanced Topics",\n  href: "/workshop-10"\n}\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Create content file:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir -p contents/content/workshops/workshop-10\ntouch contents/content/workshops/workshop-10/index.mdx\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Add content to ",(0,t.jsx)(n.code,{children:"index.mdx"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mdx",children:'---\ntitle: "Workshop 10: Advanced Topics"\ndescription: "Advanced development concepts and practices"\n---\n\n# Workshop Content\n'})}),"\n",(0,t.jsx)(n.h3,{id:"using-components-in-mdx",children:"Using Components in MDX"}),"\n",(0,t.jsx)(n.p,{children:"Import and use components in your MDX files:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mdx",children:'import MyComponent from "@/components/MyComponent";\n\n<MyComponent />\n'})}),"\n",(0,t.jsx)(n.h3,{id:"common-mdx-components-available",children:"Common MDX Components Available"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Note"}),": For important callouts"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ImageComponent"}),": For optimized images"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CodeBlock"}),": For code snippets with syntax highlighting"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Stepper"}),": For step-by-step guides"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example usage:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mdx",children:'<Note type="info">Important information here</Note>\n\n<CodeBlock language="typescript">const example = "Hello World";</CodeBlock>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"content-guidelines",children:"Content Guidelines"}),"\n",(0,t.jsx)(n.h3,{id:"workshop-content-structure",children:"Workshop Content Structure"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Introduction/Overview"}),"\n",(0,t.jsx)(n.li,{children:"Learning Objectives"}),"\n",(0,t.jsx)(n.li,{children:"Prerequisites"}),"\n",(0,t.jsx)(n.li,{children:"Main Content"}),"\n",(0,t.jsx)(n.li,{children:"Practice Exercises"}),"\n",(0,t.jsx)(n.li,{children:"Additional Resources"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"assignment-structure",children:"Assignment Structure"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Assignment Overview"}),"\n",(0,t.jsx)(n.li,{children:"Requirements"}),"\n",(0,t.jsx)(n.li,{children:"Submission Guidelines"}),"\n",(0,t.jsx)(n.li,{children:"Grading Criteria"}),"\n",(0,t.jsx)(n.li,{children:"Resources/References"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,t.jsx)(n.p,{children:"After getting familiar with the basics:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Review the complete ",(0,t.jsx)(n.a,{href:"/project-structure",children:"Project Structure"})]}),"\n",(0,t.jsxs)(n.li,{children:["Check out our ",(0,t.jsx)(n.a,{href:"/contributing",children:"Contributing Guidelines"})]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var s=i(6540);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);