import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, MapPin, Building2, CheckCircle2 } from 'lucide-react';

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

const PortOperations = () => {
  return (
    <div className="slide" style={{ backgroundColor: 'white' }}>
      <div className="bg-pattern"></div>
      <div className="slide-content" style={{ display: 'flex', flexDirection: 'column' }}>
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '2rem' }}>
          <h2 className="heading-lg premium-gradient-text">PORT OPERATIONS</h2>
          <div style={{ width: '80px', height: '4px', background: 'var(--primary-red)', marginTop: '0.5rem' }}></div>
        </motion.div>

        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible" 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '3rem', 
            flex: 1 
          }}
        >
          {/* Left Column: Key Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', justifyContent: 'center' }}>
            <motion.div variants={itemVariants} className="glass-card" style={{ display: 'flex', gap: '1.5rem', background: 'var(--bg-main)' }}>
              <div style={{ color: 'var(--primary-red)' }}><Anchor size={40} /></div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>Stevedoring Network</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Samudera owns & operates stevedoring companies in <strong>all major & remote ports</strong> of Indonesia.</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card" style={{ display: 'flex', gap: '1.5rem', background: 'var(--bg-main)' }}>
              <div style={{ color: 'var(--accent-yellow)' }}><Building2 size={40} /></div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>Private Operating License</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Samudera is one of the few Indonesian private companies (non-government owned) who has a <strong>port operating license</strong>.</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card" style={{ display: 'flex', gap: '1.5rem', background: 'var(--bg-main)' }}>
              <div style={{ color: 'var(--navy)' }}><CheckCircle2 size={40} /></div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>Long-Term Concessions</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Samudera has long-term port concessions & operates container & multipurpose terminals in both the <strong>current and future capital city</strong> of Indonesia.</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Focus */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center' }}>
            <motion.div variants={itemVariants} className="glass-card-premium" style={{ background: 'var(--navy)', color: 'white', padding: '2rem', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}>
               <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.1, transform: 'scale(2)' }}>
                  <MapPin size={100} color="white" />
               </div>
               <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--accent-yellow)' }}>Key Terminals</h3>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                   <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <MapPin size={20} color="var(--primary-red)" />
                   </div>
                   <div>
                     <p style={{ fontSize: '1.25rem', fontWeight: 600 }}>JAKARTA</p>
                     <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>TG. PRIOK</p>
                   </div>
                 </div>

                 <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                   <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <MapPin size={20} color="var(--primary-red)" />
                   </div>
                   <div>
                     <p style={{ fontSize: '1.25rem', fontWeight: 600 }}>NUSANTARA</p>
                     <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>PALARAN</p>
                   </div>
                 </div>
               </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default PortOperations;
