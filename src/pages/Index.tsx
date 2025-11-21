import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-32">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center animate-fade-in">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Find the Right <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">OTC Medicine</span> Instantly
              </h1>
              <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
                Select your symptoms and get instant, reliable recommendations for over-the-counter medications. 
                Quick, safe, and easy to use.
              </p>
              <Button 
                size="lg" 
                className="group h-12 px-8 text-base font-semibold shadow-lg transition-all hover:shadow-xl"
                onClick={() => navigate("/symptoms")}
              >
                Start Diagnosis
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                Why Choose Our Medicine Selector?
              </h2>
              <p className="text-muted-foreground">
                Get accurate medicine recommendations based on your symptoms with complete safety information.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="group rounded-xl border border-border bg-card p-8 transition-all hover:shadow-lg animate-slide-up">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Zap className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">Instant Results</h3>
                <p className="text-muted-foreground">
                  Get medicine recommendations in seconds based on your selected symptoms.
                </p>
              </div>

              <div className="group rounded-xl border border-border bg-card p-8 transition-all hover:shadow-lg animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-secondary/10 transition-colors group-hover:bg-secondary/20">
                  <Shield className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">Safe & Reliable</h3>
                <p className="text-muted-foreground">
                  Comprehensive safety information and warnings for each recommended medicine.
                </p>
              </div>

              <div className="group rounded-xl border border-border bg-card p-8 transition-all hover:shadow-lg animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <CheckCircle className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">Easy to Use</h3>
                <p className="text-muted-foreground">
                  Simple symptom selection with clear, easy-to-understand recommendations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-secondary py-16 text-white">
          <div className="container text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Ready to Find Your Medicine?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Select your symptoms and get personalized OTC medicine recommendations now.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="h-12 px-8 text-base font-semibold shadow-lg"
              onClick={() => navigate("/symptoms")}
            >
              Get Started
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
