// 'use client'

// import * as React from 'react'
// import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Badge } from "@/components/ui/badge"
// import { ArrowRight, Brain, Cpu, Database, Globe, Lock, Maximize, Minimize2, Network, Power, Zap } from 'lucide-react'
// import { cn } from "@/lib/utils"

// const futuristicTools = [
//   { id: 'quantum', label: 'Quantum Computing', icon: Cpu },
//   { id: 'ai', label: 'Hyper-Intelligent AI', icon: Brain },
//   { id: 'blockchain', label: 'Blockchain Ecosystem', icon: Database },
//   { id: 'iot', label: 'IoT Mesh Network', icon: Globe },
//   { id: 'energy', label: 'Sustainable Energy', icon: Zap },
// ]

// const toolCategories = [
//   {
//     id: 'quantum',
//     label: 'Quantum Computing',
//     items: [
//       {
//         title: 'Quantum-Enhanced Optimization Engine',
//         description: 'Solve complex business problems at unprecedented speeds with quantum algorithms',
//         features: [
//           'Quantum-inspired algorithms for classical systems',
//           'True quantum computation for partnered quantum hardware providers',
//           'Hybrid quantum-classical optimization for supply chain and logistics',
//           'Financial portfolio optimization using quantum annealing'
//         ],
//         image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/quantum-computing-zNQWxgR8b0L1DKLNwBNRrJG85GWp.jpg',
//         badge: 'Quantum Powered',
//         advanced: 'Quantum machine learning for predictive analytics and pattern recognition'
//       },
//       {
//         title: 'Quantum-Safe Cryptography Suite',
//         description: 'Future-proof your data security with post-quantum cryptographic algorithms',
//         features: [
//           'Post-quantum key exchange protocols',
//           'Lattice-based cryptographic schemes',
//           'Quantum random number generation for unbreakable encryption',
//           'Quantum key distribution (QKD) integration for partnered hardware'
//         ],
//         image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/quantum-cryptography-NRWzrWVZXBXbzDzfzDzBrNHp8GXGWX.jpg',
//         badge: 'Quantum-Safe',
//         advanced: 'Homomorphic encryption for secure quantum cloud computing'
//       },
//     ]
//   },
//   {
//     id: 'ai',
//     label: 'Hyper-Intelligent AI',
//     items: [
//       {
//         title: 'Autonomous Business Orchestrator',
//         description: 'AI system that autonomously manages and optimizes entire business operations',
//         features: [
//           'Self-evolving neural networks for adaptive business strategies',
//           'Natural language interfaces for seamless human-AI collaboration',
//           'Ethical AI decision-making with explainable algorithms',
//           'Real-time market analysis and predictive forecasting'
//         ],
//         image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ai-business-orchestrator-zSWNQWxgR8b0L1DKLNwBNRrJG85GWp.jpg',
//         badge: 'Autonomous AI',
//         advanced: 'Quantum-inspired AI algorithms for complex problem-solving'
//       },
//       {
//         title: 'Cognitive Digital Twin Platform',
//         description: 'Create intelligent digital replicas of your entire organization for simulation and optimization',
//         features: [
//           'Real-time synchronization with physical business processes',
//           'AI-driven scenario planning and risk assessment',
//           'Predictive maintenance and resource allocation',
//           'Virtual reality interfaces for immersive business analytics'
//         ],
//         image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/digital-twin-zNQWxgR8b0L1DKLNwBNRrJG85GWp.jpg',
//         badge: 'Digital Twin',
//         advanced: 'Quantum-enhanced simulations for high-fidelity modeling'
//       },
//     ]
//   },
//   {
//     id: 'blockchain',
//     label: 'Blockchain Ecosystem',
//     items: [
//       {
//         title: 'Hyper-Ledger Business Network',
//         description: 'A scalable, interoperable blockchain network for secure and transparent business operations',
//         features: [
//           'Multi-chain architecture for different business functions',
//           'Smart contract automation for self-executing agreements',
//           'Decentralized identity and access management',
//           'Real-time supply chain tracking and provenance'
//         ],
//         image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blockchain-network-zNQWxgR8b0L1DKLNwBNRrJG85GWp.jpg',
//         badge: 'Hyper-Ledger',
//         advanced: 'Quantum-resistant blockchain protocols for long-term security'
//       },
//       {
//         title: 'Tokenized Asset Management',
//         description: 'Revolutionize asset management with blockchain-based tokenization and smart contracts',
//         features: [
//           'Fractional ownership of high-value assets',
//           'Automated dividend distribution and voting rights',
//           'Real-time asset valuation and liquidity pools',
//           'Regulatory-compliant security token offerings (STOs)'
//         ],
//         image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tokenized-assets-zNQWxgR8b0L1DKLNwBNRrJG85GWp.jpg',
//         badge: 'Asset Tokenization',
//         advanced: 'AI-driven token economics for optimal asset performance'
//       },
//     ]
//   },
//   {
//     id: 'iot',
//     label: 'IoT Mesh Network',
//     items: [
//       {
//         title: 'Swarm Intelligence Platform',
//         description: 'Harness the power of distributed IoT devices for collective problem-solving and optimization',
//         features: [
//           'Self-organizing device networks with mesh topology',
//           'Edge computing for real-time data processing',
//           'Collaborative sensing and shared intelligence',
//           'Adaptive resource allocation based on swarm behavior'
//         ],
//         image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swarm-intelligence-zNQWxgR8b0L1DKLNwBNRrJG85GWp.jpg',
//         badge: 'Swarm AI',
//         advanced: 'Quantum sensor networks for ultra-precise measurements'
//       },
//       {
//         title: 'Augmented Reality Operations',
//         description: 'Seamlessly blend digital information with the physical world for enhanced business operations',
//         features: [
//           'AR-guided maintenance and repair procedures',
//           'Real-time data visualization in physical spaces',
//           'Gesture and voice-controlled AR interfaces',
//           'AI-powered object recognition and tracking'
//         ],
//         image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ar-operations-zNQWxgR8b0L1DKLNwBNRrJG85GWp.jpg',
//         badge: 'AR Enhanced',
//         advanced: 'Brain-computer interfaces for direct AR control and data access'
//       },
//     ]
//   },
//   {
//     id: 'energy',
//     label: 'Sustainable Energy',
//     items: [
//       {
//         title: 'AI-Optimized Energy Grid',
//         description: 'Intelligent energy management system for businesses to optimize consumption and reduce costs',
//         features: [
//           'Machine learning for predictive energy demand forecasting',
//           'Real-time energy trading on decentralized markets',
//           'Smart contract-based automated energy procurement',
//           'Integration with renewable energy sources and storage systems'
//         ],
//         image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/smart-energy-grid-zNQWxgR8b0L1DKLNwBNRrJG85GWp.jpg',
//         badge: 'Smart Grid',
//         advanced: 'Quantum algorithms for grid optimization and stability'
//       },
//       {
//         title: 'Carbon Footprint Optimizer',
//         description: 'Comprehensive platform for monitoring, reporting, and reducing corporate carbon emissions',
//         features: [
//           'AI-driven recommendations for emission reduction strategies',
//           'Blockchain-verified carbon credit trading',
//           'Real-time environmental impact dashboards',
//           'Automated regulatory compliance reporting'
//         ],
//         image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carbon-footprint-zNQWxgR8b0L1DKLNwBNRrJG85GWp.jpg',
//         badge: 'Green Tech',
//         advanced: 'Quantum-inspired optimization for carbon-neutral supply chains'
//       },
//     ]
//   }
// ]

