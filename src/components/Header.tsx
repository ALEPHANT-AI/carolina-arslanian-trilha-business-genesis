
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "py-3 bg-sage/95 backdrop-blur-md shadow-md" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <h3 className="text-xl md:text-2xl font-playfair font-bold text-white">
            Trilha Business Therapy™
          </h3>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <a
            href="#program"
            className="text-white hover:text-gold transition-colors duration-300"
          >
            Programa
          </a>
          <a
            href="#about"
            className="text-white hover:text-gold transition-colors duration-300"
          >
            Facilitadora
          </a>
          <a
            href="#pricing"
            className="text-white hover:text-gold transition-colors duration-300"
          >
            Investimento
          </a>
          <a
            href="#faq"
            className="text-white hover:text-gold transition-colors duration-300"
          >
            FAQ
          </a>
          <a
            href="#cta"
            className="gold-button ml-4"
          >
            Garantir Minha Vaga
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
