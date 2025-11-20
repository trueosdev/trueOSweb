"use client"

import { BarChart3, Lock, Zap, Users, Shield, Code2 } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Custom CRMs",
    description: "Enterprise-grade customer relationship management tailored to your workflow",
  },
  {
    icon: BarChart3,
    title: "Reporting Platforms",
    description: "Data dashboards and documentation systems for real-time insights",
  },
  {
    icon: Users,
    title: "Customer Portals",
    description: "Secure client-facing applications for transactions and engagement",
  },
  {
    icon: Zap,
    title: "Operational Dashboards",
    description: "Admin dashboards, time tracking, inventory, and workflow automation",
  },
  {
    icon: Lock,
    title: "Supabase-Secured Backend",
    description: "Production-ready databases with security hardening and optimization",
  },
  {
    icon: Shield,
    title: "High-Efficiency UI/UX",
    description: "High-efficiency interface design and user experience optimization",
  },
]

export default function Services() {
  return (
    <section className="py-32 md:py-40 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 space-y-4">
          <h2 className="text-6xl md:text-7xl font-semibold text-foreground text-balance leading-tight">What we do</h2>
          <p className="text-lg text-muted-foreground max-w-2xl font-light leading-relaxed">
            Full-stack solutions from concept to production
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-8 border border-border rounded-sm hover:border-accent/30 transition-all duration-300 bg-card hover:shadow-lg"
              >
                <div className="mb-6 w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed font-light">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
