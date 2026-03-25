import { useState } from "react";

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="18" height="18" rx="4" stroke="#3b82f6" strokeWidth="1.5"/>
        <path d="M6 14l3-3 3 2 4-5" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bg: "bg-[#3b82f6]/10",
    title: "Suivi en temps réel",
    desc: "Visualisez l'évolution de votre solde, vos revenus et vos dépenses jour après jour avec des graphiques interactifs.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 11h14M4 7h14M4 15h8" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    bg: "bg-[#2563eb]/10",
    title: "Catégorisation auto",
    desc: "Chaque dépense est automatiquement classée : alimentation, transport, logement, loisirs… sans effort de votre part.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="#c2410c" strokeWidth="1.5"/>
        <path d="M11 7v4l3 2" stroke="#c2410c" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    bg: "bg-[#c2410c]/10",
    title: "Alertes budgétaires",
    desc: "Définissez un budget mensuel par catégorie. Recevez une alerte avant de le dépasser pour rester dans vos objectifs.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3L4 8v11h5v-5h4v5h5V8L11 3z" stroke="#a78bfa" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    bg: "bg-[#a78bfa]/10",
    title: "Objectifs d'épargne",
    desc: "Créez des objectifs concrets (voyage, voiture, urgence) et suivez votre progression avec une visualisation motivante.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 3h16v10H3zM7 17h8M11 13v4" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bg: "bg-[#EF4444]/10",
    title: "Rapports mensuels",
    desc: "Un rapport complet à la fin de chaque mois : bilan, tendances, comparaisons et recommandations personnalisées.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="9" r="4" stroke="#38bdf8" strokeWidth="1.5"/>
        <path d="M4 19c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    bg: "bg-[#38bdf8]/10",
    title: "Multi-comptes",
    desc: "Gérez plusieurs comptes bancaires, portefeuilles mobile money (Wave, Orange Money) depuis une seule interface.",
  },
];

const Features = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="features" className="py-24 px-6 relative overflow-hidden">
      {/* Subtle orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3b82f6]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3b82f6] mb-4">
            Fonctionnalités
          </p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-tight mb-4">
            Tout ce dont vous avez besoin
            <br />
            <span className="text-[#8899bb]">pour maîtriser votre argent</span>
          </h2>
          <p className="text-[#8899bb] text-base max-w-xl mx-auto">
            Des outils pensés pour vous aider à comprendre, planifier et améliorer votre santé financière au quotidien.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`glass-card rounded-2xl p-6 cursor-default transition-all duration-300 ${
                hovered === i
                  ? "border-[#3b82f6]/25 bg-[#3b82f6]/5 -translate-y-1"
                  : ""
              }`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 ${f.bg} rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 ${hovered === i ? "scale-110" : ""}`}>
                {f.icon}
              </div>

              <h3 className="font-display font-semibold text-base text-white mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-[#8899bb] leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-16 glass-card rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-xl text-white mb-1">
              Prêt à transformer vos finances ?
            </h3>
            <p className="text-[#8899bb] text-sm">
              Rejoignez plus de 12 000 utilisateurs qui ont repris le contrôle de leur argent.
            </p>
          </div>
          <a
            href="/register"
            className="shrink-0 inline-flex items-center gap-2 bg-[#c2410c] text-white font-medium px-6 py-3 rounded-xl text-sm hover:bg-[#9a3412] transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#c2410c]/20"
          >
            Démarrer maintenant — c'est gratuit
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
