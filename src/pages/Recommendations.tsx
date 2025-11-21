import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MedicineCard from "@/components/MedicineCard";
import { medicines, symptoms } from "@/data/medicines";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Recommendations = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedSymptoms = location.state?.symptoms || [];

  const recommendedMedicines = medicines.filter(medicine =>
    medicine.symptoms.some(symptom => selectedSymptoms.includes(symptom))
  );

  const selectedSymptomNames = symptoms
    .filter(s => selectedSymptoms.includes(s.id))
    .map(s => s.name);

  if (selectedSymptoms.length === 0) {
    navigate("/symptoms");
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <Button
              variant="ghost"
              className="mb-6 gap-2"
              onClick={() => navigate("/symptoms")}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Symptoms
            </Button>

            <div className="mb-8 animate-fade-in">
              <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                Recommended Medicines
              </h1>
              <p className="text-muted-foreground">
                Based on your symptoms: <span className="font-medium text-foreground">
                  {selectedSymptomNames.join(", ")}
                </span>
              </p>
            </div>

            {recommendedMedicines.length > 0 ? (
              <>
                <Alert className="mb-8 border-primary/30 bg-primary/5 animate-scale-in">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  <AlertDescription className="text-sm">
                    We found {recommendedMedicines.length} {recommendedMedicines.length === 1 ? 'medicine' : 'medicines'} that may help with your symptoms. 
                    Please read all warnings carefully and consult a healthcare professional if symptoms persist.
                  </AlertDescription>
                </Alert>

                <div className="grid gap-6 md:grid-cols-2">
                  {recommendedMedicines.map((medicine, index) => (
                    <div 
                      key={medicine.id}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <MedicineCard medicine={medicine} />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <Alert className="animate-scale-in">
                <AlertCircle className="h-5 w-5" />
                <AlertDescription>
                  No specific OTC medicines found for your selected symptoms. 
                  Please consult a healthcare professional for personalized advice.
                </AlertDescription>
              </Alert>
            )}

            <div className="mt-8 text-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate("/symptoms")}
              >
                Try Different Symptoms
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Recommendations;
