export interface TelemetryPoint {
  time: string;
  temp: number;
  humidity: number;
  soilMoisture: number;
  solarRadiation: number;
}

export interface FarmPlot {
  id: string;
  name: string;
  crop: string;
  variety: string;
  areaHa: number;
  plantingDate: string;
  harvestWindow: string;
  healthScore: number; // 0 - 100 (NDVI derived)
  soilMoisture: number; // %
  riskLevel: 'Low' | 'Moderate' | 'Elevated';
  verificationHash: string;
  coordinates: string;
  status: 'Vegetative' | 'Flowering' | 'Maturity' | 'Harvested' | 'Soil Prep';
}

export interface AuditCertificate {
  id: string;
  batchCode: string;
  farmName: string;
  location: string;
  crop: string;
  variety: string;
  hectares: number;
  totalYieldMT: number;
  plantingDate: string;
  harvestDate: string;
  verificationDate: string;
  hash: string;
  offTaker: string;
  complianceChecks: {
    name: string;
    passed: boolean;
    evidence: string;
  }[];
  ndvAvg: number;
  inputsRecorded: {
    date: string;
    type: string;
    quantity: string;
    verifiedBy: string;
  }[];
}

export interface FieldLogEntry {
  id: string;
  date: string;
  author: string;
  role: string;
  title: string;
  content: string;
  plotId: string;
  tag: 'Observation' | 'Action' | 'Weather Event' | 'Scouting';
}
