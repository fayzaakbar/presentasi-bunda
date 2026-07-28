import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Package, Truck, Warehouse, Ship, Users } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

const FlowNode = ({ icon, label, subLabel, color }) => (
  <motion.div variants={itemVariants} className="glass-card-premium" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.5rem', width: '160px', textAlign: 'center', borderTop: `4px solid ${color}` }}>
    <div style={{ color: color, marginBottom: '1rem', background: 'white', padding: '1rem', borderRadius: '50%', boxShadow: 'var(--shadow-sm)' }}>
      {icon}
    </div>
    <h4 style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{label}</h4>
    {subLabel && <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{subLabel}</span>}
  </motion.div>
);

const FlowArrow = () => (
  <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-red)', padding: '0 1rem' }}>
    <ArrowRight size={24} />
  </motion.div>
);

const IntegratedSolutions = () => {
  return (
    <div className="slide" style={{ backgroundColor: 'white' }}>
      <div className="bg-pattern"></div>
      <div className="slide-content" style={{ display: 'flex', flexDirection: 'column' }}>
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h2 className="heading-lg premium-gradient-text">INTEGRATED SOLUTIONS</h2>
          <div style={{ width: '80px', height: '4px', background: 'var(--primary-red)', margin: '0.5rem auto 0' }}></div>
          <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: 'var(--navy-light)', maxWidth: '800px', margin: '1.5rem auto 0' }}>
            Samudera Indonesia is committed to provide integrated transportation and logistics services, under one roof, providing optimum solutions that are customized to our customer's needs.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible" 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            flex: 1,
            gap: '2rem'
          }}
        >
          {/* Top Row - Origin */}
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            <FlowNode icon={<Package size={32} />} label="SHIPPER" color="var(--navy)" />
            <FlowArrow />
            <FlowNode icon={<Truck size={32} />} label="INLAND TRANSPORT" color="var(--accent-yellow)" />
            <FlowArrow />
            <FlowNode icon={<Warehouse size={32} />} label="WAREHOUSE" color="var(--primary-red)" />
            <FlowArrow />
            <FlowNode icon={<Package size={32} />} label="CONTAINER DEPOT" color="var(--navy)" />
            <FlowArrow />
            <FlowNode icon={<Ship size={32} />} label="PORTS" color="var(--accent-yellow)" />
          </div>

          <motion.div variants={itemVariants} style={{ color: 'var(--primary-red)', padding: '1rem 0' }}>
            <ArrowDown size={32} />
          </motion.div>

          {/* Middle Row - Ocean Freight */}
          <div style={{ width: '100%', maxWidth: '800px' }}>
            <motion.div variants={itemVariants} className="glass-card-premium" style={{ background: 'var(--navy)', color: 'white', padding: '2rem', textAlign: 'center', borderRadius: '16px' }}>
              <Ship size={48} style={{ color: 'white', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '2px' }}>SHIPPING</h3>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} style={{ color: 'var(--primary-red)', padding: '1rem 0' }}>
            <ArrowDown size={32} />
          </motion.div>

          {/* Bottom Row - Destination */}
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            <FlowNode icon={<Ship size={32} />} label="PORTS" color="var(--accent-yellow)" />
            <FlowArrow />
            <FlowNode icon={<Package size={32} />} label="CONTAINER DEPOT" color="var(--navy)" />
            <FlowArrow />
            <FlowNode icon={<Warehouse size={32} />} label="WAREHOUSE" color="var(--primary-red)" />
            <FlowArrow />
            <FlowNode icon={<Truck size={32} />} label="INLAND TRANSPORT" color="var(--accent-yellow)" />
            <FlowArrow />
            <FlowNode icon={<Users size={32} />} label="END USER" color="var(--navy)" />
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default IntegratedSolutions;
