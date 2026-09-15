import React, { useState } from 'react';
import { 
  FileCode2, 
  Copy, 
  Check, 
  Terminal, 
  Code2, 
  ExternalLink, 
  BookOpen 
} from 'lucide-react';

export const DocsPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'protobuf' | 'mqtt' | 'rest' | 'python'>('protobuf');
  const [copied, setCopied] = useState(false);

  const snippets = {
    protobuf: `syntax = "proto3";
package telemora.v1.telemetry;

// High-frequency vibration waveform packet (12.8 kHz Burst)
message VibrationWaveform {
  string asset_id = 1;              // e.g. "CNC-5AX-04"
  string component_id = 2;          // e.g. "spindle-bearing-02"
  uint64 timestamp_nanos = 3;       // IEEE 1588 PTP Hardware clock
  float sampling_rate_hz = 4;       // 12800.0
  repeated float samples_g = 5;     // Raw accelerometer values (g-force)
  
  // Operating state context bound at edge
  string operating_state = 6;       // "ROUGHING_PASS"
  float spindle_rpm = 7;            // 12450.0
  float motor_load_percent = 8;     // 74.2
}`,
    mqtt: `// MQTT Sparkplug B Topic & Payload Architecture
// Topic: spBv1.0/ApexPlant01/DDATA/Line02_CNC04

{
  "timestamp": 1788220800000,
  "metrics": [
    {
      "name": "Spindle/Vibration/RMS",
      "type": "Float",
      "value": 1.42,
      "properties": { "unit": "mm/s", "quality": 100 }
    },
    {
      "name": "Spindle/Bearing/TempC",
      "type": "Float",
      "value": 46.8,
      "properties": { "unit": "degC" }
    },
    {
      "name": "OperatingState",
      "type": "String",
      "value": "Roughing Pass"
    }
  ],
  "seq": 482091
}`,
    rest: `// Query Contextual Anomaly Dossier via REST API
// GET /api/v1/dossiers/DOSSIER-2026-088

curl -X GET "https://api.telemora.net/v1/dossiers/DOSSIER-2026-088" \\
  -H "Authorization: Bearer $TELEMORA_API_KEY" \\
  -H "Accept: application/json"

// Response: 200 OK
{
  "dossier_id": "DOSSIER-2026-088",
  "asset_code": "PUMP-HP-08",
  "deviation_score": 84,
  "fft_dominant_hz": 148.5,
  "correlated_work_order": "WO-8904",
  "read_only_safety_flag": true
}`,
    python: `# Python SDK: Connect Edge Telemetry Stream
from telemora import TelemetryClient, StreamConfig

client = TelemetryClient(
    edge_host="10.24.110.42",
    api_key="tlm_live_9921b7"
)

# Stream 12.8 kHz accelerometer frames
stream = client.open_waveform_stream(
    asset_code="CNC-5AX-04",
    sampling_rate=12800
)

for frame in stream.listen():
    if frame.deviation_score > 75:
        print(f"Anomaly on {frame.component}: {frame.evidence_summary}")`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="docs" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-xs font-mono text-emerald-800 font-bold mb-3">
              <FileCode2 className="w-3.5 h-3.5 text-emerald-700" />
              <span>DEVELOPER & INTEGRATION HUB</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
              Open Protocols & <br />
              <span className="text-emerald-700">Developer-First Tooling.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Integrate with standard OPC-UA, Protobuf schemas, MQTT Sparkplug B, and language SDKs designed for high-performance OT/IT convergence.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#docs"
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono text-xs font-bold transition-all flex items-center gap-2 border border-slate-300"
            >
              <BookOpen className="w-4 h-4 text-emerald-700" />
              <span>Full API Docs</span>
            </a>
          </div>
        </div>

        {/* Code Visualizer Box - Crisp Light Theme */}
        <div className="rounded-3xl bg-white border border-[#cfe3cc] p-6 sm:p-8 shadow-xl text-slate-900">
          
          {/* Tabs Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#cfe3cc]">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab('protobuf')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeTab === 'protobuf' ? 'bg-[#277822] text-white shadow-xs' : 'bg-[#f4f9f3] text-slate-700 hover:text-slate-900 border border-[#cfe3cc]'
                }`}
              >
                Protobuf Schema (v1)
              </button>
              <button
                onClick={() => setActiveTab('mqtt')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeTab === 'mqtt' ? 'bg-[#277822] text-white shadow-xs' : 'bg-[#f4f9f3] text-slate-700 hover:text-slate-900 border border-[#cfe3cc]'
                }`}
              >
                MQTT Sparkplug B
              </button>
              <button
                onClick={() => setActiveTab('rest')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeTab === 'rest' ? 'bg-[#277822] text-white shadow-xs' : 'bg-[#f4f9f3] text-slate-700 hover:text-slate-900 border border-[#cfe3cc]'
                }`}
              >
                REST Dossier API
              </button>
              <button
                onClick={() => setActiveTab('python')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeTab === 'python' ? 'bg-[#277822] text-white shadow-xs' : 'bg-[#f4f9f3] text-slate-700 hover:text-slate-900 border border-[#cfe3cc]'
                }`}
              >
                Python Client SDK
              </button>
            </div>

            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg bg-[#f8fbf7] hover:bg-[#ebf5e9] text-slate-800 text-xs font-mono flex items-center gap-1.5 border border-[#cfe3cc] cursor-pointer shadow-xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#277822]" /> : <Copy className="w-3.5 h-3.5 text-slate-600" />}
              <span>{copied ? 'Copied' : 'Copy Code'}</span>
            </button>
          </div>

          {/* Code Body - Light Terminal Canvas */}
          <div className="p-4 bg-[#f8faf7] rounded-2xl border border-[#cfe3cc] mt-4 overflow-x-auto shadow-inner">
            <pre className="text-xs font-mono text-[#1e581a] font-medium leading-relaxed">
              <code>{snippets[activeTab]}</code>
            </pre>
          </div>

          <div className="flex flex-wrap items-center justify-between text-xs font-mono text-slate-600 pt-4 mt-4 border-t border-[#cfe3cc]">
            <span>High-Throughput Protobuf Serialization • Zero Copy Ingress</span>
            <span className="text-[#236d1f] font-bold">SDK v4.2.0 Available</span>
          </div>

        </div>

      </div>
    </section>
  );
};
