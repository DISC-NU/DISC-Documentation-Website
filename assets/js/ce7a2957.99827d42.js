"use strict";(self.webpackChunkdisc_documentation=self.webpackChunkdisc_documentation||[]).push([[444],{8079:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"components","title":"Components","description":"Overview","source":"@site/docs/disc-website/components.md","sourceDirName":".","slug":"/components","permalink":"/DISC-Documentation-Website/disc-website/components","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Project Structure","permalink":"/DISC-Documentation-Website/disc-website/project-structure"},"next":{"title":"Styling Guide","permalink":"/DISC-Documentation-Website/disc-website/styling-guide"}}');var o=t(4848),r=t(8453);const i={},c="Components",a={},l=[{value:"Overview",id:"overview",level:2},{value:"1. Section Components",id:"1-section-components",level:3},{value:"2. UI Components",id:"2-ui-components",level:3},{value:"3. Feature Components",id:"3-feature-components",level:3},{value:"Common Patterns",id:"common-patterns",level:2},{value:"1. Using Composition",id:"1-using-composition",level:3},{value:"2. Using Motion",id:"2-using-motion",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Resources",id:"resources",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"components",children:"Components"})}),"\n",(0,o.jsx)(e.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsxs)(e.p,{children:["The DISC website uses a component-based architecture with three main categories. We use ",(0,o.jsx)(e.a,{href:"https://ui.shadcn.com/",children:"shadcn/ui"})," for our base components."]}),"\n",(0,o.jsx)(e.h3,{id:"1-section-components",children:"1. Section Components"}),"\n",(0,o.jsxs)(e.p,{children:["Located in ",(0,o.jsx)(e.code,{children:"_components/_sections/"})]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:'// Example: _components/_sections/LandingPage/Hero.tsx\nimport { Button } from "@/components/ui/button";\n\nexport const Hero = () => {\n  return (\n    <section className="min-h-screen flex flex-col items-center justify-center">\n      <h1 className="text-4xl font-bold text-gray-900">Welcome to DISC</h1>\n      <p className="mt-4 text-gray-600 max-w-xl text-center">\n        Develop & Innovate for Social Change at Northwestern\n      </p>\n      <Button className="mt-6">Get Started</Button>\n    </section>\n  );\n};\n'})}),"\n",(0,o.jsx)(e.h3,{id:"2-ui-components",children:"2. UI Components"}),"\n",(0,o.jsxs)(e.p,{children:["Located in ",(0,o.jsx)(e.code,{children:"_components/ui/"})]}),"\n",(0,o.jsx)(e.p,{children:"These components are primarily from shadcn/ui. Here's how to use some common ones:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:'// Example: Using Card component\nimport {\n  Card,\n  CardHeader,\n  CardTitle,\n  CardDescription,\n  CardContent,\n  CardFooter,\n} from "@/components/ui/card";\nimport { Button } from "@/components/ui/button";\n\nexport const ProjectCard = () => {\n  return (\n    <Card>\n      <CardHeader>\n        <CardTitle>Project Name</CardTitle>\n        <CardDescription>Brief project description</CardDescription>\n      </CardHeader>\n      <CardContent>\n        <p>Main content goes here</p>\n      </CardContent>\n      <CardFooter>\n        <Button>Learn More</Button>\n      </CardFooter>\n    </Card>\n  );\n};\n'})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:'// Example: Using Alert component\nimport { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";\nimport { Info } from "lucide-react";\n\nexport const InfoAlert = () => {\n  return (\n    <Alert>\n      <Info className="h-4 w-4" />\n      <AlertTitle>Heads up!</AlertTitle>\n      <AlertDescription>Important information goes here</AlertDescription>\n    </Alert>\n  );\n};\n'})}),"\n",(0,o.jsx)(e.h3,{id:"3-feature-components",children:"3. Feature Components"}),"\n",(0,o.jsxs)(e.p,{children:["Located in ",(0,o.jsx)(e.code,{children:"_components/"})]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:'// Example: _components/HeroTreeMap.tsx\nimport { useEffect, useRef } from "react";\nimport * as d3 from "d3";\nimport { Card } from "@/components/ui/card";\n\nexport const HeroTreeMap = () => {\n  const svgRef = useRef<SVGSVGElement>(null);\n\n  useEffect(() => {\n    if (!svgRef.current) return;\n\n    // D3.js visualization logic\n    const svg = d3.select(svgRef.current);\n    // ... rest of D3 code\n  }, []);\n\n  return (\n    <Card className="p-4">\n      <svg ref={svgRef} className="w-full h-[400px]" viewBox="0 0 800 400" />\n    </Card>\n  );\n};\n'})}),"\n",(0,o.jsx)(e.h2,{id:"common-patterns",children:"Common Patterns"}),"\n",(0,o.jsx)(e.h3,{id:"1-using-composition",children:"1. Using Composition"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:'// Example: Composing multiple shadcn/ui components\nimport { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";\nimport { Button } from "@/components/ui/button";\nimport { Badge } from "@/components/ui/badge";\n\ninterface FeatureCardProps {\n  title: string;\n  description: string;\n  tags: string[];\n}\n\nexport const FeatureCard = ({ title, description, tags }: FeatureCardProps) => {\n  return (\n    <Card>\n      <CardHeader>\n        <CardTitle className="flex items-center justify-between">\n          {title}\n          <Button variant="outline" size="sm">\n            View Details\n          </Button>\n        </CardTitle>\n      </CardHeader>\n      <CardContent>\n        <p className="text-gray-600">{description}</p>\n        <div className="flex gap-2 mt-4">\n          {tags.map((tag) => (\n            <Badge key={tag} variant="secondary">\n              {tag}\n            </Badge>\n          ))}\n        </div>\n      </CardContent>\n    </Card>\n  );\n};\n'})}),"\n",(0,o.jsx)(e.h3,{id:"2-using-motion",children:"2. Using Motion"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:'// Example: Adding animations to components\nimport { motion } from "framer-motion";\nimport { Card, CardContent } from "@/components/ui/card";\n\nexport const AnimatedCard = () => {\n  return (\n    <motion.div\n      initial={{ opacity: 0, y: 20 }}\n      animate={{ opacity: 1, y: 0 }}\n      transition={{ duration: 0.5 }}\n    >\n      <Card>\n        <CardContent>Animated content</CardContent>\n      </Card>\n    </motion.div>\n  );\n};\n'})}),"\n",(0,o.jsx)(e.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"File Names"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Use PascalCase for component files: ",(0,o.jsx)(e.code,{children:"FeatureCard.tsx"})]}),"\n",(0,o.jsxs)(e.li,{children:["Add ",(0,o.jsx)(e.code,{children:".tsx"})," extension for TypeScript components"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Props"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Define clear interfaces"}),"\n",(0,o.jsx)(e.li,{children:"Use descriptive names"}),"\n",(0,o.jsx)(e.li,{children:"Provide default values"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:'interface ButtonProps {\n  variant?: "primary" | "secondary";\n  size?: "sm" | "md" | "lg";\n  children: React.ReactNode;\n}\n'})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Styling"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Use Tailwind CSS utility classes"}),"\n",(0,o.jsxs)(e.li,{children:["Use the ",(0,o.jsx)(e.code,{children:"cn()"})," utility for conditional classes"]}),"\n",(0,o.jsx)(e.li,{children:"Keep styles component-specific"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Component Structure"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"One component per file"}),"\n",(0,o.jsx)(e.li,{children:"Export as named exports"}),"\n",(0,o.jsx)(e.li,{children:"Group related components in folders"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"resources",children:"Resources"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://ui.shadcn.com/docs",children:"shadcn/ui Documentation"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://tailwindcss.com/docs",children:"Tailwind CSS Documentation"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://www.framer.com/motion/",children:"Framer Motion Documentation"})}),"\n"]})]})}function m(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>c});var s=t(6540);const o={},r=s.createContext(o);function i(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);