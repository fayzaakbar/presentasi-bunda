import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, MapPin, Filter, Navigation } from 'lucide-react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup, Line } from 'react-simple-maps';

const geoUrl = "/world-50m.json";

const subsidiaryNodes = [
  // SUMATERA (9)
  { id: 'sub-1', city: 'Belawan', region: 'Sumatera', ptName: 'PT Deli Jaya Samudera', desc: 'Stevedoring & Port Services', coordinates: [98.67, 3.78] },
  { id: 'sub-2', city: 'Kuala Tanjung', region: 'Sumatera', ptName: 'PT Kuala Jaya Samudera', desc: 'Port Terminal Management & Stevedoring', coordinates: [99.45, 3.35] },
  { id: 'sub-3', city: 'Dumai', region: 'Sumatera', ptName: 'PT Riau Jaya Samudera', desc: 'Cargo Handling & Stevedoring Services', coordinates: [101.45, 1.68] },
  { id: 'sub-4', city: 'Karimun', region: 'Sumatera', ptName: 'PT Lagoi Jaya Samudera', desc: 'Marine Logistics & Port Operations', coordinates: [103.43, 1.07] },
  { id: 'sub-5', city: 'Batam', region: 'Sumatera', ptName: 'PT Barelang Riau Jaya', desc: 'Stevedoring & Industrial Port Services', coordinates: [104.03, 1.13] },
  { id: 'sub-6', city: 'Padang', region: 'Sumatera', ptName: 'PT Padang Jaya Samudera', desc: 'Cargo Handling & Port Agency Services', coordinates: [100.35, -0.95] },
  { id: 'sub-7', city: 'Jambi', region: 'Sumatera', ptName: 'PT Jambi Jaya Samudera', desc: 'River Cargo & Stevedoring Operations', coordinates: [103.61, -1.61] },
  { id: 'sub-8', city: 'Palembang', region: 'Sumatera', ptName: 'PT Musi Kalijaya', desc: 'Stevedoring & Logistics Support', coordinates: [104.76, -2.99] },
  { id: 'sub-9', city: 'Lampung', region: 'Sumatera', ptName: 'PT Lampung Jaya Samudera', desc: 'Port Operations & Bulk Cargo Handling', coordinates: [105.26, -5.43] },

  // JAWA (8)
  { id: 'sub-10', city: 'Jakarta', region: 'Jawa', ptName: 'PT Prima Bandar Samudera (PBS)', desc: 'Tanjung Priok & KBN Marunda Stevedoring Hub', coordinates: [106.82, -6.13], isHub: true },
  { id: 'sub-11', city: 'Cilegon', region: 'Jawa', ptName: 'PT Merak Jaya Asri', desc: 'Industrial Port & Stevedoring Services', coordinates: [106.05, -6.02] },
  { id: 'sub-12', city: 'Cirebon', region: 'Jawa', ptName: 'PT Cirebon Jaya Samudera', desc: 'Cargo Handling & Maritime Logistics', coordinates: [108.56, -6.71] },
  { id: 'sub-13', city: 'Semarang', region: 'Jawa', ptName: 'PT Tirang Jaya Samudera', desc: 'Container Terminal & Cargo Stevedoring', coordinates: [110.42, -6.99] },
  { id: 'sub-14', city: 'Cilacap', region: 'Jawa', ptName: 'PT Tembini Jaya Samudera', desc: 'Bulk Cargo & Tanker Port Services', coordinates: [109.01, -7.72] },
  { id: 'sub-15', city: 'Surabaya (Perak)', region: 'Jawa', ptName: 'PT Ampel Jaya', desc: 'Tanjung Perak Port Stevedoring & Logistics', coordinates: [112.73, -7.20] },
  { id: 'sub-16', city: 'Surabaya (Tally)', region: 'Jawa', ptName: 'PT Ampel Tally Jaya', desc: 'Tally & Cargo Inspection Services', coordinates: [112.80, -7.26] },
  { id: 'sub-17', city: 'Surabaya (Terminal)', region: 'Jawa', ptName: 'PT Astarika Stuwarindo', desc: 'Container Handling & Stevedoring Services', coordinates: [112.65, -7.25] },

  // KALIMANTAN (7)
  { id: 'sub-18', city: 'Pontianak', region: 'Kalimantan', ptName: 'PT Pontianak Jaya Samudera', desc: 'River Port Stevedoring & Cargo Services', coordinates: [109.33, -0.02] },
  { id: 'sub-19', city: 'Banjarmasin', region: 'Kalimantan', ptName: 'PT Banjar Jaya Samudera', desc: 'Container Port Operations & Stevedoring', coordinates: [114.59, -3.32] },
  { id: 'sub-20', city: 'Balikpapan', region: 'Kalimantan', ptName: 'PT Papan Jaya Tirta', desc: 'Offshore Cargo Handling & Port Services', coordinates: [116.83, -1.27] },
  { id: 'sub-21', city: 'Samarinda', region: 'Kalimantan', ptName: 'PT Kutai Jaya Pundinusa', desc: 'Palaran Container & Cargo Stevedoring', coordinates: [117.15, -0.55] },
  { id: 'sub-22', city: 'Kotabaru', region: 'Kalimantan', ptName: 'PT Kota Jaya Samudera', desc: 'Bulk Coal & Mineral Port Stevedoring', coordinates: [116.23, -3.23] },
  { id: 'sub-23', city: 'Bontang', region: 'Kalimantan', ptName: 'PT Kutai Jaya Pundinusa (Bontang)', desc: 'Industrial Cargo & LNG Port Handling', coordinates: [117.47, 0.13] },
  { id: 'sub-24', city: 'Tarakan', region: 'Kalimantan', ptName: 'PT Tarajaya Samudera', desc: 'North Kalimantan Maritime & Stevedoring Hub', coordinates: [117.63, 3.30] },

  // SULAWESI (4)
  { id: 'sub-25', city: 'Makassar', region: 'Sulawesi', ptName: 'PT Makassar Jaya Samudera', desc: 'Eastern Indonesia Gateway Stevedoring Hub', coordinates: [119.43, -5.15] },
  { id: 'sub-26', city: 'Palu', region: 'Sulawesi', ptName: 'PT Sulawesi Jaya Samudera', desc: 'Central Sulawesi Cargo & Port Operations', coordinates: [119.87, -0.90] },
  { id: 'sub-27', city: 'Kendari', region: 'Sulawesi', ptName: 'PT Kendari Jaya Samudera', desc: 'Industrial Freight & Stevedoring Services', coordinates: [122.51, -3.97] },
  { id: 'sub-28', city: 'Bitung', region: 'Sulawesi', ptName: 'PT Tondano Jaya Samudera', desc: 'North Sulawesi International Port Services', coordinates: [125.18, 1.45] },

  // BALI & NUSA TENGGARA (2)
  { id: 'sub-29', city: 'Lombok', region: 'Bali & Nusa Tenggara', ptName: 'PT Mandalika Jaya Samudera', desc: 'Mandalika & Lombok Port Stevedoring', coordinates: [116.32, -8.65] },
  { id: 'sub-30', city: 'Bali (Badung)', region: 'Bali & Nusa Tenggara', ptName: 'PT Bali Jaya Samudera', desc: 'Bali Maritime & Cruise Port Services', coordinates: [115.22, -8.74] },

  // MALUKU & PAPUA (3)
  { id: 'sub-31', city: 'Ambon', region: 'Maluku & Papua', ptName: 'PT Maluku Jaya Samudera', desc: 'Maluku Inter-island Cargo Handling', coordinates: [128.18, -3.70] },
  { id: 'sub-32', city: 'Sorong', region: 'Maluku & Papua', ptName: 'PT Tangguh Jaya Samudera', desc: 'Papua Maritime Gateway & Stevedoring', coordinates: [131.25, -0.88] },
  { id: 'sub-33', city: 'Timika', region: 'Maluku & Papua', ptName: 'PT Timika Jaya Samudera', desc: 'Mining Cargo Logistics & Port Operations', coordinates: [136.88, -4.54] }
];

