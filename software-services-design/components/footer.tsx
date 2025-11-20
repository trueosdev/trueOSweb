'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { useState } from 'react'

export default function Footer() {
  const [aboutOpen, setAboutOpen] = useState(false)
  const [missionsOpen, setMissionsOpen] = useState(false)

  return (
    <footer className="bg-background text-foreground py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col items-start">
            <img src="/true-logo.svg" alt="trueOS Logo" className="w-14 h-8 mb-4" />
            <p className="text-sm text-muted-foreground text-left">Contract-based software engineering for custom business platforms.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#capabilities" className="text-muted-foreground hover:text-foreground transition">Capabilities</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <Dialog open={aboutOpen} onOpenChange={setAboutOpen}>
                <DialogTrigger asChild>
                  <li><button className="text-muted-foreground hover:text-foreground transition text-left">About</button></li>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle className="text-center">About trueOS</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      trueOS is a specialized contractor team providing high-speed deployment of custom business platforms. We focus on delivering complete, production-ready software systems for CRMs, internal portals, reporting systems, and full-stack applications.
                    </p>
                    <p>
                      Founded with a startup mindset, we operate through trueOS to offer contract-based software engineering with a single hourly rate. Our dedicated engineers handle all communication and development, supported by security and UI specialists as needed.
                    </p>
                    <p>
                      We cover the full stack from architecture to deployment to interface, ensuring fast, flexible, and scalable solutions for modern businesses.
                    </p>
                  </div>
                  <Button onClick={() => setAboutOpen(false)} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Close
                  </Button>
                </DialogContent>
              </Dialog>
              <Dialog open={missionsOpen} onOpenChange={setMissionsOpen}>
                <DialogTrigger asChild>
                  <li><button className="text-muted-foreground hover:text-foreground transition text-left">Missions</button></li>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle className="text-center">Our Missions & Goals</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Mission</h4>
                      <p>
                        As a Christ-oriented company, trueOS is committed to using technology to further God's kingdom. We provide exceptional software engineering services while actively working to help others, build up small companies, and make a positive impact in the communities we serve.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Goals</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Deliver high-quality software solutions that empower small businesses and startups</li>
                        <li>Donate a portion of profits to charitable causes and community support</li>
                        <li>Help others through mentorship, training, and technology education</li>
                        <li>Further the gospel by integrating faith-based values into our work and partnerships</li>
                        <li>Maintain Christ-centered business practices with integrity, transparency, and service</li>
                        <li>Build lasting relationships that glorify God and benefit our clients</li>
                      </ul>
                    </div>
                  </div>
                  <Button onClick={() => setMissionsOpen(false)} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Close
                  </Button>
                </DialogContent>
              </Dialog>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>(256) 245-2853</li>
              <li>trueos.dev@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-sm text-muted-foreground text-center">
          <p>&copy; 2025 trueOS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}