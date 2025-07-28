"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Building,
  FileText,
  CreditCard,
  Calculator,
  CheckCircle,
  Clock,
  AlertCircle,
  Plus,
  Download,
  Eye,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function DashboardPage() {
  const [currentStep, setCurrentStep] = useState(1)

  const steps = [
    { id: 1, title: "Business Information", status: "completed" },
    { id: 2, title: "Document Upload", status: "current" },
    { id: 3, title: "CAC Registration", status: "pending" },
    { id: 4, title: "Bank Account", status: "pending" },
    { id: 5, title: "Tax Setup", status: "pending" },
  ]

  const documents = [
    { name: "Certificate of Incorporation", status: "pending", type: "CAC Document" },
    { name: "Memorandum of Association", status: "pending", type: "CAC Document" },
    { name: "Articles of Association", status: "pending", type: "CAC Document" },
    { name: "Form CAC 2", status: "pending", type: "CAC Document" },
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
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Welcome back, John!</h1>
          <p className="text-gray-600 dark:text-gray-300">Let's continue setting up your business</p>
        </div>

        {/* Progress Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Building className="h-5 w-5 mr-2" />
              TechCorp Nigeria Limited
            </CardTitle>
            <CardDescription>Your business registration progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Overall Progress</span>
                <span className="text-sm text-gray-600">2 of 5 steps completed</span>
              </div>
              <Progress value={40} className="h-2" />

              <div className="grid gap-4 mt-6">
                {steps.map((step) => (
                  <div key={step.id} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(step.status)}
                      <span className="font-medium">{step.title}</span>
                    </div>
                    <Badge className={getStatusColor(step.status)}>{step.status}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="banking">Banking</TabsTrigger>
            <TabsTrigger value="tax">Tax & Compliance</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-purple-600" />
                    CAC Registration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Complete your Corporate Affairs Commission registration
                  </p>
                  <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 mb-4">
                    In Review
                  </Badge>
                  <Button size="sm" className="w-full">
                    View Status
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 text-purple-600" />
                    Bank Account
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Open your corporate bank account</p>
                  <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300 mb-4">
                    Pending CAC
                  </Badge>
                  <Button size="sm" variant="outline" className="w-full bg-transparent" disabled>
                    Setup Banking
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <Calculator className="h-5 w-5 mr-2 text-purple-600" />
                    Tax Setup
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Configure your tax obligations</p>
                  <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300 mb-4">
                    Not Started
                  </Badge>
                  <Button size="sm" variant="outline" className="w-full bg-transparent" disabled>
                    Setup Taxes
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Next Steps */}
            <Card>
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
                <CardDescription>What you need to do next</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <Clock className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-medium">Upload Missing Documents</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        We need your passport photograph and utility bill to complete your CAC registration.
                      </p>
                      <Button size="sm" className="mt-3">
                        Upload Documents
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Document Vault</CardTitle>
                <CardDescription>All your business documents in one place</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-medium">{doc.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{doc.type}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getStatusColor(doc.status)}>{doc.status}</Badge>
                        {doc.status === "completed" && (
                          <div className="flex space-x-1">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-center">
                  <Plus className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Upload additional documents</p>
                  <Button variant="outline" size="sm">
                    Choose Files
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="banking" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Banking Setup</CardTitle>
                <CardDescription>Open your corporate bank account</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <CreditCard className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Banking Setup Not Available</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Complete your CAC registration first to unlock banking features
                  </p>
                  <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                    Waiting for CAC Approval
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tax" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tax & Compliance</CardTitle>
                <CardDescription>Manage your tax obligations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Calculator className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Tax Setup Not Available</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Complete your business registration to access tax management features
                  </p>
                  <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300">
                    Coming Soon
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
