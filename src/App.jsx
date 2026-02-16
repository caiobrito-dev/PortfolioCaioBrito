import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const smallOrbs = [
  { size: 5, top: '3%', left: '8%', delay: 0, duration: 7 },
  { size: 4, top: '8%', left: '92%', delay: 1.2, duration: 6 },
  { size: 7, top: '14%', left: '45%', delay: 2.5, duration: 8 },
  { size: 3, top: '20%', left: '78%', delay: 0.5, duration: 9 },
  { size: 6, top: '28%', left: '15%', delay: 3.2, duration: 6.5 },
  { size: 4, top: '35%', left: '88%', delay: 1.8, duration: 7.5 },
  { size: 5, top: '42%', left: '5%', delay: 4, duration: 8.5 },
  { size: 8, top: '48%', left: '65%', delay: 0.8, duration: 5.5 },
  { size: 3, top: '55%', left: '30%', delay: 2, duration: 9 },
  { size: 6, top: '62%', left: '95%', delay: 3.5, duration: 6 },
  { size: 4, top: '68%', left: '50%', delay: 1, duration: 7 },
  { size: 7, top: '75%', left: '12%', delay: 2.8, duration: 8 },
  { size: 5, top: '82%', left: '82%', delay: 0.3, duration: 6.5 },
  { size: 3, top: '88%', left: '40%', delay: 4.5, duration: 7.5 },
  { size: 6, top: '94%', left: '70%', delay: 1.5, duration: 9 },
];

function App() {
  return (
    <div className="bg-grid">
      {/* Floating background orbs */}
      <div className="floating-orb floating-orb-1" />
      <div className="floating-orb floating-orb-2" />
      <div className="floating-orb floating-orb-3" />

      {/* Small animated orbs across entire portfolio */}
      {smallOrbs.map((orb, i) => (
        <motion.div
          key={`global-orb-${i}`}
          style={{
            position: 'fixed',
            width: orb.size,
            height: orb.size,
            borderRadius: '50%',
            background: 'rgba(96, 165, 250, 0.45)',
            boxShadow: `0 0 ${orb.size * 3}px rgba(59, 130, 246, 0.25)`,
            top: orb.top,
            left: orb.left,
            pointerEvents: 'none',
            zIndex: 0,
          }}
          animate={{
            y: [0, -12, 6, -8, 0],
            x: [0, 7, -5, 9, 0],
            opacity: [0.3, 0.7, 0.4, 0.8, 0.3],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            delay: orb.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
