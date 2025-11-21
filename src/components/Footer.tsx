import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-border bg-muted/30 py-8">
      <div className="container">
        <Alert className="mb-6 border-primary/20 bg-accent">
          <AlertCircle className="h-5 w-5 text-primary" />
          <AlertDescription className="text-sm text-accent-foreground">
            <strong>Medical Disclaimer:</strong> This tool is for informational purposes only and does not constitute medical advice. 
            Always consult a qualified healthcare professional for diagnosis and treatment. If symptoms persist or worsen, seek immediate medical attention.
          </AlertDescription>
        </Alert>
        
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} OTC Medicine Selector. All rights reserved.</p>
          <p className="mt-2">Designed to help you make informed decisions about over-the-counter medications.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
