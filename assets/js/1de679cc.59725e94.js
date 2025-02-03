"use strict";(self.webpackChunkdisc_documentation=self.webpackChunkdisc_documentation||[]).push([[2751],{5319:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"backend/project-structure","title":"Backend Project Structure","description":"The backend template follows a modular architecture designed to be scalable and maintainable. This document will explain the organization of the project and the purpose of each directory.","source":"@site/docs/discover-program-template-project/backend/project-structure.md","sourceDirName":"backend","slug":"/backend/project-structure","permalink":"/DISC-Documentation-Website/discover-program-template-project/backend/project-structure","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"project-structure","title":"Backend Project Structure","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Getting Started","permalink":"/DISC-Documentation-Website/discover-program-template-project/getting-started"},"next":{"title":"Development Guide","permalink":"/DISC-Documentation-Website/discover-program-template-project/backend/development"}}');var s=i(4848),t=i(8453);const c={id:"project-structure",title:"Backend Project Structure",sidebar_position:2},o="Backend Project Structure",d={},l=[{value:"Directory Overview",id:"directory-overview",level:2},{value:"Core Directories",id:"core-directories",level:2},{value:"<code>src/</code> Directory",id:"src-directory",level:3},{value:"<code>config/</code>",id:"config",level:3},{value:"<code>controllers/</code>",id:"controllers",level:3},{value:"<code>middleware/</code>",id:"middleware",level:3},{value:"<code>routes/</code>",id:"routes",level:3},{value:"<code>server.js</code>",id:"serverjs",level:3},{value:"Protected Files",id:"protected-files",level:2},{value:"Adding New Features",id:"adding-new-features",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Configuration Files",id:"configuration-files",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"backend-project-structure",children:"Backend Project Structure"})}),"\n",(0,s.jsx)(n.p,{children:"The backend template follows a modular architecture designed to be scalable and maintainable. This document will explain the organization of the project and the purpose of each directory."}),"\n",(0,s.jsx)(n.h2,{id:"directory-overview",children:"Directory Overview"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"backend/\n\u251c\u2500\u2500 src/\n\u2502   \u251c\u2500\u2500 config/         # Configuration files\n\u2502   \u2502   \u2514\u2500\u2500 supabase.js # Database configuration\n\u2502   \u251c\u2500\u2500 controllers/    # Business logic\n\u2502   \u2502   \u2514\u2500\u2500 authController.js\n\u2502   \u251c\u2500\u2500 middleware/     # Request processing\n\u2502   \u2502   \u2514\u2500\u2500 authMiddleware.js\n\u2502   \u251c\u2500\u2500 routes/         # API endpoints\n\u2502   \u2502   \u2514\u2500\u2500 authRoutes.js\n\u2502   \u2514\u2500\u2500 server.js       # Main server file\n"})}),"\n",(0,s.jsx)(n.h2,{id:"core-directories",children:"Core Directories"}),"\n",(0,s.jsxs)(n.h3,{id:"src-directory",children:[(0,s.jsx)(n.code,{children:"src/"})," Directory"]}),"\n",(0,s.jsx)(n.p,{children:"The source directory contains all the application code. Everything is organized into specific subdirectories based on their functionality."}),"\n",(0,s.jsx)(n.h3,{id:"config",children:(0,s.jsx)(n.code,{children:"config/"})}),"\n",(0,s.jsx)(n.p,{children:"Contains configuration files for external services and application settings."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"supabase.js"}),": Configuration for Supabase database connection and authentication"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"controllers",children:(0,s.jsx)(n.code,{children:"controllers/"})}),"\n",(0,s.jsx)(n.p,{children:"Houses the business logic for the application, separating it from the route definitions."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"authController.js"}),": Handles user authentication and authorization logic"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"middleware",children:(0,s.jsx)(n.code,{children:"middleware/"})}),"\n",(0,s.jsx)(n.p,{children:"Contains Express middleware functions that process requests before they reach the route handlers."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"authMiddleware.js"}),": Handles authentication verification and user session management"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"routes",children:(0,s.jsx)(n.code,{children:"routes/"})}),"\n",(0,s.jsx)(n.p,{children:"Defines API endpoints and connects them to their corresponding controllers."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"authRoutes.js"}),": Authentication-related routes (login, signup, etc.)"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"serverjs",children:(0,s.jsx)(n.code,{children:"server.js"})}),"\n",(0,s.jsx)(n.p,{children:"The main application file that:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Initializes the Express application"}),"\n",(0,s.jsx)(n.li,{children:"Sets up global middleware"}),"\n",(0,s.jsx)(n.li,{children:"Connects routes"}),"\n",(0,s.jsx)(n.li,{children:"Configures error handling"}),"\n",(0,s.jsx)(n.li,{children:"Starts the server"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"protected-files",children:"Protected Files"}),"\n",(0,s.jsx)(n.p,{children:"The following files should not be modified directly:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\u251c\u2500\u2500 node_modules/       # Project dependencies\n\u251c\u2500\u2500 eslint.config.mjs  # Linting configuration\n\u251c\u2500\u2500 package-lock.json  # Dependency lock file\n\u2514\u2500\u2500 package.json       # Project metadata and scripts\n"})}),"\n",(0,s.jsx)(n.p,{children:"These files are essential for the project's configuration and dependencies:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"node_modules/"}),": Automatically managed by npm"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"eslint.config.mjs"}),": Maintains consistent code style across all projects"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"package.json"})," & ",(0,s.jsx)(n.code,{children:"package-lock.json"}),": Managed through npm commands"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"adding-new-features",children:"Adding New Features"}),"\n",(0,s.jsx)(n.p,{children:"When adding new features to the backend:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Create new route files in the ",(0,s.jsx)(n.code,{children:"routes/"})," directory for new API endpoints"]}),"\n",(0,s.jsxs)(n.li,{children:["Add corresponding controller files in the ",(0,s.jsx)(n.code,{children:"controllers/"})," directory"]}),"\n",(0,s.jsxs)(n.li,{children:["If needed, create new middleware in the ",(0,s.jsx)(n.code,{children:"middleware/"})," directory"]}),"\n",(0,s.jsxs)(n.li,{children:["Update the main ",(0,s.jsx)(n.code,{children:"server.js"})," file to include new routes"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Keep files focused and single-purpose"}),"\n",(0,s.jsx)(n.li,{children:"Follow the established directory structure"}),"\n",(0,s.jsx)(n.li,{children:"Create new directories only when functionality doesn't fit existing categories"}),"\n",(0,s.jsx)(n.li,{children:"Use meaningful file names that describe their purpose"}),"\n",(0,s.jsx)(n.li,{children:"Keep related files close together in the directory structure"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configuration-files",children:"Configuration Files"}),"\n",(0,s.jsx)(n.p,{children:"The project includes several configuration files in the root directory:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"jsconfig.json"}),": JavaScript language service configuration"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"eslint.config.mjs"}),": Code style and linting rules"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"package.json"}),": Project dependencies and scripts"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"These files are pre-configured for the DISCover Program's needs and ensure consistency across all projects."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>o});var r=i(6540);const s={},t=r.createContext(s);function c(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);