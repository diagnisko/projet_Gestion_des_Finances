import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">

        {/* CTA Banner */}
        <div className="relative bg-linear-to-r from-[#0d2420] via-[#0d1f2d] to-[#0d1526] border border-[#00d4aa]/20 rounded-2xl p-10 mb-16 overflow-hidden text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-100 h-50 bg-[#00d4aa]/10 rounded-full blur-[60px] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="font-display font-bold text-3xl lg:text-4xl mb-3">
              Commencez dès aujourd'hui.<br />
              <span className="gradient-text">C'est gratuit.</span>
            </h2>
            <p className="text-[#8899bb] text-sm mb-8 max-w-sm mx-auto">
              Aucune carte bancaire requise. Créez votre compte en 2 minutes et commencez à suivre vos finances.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/register"
                className="inline-flex items-center gap-2 bg-[#00d4aa] text-[#080d1a] font-medium px-7 py-3.5 rounded-xl text-sm hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-lg shadow-[#00d4aa]/25"
              >
                Créer mon compte gratuitement
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center gap-2 border border-white/10 text-white font-medium px-7 py-3.5 rounded-xl text-sm hover:bg-white/5 transition-all"
              >
                J'ai déjà un compte
              </Link>
            </div>
          </div>
        </div>

        {/* Footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-[#00d4aa] to-[#4ade80] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 12L6 8L9 10L13 5" stroke="#080d1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="13" cy="5" r="1.5" fill="#080d1a"/>
                </svg>
              </div>
              <span className="font-display font-800 text-[1.1rem]">
                Finance<span className="text-[#00d4aa]">Flow</span>
              </span>
            </Link>
            <p className="text-xs text-[#8899bb] leading-relaxed">
              La plateforme de gestion des finances personnelles pensée pour l'Afrique de l'Ouest.
            </p>
          </div>

          {/* Produit */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4a5568] mb-4">Produit</p>
            <ul className="space-y-2.5">
              {["Fonctionnalités", "Tarifs", "Sécurité", "Mises à jour"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#8899bb] hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4a5568] mb-4">Ressources</p>
            <ul className="space-y-2.5">
              {["Documentation", "Blog finance", "Guides", "Support"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#8899bb] hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4a5568] mb-4">Légal</p>
            <ul className="space-y-2.5">
              {["Politique de confidentialité", "Conditions d'utilisation", "Cookies"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#8899bb] hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#4a5568]">
            © 2026 FinanceFlow. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            {["Twitter", "LinkedIn", "GitHub"].map((social) => (
              <a key={social} href="#" className="text-xs text-[#4a5568] hover:text-[#8899bb] transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;