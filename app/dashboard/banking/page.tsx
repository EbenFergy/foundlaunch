"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Building2, CheckCircle, Clock, AlertCircle, ArrowRight, Shield, Zap, Globe } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function BankingPage() {
  const [selectedBank, setSelectedBank] = useState("")
  const [accountType, setAccountType] = useState("")

  const partnerBanks = [
    {
      id: "gtbank",
      name: "Guaranty Trust Bank",
      logo: "/placeholder.svg?height=40&width=120",
      features: ["Online Banking", "Mobile App", "International Transfers", "24/7 Support"],
      accountTypes: ["Current Account", "Savings Account", "Domiciliary Account"],
      minimumBalance: "₦100,000",
      monthlyFee: "₦1,000",
      rating: 4.5,
    },
    {
      id: "zenith",
      name: "Zenith Bank",
      logo: "/placeholder.svg?height=40&width=120",
      features: ["Internet Banking", "Mobile Banking", "Trade Finance", "Cash Management"],
      accountTypes: ["Current Account", "Savings Account", "Fixed Deposit"],
      minimumBalance: "₦50,000",
      monthlyFee: "₦500",
      rating: 4.3,
    },
    {
      id: "access",
      name: "Access Bank",
      logo: "/placeholder.svg?height=40&width=120",
      features: ["Digital Banking", "PayWithCapture", "International Banking", "SME Banking"],
      accountTypes: ["Current Account", "Savings Account", "USD Account"],
      minimumBalance: "₦25,000",
      monthlyFee: "₦300",
      rating: 4.2,
    },
    {
      id: "firstbank",
      name: "First Bank of Nigeria",
      logo: "/placeholder.svg?height=40&width=120",
      features: ["FirstMobile", "Online Banking", "Corporate Banking", "Treasury Services"],
      accountTypes: ["Current Account", "Call Deposit", "Fixed Deposit"],
      minimumBalance: "₦100,000",
      monthlyFee: "₦1,500",
      rating: 4.1,
    },
  ]

  const applicationSteps = [
    { id: 1, title: "Choose Bank", status: "current", description: "Select your preferred banking partner" },
    { id: 2, title: "Submit Application", status: "pending", description: "Complete the account opening form" },
    { id: 3, title: "Document Review", status: "pending", description: "Bank reviews your documents" },
    { id: 4, title: "Account Activation", status: "pending", description: "Receive account details and cards" },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "current":
        return <Clock className="h-5 w-5 text-purple-600" />
      default:
        return <AlertCircle className="h-5 w-5 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "current":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Banking Setup</h1>
          <p className="text-gray-600 dark:text-gray-300">Open your corporate bank account with our trusted partners</p>
        </div>

        {/* Banking Process Steps */}
        <Card>
          <CardHeader>
            <CardTitle>Account Opening Process</CardTitle>
            <CardDescription>Follow these steps to open your corporate bank account</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {applicationSteps.map((step) => (
                <div key={step.id} className="flex items-center space-x-3 p-3 rounded-lg border">
                  <div className="flex-shrink-0">{getStatusIcon(step.status)}</div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{step.title}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">{step.description}</p>
                    <Badge className={`${getStatusColor(step.status)} mt-2`}>{step.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Banking Options */}
        <Tabs defaultValue="banks" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="banks">Choose Bank</TabsTrigger>
            <TabsTrigger value="application">Application</TabsTrigger>
            <TabsTrigger value="status">Status</TabsTrigger>
          </TabsList>

          <TabsContent value="banks" className="space-y-6">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Our Banking Partners</CardTitle>
                  <CardDescription>Choose from our carefully selected banking partners</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {partnerBanks.map((bank) => (
                      <Card
                        key={bank.id}
                        className={`cursor-pointer transition-all hover:shadow-lg ${selectedBank === bank.id ? "ring-2 ring-purple-600" : ""}`}
                        onClick={() => setSelectedBank(bank.id)}
                      >
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <img src={bank.logo || "/placeholder.svg"} alt={bank.name} className="h-10" />
                            <div className="flex items-center space-x-1">
                              <span className="text-sm font-medium">{bank.rating}</span>
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <span
                                    key={i}
                                    className={`text-xs ${i < Math.floor(bank.rating) ? "text-yellow-400" : "text-gray-300"}`}
                                  >
                                    ★
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <CardTitle className="text-lg">{bank.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium text-sm mb-2">Key Features</h4>
                              <div className="grid grid-cols-2 gap-1">
                                {bank.features.map((feature, index) => (
                                  <div key={index} className="flex items-center text-xs">
                                    <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                                    {feature}
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="font-medium">Min. Balance:</span>
                                <p className="text-gray-600 dark:text-gray-300">{bank.minimumBalance}</p>
                              </div>
                              <div>
                                <span className="font-medium">Monthly Fee:</span>
                                <p className="text-gray-600 dark:text-gray-300">{bank.monthlyFee}</p>
                              </div>
                            </div>

                            <Button
                              className={`w-full ${selectedBank === bank.id ? "bg-purple-600 hover:bg-purple-700" : ""}`}
                              variant={selectedBank === bank.id ? "default" : "outline"}
                            >
                              {selectedBank === bank.id ? "Selected" : "Select Bank"}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {selectedBank && (
                    <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Ready to proceed?</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            Continue with {partnerBanks.find((b) => b.id === selectedBank)?.name}
                          </p>
                        </div>
                        <Button className="bg-purple-600 hover:bg-purple-700">
                          Continue <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="application" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Bank Account Application</CardTitle>
                <CardDescription>Complete your corporate account application</CardDescription>
              </CardHeader>
              <CardContent>
                {!selectedBank ? (
                  <div className="text-center py-12">
                    <CreditCard className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Select a Bank First</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Please choose a banking partner from the previous tab to continue
                    </p>
                    <Button variant="outline">Go Back to Bank Selection</Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="flex items-center">
                        <Building2 className="h-5 w-5 text-blue-600 mr-3" />
                        <div>
                          <h4 className="font-medium">
                            Selected Bank: {partnerBanks.find((b) => b.id === selectedBank)?.name}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            We'll help you open your account with this bank
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="accountType">Account Type</Label>
                        <Select value={accountType} onValueChange={setAccountType}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select account type" />
                          </SelectTrigger>
                          <SelectContent>
                            {partnerBanks
                              .find((b) => b.id === selectedBank)
                              ?.accountTypes.map((type) => (
                                <SelectItem key={type} value={type.toLowerCase().replace(" ", "-")}>
                                  {type}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="initialDeposit">Initial Deposit Amount (₦)</Label>
                        <Input id="initialDeposit" type="number" placeholder="Enter initial deposit amount" />
                        <p className="text-sm text-gray-500 mt-1">
                          Minimum: {partnerBanks.find((b) => b.id === selectedBank)?.minimumBalance}
                        </p>
                      </div>

                      <div>
                        <Label htmlFor="businessPurpose">Primary Business Purpose</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select business purpose" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="trading">Trading</SelectItem>
                            <SelectItem value="services">Services</SelectItem>
                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="consulting">Consulting</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expectedMonthlyTurnover">Expected Monthly Turnover (₦)</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0-1m">₦0 - ₦1,000,000</SelectItem>
                              <SelectItem value="1m-5m">₦1,000,000 - ₦5,000,000</SelectItem>
                              <SelectItem value="5m-10m">₦5,000,000 - ₦10,000,000</SelectItem>
                              <SelectItem value="10m+">₦10,000,000+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="expectedTransactions">Expected Monthly Transactions</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-50">1 - 50</SelectItem>
                              <SelectItem value="51-100">51 - 100</SelectItem>
                              <SelectItem value="101-500">101 - 500</SelectItem>
                              <SelectItem value="500+">500+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                      <div className="flex items-start">
                        <Shield className="h-5 w-5 text-yellow-600 mt-0.5 mr-3" />
                        <div>
                          <h4 className="font-medium text-yellow-800 dark:text-yellow-200">Required Documents</h4>
                          <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                            Your CAC documents and director information will be automatically shared with the bank. No
                            additional paperwork required!
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-purple-600 hover:bg-purple-700">Submit Application</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="status" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Application Status</CardTitle>
                <CardDescription>Track your bank account opening progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Clock className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No Active Application</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    You haven't submitted a bank account application yet
                  </p>
                  <Button variant="outline">Start Application</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Benefits Section */}
        <Card>
          <CardHeader>
            <CardTitle>Why Bank with Our Partners?</CardTitle>
            <CardDescription>Benefits of opening your account through NigeriaAtlas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-medium mb-2">Fast Processing</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Pre-approved applications with faster processing times
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-medium mb-2">Reduced Requirements</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Streamlined documentation using your CAC registration
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-medium mb-2">Ongoing Support</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Dedicated support for all your banking needs</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
