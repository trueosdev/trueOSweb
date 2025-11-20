'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO at TechCorp',
    content: 'Trueos transformed how we handle our infrastructure. The support team is exceptional.',
    rating: 5
  },
  {
    name: 'Michael Rodriguez',
    role: 'CEO at StartupXYZ',
    content: 'We scaled from 100 to 10,000 users without a single downtime. Highly recommended.',
    rating: 5
  },
  {
    name: 'Emily Watson',
    role: 'DevOps Lead at Enterprise Co',
    content: 'The best investment we made for our development workflow. ROI was immediate.',
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            See what teams say about using trueos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 rounded-lg bg-background border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
