
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import ServiceCard from '@/components/ServiceCard';
import { Building2, HardHat, UtilityPole, Construction, Container, PenTool, Hammer, PaintBucket, Trello, Wrench, Home, Warehouse, CircuitBoard, Workflow } from 'lucide-react';

const Services = () => {
  const animatedElementsRef = useRef<HTMLDivElement>(null);

  // Function to check if an element is in the viewport
  const isInViewport = (element: Element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  };

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      if (animatedElementsRef.current) {
        const elements = animatedElementsRef.current.querySelectorAll('.animate-on-scroll');
        
        elements.forEach((element) => {
          if (isInViewport(element)) {
            element.classList.add('show');
          }
        });
      }
    };

    // Initial check in case elements are already in viewport
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy">
        <div className="absolute inset-0 bg-navy z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
              opacity: 0.15
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 z-10 relative">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Estimating Services</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We provide comprehensive estimating services across multiple construction disciplines. 
              Our expert team delivers accurate cost estimates for projects of all sizes.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-20 bg-white" ref={animatedElementsRef}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div className="animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              <ServiceCard
                title="Concrete"
                description="Detailed estimates for concrete foundations, slabs, walls, and structural elements."
                icon={<Building2 size={40} />}
                link="/services/concrete"
              />
            </div>
            
            <div className="animate-on-scroll" style={{ transitionDelay: '200ms' }}>
              <ServiceCard
                title="Masonry"
                description="Accurate quantity takeoffs for brick, block, stone, and other masonry materials."
                icon={<Construction size={40} />}
                link="/services/masonry"
              />
            </div>
            
            <div className="animate-on-scroll" style={{ transitionDelay: '300ms' }}>
              <ServiceCard
                title="Roofing"
                description="Comprehensive estimates for all types of roofing systems and materials."
                icon={<HardHat size={40} />}
                link="/services/roofing"
              />
            </div>
            
            <div className="animate-on-scroll" style={{ transitionDelay: '400ms' }}>
              <ServiceCard
                title="HVAC"
                description="Detailed cost analysis for heating, ventilation, and air conditioning systems."
                icon={<UtilityPole size={40} />}
                link="/services/hvac"
              />
            </div>
            
            <div className="animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              <ServiceCard
                title="Steel Structural"
                description="Precise estimating for structural steel elements and frameworks."
                icon={<Container size={40} />}
                link="/services/steel-structural"
              />
            </div>
            
            <div className="animate-on-scroll" style={{ transitionDelay: '200ms' }}>
              <ServiceCard
                title="MEP"
                description="Complete mechanical, electrical, and plumbing systems estimating."
                icon={<PenTool size={40} />}
                link="/services/mep"
              />
            </div>
            
            <div className="animate-on-scroll" style={{ transitionDelay: '300ms' }}>
              <ServiceCard
                title="Finish Carpentry"
                description="Detailed estimates for interior and exterior finish carpentry work."
                icon={<Hammer size={40} />}
                link="/services/finish-carpentry"
              />
            </div>
            
            <div className="animate-on-scroll" style={{ transitionDelay: '400ms' }}>
              <ServiceCard
                title="Drywall & Finishes"
                description="Accurate takeoffs for drywall, painting, and other interior finishes."
                icon={<PaintBucket size={40} />}
                link="/services/drywall-finishes"
              />
            </div>
            
            <div className="animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              <ServiceCard
                title="Excavation"
                description="Comprehensive earthwork and excavation quantity takeoffs."
                icon={<Trello size={40} />}
                link="/services/excavation"
              />
            </div>
            
            <div className="animate-on-scroll" style={{ transitionDelay: '200ms' }}>
              <ServiceCard
                title="Lumber Takeoffs"
                description="Detailed lumber and material quantity estimating for framing."
                icon={<Warehouse size={40} />}
                link="/services/lumber-takeoffs"
              />
            </div>
            
            <div className="animate-on-scroll" style={{ transitionDelay: '300ms' }}>
              <ServiceCard
                title="Renovation"
                description="Specialized estimating for renovation and remodeling projects."
                icon={<Home size={40} />}
                link="/services/renovation"
              />
            </div>
            
            <div className="animate-on-scroll" style={{ transitionDelay: '400ms' }}>
              <ServiceCard
                title="Demolition"
                description="Accurate estimating for demolition work and material disposal."
                icon={<Wrench size={40} />}
                link="/services/demolition"
              />
            </div>
            
            <div className="animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              <ServiceCard
                title="Flooring"
                description="Detailed estimates for all types of flooring materials and installation."
                icon={<Workflow size={40} />}
                link="/services/flooring"
              />
            </div>
            
            <div className="animate-on-scroll" style={{ transitionDelay: '200ms' }}>
              <ServiceCard
                title="Facade Works"
                description="Comprehensive estimating for exterior facade elements and finishes."
                icon={<CircuitBoard size={40} />}
                link="/services/facade-works"
              />
            </div>
            
            <div className="animate-on-scroll" style={{ transitionDelay: '300ms' }}>
              <ServiceCard
                title="Insulation"
                description="Accurate takeoffs for thermal, acoustic, and other insulation materials."
                icon={<Home size={40} />}
                link="/services/insulation"
              />
            </div>
            
            <div className="animate-on-scroll" style={{ transitionDelay: '400ms' }}>
              <ServiceCard
                title="Openings"
                description="Detailed estimates for doors, windows, and other building openings."
                icon={<PenTool size={40} />}
                link="/services/openings"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Estimating Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a comprehensive process to ensure accurate and detailed estimates for your construction projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-navy rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-navy">Project Review</h3>
              <p className="text-gray-600">
                We begin by thoroughly reviewing your project plans, specifications, and requirements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-navy rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-navy">Quantity Takeoff</h3>
              <p className="text-gray-600">
                Our estimators perform detailed quantity takeoffs for all required materials and labor.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-navy rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-navy">Cost Analysis</h3>
              <p className="text-gray-600">
                We apply current material and labor rates to develop an accurate cost estimate.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-navy rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-navy">Final Estimate</h3>
              <p className="text-gray-600">
                We deliver a comprehensive estimate with detailed breakdowns and supporting documentation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and quote. Our team is ready to help you with your next construction project.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-gold hover:bg-white hover:text-gold text-white text-lg px-8 py-3 rounded-md font-semibold transition-colors duration-300"
          >
            Get A Quote
          </Link>
        </div>
      </section>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Services;
