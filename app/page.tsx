import { ArrowRight, CheckCircle, Code, Globe, Mail, Phone, Smartphone, Users } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <Code className="h-6 w-6 text-emerald-600" />
          <span className="ml-2 text-lg font-bold">Shepherd Solutions Limited</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Professional Web Development
                  <span className="block text-emerald-600">Contractor Services</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Expert Laravel and JavaScript development services. From custom web applications to complete website
                  solutions, I deliver high-quality code that drives your business forward.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Services</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive web development solutions tailored to your business needs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle>Laravel Development</CardTitle>
                  <CardDescription>
                    Expert PHP Laravel development for robust web applications, APIs, and enterprise solutions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Custom Web Applications
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      RESTful API Development
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Database Design & Optimization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Legacy System Modernization
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center mb-4">
                    <Smartphone className="h-6 w-6 text-yellow-600" />
                  </div>
                  <CardTitle>JavaScript Development</CardTitle>
                  <CardDescription>
                    Modern JavaScript solutions including React, Node.js, and full-stack development.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      React & Next.js Applications
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Node.js Backend Services
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Progressive Web Apps
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Performance Optimization
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle>Website Creation</CardTitle>
                  <CardDescription>
                    Complete website solutions from concept to deployment for businesses of all sizes.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Business Websites
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      E-commerce Solutions
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Content Management Systems
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Responsive Design
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About Shepherd Solutions Limited
                </h2>
                <p className="max-w-[600px] text-gray-600 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                  As an experienced web development contractor, I specialize in delivering high-quality, scalable
                  solutions using modern technologies. With expertise in Laravel and JavaScript, I help businesses
                  transform their ideas into powerful web applications.
                </p>
                <p className="max-w-[600px] text-gray-600 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                  Whether you need a simple business website or a complex web application, I provide personalized
                  service and technical excellence to ensure your project's success.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <Users className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-bold">Client-Focused Approach</h3>
                      <p className="text-sm text-gray-600">
                        Dedicated to understanding and delivering on your specific requirements
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-bold">Quality Assurance</h3>
                      <p className="text-sm text-gray-600">
                        Rigorous testing and code review processes ensure reliable solutions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <ArrowRight className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-bold">Timely Delivery</h3>
                      <p className="text-sm text-gray-600">Committed to meeting deadlines and exceeding expectations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to start your next project? Let's discuss how I can help bring your vision to life.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-emerald-600" />
                      <span>contact@shepherdsolutions.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-emerald-600" />
                      <span>+44 (0) 123 456 7890</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Why Choose Shepherd Solutions?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Experienced contractor with proven track record
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Competitive rates and flexible engagement models
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Clear communication throughout the project
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Ongoing support and maintenance available
                    </li>
                  </ul>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>Fill out the form below and I'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First name
                      </label>
                      <Input id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last name
                      </label>
                      <Input id="last-name" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" placeholder="Enter your email" type="email" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="project-type" className="text-sm font-medium">
                      Project Type
                    </label>
                    <Input id="project-type" placeholder="e.g., Laravel Development, Website Creation" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      className="min-h-[100px]"
                      id="message"
                      placeholder="Tell me about your project requirements..."
                    />
                  </div>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Send Message</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-600">© 2024 Shepherd Solutions Limited. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  )
}
