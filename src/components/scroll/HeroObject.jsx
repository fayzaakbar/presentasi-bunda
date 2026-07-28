import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const HeroObject = () => {
  const constraintsRef = useRef(null);

  return (
    <motion.div 
      ref={constraintsRef}
      style={{
        width: '400px', height: '400px',
        position: 'relative',
        borderRadius: '50%',
        padding: '15px', // For the glowing ring
        background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 100%)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 0 30px rgba(255,255,255,0.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        animation: 'portal-float 6s ease-in-out infinite',
        cursor: 'grab'
      }}
      drag
      dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
      dragElastic={0.2}
      whileHover={{ scale: 1.05, boxShadow: '0 40px 80px rgba(0,0,0,0.6), inset 0 0 40px rgba(227, 24, 55, 0.4)' }}
      whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
      whileTap={{ scale: 0.95 }}
    >
       {/* Inner Portal Frame */}
       <div style={{
         width: '100%', height: '100%',
         borderRadius: '50%',
         overflow: 'hidden',
         position: 'relative',
         boxShadow: 'inset 0 0 40px rgba(0,0,0,0.8), 0 0 20px rgba(227, 24, 55, 0.4)'
       }}>
          {/* Aesthetic High-Res Cargo Ship */}
          <motion.img 
             src="/images/breakbulk_ship.png"
             alt="Breakbulk Cargo Ship"
             style={{
               width: '120%', height: '120%',
               objectFit: 'cover',
               position: 'absolute', top: '-10%', left: '-10%',
               animation: 'pan-image 20s ease-in-out infinite alternate'
             }}
             whileHover={{ scale: 1.15 }}
             transition={{ duration: 0.5 }}
          />
          {/* Inner gradient for 3D sphere depth */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, rgba(0,0,0,0.5) 100%)',
            pointerEvents: 'none'
          }}></div>
          
          {/* Premium Tech Overlay (Grid lines or subtle UI) */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.2,
            pointerEvents: 'none'
          }}></div>
       </div>

       {/* Orbital ring for extra 3D aesthetic */}
       <div style={{
          position: 'absolute',
          width: '120%', height: '120%',
          borderRadius: '50%',
          border: '2px solid rgba(245, 158, 11, 0.3)',
          borderTop: '2px solid rgba(245, 158, 11, 0.8)',
          animation: 'spin-ring 12s linear infinite',
          pointerEvents: 'none'
       }}></div>

       <style>{`
         @keyframes portal-float {
           0%, 100% { transform: translateY(0px); }
           50% { transform: translateY(-20px); }
         }
         @keyframes pan-image {
           0% { transform: scale(1) translateX(0); }
           100% { transform: scale(1.15) translateX(-5%); }
         }
         @keyframes spin-ring {
           0% { transform: rotate(0deg) scale(1) rotateX(60deg); }
           50% { transform: rotate(180deg) scale(1.05) rotateX(60deg); }
           100% { transform: rotate(360deg) scale(1) rotateX(60deg); }
         }
       `}</style>
    </motion.div>
  );
};

export default HeroObject;
