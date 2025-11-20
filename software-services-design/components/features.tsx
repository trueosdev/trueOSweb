"use client"

import { TrendingUp, Zap, Lock, Code2, BarChart3, Shield } from "lucide-react"

const features = [
  {
    icon: Code2,
    title: "Full-Stack Architecture & Deployment",
    description: "Complete systems from architecture to deployment with modern best practices",
  },
  {
    icon: BarChart3,
    title: "Integrated Business Systems",
    description: "Connecting CRM, reporting, customer management, and internal tools seamlessly",
  },
  {
    icon: Lock,
    title: "Security-Hardening & Backend Workflows",
    description: "Production-ready security implementations and optimized backend processes",
  },
  {
    icon: Zap,
    title: "High-Efficiency UI Layout & Ergonomics",
    description: "User interfaces designed for maximum efficiency and optimal user experience",
  },
  {
    icon: TrendingUp,
    title: "Rapid MVP → Production Pipelines",
    description: "Fast development cycles from minimum viable product to full production deployment",
  },
  {
    icon: Shield,
    title: "Production-Ready Supabase Implementations",
    description: "Secure, scalable database solutions with enterprise-grade configurations",
  },
]

export default function Features() {
  return (
    <section id="capabilities" className="py-32 md:py-40 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 space-y-4">
          <h2 className="text-6xl md:text-7xl font-semibold text-foreground text-balance leading-tight text-center">
            Core Capabilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl font-light leading-relaxed text-center mx-auto">
            Enterprise-grade development at startup speed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-8 border border-border rounded-sm hover:border-accent/30 transition-all duration-300 bg-card hover:shadow-lg"
              >
                <div className="mb-6 w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed font-light">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
