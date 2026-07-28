import React from 'react';

const CoverContent = () => {
  return (
    <div style={{ 
      position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '2rem'
    }}>
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
      
      <h1 className="heading-xl" style={{ color: 'white', marginBottom: '1.5rem', maxWidth: '1000px', lineHeight: 1.1 }}>
        PT PRIMA BANDAR SAMUDERA
      </h1>
      
      <h3 className="heading-md premium-gradient-text" style={{ fontSize: '2.5rem' }}>
        Company Profile
      </h3>
      
      <p style={{ color: 'var(--text-light)', marginTop: '2rem', fontSize: '1.5rem', opacity: 0.9, fontStyle: 'italic' }}>
        Indonesia & Beyond
      </p>
    </div>
  );
};

export default CoverContent;
