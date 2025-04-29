
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import ProgramOverview from '@/components/ProgramOverview';
import DayByDayBreakdown from '@/components/DayByDayBreakdown';
import Benefits from '@/components/Benefits';
import IdealClient from '@/components/IdealClient';
import FacilitatorBio from '@/components/FacilitatorBio';
import Differentiators from '@/components/Differentiators';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  // Scroll to element from URL hash on load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-sage text-elegant-black">
      <Header />
      
      <main>
        <Hero />
        <ProblemSolution />
        <ProgramOverview />
        <DayByDayBreakdown />
        <Benefits />
        <IdealClient />
        <FacilitatorBio />
        <Differentiators />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
