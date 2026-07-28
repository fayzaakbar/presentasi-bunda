import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Anchor, Globe2 } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const AboutSamudera = () => {
  return (
    <div className="slide" style={{ backgroundColor: 'white' }}>
      <div className="bg-pattern"></div>
      <div className="slide-content">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '3rem' }}>
          <h2 className="heading-lg premium-gradient-text">ABOUT US</h2>
          <div style={{ width: '80px', height: '4px', background: 'var(--primary-red)', marginTop: '0.5rem' }}></div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="text-xl" style={{ maxWidth: '800px', marginBottom: '3rem', color: 'var(--navy-light)' }}
        >
          Samudera is a pioneer in Indonesia's shipping industry, providing integrated shipping, ports & logistics services with its vast network throughout the archipelago.
        </motion.p>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', flex: 1 }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} className="glass-card" style={{ background: 'var(--bg-main)' }}>
              <h4 style={{ color: 'var(--primary-red)', fontWeight: 700, marginBottom: '0.5rem', fontSize: '1rem', textTransform: 'uppercase' }}>Origins</h4>
              <p className="heading-md" style={{ color: 'var(--navy)' }}>1949</p>
            </motion.div>
            
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} className="glass-card" style={{ background: 'var(--bg-main)' }}>
               <h4 style={{ color: 'var(--primary-red)', fontWeight: 700, marginBottom: '0.5rem', fontSize: '1rem', textTransform: 'uppercase' }}>Office</h4>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                 <div>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Indonesia</span>
                    <p className="heading-md" style={{ color: 'var(--navy)' }}>73</p>
                 </div>
                 <div>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Overseas</span>
                    <p className="heading-md" style={{ color: 'var(--navy)' }}>13</p>
                 </div>
               </div>
            </motion.div>
            
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} className="glass-card" style={{ background: 'var(--bg-main)' }}>
               <h4 style={{ color: 'var(--primary-red)', fontWeight: 700, marginBottom: '0.5rem', fontSize: '1rem', textTransform: 'uppercase' }}>Group Companies</h4>
               <p className="heading-md" style={{ color: 'var(--navy)' }}>{'>'}110</p>
            </motion.div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', height: '100%' }}>
              
              <motion.div variants={itemVariants} whileHover={{ scale: 1.05, y: -5, boxShadow: 'var(--shadow-xl)' }} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', background: 'var(--bg-main)', cursor: 'pointer' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(227, 24, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--primary-red)' }}>
                  <Anchor size={40} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '1rem' }}>RELIABLE PROFESSIONALS</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Energized by &gt;6.500 competent professionals operating at highest level of service & integrity</p>
              </motion.div>

              <motion.div variants={itemVariants} whileHover={{ scale: 1.05, y: -5, boxShadow: 'var(--shadow-xl)' }} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', background: 'var(--bg-main)', cursor: 'pointer' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(245, 158, 11, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--accent-yellow)' }}>
                  <ShieldCheck size={40} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '1rem' }}>SOLID & TRUSTWORTHY</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Established strong track record & solid reputation over 70 years of experience</p>
              </motion.div>

              <motion.div variants={itemVariants} whileHover={{ scale: 1.05, y: -5, boxShadow: 'var(--shadow-xl)' }} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', background: 'var(--bg-main)', cursor: 'pointer' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(15, 23, 42, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--navy)' }}>
                  <Globe2 size={40} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '1rem' }}>INTEGRATED SERVICES</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Provide customers with innovative solutions through a variety of integrated shipping & logistics services</p>
              </motion.div>
              
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default AboutSamudera;
