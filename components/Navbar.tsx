import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '../hooks/useScrollPosition';

const links = [
  { href: "#features", label: "Features" },
  { href: "#demo", label: "Demo" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollPosition();

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const linkVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
      }
    })
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-primary text-2xl font-bold">
              Aura AI
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {links.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className={`relative text-contrast hover:text-primary transition-colors`}
                >
                  {label}
                  {activeSection === href.slice(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30
                      }}
                    />
                  )}
                </a>
              ))}
              <button className="bg-primary text-black px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-contrast hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span 
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
                  }`}
                />
                <span 
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span 
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-y-0 right-0 w-full bg-black/95 backdrop-blur-lg md:hidden"
          >
            <div className="pt-20 px-4">
              <div className="flex flex-col space-y-4">
                {links.map(({ href, label }, i) => (
                  <motion.a
                    key={href}
                    href={href}
                    variants={linkVariants}
                    custom={i}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg ${
                      activeSection === href.slice(1)
                        ? 'text-primary'
                        : 'text-contrast'
                    } hover:text-primary transition-colors`}
                  >
                    {label}
                  </motion.a>
                ))}
                <motion.button
                  variants={linkVariants}
                  custom={links.length}
                  className="bg-primary text-black px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors w-full mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
