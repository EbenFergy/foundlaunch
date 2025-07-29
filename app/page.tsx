import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, FileText, Building, CreditCard, Calculator, Shield, Users, Globe } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/20 dark:to-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-purple-600">NigeriaAtlas</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-purple-600 dark:text-gray-300">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-purple-600 dark:text-gray-300">
              Pricing
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-purple-600 dark:text-gray-300">
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
            Trusted by 1000+ Nigerian Entrepreneurs
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            Start your Nigerian business in minutes
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Register your company with CAC, open a bank account, and manage your tax obligations—all from one platform.
            We handle the paperwork, you focus on building.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6">
                Start Your Company <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
              Watch Demo
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">No hidden fees • 7-day money-back guarantee</p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything you need to start and run your business</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              From incorporation to ongoing compliance, we've got you covered
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <FileText className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>CAC Registration</CardTitle>
                <CardDescription>
                  Complete business registration with Corporate Affairs Commission including name reservation and
                  incorporation
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CreditCard className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Bank Account Setup</CardTitle>
                <CardDescription>
                  Seamless integration with major Nigerian banks to open your corporate account once registration is
                  complete
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Calculator className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Tax Management</CardTitle>
                <CardDescription>
                  Annual tax filing, VAT registration, and ongoing compliance with FIRS requirements handled by experts
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Document Vault</CardTitle>
                <CardDescription>
                  Secure storage for all your business documents including certificates, agreements, and compliance
                  records
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Legal Support</CardTitle>
                <CardDescription>
                  Access to qualified Nigerian lawyers for ongoing legal advice and document review
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Global Ready</CardTitle>
                <CardDescription>
                  Set up your business for international operations with proper structure and documentation
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple 4-step process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Get your business up and running in as little as 7 days
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Sign Up",
                description: "Create your account and choose your business structure",
                icon: Users,
              },
              {
                step: "2",
                title: "Submit Details",
                description: "Provide business information and required documents",
                icon: FileText,
              },
              {
                step: "3",
                title: "We Handle Registration",
                description: "Our lawyers process your CAC registration",
                icon: Building,
              },
              {
                step: "4",
                title: "Get Your Business",
                description: "Receive documents and open your bank account",
                icon: CheckCircle,
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Transparent pricing</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">One-time fee, no hidden costs</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl">Limited Company</CardTitle>
                <CardDescription>Perfect for most businesses</CardDescription>
                <div className="text-4xl font-bold text-purple-600">₦150,000</div>
                <p className="text-sm text-gray-500">One-time fee</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "CAC registration and incorporation",
                    "Company seal and documents",
                    "Tax identification numbers",
                    "Bank account setup assistance",
                    "1 year of document storage",
                    "Basic legal support",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-600 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600">Most Popular</Badge>
              <CardHeader>
                <CardTitle className="text-2xl">Business Package</CardTitle>
                <CardDescription>For serious entrepreneurs</CardDescription>
                <div className="text-4xl font-bold text-purple-600">₦250,000</div>
                <p className="text-sm text-gray-500">One-time fee</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Everything in Limited Company",
                    "VAT registration",
                    "Corporate bank account opening",
                    "Annual tax filing (1st year)",
                    "Unlimited document storage",
                    "Priority legal support",
                    "Compliance monitoring",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">Get Started</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to start your Nigerian business?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of entrepreneurs who trust NigeriaAtlas</p>
          <Link href="/signup">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Start Your Company Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building className="h-6 w-6" />
                <span className="text-xl font-bold">NigeriaAtlas</span>
              </div>
              <p className="text-gray-400">Making business registration in Nigeria simple and accessible.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Legal
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NigeriaAtlas. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
