import { NavLink } from 'react-router-dom';

interface Props {
  open: boolean;
  onClose: () => void;
}

const linkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'block p-3 rounded-lg transition-colors text-[#f8fafc]',
    isActive ? 'bg-[#1e293b] border border-[#3b82f6]/40 font-semibold text-[#f8fafc]' : 'hover:bg-[#111827]',
  ].join(' ');

export default function Sidebar({ open, onClose }: Props) {
  const nav = (
    <>
      <h1 className="text-2xl font-bold mb-8 text-[#f8fafc]">
        Finance<span className="text-[#3b82f6]">Flow</span>
      </h1>
      <nav>
        <ul className="space-y-1">
          <li>
            <NavLink to="/dashboard" end onClick={onClose} className={linkClass}>
              Tableau de bord
            </NavLink>
          </li>
          <li>
            <NavLink to="/transactions" onClick={onClose} className={linkClass}>
              Transactions
            </NavLink>
          </li>
          <li>
            <NavLink to="/statistics" onClick={onClose} className={linkClass}>
              Statistiques
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" onClick={onClose} className={linkClass}>
              Profil
            </NavLink>
          </li>
          <li className="pt-4 mt-4 border-t border-[#334155]">
            <NavLink to="/" onClick={onClose} className={linkClass}>
              ← Accueil
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );

  return (
    <>
      {open && (
        <button
          type="button"
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          aria-label="Fermer le menu"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50 w-64 min-h-screen bg-[#111827] border-r border-[#334155] p-5 shadow-sm
          transform transition-transform duration-200 ease-out
          lg:translate-x-0 lg:flex-shrink-0
          ${open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {nav}
      </aside>
    </>
  );
}
