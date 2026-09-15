import { 
  IIoTHubNode, 
  MachineAsset, 
  AnomalyInvestigation, 
  EdgeGateway, 
  PricingPlan,
  ComparisonFeature,
  QuestionItem,
  RegionalHub,
  WorkflowStage,
  NvidiaTechnology,
  IndustrialProblemItem,
  TelemetryInputSource,
  IntelligenceProcessStep
} from '../types';

// Radial IIoT Hub nodes matching the exact 7 icons shown in the hero graphic figure
export const IIOT_HUB_NODES: IIoTHubNode[] = [
  {
    id: 'node-cloud',
    name: 'Industrial Cloud Sync',
    category: 'cloud',
    label: 'Cloud & Data Lake',
    description: 'High-throughput time-series streaming to central data lakes with sub-second temporal replication.',
    telemetryMetric: 'Ingress Rate',
    liveValue: '48.2k msg/s',
    status: 'SYNCED',
    icon: 'Cloud',
    angle: 90 // Top
  },
  {
    id: 'node-factory',
    name: 'Smart Plant & Lines',
    category: 'factory',
    label: 'Factory Topology',
    description: 'ISA-95 hierarchical asset mapping connecting cells, production lines, and multi-facility sites.',
    telemetryMetric: 'Connected Sites',
    liveValue: '8 Plants / 24 Lines',
    status: 'ACTIVE',
    icon: 'Building2',
    angle: 40 // Top Right
  },
  {
    id: 'node-robotics',
    name: 'Robotic Automation & CNC',
    category: 'robotics',
    label: 'Robotics & Machines',
    description: 'Direct drive torque, joint angle encoder telemetry, and 5-axis spindle speed synchronization.',
    telemetryMetric: 'Servo Motor Load',
    liveValue: '72.4% (Nominal)',
    status: 'ACTIVE',
    icon: 'Cpu',
    angle: 0 // Right
  },
  {
    id: 'node-maintenance',
    name: 'Predictive CMMS',
    category: 'maintenance',
    label: 'CMMS Maintenance',
    description: 'Automated work order correlation linking SAP PM/Maximo logs to current machine vibration signatures.',
    telemetryMetric: 'Active Work Orders',
    liveValue: '3 Correlated',
    status: 'NOMINAL',
    icon: 'Cog',
    angle: 320 // Bottom Right
  },
  {
    id: 'node-security',
    name: 'Safety & Air-Gap Security',
    category: 'security',
    label: 'OT Cybersecurity',
    description: 'Strict unidirectional read-only telemetry broker architecture. Zero OT control writeback risk.',
    telemetryMetric: 'Ingress Isolation',
    liveValue: '100% Read-Only',
    status: 'ACTIVE',
    icon: 'ShieldCheck',
    angle: 260 // Bottom
  },
  {
    id: 'node-analytics',
    name: 'Waveform & FFT Analytics',
    category: 'analytics',
    label: 'Condition Analytics',
    description: 'Multivariate Gaussian baseline enveloping and harmonic frequency tracking (0-12.8 kHz).',
    telemetryMetric: 'FFT Peak Dominant',
    liveValue: '148.5 Hz (Harmonic)',
    status: 'ACTIVE',
    icon: 'BarChart3',
    angle: 200 // Bottom Left
  },
  {
    id: 'node-wireless',
    name: 'Industrial Connectivity',
    category: 'wireless',
    label: 'Wireless & Fieldbus',
    description: 'Native OPC-UA, MQTT Sparkplug B, Modbus TCP/RTU, 5G NR, and LoRaWAN fieldbus bridges.',
    telemetryMetric: 'Active Node Links',
    liveValue: '1,420 Sensors',
    status: 'ACTIVE',
    icon: 'Wifi',
    angle: 140 // Top Left
  }
];

