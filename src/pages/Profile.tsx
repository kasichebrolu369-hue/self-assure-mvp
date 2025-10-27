"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import { User, DollarSign, Heart, Target } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Profile = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    income: "",
    savings: "",
    dependents: "",
    riskTolerance: "",
    goals: "",
    healthStatus: ""
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    try {
      const {
        age,
        gender,
        income,
        savings,
        dependents,
        riskTolerance,
        goals,
        healthStatus
      } = formData;

      const {
        data: { user },
        error: authError
      } = await supabase.auth.getUser();

      if (authError || !user) {
        console.error("User not authenticated:", authError);
        alert("Please log in to save your profile.");
        return;
      }

      const { error } = await supabase
        .from("user_profiles")
        .upsert(
          [{
            user_id: user.id,
            age: parseInt(age),
            gender,
            income: parseFloat(income),
            savings: parseFloat(savings),
            dependents: dependents === "4+" ? 4 : parseInt(dependents),
            risk_tolerance: parseInt(riskTolerance),
            goals,
            health_status: healthStatus,
          }],
          { onConflict: 'user_id' }
        );

      if (error) {
        console.error("Error saving profile:", error.message);
        alert("Failed to save profile.");
      } else {
        alert("✅ Profile saved successfully!");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("Something went wrong.");
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <User className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground">Personal Information</h2>
              <p className="text-muted-foreground">Tell us a bit about yourself</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Enter your age"
                  value={formData.age}
                  onChange={(e) => handleInputChange("age", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <DollarSign className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground">Financial Information</h2>
              <p className="text-muted-foreground">Help us understand your financial situation</p>
            </div>
            <div className="space-y-4">
              <Label htmlFor="income">Annual Income</Label>
              <Input
                id="income"
                type="number"
                placeholder="Enter your annual income"
                value={formData.income}
                onChange={(e) => handleInputChange("income", e.target.value)}
              />
              <Label htmlFor="savings">Total Savings</Label>
              <Input
                id="savings"
                type="number"
                placeholder="Enter your total savings"
                value={formData.savings}
                onChange={(e) => handleInputChange("savings", e.target.value)}
              />
              <Label htmlFor="dependents">Number of Dependents</Label>
              <Select value={formData.dependents} onValueChange={(value) => handleInputChange("dependents", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select number of dependents" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4+">4 or more</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Target className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground">Risk & Goals</h2>
              <p className="text-muted-foreground">Define your risk tolerance and financial goals</p>
            </div>
            <div className="space-y-4">
              <Label htmlFor="riskTolerance">Risk Tolerance (1-10)</Label>
              <Select value={formData.riskTolerance} onValueChange={(value) => handleInputChange("riskTolerance", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select risk tolerance" />
                </SelectTrigger>
                <SelectContent>
                  {[...Array(10)].map((_, i) => (
                    <SelectItem key={i + 1} value={String(i + 1)}>
                      {i + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Label htmlFor="goals">Financial Goals</Label>
              <Textarea
                id="goals"
                placeholder="Describe your financial goals and what you want to protect..."
                value={formData.goals}
                onChange={(e) => handleInputChange("goals", e.target.value)}
                rows={4}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Heart className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground">Health Information</h2>
              <p className="text-muted-foreground">Your health status helps us provide better recommendations</p>
            </div>
            <div className="space-y-4">
              <Label htmlFor="healthStatus">Current Health Status</Label>
              <Select value={formData.healthStatus} onValueChange={(value) => handleInputChange("healthStatus", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your health status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="excellent">Excellent</SelectItem>
                  <SelectItem value="very-good">Very Good</SelectItem>
                  <SelectItem value="good">Good</SelectItem>
                  <SelectItem value="fair">Fair</SelectItem>
                  <SelectItem value="poor">Poor</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <Navbar />
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground text-center mb-4">Complete Your Profile</h1>
            <Progress value={progress} className="w-full h-3" />
            <p className="text-center text-muted-foreground mt-2">Step {currentStep} of {totalSteps}</p>
          </div>

          <Card className="border-none bg-gradient-card shadow-xl">
            <CardHeader>
              <CardTitle className="text-center">Profile Setup</CardTitle>
              <CardDescription className="text-center">
                This information helps us provide personalized insurance recommendations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {renderStep()}

              <div className="flex justify-between pt-6">
                <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1}>
                  Previous
                </Button>
                {currentStep < totalSteps ? (
                  <Button variant="hero" onClick={handleNext}>
                    Next
                  </Button>
                ) : (
                  <Button variant="hero" onClick={handleSubmit}>
                    Complete Profile
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
