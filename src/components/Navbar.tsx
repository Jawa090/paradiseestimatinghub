
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>      
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <div className="h-10 w-10 bg-gold rounded-full flex items-center justify-center mr-2 overflow-hidden relative transition-all duration-500 group-hover:scale-110">
              <span className="text-white font-bold text-xl absolute animate-pulse">PE</span>
              <div className="absolute inset-0 bg-navy opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-gold font-bold text-xl animate-fade-in">PE</span>
              </div>
            </div>
            <span className={`text-2xl font-poppins font-bold ${isScrolled ? 'text-navy' : 'text-white'} transition-all duration-300 relative`}>
              <span className="inline-block overflow-hidden">
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300">P</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-[50ms]">a</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-100">r</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-150">a</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-200">d</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-250">i</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-300">s</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-350">e</span>
              </span>
              <span className="mx-1"></span>
              <span className="inline-block overflow-hidden">
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-400">E</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-450">s</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-500">t</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-550">i</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-600">m</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-650">a</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-700">t</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-750">i</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-800">n</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-850">g</span>
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                isScrolled ? 'text-navy' : 'text-white'
              } hover-underline-animation ${isActive('/') ? 'font-semibold' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`${
                isScrolled ? 'text-navy' : 'text-white'
              } hover-underline-animation ${isActive('/services') ? 'font-semibold' : ''}`}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`${
                isScrolled ? 'text-navy' : 'text-white'
              } hover-underline-animation ${isActive('/about') ? 'font-semibold' : ''}`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`${
                isScrolled ? 'text-navy' : 'text-white'
              } hover-underline-animation ${isActive('/contact') ? 'font-semibold' : ''}`}
            >
              Contact
            </Link>
            <Button className="bg-gold hover:bg-white hover:text-gold text-white transition-colors duration-300">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button className={`lg:hidden ${isScrolled ? 'text-navy' : 'text-white'}`} onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 px-6 flex flex-col space-y-4 animate-fade-in-down">
            <Link
              to="/"
              className={`text-navy py-2 ${isActive('/') ? 'font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`text-navy py-2 ${isActive('/services') ? 'font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`text-navy py-2 ${isActive('/about') ? 'font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`text-navy py-2 ${isActive('/contact') ? 'font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-gold hover:bg-navy text-white w-full">
              Get a Quote
            </Button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
