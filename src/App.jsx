import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import './index.css';

// Components
import HeroObject from './components/scroll/HeroObject';
import CoverContent from './components/scroll/CoverContent';
import AboutContent from './components/scroll/AboutContent';
import ServicesContent from './components/scroll/ServicesContent';
import ContactContent from './components/scroll/ContactContent';
// We will also import the other slides if needed, but let's integrate them smoothly.
import Experiences from './components/slides/Experiences';
import FacilitiesAndEquipment from './components/slides/FacilitiesAndEquipment';
import PhotoGallery from './components/slides/PhotoGallery';
import AboutSamudera from './components/slides/AboutSamudera';
import SamuderaAssets from './components/slides/SamuderaAssets';
import IntegratedSolutions from './components/slides/IntegratedSolutions';
import OperationAreas from './components/slides/OperationAreas';
import ShippingServices from './components/slides/ShippingServices';
import PortOperations from './components/slides/PortOperations';
import Subsidiaries from './components/slides/Subsidiaries';
import LogisticsServices from './components/slides/LogisticsServices';
import ThirdPartyLogistics from './components/slides/ThirdPartyLogistics';

const slides = [
  { id: 'cover', layout: 'hero-center' },
  { id: 'about-samudera', layout: 'hero-left' },
  { id: 'samudera-assets', layout: 'hero-left' },
  { id: 'integrated-solutions', layout: 'hero-center' },
  { id: 'operation-areas', layout: 'hero-hidden' },
  { id: 'shipping-services', layout: 'hero-right' },
  { id: 'port-operations', layout: 'hero-left' },
  { id: 'subsidiaries', layout: 'hero-hidden' },
  { id: 'logistics-services', layout: 'hero-right' },
  { id: 'third-party-logistics', layout: 'hero-hidden' },
  { id: 'about', layout: 'hero-left' },
  { id: 'services', layout: 'hero-right' },
  { id: 'experiences', layout: 'hero-hidden' },
  { id: 'facilities', layout: 'hero-hidden' },
  { id: 'photo-gallery', layout: 'hero-hidden' },
  { id: 'contact', layout: 'hero-center-small' }
];

function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToNextSlide = useCallback(() => {
    if (currentSlideIndex < slides.length - 1) {
      setDirection(1);
      setCurrentSlideIndex(prev => prev + 1);
    }
  }, [currentSlideIndex]);

  const goToPrevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      setDirection(-1);
      setCurrentSlideIndex(prev => prev - 1);
    }
  }, [currentSlideIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space' || e.key === 'ArrowDown') {
        goToNextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        goToPrevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToNextSlide, goToPrevSlide]);

  // Determine Hero Object variants based on slide
  const getHeroVariants = () => {
    switch (slides[currentSlideIndex].layout) {
      case 'hero-center':
        return { x: "-50%", y: "-35%", scale: 1.1, rotate: 0, opacity: 1 };
      case 'hero-left':
        return { x: "-35vw", y: "-40%", scale: 0.9, rotate: -3, opacity: 1 };
      case 'hero-right':
        return { x: "15vw", y: "-40%", scale: 0.9, rotate: 3, opacity: 1 };
      case 'hero-center-small':
        return { x: "-50%", y: "-10vh", scale: 0.7, rotate: 0, opacity: 1 };
      case 'hero-hidden':
        return { x: "-50%", y: "-50%", scale: 0.4, rotate: 0, opacity: 0 };
      default:
        return { x: "-50%", y: "-50%", scale: 1, rotate: 0, opacity: 1 };
    }
  };

  // Content rendering
  const renderSlideContent = () => {
    // We pass 1 for visible and 0 for invisible so the scroll-based components can just be re-used with static values
    // Or we just rewrite their rendering logic slightly to use AnimatePresence.
    // To be clean, we can just render the specific component.
    switch (slides[currentSlideIndex].id) {
      case 'cover':
        return (
          <motion.div key="cover" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}>
            <CoverContent scrollYProgress={{ get: () => 0 }} />
          </motion.div>
        );
      case 'about-samudera':
        return <motion.div key="about-sam" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><AboutSamudera /></motion.div>;
      case 'samudera-assets':
        return <motion.div key="assets" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><SamuderaAssets /></motion.div>;
      case 'integrated-solutions':
        return <motion.div key="int-sol" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><IntegratedSolutions /></motion.div>;
      case 'operation-areas':
        return <motion.div key="op-areas" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><OperationAreas /></motion.div>;
      case 'shipping-services':
        return <motion.div key="ship-serv" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><ShippingServices /></motion.div>;
      case 'port-operations':
        return <motion.div key="port-ops" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><PortOperations /></motion.div>;
      case 'subsidiaries':
        return <motion.div key="subsid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><Subsidiaries /></motion.div>;
      case 'logistics-services':
        return <motion.div key="log-serv" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><LogisticsServices /></motion.div>;
      case 'third-party-logistics':
        return <motion.div key="3pl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><ThirdPartyLogistics /></motion.div>;
      case 'about':
        return (
          <motion.div key="about" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }}>
            <AboutContent scrollYProgress={{ get: () => 0.2 }} />
          </motion.div>
        );
      case 'services':
        return (
          <motion.div key="services" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }} transition={{ duration: 0.5 }}>
            <ServicesContent scrollYProgress={{ get: () => 0.5 }} />
          </motion.div>
        );
      case 'experiences':
        return <motion.div key="exp" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><Experiences /></motion.div>;
      case 'facilities':
        return <motion.div key="fac" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><FacilitiesAndEquipment /></motion.div>;
      case 'photo-gallery':
        return <motion.div key="gal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><PhotoGallery /></motion.div>;
      case 'contact':
        return (
          <motion.div key="contact" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}>
            <ContactContent scrollYProgress={{ get: () => 0.75 }} />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Layer (Persistent) */}
      <motion.div 
        animate={{ 
          scale: slides[currentSlideIndex].id === 'cover' ? 1.05 : 1,
          y: currentSlideIndex * -10 // Slight parallax effect per slide index
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{
          position: 'absolute', inset: -200, // Increased inset to prevent background from showing at the bottom during parallax
          backgroundImage: 'url(/images/bulk_terminal_bg.png)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          zIndex: 0
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.5) 50%, rgba(227, 24, 55, 0.2) 100%)' }}></div>
      </motion.div>

      {/* Ambient Glows */}
      <div className="ambient-glow animate-float" style={{ top: '20%', right: '10%', width: '500px', height: '500px', background: 'var(--primary-red)' }}></div>
      <div className="ambient-glow animate-float-delayed" style={{ bottom: '-10%', left: '20%', width: '600px', height: '600px', background: 'var(--accent-yellow)' }}></div>

      {/* Hero Object (Animates between states based on slide) */}
      <motion.div 
        animate={getHeroVariants()}
        transition={{ type: "spring", stiffness: 60, damping: 15, mass: 1 }}
        style={{
          position: 'absolute',
          top: '50%', left: '50%',
          zIndex: 5
        }}
      >
        <HeroObject />
      </motion.div>

      {/* Slide Content Layer */}
      <div style={{ position: 'relative', zIndex: 10, width: '100%', height: '100%' }}>
        <AnimatePresence mode="wait">
          {renderSlideContent()}
        </AnimatePresence>
      </div>



    </div>
  );
}

export default App;
