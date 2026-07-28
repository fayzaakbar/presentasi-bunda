import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Map, Box } from 'lucide-react';

const tabs = [
  { id: 'port', label: 'Port Info', icon: <Map size={20} /> },
  { id: 'storage', label: 'Storage', icon: <Box size={20} /> },
  { id: 'equip', label: 'Equipment', icon: <Settings size={20} /> }
];

const FacilitiesAndEquipment = () => {
  const [activeTab, setActiveTab] = useState('port');

  return (
    <div className="slide" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="bg-pattern"></div>
      <div className="slide-content">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '2rem' }}>
          <h2 className="heading-lg premium-gradient-text">FACILITIES & EQUIPMENT</h2>
          <div style={{ width: '80px', height: '4px', background: 'var(--primary-red)', marginTop: '0.5rem' }}></div>
        </motion.div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '1rem 2rem', borderRadius: 'var(--radius-full)',
                fontWeight: 600, fontSize: '1.1rem',
                border: 'none', cursor: 'pointer', transition: 'all 0.3s ease',
                background: activeTab === tab.id ? 'var(--primary-red)' : 'white',
                color: activeTab === tab.id ? 'white' : 'var(--navy)',
                boxShadow: activeTab === tab.id ? 'var(--shadow-md)' : 'none'
              }}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        <div style={{ flex: 1, position: 'relative' }}>
          <AnimatePresence mode="wait">
            {activeTab === 'port' && (
              <motion.div key="port" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="grid-cols-2" style={{ height: '100%' }}>
                <div className="glass-card" style={{ background: 'white' }}>
                  <h3 className="heading-md" style={{ color: 'var(--navy)', marginBottom: '1rem' }}>Terminal 1 (Domestic)</h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Location</span><strong style={{ color: 'var(--navy)' }}>Inggom & Wharf 001 - 007</strong>
                    </li>
                    <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Berthing</span><strong style={{ color: 'var(--navy)' }}>Any Time (On Schedule)</strong>
                    </li>
                    <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Draught</span><strong style={{ color: 'var(--navy)' }}>5m - 7m</strong>
                    </li>
                    <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Main Facilities</span><strong style={{ color: 'var(--navy)' }}>Shore Crane (40-80T), HMC</strong>
                    </li>
                  </ul>
                </div>
                <div className="glass-card" style={{ background: 'white' }}>
                  <h3 className="heading-md" style={{ color: 'var(--navy)', marginBottom: '1rem' }}>Terminal 2 (International)</h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Location</span><strong style={{ color: 'var(--navy)' }}>Wharf 101-102, 114-115, 201-203</strong>
                    </li>
                    <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Berthing</span><strong style={{ color: 'var(--navy)' }}>Any Time</strong>
                    </li>
                    <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Draught</span><strong style={{ color: 'var(--navy)' }}>9m - 12m</strong>
                    </li>
                    <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Main Facilities</span><strong style={{ color: 'var(--navy)' }}>GLC, HMC</strong>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}

            {activeTab === 'storage' && (
              <motion.div key="storage" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="grid-cols-3" style={{ height: '100%' }}>
                <div className="glass-card" style={{ background: 'white', borderTop: '4px solid var(--accent-yellow)' }}>
                  <h3 className="heading-md" style={{ color: 'var(--navy)', marginBottom: '1rem' }}>Inggom Facilities</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--navy)', lineHeight: 1.8 }}>
                    <li><strong>Total Area:</strong> 54,725 m²</li>
                    <li><strong>Racking Area:</strong> 9,077 m²</li>
                    <li>• Open Yard</li>
                    <li>• Indoor Storage (Bulk & Racking)</li>
                    <li>• Cold Storage & Reefer Plug</li>
                  </ul>
                </div>
                <div className="glass-card" style={{ background: 'white', borderTop: '4px solid var(--primary-red)' }}>
                  <h3 className="heading-md" style={{ color: 'var(--navy)', marginBottom: '1rem' }}>Terminal 1 Warehouses</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--navy)', lineHeight: 1.8 }}>
                    <li><strong>Wharf 006:</strong> 5,655 m²</li>
                    <li><strong>Wharf 007:</strong> 5,655 m²</li>
                    <li><strong>POMBO:</strong> 3,400 m²</li>
                    <li>Local area focused distribution.</li>
                  </ul>
                </div>
                <div className="glass-card" style={{ background: 'white', borderTop: '4px solid var(--navy)' }}>
                  <h3 className="heading-md" style={{ color: 'var(--navy)', marginBottom: '1rem' }}>Terminal 2 Warehouses</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--navy)', lineHeight: 1.8 }}>
                    <li><strong>Wharf 202:</strong> 9,945 m²</li>
                    <li><strong>Wharf 203:</strong> 9,945 m²</li>
                    <li>Designed for international cargo status handling.</li>
                  </ul>
                </div>
              </motion.div>
            )}

            {activeTab === 'equip' && (
              <motion.div key="equip" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                  {[
                    'Crane Liebher 1750', 
                    'Mod. Trailer Goldhofer (1250t)', 
                    'Enerpac Boom Lift SBL 1100 (1000t)', 
                    'Enerpac Lifting Jack (400t)', 
                    'Deck Barge 210" & Tug Boat', 
                    'Ext. Trailer Faymonvile Telemax'
                  ].map((eq, i) => (
                    <div key={i} className="glass-card" style={{ background: 'white', display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem' }}>
                       <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary-red)' }}></div>
                       <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--navy)' }}>{eq}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '1.5rem', width: '100%', height: '280px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', backgroundImage: 'url(/images/port_equipment.png)', backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: 'var(--shadow-lg)', position: 'relative' }}>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '1.5rem', background: 'linear-gradient(to top, rgba(15,23,42,0.9), transparent)' }}>
                    <h4 style={{ color: 'white', fontSize: '1.25rem', margin: 0, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Special Equipment for Heavy Cargo</h4>
                    <p style={{ color: 'rgba(255,255,255,0.8)', margin: '0.5rem 0 0 0' }}>Samudera develops its business as an integrated equipment provider.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesAndEquipment;
