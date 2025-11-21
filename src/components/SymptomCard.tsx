import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SymptomCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  isSelected: boolean;
  onClick: () => void;
}

const SymptomCard = ({ name, description, icon: Icon, isSelected, onClick }: SymptomCardProps) => {
  return (
    <Card 
      className={cn(
        "cursor-pointer transition-all duration-300 hover:shadow-lg",
        isSelected 
          ? "border-primary bg-accent shadow-md ring-2 ring-primary ring-offset-2" 
          : "border-border hover:border-primary/50"
      )}
      onClick={onClick}
    >
      <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
        <div className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full transition-colors",
          isSelected ? "bg-primary text-white" : "bg-muted text-muted-foreground"
        )}>
          <Icon className="h-7 w-7" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">{name}</h3>
          <p className="mt-1 text-xs text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SymptomCard;
