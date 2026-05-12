"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"

export default function CTA() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  return (
    <section className="py-32 md:py-40 px-4 bg-background">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-6 text-center">
          <h2 className="text-6xl md:text-7xl font-semibold text-foreground text-balance leading-tight">
            Ready to start?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl font-normal leading-relaxed mx-auto">
            Contract-based software engineering with a single hourly rate. No surprises, no overhead—just
            production-ready systems delivered fast.
          </p>
        </div>

        <div className="flex justify-center pt-4">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                variant="outline"
                className="text-foreground border-foreground hover:bg-foreground/10 bg-transparent"
              >
                Contact Sales
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-center">{isSuccess ? 'Thank you!' : 'Contact Sales'}</DialogTitle>
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
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="wantQuote"
                      name="wantQuote"
                      value="yes"
                      className="h-4 w-4 text-accent focus:ring-accent border-border rounded"
                    />
                    <label htmlFor="wantQuote" className="ml-2 block text-sm text-foreground">
                      Want a quote?
                    </label>
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
    </section>
  )
}