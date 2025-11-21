import { AlertCircle, Pill } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Medicine } from "@/data/medicines";

interface MedicineCardProps {
  medicine: Medicine;
}

const MedicineCard = ({ medicine }: MedicineCardProps) => {
  return (
    <Card className="animate-fade-in overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Pill className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-xl">{medicine.name}</CardTitle>
              {medicine.genericName && (
                <CardDescription className="mt-1 text-sm">
                  {medicine.genericName}
                </CardDescription>
              )}
            </div>
          </div>
          <Badge variant="secondary" className="ml-2">OTC</Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4 pt-6">
        <div>
          <h4 className="mb-2 text-sm font-semibold text-foreground">Description</h4>
          <p className="text-sm text-muted-foreground">{medicine.description}</p>
        </div>
        
        <div>
          <h4 className="mb-2 text-sm font-semibold text-foreground">Recommended Dosage</h4>
          <p className="text-sm text-muted-foreground">{medicine.dosage}</p>
        </div>
        
        <Alert className="border-destructive/30 bg-destructive/5">
          <AlertCircle className="h-4 w-4 text-destructive" />
          <AlertDescription className="text-xs">
            <strong className="block mb-1">Important Warnings:</strong>
            <ul className="ml-4 list-disc space-y-1">
              {medicine.warnings.map((warning, index) => (
                <li key={index}>{warning}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
};

export default MedicineCard;
