import React from 'react';
import { motion } from 'framer-motion';

const Cover = () => {
  return (
    <div className="slide" style={{ padding: 0, overflow: 'hidden' }}>
      <div className="cover-bg animate-ken-burns" style={{ 
        position: 'absolute', inset: -20, 
        backgroundImage: 'url(/images/port_background.png)', 
        backgroundSize: 'cover', backgroundPosition: 'center',
        zIndex: 0
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.6) 50%, rgba(227, 24, 55, 0.3) 100%)' }}></div>
      </div>
      
      {/* Ambient floating glow */}
      <div className="ambient-glow animate-float" style={{ top: '20%', right: '10%', width: '500px', height: '500px', background: 'var(--primary-red)' }}></div>
      <div className="ambient-glow animate-float-delayed" style={{ bottom: '-10%', left: '20%', width: '600px', height: '600px', background: 'var(--accent-yellow)' }}></div>

      <div style={{ position: 'relative', zIndex: 1, padding: '6rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
             <div style={{ width: '60px', height: '40px', background: 'var(--primary-red)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '6px 0'}}>
                <div style={{ height: '6px', width: '100%', background: 'white' }}></div>
                <div style={{ height: '6px', width: '100%', background: 'white', position: 'relative' }}>
                    <div style={{ position: 'absolute', right: '45%', top: '-8px', fontSize: '24px', fontWeight: 'bold', color: 'black', lineHeight: 1 }}>S</div>
                </div>
                <div style={{ height: '6px', width: '100%', background: 'white' }}></div>
             </div>
             <h2 style={{ color: 'white', fontSize: '3rem', fontWeight: 800, letterSpacing: '0.05em' }}>SAMUDERA</h2>
          </div>
          
          <h1 className="heading-xl" style={{ color: 'white', marginBottom: '1.5rem', maxWidth: '800px', lineHeight: 1.2 }}>
            PT PRIMA BANDAR SAMUDERA
          </h1>
          
          <div style={{ width: '150px', height: '8px', background: 'var(--primary-red)', marginBottom: '1.5rem' }}></div>
          
          <h3 className="heading-md" style={{ color: 'var(--accent-yellow)' }}>
            Company Profile
          </h3>
          <p style={{ color: 'var(--text-light)', marginTop: '2rem', fontSize: '1.5rem', opacity: 0.9, fontStyle: 'italic' }}>
            Indonesia & Beyond
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Cover;