export const MOCK_ASSETS: MachineAsset[] = [
  {
    id: 'asset-cnc-01',
    code: 'CNC-5AX-04',
    name: '5-Axis Precision Machining Center',
    type: 'High-Precision Milling Machine',
    plant: 'Apex Plant 01 - Gary, IN',
    line: 'Aerospace Cell B',
    status: 'OPTIMAL',
    healthScore: 94,
    uptimePercent: 99.4,
    currentOperatingState: 'Roughing Cycle',
    criticalComponent: 'Main Spindle Roller Bearing #2',
    lastServiceDate: '3 days ago (Lubrication & Seal Check)',
    activeWorkOrderId: 'WO-8821',
    sensors: [
      {
        id: 'sens-01',
        name: 'Spindle Radial Vibration',
        type: 'Vibration Accelerometer',
        samplingRate: '12.8 kHz',
        currentValue: '1.42',
        unit: 'mm/s RMS',
        status: 'NORMAL',
        normalRange: '0.40 - 2.20'
      },
      {
        id: 'sens-02',
        name: 'Drive Bearing Temp',
        type: 'Thermocouple',
        samplingRate: '1 Hz',
        currentValue: '46.8',
        unit: '°C',
        status: 'NORMAL',
        normalRange: '35.0 - 65.0'
      },
      {
        id: 'sens-03',
        name: 'Coolant Line Pressure',
        type: 'Pressure Transducer',
        samplingRate: '100 Hz',
        currentValue: '38.4',
        unit: 'bar',
        status: 'NORMAL',
        normalRange: '30.0 - 45.0'
      },
      {
        id: 'sens-04',
        name: 'Main Spindle Speed',
        type: 'Encoder',
        samplingRate: '1 kHz',
        currentValue: '12,450',
        unit: 'RPM',
        status: 'NORMAL',
        normalRange: '0 - 18,000'
      }
    ],
    telemetryStream: [
      { timestamp: '10:00:00', timeLabel: '10:00', vibrationRmsMmS: 1.25, temperatureC: 44.2, hydraulicPressureBar: 38.1, motorPowerKw: 14.2, spindleRpm: 12000, baselineUpper: 2.2, baselineLower: 0.5 },
      { timestamp: '10:00:05', timeLabel: '10:05', vibrationRmsMmS: 1.38, temperatureC: 44.9, hydraulicPressureBar: 38.3, motorPowerKw: 15.6, spindleRpm: 12200, baselineUpper: 2.2, baselineLower: 0.5 },
      { timestamp: '10:00:10', timeLabel: '10:10', vibrationRmsMmS: 1.42, temperatureC: 45.3, hydraulicPressureBar: 38.5, motorPowerKw: 16.1, spindleRpm: 12450, baselineUpper: 2.3, baselineLower: 0.5 },
      { timestamp: '10:00:15', timeLabel: '10:15', vibrationRmsMmS: 1.40, temperatureC: 45.8, hydraulicPressureBar: 38.2, motorPowerKw: 15.8, spindleRpm: 12400, baselineUpper: 2.3, baselineLower: 0.5 },
      { timestamp: '10:00:20', timeLabel: '10:20', vibrationRmsMmS: 1.45, temperatureC: 46.2, hydraulicPressureBar: 38.4, motorPowerKw: 16.3, spindleRpm: 12500, baselineUpper: 2.3, baselineLower: 0.5 },
      { timestamp: '10:00:25', timeLabel: '10:25', vibrationRmsMmS: 1.42, temperatureC: 46.8, hydraulicPressureBar: 38.4, motorPowerKw: 16.0, spindleRpm: 12450, baselineUpper: 2.3, baselineLower: 0.5 }
    ]
  },
  {
    id: 'asset-pump-02',
    code: 'PUMP-HP-08',
    name: 'High-Pressure Slurry Feed Pump',
    type: 'Centrifugal Slurry Pump',
    plant: 'Gulf Processing Line 02 - Houston, TX',
    line: 'Slurry Transfer Circuit',
    status: 'ATTENTION',
    healthScore: 71,
    uptimePercent: 96.8,
    currentOperatingState: 'Steady Rotation',
    criticalComponent: 'Drive-End Inboard Spherical Roller Bearing',
    lastServiceDate: '18 days ago (Impeller Inspection)',
    activeWorkOrderId: 'WO-8904',
    sensors: [
      {
        id: 'sens-11',
        name: 'Inboard Bearing Vibration',
        type: 'Vibration Accelerometer',
        samplingRate: '12.8 kHz',
        currentValue: '3.65',
        unit: 'mm/s RMS',
        status: 'WARNING',
        normalRange: '0.80 - 2.50'
      },
      {
        id: 'sens-12',
        name: 'Bearing Housing Temp',
        type: 'Thermocouple',
        samplingRate: '1 Hz',
        currentValue: '72.4',
        unit: '°C',
        status: 'WARNING',
        normalRange: '40.0 - 68.0'
      },
      {
        id: 'sens-13',
        name: 'Suction Differential Pressure',
        type: 'Pressure Transducer',
        samplingRate: '100 Hz',
        currentValue: '6.2',
        unit: 'bar',
        status: 'NORMAL',
        normalRange: '5.0 - 9.0'
      }
    ],
    telemetryStream: [
      { timestamp: '10:00:00', timeLabel: '10:00', vibrationRmsMmS: 2.80, temperatureC: 67.2, hydraulicPressureBar: 6.4, motorPowerKw: 45.2, spindleRpm: 1780, baselineUpper: 2.5, baselineLower: 0.8 },
      { timestamp: '10:00:05', timeLabel: '10:05', vibrationRmsMmS: 3.10, temperatureC: 69.1, hydraulicPressureBar: 6.3, motorPowerKw: 46.8, spindleRpm: 1780, baselineUpper: 2.5, baselineLower: 0.8 },
      { timestamp: '10:00:10', timeLabel: '10:10', vibrationRmsMmS: 3.45, temperatureC: 70.8, hydraulicPressureBar: 6.2, motorPowerKw: 47.4, spindleRpm: 1780, baselineUpper: 2.5, baselineLower: 0.8 },
      { timestamp: '10:00:15', timeLabel: '10:15', vibrationRmsMmS: 3.65, temperatureC: 72.4, hydraulicPressureBar: 6.2, motorPowerKw: 48.0, spindleRpm: 1780, baselineUpper: 2.5, baselineLower: 0.8 }
    ]
  },
  {
    id: 'asset-turb-03',
    code: 'TURB-GEN-02',
    name: 'Combustion Gas Turbine & Generator',
    type: 'Power Generation Turbine',
    plant: 'Midwest Energy Plant 04 - Joliet, IL',
    line: 'Co-Gen Unit 2',
    status: 'OPTIMAL',
    healthScore: 98,
    uptimePercent: 99.9,
    currentOperatingState: 'Steady Rotation',
    criticalComponent: 'Thrust Collar Hydrodynamic Bearing',
    lastServiceDate: '42 days ago (Annual Major Overhaul)',
    sensors: [
      {
        id: 'sens-21',
        name: 'Shaft Displacement Proximity',
        type: 'Encoder',
        samplingRate: '10 kHz',
        currentValue: '18.4',
        unit: 'µm pk-pk',
        status: 'NORMAL',
        normalRange: '10.0 - 45.0'
      },
      {
        id: 'sens-22',
        name: 'Exhaust Gas Temp (Avg)',
        type: 'Thermocouple',
        samplingRate: '10 Hz',
        currentValue: '542',
        unit: '°C',
        status: 'NORMAL',
        normalRange: '480 - 580'
      }
    ],
    telemetryStream: [
      { timestamp: '10:00:00', timeLabel: '10:00', vibrationRmsMmS: 0.85, temperatureC: 538, hydraulicPressureBar: 120, motorPowerKw: 42000, spindleRpm: 3600, baselineUpper: 1.5, baselineLower: 0.3 },
      { timestamp: '10:00:05', timeLabel: '10:05', vibrationRmsMmS: 0.88, temperatureC: 540, hydraulicPressureBar: 121, motorPowerKw: 42100, spindleRpm: 3600, baselineUpper: 1.5, baselineLower: 0.3 },
      { timestamp: '10:00:10', timeLabel: '10:10', vibrationRmsMmS: 0.87, temperatureC: 542, hydraulicPressureBar: 120, motorPowerKw: 42050, spindleRpm: 3600, baselineUpper: 1.5, baselineLower: 0.3 }
    ]
  }
];

