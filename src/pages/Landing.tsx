import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Shield, TrendingUp, Users, FileText, Calculator, Award } from "lucide-react";

const Landing = () => {
  const features = [
    {
      icon: Calculator,
      title: "Risk Assessment",
      description: "Advanced algorithms analyze your financial profile to identify optimal insurance strategies."
    },
    {
      icon: TrendingUp,
      title: "Cost Optimization",
      description: "Compare scenarios to find the most cost-effective insurance coverage for your needs."
    },
    {
      icon: FileText,
      title: "Document Analysis",
      description: "Upload your existing policies for comprehensive analysis and improvement recommendations."
    },
    {
      icon: Award,
      title: "Personalized Reports",
      description: "Receive detailed reports with actionable insights tailored to your financial situation."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Self-Assure – <span className="text-primary">Smarter Insurance</span> Decisions
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Make confident insurance decisions with AI-powered financial risk simulations. 
              Optimize your coverage, reduce costs, and protect what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                  Get Started Free
                </Button>
              </Link>
              <Link to="/auth">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform combines cutting-edge financial modeling with intuitive design 
              to help you make smarter insurance decisions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none bg-gradient-card shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Self-Assure is built by financial technology experts who understand 
                the complexity of insurance decisions. We believe everyone deserves 
                access to sophisticated financial modeling tools.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our mission is to democratize financial risk assessment and help 
                individuals make informed decisions about their insurance coverage.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <div className="text-muted-foreground">Simulations Run</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">$50M+</div>
                  <div className="text-muted-foreground">Savings Identified</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-muted-foreground">User Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Card className="border-none bg-gradient-card shadow-xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground">Secure</h3>
                    <p className="text-sm text-muted-foreground">Bank-level security</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-16 w-16 text-secondary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground">Accurate</h3>
                    <p className="text-sm text-muted-foreground">AI-powered insights</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-16 w-16 text-accent mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground">Trusted</h3>
                    <p className="text-sm text-muted-foreground">Thousands of users</p>
                  </div>
                  <div className="text-center">
                    <FileText className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground">Comprehensive</h3>
                    <p className="text-sm text-muted-foreground">Complete analysis</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Insurance?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of users who have already saved money and reduced their financial risk.
          </p>
          <Link to="/auth">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
              Start Your Free Analysis
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8" />
                <span className="text-xl font-bold">Self-Assure</span>
              </div>
              <p className="text-background/70">
                Smarter insurance decisions through AI-powered financial modeling.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-background/70">
                <li>Risk Assessment</li>
                <li>Cost Analysis</li>
                <li>Document Upload</li>
                <li>Reports</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-background/70">
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-background/70">
                <li>Help Center</li>
                <li>Documentation</li>
                <li>API Reference</li>
                <li>Status</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
            <p>&copy; 2024 Self-Assure. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;