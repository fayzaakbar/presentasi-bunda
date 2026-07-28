import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Ship, Package, FileCheck, Anchor, HardHat, Warehouse, ClipboardCheck } from 'lucide-react';

const services = [
  { 
    icon: <Ship size={32} />, 
    title: 'Stevedoring Operations', 
    description: 'Comprehensive cargo handling, doring, and stevedoring for various vessel types.',
    color: 'var(--primary-red)' 
  },
  { 
    icon: <Truck size={32} />, 
    title: 'Project Logistics', 
    description: 'End-to-end logistics solutions for heavy, over-dimensional, and specialized cargo.',
    color: 'var(--navy)' 
  },
  { 
    icon: <Anchor size={32} />, 
    title: 'Port Management', 
    description: 'Integrated port services, equipment maintenance, and terminal operations.',
    color: 'var(--accent-yellow)' 
  },
  { 
    icon: <ClipboardCheck size={32} />, 
    title: 'Tally & Inspection', 
    description: 'Accurate cargo quantity control, condition surveys, and safety inspections.',
    color: 'var(--primary-red)' 
  },
  { 
    icon: <Warehouse size={32} />, 
    title: 'Warehousing Solutions', 
    description: 'Secure storage facilities including indoor racking, cold storage, and open yards.',
    color: 'var(--navy)' 
  },
  { 
    icon: <FileCheck size={32} />, 
    title: 'Customs & Formalities', 
    description: 'Efficient clearance handling and cross-border documentation services.',
    color: 'var(--accent-yellow)' 
  },
  { 
    icon: <HardHat size={32} />, 
    title: 'Equipment & Fabrication', 
    description: 'Provision of heavy lifting equipment, cranes, and gear fabrication works.',
    color: 'var(--primary-red)' 
  },
  { 
    icon: <Package size={32} />, 
    title: 'Packing & Stuffing', 
    description: 'Custom packaging, lashing, and securing to guarantee cargo safety.',
    color: 'var(--navy)' 
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } }
};

const ScopeOfServices = () => {
  return (
    <div className="slide" style={{ backgroundColor: 'white' }}>
      <div className="bg-pattern"></div>
      <div className="slide-content">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '3rem' }}>
          <h2 className="heading-lg premium-gradient-text">SCOPE OF SERVICES</h2>
          <div style={{ width: '80px', height: '4px', background: 'var(--primary-red)', marginTop: '0.5rem' }}></div>
        </motion.div>

        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible" 
          className="grid-cols-4" 
          style={{ flex: 1, alignContent: 'center' }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5, boxShadow: 'var(--shadow-xl)' }}
              className="glass-card-premium animate-float"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                textAlign: 'center',
                padding: '2.5rem 1.5rem',
                cursor: 'pointer',
                borderTop: `4px solid ${service.color}`
              }}
            >
              <div style={{ 
                color: service.color, 
                marginBottom: '1.25rem',
                background: 'white',
                padding: '1.25rem',
                borderRadius: '50%',
                boxShadow: 'var(--shadow-sm)'
              }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.75rem' }}>{service.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.5, margin: 0 }}>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ScopeOfServices;