export const ANOMALIES_DATA: AnomalyInvestigation[] = [
  {
    id: 'DOSSIER-2026-088',
    assetCode: 'PUMP-HP-08',
    assetName: 'High-Pressure Slurry Feed Pump',
    location: 'Gulf Processing Line 02 / Bay 4',
    timestamp: '2026-08-31 21:14:02 UTC',
    severity: 'HIGH',
    signalName: 'Inboard Bearing Vibration (12.8 kHz Accelerometer)',
    deviationScore: 84,
    observedValue: '3.65 mm/s RMS (2.4x baseline)',
    expectedBaseline: '0.80 – 2.50 mm/s RMS (Gaussian 99.7% Envelope)',
    operatingState: 'Steady Rotation (1,780 RPM @ 82% Hyd Load)',
    evidenceSummary: 'FFT spectral decomposition reveals dominant peaks at 148.5 Hz (corresponding to 5.0x ball pass frequency outer race BPFO) accompanied by 2x shaft harmonics. Amplitude increased continuously across the last 48 operating hours.',
    maintenanceCorrelation: 'Correlated with SAP PM work order WO-8904 (impeller inspection 18 days ago). Inboard seal was reseated; shaft re-alignment tolerances were not re-verified post-assembly.',
    suggestedReviewAction: 'Schedule precision laser alignment check and acoustic ultrasound bearing grease replenishment during scheduled Thursday changeover window.',
    samplingRate: '12.8 kHz Burst Ingestion',
    fftPeakFreqHz: 148.5,
    waveformObserved: [1.2, 1.6, 2.1, 2.9, 3.4, 3.65, 3.5, 3.2, 2.8, 3.3, 3.6, 3.4, 2.9, 2.2, 1.8],
    waveformBaseline: [1.0, 1.1, 1.2, 1.3, 1.4, 1.3, 1.2, 1.1, 1.2, 1.3, 1.2, 1.1, 1.0, 1.1, 1.0]
  },
  {
    id: 'DOSSIER-2026-082',
    assetCode: 'CNC-5AX-04',
    assetName: '5-Axis Precision Machining Center',
    location: 'Apex Plant 01 / Cell B',
    timestamp: '2026-08-31 18:30:15 UTC',
    severity: 'MEDIUM',
    signalName: 'Coolant Flow Pulsation & Spindle Thermal Gradient',
    deviationScore: 62,
    observedValue: '12.4°C/min thermal gradient',
    expectedBaseline: '3.0 – 6.5°C/min under roughing cycle',
    operatingState: 'Titanium Ti-6Al-4V Roughing Pass (12,450 RPM)',
    evidenceSummary: 'Transient thermal gradient spike detected in spindle nose bearing during transition into high-feed pocket milling. Pressure sensor logged 3.2 bar cyclical pressure dip.',
    maintenanceCorrelation: 'Correlated with WO-8821 (coolant manifold filter replaced 3 days ago). Manifold bypass valve seating confirmed nominal.',
    suggestedReviewAction: 'Verify coolant line chiller supply reservoir temperature calibration before the next aerospace turbine disc batch.',
    samplingRate: '100 Hz Continuous',
    fftPeakFreqHz: 42.0,
    waveformObserved: [0.8, 1.1, 1.4, 1.9, 2.4, 2.8, 2.5, 2.2, 1.9, 1.5, 1.2, 1.1, 1.0, 0.9, 0.8],
    waveformBaseline: [0.8, 0.9, 1.0, 1.1, 1.2, 1.1, 1.0, 0.9, 0.9, 1.0, 0.9, 0.8, 0.8, 0.9, 0.8]
  }
];

