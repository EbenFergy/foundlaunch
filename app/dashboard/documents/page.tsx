"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Download, Eye, Upload, Search, CheckCircle, Clock, AlertCircle, Plus } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function DocumentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const documents = [
    {
      id: 1,
      name: "Certificate of Incorporation",
      type: "CAC Document",
      category: "incorporation",
      status: "completed",
      uploadDate: "2024-01-15",
      size: "2.4 MB",
      description: "Official certificate from Corporate Affairs Commission",
    },
    {
      id: 2,
      name: "Memorandum of Association",
      type: "CAC Document",
      category: "incorporation",
      status: "completed",
      uploadDate: "2024-01-15",
      size: "1.8 MB",
      description: "Company's memorandum and articles",
    },
    {
      id: 3,
      name: "Tax Identification Number (TIN)",
      type: "Tax Document",
      category: "tax",
      status: "completed",
      uploadDate: "2024-01-20",
      size: "0.5 MB",
      description: "Federal Inland Revenue Service TIN certificate",
    },
    {
      id: 4,
      name: "VAT Registration Certificate",
      type: "Tax Document",
      category: "tax",
      status: "pending",
      uploadDate: null,
      size: null,
      description: "Value Added Tax registration certificate",
    },
    {
      id: 5,
      name: "Bank Account Opening Letter",
      type: "Banking Document",
      category: "banking",
      status: "in-progress",
      uploadDate: null,
      size: null,
      description: "Letter for corporate bank account opening",
    },
    {
      id: 6,
      name: "Director's Passport Photos",
      type: "Personal Document",
      category: "personal",
      status: "completed",
      uploadDate: "2024-01-10",
      size: "3.2 MB",
      description: "Passport photographs of all directors",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "in-progress":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "pending":
        return <AlertCircle className="h-4 w-4 text-gray-400" />
      default:
        return <FileText className="h-4 w-4 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "in-progress":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
      case "pending":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
    }
  }

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.type.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || doc.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const documentsByCategory = {
    all: documents,
    incorporation: documents.filter((doc) => doc.category === "incorporation"),
    tax: documents.filter((doc) => doc.category === "tax"),
    banking: documents.filter((doc) => doc.category === "banking"),
    personal: documents.filter((doc) => doc.category === "personal"),
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Document Vault</h1>
          <p className="text-gray-600 dark:text-gray-300">Manage all your business documents in one secure location</p>
        </div>

        {/* Document Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">{documents.length}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Total Documents</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">{documents.filter((d) => d.status === "completed").length}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Completed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">{documents.filter((d) => d.status === "in-progress").length}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">In Progress</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <AlertCircle className="h-8 w-8 text-gray-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">{documents.filter((d) => d.status === "pending").length}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Pending</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search documents..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Button variant="outline">
                <Upload className="h-4 w-4 mr-2" />
                Upload Document
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Documents Tabs */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All Documents</TabsTrigger>
            <TabsTrigger value="incorporation">Incorporation</TabsTrigger>
            <TabsTrigger value="tax">Tax & Compliance</TabsTrigger>
            <TabsTrigger value="banking">Banking</TabsTrigger>
            <TabsTrigger value="personal">Personal</TabsTrigger>
          </TabsList>

          {Object.entries(documentsByCategory).map(([category, docs]) => (
            <TabsContent key={category} value={category} className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="capitalize">{category === "all" ? "All" : category} Documents</CardTitle>
                  <CardDescription>
                    {docs.length} document{docs.length !== 1 ? "s" : ""} in this category
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {(category === "all" ? filteredDocuments : docs).map((doc) => (
                      <div
                        key={doc.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
                      >
                        <div className="flex items-center space-x-4">
                          {getStatusIcon(doc.status)}
                          <div className="flex-1">
                            <h4 className="font-medium">{doc.name}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{doc.description}</p>
                            <div className="flex items-center space-x-4 mt-1">
                              <span className="text-xs text-gray-500">{doc.type}</span>
                              {doc.uploadDate && (
                                <span className="text-xs text-gray-500">
                                  Uploaded: {new Date(doc.uploadDate).toLocaleDateString()}
                                </span>
                              )}
                              {doc.size && <span className="text-xs text-gray-500">{doc.size}</span>}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getStatusColor(doc.status)}>{doc.status.replace("-", " ")}</Badge>
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
                          {doc.status === "pending" && (
                            <Button size="sm">
                              <Upload className="h-4 w-4 mr-2" />
                              Upload
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}

                    {(category === "all" ? filteredDocuments : docs).length === 0 && (
                      <div className="text-center py-12">
                        <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium mb-2">No documents found</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {searchTerm ? "Try adjusting your search terms" : "No documents in this category yet"}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Upload Area */}
        <Card>
          <CardHeader>
            <CardTitle>Upload New Document</CardTitle>
            <CardDescription>Drag and drop files or click to browse</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-purple-400 transition-colors">
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-lg font-medium mb-2">Drop files here to upload</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Supports PDF, DOC, DOCX, JPG, PNG files up to 10MB
              </p>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Choose Files
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
