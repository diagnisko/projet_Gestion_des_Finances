const steps = [
  {
    num: "01",
    color: "#3b82f6",
    bg: "bg-[#3b82f6]/10",
    title: "Créez votre compte",
    desc: "Inscription en moins de 2 minutes. Aucune carte bancaire requise. Choisissez simplement votre nom d'utilisateur et mot de passe.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="11" r="5" stroke="#3b82f6" strokeWidth="1.5"/>
        <path d="M6 24c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 6l2 2 4-4" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: "02",
    color: "#2563eb",
    bg: "bg-[#2563eb]/10",
    title: "Ajoutez vos comptes",
    desc: "Connectez vos comptes bancaires, Wave, Orange Money ou entrez vos données manuellement. Tout est centralisé.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="7" width="22" height="16" rx="3" stroke="#2563eb" strokeWidth="1.5"/>
        <path d="M3 12h22" stroke="#2563eb" strokeWidth="1.5"/>
        <path d="M8 17h4M18 17h2" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "03",
    color: "#c2410c",
    bg: "bg-[#c2410c]/10",
    title: "Catégorisez & planifiez",
    desc: "Définissez vos budgets par catégorie. FinanceFlow catégorise automatiquement vos transactions et vous alerte.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 22V8l10-4 10 4v14" stroke="#c2410c" strokeWidth="1.5" strokeLinejoin="round"/>
        <rect x="10" y="14" width="8" height="8" rx="1" stroke="#c2410c" strokeWidth="1.5"/>
        <path d="M14 8v6" stroke="#c2410c" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "04",
    color: "#a78bfa",
    bg: "bg-[#a78bfa]/10",
    title: "Atteignez vos objectifs",
    desc: "Suivez vos progrès, lisez vos rapports et ajustez votre comportement financier grâce à des insights personnalisés.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#a78bfa" strokeWidth="1.5"/>
        <circle cx="14" cy="14" r="6" stroke="#a78bfa" strokeWidth="1.5"/>
        <circle cx="14" cy="14" r="2" fill="#a78bfa"/>
        <path d="M14 4v2M14 22v2M4 14h2M22 14h2" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3b82f6] mb-4">
            Comment ça marche
          </p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-tight mb-4">
            Démarrez en 4 étapes simples
          </h2>
          <p className="text-[#8899bb] text-base max-w-md mx-auto">
            Pas besoin d'être expert en finance. FinanceFlow vous guide pas à pas.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center group">
              {/* Number + Icon */}
              <div className="relative mb-6">
                <div className={`w-24 h-24 ${step.bg} rounded-2xl flex items-center justify-center border border-white/5 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-lg`}
                  style={{ boxShadow: `0 0 0 0 ${step.color}` }}
                >
                  {step.icon}
                </div>
                <span
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-display font-bold text-[#080d1a]"
                  style={{ background: step.color }}
                >
                  {i + 1}
                </span>
              </div>

              <h3 className="font-display font-semibold text-base text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[#8899bb] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Feature highlight split */}
        <div className="mt-24 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left — visual */}
          <div className="bg-[#0d1526] border border-white/8 rounded-2xl p-6 space-y-3">
            <p className="text-xs text-[#8899bb] font-medium mb-4 uppercase tracking-widest">
              Vue budget mensuel
            </p>
            {[
              { cat: "🍽️ Alimentation", budget: 150000, spent: 112000, color: "#3b82f6" },
              { cat: "🚌 Transport", budget: 60000, spent: 58000, color: "#c2410c" },
              { cat: "🎮 Loisirs", budget: 50000, spent: 71000, color: "#EF4444" },
              { cat: "🏠 Logement", budget: 200000, spent: 200000, color: "#22C55E" },
              { cat: "💊 Santé", budget: 30000, spent: 8500, color: "#a78bfa" },
            ].map((item) => {
              const pct = Math.min((item.spent / item.budget) * 100, 100);
              const over = item.spent > item.budget;
              return (
                <div key={item.cat}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs text-white">{item.cat}</span>
                    <span className={`text-xs font-display font-semibold ${over ? "text-[#EF4444]" : "text-[#8899bb]"}`}>
                      {item.spent.toLocaleString("fr-FR")} / {item.budget.toLocaleString("fr-FR")} F
                    </span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${pct}%`,
                        background: over ? "#EF4444" : item.color,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right — text */}
          <div>
            <span className="inline-block bg-[#c2410c]/10 text-[#c2410c] text-xs font-medium px-3 py-1 rounded-full mb-4">
              Budgets intelligents
            </span>
            <h2 className="font-display font-bold text-3xl tracking-tight mb-4 leading-tight">
              Ne dépassez plus jamais<br />votre budget
            </h2>
            <p className="text-[#8899bb] text-sm leading-relaxed mb-6">
              Visualisez en un coup d'œil les catégories où vous êtes en dépassement. FinanceFlow vous envoie une alerte dès que vous approchez de votre limite.
            </p>
            <ul className="space-y-3">
              {[
                "Définissez des budgets par catégorie en quelques secondes",
                "Alertes automatiques à 80% et 100% du budget",
                "Historique des dépassements mois par mois",
                "Suggestions pour rééquilibrer vos dépenses",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#8899bb]">
                  <span className="w-5 h-5 rounded-full bg-[#3b82f6]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;