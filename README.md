# FinanceFlow - Projet Unifie

Application web de gestion des finances personnelles (landing page, authentification, dashboard, transactions, statistiques, profil) construite avec React + TypeScript + Vite.

## Dossier principal

Le projet final unifie est dans :

`unified-app/`

Les autres dossiers (`landing page`, `login`, `Dashboard`, `featuredashboard logic`) sont conserves comme modules sources developpes separement.

## Fonctionnalites

- Landing page responsive
- Inscription / connexion / mot de passe oublie
- Routes protegees apres connexion
- Dashboard avec revenus, depenses, solde
- Ajout de revenus et depenses
- Graphiques (ligne, barre, camembert) via Recharts
- Pages connectees : Transactions, Statistiques, Profil
- Persistance locale via `localStorage`

## Prerequis

- Node.js 20+ recommande
- npm 10+ recommande

## Installation

```bash
cd unified-app
npm install
```

## Lancer en developpement

```bash
npm run dev
```

Puis ouvrir : [http://localhost:5173](http://localhost:5173)

## Build production

```bash
npm run build
```

## Preview du build

```bash
npm run preview
```

## Scripts disponibles

- `npm run dev` : demarre le serveur Vite
- `npm run build` : verifie TypeScript puis build la version production
- `npm run preview` : previsualise le build localement
- `npm run lint` : lance ESLint

## Structure rapide

```text
projet gestion des finance - Copie/
├─ unified-app/              # application finale unifiee
├─ Dashboard/                # ancien module dashboard
├─ featuredashboard logic/   # ancien module logique dashboard
├─ landing page/             # ancien module landing/auth
└─ login/                    # ancien module login
```

## Notes

- Les donnees de l'utilisateur et des finances sont stockees dans le navigateur (`localStorage`).
- Pour reinitialiser les donnees, vider le stockage local du navigateur.
