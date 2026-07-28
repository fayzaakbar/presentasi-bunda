import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Building } from 'lucide-react';

const contacts = [
  { name: 'Syamsir Amkas', role: 'General Manager', email: 'syamsir.amkas@samudera.id' },
  { name: 'Ary Indrawan', role: 'Marketing Dept Head SBL', email: 'ary.indrawan@samudera.id' },
  { name: 'Riyana Dewi', role: 'Marketing Dept Head PBS', email: 'riri.riyana@samudera.id' },
  { name: 'Prastowo', role: 'Business Dev Dept Head', email: 'toto.prastowo@samudera.id' },
  { name: 'Nimas Sintha Naurisma', role: 'Marketing Specialist', email: 'nimas.sintha@samudera.id' },
  { name: 'Ruth Elika', role: 'Marketing Specialist', email: 'ruth.elika@samudera.id' },
  { name: 'Iriana Kusnendar', role: 'Marketing Support', email: 'iriana.kusnendar@samudera.id' },
  { name: 'Syanindita Adilia Prasanti', role: 'Business Dev Dept', email: 'syanindita.adilia@samudera.id' },
];

const Contact = () => {
  return (
    <div className="slide" style={{ backgroundColor: 'var(--accent-yellow)' }}>
      <div className="bg-pattern" style={{ opacity: 0.05, backgroundImage: 'radial-gradient(rgba(0,0,0,0.5) 1px, transparent 1px)' }}></div>
      <div className="slide-content" style={{ display: 'flex', flexDirection: 'column' }}>
        
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '3rem' }}>
          <h2 className="heading-lg premium-gradient-text">GET IN TOUCH</h2>
          <div style={{ width: '80px', height: '4px', background: 'var(--primary-red)', marginTop: '0.5rem' }}></div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.5fr', gap: '4rem', flex: 1 }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card-premium animate-float"
            style={{ height: 'fit-content' }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Building size={24} color="var(--primary-red)" /> PT Prima Bandar Samudera
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Head Office</span>
                <p style={{ color: 'var(--navy)', fontSize: '1.1rem', fontWeight: 600, marginTop: '0.25rem' }}>Samudera Kirana Fl. 15</p>
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', color: 'var(--navy)' }}>
                  <MapPin size={20} style={{ flexShrink: 0, color: 'var(--primary-red)' }} />
                  <p>Jl. Yos Sudarso Kav 88, Jakarta<br/>14320 - INDONESIA</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', alignContent: 'start' }}
          >
            {contacts.map((contact, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02, y: -2 }}
                style={{ 
                  background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', 
                  boxShadow: 'var(--shadow-sm)', border: '1px solid rgba(0,0,0,0.05)'
                }}
              >
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)' }}>{contact.name}</h4>
                <p style={{ color: 'var(--primary-red)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>{contact.role}</p>
                <a href={`mailto:${contact.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.target.style.color = 'var(--navy)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>
                  <Mail size={16} /> {contact.email}
                </a>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
      
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '20px', background: 'var(--navy)' }}></div>
    </div>
  );
};

export default Contact;