export const EDGE_GATEWAYS: EdgeGateway[] = [
  {
    id: 'GW-042',
    model: 'Advantech UNO-2484G Industrial Edge PC',
    location: 'Gary Plant 01 / Cell B Enclosure',
    ipAddress: '10.24.110.42',
    status: 'ONLINE',
    connectedSensorsCount: 48,
    localProcessing: 'Edge FFT Enveloping (12.8 kHz)',
    bufferedEventsCount: 0,
    throughputKbps: 420,
    signalQuality: 99.8,
    lastSyncSecondsAgo: 1,
    firmwareVersion: 'v4.2.1-rt-linux',
    protocols: ['OPC-UA', 'MQTT Sparkplug B', 'Modbus TCP']
  },
  {
    id: 'GW-089',
    model: 'Siemens SIMATIC IPC227G Nanobox',
    location: 'Houston Plant 02 / Slurry Pump Skids',
    ipAddress: '10.28.204.89',
    status: 'ONLINE',
    connectedSensorsCount: 64,
    localProcessing: 'Store-and-Forward + Kalman Filter',
    bufferedEventsCount: 0,
    throughputKbps: 580,
    signalQuality: 99.2,
    lastSyncSecondsAgo: 2,
    firmwareVersion: 'v4.1.9-rt-linux',
    protocols: ['Profinet', 'OPC-UA', 'MQTT']
  },
  {
    id: 'GW-104',
    model: 'Moxa MC-1220 Dual-Core Edge Gateway',
    location: 'Joliet Energy Plant 04 / Turbine Skid',
    ipAddress: '10.32.140.104',
    status: 'ONLINE',
    connectedSensorsCount: 92,
    localProcessing: 'Shaft Orbit Analysis & Vibration RMS',
    bufferedEventsCount: 0,
    throughputKbps: 840,
    signalQuality: 100.0,
    lastSyncSecondsAgo: 1,
    firmwareVersion: 'v4.3.0-rt-linux',
    protocols: ['Modbus RTU/TCP', 'OPC-UA', 'DNP3']
  },
  {
    id: 'GW-212',
    model: 'Dell NativeEdge 3000 Rugged Gateway',
    location: 'Detroit Stamping Plant 03 / Press Line 4',
    ipAddress: '10.44.180.212',
    status: 'ONLINE',
    connectedSensorsCount: 112,
    localProcessing: 'Strain & Hydraulic Pulse Analytics',
    bufferedEventsCount: 0,
    throughputKbps: 920,
    signalQuality: 98.9,
    lastSyncSecondsAgo: 2,
    firmwareVersion: 'v4.2.8-rt-linux',
    protocols: ['EtherNet/IP', 'OPC-UA', 'MQTT']
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-plant',
    name: 'Plant Site Pilot',
    deploymentType: 'Single Manufacturing Facility',
    priceMonthly: 'Free',
    priceAnnual: 'Free',
    unitLabel: '30-Day Trial',
    description: 'Designed for single production sites aiming to connect machine signals and stop blind alarm fatigue.',
    architectureScope: 'Up to 250 assets, 1,500 sensors, 5 edge gateways',
    keyFeatures: [
      'Real-time OPC-UA, Modbus & MQTT Ingestion',
      'Dynamic Gaussian Baseline Enveloping',
      'CMMS Work Order Integration (1 connector)',
      'Condition Evidence Investigation Dossiers',
      'Local Store-and-Forward Edge Buffering (30-day SSD)',
      'Standard 99.9% Ingestion Uptime SLA'
    ],
    supportLevel: '8x5 Industrial Engineering Support (4h SLA)',
    ctaText: 'Start Free Trial'
  },
  {
    id: 'plan-enterprise',
    name: 'Enterprise Fleet',
    deploymentType: 'Multi-Plant Global Fleet',
    badge: 'Most Popular',
    priceMonthly: 6800,
    priceAnnual: 5440,
    unitLabel: '/ month / enterprise fleet',
    description: 'Unified operational telemetry across multiple global facilities with cross-plant asset benchmarking.',
    architectureScope: 'Unlimited assets, plants, and edge gateways',
    keyFeatures: [
      'Multi-Facility Global Fleet Telemetry Hub',
      'Full ISA-95 Semantic Digital Twin Model',
      'Bidirectional SAP PM, IBM Maximo & MaintainX sync',
      'IEEE 1588 PTP Microsecond Clock Normalization',
      'Custom Harmonic Passband Spectral Algorithms',
      'Dedicated Customer Reliability Engineer',
      'Enterprise 99.99% Multi-Region Uptime SLA'
    ],
    supportLevel: '24/7/365 Dedicated Reliability Architect (15m SLA)',
    ctaText: 'Deploy Enterprise Fleet'
  },
  {
    id: 'plan-airgap',
    name: 'Air-Gapped Appliance',
    deploymentType: 'High-Security On-Premises Cluster',
    priceMonthly: 'Custom',
    priceAnnual: 'Custom',
    unitLabel: 'Custom appliance licensing',
    description: 'Complete standalone on-premises cluster deployment for defense, nuclear, or strict zero-cloud facilities.',
    architectureScope: 'Dedicated On-Prem Hardware or Private Kubernetes',
    keyFeatures: [
      '100% On-Premises Local Processing & Storage',
      'Strict Unidirectional Air-Gap Optical Diode Isolation',
      'Hardware-Enforced Read-Only Telemetry Taps',
      'Local ClickHouse & Timescale Ingestion Engines',
      'Self-Contained Anomaly Dossier Generator',
      'Annual On-Site Calibration & IEC 62443 Audit'
    ],
    supportLevel: 'Dedicated On-Premises Clearance Support',
    ctaText: 'Contact Sales'
  }
];

export const COMPARISON_FEATURES: ComparisonFeature[] = [
  { name: 'OPC-UA, Modbus TCP/RTU & MQTT Ingestion', category: 'Ingestion & Edge', plant: 'Included', enterprise: 'Unlimited', airgap: 'Isolated LAN' },
  { name: 'High-Frequency Waveform Ingestion (12.8 kHz)', category: 'Ingestion & Edge', plant: 'Up to 50 channels', enterprise: 'Unlimited channels', airgap: 'Local Bus Only' },
  { name: 'Local Store-and-Forward SSD FIFO Buffer', category: 'Ingestion & Edge', plant: '30-Day Buffer', enterprise: '90-Day Buffer', airgap: 'Unlimited Local' },
  { name: 'Dynamic Gaussian Envelope Baseline Training', category: 'Analytics & ML', plant: 'Single State Model', enterprise: 'Multi-State Dynamic', airgap: 'On-Prem ML Model' },
  { name: 'Harmonic Peak & FFT Spectral Decomposition', category: 'Analytics & ML', plant: 'Standard (0-5 kHz)', enterprise: 'Full (0-12.8 kHz)', airgap: 'Full (0-12.8 kHz)' },
  { name: 'Condition Dossier Evidence Generator', category: 'Analytics & ML', plant: 'Standard PDF/Web', enterprise: 'Automated CMMS Push', airgap: 'Local Air-Gap Hub' },
  { name: 'IEC 62443 SL-2 Compliance Architecture', category: 'OT Cyber & Security', plant: 'Standard', enterprise: 'Enhanced SL-2', airgap: 'Air-Gap SL-3' },
  { name: 'Hardware-Enforced Read-Only Telemetry Tap', category: 'OT Cyber & Security', plant: 'Software Diode', enterprise: 'Hardware & Software', airgap: 'Optical Data Diode' },
  { name: 'SAP PM, IBM Maximo & MaintainX Connectors', category: 'Enterprise & SLA', plant: '1 Connector', enterprise: 'Unlimited Connectors', airgap: 'Custom Local BAPI' },
  { name: 'IEEE 1588 PTP Sub-Microsecond Clock Sync', category: 'Enterprise & SLA', plant: 'NTP Standard', enterprise: 'IEEE 1588 PTP', airgap: 'Hardware GPS/PTP' },
  { name: 'Guaranteed Ingestion Uptime SLA', category: 'Enterprise & SLA', plant: '99.9% Uptime', enterprise: '99.99% Multi-Region', airgap: 'Air-Gapped 100%' }
];

