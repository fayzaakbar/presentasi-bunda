import React from 'react';
import { motion } from 'framer-motion';
import { Ship, Anchor, Waves, HardHat, FileText, Wrench } from 'lucide-react';

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

const services = [
  {
    icon: <Ship size={32} />,
    title: 'Bulk & Tanker Shipping',
    desc: 'Operate a fleet of ± 25 vessels including Bulk Carriers, LNG, Gas & Chemical Tankers serving customers in Indonesia & Asia',
    color: 'var(--primary-red)'
  },
  {
    icon: <Ship size={32} />,
    title: 'Container Shipping',
    desc: '>30 liner & feeder services with >50 vessels connecting Indonesian ports & regional ports in Southeast Asia, Far East, India Sub-Continent & Middle East',
    color: 'var(--accent-yellow)'
  },
  {
    icon: <HardHat size={32} />,
    title: 'Ship Management & Crewing',
    desc: 'Services for Samudera\'s owned fleet & third-party Indonesia & global shipping lines with more than 1.000 crews onboard',
    color: 'var(--navy)'
  },
  {
    icon: <Wrench size={32} />,
    title: 'Shipyard',
    desc: 'New build, dry-docking, repair & maintenance services through our shipyard facilities in Indonesia',
    color: 'var(--primary-red)'
  },
  {
    icon: <FileText size={32} />,
    title: 'Shipping Agencies',
    desc: 'Shipping Agency Services to global shipping lines calling Indonesian ports',
    color: 'var(--accent-yellow)'
  },
  {
    icon: <Waves size={32} />,
    title: 'Offshore Support & Salvage',
    desc: 'Offshore support, salvage & underwater works, bunker supply, and project related shipping services to oil & gas industry in Indonesia',
    color: 'var(--navy)'
  }
];

const ShippingServices = () => {
  return (
    <div className="slide" style={{ backgroundColor: 'white' }}>
      <div className="bg-pattern"></div>
      <div className="slide-content">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '3rem' }}>
          <h2 className="heading-lg premium-gradient-text">SHIPPING SERVICES</h2>
          <div style={{ width: '80px', height: '4px', background: 'var(--primary-red)', marginTop: '0.5rem' }}></div>
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
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5, boxShadow: 'var(--shadow-xl)' }}
              className="glass-card-premium"
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                padding: '2.5rem 1.5rem',
                borderTop: `4px solid ${service.color}`,
                background: 'rgba(255, 255, 255, 0.9)'
              }}
            >
              <div style={{ 
                color: service.color, 
                marginBottom: '1.25rem',
                background: 'rgba(15, 23, 42, 0.05)',
                width: '64px',
                height: '64px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '12px'
              }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.75rem' }}>{service.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ShippingServices;
