import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Package, Warehouse, Network, Construction, ThermometerSnowflake } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

const logistics = [
  { icon: <Truck size={36} />, title: 'Inland Transport', color: 'var(--primary-red)' },
  { icon: <Package size={36} />, title: 'Container Depot', color: 'var(--accent-yellow)' },
  { icon: <Warehouse size={36} />, title: 'Warehouse & Distribution', color: 'var(--navy)' },
  { icon: <Network size={36} />, title: 'Third Party Logistics', color: 'var(--primary-red)' },
  { icon: <Construction size={36} />, title: 'Project Logistics', color: 'var(--accent-yellow)' },
  { icon: <ThermometerSnowflake size={36} />, title: 'Cold Logistics', color: 'var(--navy)' }
];

const LogisticsServices = () => {
  return (
    <div className="slide" style={{ backgroundColor: 'white' }}>
      <div className="bg-pattern"></div>
      <div className="slide-content" style={{ display: 'flex', flexDirection: 'column' }}>
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '2rem' }}>
          <h2 className="heading-lg premium-gradient-text">LOGISTICS SERVICES</h2>
          <div style={{ width: '80px', height: '4px', background: 'var(--primary-red)', marginTop: '0.5rem' }}></div>
          <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: 'var(--navy-light)', maxWidth: '800px', lineHeight: 1.6 }}>
            Samudera provides integrated multimodal logistics services to its customers. We invest & operate supply chain & logistics facilities: distribution centre, warehouse, container depot, as well as land side equipment to support our services.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible" 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '2rem', 
            flex: 1,
            alignContent: 'center'
          }}
        >
          {logistics.map((log, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5, boxShadow: 'var(--shadow-xl)' }}
              className="glass-card-premium"
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                textAlign: 'center',
                padding: '3rem 2rem',
                borderBottom: `4px solid ${log.color}`,
                background: 'rgba(255, 255, 255, 0.9)',
                cursor: 'pointer'
              }}
            >
              <div style={{ 
                color: log.color, 
                marginBottom: '1.5rem',
                background: 'rgba(15, 23, 42, 0.05)',
                padding: '1.5rem',
                borderRadius: '50%',
                boxShadow: 'var(--shadow-sm)'
              }}>
                {log.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)' }}>{log.title}</h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} style={{ marginTop: '2rem', textAlign: 'center', background: 'var(--bg-main)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-yellow)' }}>
          <p style={{ fontWeight: 600, color: 'var(--navy)' }}>Through its nationwide network & wealthy experience, Samudera is the <strong>logistics partner of choice</strong> in Indonesia.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default LogisticsServices;
