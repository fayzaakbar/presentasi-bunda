import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, X, Maximize2 } from 'lucide-react';

const commodities = [
  { name: "Over-dimension Cargo", img: "/fotopbs/comm_overdimension.png" },
  { name: "Wire Rod", img: "/fotopbs/comm_wirerod.png" },
  { name: "Bentonite", img: "/fotopbs/comm_bentonite.png" },
  { name: "Steel Pipe", img: "/fotopbs/comm_steelpipe.png" },
  { name: "Aluminum Ingot", img: "/fotopbs/comm_aluminum.png" },
  { name: "Pulp and Paper", img: "/fotopbs/comm_pulp.png" },
  { name: "Steel Plate & Coil", img: "/fotopbs/comm_steelcoil.png" },
  { name: "Roll Paper", img: "/fotopbs/comm_rollpaper.png" }
];

const chunkArray = (array, size) => {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, size + index));
    index += size;
  }
  return chunked;
};

const commodityChunks = chunkArray(commodities, 6);

const Experiences = () => {
  const [currentChunk, setCurrentChunk] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);

  const nextChunk = () => setCurrentChunk((prev) => (prev + 1) % commodityChunks.length);
  const prevChunk = () => setCurrentChunk((prev) => (prev - 1 + commodityChunks.length) % commodityChunks.length);

  return (
    <div className="slide" style={{ backgroundColor: 'white' }}>
      <div className="bg-pattern"></div>
      <div className="slide-content">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h2 className="heading-lg premium-gradient-text">COMMODITIES PORTFOLIO</h2>
            <div style={{ width: '80px', height: '4px', background: 'var(--primary-red)', marginTop: '0.5rem' }}></div>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
             <button onClick={prevChunk} className="control-btn" style={{ position: 'relative', bottom: 0, right: 0 }}><ChevronLeft /></button>
             <button onClick={nextChunk} className="control-btn" style={{ position: 'relative', bottom: 0, right: 0 }}><ChevronRight /></button>
          </div>
        </motion.div>

        <div style={{ flex: 1, position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentChunk}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="grid-cols-3"
              style={{ height: '100%' }}
            >
              {commodityChunks[currentChunk].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setSelectedItem(item)}
                  className="glass-card-premium"
                  style={{
                    background: 'var(--navy)',
                    backgroundImage: `url('${item.img}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '2.5rem',
                    borderLeft: '4px solid var(--accent-yellow)',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-md)',
                    cursor: 'pointer'
                  }}
                >
                  {/* Dark overlay to make text readable over image */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    background: 'linear-gradient(135deg, rgba(15,23,42,0.85) 0%, rgba(227,24,55,0.7) 100%)',
                    zIndex: 0, transition: 'opacity 0.3s'
                  }} className="card-overlay"></div>
                  
                  <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)', marginBottom: '0.5rem' }}>
                      {item.name}
                    </h3>
                    <div className="hover-icon" style={{ opacity: 0, transition: 'opacity 0.3s', color: 'var(--accent-yellow)' }}>
                      <Maximize2 size={24} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 1000,
              background: 'rgba(15, 23, 42, 0.95)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              backdropFilter: 'blur(8px)', cursor: 'zoom-out'
            }}
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedItem(null); }}
              style={{
                position: 'absolute', top: '2rem', right: '2rem',
                width: '3rem', height: '3rem', borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)', border: 'none',
                color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}
            >
              <X size={24} />
            </button>
            <h3 style={{ color: 'white', fontSize: '2rem', marginBottom: '1rem', fontWeight: 700, letterSpacing: '1px' }}>
              {selectedItem.name}
            </h3>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedItem.img} 
              alt={selectedItem.name}
              style={{
                maxHeight: '75vh', maxWidth: '85vw',
                objectFit: 'contain', borderRadius: 'var(--radius-lg)',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .glass-card-premium:hover .card-overlay {
          opacity: 0.7 !important;
        }
        .glass-card-premium:hover .hover-icon {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default Experiences;
