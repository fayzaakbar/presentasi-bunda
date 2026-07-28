import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, MapPin, Navigation } from 'lucide-react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup, Line } from 'react-simple-maps';

const geoUrl = "/world-50m.json";

const operationNodes = [
  // Overseas
  { id: 'uae', label: "UAE", type: 'overseas', coordinates: [55.27, 25.20] },
  { id: 'pakistan', label: "Pakistan", type: 'overseas', coordinates: [67.00, 24.86] },
  { id: 'india', label: "India", type: 'overseas', coordinates: [72.87, 19.07] },
  { id: 'srilanka', label: "Sri Lanka", type: 'overseas', coordinates: [79.86, 6.92] },
  { id: 'bangladesh', label: "Bangladesh", type: 'overseas', coordinates: [91.80, 22.35] },
  { id: 'myanmar', label: "Myanmar", type: 'overseas', coordinates: [95.95, 21.91] },
  { id: 'thailand', label: "Thailand", type: 'overseas', coordinates: [100.50, 13.75] },
  { id: 'kamboja', label: "Kamboja", type: 'overseas', coordinates: [104.92, 11.55] },
  { id: 'vietnam', label: "Vietnam", type: 'overseas', coordinates: [106.62, 10.82] },
  { id: 'malaysia', label: "Malaysia", type: 'overseas', coordinates: [101.97, 4.21] },
  { id: 'singapore', label: "Singapore", type: 'overseas', coordinates: [103.81, 1.35] },
  { id: 'china', label: "China", type: 'overseas', coordinates: [116.40, 39.90] },
  { id: 'hongkong', label: "Hong Kong", type: 'overseas', coordinates: [114.16, 22.28] },
  { id: 'filipina', label: "Filipina", type: 'overseas', coordinates: [120.98, 14.59] },
  
  // Indonesia (Macro Regions)
  { id: 'sumatera', label: "Sumatera", type: 'indonesia', coordinates: [101.50, 0.00], desc: 'Kuala Tanjung, Belawan, Dumai, Karimun, Batam, Tanjung Pinang, Pekanbaru, Padang, Jambi, Palembang, Bengkulu, Bandar Lampung' },
  { id: 'jawa', label: "Jawa", type: 'indonesia', coordinates: [110.00, -7.20], desc: 'Cilegon, Jakarta, Bandung, Patimban, Cikampek, Cikarang, Cirebon, Cilacap, Bengkulu, Semarang, Yogyakarta, Solo, Jepara, Surabaya, Jember, Madura' },
  { id: 'kalimantan', label: "Kalimantan", type: 'indonesia', coordinates: [114.00, 1.50], desc: 'Pontianak, Banjarmasin, Balikpapan, Samarinda, Palaran, Bontang, Tarakan, Kotabaru' },
  { id: 'sulawesi', label: "Sulawesi", type: 'indonesia', coordinates: [120.00, -2.50], desc: 'Kendari, Makassar, Bitung, Palu' },
  { id: 'nusa_tenggara', label: "Bali & Nusa Tenggara", type: 'indonesia', coordinates: [118.00, -8.50], desc: 'Badung, Lombok' },
  { id: 'papua', label: "Maluku & Papua", type: 'indonesia', coordinates: [135.00, -4.00], desc: 'Saumlaki, Ambon, Sorong, Teluk Bintuni, Biak, Timika' }
];