export const FAQ_QUESTIONS_DATA: QuestionItem[] = [
  {
    id: 'faq-01',
    category: 'reliability',
    categoryLabel: 'Anomaly Intelligence',
    badge: 'Dynamic Envelopes',
    question: 'How does Telemora eliminate 80%+ false alarms without missing genuine mechanical failures?',
    shortAnswer: 'By dynamically shifting Gaussian baseline envelopes based on machine operating states (roughing vs finishing vs idle) rather than relying on static scalar thresholds.',
    fullAnswer: 'Conventional SCADA alarms use rigid static thresholds that trigger constantly during heavy machine cuts or tool plunges. Telemora continuously reads operating state context from the PLC/encoder and dynamically calculates statistical ±3σ confidence boundaries. When load spikes naturally during roughing, the threshold expands; when steady-state vibration shows harmonic drift, it isolates the true fault immediately.',
    accentColor: 'emerald',
    interactiveType: 'gaussian-envelope',
    metrics: [
      { label: 'False Alarm Reduction', value: '84.6%', detail: 'Across 12,000 operational hours' },
      { label: 'Detection Latency', value: '< 120 ms', detail: 'Real-time FFT envelope check' },
      { label: 'Confidence Bound', value: '99.7%', detail: '3-Sigma Gaussian fit' }
    ]
  },
  {
    id: 'faq-02',
    category: 'security',
    categoryLabel: 'OT Cybersecurity',
    badge: 'Zero Control Risk',
    question: 'Is Telemora safe for Level 1/2 OT networks? What prevents accidental PLC writebacks?',
    shortAnswer: 'Strict unidirectional hardware data diodes and software broker enforcement make writebacks physically impossible. Telemora is 100% read-only decision support.',
    fullAnswer: 'Industrial control systems require uncompromising safety. Telemora enforces an immutable engineering boundary: telemetry flows outward from sensors and PLCs via optical data diodes or read-only broker subscribers (MQTT Sparkplug B, OPC-UA Read). Telemora contains zero actuators, zero PLC control write drivers, and zero automated trip override mechanisms.',
    accentColor: 'amber',
    interactiveType: 'hardware-diode',
    metrics: [
      { label: 'Writeback Risk', value: '0.00%', detail: 'Physically blocked via diode tap' },
      { label: 'OT Standards', value: 'IEC 62443', detail: 'SL-2 and SL-3 certified' },
      { label: 'Ingress Protocol', value: 'mTLS 1.3', detail: 'Encrypted telemetry brokers' }
    ]
  },
  {
    id: 'faq-03',
    category: 'architecture',
    categoryLabel: 'Digital Twin Model',
    badge: 'ISA-95 Semantic Model',
    question: 'How does Telemora bind raw sensor telemetry to equipment context and CMMS maintenance logs?',
    shortAnswer: 'Through a continuous ISA-95 hierarchical semantic ontology that maps physical vibration channels directly to enterprise sites, production lines, machine components, and active SAP PM/Maximo work orders.',
    fullAnswer: 'Raw vibration streams are meaningless without physical context. Telemora automatically structures every incoming signal into the ISA-95 standard tree: Enterprise → Site → Area → Work Center → Machine Asset → Bearing Component. When an anomaly occurs, Telemora automatically cross-references the asset ID with your CMMS (SAP PM, Maximo, MaintainX) to present recent repair logs, technician notes, and correlated work orders in a unified dossier.',
    accentColor: 'indigo',
    interactiveType: 'isa95-tree',
    metrics: [
      { label: 'CMMS Connectors', value: '14+ Systems', detail: 'SAP PM, Maximo, MaintainX, etc.' },
      { label: 'Hierarchy Depth', value: '6 ISA-95 Levels', detail: 'Enterprise down to rolling element' },
      { label: 'Context Correlation', value: 'Instant', detail: 'Automated metadata association' }
    ]
  },
  {
    id: 'faq-04',
    category: 'deployment',
    categoryLabel: 'Fieldbus Protocols',
    badge: 'Protocol Agnostic',
    question: 'What industrial protocols, high-frequency sampling rates, and edge gateways are supported?',
    shortAnswer: 'Native support for OPC-UA, MQTT Sparkplug B, Modbus TCP/RTU, Profinet, EtherNet/IP, and direct 12.8 kHz vibration DAQ taps across Advantech, Siemens, Moxa, and Dell gateways.',
    fullAnswer: 'Telemora deploys lightweight Rust/C++ containerized edge agents that interface with existing plant infrastructure without proprietary lock-in. Whether you stream scalar temperature registers at 1 Hz or high-density 12.8 kHz vibration bursts over IEEE 1588 PTP, Telemora normalizes all payloads into unified Protobuf time-series streams with zero copy ingress.',
    accentColor: 'blue',
    interactiveType: 'protocol-matrix',
    metrics: [
      { label: 'Max Sample Rate', value: '12.8 kHz', detail: 'High-speed accelerometer burst' },
      { label: 'Supported Protocols', value: '18+ Types', detail: 'OPC-UA, MQTT, Modbus, Profinet' },
      { label: 'Edge Footprint', value: '< 64 MB RAM', detail: 'Lightweight Rust runtime' }
    ]
  },
  {
    id: 'faq-05',
    category: 'architecture',
    categoryLabel: 'Edge Resilience',
    badge: 'Lossless Store-and-Forward',
    question: 'What happens during a plant network outage or switch failure? Is critical burst data lost?',
    shortAnswer: 'Zero data loss. Telemora edge gateways automatically switch into local NVMe SSD store-and-forward buffering and replay compressed time-stamped bursts once connectivity resumes.',
    fullAnswer: 'Industrial plant Wi-Fi and factory floor ethernet switches frequently suffer transient dropouts. Telemora edge appliances utilize local circular SSD FIFO buffers capable of caching up to 90 days of full-bandwidth telemetry offline. When the uplink reconnects, the edge broker executes a rate-limited, lossless replay with sub-millisecond hardware timestamp preservation.',
    accentColor: 'purple',
    interactiveType: 'store-forward-sim',
    metrics: [
      { label: 'Buffer Duration', value: '90 Days', detail: 'Local NVMe SSD circular cache' },
      { label: 'Packet Recovery', value: '100.00%', detail: 'Zero telemetry frames dropped' },
      { label: 'Clock Drift Sync', value: '< 1 µs', detail: 'IEEE 1588 PTP preserved' }
    ]
  },
  {
    id: 'faq-06',
    category: 'deployment',
    categoryLabel: 'Pilot Onboarding',
    badge: '48-Hour Pilot',
    question: 'How fast can an engineering pilot be deployed on an active production line without downtime?',
    shortAnswer: 'Under 48 hours via non-invasive magnetic sensor taps and read-only network monitoring ports, requiring zero line stoppages or PLC reprogramming.',
    fullAnswer: 'Our rapid deployment methodology requires no disruption to production. Hour 0-12: Magnetic accelerometers and edge gateway clamped to machine skid. Hour 12-24: Non-invasive read-only tap connected to plant switch. Hour 24-36: Automated baseline learning across machine cycles. Hour 48: First live anomaly dossier active in your reliability engineering portal.',
    accentColor: 'cyan',
    interactiveType: 'pilot-timeline',
    metrics: [
      { label: 'Pilot Setup Time', value: '< 48 Hours', detail: 'From unboxing to live dossiers' },
      { label: 'PLC Downtime Needed', value: '0 Minutes', detail: 'Completely non-invasive' },
      { label: 'Initial ROI Horizon', value: '30 Days', detail: 'First anomaly catch typical' }
    ]
  }
];

