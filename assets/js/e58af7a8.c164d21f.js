"use strict";(self.webpackChunkdisc_documentation=self.webpackChunkdisc_documentation||[]).push([[3158],{1074:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"frontend/project-structure","title":"Frontend Project Structure","description":"The frontend template follows a modular React architecture designed for scalability and maintainability. This document explains the organization of the project and the purpose of each directory.","source":"@site/docs/discover-program-template-project/frontend/project-structure.md","sourceDirName":"frontend","slug":"/frontend/project-structure","permalink":"/discover-program-template-project/frontend/project-structure","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"project-structure","title":"Frontend Project Structure","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Contributing","permalink":"/discover-program-template-project/backend/contributing"},"next":{"title":"Development Guide","permalink":"/discover-program-template-project/frontend/development"}}');var o=s(4848),t=s(8453);const r={id:"project-structure",title:"Frontend Project Structure",sidebar_position:2},c="Frontend Project Structure",d={},l=[{value:"Directory Overview",id:"directory-overview",level:2},{value:"Core Directories",id:"core-directories",level:2},{value:"<code>src/</code> Directory",id:"src-directory",level:3},{value:"<code>assets/</code>",id:"assets",level:3},{value:"<code>common/</code>",id:"common",level:3},{value:"<code>pages/</code>",id:"pages",level:3},{value:"Root Files",id:"root-files",level:3},{value:"Protected Files",id:"protected-files",level:2},{value:"Adding New Features",id:"adding-new-features",level:2},{value:"Component Organization",id:"component-organization",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Dependencies",id:"dependencies",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"frontend-project-structure",children:"Frontend Project Structure"})}),"\n",(0,o.jsx)(n.p,{children:"The frontend template follows a modular React architecture designed for scalability and maintainability. This document explains the organization of the project and the purpose of each directory."}),"\n",(0,o.jsx)(n.h2,{id:"directory-overview",children:"Directory Overview"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"frontend/\n\u251c\u2500\u2500 public/           # Static files\n\u251c\u2500\u2500 src/             # Source code\n\u2502   \u251c\u2500\u2500 assets/      # Static assets\n\u2502   \u2502   \u2514\u2500\u2500 icons/   # SVG icons\n\u2502   \u251c\u2500\u2500 common/      # Shared resources\n\u2502   \u2502   \u251c\u2500\u2500 components/\n\u2502   \u2502   \u251c\u2500\u2500 contexts/\n\u2502   \u2502   \u251c\u2500\u2500 hooks/\n\u2502   \u2502   \u251c\u2500\u2500 layouts/\n\u2502   \u2502   \u2514\u2500\u2500 utils/\n\u2502   \u251c\u2500\u2500 pages/       # Page components\n\u2502   \u2502   \u251c\u2500\u2500 account/\n\u2502   \u2502   \u251c\u2500\u2500 home/\n\u2502   \u2502   \u2514\u2500\u2500 not-found/\n\u2502   \u251c\u2500\u2500 App.css      # Global styles\n\u2502   \u2514\u2500\u2500 App.jsx      # Root component\n\u2514\u2500\u2500 README.md        # Documentation\n"})}),"\n",(0,o.jsx)(n.h2,{id:"core-directories",children:"Core Directories"}),"\n",(0,o.jsxs)(n.h3,{id:"src-directory",children:[(0,o.jsx)(n.code,{children:"src/"})," Directory"]}),"\n",(0,o.jsx)(n.p,{children:"The source directory contains all application code, organized into specific subdirectories based on functionality."}),"\n",(0,o.jsx)(n.h3,{id:"assets",children:(0,o.jsx)(n.code,{children:"assets/"})}),"\n",(0,o.jsx)(n.p,{children:"Contains static files that are not code:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"icons/"}),": SVG icon files used throughout the application"]}),"\n",(0,o.jsx)(n.li,{children:"Images, fonts, and other media files"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"common",children:(0,o.jsx)(n.code,{children:"common/"})}),"\n",(0,o.jsx)(n.p,{children:"Houses shared resources used across multiple pages:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"components/"}),": Reusable React components"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"contexts/"}),": React context providers and consumers"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"hooks/"}),": Custom React hooks"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"layouts/"}),": Page layout components for routing"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"utils/"}),": Helper functions and utilities"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"pages",children:(0,o.jsx)(n.code,{children:"pages/"})}),"\n",(0,o.jsx)(n.p,{children:"Contains components and logic for each unique page or set of related pages:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"account/"}),": User account-related pages (login, signup, profile)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"home/"}),": Homepage components"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"not-found/"}),": 404 error page"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"root-files",children:"Root Files"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"App.jsx"}),": Application entry point, contains:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Global context providers"}),"\n",(0,o.jsx)(n.li,{children:"Routing configuration"}),"\n",(0,o.jsx)(n.li,{children:"Top-level layout"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"App.css"}),": Global stylesheet"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"protected-files",children:"Protected Files"}),"\n",(0,o.jsx)(n.p,{children:"The following files should not be modified directly:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"\u251c\u2500\u2500 .vscode/           # VSCode settings\n\u251c\u2500\u2500 build/            # Production build output\n\u251c\u2500\u2500 node_modules/     # Project dependencies\n\u251c\u2500\u2500 eslint.config.mjs # Linting configuration\n\u251c\u2500\u2500 jsconfig.json     # JS compilation settings\n\u251c\u2500\u2500 package-lock.json # Dependency lock file\n\u2514\u2500\u2500 package.json      # Project metadata\n"})}),"\n",(0,o.jsx)(n.p,{children:"These files are essential for project configuration:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:".vscode/"}),": Editor-specific settings (e.g., format on save)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"build/"}),": Generated during production builds"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"node_modules/"}),": Managed by npm"]}),"\n",(0,o.jsx)(n.li,{children:"Configuration files: Maintain consistent code style and behavior"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"adding-new-features",children:"Adding New Features"}),"\n",(0,o.jsx)(n.p,{children:"When adding new features to the frontend:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Create a new directory in ",(0,o.jsx)(n.code,{children:"pages/"})," for page-specific components"]}),"\n",(0,o.jsxs)(n.li,{children:["Add shared components to ",(0,o.jsx)(n.code,{children:"common/components/"})]}),"\n",(0,o.jsxs)(n.li,{children:["Create custom hooks in ",(0,o.jsx)(n.code,{children:"common/hooks/"})," if needed"]}),"\n",(0,o.jsxs)(n.li,{children:["Add new contexts in ",(0,o.jsx)(n.code,{children:"common/contexts/"})," for state management"]}),"\n",(0,o.jsxs)(n.li,{children:["Update routing in ",(0,o.jsx)(n.code,{children:"App.jsx"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"component-organization",children:"Component Organization"}),"\n",(0,o.jsx)(n.p,{children:"Each component should:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Have its own directory if it has associated files"}),"\n",(0,o.jsxs)(n.li,{children:["Use ",(0,o.jsx)(n.code,{children:".jsx"})," extension if it contains JSX"]}),"\n",(0,o.jsx)(n.li,{children:"Include any component-specific styles, tests, or utilities"}),"\n",(0,o.jsx)(n.li,{children:"Define PropTypes for all props"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Example component structure:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"ComponentName/\n\u251c\u2500\u2500 index.jsx         # Main component file\n\u251c\u2500\u2500 styles.js         # Styled components\n\u251c\u2500\u2500 utils.js          # Component-specific utilities\n\u2514\u2500\u2500 ComponentName.test.jsx\n"})}),"\n",(0,o.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Keep components focused and single-purpose"}),"\n",(0,o.jsx)(n.li,{children:"Follow the established directory structure"}),"\n",(0,o.jsxs)(n.li,{children:["Use absolute imports from ",(0,o.jsx)(n.code,{children:"src/"})," directory"]}),"\n",(0,o.jsxs)(n.li,{children:["Group imports according to the specified order:","\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"React imports"}),"\n",(0,o.jsx)(n.li,{children:"Third-party modules"}),"\n",(0,o.jsxs)(n.li,{children:["Absolute paths from ",(0,o.jsx)(n.code,{children:"src/"})]}),"\n",(0,o.jsx)(n.li,{children:"Relative paths"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"Maintain consistent code formatting using provided ESLint and Prettier configs"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,o.jsx)(n.p,{children:"The project uses several key dependencies:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://reactrouter.com/",children:"React Router DOM"})," for routing"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://styled-components.com/",children:"styled-components"})," for styling"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/prop-types",children:"prop-types"})," for type checking"]}),"\n",(0,o.jsx)(n.li,{children:"Prettier and ESLint for code formatting"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"These dependencies are pre-configured for the DISCover Program's needs and ensure consistency across all projects."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var i=s(6540);const o={},t=i.createContext(o);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);