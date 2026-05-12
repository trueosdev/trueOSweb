"use client"

import { Code2, Shield, Palette } from "lucide-react"

const team = [
  {
    icon: Code2,
    role: "Systems Architect",
    description: "Full-stack architecture and deployment leadership",
  },
  {
    icon: Shield,
    role: "Security Engineer",
    description: "Security hardening, compliance, and backend workflows",
  },
  {
    icon: Palette,
    role: "UI/UX Designer",
    description: "High-efficiency interface design and user experience optimization",
  },
]

export default function Team() {
  return (
    <section className="py-32 md:py-40 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 space-y-4">
          <h2 className="text-6xl md:text-7xl font-semibold text-foreground text-balance leading-tight text-center">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl font-light leading-relaxed text-center mx-auto">
            Full-stack expertise covering every layer of your application
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => {
            const Icon = member.icon
            return (
              <div
                key={index}
                className="p-12 border border-border rounded-sm bg-background hover:border-accent/30 transition-all duration-300"
              >
                <div className="mb-8 w-16 h-16 bg-accent/10 rounded-sm flex items-center justify-center">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">{member.role}</h3>
                <p className="text-muted-foreground leading-relaxed font-light">{member.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