const regions = [
  { id: 'all', label: 'All Regions', count: 33 },
  { id: 'Sumatera', label: 'Sumatera', count: 9 },
  { id: 'Jawa', label: 'Jawa', count: 8 },
  { id: 'Kalimantan', label: 'Kalimantan', count: 7 },
  { id: 'Sulawesi', label: 'Sulawesi', count: 4 },
  { id: 'Bali & Nusa Tenggara', label: 'Nusa Tenggara', count: 2 },
  { id: 'Maluku & Papua', label: 'Maluku & Papua', count: 3 },
];

const Subsidiaries = () => {
  const [activeNode, setActiveNode] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState('all');

  const filteredSubsidiaries = useMemo(() => {
    if (selectedRegion === 'all') return subsidiaryNodes;
    return subsidiaryNodes.filter(sub => sub.region === selectedRegion);
  }, [selectedRegion]);

  return (
    <div className="slide" style={{ backgroundColor: '#0f172a', padding: 0, perspective: '1500px' }}>
      {/* Background aesthetic */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)' }}></div>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="slide-content" style={{ position: 'relative', height: '100%', overflow: 'hidden' }}>
        
        {/* Title and Filter Panel */}
        <div style={{ position: 'absolute', top: '3.5rem', left: '5rem', zIndex: 50, maxWidth: '640px' }}>
          <h2 className="heading-lg" style={{ color: 'white', textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>OUR SUBSIDIARIES</h2>
          <div style={{ width: '80px', height: '4px', background: 'var(--primary-red)', marginTop: '0.5rem' }}></div>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginTop: '0.8rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Samudera owns and operates 33 stevedoring and port service companies across major and remote ports in Indonesia, supported by an official private port operating license.
          </p>

          {/* Region Filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.25rem' }}>
            {regions.map((reg) => {
              const isSelected = selectedRegion === reg.id;
              return (
                <button
                  key={reg.id}
                  onClick={() => setSelectedRegion(reg.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.4rem 0.85rem',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: isSelected ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: isSelected ? '1px solid var(--primary-red)' : '1px solid rgba(255,255,255,0.15)',
                    backgroundColor: isSelected ? 'rgba(227, 24, 55, 0.25)' : 'rgba(15, 23, 42, 0.6)',
                    color: isSelected ? 'white' : 'rgba(255,255,255,0.7)',
                    backdropFilter: 'blur(8px)',
                    boxShadow: isSelected ? '0 4px 12px rgba(227, 24, 55, 0.3)' : 'none'
                  }}
                >
                  {reg.id === 'all' && <Filter size={13} color="var(--accent-yellow)" />}
                  <span>{reg.label}</span>
                  <span style={{ fontSize: '0.75rem', color: isSelected ? 'var(--accent-yellow)' : 'rgba(255,255,255,0.5)', background: 'rgba(0,0,0,0.3)', padding: '0.1rem 0.4rem', borderRadius: '10px' }}>
                    {reg.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Floating Side Directory */}
        <div 
          style={{ 
            position: 'absolute', 
            top: '3.5rem', 
            right: '4rem', 
            bottom: '3.5rem', 
            width: '380px', 
            zIndex: 50,
            display: 'flex',
            flexDirection: 'column',
            background: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '16px',
            padding: '1.25rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Building size={20} color="var(--primary-red)" />
              <h3 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>PT & Subsidiaries</h3>
            </div>
            <span style={{ color: 'var(--accent-yellow)', fontSize: '0.8rem', fontWeight: 600 }}>
              {selectedRegion === 'all' ? '33 Cities' : selectedRegion}
            </span>
          </div>

          <div style={{ overflowY: 'auto', flex: 1, paddingRight: '0.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', msOverflowStyle: 'none', scrollbarWidth: 'thin' }}>
            {filteredSubsidiaries.map((sub) => {
              const isHovered = activeNode?.id === sub.id;
              return (
                <div
                  key={sub.id}
                  onMouseEnter={() => setActiveNode(sub)}
                  onMouseLeave={() => setActiveNode(null)}
                  style={{
                    background: isHovered ? 'rgba(227, 24, 55, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                    border: isHovered ? '1px solid var(--primary-red)' : '1px solid rgba(255, 255, 255, 0.07)',
                    borderRadius: '10px',
                    padding: '0.75rem 0.9rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    transform: isHovered ? 'translateX(4px)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: isHovered ? 'var(--accent-yellow)' : 'white', fontSize: '0.85rem', fontWeight: 600 }}>
                      <MapPin size={13} color="var(--primary-red)" />
                      <span>{sub.city}</span>
                    </div>
                    <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.1)', padding: '0.1rem 0.45rem', borderRadius: '10px' }}>
                      {sub.region}
                    </span>
                  </div>
                  <div style={{ color: isHovered ? 'white' : 'rgba(255,255,255,0.9)', fontWeight: 700, fontSize: '0.9rem', lineHeight: 1.3, marginBottom: '0.2rem' }}>
                    {sub.ptName}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.78rem', lineHeight: 1.3 }}>
                    {sub.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3D Map Container */}
        <motion.div 
          initial={{ rotateX: 65, rotateZ: 15, scale: 0.8, y: 100, opacity: 0 }}
          animate={{ rotateX: 65, rotateZ: 15, scale: 1.35, y: 50, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ 
            position: 'absolute', inset: 0, width: '100%', height: '100%', 
            transformStyle: 'preserve-3d', transformOrigin: 'center center',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Floor grid of the hologram */}
          <div style={{ position: 'absolute', inset: '-50%', backgroundImage: 'linear-gradient(rgba(227,24,55,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(227,24,55,0.04) 1px, transparent 1px)', backgroundSize: '100px 100px', transform: 'translateZ(-1px)' }}></div>

          <ComposableMap 
            projection="geoMercator" 
            projectionConfig={{
              scale: 1700,
            }}
            width={1200}
            height={800}
            style={{ width: '100%', height: '100%', overflow: 'visible', cursor: 'grab' }}
          >
            <ZoomableGroup zoom={1} center={[116, -2]} maxZoom={5} minZoom={0.5}>
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const isIndonesia = geo.properties.name === "Indonesia";
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={isIndonesia ? "rgba(245, 158, 11, 0.2)" : "rgba(148, 163, 184, 0.08)"}
                        stroke={isIndonesia ? "rgba(245, 158, 11, 0.5)" : "rgba(148, 163, 184, 0.15)"}
                        strokeWidth={1}
                        style={{
                          default: { outline: "none", transition: 'all 0.3s' },
                          hover: { outline: "none", fill: "rgba(245, 158, 11, 0.35)", cursor: 'pointer' },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>

              {/* Network Lines to Jakarta Hub */}
              {subsidiaryNodes.map((sub) => {
                if (sub.isHub) return null;
                const isHovered = activeNode?.id === sub.id;
                const isFiltered = selectedRegion === 'all' || selectedRegion === sub.region;
                
                return (
                  <Line
                    key={`line-${sub.id}`}
                    from={[106.82, -6.13]} // Jakarta Priok Hub
                    to={sub.coordinates}
                    stroke={isHovered ? "var(--accent-yellow)" : "var(--primary-red)"}
                    strokeWidth={isHovered ? 2.5 : 1}
                    strokeLinecap="round"
                    style={{ 
                      strokeDasharray: isHovered ? "none" : "3 3", 
                      opacity: isHovered ? 1 : isFiltered ? 0.3 : 0.05, 
                      transition: 'all 0.3s' 
                    }}
                  />
                );
              })}

              {/* Individual City Nodes */}
              {subsidiaryNodes.map((sub) => {
                const isHovered = activeNode?.id === sub.id;
                const isFiltered = selectedRegion === 'all' || selectedRegion === sub.region;
                const nodeColor = isHovered ? "var(--accent-yellow)" : sub.isHub ? "#ffffff" : "var(--primary-red)";
                const radius = sub.isHub ? 6 : isHovered ? 7 : 4.5;

                return (
                  <Marker key={sub.id} coordinates={sub.coordinates}>
                    <g style={{ opacity: isFiltered ? 1 : 0.25, transition: 'opacity 0.3s' }}>
                      <circle r={radius} fill={nodeColor} />
                      <motion.circle 
                        r={radius} 
                        fill="transparent"
                        stroke={nodeColor}
                        strokeWidth={1.5}
                        initial={{ scale: 1, opacity: 0.8 }}
                        animate={{ scale: isHovered ? 2.5 : 3.5, opacity: 0 }}
                        transition={{ repeat: Infinity, duration: isHovered ? 1 : 2.5, delay: Math.random() * 2 }}
                      />
                    </g>
                    {/* Hover Hotspot */}
                    <circle 
                      r={15} 
                      fill="transparent" 
                      onMouseEnter={(e) => setActiveNode({ ...sub, x: e.clientX, y: e.clientY })}
                      onMouseLeave={() => setActiveNode(null)}
                      onMouseMove={(e) => setActiveNode(prev => prev ? { ...prev, x: e.clientX, y: e.clientY } : null)}
                      style={{ cursor: 'pointer' }}
                    />
                  </Marker>
                );
              })}
            </ZoomableGroup>
          </ComposableMap>
        </motion.div>

        {/* Global Tooltip Portal (When hovering directly on map pins) */}
        <AnimatePresence>
          {activeNode && activeNode.x && activeNode.y && (
            <motion.div 
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              style={{ 
                position: 'fixed', 
                left: activeNode.x, 
                top: activeNode.y - 20, 
                transform: 'translate(-50%, -100%)',
                background: 'rgba(15, 23, 42, 0.95)', backdropFilter: 'blur(16px)',
                border: '1px solid var(--primary-red)', padding: '1.2rem 1.4rem',
                borderRadius: '12px', minWidth: '280px', maxWidth: '340px', pointerEvents: 'none',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8), 0 0 20px rgba(227, 24, 55, 0.3)',
                zIndex: 10000
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MapPin size={15} color="var(--primary-red)" />
                  <span style={{ color: 'var(--accent-yellow)', fontSize: '1rem', fontWeight: 700 }}>{activeNode.city}</span>
                </div>
                <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.8)', background: 'rgba(255,255,255,0.15)', padding: '0.15rem 0.5rem', borderRadius: '12px', fontWeight: 600 }}>
                  {activeNode.region}
                </span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <Building size={18} color="white" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ color: 'white', fontWeight: 700, fontSize: '0.95rem', lineHeight: 1.3 }}>
                    {activeNode.ptName}
                  </div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.82rem', marginTop: '0.35rem', lineHeight: 1.4 }}>
                    {activeNode.desc}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Subsidiaries;

