import React from 'react';
import { motion } from 'framer-motion';
import { Network, Globe2, ShieldCheck, Zap, FileSignature } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } }
};

const tplServices = [
  {
    icon: <Globe2 size={28} />,
    title: 'General Freight Forwarding',
    desc: 'Integrated logistics service to optimize inland transport, sea freight, air freight, or multimodal transport for the general commodity of various industries.',
    color: 'var(--navy)'
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Contract Logistics',
    desc: 'Logistics service along with temporary warehousing, consolidation, and distribution facilities.',
    color: 'var(--primary-red)'
  },
  {
    icon: <Zap size={28} />,
    title: 'Energy Logistics',
    desc: 'Special logistics handling for industries such as chemical, mining, oil & gas to ensure the highest standard of health, safety, and environmental protection.',
    color: 'var(--accent-yellow)'
  },
  {
    icon: <FileSignature size={28} />,
    title: 'Customs Brokerage',
    desc: 'Customs and documentation arrangement for export and import.',
    color: 'var(--navy)'
  }
];

const ThirdPartyLogistics = () => {
  return (
    <div className="slide" style={{ backgroundColor: 'white' }}>
      <div className="bg-pattern"></div>
      <div className="slide-content" style={{ display: 'flex', flexDirection: 'column' }}>
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Network size={40} color="var(--primary-red)" />
            <h2 className="heading-lg premium-gradient-text">3PL (THIRD PARTY LOGISTICS)</h2>
          </div>
          <div style={{ width: '80px', height: '4px', background: 'var(--primary-red)', margin: '1rem 0' }}></div>
          <p style={{ marginTop: '1rem', fontSize: '1.15rem', color: 'var(--navy-light)', maxWidth: '900px', lineHeight: 1.6 }}>
            As a third party logistics (3PL) provider, <strong>Samudera</strong> has a mission to enhance connectivity by providing end-to-end logistics solutions. This service will be able to integrate all logistics processes from the shipper’s warehouse to consignee side.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible" 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '2rem', 
            flex: 1,
            alignContent: 'center'
          }}
        >
          {tplServices.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 10, boxShadow: 'var(--shadow-xl)' }}
              className="glass-card-premium"
              style={{ 
                display: 'flex', 
                gap: '1.5rem',
                alignItems: 'flex-start',
                padding: '2rem',
                borderLeft: `5px solid ${service.color}`,
                background: 'rgba(255, 255, 255, 0.9)'
              }}
            >
              <div style={{ 
                color: service.color,
                background: 'rgba(15, 23, 42, 0.05)',
                padding: '1rem',
                borderRadius: '12px',
                flexShrink: 0
              }}>
                {service.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>{service.title}</h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ThirdPartyLogistics;
