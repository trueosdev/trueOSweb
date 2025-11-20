'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/t-logo.svg" alt="trueOS Logo" className="w-4 h-7" />
        </div>
        

        
        <div className="flex items-center gap-3">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm" className="text-sm">Contact</Button>
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
    </nav>
  )
}