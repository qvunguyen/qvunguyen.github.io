import { Navigation } from "@/components/navigation"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="space-y-6 mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-balance">Get In Touch</h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Ready to transform your data into actionable insights? Let's discuss your analytics needs and explore how
              we can work together to drive your business forward.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card>
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-chart-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <Link
                          href="mailto:sarah.chen@example.com"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          sarah.chen@example.com
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-chart-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <Link
                          href="tel:+1-555-123-4567"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          +1 (555) 123-4567
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-chart-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Location</p>
                        <p className="text-muted-foreground">San Francisco, CA</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-chart-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Response Time</p>
                        <p className="text-muted-foreground">Within 24 hours</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-medium text-foreground mb-3">Connect With Me</h4>
                    <div className="flex gap-4">
                      <Link
                        href="https://linkedin.com/in/sarahchen"
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </Link>
                      <Link
                        href="https://github.com/sarahchen"
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Current Availability</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">New Projects</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-md text-sm font-medium">
                        Available
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Consulting</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-md text-sm font-medium">
                        Available
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Speaking</span>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-md text-sm font-medium">
                        Limited
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Currently accepting new projects starting in Q2 2024. For urgent requests, please mention in your
                    message.
                  </p>
                </CardContent>
              </Card>

              {/* Services */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Services Offered</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-chart-1 rounded-full flex-shrink-0"></span>
                      Dashboard Development
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-chart-1 rounded-full flex-shrink-0"></span>
                      Data Analysis & Insights
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-chart-1 rounded-full flex-shrink-0"></span>
                      Business Intelligence Strategy
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-chart-1 rounded-full flex-shrink-0"></span>
                      Analytics Training & Workshops
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-chart-1 rounded-full flex-shrink-0"></span>
                      Data Strategy Consulting
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
