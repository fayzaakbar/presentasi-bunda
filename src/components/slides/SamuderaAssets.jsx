import React from 'react';
import { motion } from 'framer-motion';
import { Ship, Truck, Building2, MapPin, Users, PackageOpen } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

const assets = [
  { icon: <Ship size={36} />, value: '> 60', label: 'Fleets of Vessels', desc: '(Charter or Owned)', color: 'var(--primary-red)' },
  { icon: <PackageOpen size={36} />, value: '> 45 Ha', label: 'Container Depot', desc: '9 cities in Indonesia', color: 'var(--accent-yellow)' },
  { icon: <MapPin size={36} />, value: '> 100', label: 'Network Offices', desc: 'Indonesia & Overseas', color: 'var(--navy)' },
  { icon: <Truck size={36} />, value: '> 300', label: 'Fleets of Trucks', desc: '(Trailer or Non-Trailer)', color: 'var(--navy)' },
  { icon: <Building2 size={36} />, value: '> 2.0 Ha', label: 'Warehouse Area', desc: '6 Cities in Indonesia', color: 'var(--primary-red)' },
  { icon: <Users size={36} />, value: '> 6,500', label: 'Employees', desc: 'Indonesia & Overseas Offices', color: 'var(--accent-yellow)' }
];

const SamuderaAssets = () => {
  return (
    <div className="slide" style={{ backgroundColor: 'white' }}>
      <div className="bg-pattern"></div>
      <div className="slide-content">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h2 className="heading-lg premium-gradient-text">OUR ASSETS</h2>
          <div style={{ width: '80px', height: '4px', background: 'var(--primary-red)', margin: '0.5rem auto 0' }}></div>
        </motion.div>

        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible" 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '2.5rem', 
            flex: 1,
            alignContent: 'center',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          {assets.map((asset, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5, boxShadow: 'var(--shadow-xl)' }}
              className="glass-card-premium"
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                textAlign: 'center',
                padding: '3rem 2rem',
                borderTop: `4px solid ${asset.color}`,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ 
                position: 'absolute', top: '-20px', right: '-20px', opacity: 0.05, transform: 'scale(3)', color: asset.color
              }}>
                {asset.icon}
              </div>
              <div style={{ 
                color: asset.color, 
                marginBottom: '1.5rem',
                background: 'rgba(255,255,255,0.8)',
                padding: '1.25rem',
                borderRadius: '50%',
                boxShadow: 'var(--shadow-sm)'
              }}>
                {asset.icon}
              </div>
              <h3 className="heading-lg" style={{ color: 'var(--navy)', marginBottom: '0.5rem', fontSize: '2.5rem' }}>{asset.value}</h3>
              <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--navy-light)', marginBottom: '0.25rem' }}>{asset.label}</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{asset.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SamuderaAssets;
