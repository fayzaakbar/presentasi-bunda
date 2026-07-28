import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const ContactContent = () => {
  return (
    <div style={{ 
      position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '2rem'
    }}>
      <div className="glass-card-premium" style={{ borderTop: '4px solid var(--primary-red)', maxWidth: '600px', textAlign: 'center' }}>
        <h2 className="heading-lg premium-gradient-text" style={{ marginBottom: '1rem' }}>GET IN TOUCH</h2>
        <p className="text-lg" style={{ color: 'var(--navy)', marginBottom: '2rem' }}>Ready to partner with the most reliable stevedoring company in Indonesia?</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', width: '100%' }}>
          
          {/* Main Office */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', background: 'rgba(255,255,255,0.5)', padding: '15px 25px', borderRadius: '12px' }}>
            <MapPin size={28} color="var(--primary-red)" style={{ marginTop: '4px' }} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--navy)' }}>Head Office PT Prima Bandar Samudera</div>
              <div style={{ fontSize: '1rem', fontWeight: 500, color: '#334155', marginTop: '4px' }}>
                Samudera Kirana Fl. 15<br/>
                Jl. Yos Sudarso Kav 88, Jakarta 14320 - INDONESIA
              </div>
            </div>
          </div>

          {/* Contact Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1rem', 
            width: '100%',
            maxHeight: '40vh',
            overflowY: 'auto',
            paddingRight: '10px'
          }}>
            {[
              { name: "Iriana", phone: "08111631108", email: "Iriana.kusnendar@samudera.id" },
              { name: "Hadhi", phone: "085881646596", email: "hadhi.yudhono@samudera.id" },
              { name: "Riry", phone: "085718545528", email: "riri.riyana@samudera.id" }
            ].map((contact, idx) => (
              <div key={idx} style={{ 
                background: 'rgba(255, 255, 255, 0.7)', 
                padding: '15px 20px', 
                borderRadius: '8px',
                textAlign: 'left',
                borderLeft: '4px solid var(--primary-red)',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
              }}>
                <div style={{ fontWeight: 800, color: 'var(--navy)', fontSize: '1.2rem', marginBottom: '10px' }}>{contact.name}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Mail size={16} color="var(--primary-red)" />
                    <a href={`mailto:${contact.email}`} style={{ fontSize: '0.95rem', color: '#0369a1', textDecoration: 'none', fontWeight: 600 }}>
                      {contact.email}
                    </a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <a href={`tel:${contact.phone}`} style={{ fontSize: '0.95rem', color: '#334155', textDecoration: 'none', fontWeight: 500 }}>
                      {contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactContent;