export const REGIONAL_HUBS: RegionalHub[] = [
  {
    id: 'hub-us',
    region: 'United States',
    city: 'Chicago, IL / Detroit, MI',
    country: 'United States',
    timezone: 'America/Chicago',
    timeZoneCode: 'CST (UTC-6)',
    address: '333 W Wacker Dr, Suite 1400, Chicago, IL 60606',
    phone: '+1 (800) 835-3667',
    email: 'us.engineering@telemora.net',
    availability: '24/7 OT Incident Response (< 15 min SLA)',
    leadArchitect: 'Dr. Marcus Vance (ISO 18436 Cat IV Analyst)',
    specialization: 'Automotive Stamping, CNC Spindles & Energy Skids',
    status: 'ONLINE'
  },
  {
    id: 'hub-de',
    region: 'Germany',
    city: 'Stuttgart / Munich',
    country: 'Germany',
    timezone: 'Europe/Berlin',
    timeZoneCode: 'CET (UTC+1)',
    address: 'Königstraße 26, 70173 Stuttgart, Germany',
    phone: '+49 (711) 490-8820',
    email: 'germany.engineering@telemora.net',
    availability: '08:00 - 18:00 CET + 24/7 Hotline Support',
    leadArchitect: 'Dipl.-Ing. Greta Hoffmann',
    specialization: 'IEC 62443 Compliance, Siemens Profinet & Robotics',
    status: 'ONLINE'
  }
];

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    stepNumber: '01',
    name: 'Machine & Sensor Data',
    tagline: 'Raw Ingestion Layer',
    description: 'High-throughput ingestion of time-series signals and event streams from PLCs, vibration accelerometers, thermocouples, and smart IoT gateways.',
    inputData: 'Raw OPC-UA, MQTT Sparkplug B, Modbus registers, 12.8 kHz accelerometer frames',
    outputArtifact: 'Validated time-series byte stream with IEEE 1588 PTP timestamps',
    iconName: 'Cpu',
    color: 'emerald',
    metrics: [
      { label: 'Sampling Rate', value: '1 Hz – 12.8 kHz' },
      { label: 'Ingress Latency', value: '< 15 ms' }
    ]
  },
  {
    stepNumber: '02',
    name: 'Telemetry Processing',
    tagline: 'Normalization & Feature Engine',
    description: 'Schema unification, signal-quality validation, continuous temporal alignment, windowing aggregations, and edge-to-core stream deduplication.',
    inputData: 'Inconsistent vendor tag formats and multi-gateway clocks',
    outputArtifact: 'Standardized Protobuf v3 engineering unit records',
    iconName: 'Activity',
    color: 'teal',
    metrics: [
      { label: 'Zero Copy Ingress', value: '100%' },
      { label: 'Clock Jitter Sync', value: '< 1 µs' }
    ]
  },
  {
    stepNumber: '03',
    name: 'Asset Context',
    tagline: 'ISA-95 Digital Twin Binding',
    description: 'Binds streaming operational data to physical equipment hierarchy, current operating states (roughing vs finishing), and recent CMMS service history.',
    inputData: 'Normalized metrics + SAP PM/Maximo work orders + PLC cycle bits',
    outputArtifact: 'Enriched contextual asset digital twin entity',
    iconName: 'Layers',
    color: 'indigo',
    metrics: [
      { label: 'Hierarchy Depth', value: '6 Levels (ISA-95)' },
      { label: 'CMMS Correlation', value: 'Automated' }
    ]
  },
  {
    stepNumber: '04',
    name: 'Condition Intelligence',
    tagline: 'Multivariate Anomaly Engine',
    description: 'Calculates state-dependent Gaussian baseline envelopes, spectral FFT harmonic peaks, and deviation scoring to isolate genuine degradation from load transients.',
    inputData: 'Enriched asset telemetry + dynamic load state baselines',
    outputArtifact: 'Condition Investigation Dossier with spectral forensic evidence',
    iconName: 'Zap',
    color: 'amber',
    metrics: [
      { label: 'False Alarm Rejection', value: '84.6%' },
      { label: 'Spectral FFT Depth', value: '0 – 12.8 kHz' }
    ]
  },
  {
    stepNumber: '05',
    name: 'Engineering Decision',
    tagline: 'Human-in-the-Loop Review',
    description: 'Presents verified condition dossiers, root-cause evidence, and suggested maintenance actions to plant engineers. 100% decision support with zero control risk.',
    inputData: 'Condition evidence dossier + historical component baseline',
    outputArtifact: 'Targeted maintenance dispatch & precision overhaul review',
    iconName: 'ShieldCheck',
    color: 'emerald',
    metrics: [
      { label: 'Control Writeback', value: '0.00% (Blocked)' },
      { label: 'Decision SLA', value: '< 4 min' }
    ]
  }
];

