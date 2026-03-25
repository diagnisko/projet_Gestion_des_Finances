import { Link } from "react-router-dom";

const DashboardMockup = () => (
  <div className="relative animate-fade-up delay-500">
    {/* Glow */}
    <div className="absolute -inset-px rounded-2xl bg-linear-to-b from-[#3b82f6]/20 to-transparent blur-xl pointer-events-none" />

    <div className="relative bg-[#111827] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
      {/* Window bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#1e293b] border-b border-white/5">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="flex-1 mx-4 bg-[#1a2640] rounded-md px-3 py-1 text-[11px] text-[#4a5568] text-center">
          financeflow.app/dashboard
        </span>
      </div>

      {/* Dashboard body */}
      <div className="p-5 space-y-4">
        {/* KPI cards */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Solde total", value: "4 820 000 F", color: "text-[#3b82f6]", icon: "💰" },
            { label: "Revenus", value: "+1 200 000 F", color: "text-[#22C55E]", icon: "📈" },
            { label: "Dépenses", value: "-380 000 F", color: "text-[#EF4444]", icon: "📉" },
          ].map((card) => (
            <div key={card.label} className="bg-[#111c30] rounded-xl p-3 border border-white/5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-[#8899bb] uppercase tracking-widest">{card.label}</span>
                <span className="text-sm">{card.icon}</span>
              </div>
              <p className={`font-display font-bold text-sm leading-tight ${card.color}`}>
                {card.value}
              </p>
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div className="bg-[#111c30] rounded-xl p-4 border border-white/5">
          <p className="text-[11px] text-[#8899bb] mb-3">Évolution mensuelle</p>
          <div className="flex items-end gap-2 h-20">
            {[45, 62, 38, 78, 55, 90, 67, 85, 48, 72, 58, 95].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm bar-item"
                style={{
                  height: `${h}%`,
                  background: i === 11
                    ? "linear-gradient(to top, #3b82f6, #60a5fa)"
                    : "rgba(59,130,246,0.25)",
                  animationDelay: `${0.5 + i * 0.04}s`,
                }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2">
            {["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"].map((m) => (
              <span key={m} className="text-[9px] text-[#4a5568] flex-1 text-center">{m}</span>
            ))}
          </div>
        </div>

        {/* Recent transactions */}
        <div className="bg-[#111c30] rounded-xl p-4 border border-white/5">
          <p className="text-[11px] text-[#8899bb] mb-3">Transactions récentes</p>
          <div className="space-y-2.5">
            {[
              { icon: "🛒", name: "Supermarché Auchan", cat: "Alimentation", amt: "-18 500 F", neg: true },
              { icon: "💼", name: "Salaire Novembre", cat: "Revenus", amt: "+850 000 F", neg: false },
              { icon: "🏠", name: "Loyer Appartement", cat: "Logement", amt: "-120 000 F", neg: true },
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1a2640] flex items-center justify-center text-sm shrink-0">
                  {t.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-white truncate">{t.name}</p>
                  <p className="text-[10px] text-[#4a5568]">{t.cat}</p>
                </div>
                <span className={`text-xs font-display font-semibold shrink-0 ${t.neg ? "text-[#EF4444]" : "text-[#22C55E]"}`}>
                  {t.amt}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen grid-bg flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3b82f6]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#2563eb]/8 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-[#c2410c]/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#3b82f6]/10 border border-[#3b82f6]/25 text-[#3b82f6] text-xs font-medium px-4 py-1.5 rounded-full mb-6 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse-dot" />
              Gérez votre argent intelligemment
            </div>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-5 animate-fade-up delay-100">
              Prenez le{" "}
              <span className="gradient-text">contrôle</span>
              <br />
              de vos finances
            </h1>

            <p className="text-[#8899bb] text-lg leading-relaxed mb-8 max-w-md animate-fade-up delay-200">
              Suivez vos revenus, dépenses et épargne en temps réel. Des insights clairs pour des décisions financières plus intelligentes.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-12 animate-fade-up delay-300">
              <Link
                to="/register"
                className="inline-flex items-center gap-2 bg-[#c2410c] text-white font-medium px-6 py-3 rounded-xl text-sm hover:bg-[#9a3412] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-lg shadow-[#c2410c]/20"
              >
                Créer un compte gratuit
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center gap-2 border border-white/10 text-white font-medium px-6 py-3 rounded-xl text-sm hover:bg-white/5 hover:border-white/20 transition-all duration-200"
              >
                Voir la démo
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 animate-fade-up delay-400">
              {[
                { value: "12k+", label: "Utilisateurs actifs" },
                { value: "98%", label: "Satisfaction" },
                { value: "4.9★", label: "Note moyenne" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display font-bold text-2xl text-white">{s.value}</p>
                  <p className="text-xs text-[#8899bb] mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — mockup */}
          <DashboardMockup />
        </div>

        {/* Trusted by */}
        <div className="mt-20 border-t border-white/5 pt-10 animate-fade-up delay-700">
          <p className="text-center text-xs text-[#4a5568] uppercase tracking-widest mb-6">
            Intégrations disponibles
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
            {["Wave", "Orange Money", "Free Money", "PayPal", "Stripe", "Visa"].map((brand) => (
              <span key={brand} className="font-display font-bold text-sm text-[#8899bb]">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;