import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }

    if (password.length < 6) {
      setError('Mot de passe minimum 6 caractères.');
      return;
    }

    setLoading(true);
    try {
      await register(name, email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur lors de l'inscription.");
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

            <h3 className="text-[#3b82f6] font-semibold text-sm mb-2">Circulez vers la liberté financière</h3>
            <h1 className="text-4xl font-bold text-[#f8fafc] mb-6">Créer un compte</h1>

            {error && (
              <div className="mb-6 p-4 text-[#EF4444] bg-[#7f1d1d]/30 border border-[#EF4444]/50 rounded-lg text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nom complet"
                className="w-full px-4 py-3 border border-[#334155] rounded-lg focus:ring-2 focus:ring-[#3b82f6] outline-none bg-[#0f172a] text-[#f8fafc] placeholder:text-[#94a3b8]"
                disabled={loading}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="exemple@domaine.com"
                className="w-full px-4 py-3 border border-[#334155] rounded-lg focus:ring-2 focus:ring-[#3b82f6] outline-none bg-[#0f172a] text-[#f8fafc] placeholder:text-[#94a3b8]"
                disabled={loading}
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-[#334155] rounded-lg focus:ring-2 focus:ring-[#3b82f6] outline-none bg-[#0f172a] text-[#f8fafc] placeholder:text-[#94a3b8]"
                disabled={loading}
              />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirmer le mot de passe"
                className="w-full px-4 py-3 border border-[#334155] rounded-lg focus:ring-2 focus:ring-[#3b82f6] outline-none bg-[#0f172a] text-[#f8fafc] placeholder:text-[#94a3b8]"
                disabled={loading}
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#c2410c] text-white font-bold py-3 rounded-lg hover:bg-[#9a3412] transition-colors"
              >
                {loading ? 'CRÉATION en cours...' : 'S’INSCRIRE'}
              </button>
            </form>

            <p className="text-[#cbd5e1] text-sm mt-6">
              Déjà un compte ?{' '}
              <Link to="/login" className="text-[#3b82f6] font-semibold hover:text-[#60a5fa]">
                Se connecter
              </Link>
            </p>
          </div>

          <div className="hidden md:flex p-8 md:p-12 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📊</div>
              <p className="text-[#f8fafc] font-medium">Donnez vie à une gestion claire de vos dépenses.</p>
              <p className="text-[#cbd5e1] mt-2">Inscrivez-vous et bénéficiez du tableau de bord intelligent.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
