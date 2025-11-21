export interface Medicine {
  id: string;
  name: string;
  genericName?: string;
  symptoms: string[];
  description: string;
  dosage: string;
  warnings: string[];
}

export const medicines: Medicine[] = [
  {
    id: "paracetamol",
    name: "Paracetamol",
    genericName: "Acetaminophen",
    symptoms: ["fever", "headache", "body-pain"],
    description: "Reduces fever and relieves mild to moderate pain",
    dosage: "500-1000mg every 4-6 hours (max 4000mg/day)",
    warnings: ["Do not exceed recommended dose", "Avoid alcohol", "Consult doctor if symptoms persist beyond 3 days"]
  },
  {
    id: "ibuprofen",
    name: "Ibuprofen",
    genericName: "NSAID",
    symptoms: ["fever", "headache", "body-pain", "sore-throat"],
    description: "Reduces inflammation, fever, and pain",
    dosage: "200-400mg every 4-6 hours with food",
    warnings: ["Take with food", "May cause stomach upset", "Not for children under 6 months"]
  },
  {
    id: "cetirizine",
    name: "Cetirizine",
    genericName: "Antihistamine",
    symptoms: ["allergies", "cold"],
    description: "Relieves allergy symptoms like sneezing, runny nose, and itching",
    dosage: "10mg once daily",
    warnings: ["May cause drowsiness", "Avoid alcohol", "Do not drive if drowsy"]
  },
  {
    id: "cough-syrup",
    name: "Dextromethorphan",
    genericName: "Cough Suppressant",
    symptoms: ["cough"],
    description: "Relieves dry, persistent cough",
    dosage: "10-20mg every 4 hours as needed",
    warnings: ["Do not use for persistent cough", "Consult doctor if cough lasts >7 days", "Not for children under 4"]
  },
  {
    id: "antacid",
    name: "Antacid (Omeprazole)",
    genericName: "Proton Pump Inhibitor",
    symptoms: ["acidity"],
    description: "Reduces stomach acid and relieves heartburn",
    dosage: "20mg once daily before breakfast",
    warnings: ["Take 30 minutes before meals", "Not for immediate relief", "Consult doctor if symptoms persist"]
  },
  {
    id: "lozenges",
    name: "Throat Lozenges",
    genericName: "Menthol/Benzocaine",
    symptoms: ["sore-throat", "cough"],
    description: "Soothes sore throat and relieves minor mouth irritation",
    dosage: "Dissolve 1 lozenge slowly every 2 hours",
    warnings: ["Do not chew or swallow whole", "Not for children under 5", "Limit to 8 per day"]
  },
  {
    id: "decongestant",
    name: "Pseudoephedrine",
    genericName: "Nasal Decongestant",
    symptoms: ["cold", "allergies"],
    description: "Relieves nasal and sinus congestion",
    dosage: "60mg every 4-6 hours as needed",
    warnings: ["May increase blood pressure", "Avoid if you have heart conditions", "Do not use for >7 days"]
  },
  {
    id: "antihistamine-cream",
    name: "Hydrocortisone Cream",
    genericName: "Topical Corticosteroid",
    symptoms: ["allergies"],
    description: "Relieves itching, redness, and inflammation from skin allergies",
    dosage: "Apply thin layer 2-3 times daily",
    warnings: ["For external use only", "Do not use on open wounds", "Discontinue if irritation occurs"]
  }
];

export interface Symptom {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const symptoms: Symptom[] = [
  { id: "fever", name: "Fever", icon: "Thermometer", description: "High body temperature" },
  { id: "cold", name: "Cold", icon: "Wind", description: "Runny or stuffy nose" },
  { id: "cough", name: "Cough", icon: "Waves", description: "Persistent coughing" },
  { id: "headache", name: "Headache", icon: "Brain", description: "Head pain or pressure" },
  { id: "acidity", name: "Acidity", icon: "Flame", description: "Heartburn or acid reflux" },
  { id: "allergies", name: "Allergies", icon: "Flower2", description: "Allergic reactions" },
  { id: "body-pain", name: "Body Pain", icon: "Activity", description: "Muscle or joint pain" },
  { id: "sore-throat", name: "Sore Throat", icon: "Mic", description: "Throat pain or irritation" }
];
