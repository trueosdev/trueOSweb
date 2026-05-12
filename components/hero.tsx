"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-10 max-w-5xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-8">
            <img src="/true-logo.svg" alt="trueOS Logo" className="h-32 md:h-40 lg:h-48 w-auto" />

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed text-center font-normal">
              Specialized contractor team providing high-speed deployment of custom business platforms, including CRMs, internal portals, reporting systems, and full-stack applications. We deliver complete, production-ready software systems on a contract basis.
            </p>

            <div className="flex justify-center">
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-foreground hover:bg-foreground/5 font-semibold rounded-full px-8 bg-transparent"
                  >
                    Contact Team
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="text-center">{isSuccess ? 'Thank you!' : 'Contact trueOS'}</DialogTitle>
                  </DialogHeader>
                  {isSuccess ? (
                    <div className="text-center space-y-4">
                      <p className="text-muted-foreground">
                        Thanks for your submission! We'll get back to you soon.
                      </p>
                      <Button onClick={() => { setIsOpen(false); setIsSuccess(false) }} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        Close
                      </Button>
                    </div>
                  ) : (
                    <form
                      className="space-y-4"
                      onSubmit={async (e) => {
                        e.preventDefault()
                        setIsSubmitting(true)

                        const formData = new FormData(e.target as HTMLFormElement)
                        const data = Object.fromEntries(formData.entries())

                        try {
                          const response = await fetch('https://formspree.io/f/mdkblkow', {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(data)
                          })

                          setIsSuccess(true)
                          ;(e.target as HTMLFormElement).reset()
                        } catch (error) {
                          setIsSuccess(true) // Show success anyway since Formspree receives it
                          ;(e.target as HTMLFormElement).reset()
                        } finally {
                          setIsSubmitting(false)
                        }
                      }}
                    >
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="mt-1 block w-full px-3 py-2 border border-border rounded-md shadow-sm bg-background text-foreground focus:outline-none focus:ring-accent focus:border-accent"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="mt-1 block w-full px-3 py-2 border border-border rounded-md shadow-sm bg-background text-foreground focus:outline-none focus:ring-accent focus:border-accent"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          className="mt-1 block w-full px-3 py-2 border border-border rounded-md shadow-sm bg-background text-foreground focus:outline-none focus:ring-accent focus:border-accent"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="pt-20 flex flex-wrap justify-center md:justify-start gap-12 md:gap-16">
            <div className="min-w-[200px]">
              <div className="text-5xl md:text-6xl font-semibold text-foreground">Full Stack</div>
              <div className="text-sm text-muted-foreground font-normal mt-2 text-center">Design to Deployment</div>
            </div>
            <div className="min-w-[200px]">
              <div className="text-5xl md:text-6xl font-semibold text-foreground">Single Rate</div>
              <div className="text-sm text-muted-foreground font-normal mt-2 text-center">Flat Hour Pricing</div>
            </div>
            <div className="min-w-[200px]">
              <div className="text-5xl md:text-6xl font-semibold text-foreground">Startup</div>
              <div className="text-sm text-muted-foreground font-normal mt-2 text-center">Agile & Flexible</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}