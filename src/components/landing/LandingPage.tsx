import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#0b1120] text-[#f8fafc] font-body">
      <Navbar />
      <main>
        <Hero />
        <div className="max-w-5xl mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Intégrez toutes vos fonctionnalités en un seul endroit</h2>
          <p className="text-[#cbd5e1] mb-6">Connexion, inscription, gestion des revenus/dépenses et tableau de bord unifié — tout est maintenant fluide et responsive.</p>
          <div className="flex flex-col sm:flex-row sm:justify-center gap-3">
            <Link
              to="/login"
              className="px-6 py-3 rounded-lg bg-[#c2410c] text-white font-semibold hover:bg-[#9a3412] text-center transition-colors"
            >
              Se connecter
            </Link>
            <Link
              to="/register"
              className="px-6 py-3 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 text-center"
            >
              S'inscrire
            </Link>
          </div>
        </div>
        <Features />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
