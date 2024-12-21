// 'use client'

// import * as React from 'react'
// import { motion, useScroll, useTransform } from 'framer-motion'
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Badge } from "@/components/ui/badge"
// import { ArrowRight, CheckCircle, Briefcase, CreditCard, Users, Calendar, PieChart, FileText, Building, Zap } from 'lucide-react'
// import { cn } from "@/lib/utils"

// const businessTools = [
//   { id: 'hiring', label: 'Hiring Platform', icon: Briefcase },
//   { id: 'billing', label: 'Billing Management', icon: CreditCard },
//   { id: 'employment', label: 'Employment App', icon: Users },
//   { id: 'expense', label: 'Expense Tracking', icon: PieChart },
//   { id: 'automation', label: 'Business Automation', icon: Zap },
// ]

// const toolCategories = [
//   {
//     id: 'hiring',
//     label: 'Hiring Platform',
//     items: [
//       {
//         title: 'AI-Powered Candidate Matching',
//         description: 'Find the perfect candidates faster with our AI-driven matching algorithm',
//         features: [
//           'Advanced skill matching',
//           'Personality fit assessment',
//           'Automated screening process',
//           'Integration with popular job boards'
//         ],
//         image: '/placeholder.svg?height=400&width=600',
//         badge: 'AI-Powered'
//       },
//       {
//         title: 'Applicant Tracking System',
//         description: 'Streamline your hiring process with our comprehensive ATS',
//         features: [
//           'Customizable hiring workflows',
//           'Collaborative hiring tools',
//           'Interview scheduling',
//           'Offer management'
//         ],
//         image: '/placeholder.svg?height=400&width=600',
//         badge: 'Streamlined'
//       },
//       {
//         title: 'Video Interview Platform',
//         description: 'Conduct seamless remote interviews with our integrated video platform',
//         features: [
//           'One-way and live video interviews',
//           'Automated interview scheduling',
//           'Interview recording and sharing',
//           'AI-assisted candidate evaluation'
//         ],
//         image: '/placeholder.svg?height=400&width=600',
//         badge: 'Remote-Ready'
//       }
//     ]
//   },
//   {
//     id: 'billing',
//     label: 'Billing Management',
//     items: [
//       {
//         title: 'Smart Invoicing System',
//         description: 'Create and manage invoices effortlessly with our intelligent billing solution',
//         features: [
//           'Automated recurring invoices',
//           'Multi-currency support',
//           'Customizable invoice templates',
//           'Integration with payment gateways'
//         ],
//         image: '/placeholder.svg?height=400&width=600',
//         badge: 'Automated'
//       },
//       {
//         title: 'Subscription Management',
//         description: 'Manage complex subscription models with ease',
//         features: [
//           'Flexible pricing models',
//           'Automated billing cycles',
//           'Proration and upgrades handling',
//           'Dunning management'
//         ],
//         image: '/placeholder.svg?height=400&width=600',
//         badge: 'Scalable'
//       },
//       {
//         title: 'Financial Reporting Suite',
//         description: 'Gain insights into your business finances with comprehensive reporting tools',
//         features: [
//           'Real-time financial dashboards',
//           'Customizable report generation',
//           'Revenue forecasting',
//           'Integration with accounting software'
//         ],
//         image: '/placeholder.svg?height=400&width=600',
//         badge: 'Insightful'
//       }
//     ]
//   },
//   {
//     id: 'employment',
//     label: 'Employment App',
//     items: [
//       {
//         title: 'Employee Self-Service Portal',
//         description: 'Empower your employees with a user-friendly self-service platform',
//         features: [
//           'Time-off management',
//           'Payroll information access',
//           'Benefits enrollment',
//           'Performance review tools'
//         ],
//         image: '/placeholder.svg?height=400&width=600',
//         badge: 'User-Friendly'
//       },
//       {
//         title: 'Workforce Management System',
//         description: 'Optimize your workforce with our comprehensive management solution',
//         features: [
//           'Shift scheduling and swapping',
//           'Time and attendance tracking',
//           'Labor cost optimization',
//           'Compliance management'
//         ],
//         image: '/placeholder.svg?height=400&width=600',
//         badge: 'Optimized'
//       },
//       {
//         title: 'Learning Management System',
//         description: 'Foster employee growth with our integrated learning platform',
//         features: [
//           'Custom learning paths',
//           'Skill gap analysis',
//           'Certification tracking',
//           'Social learning features'
//         ],
//         image: '/placeholder.svg?height=400&width=600',
//         badge: 'Growth-Oriented'
//       }
//     ]
//   },
//   {
//     id: 'expense',
//     label: 'Expense Tracking',
//     items: [
//       {
//         title: 'Smart Expense Capture',
//         description: 'Simplify expense reporting with AI-powered receipt scanning and categorization',
//         features: [
//           'OCR receipt scanning',
//           'Automatic expense categorization',
//           'Real-time policy compliance checks',
//           'Multi-currency support'
//         ],
//         image: '/placeholder.svg?height=400&width=600',
//         badge: 'AI-Powered'
//       },
//       {
//         title: 'Travel Expense Management',
//         description: 'Streamline travel expenses with our comprehensive travel management solution',
//         features: [
//           'Integrated travel booking',
//           'Per diem calculations',
//           'Mileage tracking',
//           'Approval workflows'
//         ],
//         image: '/placeholder.svg?height=400&width=600',
//         badge: 'Travel-Optimized'
//       },
//       {
//         title: 'Expense Analytics Dashboard',
//         description: 'Gain valuable insights into your company\'s spending patterns',
//         features: [
//           'Customizable expense reports',
//           'Spend analysis by department',
//           'Budget vs. actual comparisons',
//           'Expense forecasting'
//         ],
//         image: '/placeholder.svg?height=400&width=600',
//         badge: 'Data-Driven'
//       }
//     ]
//   },
//   {
//     id: 'automation',
//     label: 'Business Automation',
//     items: [
//       {
//         title: 'Workflow Automation Engine',
//         description: 'Streamline your business processes with our powerful automation tools',
//         features: [
//           'Visual workflow designer',
//           'Cross-application integrations',
//           'Conditional logic and branching',
//           'Automated notifications and alerts'
//         ],
//         image: '/placeholder.svg?height=400&width=600',
//         badge: 'Powerful'
//       },
//       {
//         title: 'Document Management System',
//         description: 'Organize and automate your document processes for improved efficiency',
//         features: [
//           'Intelligent document classification',
//           'Automated data extraction',
//           'Version control and audit trails',
//           'Secure document sharing'
//         ],
//         image: '/placeholder.svg?height=400&width=600',
//         badge: 'Organized'
//       },
//       {
//         title: 'Business Intelligence Suite',
//         description: 'Make data-driven decisions with our comprehensive BI tools',
//         features: [
//           'Data visualization dashboards',
//           'Predictive analytics',
//           'Automated reporting',
//           'KPI tracking and alerts'
//         ],
//         image: '/placeholder.svg?height=400&width=600',
//         badge: 'Intelligent'
//       }
//     ]
//   }
// ]

