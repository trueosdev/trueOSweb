"use client"

export default function HowItWorks() {
  return (
    <section className="py-32 md:py-40 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 space-y-4">
          <h2 className="text-6xl md:text-7xl font-semibold text-foreground text-balance leading-tight text-center">
            How trueOS Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl font-light leading-relaxed text-center mx-auto">
            Contract based engineering with a single hourly rate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-6">
            <div className="text-7xl font-semibold text-accent/30">01</div>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-foreground">Dedicated Engineer</h3>
              <p className="text-muted-foreground leading-relaxed">
                A single trueOS engineer performs the work, supported by security and UI specialists as needed. Fast, flexible, and scalable.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-7xl font-semibold text-accent/30">02</div>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-foreground">Flat Rate Billing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Single hourly rate. You never pay for 3 people — only for productive hours. The engineer assigned to your project handles all communication and work.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-7xl font-semibold text-accent/30">03</div>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-foreground">Production-Ready Systems</h3>
              <p className="text-muted-foreground leading-relaxed">
                Complete, production-ready software systems from architecture to deployment. We cover the full stack from design to interface.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
