# FinanceFlow — Landing Page

Branche : `feature/landing` | Responsable : Membre 1

## Structure des fichiers

```
src/
├── index.css                          # Polices, animations globales, utilitaires
├── App.tsx                            # Routing principal (react-router-dom)
└── components/
    └── landing/
        ├── LandingPage.tsx            # Assembleur de toutes les sections
        ├── Navbar.tsx                 # Barre de navigation fixe + responsive
        ├── Hero.tsx                   # Section héro + mockup dashboard
        ├── Features.tsx               # Grille des 6 fonctionnalités
        ├── HowItWorks.tsx             # 4 étapes + visualisation budget
        ├── Testimonials.tsx           # 6 témoignages + badges de confiance
        └── Footer.tsx                 # Footer + CTA final
```

## Installation

```bash
npm create vite@latest financeflow -- --template react-ts
cd financeflow
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install react-router-dom
```

Remplacez les fichiers générés par ceux de ce projet.

## Lancer en développement

```bash
npm run dev
```

## Build pour déploiement

```bash
npm run build
```

## Intégration avec les autres membres

- **Membre 2 (feature/auth)** : Les liens `/login` et `/register` dans `Navbar.tsx` et `Footer.tsx` pointent vers ses pages. Il suffit de remplacer les placeholders dans `App.tsx`.
- **Membre 3 (feature/dashboard-ui)** : Le lien `/dashboard` est prêt dans `App.tsx`.
- **Toi (feature/dashboard-logic)** : Les `Link` vers `/dashboard` dans la Navbar seront activés une fois l'auth en place.

## GitFlow

```bash
# Depuis develop, créer ta branche
git checkout develop
git checkout -b feature/landing

# Commits atomiques
git add src/components/landing/Navbar.tsx
git commit -m "feat(landing): add responsive navbar with scroll effect"

git add src/components/landing/Hero.tsx
git commit -m "feat(landing): add hero section with dashboard mockup"

# ... etc.

# Pousser et ouvrir une PR vers develop
git push origin feature/landing
```

## Design system

- **Police display** : Syne (titres, chiffres clés)
- **Police body** : DM Sans (texte courant)
- **Couleur principale** : `#00d4aa` (vert émeraude)
- **Couleur secondaire** : `#4ade80` (vert clair)
- **Fond** : `#080d1a` (dark navy)
- **Muted** : `#8899bb`

## Charte graphique

Le design suit une direction **dark luxury fintech** :
- Fond sombre navy avec grid subtile
- Accent émeraude pour tout ce qui est positif/action
- Rouge doux `#f87171` pour les dépenses/alertes
- Polices modernes et typées (Syne pour les titres)
- Animations légères (fade-up, float, shimmer)
- Mockup dashboard intégré au Hero pour la preuve visuelle immédiate