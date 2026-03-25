import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    setLoading(true);
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur de connexion.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1120] to-[#111827] flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-[#111827] border border-[#334155] rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 md:p-12">
            <div className="mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#3b82f6] to-[#2563eb] flex items-center justify-center text-white font-bold text-xl">
                F
              </span>
              <div>
                <span className="text-xl font-bold text-[#3b82f6]">FinanceFlow</span>
                <p className="text-xs text-[#94a3b8]">Gestion des finances</p>
              </div>
            </div>

            <h3 className="text-[#3b82f6] font-semibold text-sm mb-2">Bienvenue</h3>
            <h1 className="text-4xl font-bold text-[#f8fafc] mb-6">Connexion</h1>

            {error && (
              <div className="mb-6 p-4 text-[#EF4444] bg-[#7f1d1d]/30 border border-[#EF4444]/50 rounded-lg text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#f8fafc] mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="exemple@domaine.com"
                  className="w-full px-4 py-3 border border-[#334155] rounded-lg focus:ring-2 focus:ring-[#3b82f6] outline-none bg-[#0f172a] text-[#f8fafc] placeholder:text-[#94a3b8]"
                  disabled={loading}
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-semibold text-[#f8fafc]">Mot de passe</label>
                  <Link to="/forgot-password" className="text-xs text-[#3b82f6] hover:text-[#60a5fa]">
                    Mot de passe oublié?
                  </Link>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-[#334155] rounded-lg focus:ring-2 focus:ring-[#3b82f6] outline-none bg-[#0f172a] text-[#f8fafc] placeholder:text-[#94a3b8]"
                  disabled={loading}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#c2410c] text-white font-bold py-3 rounded-lg hover:bg-[#9a3412] transition-colors"
              >
                {loading ? 'CONNEXION...' : 'SE CONNECTER'}
              </button>
            </form>

            <p className="text-[#cbd5e1] text-sm mt-6">
              Pas encore de compte?{' '}
              <Link to="/register" className="text-[#3b82f6] font-semibold hover:text-[#60a5fa]">
                S'inscrire
              </Link>
            </p>
          </div>

          <div className="hidden md:flex p-8 md:p-12 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">💰</div>
              <p className="text-[#f8fafc] font-medium">Accédez à votre tableau de bord financier en un clic.</p>
              <p className="text-[#cbd5e1] mt-2">Gérez revenus, dépenses et épargne de manière fluide et mobile-friendly.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
