import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

interface Props {
  onOpenSidebar?: () => void;
  title?: string;
}

export default function Navbar({ onOpenSidebar, title = 'Tableau de bord' }: Props) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#111827] border-b border-[#334155] p-4 flex flex-wrap items-center justify-between gap-3 text-[#f8fafc]">
      <div className="flex items-center gap-3 min-w-0">
        {onOpenSidebar && (
          <button
            type="button"
            onClick={onOpenSidebar}
            className="lg:hidden p-2 rounded-lg border border-[#334155] text-[#cbd5e1] hover:bg-[#1e293b]"
            aria-label="Ouvrir le menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}
        <h2 className="font-bold text-lg truncate text-[#f8fafc]">{title}</h2>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 shrink-0">
        <span className="text-sm truncate max-w-[140px] sm:max-w-none">
          {user?.name || 'Utilisateur'}
        </span>
        <button
          type="button"
          onClick={() => {
            logout();
            navigate('/login');
          }}
          className="bg-[#c2410c] text-white px-3 py-1.5 rounded text-sm hover:bg-[#9a3412] transition-colors"
        >
          Déconnexion
        </button>
      </div>
    </div>
  );
}
