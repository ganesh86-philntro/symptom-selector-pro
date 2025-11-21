import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import * as Icons from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SymptomCard from "@/components/SymptomCard";
import { symptoms } from "@/data/medicines";
import { Badge } from "@/components/ui/badge";

const Symptoms = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const navigate = useNavigate();

  const toggleSymptom = (symptomId: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptomId)
        ? prev.filter(id => id !== symptomId)
        : [...prev, symptomId]
    );
  };

  const handleFindMedicines = () => {
    if (selectedSymptoms.length > 0) {
      navigate("/recommendations", { state: { symptoms: selectedSymptoms } });
    }
  };

  const clearAll = () => {
    setSelectedSymptoms([]);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center animate-fade-in">
              <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                Select Your Symptoms
              </h1>
              <p className="text-muted-foreground">
                Choose one or more symptoms you're experiencing to get medicine recommendations
              </p>
            </div>

            {selectedSymptoms.length > 0 && (
              <div className="mb-8 flex flex-wrap items-center gap-3 rounded-lg border border-border bg-card p-4 animate-scale-in">
                <span className="text-sm font-medium text-foreground">Selected:</span>
                {selectedSymptoms.map(symptomId => {
                  const symptom = symptoms.find(s => s.id === symptomId);
                  return (
                    <Badge 
                      key={symptomId} 
                      variant="secondary"
                      className="gap-1 pl-3 pr-2 text-sm"
                    >
                      {symptom?.name}
                      <button
                        onClick={() => toggleSymptom(symptomId)}
                        className="ml-1 rounded-full hover:bg-background/20"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  );
                })}
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={clearAll}
                  className="h-7 text-xs"
                >
                  Clear All
                </Button>
              </div>
            )}

            <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {symptoms.map((symptom) => {
                const IconComponent = Icons[symptom.icon as keyof typeof Icons] as any;
                return (
                  <SymptomCard
                    key={symptom.id}
                    name={symptom.name}
                    description={symptom.description}
                    icon={IconComponent}
                    isSelected={selectedSymptoms.includes(symptom.id)}
                    onClick={() => toggleSymptom(symptom.id)}
                  />
                );
              })}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="group h-12 px-8 text-base font-semibold shadow-lg transition-all hover:shadow-xl"
                onClick={handleFindMedicines}
                disabled={selectedSymptoms.length === 0}
              >
                Find Medicines
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              {selectedSymptoms.length === 0 && (
                <p className="mt-4 text-sm text-muted-foreground">
                  Please select at least one symptom to continue
                </p>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Symptoms;