export const INDUSTRIAL_PROBLEMS_SOLUTIONS: IndustrialProblemItem[] = [
  {
    id: 'prob-1',
    problemTitle: 'Fragmented Telemetry Across Sites & Systems',
    problemDescription: 'Machine signals live trapped in isolated vendor systems, proprietary SCADA historians, and local PLC silos with zero cross-plant visibility.',
    impactOnPlant: 'Engineers spend 60%+ of investigation time manually hunting down data across incompatible software tools.',
    solutionTitle: 'Unified Industrial Telemetry Hub',
    solutionDescription: 'Single multi-site telemetry broker bridging OPC-UA, MQTT Sparkplug B, Modbus, and historians into standardized Protobuf streams.',
    capabilityTag: 'Multi-Site Normalization',
    metricGain: '100% Signal Unification'
  },
  {
    id: 'prob-2',
    problemTitle: 'Inconsistent Telemetry Formats & Asset Identifiers',
    problemDescription: 'Different machines label bearings, pressures, and spindle speeds with arbitrary register tags and incompatible naming conventions.',
    impactOnPlant: 'Impossible to compare performance or train predictive baselines across identical machines in different plant cells.',
    solutionTitle: 'ISA-95 Semantic Digital Twin Model',
    solutionDescription: 'Maps every raw sensor channel into the ISA-95 standard ontology (Enterprise → Site → Area → Line → Asset → Component).',
    capabilityTag: 'Schema Normalization',
    metricGain: 'Standard ISA-95 Ontology'
  },
  {
    id: 'prob-3',
    problemTitle: 'High-Frequency Data is Expensive to Process & Retain',
    problemDescription: 'Continuous 12.8 kHz vibration waveforms generate gigabytes of data per hour, overwhelming industrial networks and cloud storage budgets.',
    impactOnPlant: 'Plants either sample at slow 1 Hz (missing critical shock pulses) or incur unsustainable bandwidth and cloud egress fees.',
    solutionTitle: 'Edge FFT Enveloping & Smart Trigger Bursts',
    solutionDescription: 'Performs local edge spectral decomposition and transmits scalar summaries continuously, streaming full raw waveforms only on triggered deviations.',
    capabilityTag: 'Edge-to-Core Optimization',
    metricGain: '92% Bandwidth Reduction'
  },
  {
    id: 'prob-4',
    problemTitle: 'Blind Static Thresholds Miss Complex Operating Patterns',
    problemDescription: 'Rigid scalar alarms trigger nuisance alerts during normal roughing cuts or heavy load cycles, causing millwrights to ignore 80%+ of alarms.',
    impactOnPlant: 'Alarm fatigue causes real mechanical degradation signatures (BPFO/BPFI bearing flaking) to be missed until catastrophic seizure occurs.',
    solutionTitle: 'Dynamic State-Dependent Gaussian Envelopes',
    solutionDescription: 'Dynamically adapts statistical ±3σ confidence boundaries based on real-time machine operating states (roughing vs finishing vs idle).',
    capabilityTag: 'State-Aware Analytics',
    metricGain: '84.6% False Alarm Reduction'
  },
  {
    id: 'prob-5',
    problemTitle: 'Maintenance Teams Lack Combined Condition & History Context',
    problemDescription: 'Vibration analysts diagnose faults in isolation without knowing when seals were replaced, while maintenance technicians lack live sensor telemetry.',
    impactOnPlant: 'Unnecessary tear-downs of newly greased bearings and repeated failures due to improper shaft alignment going unnoted.',
    solutionTitle: 'Bidirectional CMMS Work Order Correlation',
    solutionDescription: 'Automatically correlates real-time vibration spikes with recent SAP PM, IBM Maximo, and MaintainX work orders in unified dossiers.',
    capabilityTag: 'CMMS Integration',
    metricGain: 'Zero Disconnected Silos'
  },
  {
    id: 'prob-6',
    problemTitle: 'Industrial Connectivity is Intermittent at the Edge',
    problemDescription: 'Factory floor network congestion and switch restarts cause packet loss right when equipment excursions and power surges occur.',
    impactOnPlant: 'Loss of critical forensic waveforms during equipment trip events leaves reliability teams without root-cause evidence.',
    solutionTitle: 'Lossless NVMe Store-and-Forward Buffering',
    solutionDescription: 'Local edge gateway circular SSD FIFO buffers store up to 90 days of full-bandwidth data offline, replaying losslessly on reconnect.',
    capabilityTag: 'Store-and-Forward Edge',
    metricGain: '0.00% Telemetry Loss'
  }
];

