import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-balance mb-4">Resume</h1>
              <p className="text-xl text-muted-foreground">
                Download my complete resume or view the web-friendly version below.
              </p>
            </div>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/sarah-chen-resume.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>

          {/* Resume Content */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card>
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">Sarah Chen</h2>
                  <p className="text-xl text-muted-foreground">Senior Data Analyst</p>
                  <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>sarah.chen@example.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>San Francisco, CA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin className="h-4 w-4" />
                      <Link href="https://linkedin.com/in/sarahchen" className="hover:text-foreground">
                        LinkedIn
                      </Link>
                    </div>
                    <div className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      <Link href="https://github.com/sarahchen" className="hover:text-foreground">
                        GitHub
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Professional Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Results-driven Senior Data Analyst with 5+ years of experience transforming complex datasets into
                  actionable business insights. Proven track record of delivering $8M+ in measurable business impact
                  through advanced analytics, predictive modeling, and strategic data visualization. Expert in building
                  scalable analytics solutions that drive decision-making across marketing, sales, operations, and
                  executive teams.
                </p>
              </CardContent>
            </Card>

            {/* Core Competencies */}
            <Card>
              <CardHeader>
                <CardTitle>Core Competencies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technical Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "SQL", "R", "Tableau", "Power BI", "Excel"].map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Analytics</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Statistical Modeling", "A/B Testing", "Predictive Analytics", "Machine Learning"].map(
                        (skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ),
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Business</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Strategy", "Stakeholder Management", "Data Storytelling", "Process Optimization"].map(
                        (skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Experience */}
            <Card>
              <CardHeader>
                <CardTitle>Professional Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Current Role */}
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Senior Data Analyst</h3>
                      <p className="text-muted-foreground">TechCorp Solutions • San Francisco, CA</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2022 — Present</span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-chart-1 mr-2 flex-shrink-0 mt-1">•</span>
                      <span>
                        Led cross-functional analytics initiatives resulting in $2.5M annual cost savings through
                        process optimization and predictive modeling
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-chart-1 mr-2 flex-shrink-0 mt-1">•</span>
                      <span>
                        Built automated reporting dashboards serving 50+ stakeholders across marketing, sales, and
                        operations teams
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-chart-1 mr-2 flex-shrink-0 mt-1">•</span>
                      <span>
                        Developed customer churn prediction model with 94% accuracy, improving retention by 23% and
                        saving $800K annually
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-chart-1 mr-2 flex-shrink-0 mt-1">•</span>
                      <span>
                        Mentored 3 junior analysts and established data governance best practices across the
                        organization
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Previous Role */}
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Data Analyst</h3>
                      <p className="text-muted-foreground">Growth Analytics Inc • Austin, TX</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2020 — 2022</span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-chart-1 mr-2 flex-shrink-0 mt-1">•</span>
                      <span>
                        Analyzed customer behavior data for 15+ SaaS clients, identifying growth opportunities worth
                        $5M+ in revenue
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-chart-1 mr-2 flex-shrink-0 mt-1">•</span>
                      <span>
                        Created comprehensive A/B testing framework that increased conversion rates by average of 18%
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-chart-1 mr-2 flex-shrink-0 mt-1">•</span>
                      <span>
                        Designed and maintained ETL pipelines processing 10M+ daily events with 99.9% accuracy
                      </span>
                    </li>
                  </ul>
                </div>

                {/* First Role */}
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Junior Data Analyst</h3>
                      <p className="text-muted-foreground">DataFirst Consulting • Chicago, IL</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2019 — 2020</span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-chart-1 mr-2 flex-shrink-0 mt-1">•</span>
                      <span>Performed statistical analysis on market research data for Fortune 500 clients</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-chart-1 mr-2 flex-shrink-0 mt-1">•</span>
                      <span>Developed interactive Tableau dashboards reducing report generation time by 75%</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Master of Science in Data Science</h3>
                    <p className="text-muted-foreground">Stanford University • Stanford, CA</p>
                    <p className="text-sm text-muted-foreground">
                      Specialization in Machine Learning and Statistical Modeling
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground">2019</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Bachelor of Arts in Economics</h3>
                    <p className="text-muted-foreground">UC Berkeley • Berkeley, CA</p>
                    <p className="text-sm text-muted-foreground">Magna Cum Laude, Phi Beta Kappa</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2017</span>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <h4 className="font-semibold text-foreground">Tableau Desktop Certified Professional</h4>
                    <p className="text-sm text-muted-foreground">Tableau • 2023</p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-foreground">Google Analytics Individual Qualification</h4>
                    <p className="text-sm text-muted-foreground">Google • 2022</p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-foreground">AWS Certified Cloud Practitioner</h4>
                    <p className="text-sm text-muted-foreground">Amazon Web Services • 2022</p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-foreground">Microsoft Power BI Data Analyst Associate</h4>
                    <p className="text-sm text-muted-foreground">Microsoft • 2021</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Key Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-chart-2 mr-2 flex-shrink-0 mt-1">→</span>
                    <span>
                      <strong className="text-foreground">$8M+ Business Impact:</strong> Delivered measurable results
                      through analytics-driven initiatives across multiple organizations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-chart-2 mr-2 flex-shrink-0 mt-1">→</span>
                    <span>
                      <strong className="text-foreground">94% Model Accuracy:</strong> Built industry-leading customer
                      churn prediction model with exceptional performance
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-chart-2 mr-2 flex-shrink-0 mt-1">→</span>
                    <span>
                      <strong className="text-foreground">50+ Stakeholders Served:</strong> Created scalable analytics
                      solutions supporting decision-making across entire organizations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-chart-2 mr-2 flex-shrink-0 mt-1">→</span>
                    <span>
                      <strong className="text-foreground">Team Leadership:</strong> Successfully mentored junior
                      analysts and established data governance best practices
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Footer CTA */}
          <div className="mt-16 text-center space-y-6 p-8 bg-secondary/50 rounded-lg">
            <h3 className="text-xl font-semibold text-foreground">Ready to discuss opportunities?</h3>
            <p className="text-muted-foreground">
              I'm always interested in challenging projects and collaborative opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/sarah-chen-resume.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
