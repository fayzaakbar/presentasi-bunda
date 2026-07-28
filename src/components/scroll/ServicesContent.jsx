import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Ship, Package, FileCheck, Anchor, HardHat, Warehouse, ClipboardCheck, X } from 'lucide-react';

const services = [
  { 
    icon: <Ship size={24} />, 
    title: 'Stevedoring Operations', 
    desc: 'Penanganan kargo komprehensif, doring, dan stevedoring untuk berbagai jenis kapal (bulk, breakbulk, container).' 
  },
  { 
    icon: <Truck size={24} />, 
    title: 'Project Logistics', 
    desc: 'Solusi logistik end-to-end untuk kargo berat (heavy lift), over-dimensional, dan muatan khusus proyek.' 
  },
  { 
    icon: <Anchor size={24} />, 
    title: 'Port Management', 
    desc: 'Layanan terintegrasi pengelolaan pelabuhan, pemeliharaan peralatan, dan operasional terminal serbaguna.' 
  },
  { 
    icon: <ClipboardCheck size={24} />, 
    title: 'Tally & Inspection', 
    desc: 'Kontrol kuantitas kargo yang akurat, survei kondisi barang, dan inspeksi keselamatan selama penanganan.' 
  },
  { 
    icon: <Warehouse size={24} />, 
    title: 'Warehousing Solutions', 
    desc: 'Fasilitas penyimpanan aman termasuk racking indoor, cold storage, dan open yard di area pelabuhan.' 
  },
  { 
    icon: <FileCheck size={24} />, 
    title: 'Customs & Formalities', 
    desc: 'Penanganan dokumen kepabeanan yang efisien untuk kelancaran bongkar muat lintas batas internasional.' 
  },
  { 
    icon: <HardHat size={24} />, 
    title: 'Equipment & Fabrication', 
    desc: 'Penyediaan peralatan angkat berat (crane, trailer), penyewaan alat berat, dan fabrikasi perlengkapan baja.' 
  },
  { 
    icon: <Package size={24} />, 
    title: 'Packing & Stuffing', 
    desc: 'Pengemasan khusus, lashing, dan unlashing untuk menjamin keselamatan kargo hingga sampai tujuan.' 
  },
];

const ServicesContent = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div style={{ 
      position: 'absolute', top: 0, left: 0, width: '45vw', height: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '2rem 4rem'
    }}>
      <div className="glass-card-premium" style={{ borderRight: '4px solid var(--accent-yellow)', position: 'relative' }}>
        <h2 className="heading-lg premium-gradient-text" style={{ marginBottom: '2rem' }}>OUR SERVICES</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', maxHeight: '60vh', overflowY: 'auto', paddingRight: '10px' }}>
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.8)' }}
              onClick={() => setSelectedService(service)}
              style={{ 
                display: 'flex', alignItems: 'center', gap: '0.75rem', 
                background: 'rgba(255,255,255,0.5)', padding: '0.75rem 1rem', 
                borderRadius: '8px', border: '1px solid rgba(255,255,255,0.8)',
                cursor: 'pointer'
              }}
            >
              <div style={{ color: 'var(--primary-red)' }}>{service.icon}</div>
              <span style={{ fontWeight: 600, color: 'var(--navy)', fontSize: '0.95rem' }}>{service.title}</span>
            </motion.div>
          ))}
        </div>

        {/* Expanded Description Modal inside the card */}
        <AnimatePresence>
          {selectedService && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                background: 'var(--bg-main)', borderRadius: 'inherit',
                padding: '3rem 2rem', display: 'flex', flexDirection: 'column',
                justifyContent: 'center', alignItems: 'center', textAlign: 'center',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <button 
                onClick={() => setSelectedService(null)}
                style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--navy)' }}
              >
                <X size={24} />
              </button>
              <div style={{ color: 'var(--primary-red)', marginBottom: '1rem', transform: 'scale(2)' }}>{selectedService.icon}</div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem' }}>{selectedService.title}</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--navy-light)', lineHeight: 1.6 }}>{selectedService.desc}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ServicesContent;
