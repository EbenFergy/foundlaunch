"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building, Users, MapPin, FileText, CheckCircle, Clock } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function RegistrationPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    companyName: "TechCorp Nigeria Limited",
    businessType: "limited",
    businessActivity: "Software Development",
    shareCapital: "1000000",
    directors: [{ name: "John Doe", email: "john@example.com", phone: "+234", address: "" }],
    registeredAddress: "",
    businessAddress: "",
    sameAddress: false,
  })

  const steps = [
    { id: 1, title: "Company Details", icon: Building, completed: true },
    { id: 2, title: "Directors & Shareholders", icon: Users, completed: true },
    { id: 3, title: "Business Address", icon: MapPin, completed: false },
    { id: 4, title: "Documents", icon: FileText, completed: false },
  ]

  const nigerianStates = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "FCT",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ]

  const addDirector = () => {
    setFormData({
      ...formData,
      directors: [...formData.directors, { name: "", email: "", phone: "+234", address: "" }],
    })
  }

  const updateDirector = (index: number, field: string, value: string) => {
    const updatedDirectors = formData.directors.map((director, i) =>
      i === index ? { ...director, [field]: value } : director,
    )
    setFormData({ ...formData, directors: updatedDirectors })
  }

  const removeDirector = (index: number) => {
    if (formData.directors.length > 1) {
      const updatedDirectors = formData.directors.filter((_, i) => i !== index)
      setFormData({ ...formData, directors: updatedDirectors })
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Business Registration</h1>
          <p className="text-gray-600 dark:text-gray-300">Complete your CAC registration process</p>
        </div>

        {/* Progress Steps */}
        <Card>
          <CardHeader>
            <CardTitle>Registration Progress</CardTitle>
            <CardDescription>Complete all steps to submit your application</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Progress value={50} className="h-2" />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {steps.map((step) => (
                  <div key={step.id} className="flex items-center space-x-3 p-3 rounded-lg border">
                    <div
                      className={`p-2 rounded-full ${step.completed ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"}`}
                    >
                      {step.completed ? <CheckCircle className="h-4 w-4" /> : <step.icon className="h-4 w-4" />}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{step.title}</p>
                      <Badge className={step.completed ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}>
                        {step.completed ? "Completed" : "Pending"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Registration Form */}
        <Tabs defaultValue="company" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="company">Company Details</TabsTrigger>
            <TabsTrigger value="directors">Directors</TabsTrigger>
            <TabsTrigger value="address">Address</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          <TabsContent value="company" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Company Information</CardTitle>
                <CardDescription>Basic details about your company</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Enter your company name"
                  />
                  <p className="text-sm text-gray-500 mt-1">Must end with "Limited" or "Ltd"</p>
                </div>

                <div>
                  <Label htmlFor="businessType">Business Type</Label>
                  <Select
                    value={formData.businessType}
                    onValueChange={(value) => setFormData({ ...formData, businessType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="limited">Private Limited Company</SelectItem>
                      <SelectItem value="public">Public Limited Company</SelectItem>
                      <SelectItem value="unlimited">Unlimited Company</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="businessActivity">Primary Business Activity</Label>
                  <Textarea
                    id="businessActivity"
                    value={formData.businessActivity}
                    onChange={(e) => setFormData({ ...formData, businessActivity: e.target.value })}
                    placeholder="Describe your main business activities"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="shareCapital">Authorized Share Capital (₦)</Label>
                  <Input
                    id="shareCapital"
                    type="number"
                    value={formData.shareCapital}
                    onChange={(e) => setFormData({ ...formData, shareCapital: e.target.value })}
                    placeholder="1000000"
                  />
                  <p className="text-sm text-gray-500 mt-1">Minimum ₦100,000 for private limited company</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="directors" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Directors & Shareholders</CardTitle>
                <CardDescription>Add company directors and shareholders</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {formData.directors.map((director, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Director {index + 1}</h4>
                      {formData.directors.length > 1 && (
                        <Button variant="outline" size="sm" onClick={() => removeDirector(index)}>
                          Remove
                        </Button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Full Name</Label>
                        <Input
                          value={director.name}
                          onChange={(e) => updateDirector(index, "name", e.target.value)}
                          placeholder="Enter full name"
                        />
                      </div>
                      <div>
                        <Label>Email Address</Label>
                        <Input
                          type="email"
                          value={director.email}
                          onChange={(e) => updateDirector(index, "email", e.target.value)}
                          placeholder="Enter email address"
                        />
                      </div>
                      <div>
                        <Label>Phone Number</Label>
                        <Input
                          value={director.phone}
                          onChange={(e) => updateDirector(index, "phone", e.target.value)}
                          placeholder="+234"
                        />
                      </div>
                      <div>
                        <Label>Residential Address</Label>
                        <Textarea
                          value={director.address}
                          onChange={(e) => updateDirector(index, "address", e.target.value)}
                          placeholder="Enter residential address"
                          rows={2}
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <Button onClick={addDirector} variant="outline" className="w-full bg-transparent">
                  Add Another Director
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="address" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Business Address</CardTitle>
                <CardDescription>Provide your registered and business addresses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="registeredAddress">Registered Office Address</Label>
                  <Textarea
                    id="registeredAddress"
                    value={formData.registeredAddress}
                    onChange={(e) => setFormData({ ...formData, registeredAddress: e.target.value })}
                    placeholder="Enter your registered office address"
                    rows={3}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="sameAddress"
                    checked={formData.sameAddress}
                    onCheckedChange={(checked) => setFormData({ ...formData, sameAddress: checked as boolean })}
                  />
                  <Label htmlFor="sameAddress">Business address is the same as registered address</Label>
                </div>

                {!formData.sameAddress && (
                  <div>
                    <Label htmlFor="businessAddress">Business Address</Label>
                    <Textarea
                      id="businessAddress"
                      value={formData.businessAddress}
                      onChange={(e) => setFormData({ ...formData, businessAddress: e.target.value })}
                      placeholder="Enter your business address"
                      rows={3}
                    />
                  </div>
                )}

                <div>
                  <Label htmlFor="state">State</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      {nigerianStates.map((state) => (
                        <SelectItem key={state} value={state.toLowerCase()}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Required Documents</CardTitle>
                <CardDescription>Upload the necessary documents for registration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  {[
                    {
                      name: "Passport Photographs",
                      description: "Recent passport photos of all directors",
                      required: true,
                    },
                    { name: "Utility Bills", description: "Recent utility bills for all directors", required: true },
                    {
                      name: "Valid ID Cards",
                      description: "National ID, Driver's License, or International Passport",
                      required: true,
                    },
                    { name: "Proof of Address", description: "Evidence of registered office address", required: true },
                    {
                      name: "Memorandum of Association",
                      description: "Will be prepared by our legal team",
                      required: false,
                    },
                    {
                      name: "Articles of Association",
                      description: "Will be prepared by our legal team",
                      required: false,
                    },
                  ].map((doc, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium flex items-center">
                            {doc.name}
                            {doc.required && <span className="text-red-500 ml-1">*</span>}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{doc.description}</p>
                        </div>
                        <div className="ml-4">
                          {doc.required ? (
                            <Button size="sm">Upload</Button>
                          ) : (
                            <Badge className="bg-green-100 text-green-800">Auto-generated</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-yellow-600 mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-medium text-yellow-800 dark:text-yellow-200">Document Review</h4>
                      <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                        Our legal team will review all documents before submission to CAC. This typically takes 1-2
                        business days.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <Button variant="outline">Save Draft</Button>
          <Button className="bg-purple-600 hover:bg-purple-700">Submit Application</Button>
        </div>
      </div>
    </DashboardLayout>
  )
}