const OperationAreas = () => {
  const [activeNode, setActiveNode] = useState(null);

  return (
    <div className="slide" style={{ backgroundColor: '#0f172a', padding: 0, perspective: '1500px' }}>
      {/* Background aesthetic */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 60%, #1e293b 0%, #0f172a 100%)' }}></div>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="slide-content" style={{ position: 'relative', height: '100%', overflow: 'hidden' }}>
        
        {/* Title */}
        <div style={{ position: 'absolute', top: '4rem', left: '6rem', zIndex: 50 }}>
          <h2 className="heading-lg" style={{ color: 'white', textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>OPERATION AREAS</h2>
          <div style={{ width: '80px', height: '4px', background: 'var(--primary-red)', marginTop: '0.5rem' }}></div>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '1rem', fontSize: '1.2rem', maxWidth: '600px' }}>
            Hover over the 3D map nodes to explore our vast operational network across Asia and the Indonesian Archipelago.
          </p>
          
          <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-yellow)', fontSize: '0.9rem', fontWeight: 600 }}>
              <Globe size={18} /> OVERSEAS
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-red)', fontSize: '0.9rem', fontWeight: 600 }}>
              <MapPin size={18} /> INDONESIA
            </div>
          </div>
        </div>

        {/* 3D Map Container */}
        <motion.div 
          initial={{ rotateX: 65, rotateZ: -15, scale: 0.8, y: 100, opacity: 0 }}
          animate={{ rotateX: 65, rotateZ: -15, scale: 1.2, y: 50, opacity: 1 }}
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
          <div style={{ position: 'absolute', inset: '-50%', backgroundImage: 'linear-gradient(rgba(227,24,55,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(227,24,55,0.05) 1px, transparent 1px)', backgroundSize: '100px 100px', transform: 'translateZ(-1px)' }}></div>

        <ComposableMap 
            projection="geoMercator" 
            projectionConfig={{
              scale: 500,
            }}
            width={1200}
            height={800}
            style={{ width: '100%', height: '100%', overflow: 'visible', cursor: 'grab' }}
          >
            <ZoomableGroup zoom={1} center={[100, 15]} maxZoom={5} minZoom={0.5}>
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const isIndonesia = geo.properties.name === "Indonesia";
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={isIndonesia ? "rgba(227, 24, 55, 0.2)" : "rgba(148, 163, 184, 0.15)"}
                        stroke={isIndonesia ? "rgba(227, 24, 55, 0.6)" : "rgba(148, 163, 184, 0.3)"}
                        strokeWidth={1}
                        style={{
                          default: { outline: "none", transition: 'all 0.3s' },
                          hover: { outline: "none", fill: "rgba(227, 24, 55, 0.4)", cursor: 'pointer' },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>

              {/* Network Lines */}
              {operationNodes.map((node) => {
                if (node.id === 'jawa') return null;
                const isOverseas = node.type === 'overseas';
                return (
                  <Line
                    key={`line-${node.id}`}
                    from={[106.82, -6.20]} // Jakarta Hub
                    to={node.coordinates}
                    stroke={isOverseas ? "var(--accent-yellow)" : "var(--primary-red)"}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    style={{ strokeDasharray: "4 4", opacity: 0.4, transition: 'all 0.3s' }}
                  />
                );
              })}

              {operationNodes.map((node) => {
                const color = node.type === 'indonesia' ? 'var(--primary-red)' : 'var(--accent-yellow)';
                const baseRadius = node.type === 'indonesia' ? 5 : 4;
                
                return (
                  <Marker key={node.id} coordinates={node.coordinates}>
                    <circle r={baseRadius} fill={color} />
                    <motion.circle 
                      r={baseRadius} 
                      fill="transparent"
                      stroke={color}
                      strokeWidth={2}
                      initial={{ scale: 1, opacity: 0.8 }}
                      animate={{ scale: 4, opacity: 0 }}
                      transition={{ repeat: Infinity, duration: 2, delay: Math.random() }}
                    />
                    <circle 
                      r={20} 
                      fill="transparent" 
                      onMouseEnter={(e) => setActiveNode({ ...node, x: e.clientX, y: e.clientY })}
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

        {/* Global Tooltip Portal (Rendered outside the SVG and 3D Context) */}
        <AnimatePresence>
          {activeNode && (
            <motion.div 
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              style={{ 
                position: 'fixed', 
                left: activeNode.x, 
                top: activeNode.y - 20, 
                transform: 'translate(-50%, -100%)',
                background: 'rgba(15, 23, 42, 0.95)', backdropFilter: 'blur(16px)',
                border: `1px solid ${activeNode.type === 'indonesia' ? 'var(--primary-red)' : 'var(--accent-yellow)'}`, 
                padding: '1.25rem', borderRadius: '12px', minWidth: '250px', 
                pointerEvents: 'none', boxShadow: '0 30px 60px rgba(0,0,0,0.8)',
                zIndex: 1000
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: activeNode.desc ? '0.5rem' : '0' }}>
                <Navigation size={18} color={activeNode.type === 'indonesia' ? 'var(--primary-red)' : 'var(--accent-yellow)'} />
                <h3 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 700 }}>{activeNode.label}</h3>
              </div>
              {activeNode.desc && (
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {activeNode.desc}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default OperationAreas;