// function FuturisticCard({ tool, index, totalCards }: { tool: any; index: number; totalCards: number }) {
//   const cardRef = React.useRef(null)
//   const { scrollYProgress } = useScroll({
//     target: cardRef,
//     offset: ["start end", "end start"]
//   })

//   const yProgress = useTransform(scrollYProgress, [0, 1], [0, 1])
//   const y = useTransform(yProgress, [0, 1], ['0%', `${-100 / totalCards * (index + 1)}%`])
//   const opacity = useTransform(yProgress, [0, 0.5, 1], [1, 1, 0])
//   const scale = useTransform(yProgress, [0, 0.5, 1], [1, 1, 0.8])

//   const [isExpanded, setIsExpanded] = React.useState(false)

//   return (
//     <motion.div
//       ref={cardRef}
//       style={{ y, opacity, scale }}
//       className="sticky top-0 h-screen flex items-center justify-center p-4"
//     >
//       <Card className={cn(
//         "w-full max-w-5xl mx-auto overflow-hidden transition-all duration-300",
//         isExpanded ? "h-[80vh]" : "h-[60vh]"
//       )}>
//         <div className="grid md:grid-cols-2 h-full">
//           <div className="order-2 md:order-1 p-6 overflow-auto">
//             <CardHeader className="p-0">
//               <div className="flex items-center justify-between mb-2">
//                 <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
//                   {tool.title}
//                 </CardTitle>
//                 {tool.badge && (
//                   <Badge variant="secondary" className="ml-2 bg-blue-100 text-blue-800">
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
//                   <motion.li 
//                     key={i} 
//                     className="flex items-start"
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: i * 0.1 }}
//                   >
//                     <Zap className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
//                     <span>{feature}</span>
//                   </motion.li>
//                 ))}
//               </ul>
//             </CardContent>
//             <CardFooter className="p-0 mt-6">
//               <Button className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
//                 Explore Technology
//                 <ArrowRight className="ml-2 h-4 w-4" />
//               </Button>
//             </CardFooter>
//             <AnimatePresence>
//               {isExpanded && tool.advanced && (
//                 <motion.div 
//                   className="mt-6 bg-blue-50 p-4 rounded-lg"
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: 'auto' }}
//                   exit={{ opacity: 0, height: 0 }}
//                 >
//                   <h4 className="font-semibold flex items-center text-blue-700">
//                     <Zap className="h-5 w-5 mr-2" />
//                     Quantum Leap Feature
//                   </h4>
//                   <p className="text-blue-600 mt-2">{tool.advanced}</p>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//           <div className="order-1 md:order-2 relative overflow-hidden">
//             <img
//               src={tool.image}
//               alt={tool.title}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//             <Button 
//               variant="outline" 
//               size="icon"
//               className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm"
//               onClick={() => setIsExpanded(!isExpanded)}
//             >
//               {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
//             </Button>
//           </div>
//         </div>
//       </Card>
//     </motion.div>
//   )
// }

