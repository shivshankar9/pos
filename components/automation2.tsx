// 'use client'

// import * as React from 'react'
// import { motion, useScroll, useTransform } from 'framer-motion'
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Badge } from "@/components/ui/badge"
// import { ArrowRight, CheckCircle, Briefcase, CreditCard, Users, Calendar, PieChart, FileText, Building, Zap, Star } from 'lucide-react'
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
//           'Advanced skill matching using natural language processing',
//           'Personality fit assessment based on psychometric models',
//           'Automated screening process with customizable criteria',
//           'Integration with popular job boards and social networks'
//         ],
//         image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hiring-platform-NRWzrWVZXBXbzDzfzDzBrNHp8GXGWX.jpg',
//         badge: 'AI-Powered',
//         advanced: 'Real-time talent pool analytics and market insights'
//       },
//       {
//         title: 'Video Interview Platform',
//         description: 'Conduct seamless remote interviews with our integrated video platform',
//         features: [
//           'One-way and live video interviews with HD quality',
//           'AI-assisted candidate evaluation and sentiment analysis',
//           'Collaborative interview scoring and feedback system',
//           'Integrated scheduling with calendar syncing'
//         ],
//         image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video-interview-zSWNQWxgR8b0L1DKLNwBNRrJG85GWp.jpg',
//         badge: 'Remote-Ready',
//         advanced: 'Virtual reality interview simulations for immersive assessments'
//       },
//       {
//         title: 'Talent CRM & Pipeline Management',
//         description: 'Build and nurture your talent pipeline with our advanced CRM system',
//         features: [
//           'Automated candidate sourcing and enrichment',
//           'Personalized engagement campaigns',
//           'Talent pool segmentation and tagging',
//           'Predictive analytics for hiring success'
//         ],
//         image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/talent-crm-zNQWxgR8b0L1DKLNwBNRrJG85GWp.jpg',
//         badge: 'Pipeline Optimizer',
//         advanced: 'AI-driven talent market mapping and competitor analysis'
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
//           'Automated recurring invoices with smart scheduling',
//           'Multi-currency support with real-time exchange rates',
//           'AI-powered anomaly detection for billing errors',
//           'Blockchain-based invoice verification for enhanced security'
//         ],
//         image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/smart-invoicing-zNQWxgR8b0L1DKLNwBNRrJG85GWp.jpg',
//         badge: 'AI-Enhanced',
//         advanced: 'Predictive cash flow forecasting using machine learning'
//       },
//       {
//         title: 'Subscription Revenue Optimization',
//         description: 'Maximize your subscription-based revenue with advanced analytics and automation',
//         features: [
//           'Dynamic pricing models based on usage patterns',
//           'Churn prediction and prevention algorithms',
//           'Automated upsell and cross-sell recommendations',
//           'Revenue recognition compliance automation'
//         ],
//         image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/subscription-revenue-zNQWxgR8b0L1DKLNwBNRrJG85GWp.jpg',
//         badge: 'Revenue Maximizer',
//         advanced: 'AI-driven customer lifetime value optimization'
//       },
//       {
//         title: 'Global Tax Management Suite',
//         description: 'Navigate complex international tax landscapes with our comprehensive solution',
//         features: [
//           'Automated tax calculation for 190+ countries',
//           'Real-time tax regulation updates and compliance checks',
//           'Digital tax reporting and e-invoicing support',
//           'VAT/GST reclaim automation for international transactions'
//         ],
//         image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/global-tax-zNQWxgR8b0L1DKLNwBNRrJG85GWp.jpg',
//         badge: 'Global Compliance',
//         advanced: 'AI-powered tax optimization strategies and scenario planning'
//       }
//     ]
//   },
//   {
//     id: 'employment',
//     label: 'Employment App',
//     items: [
//       {
//         title: 'AI-Driven Performance Management',
//         description: 'Revolutionize your performance reviews with AI-powered insights and coaching',
//         features: [
//           'Continuous performance tracking with real-time feedback',
//           'AI-generated performance improvement plans',
//           'Peer recognition and 360-degree feedback integration',
//           'Predictive performance analytics and trend identification'
//         ],
//         image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/performance-management-zNQWxgR8b0L1DKLNwBNRrJG85GWp.jpg',
//         badge: 'AI-Powered',
//         advanced: 'Sentiment analysis for employee satisfaction and engagement'
//       },
//       {
//         title: 'Smart Workforce Planning',
//         description: 'Optimize your workforce with AI-driven planning and analytics',
//         features: [
//           'AI-powered demand forecasting and staff optimization',
//           'Skills gap analysis and automated upskilling recommendations',
//           'Scenario planning for organizational changes',
//           'Diversity and inclusion analytics and recommendations'
//         ],
//         image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/workforce-planning-zNQWxgR8b0L1DKLNwBNRrJG85GWp.jpg',
//         badge: 'Strategic Planner',
//         advanced: 'Machine learning models for predicting employee success and retention'
//       },
//       {
//         title: 'Employee Wellness & Engagement Platform',
//         description: 'Foster a healthier, more engaged workforce with our comprehensive wellness solution',
//         features: [
//           'Personalized wellness programs and challenges',
//           'Mental health support and resources',
//           'Gamified engagement activities and rewards',
//           'Anonymous feedback and pulse surveys'
//         ],
//         image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/employee-wellness-zNQWxgR8b0L1DKLNwBNRrJG85GWp.jpg',
//         badge: 'Wellness Booster',
//         advanced: 'AI-driven stress detection and burnout prevention algorithms'
//       }
//     ]
//   },
//   {
//     id: 'expense',
//     label: 'Expense Tracking',
//     items: [
//       {
//         title: 'AI-Powered Expense Management',
//         description: 'Streamline expense reporting with advanced AI and machine learning capabilities',
//         features: [
//           'Automatic receipt categorization and data extraction',
//           'Real-time policy compliance checks and fraud detection',
//           'Predictive expense forecasting and budget recommendations',
//           'Natural language processing for voice-activated expense logging'
//         ],
//         image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/expense-management-zNQWxgR8b0L1DKLNwBNRrJG85GWp.jpg',
//         badge: 'AI-Enhanced',
//         advanced: 'Anomaly detection for identifying unusual spending patterns'
//       },
//       {
//         title: 'Corporate Card Management System',
//         description: 'Optimize your corporate card program with advanced controls and analytics',
//         features: [
//           'Real-time transaction monitoring and alerts',
//           'Dynamic spending limits based on role and project',
//           'Automated reconciliation with accounting systems',
//           'Virtual card issuance for secure online transactions'
//         ],
//         image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/corporate-card-zNQWxgR8b0L1DKLNwBNRrJG85GWp.jpg',
//         badge: 'Smart Controls',
//         advanced: 'AI-driven spend optimization and vendor negotiation insights'
//       },
//       {
//         title: 'Travel & Expense Ecosystem',
//         description: 'Create a seamless travel and expense experience for your employees',
//         features: [
//           'AI-powered travel booking with policy compliance',
//           'Real-time itinerary management and risk alerts',
//           'Automated per diem calculations and adjustments',
//           'Integrated expense capture with geo-tagging'
//         ],
//         image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/travel-expense-zNQWxgR8b0L1DKLNwBNRrJG85GWp.jpg',
//         badge: 'Travel Optimizer',
//         advanced: 'Predictive analytics for optimizing travel policies and negotiating rates'
//       }
//     ]
//   },
//   {
//     id: 'automation',
//     label: 'Business Automation',
//     items: [
//       {
//         title: 'Intelligent Process Automation Platform',
//         description: 'Transform your business processes with AI-powered automation',
//         features: [
//           'Visual process designer with drag-and-drop interface',
//           'AI-powered document understanding and data extraction',
//           'Robotic process automation (RPA) for repetitive tasks',
//           'Machine learning models for predictive process optimization'
//         ],
//         image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/process-automation-zNQWxgR8b0L1DKLNwBNRrJG85GWp.jpg',
//         badge: 'AI-Powered',
//         advanced: 'Self-optimizing workflows that adapt to changing business conditions'
//       },
//       {
//         title: 'Advanced Analytics & Business Intelligence',
//         description: 'Unlock the power of your data with our cutting-edge analytics platform',
//         features: [
//           'Real-time data visualization and interactive dashboards',
//           'Predictive analytics using machine learning algorithms',
//           'Natural language querying for easy data exploration',
//           'Automated insight generation and anomaly detection'
//         ],
//         image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/business-intelligence-zNQWxgR8b0L1DKLNwBNRrJG85GWp.jpg',
//         badge: 'Data-Driven',
//         advanced: 'AI-powered scenario planning and decision support systems'
//       },
//       {
//         title: 'Intelligent Document Management',
//         description: 'Revolutionize your document workflows with AI and automation',
//         features: [
//           'AI-powered document classification and data extraction',
//           'Automated workflow routing and approval processes',
//           'Version control with blockchain-based audit trails',
//           'Intelligent search with natural language processing'
//         ],
//         image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/document-management-zNQWxgR8b0L1DKLNwBNRrJG85GWp.jpg',
//         badge: 'Smart Docs',
//         advanced: 'Predictive document lifecycle management and retention policies'
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
//       <Card className="w-full max-w-5xl mx-auto overflow-hidden">
//         <div className="grid md:grid-cols-2 gap-6">
//           <div className="order-2 md:order-1 p-6">
//             <CardHeader className="p-0">
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
//             <CardContent className="p-0 mt-4">
//               <ul className="space-y-3">
//                 {tool.features.map((feature: string, i: number) => (
//                   <li key={i} className="flex items-start">
//                     <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </CardContent>
//             <CardFooter className="p-0 mt-6">
//               <Button className="w-full md:w-auto">
//                 Learn More
//                 <ArrowRight className="ml-2 h-4 w-4" />
//               </Button>
//             </CardFooter>
//             {tool.advanced && (
//               <div className="mt-6 bg-blue-50 p-4 rounded-lg">
//                 <h4 className="font-semibold flex items-center text-blue-700">
//                   <Star className="h-5 w-5 mr-2" />
//                   Advanced Feature
//                 </h4>
//                 <p className="text-blue-600 mt-2">{tool.advanced}</p>
//               </div>
//             )}
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