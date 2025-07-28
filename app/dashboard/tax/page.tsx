"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calculator,
  FileText,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
  Shield,
  Bell,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function TaxPage() {
  const [taxYear, setTaxYear] = useState("2024")

  const taxObligations = [
    {
      id: 1,
      type: "Company Income Tax",
      description: "Annual corporate income tax filing",
      dueDate: "2024-03-31",
      status: "pending",
      amount: "₦0",
      frequency: "Annual",
    },
    {
      id: 2,
      type: "Value Added Tax (VAT)",
      description: "Monthly VAT returns",
      dueDate: "2024-02-21",
      status: "current",
      amount: "₦0",
      frequency: "Monthly",
    },
    {
      id: 3,
      type: "Withholding Tax",
      description: "WHT on payments made",
      dueDate: "2024-02-21",
      status: "compliant",
      amount: "₦0",
      frequency: "Monthly",
    },
    {
      id: 4,
      type: "Pay As You Earn (PAYE)",
      description: "Employee income tax deductions",
      dueDate: "2024-02-10",
      status: "not-applicable",
      amount: "₦0",
      frequency: "Monthly",
    },
  ]

  const complianceChecklist = [
    { item: "TIN Registration", status: "completed", description: "Tax Identification Number obtained" },
    { item: "VAT Registration", status: "pending", description: "Register for Value Added Tax" },
    { item: "Tax Consultant Assignment", status: "completed", description: "Professional tax advisor assigned" },
    { item: "Accounting System Setup", status: "pending", description: "Set up proper bookkeeping system" },
    { item: "First Tax Filing", status: "pending", description: "Submit initial tax returns" },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
      case "compliant":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "current":
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "overdue":
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
      case "compliant":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "current":
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
      case "overdue":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
      case "not-applicable":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const getDaysUntilDue = (dueDate: string) => {
    const today = new Date()
    const due = new Date(dueDate)
    const diffTime = due.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Tax & Compliance</h1>
          <p className="text-gray-600 dark:text-gray-300">Manage your tax obligations and stay compliant</p>
        </div>

        {/* Tax Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Calculator className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">4</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Tax Obligations</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">1</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Compliant</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">2</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Pending</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">₦0</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Tax Liability</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Compliance Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Compliance Setup Progress</CardTitle>
            <CardDescription>Complete these steps to ensure full tax compliance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Setup Progress</span>
                <span className="text-sm text-gray-600">3 of 5 completed</span>
              </div>
              <Progress value={60} className="h-2" />

              <div className="space-y-3 mt-6">
                {complianceChecklist.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(item.status)}
                      <div>
                        <p className="font-medium">{item.item}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(item.status)}>{item.status.replace("-", " ")}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tax Management Tabs */}
        <Tabs defaultValue="obligations" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="obligations">Tax Obligations</TabsTrigger>
            <TabsTrigger value="filings">Tax Filings</TabsTrigger>
            <TabsTrigger value="calendar">Tax Calendar</TabsTrigger>
            <TabsTrigger value="support">Expert Support</TabsTrigger>
          </TabsList>

          <TabsContent value="obligations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Current Tax Obligations</CardTitle>
                <CardDescription>Overview of your tax requirements and deadlines</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {taxObligations.map((obligation) => (
                    <div key={obligation.id} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          {getStatusIcon(obligation.status)}
                          <div className="flex-1">
                            <h4 className="font-medium">{obligation.type}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{obligation.description}</p>
                            <div className="flex items-center space-x-4 mt-2">
                              <span className="text-xs text-gray-500">Due: {formatDate(obligation.dueDate)}</span>
                              <span className="text-xs text-gray-500">
                                {getDaysUntilDue(obligation.dueDate)} days remaining
                              </span>
                              <span className="text-xs text-gray-500">{obligation.frequency}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className={getStatusColor(obligation.status)}>
                            {obligation.status.replace("-", " ")}
                          </Badge>
                          <p className="text-sm font-medium mt-2">{obligation.amount}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="filings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tax Filing History</CardTitle>
                <CardDescription>View and manage your tax submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No Tax Filings Yet</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Your tax filings will appear here once you start submitting returns
                  </p>
                  <Button variant="outline">Prepare First Filing</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calendar" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tax Calendar {taxYear}</CardTitle>
                <CardDescription>Important tax dates and deadlines</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { date: "2024-01-31", event: "Annual Tax Return Filing Deadline", type: "deadline" },
                    { date: "2024-02-21", event: "VAT Return Due", type: "monthly" },
                    { date: "2024-03-21", event: "VAT Return Due", type: "monthly" },
                    { date: "2024-03-31", event: "Company Income Tax Due", type: "deadline" },
                    { date: "2024-04-21", event: "VAT Return Due", type: "monthly" },
                    { date: "2024-06-30", event: "Mid-Year Tax Review", type: "review" },
                  ].map((event, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-purple-600" />
                        <div>
                          <p className="font-medium">{event.event}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{formatDate(event.date)}</p>
                        </div>
                      </div>
                      <Badge variant="outline">{event.type}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="support" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Expert Tax Support</CardTitle>
                <CardDescription>Get help from qualified tax professionals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <Shield className="h-8 w-8 text-purple-600 mb-2" />
                      <CardTitle className="text-lg">Dedicated Tax Consultant</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                        Get assigned a qualified tax professional who understands your business
                      </p>
                      <Button className="w-full">Request Consultation</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Bell className="h-8 w-8 text-purple-600 mb-2" />
                      <CardTitle className="text-lg">Compliance Monitoring</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                        Automated alerts and reminders for all tax deadlines and obligations
                      </p>
                      <Button className="w-full bg-transparent" variant="outline">
                        Enable Alerts
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="flex items-start">
                    <Calculator className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-medium text-blue-800 dark:text-blue-200">Annual Tax Package</h4>
                      <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                        Complete tax management including filing, compliance monitoring, and expert support for
                        ₦150,000/year
                      </p>
                      <Button className="mt-3" size="sm">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