// export default function FuturisticBusinessSuite() {
//   const [activeToolCategory, setActiveToolCategory] = React.useState('quantum')

//   const activeTools = toolCategories.find(c => c.id === activeToolCategory)?.items || []

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
//       <div className="container mx-auto px-4 py-12">
//         <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
//           Futuristic Business Automation Suite
//         </h1>
//         <p className="text-xl text-center mb-12 text-blue-200">
//           Harness the power of tomorrow's technologies today
//         </p>

//         {/* Main Navigation */}
//         <div className="flex items-center justify-center mb-12 sticky top-0 bg-gray-900/80 backdrop-blur-sm z-10 py-4">
//           <Tabs value={activeToolCategory} onValueChange={setActiveToolCategory} className="w-full max-w-4xl">
//             <TabsList className="inline-flex h-12 items-center justify-center rounded-full bg-gray-800/50 p-1 text-gray-400">
//               {futuristicTools.map((tool) => {
//                 const Icon = tool.icon
//                 return (
//                   <TabsTrigger
//                     key={tool.id}
//                     value={tool.id}
//                     className={cn(
//                       "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
//                       activeToolCategory === tool.id ? "bg-blue-600 text-white shadow-lg" : "hover:bg-gray-700/50 hover:text-gray-100"
//                     )}
//                   >
//                     <Icon className="mr-2 h-4 w-4" />
//                     {tool.label}
//                   </TabsTrigger>
//                 )
//               })}
//             </TabsList>
//           </Tabs>
//         </div>

//         {/* Sliding Cards */}
//         <div style={{ height: `${activeTools.length * 100}vh` }}>
//           {activeTools.map((tool, index) => (
//             <FuturisticCard 
//               key={index} 
//               tool={tool} 
//               index={index} 
//               totalCards={activeTools.length} 
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }