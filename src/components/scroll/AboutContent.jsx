import React from 'react';

const AboutContent = () => {
  return (
    <div style={{ 
      position: 'absolute', top: 0, right: 0, width: '50vw', height: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '2rem 6rem'
    }}>
      <div className="glass-card-premium" style={{ borderLeft: '4px solid var(--primary-red)', maxHeight: '85vh', overflowY: 'auto' }}>
        <h2 className="heading-lg premium-gradient-text" style={{ marginBottom: '1rem' }}>ABOUT PBS</h2>
        <p className="text-xl" style={{ color: 'var(--navy)', fontWeight: 500, lineHeight: 1.8, marginBottom: '2rem' }}>
          Prima Bandar Samudera (PBS) is a stevedoring company located in Jakarta, covering Tanjung Priok ports and KBN Marunda port. Established in 2012 as a subsidiary of Samudera Indonesia.
        </p>
        <p className="text-lg" style={{ color: 'var(--navy-light)', lineHeight: 1.8, marginBottom: '2rem' }}>
          QHSE aspects while doing business is a priority. Qualified human resources, suitable equipment, and safety first are our keys to delivering excellent service.
        </p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <div>
            <h4 style={{ color: 'var(--primary-red)', fontWeight: 700 }}>Founded</h4>
            <p className="heading-md" style={{ color: 'var(--navy)' }}>2012</p>
          </div>
          <div>
            <h4 style={{ color: 'var(--primary-red)', fontWeight: 700 }}>Certifications</h4>
            <p className="heading-md" style={{ color: 'var(--navy)' }}>ISO 9001, 45001, 14001</p>
          </div>
        </div>
        
        {/* ISO Certificates Image */}
        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
          <img 
            src="/images/iso-certificates.png" 
            alt="ISO Certificates" 
            style={{ 
              maxWidth: '100%', 
              height: 'auto', 
              borderRadius: '8px', 
              boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
              border: '2px solid rgba(255,255,255,0.5)'
            }} 
          />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
