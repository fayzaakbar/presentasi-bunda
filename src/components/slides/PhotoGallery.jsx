import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronRight, ChevronLeft } from 'lucide-react';

const photos = [
  '/fotopbs/Picture1.png', '/fotopbs/Picture2.jpg', '/fotopbs/Picture3.jpg', 
  '/fotopbs/Picture4.png', '/fotopbs/Picture5.jpg', '/fotopbs/Picture6.jpg', 
  '/fotopbs/Picture7.jpg', '/fotopbs/Picture8.jpg', '/fotopbs/Picture9.png',
  '/fotopbs/Picture10.png', '/fotopbs/Picture11.jpg', '/fotopbs/Picture12.jpg',
  '/fotopbs/Picture13.jpg', '/fotopbs/Picture14.jpg', '/fotopbs/Picture15.jpg',
  '/fotopbs/Picture16.png', '/fotopbs/Picture17.png', '/fotopbs/Picture18.png'
];

// Split into chunks of 6 photos per slide
const chunkArray = (array, size) => {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, size + index));
    index += size;
  }
  return chunked;
};

const photoChunks = chunkArray(photos, 6);

const PhotoGallery = () => {
  const [currentChunk, setCurrentChunk] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const nextChunk = () => setCurrentChunk((prev) => (prev + 1) % photoChunks.length);
  const prevChunk = () => setCurrentChunk((prev) => (prev - 1 + photoChunks.length) % photoChunks.length);

  return (
    <div className="slide" style={{ backgroundColor: 'var(--navy)' }}>
      <div className="slide-content">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h2 className="heading-lg" style={{ color: 'white' }}>OPERATIONAL GALLERY</h2>
            <div style={{ width: '80px', height: '4px', background: 'var(--primary-red)', marginTop: '0.5rem' }}></div>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
             <button onClick={prevChunk} className="control-btn" style={{ background: 'white', color: 'var(--navy)' }}><ChevronLeft /></button>
             <button onClick={nextChunk} className="control-btn" style={{ background: 'white', color: 'var(--navy)' }}><ChevronRight /></button>
          </div>
        </motion.div>

        <div style={{ flex: 1, position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentChunk}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.5rem',
                height: '100%',
                alignContent: 'start'
              }}
            >
              {photoChunks[currentChunk].map((src, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => setSelectedPhoto(src)}
                  style={{
                    height: '250px',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    position: 'relative',
                    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.5)'
                  }}
                >
                  <div style={{
                    width: '100%', height: '100%', 
                    backgroundImage: `url(${src})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    transition: 'transform 0.5s ease'
                  }} className="gallery-img"></div>
                  
                  <div style={{
                    position: 'absolute', inset: 0, background: 'rgba(227,24,55,0.0)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.3s ease',
                    opacity: 0,
                  }} className="gallery-overlay">
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-red)' }}>
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
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 1000,
              background: 'rgba(15, 23, 42, 0.95)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backdropFilter: 'blur(8px)', cursor: 'zoom-out'
            }}
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedPhoto(null); }}
              style={{
                position: 'absolute', top: '2rem', right: '2rem',
                width: '3rem', height: '3rem', borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)', border: 'none',
                color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}
            >
              <X size={24} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedPhoto} 
              alt="Gallery Preview"
              style={{
                maxHeight: '85vh', maxWidth: '85vw',
                objectFit: 'contain', borderRadius: 'var(--radius-lg)',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .gallery-img:hover {
          transform: scale(1.1);
        }
        .gallery-img:hover + .gallery-overlay,
        .gallery-overlay:hover {
          background: rgba(15, 23, 42, 0.6) !important;
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default PhotoGallery;