export const NVIDIA_TECH_SHOWCASE: NvidiaTechnology[] = [
  {
    id: 'nv-rapids',
    name: 'NVIDIA RAPIDS™',
    category: 'Data Science & Time-Series',
    proposedRole: 'GPU-Accelerated Time-Series Processing',
    technicalCapabilities: [
      'CuDF & CuPy accelerated feature engineering on raw multi-sensor streams',
      'Sub-millisecond sliding window rolling aggregations across 100,000+ tag channels',
      'Accelerated Gaussian baseline envelope covariance matrix computation'
    ],
    benchmarkedThroughput: '500,000+ metric windows / sec per GPU node',
    architectureTier: 'On-Prem Cluster',
    icon: 'Database'
  },
  {
    id: 'nv-cuda',
    name: 'NVIDIA CUDA®',
    category: 'Signal Processing',
    proposedRole: 'Parallel FFT & Harmonic Spectral Decomposition',
    technicalCapabilities: [
      'cuFFT parallel accelerated fast Fourier transform processing (0.1 Hz – 12.8 kHz)',
      'Real-time harmonic sideband isolation and sub-harmonic resonance filtering',
      'Zero-copy unified memory transfers from high-speed DAQ PCIe taps'
    ],
    benchmarkedThroughput: '< 2.5 ms execution for 65,536-point vibration FFT',
    architectureTier: 'Edge Gateway',
    icon: 'Cpu'
  },
  {
    id: 'nv-jetson',
    name: 'NVIDIA Jetson™ Industrial',
    category: 'Edge Gateway AI',
    proposedRole: 'Rugged Edge AI Telemetry Processing Unit',
    technicalCapabilities: [
      'Embedded TensorRT inference on DIN-rail rugged edge appliances (-40°C to 85°C)',
      'Local real-time waveform anomaly classification with zero cloud dependency',
      'Unidirectional optical diode isolation with hardware-blocked writeback safety'
    ],
    benchmarkedThroughput: 'Up to 275 TOPS INT8 edge inference compute',
    architectureTier: 'Edge Gateway',
    icon: 'Server'
  },
  {
    id: 'nv-triton',
    name: 'NVIDIA Triton™ Inference Server',
    category: 'Model Serving & Inference',
    proposedRole: 'Enterprise Fleet Telemetry Model Serving',
    technicalCapabilities: [
      'Concurrent multi-model execution (ONNX, TensorRT, PyTorch) across machine classes',
      'Dynamic batching for high-density multi-facility telemetry streams',
      'Sub-millisecond model hot-swapping for state-dependent envelope updates'
    ],
    benchmarkedThroughput: '< 10 ms multi-sensor ensemble inference latency',
    architectureTier: 'Enterprise Cloud',
    icon: 'Zap'
  }
];

export const TELEMETRY_INPUT_SOURCES: TelemetryInputSource[] = [
  {
    id: 'src-1',
    category: 'Machine & Sensors',
    name: '5-Axis Spindle & Triaxial Vibration Taps',
    protocols: ['12.8 kHz Accelerometers', 'Thermocouples', 'Shaft Encoders'],
    sampleRate: '12.8 kHz Continuous Burst',
    status: 'STREAMING',
    dataVolume: '42.4 MB/min'
  },
  {
    id: 'src-2',
    category: 'Industrial IoT Gateways',
    name: 'Advantech & Siemens Edge Nanobox Gateways',
    protocols: ['MQTT Sparkplug B', 'OPC-UA Binary', 'IEEE 1588 PTP'],
    sampleRate: '100 Hz Scaled Metrics',
    status: 'CONNECTED',
    dataVolume: '48.2k msg/s'
  },
  {
    id: 'src-3',
    category: 'SCADA & Historians',
    name: 'OSIsoft PI & AVEVA Historian Export Bridges',
    protocols: ['REST API', 'OPC-HDA', 'ODBC/SQL'],
    sampleRate: '1 Hz Historical Registers',
    status: 'SYNCED',
    dataVolume: '1.2M points/hr'
  },
  {
    id: 'src-4',
    category: 'Maintenance & CMMS',
    name: 'SAP PM & IBM Maximo Work Order Connectors',
    protocols: ['SAP BAPI', 'REST Webhooks', 'mTLS OAuth 2.0'],
    sampleRate: 'Event-Driven Work Order Sync',
    status: 'SYNCED',
    dataVolume: '3 Correlated Logs'
  },
  {
    id: 'src-5',
    category: 'Asset Registries',
    name: 'Enterprise ISA-95 Topology Registry',
    protocols: ['GraphQL', 'Protobuf Metadata', 'JSON Schema'],
    sampleRate: 'Continuous Topology Sync',
    status: 'CONNECTED',
    dataVolume: '8 Plants / 24 Lines'
  }
];

export const INTELLIGENCE_PROCESS_STEPS: IntelligenceProcessStep[] = [
  {
    id: 'step-ingest',
    stepName: '1. Ingestion & Validation',
    subTitle: 'Zero-Copy Protocol Ingress',
    description: 'Validates IEEE 1588 hardware timestamps, decrypts mTLS packets, and discards malformed frames at edge line speed.',
    latency: '< 2 ms',
    status: 'ACTIVE'
  },
  {
    id: 'step-norm',
    stepName: '2. Schema Normalization',
    subTitle: 'Protobuf Standard Format',
    description: 'Translates heterogeneous PLC registers and vendor vibration metrics into unified Protobuf time-series records.',
    latency: '< 5 ms',
    status: 'ACTIVE'
  },
  {
    id: 'step-enrich',
    stepName: '3. Asset-Context Enrichment',
    subTitle: 'ISA-95 Digital Twin Binding',
    description: 'Associates streaming signals with machine operating state (roughing/finishing) and recent maintenance work order history.',
    latency: '< 8 ms',
    status: 'PROCESSING'
  },
  {
    id: 'step-ml',
    stepName: '4. Feature & Anomaly ML',
    subTitle: 'Gaussian State Envelopes & FFT',
    description: 'Computes spectral harmonics (BPFO/BPFI) and dynamic ±3σ Gaussian deviation scores to isolate real mechanical degradation.',
    latency: '< 25 ms',
    status: 'PROCESSING'
  },
  {
    id: 'step-alert',
    stepName: '5. Insight & Dossier Generation',
    subTitle: 'Engineering Review Support',
    description: 'Generates structured condition investigation evidence with suggested actions for human-in-the-loop review.',
    latency: '< 50 ms',
    status: 'ACTIVE'
  }
];


