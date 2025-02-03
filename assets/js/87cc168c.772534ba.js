"use strict";(self.webpackChunkdisc_documentation=self.webpackChunkdisc_documentation||[]).push([[952],{1550:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"project-structure","title":"Project Structure","description":"This guide provides a detailed overview of the DISC Workshop Series Website\'s architecture and file organization.","source":"@site/docs/workshop-series/project-structure.md","sourceDirName":".","slug":"/project-structure","permalink":"/DISC-Documentation-Website/project-structure","draft":false,"unlisted":false,"editUrl":"https://github.com/DISC-NU/DISC-Documentation-Website/tree/main/docs/workshop-series/project-structure.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"project-structure","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Quick Start","permalink":"/DISC-Documentation-Website/quick-start"},"next":{"title":"Contributing","permalink":"/DISC-Documentation-Website/contributing"}}');var t=i(4848),o=i(8453);const r={id:"project-structure",sidebar_position:4},c="Project Structure",l={},d=[{value:"Directory Structure",id:"directory-structure",level:2},{value:"Key Directories Explained",id:"key-directories-explained",level:2},{value:"App Directory (<code>/app</code>)",id:"app-directory-app",level:3},{value:"Components Directory (<code>/components</code>)",id:"components-directory-components",level:3},{value:"Markdown Components (<code>/components/markdown</code>)",id:"markdown-components-componentsmarkdown",level:4},{value:"UI Components (<code>/components/ui</code>)",id:"ui-components-componentsui",level:4},{value:"Navigation Components",id:"navigation-components",level:4},{value:"Utility Components",id:"utility-components",level:4},{value:"Contents Directory (<code>/contents</code>)",id:"contents-directory-contents",level:3},{value:"Library Directory (<code>/lib</code>)",id:"library-directory-lib",level:3},{value:"Configuration Files",id:"configuration-files",level:2},{value:"Static Assets",id:"static-assets",level:2},{value:"Style System",id:"style-system",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Further Reading",id:"further-reading",level:2},{value:"Contributing",id:"contributing",level:2}];function a(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"project-structure",children:"Project Structure"})}),"\n",(0,t.jsx)(e.p,{children:"This guide provides a detailed overview of the DISC Workshop Series Website's architecture and file organization."}),"\n",(0,t.jsx)(e.h2,{id:"directory-structure",children:"Directory Structure"}),"\n",(0,t.jsx)(e.p,{children:"The project follows a modular structure optimized for Next.js development:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:".\n\u251c\u2500\u2500 app/                    # Next.js app directory\n\u2502   \u251c\u2500\u2500 about/             # About page routing\n\u2502   \u251c\u2500\u2500 content/           # Content page routing\n\u2502   \u251c\u2500\u2500 schedule/          # Schedule page routing\n\u2502   \u251c\u2500\u2500 layout.tsx         # Root layout\n\u2502   \u2514\u2500\u2500 page.tsx           # Home page\n\u251c\u2500\u2500 components/            # Reusable components\n\u2502   \u251c\u2500\u2500 markdown/          # MDX components\n\u2502   \u251c\u2500\u2500 ui/               # UI components\n\u2502   \u2514\u2500\u2500 contexts/         # React contexts\n\u251c\u2500\u2500 contents/             # MDX content files\n\u2502   \u251c\u2500\u2500 about/           # About section\n\u2502   \u251c\u2500\u2500 content/         # Main content\n\u2502   \u2514\u2500\u2500 schedule/        # Schedule content\n\u251c\u2500\u2500 lib/                  # Utilities\n\u251c\u2500\u2500 public/              # Static assets\n\u2514\u2500\u2500 styles/              # Global styles\n"})}),"\n",(0,t.jsx)(e.h2,{id:"key-directories-explained",children:"Key Directories Explained"}),"\n",(0,t.jsxs)(e.h3,{id:"app-directory-app",children:["App Directory (",(0,t.jsx)(e.code,{children:"/app"}),")"]}),"\n",(0,t.jsx)(e.p,{children:"The app directory contains the core Next.js application logic:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"about/"}),": About page routing and components"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"layout.tsx"}),": Layout for about pages"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"page.tsx"}),": About page implementation"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"content/"}),": Main content routing"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"[[...slug]]/page.tsx"}),": Dynamic routing for content"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"layout.tsx"}),": Content pages layout"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"schedule/"}),": Workshop schedule implementation"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Similar structure to content directory"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.h3,{id:"components-directory-components",children:["Components Directory (",(0,t.jsx)(e.code,{children:"/components"}),")"]}),"\n",(0,t.jsx)(e.p,{children:"Contains all reusable UI components:"}),"\n",(0,t.jsxs)(e.h4,{id:"markdown-components-componentsmarkdown",children:["Markdown Components (",(0,t.jsx)(e.code,{children:"/components/markdown"}),")"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"copy.tsx"}),": Copy button functionality"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"image.tsx"}),": Image rendering"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"link.tsx"}),": Link handling"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"note.tsx"}),": Note blocks"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"pre.tsx"}),": Code block handling"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"stepper.tsx"}),": Step-by-step guides"]}),"\n"]}),"\n",(0,t.jsxs)(e.h4,{id:"ui-components-componentsui",children:["UI Components (",(0,t.jsx)(e.code,{children:"/components/ui"}),")"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"accordion.tsx"}),": Collapsible sections"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"avatar.tsx"}),": User avatars"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"breadcrumb.tsx"}),": Navigation breadcrumbs"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"button.tsx"}),": Button components"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"dialog.tsx"}),": Modal dialogs"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"dropdown-menu.tsx"}),": Dropdown menus"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"sheet.tsx"}),": Slide-out panels"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"tabs.tsx"}),": Tab navigation"]}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"navigation-components",children:"Navigation Components"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"Leftbar.tsx"}),": Left sidebar navigation"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"navbar.tsx"}),": Top navigation bar"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"menu-bar.tsx"}),": Mobile menu"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"pagination.tsx"}),": Content pagination"]}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"utility-components",children:"Utility Components"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"search.tsx"}),": Search functionality"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"theme-toggle.tsx"}),": Dark/light mode toggle"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"toc.tsx"}),": Table of contents"]}),"\n"]}),"\n",(0,t.jsxs)(e.h3,{id:"contents-directory-contents",children:["Contents Directory (",(0,t.jsx)(e.code,{children:"/contents"}),")"]}),"\n",(0,t.jsx)(e.p,{children:"Organized content in MDX format:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"contents/\n\u251c\u2500\u2500 about/\n\u2502   \u2514\u2500\u2500 index.mdx\n\u251c\u2500\u2500 content/\n\u2502   \u251c\u2500\u2500 assignments/\n\u2502   \u2502   \u2514\u2500\u2500 [assignment-1...9]/\n\u2502   \u251c\u2500\u2500 getting-started/\n\u2502   \u2502   \u251c\u2500\u2500 faq/\n\u2502   \u2502   \u251c\u2500\u2500 introduction/\n\u2502   \u2502   \u2514\u2500\u2500 quick-start-guide/\n\u2502   \u2514\u2500\u2500 workshops/\n\u2502       \u2514\u2500\u2500 [workshop-1...9]/\n\u2514\u2500\u2500 schedule/\n    \u2514\u2500\u2500 index.mdx\n"})}),"\n",(0,t.jsxs)(e.h3,{id:"library-directory-lib",children:["Library Directory (",(0,t.jsx)(e.code,{children:"/lib"}),")"]}),"\n",(0,t.jsx)(e.p,{children:"Utility functions and configurations:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"markdown.ts"}),": MDX processing utilities"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"routes-config.ts"}),": Route configurations"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"utils.ts"}),": General utilities"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"configuration-files",children:"Configuration Files"}),"\n",(0,t.jsx)(e.p,{children:"Key configuration files include:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"next.config.mjs"}),": Next.js configuration"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"tailwind.config.ts"}),": Tailwind CSS configuration"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"tsconfig.json"}),": TypeScript configuration"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"components.json"}),": UI component configurations"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"static-assets",children:"Static Assets"}),"\n",(0,t.jsxs)(e.p,{children:["The ",(0,t.jsx)(e.code,{children:"/public"})," directory contains:"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"disc-logo.png"}),": DISC logo"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"public-og.png"}),": Open Graph image"]}),"\n",(0,t.jsx)(e.li,{children:"Other static assets"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"style-system",children:"Style System"}),"\n",(0,t.jsx)(e.p,{children:"The project uses a combination of:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Tailwind CSS"}),": Utility-first styling"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Global CSS"}),": In ",(0,t.jsx)(e.code,{children:"styles/globals.css"})]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Syntax Highlighting"}),": In ",(0,t.jsx)(e.code,{children:"styles/syntax.css"})]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,t.jsx)(e.p,{children:"When working with this structure:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Component Organization"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Keep components focused and single-purpose"}),"\n",(0,t.jsx)(e.li,{children:"Use proper naming conventions"}),"\n",(0,t.jsx)(e.li,{children:"Group related components together"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Content Management"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Follow MDX file structure"}),"\n",(0,t.jsx)(e.li,{children:"Keep content organized in appropriate directories"}),"\n",(0,t.jsx)(e.li,{children:"Use consistent frontmatter"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Code Organization"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Follow TypeScript best practices"}),"\n",(0,t.jsxs)(e.li,{children:["Keep utility functions in ",(0,t.jsx)(e.code,{children:"/lib"})]}),"\n",(0,t.jsx)(e.li,{children:"Use proper imports/exports"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://nextjs.org/docs/app",children:"Next.js App Router Documentation"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://mdxjs.com/",children:"MDX Documentation"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://tailwindcss.com/docs",children:"Tailwind CSS Documentation"})}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"contributing",children:"Contributing"}),"\n",(0,t.jsx)(e.p,{children:"When adding new components or content:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Follow the existing directory structure"}),"\n",(0,t.jsx)(e.li,{children:"Use appropriate naming conventions"}),"\n",(0,t.jsx)(e.li,{children:"Update relevant documentation"}),"\n",(0,t.jsx)(e.li,{children:"Add necessary tests"}),"\n",(0,t.jsx)(e.li,{children:"Follow the established coding style"}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>c});var s=i(6540);const t={},o=s.createContext(t);function r(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);