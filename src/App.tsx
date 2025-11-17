import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import Services from "@/components/landing/Services";
import Coverage from "@/components/landing/Coverage";
import HowItWorks from "@/components/landing/HowItWorks";
import UseCases from "@/components/landing/UseCases";
import Testimonials from "@/components/landing/Testimonials";
import Faq from "@/components/landing/Faq";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import MobileCTA from "@/components/landing/MobileCTA";
import "@/index.css";
const App = () => {
  return (
    <div className="min-h-screen landing-theme" dir="rtl">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />

        <Services />
        <Coverage />
        <HowItWorks />

        <UseCases />

        <Testimonials />
        <Faq />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
};
export default App;
