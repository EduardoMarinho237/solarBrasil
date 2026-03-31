import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isInHero, setIsInHero] = useState(true);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      
      const heroHeight = window.innerHeight * 0.8;
      setIsInHero(window.scrollY < heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Por que Solar?', href: '#why-solar' },
    { name: 'Simulador', href: '#simulator' },
    { name: 'Benefícios', href: '#benefits' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <>
      <motion.nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
          isScrolled ? "bg-white backdrop-blur-lg shadow-sm py-3" : 
          isInHero ? "bg-transparent" : "bg-white backdrop-blur-lg shadow-sm py-3"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={cn(
            "text-2xl font-bold tracking-tight",
            isScrolled || !isInHero ? "text-solar-dark" : "text-white"
          )}>Solar Brasil</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href.replace('#', ''))}
              className={cn(
                "text-sm font-medium transition-colors",
                isScrolled || !isInHero 
                  ? "text-solar-dark/70 hover:text-solar-blue" 
                  : "text-white/80 hover:text-white"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a 
            href="#simulator" 
            onClick={(e) => handleSmoothScroll(e, 'simulator')}
            className="bg-solar-yellow text-solar-dark px-6 py-2 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg"
          >
            Simular Agora
          </a>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors",
            isScrolled || !isInHero 
              ? "bg-gray-100 hover:bg-gray-200" 
              : "bg-white/10 hover:bg-white/20"
          )}
        >
          <Menu className={cn(
            "w-5 h-5",
            isScrolled || !isInHero ? "text-gray-600" : "text-white"
          )} />
        </button>
      </div>
    </motion.nav>

    <MobileNavbar 
      isOpen={isMobileMenuOpen} 
      onClose={() => setIsMobileMenuOpen(false)}
      navLinks={navLinks}
    />
    </>
  );
};

export default Navbar;
