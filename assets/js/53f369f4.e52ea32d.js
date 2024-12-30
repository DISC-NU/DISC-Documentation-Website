"use strict";(self.webpackChunkdisc_documentation=self.webpackChunkdisc_documentation||[]).push([[847],{761:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"frontend/development","title":"Development Guide","description":"Learn how to develop, test, and maintain the frontend application for the DISCover Program template.","source":"@site/docs/discover-program-template-project/frontend/development.md","sourceDirName":"frontend","slug":"/frontend/development","permalink":"/DISC-Documentation-Website/discover-program-template-project/frontend/development","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"development","title":"Development Guide","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Project Structure","permalink":"/DISC-Documentation-Website/discover-program-template-project/frontend/project-structure"},"next":{"title":"Deployment","permalink":"/DISC-Documentation-Website/discover-program-template-project/frontend/deployment"}}');var i=s(4848),l=s(8453);const r={id:"development",title:"Development Guide",sidebar_position:4},o="Frontend Development Guide",c={},d=[{value:"Overview",id:"overview",level:2},{value:"Development Environment",id:"development-environment",level:2},{value:"Code Editor Setup",id:"code-editor-setup",level:3},{value:"Code Formatting Rules",id:"code-formatting-rules",level:3},{value:"Component Development",id:"component-development",level:2},{value:"Component Structure",id:"component-structure",level:3},{value:"Styling Guidelines",id:"styling-guidelines",level:3},{value:"State Management",id:"state-management",level:3},{value:"Development Process",id:"development-process",level:2},{value:"Git Workflow",id:"git-workflow",level:3},{value:"Running the Application",id:"running-the-application",level:3},{value:"Common Issues",id:"common-issues",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Resources",id:"resources",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"frontend-development-guide",children:"Frontend Development Guide"})}),"\n",(0,i.jsx)(n.p,{children:"Learn how to develop, test, and maintain the frontend application for the DISCover Program template."}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"The frontend application is built with:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"React for UI components"}),"\n",(0,i.jsx)(n.li,{children:"React Router for client-side routing"}),"\n",(0,i.jsx)(n.li,{children:"styled-components for styling"}),"\n",(0,i.jsx)(n.li,{children:"ESLint and Prettier for code formatting"}),"\n",(0,i.jsx)(n.li,{children:"PropTypes for type checking"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"development-environment",children:"Development Environment"}),"\n",(0,i.jsx)(n.h3,{id:"code-editor-setup",children:"Code Editor Setup"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Install VSCode extensions:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"- Prettier ESLint\n- ESLint\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Configure VSCode settings:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "editor.formatOnSave": true,\n  "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"code-formatting-rules",children:"Code Formatting Rules"}),"\n",(0,i.jsx)(n.p,{children:"Our ESLint and Prettier configurations enforce:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"JSX Rules:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Only ",(0,i.jsx)(n.code,{children:".jsx"})," files can contain JSX"]}),"\n",(0,i.jsxs)(n.li,{children:["All ",(0,i.jsx)(n.code,{children:".jsx"})," files must contain JSX"]}),"\n",(0,i.jsx)(n.li,{children:"Empty files are allowed"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Syntax Rules:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Semicolons required"}),"\n",(0,i.jsx)(n.li,{children:"Single quotes for strings"}),"\n",(0,i.jsx)(n.li,{children:"80 character line width"}),"\n",(0,i.jsx)(n.li,{children:"2-space indentation"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Import Organization:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'// 1. React imports\nimport React from "react";\nimport { useState } from "react";\n\n// 2. Third-party modules\nimport styled from "styled-components";\nimport PropTypes from "prop-types";\n\n// 3. Absolute paths from src/\nimport { useAuth } from "common/hooks/useAuth";\nimport Button from "common/components/Button";\n\n// 4. Relative paths\nimport { StyledContainer } from "./styles";\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"component-development",children:"Component Development"}),"\n",(0,i.jsx)(n.h3,{id:"component-structure",children:"Component Structure"}),"\n",(0,i.jsx)(n.p,{children:"Create components following this template:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'import React from "react";\nimport PropTypes from "prop-types";\nimport styled from "styled-components";\n\nconst StyledComponent = styled.div`\n  // styles\n`;\n\nconst ComponentName = ({ prop1, prop2 }) => {\n  return <StyledComponent>{/* component content */}</StyledComponent>;\n};\n\nComponentName.propTypes = {\n  prop1: PropTypes.string.isRequired,\n  prop2: PropTypes.number,\n};\n\nComponentName.defaultProps = {\n  prop2: 0,\n};\n\nexport default ComponentName;\n'})}),"\n",(0,i.jsx)(n.h3,{id:"styling-guidelines",children:"Styling Guidelines"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Use styled-components for component styling:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"const StyledButton = styled.button`\n  padding: 8px 16px;\n  border-radius: 4px;\n  // ...\n`;\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Global styles go in ",(0,i.jsx)(n.code,{children:"App.css"})]}),"\n",(0,i.jsx)(n.li,{children:"Use semantic HTML elements"}),"\n",(0,i.jsx)(n.li,{children:"Maintain responsive design principles"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"state-management",children:"State Management"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Local State:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"const [count, setCount] = useState(0);\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Context for shared state:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"// In context file\nexport const ThemeContext = React.createContext();\n\n// In component\nconst theme = useContext(ThemeContext);\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Custom hooks for reusable logic:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"const useFormInput = (initialValue) => {\n  const [value, setValue] = useState(initialValue);\n  return {\n    value,\n    onChange: (e) => setValue(e.target.value),\n  };\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"development-process",children:"Development Process"}),"\n",(0,i.jsx)(n.h3,{id:"git-workflow",children:"Git Workflow"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Create feature branch:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git checkout -b feature/your-feature\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Review and stage changes:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Recommended: Review changes in chunks with -p flag\ngit add -p  # This lets you review each change individually\n\n# Alternative: Stage all changes\ngit add .\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"-p"})," (or ",(0,i.jsx)(n.code,{children:"--patch"}),") flag is highly recommended as it:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Helps you review your own code before committing"}),"\n",(0,i.jsx)(n.li,{children:"Allows you to stage specific parts of files"}),"\n",(0,i.jsx)(n.li,{children:"Reduces accidental commits of debugging code"}),"\n",(0,i.jsx)(n.li,{children:"Makes for cleaner, more focused commits"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Commit your changes:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'git commit -m "feat: description of changes"\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"Push and create PR:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git push origin feature/your-feature\n"})}),"\n",(0,i.jsx)(n.h3,{id:"running-the-application",children:"Running the Application"}),"\n",(0,i.jsx)(n.p,{children:"Development server:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm start\n"})}),"\n",(0,i.jsx)(n.p,{children:"Run tests:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm test\n"})}),"\n",(0,i.jsx)(n.p,{children:"Build for production:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run build\n"})}),"\n",(0,i.jsx)(n.h3,{id:"common-issues",children:"Common Issues"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Styling Issues"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Check styled-components syntax"}),"\n",(0,i.jsx)(n.li,{children:"Verify component class names"}),"\n",(0,i.jsx)(n.li,{children:"Inspect CSS specificity"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Routing Problems"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Confirm route definitions"}),"\n",(0,i.jsx)(n.li,{children:"Check navigation props"}),"\n",(0,i.jsx)(n.li,{children:"Verify path parameters"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"State Management"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Debug React DevTools"}),"\n",(0,i.jsx)(n.li,{children:"Check context providers"}),"\n",(0,i.jsx)(n.li,{children:"Verify state updates"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Component Guidelines:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Keep components focused and single-purpose"}),"\n",(0,i.jsx)(n.li,{children:"Use PropTypes for all props"}),"\n",(0,i.jsx)(n.li,{children:"Implement error boundaries"}),"\n",(0,i.jsx)(n.li,{children:"Memoize expensive computations"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Performance Tips:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Lazy load routes"}),"\n",(0,i.jsx)(n.li,{children:"Use React.memo for pure components"}),"\n",(0,i.jsx)(n.li,{children:"Optimize re-renders"}),"\n",(0,i.jsx)(n.li,{children:"Monitor bundle size"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Code Organization:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Follow directory structure"}),"\n",(0,i.jsx)(n.li,{children:"Use meaningful file names"}),"\n",(0,i.jsx)(n.li,{children:"Keep related files together"}),"\n",(0,i.jsx)(n.li,{children:"Document complex logic"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://reactjs.org/",children:"React Documentation"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://styled-components.com/",children:"styled-components Documentation"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://reactrouter.com/",children:"React Router Documentation"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/disc-template/frontend",children:"Project Repository"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var t=s(6540);const i={},l=t.createContext(i);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);