// function SlidingCard({ tool, index, totalCards }: { tool: any; index: number; totalCards: number }) {
//   const cardRef = React.useRef(null)
//   const { scrollYProgress } = useScroll({
//     target: cardRef,
//     offset: ["start end", "end start"]
//   })

//   const yProgress = useTransform(scrollYProgress, [0, 1], [0, 1])
//   const y = useTransform(yProgress, [0, 1], ['0%', `${-100 / totalCards * (index + 1)}%`])
//   const opacity = useTransform(yProgress, [0, 0.5, 1], [1, 1, 0])

//   return (
//     <motion.div
//       ref={cardRef}
//       style={{ y, opacity }}
//       className="sticky top-0 h-screen flex items-center justify-center p-4"
//     >
//       <Card className="w-full max-w-4xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-6">
//           <div className="order-2 md:order-1">
//             <CardHeader>
//               <div className="flex items-center justify-between mb-2">
//                 <CardTitle className="text-2xl font-bold">{tool.title}</CardTitle>
//                 {tool.badge && (
//                   <Badge variant="secondary" className="ml-2">
//                     {tool.badge}
//                   </Badge>
//                 )}
//               </div>
//               <CardDescription className="text-lg">
//                 {tool.description}
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <ul className="space-y-3">
//                 {tool.features.map((feature: string, i: number) => (
//                   <li key={i} className="flex items-center">
//                     <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </CardContent>
//             <CardFooter>
//               <Button className="w-full md:w-auto">
//                 Learn More
//                 <ArrowRight className="ml-2 h-4 w-4" />
//               </Button>
//             </CardFooter>
//           </div>
//           <div className="order-1 md:order-2">
//             <img
//               src={tool.image}
//               alt={tool.title}
//               className="w-full h-full object-cover rounded-lg"
//             />
//           </div>
//         </div>
//       </Card>
//     </motion.div>
//   )
// }

// export default function BusinessAutomationSuite() {
//   const [activeToolCategory, setActiveToolCategory] = React.useState('hiring')

//   const activeTools = toolCategories.find(c => c.id === activeToolCategory)?.items || []

//   return (
//     <div className="container mx-auto px-4 py-6">
//       {/* Main Navigation */}
//       <div className="flex items-center justify-between mb-8 sticky top-0 bg-background z-10 py-4">
//         <Tabs value={activeToolCategory} onValueChange={setActiveToolCategory} className="flex-1">
//           <TabsList className="inline-flex h-10 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
//             {businessTools.map((tool) => {
//               const Icon = tool.icon
//               return (
//                 <TabsTrigger
//                   key={tool.id}
//                   value={tool.id}
//                   className={cn(
//                     "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
//                     activeToolCategory === tool.id && "bg-background text-foreground shadow-sm"
//                   )}
//                 >
//                   <Icon className="mr-2 h-4 w-4" />
//                   {tool.label}
//                 </TabsTrigger>
//               )
//             })}
//           </TabsList>
//         </Tabs>
//         <Button size="lg" className="ml-4 bg-blue-600 hover:bg-blue-700">
//           Get Started Now
//         </Button>
//       </div>

//       {/* Sliding Cards */}
//       <div style={{ height: `${activeTools.length * 100}vh` }}>
//         {activeTools.map((tool, index) => (
//           <SlidingCard 
//             key={index} 
//             tool={tool} 
//             index={index} 
//             totalCards={activeTools.length} 
//           />
//         ))}
//       </div>
//     </div>
//   )
// }