"use strict";(self.webpackChunkdisc_documentation=self.webpackChunkdisc_documentation||[]).push([[378],{6806:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"styling-guide","title":"Styling Guide","description":"shadcn/ui","source":"@site/docs/disc-website/styling-guide.md","sourceDirName":".","slug":"/styling-guide","permalink":"/DISC-Documentation-Website/disc-website/styling-guide","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Components","permalink":"/DISC-Documentation-Website/disc-website/components"},"next":{"title":"Deployment","permalink":"/DISC-Documentation-Website/disc-website/deployment"}}');var l=i(4848),t=i(8453);const r={},c="Styling Guide",d={},o=[{value:"shadcn/ui",id:"shadcnui",level:2},{value:"Tailwind CSS",id:"tailwind-css",level:2},{value:"Basic Usage",id:"basic-usage",level:3},{value:"Color System",id:"color-system",level:3},{value:"Responsive Design",id:"responsive-design",level:3},{value:"Using the cn() Utility",id:"using-the-cn-utility",level:3},{value:"Layout Guidelines",id:"layout-guidelines",level:2},{value:"Spacing",id:"spacing",level:3},{value:"Container Width",id:"container-width",level:3},{value:"Component Styling",id:"component-styling",level:2},{value:"shadcn/ui Customization",id:"shadcnui-customization",level:3},{value:"Animation",id:"animation",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Resources",id:"resources",level:2}];function a(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"styling-guide",children:"Styling Guide"})}),"\n",(0,l.jsx)(e.h2,{id:"shadcnui",children:"shadcn/ui"}),"\n",(0,l.jsxs)(e.p,{children:["We use ",(0,l.jsx)(e.a,{href:"https://ui.shadcn.com/",children:"shadcn/ui"})," for our component system because it offers:"]}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Not a Component Library"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Copy and paste the components you need"}),"\n",(0,l.jsx)(e.li,{children:"Full control over the code and styling"}),"\n",(0,l.jsx)(e.li,{children:"No unnecessary bloat from unused components"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Perfect for Next.js"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Built with Next.js in mind"}),"\n",(0,l.jsx)(e.li,{children:"Server component support"}),"\n",(0,l.jsx)(e.li,{children:"Easy integration with App Router"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Tailwind CSS Integration"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Seamless integration with Tailwind"}),"\n",(0,l.jsx)(e.li,{children:"Consistent styling patterns"}),"\n",(0,l.jsx)(e.li,{children:"Easy customization using Tailwind classes"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"TypeScript First"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Full TypeScript support"}),"\n",(0,l.jsx)(e.li,{children:"Type-safe components"}),"\n",(0,l.jsx)(e.li,{children:"Better developer experience"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Accessibility"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Built on top of Radix UI primitives"}),"\n",(0,l.jsx)(e.li,{children:"ARIA attributes included"}),"\n",(0,l.jsx)(e.li,{children:"Keyboard navigation support"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"tailwind-css",children:"Tailwind CSS"}),"\n",(0,l.jsxs)(e.p,{children:["We use ",(0,l.jsx)(e.a,{href:"https://tailwindcss.com/",children:"Tailwind CSS"})," as our styling solution because it offers:"]}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Utility-First Approach"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Write styles directly in your markup"}),"\n",(0,l.jsx)(e.li,{children:"No context switching between files"}),"\n",(0,l.jsx)(e.li,{children:"Faster development workflow"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Performance Optimized"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Automatically removes unused CSS"}),"\n",(0,l.jsx)(e.li,{children:"Minimal production bundle size"}),"\n",(0,l.jsx)(e.li,{children:"Built-in optimization techniques"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Highly Customizable"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Easy theme configuration"}),"\n",(0,l.jsx)(e.li,{children:"Extend with custom values"}),"\n",(0,l.jsx)(e.li,{children:"Compatible with design systems"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Responsive Design"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Built-in responsive modifiers"}),"\n",(0,l.jsx)(e.li,{children:"Mobile-first approach"}),"\n",(0,l.jsx)(e.li,{children:"Consistent breakpoint system"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Developer Experience"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Intelligent autocomplete"}),"\n",(0,l.jsx)(e.li,{children:"Instant preview in browser"}),"\n",(0,l.jsx)(e.li,{children:"Clear and predictable patterns"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"Here's how we implement and use it:"}),"\n",(0,l.jsx)(e.h3,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-tsx",children:'// Good - Using Tailwind utility classes\n<div className="flex items-center justify-between p-4 bg-white rounded-lg">\n  <h2 className="text-xl font-bold text-gray-900">Title</h2>\n</div>\n\n// Bad - Using custom CSS\n<div className="custom-container">\n  <h2 className="custom-title">Title</h2>\n</div>\n'})}),"\n",(0,l.jsx)(e.h3,{id:"color-system",children:"Color System"}),"\n",(0,l.jsx)(e.p,{children:"We use Tailwind's default color palette with some custom colors:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-tsx",children:"// Primary colors\ntext - primary; // Brand primary\nbg - secondary; // Brand secondary\ntext - accent; // Accent color\n\n// Text colors\ntext - gray - 900; // Headings\ntext - gray - 600; // Body text\ntext - gray - 400; // Subtle text\n"})}),"\n",(0,l.jsx)(e.h3,{id:"responsive-design",children:"Responsive Design"}),"\n",(0,l.jsx)(e.p,{children:"Use Tailwind's responsive prefixes:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-tsx",children:'<div className="\n  w-full          // Mobile (default)\n  md:w-1/2       // Tablet (768px)\n  lg:w-1/3       // Desktop (1024px)\n">\n'})}),"\n",(0,l.jsx)(e.h3,{id:"using-the-cn-utility",children:"Using the cn() Utility"}),"\n",(0,l.jsx)(e.p,{children:"For conditional classes:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-tsx",children:'import { cn } from "@/lib/utils";\n\n<button\n  className={cn(\n    "px-4 py-2 rounded-md",\n    variant === "primary"\n      ? "bg-blue-500 text-white"\n      : "bg-gray-200 text-gray-800"\n  )}\n>\n  Click me\n</button>;\n'})}),"\n",(0,l.jsx)(e.h2,{id:"layout-guidelines",children:"Layout Guidelines"}),"\n",(0,l.jsx)(e.h3,{id:"spacing",children:"Spacing"}),"\n",(0,l.jsx)(e.p,{children:"Use Tailwind's spacing scale:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"p-4"})," for standard padding"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"m-4"})," for standard margins"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"gap-4"})," for flex/grid gaps"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"container-width",children:"Container Width"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-tsx",children:'<div className="\n  container         // Max-width container\n  mx-auto          // Center horizontally\n  px-4            // Padding on small screens\n  sm:px-6         // Adjusted padding on larger screens\n  lg:px-8\n">\n'})}),"\n",(0,l.jsx)(e.h2,{id:"component-styling",children:"Component Styling"}),"\n",(0,l.jsx)(e.h3,{id:"shadcnui-customization",children:"shadcn/ui Customization"}),"\n",(0,l.jsx)(e.p,{children:"Customize shadcn/ui components using Tailwind:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-tsx",children:'// Example: Customizing Card component\nimport { Card } from "@/components/ui/card";\n\n<Card className="hover:shadow-lg transition-shadow duration-200">Content</Card>;\n'})}),"\n",(0,l.jsx)(e.h3,{id:"animation",children:"Animation"}),"\n",(0,l.jsx)(e.p,{children:"Using Framer Motion with Tailwind:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-tsx",children:'import { motion } from "framer-motion";\n\n<motion.div\n  className="bg-white rounded-lg p-4"\n  initial={{ opacity: 0 }}\n  animate={{ opacity: 1 }}\n/>;\n'})}),"\n",(0,l.jsx)(e.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Mobile First"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Start with mobile styles"}),"\n",(0,l.jsx)(e.li,{children:"Add responsive classes as needed"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Consistent Spacing"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Use Tailwind's spacing scale"}),"\n",(0,l.jsx)(e.li,{children:"Maintain consistent spacing between elements"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Semantic HTML"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Use appropriate HTML elements"}),"\n",(0,l.jsx)(e.li,{children:"Style with Tailwind classes"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Component Classes"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Use shadcn/ui base components"}),"\n",(0,l.jsx)(e.li,{children:"Extend with Tailwind classes"}),"\n",(0,l.jsx)(e.li,{children:"Keep modifications consistent"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"resources",children:"Resources"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://tailwindcss.com/docs",children:"Tailwind CSS Docs"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://ui.shadcn.com/docs",children:"shadcn/ui Docs"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://www.framer.com/motion/",children:"Framer Motion"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://www.radix-ui.com/",children:"Radix UI"})}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(a,{...n})}):a(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>c});var s=i(6540);const l={},t=s.createContext(l);function r(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);