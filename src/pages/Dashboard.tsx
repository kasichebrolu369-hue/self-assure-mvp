import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import { 
  User, 
  FileText, 
  TrendingUp, 
  DollarSign, 
  Shield, 
  Download,
  Play,
  Calendar,
  Target
} from "lucide-react";

const Dashboard = () => {
  // Placeholder data - will be fetched from Supabase
  const profileData = {
    age: 35,
    income: 75000,
    savings: 50000,
    riskTolerance: 7,
    completeness: 85
  };

  const uploadedDocuments = [
    { name: "Life Insurance Policy.pdf", uploadDate: "2024-01-15", size: "2.3 MB" },
    { name: "Health Insurance.pdf", uploadDate: "2024-01-14", size: "1.8 MB" },
    { name: "Auto Insurance.pdf", uploadDate: "2024-01-12", size: "967 KB" }
  ];

  const simulationResults = [
    {
      strategy: "Conservative Portfolio",
      avgCost: 3200,
      bestCase: 2100,
      worstCase: 4800,
      recommendation: "Recommended for stable income",
      date: "2024-01-10"
    },
    {
      strategy: "Balanced Portfolio",
      avgCost: 2800,
      bestCase: 1900,
      worstCase: 4200,
      recommendation: "Good risk-return balance",
      date: "2024-01-08"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <Navbar />
      
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Your financial risk assessment overview</p>
          </div>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-none bg-gradient-card shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Profile</p>
                    <p className="text-2xl font-bold text-foreground">{profileData.completeness}%</p>
                    <p className="text-xs text-muted-foreground">Complete</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none bg-gradient-card shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <FileText className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Documents</p>
                    <p className="text-2xl font-bold text-foreground">{uploadedDocuments.length}</p>
                    <p className="text-xs text-muted-foreground">Uploaded</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none bg-gradient-card shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Simulations</p>
                    <p className="text-2xl font-bold text-foreground">{simulationResults.length}</p>
                    <p className="text-xs text-muted-foreground">Completed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none bg-gradient-card shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Avg. Cost</p>
                    <p className="text-2xl font-bold text-foreground">
                      ${simulationResults[0]?.avgCost.toLocaleString() || 0}
                    </p>
                    <p className="text-xs text-muted-foreground">Per year</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Information */}
            <Card className="border-none bg-gradient-card shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-primary" />
                  <span>Profile Summary</span>
                </CardTitle>
                <CardDescription>Your financial profile overview</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Age</span>
                    <span className="font-medium">{profileData.age} years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Annual Income</span>
                    <span className="font-medium">${profileData.income.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Savings</span>
                    <span className="font-medium">${profileData.savings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Risk Tolerance</span>
                    <span className="font-medium">{profileData.riskTolerance}/10</span>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Profile Completeness</span>
                    <span className="text-sm font-medium">{profileData.completeness}%</span>
                  </div>
                  <Progress value={profileData.completeness} className="h-2" />
                </div>
                <Button variant="outline" className="w-full">
                  Update Profile
                </Button>
              </CardContent>
            </Card>

            {/* Documents */}
            <Card className="border-none bg-gradient-card shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-6 w-6 text-secondary" />
                  <span>Uploaded Documents</span>
                </CardTitle>
                <CardDescription>Your insurance policy documents</CardDescription>
              </CardHeader>
              <CardContent>
                {uploadedDocuments.length > 0 ? (
                  <div className="space-y-3">
                    {uploadedDocuments.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-secondary" />
                          <div>
                            <p className="text-sm font-medium text-foreground">{doc.name}</p>
                            <p className="text-xs text-muted-foreground">{doc.size} • {doc.uploadDate}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">
                      Upload More Documents
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">No documents uploaded yet</p>
                    <Button variant="hero">Upload First Document</Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Simulation Action */}
            <Card className="border-none bg-gradient-card shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-6 w-6 text-accent" />
                  <span>Run Simulation</span>
                </CardTitle>
                <CardDescription>Generate new risk assessment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center py-6">
                  <Play className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Ready to Analyze</h3>
                  <p className="text-muted-foreground mb-6">
                    Run a comprehensive simulation based on your profile and documents
                  </p>
                  <Button variant="hero" className="w-full">
                    Run New Simulation
                  </Button>
                </div>
                <div className="text-xs text-muted-foreground text-center">
                  Simulations typically take 2-3 minutes to complete
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Simulation Results */}
          {simulationResults.length > 0 && (
            <Card className="mt-8 border-none bg-gradient-card shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-6 w-6 text-accent" />
                  <span>Recent Simulation Results</span>
                </CardTitle>
                <CardDescription>Your latest risk assessment results</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {simulationResults.map((result, index) => (
                    <div key={index} className="border border-border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-foreground">{result.strategy}</h3>
                          <p className="text-sm text-muted-foreground flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {result.date}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download Report
                        </Button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                        <div className="text-center p-3 bg-muted/50 rounded">
                          <p className="text-sm text-muted-foreground">Average Cost</p>
                          <p className="text-lg font-bold text-foreground">${result.avgCost.toLocaleString()}</p>
                        </div>
                        <div className="text-center p-3 bg-accent/10 rounded">
                          <p className="text-sm text-muted-foreground">Best Case</p>
                          <p className="text-lg font-bold text-accent">${result.bestCase.toLocaleString()}</p>
                        </div>
                        <div className="text-center p-3 bg-destructive/10 rounded">
                          <p className="text-sm text-muted-foreground">Worst Case</p>
                          <p className="text-lg font-bold text-destructive">${result.worstCase.toLocaleString()}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground bg-primary/5 p-3 rounded">
                        <strong>Recommendation:</strong> {result.recommendation}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <div className="mt-8 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground text-center">
              Connect to Supabase to access real-time data, save simulations, and generate comprehensive reports.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;