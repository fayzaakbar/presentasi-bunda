import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, MapPin } from 'lucide-react';

const AboutPBS = () => {
  return (
    <div className="slide" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="bg-pattern"></div>
      <div className="slide-content">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '3rem' }}>
          <h2 className="heading-lg premium-gradient-text">ABOUT PBS</h2>
          <div style={{ width: '80px', height: '4px', background: 'var(--primary-red)', marginTop: '0.5rem' }}></div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', flex: 1, alignItems: 'center' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <p className="text-xl" style={{ color: 'var(--navy-light)', fontWeight: 500, lineHeight: 1.8 }}>
              Prima Bandar Samudera (PBS) is a stevedoring company located in Jakarta. PBS operational area covers Tanjung Priok ports and KBN Marunda port. PBS is a subsidiary of Samudera Indonesia, which was established on 2012.
            </p>
            
            <p className="text-lg" style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
              QHSE aspects while doing business is a priority for PBS. Qualified human resources, suitable and well-maintained equipment, and safety first are PBS' keys to delivering excellent service.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <span className="badge badge-red">Est. 2012</span>
              <span className="badge badge-navy"><MapPin size={16} style={{ marginRight: '0.5rem' }}/> Jakarta</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-panel animate-float"
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem', border: '1px solid rgba(255,255,255,0.2)', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.5)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Award size={32} color="var(--accent-yellow)" />
              <h3 className="heading-md" style={{ color: 'white' }}>ISO Certifications</h3>
            </div>
            
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>
              Certified by United Registrar of System (URS) for maintaining high standards in operations and management.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem 1.5rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Target size={24} color="var(--primary-red)" />
                <span style={{ fontSize: '1.25rem', fontWeight: 600 }}>ISO 9001:2015</span>
                <span style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Quality Management</span>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem 1.5rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Target size={24} color="var(--primary-red)" />
                <span style={{ fontSize: '1.25rem', fontWeight: 600 }}>ISO 45001:2018</span>
                <span style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Health & Safety</span>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem 1.5rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Target size={24} color="var(--primary-red)" />
                <span style={{ fontSize: '1.25rem', fontWeight: 600 }}>ISO 14001:2015</span>
                <span style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Environment</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default AboutPBS;
