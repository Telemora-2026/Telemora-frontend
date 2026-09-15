// Core Data Models for Telemora Industrial IoT Platform

export type AssetHealthStatus = 'OPTIMAL' | 'ATTENTION' | 'CRITICAL' | 'IDLE' | 'MAINTENANCE';

export interface IIoTHubNode {
  id: string;
  name: string;
  category: 'cloud' | 'factory' | 'robotics' | 'maintenance' | 'security' | 'analytics' | 'wireless';
  label: string;
  description: string;
  telemetryMetric: string;
  liveValue: string;
  status: 'ACTIVE' | 'SYNCED' | 'NOMINAL';
  icon: string;
  angle: number; // in degrees around the central IIoT hub
}

export interface TelemetryReading {
  timestamp: string;
  timeLabel: string;
  vibrationRmsMmS: number; // Spindle/Pump vibration
  temperatureC: number;    // Bearing temperature
  hydraulicPressureBar: number; // Pressure
  motorPowerKw: number;    // Electrical power
  spindleRpm: number;      // Rotation speed
  baselineUpper: number;
  baselineLower: number;
}

export interface MachineAsset {
  id: string;
  code: string;
  name: string;
  type: string;
  plant: string;
  line: string;
  status: AssetHealthStatus;
  healthScore: number; // 0 - 100
  uptimePercent: number;
  currentOperatingState: 'Roughing Cycle' | 'Finishing Pass' | 'Steady Rotation' | 'Idle Standby' | 'Tool Change';
  criticalComponent: string;
  lastServiceDate: string;
  sensors: SensorNode[];
  activeWorkOrderId?: string;
  telemetryStream: TelemetryReading[];
}

export interface SensorNode {
  id: string;
  name: string;
  type: 'Vibration Accelerometer' | 'Thermocouple' | 'Pressure Transducer' | 'Current Transformer' | 'Encoder';
  samplingRate: string;
  currentValue: string;
  unit: string;
  status: 'NORMAL' | 'WARNING' | 'ALERT';
  normalRange: string;
}

export interface AnomalyInvestigation {
  id: string;
  assetCode: string;
  assetName: string;
  location: string;
  timestamp: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  status?: string;
  workOrderTicketId?: string;
  signalName: string;
  deviationScore: number;
  observedValue: string;
  expectedBaseline: string;
  operatingState: string;
  evidenceSummary: string;
  maintenanceCorrelation: string;
  suggestedReviewAction: string;
  samplingRate: string;
  fftPeakFreqHz: number;
  waveformObserved: number[];
  waveformBaseline: number[];
}

export interface EdgeGateway {
  id: string;
  model: string;
  location: string;
  ipAddress: string;
  status: 'ONLINE' | 'BUFFERING' | 'SYNCING';
  connectedSensorsCount: number;
  localProcessing: string;
  bufferedEventsCount: number;
  throughputKbps: number;
  signalQuality: number;
  lastSyncSecondsAgo: number;
  firmwareVersion: string;
  protocols: string[];
}

export interface ArchitectureTier {
  level: string;
  name: string;
  iconName: string;
  color: string;
  components: string[];
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  deploymentType: string;
  badge?: string;
  priceMonthly: number | 'Custom' | 'Free';
  priceAnnual: number | 'Custom' | 'Free';
  unitLabel: string;
  description: string;
  architectureScope: string;
  keyFeatures: string[];
  supportLevel: string;
  ctaText: string;
}

export type QuestionCategory = 'all' | 'reliability' | 'security' | 'architecture' | 'deployment';

export interface QuestionItem {
  id: string;
  category: QuestionCategory;
  categoryLabel: string;
  badge: string;
  question: string;
  shortAnswer: string;
  fullAnswer: string;
  accentColor: 'emerald' | 'amber' | 'indigo' | 'blue' | 'purple' | 'cyan';
  interactiveType: 'gaussian-envelope' | 'hardware-diode' | 'isa95-tree' | 'protocol-matrix' | 'store-forward-sim' | 'pilot-timeline';
  metrics?: { label: string; value: string; detail?: string }[];
}

export interface ComparisonFeature {
  name: string;
  category: 'Ingestion & Edge' | 'Analytics & ML' | 'OT Cyber & Security' | 'Enterprise & SLA';
  plant: string | boolean;
  enterprise: string | boolean;
  airgap: string | boolean;
}

export interface RegionalHub {
  id: string;
  region: string;
  city: string;
  country: string;
  timezone: string;
  timeZoneCode: string;
  address: string;
  phone: string;
  email: string;
  availability: string;
  leadArchitect: string;
  specialization: string;
  status: 'ONLINE' | 'STANDBY';
}

export interface WorkflowStage {
  stepNumber: string;
  name: string;
  tagline: string;
  description: string;
  inputData: string;
  outputArtifact: string;
  iconName: string;
  color: string;
  metrics: { label: string; value: string }[];
}

export interface NvidiaTechnology {
  id: string;
  name: string;
  category: 'Data Science & Time-Series' | 'Signal Processing' | 'Edge Gateway AI' | 'Model Serving & Inference';
  proposedRole: string;
  technicalCapabilities: string[];
  benchmarkedThroughput: string;
  architectureTier: 'Edge Gateway' | 'On-Prem Cluster' | 'Enterprise Cloud';
  icon: string;
}

export interface IndustrialProblemItem {
  id: string;
  problemTitle: string;
  problemDescription: string;
  impactOnPlant: string;
  solutionTitle: string;
  solutionDescription: string;
  capabilityTag: string;
  metricGain: string;
}

export interface TelemetryInputSource {
  id: string;
  category: 'Machine & Sensors' | 'Industrial IoT Gateways' | 'SCADA & Historians' | 'Maintenance & CMMS' | 'Asset Registries';
  name: string;
  protocols: string[];
  protocol?: string;
  description?: string;
  latency?: string;
  sampleRate: string;
  status: 'CONNECTED' | 'STREAMING' | 'SYNCED';
  dataVolume: string;
}

export interface IntelligenceProcessStep {
  id: string;
  stepName: string;
  subTitle: string;
  description: string;
  latency: string;
  status: 'ACTIVE' | 'PROCESSING';
}

export interface ContactSubmission {
  fullName: string;
  workEmail: string;
  company: string;
  facilityType: string;
  assetCount: string;
  inquiryType: string;
  message: string;
}


