const testimonials = [
  {
    name: "Aminata Diallo",
    role: "Infirmière, Dakar",
    avatar: "AD",
    color: "bg-[#00d4aa]/20 text-[#00d4aa]",
    stars: 5,
    text: "Avant FinanceFlow, je ne savais jamais où passait mon salaire en fin de mois. Maintenant je vois tout, je fais des économies et j'ai même ouvert un compte épargne pour mes enfants. C'est révolutionnaire.",
  },
  {
    name: "Moussa Traoré",
    role: "Développeur freelance, Abidjan",
    avatar: "MT",
    color: "bg-[#4ade80]/20 text-[#4ade80]",
    stars: 5,
    text: "Avec mes revenus variables, gérer mon budget était un cauchemar. FinanceFlow m'aide à anticiper les mois difficiles et à mettre de côté automatiquement. Le tableau de bord est vraiment bien pensé.",
  },
  {
    name: "Fatou Ndiaye",
    role: "Commerçante, Saint-Louis",
    avatar: "FN",
    color: "bg-[#f59e0b]/20 text-[#f59e0b]",
    stars: 5,
    text: "Je gère à la fois mes finances personnelles et celles de ma boutique. La séparation des comptes est parfaite. Les graphiques me permettent de voir immédiatement quand mes dépenses dérivent.",
  },
  {
    name: "Ibrahima Ba",
    role: "Étudiant en master, Thiès",
    avatar: "IB",
    color: "bg-[#a78bfa]/20 text-[#a78bfa]",
    stars: 5,
    text: "L'appli est simple et rapide. En 30 secondes j'ai une vue complète de ma situation. J'ai économisé 40 000 F ce mois-ci juste en suivant mes petites dépenses. Je recommande à tous mes amis.",
  },
  {
    name: "Mariama Kouyaté",
    role: "Enseignante, Conakry",
    avatar: "MK",
    color: "bg-[#38bdf8]/20 text-[#38bdf8]",
    stars: 5,
    text: "Les alertes budgétaires m'ont sauvée plusieurs fois. Je reçois une notification avant de dépasser mon budget alimentation et je fais des ajustements à temps. Un outil indispensable au quotidien.",
  },
  {
    name: "Seydou Coulibaly",
    role: "Chef de projet, Bamako",
    avatar: "SC",
    color: "bg-[#f87171]/20 text-[#f87171]",
    stars: 5,
    text: "La fonctionnalité objectifs d'épargne est ma préférée. J'ai un objectif pour les vacances, un pour la voiture, un pour les urgences. Je vois ma progression chaque semaine. Super motivant !",
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5 mb-3">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#f59e0b">
        <path d="M6 1l1.236 2.504L10 3.91l-2 1.95.472 2.75L6 7.4l-2.472 1.21L4 5.86 2 3.91l2.764-.406L6 1z"/>
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00d4aa]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#00d4aa] mb-4">
            Témoignages
          </p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-tight mb-4">
            Ils ont repris le contrôle
          </h2>
          <p className="text-[#8899bb] text-base max-w-md mx-auto">
            Plus de 12 000 utilisateurs en Afrique de l'Ouest gèrent déjà leurs finances avec FinanceFlow.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:border-white/15 transition-all duration-300 hover:-translate-y-1"
            >
              <Stars count={t.stars} />

              <p className="text-sm text-[#c8d4e8] leading-relaxed flex-1">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-xs font-display font-bold shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-[#8899bb]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { val: "12k+", label: "Utilisateurs actifs" },
            { val: "4.9/5", label: "Note moyenne" },
            { val: "98%", label: "Taux de satisfaction" },
            { val: "0 F", label: "Pour commencer" },
          ].map((badge) => (
            <div key={badge.label} className="glass-card rounded-2xl p-5 text-center">
              <p className="font-display font-bold text-2xl text-[#00d4aa] mb-1">{badge.val}</p>
              <p className="text-xs text-[#8899bb]">{badge.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;