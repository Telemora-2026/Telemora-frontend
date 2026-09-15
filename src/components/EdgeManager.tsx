import React, { useState, useEffect } from 'react';
import { 
  Server, 
  Wifi, 
  WifiOff, 
  Activity, 
  RefreshCw, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  Database,
  Radio
} from 'lucide-react';
import { EDGE_GATEWAYS } from '../data/mockIndustrialData';
import { EdgeGateway } from '../types';

export const EdgeManager: React.FC = () => {
  const [gateways, setGateways] = useState<EdgeGateway[]>(EDGE_GATEWAYS);
  const [isSimulatingDropout, setIsSimulatingDropout] = useState(false);
  const [bufferedCount, setBufferedCount] = useState(0);

  // When network dropout simulator is active, increment buffer count every second
  useEffect(() => {
    let interval: any;
    if (isSimulatingDropout) {
      interval = setInterval(() => {
        setBufferedCount(prev => prev + 1280);
      }, 1000);
    } else if (bufferedCount > 0) {
      // Flushed quickly on reconnect
      interval = setInterval(() => {
        setBufferedCount(prev => {
          if (prev <= 2500) return 0;
          return prev - 2500;
        });
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isSimulatingDropout, bufferedCount]);

  const toggleDropout = () => {
    setIsSimulatingDropout(!isSimulatingDropout);
  };

  return (
    <section id="edge" className="py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-xs font-mono text-emerald-800 font-bold mb-3">
              <Server className="w-3.5 h-3.5 text-emerald-700" />
              <span>EDGE RESILIENCE & STORE-AND-FORWARD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
              Zero Data Loss. <br />
              <span className="text-emerald-700">Even During Plant Network Outages.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Industrial edge gateways execute local FFT transforms and retain 72+ hours of raw waveforms in a high-speed ring buffer during OT network dropouts.
            </p>
          </div>

          {/* Interactive Network Dropout Simulator Trigger */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <div className="text-xs font-mono font-bold text-slate-700 uppercase">
              NETWORK RESILIENCE LAB
            </div>
            <button
              onClick={toggleDropout}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                isSimulatingDropout
                  ? 'bg-red-600 text-white shadow-md animate-pulse'
                  : 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-md'
              }`}
            >
              {isSimulatingDropout ? (
                <>
                  <WifiOff className="w-4 h-4" />
                  <span>SIMULATING OUTAGE (RECONNECT)</span>
                </>
              ) : (
                <>
                  <Wifi className="w-4 h-4" />
                  <span>TRIGGER SIMULATED DISCONNECT</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Live Simulator Status Banner */}
        {isSimulatingDropout && (
          <div className="mb-8 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-900 font-mono text-xs flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-amber-500 animate-ping" />
              <span>OT CLOUD UPLINK SEVERED: Gateways operating in local autonomous ring buffer mode.</span>
            </div>
            <div className="font-bold text-amber-800">
              BUFFERED LOCALLY: {bufferedCount.toLocaleString()} events (0 dropped)
            </div>
          </div>
        )}

        {/* Edge Gateways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gateways.map((gw, idx) => (
            <div
              key={gw.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-4 font-mono text-xs"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="font-bold text-slate-900">{gw.id}</span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  isSimulatingDropout
                    ? 'bg-amber-100 text-amber-800 border border-amber-300'
                    : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                }`}>
                  {isSimulatingDropout ? 'BUFFERING' : gw.status}
                </span>
              </div>

              <div>
                <div className="font-bold text-slate-800 text-sm font-sans">{gw.model}</div>
                <div className="text-[11px] text-slate-500">{gw.location}</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-[11px]">
                <div className="flex justify-between text-slate-600">
                  <span>Connected Sensors:</span>
                  <span className="text-slate-900 font-bold">{gw.connectedSensorsCount} Nodes</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Local Compute:</span>
                  <span className="text-emerald-800 font-bold">{gw.localProcessing}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Local Buffer:</span>
                  <span className={`font-bold ${isSimulatingDropout ? 'text-amber-700' : 'text-emerald-800'}`}>
                    {isSimulatingDropout ? `${(bufferedCount / 4).toFixed(0)} evts` : '0 (Live Sync)'}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {gw.protocols.map(prot => (
                  <span
                    key={prot}
                    className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] border border-slate-200"
                  >
                    {prot}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
