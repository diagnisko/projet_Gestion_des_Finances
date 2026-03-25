import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Veuillez entrer votre email.');
      return;
    }

    if (!email.includes('@')) {
      setError('Email invalide.');
      return;
    }

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubmitted(true);
    } catch {
      setError('Erreur lors de la demande.');
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

            <h3 className="text-[#3b82f6] font-semibold text-sm mb-2">Récupération de compte</h3>
            <h1 className="text-4xl font-bold text-[#f8fafc] mb-6">Mot de passe oublié</h1>

            {submitted ? (
              <div className="space-y-6">
                <div className="p-4 text-[#22C55E] bg-[#14532d]/30 border border-[#22C55E]/50 rounded-lg">
                  ✔ Instructions envoyées à <strong>{email}</strong>
                </div>
                <p className="text-[#cbd5e1]">Vérifiez votre boîte mail pour réinitialiser votre mot de passe.</p>
                <Link
                  to="/login"
                  className="inline-block w-full bg-[#c2410c] text-white py-3 rounded-lg text-center hover:bg-[#9a3412]"
                >
                  Retour à la connexion
                </Link>
              </div>
            ) : (
              <>
                {error && (
                  <div className="mb-6 p-4 text-[#EF4444] bg-[#7f1d1d]/30 border border-[#EF4444]/50 rounded-lg text-sm">
                    {error}
                  </div>
                )}
                <p className="text-[#cbd5e1] mb-6">Saisissez votre email et nous vous enverrons un lien de réinitialisation.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="exemple@domaine.com"
                    className="w-full px-4 py-3 border border-[#334155] rounded-lg focus:ring-2 focus:ring-[#3b82f6] outline-none bg-[#0f172a] text-[#f8fafc] placeholder:text-[#94a3b8]"
                    disabled={loading}
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#c2410c] text-white py-3 rounded-lg hover:bg-[#9a3412] transition-colors"
                  >
                    {loading ? 'ENVOI...' : 'ENVOYER LE LIEN'}
                  </button>
                </form>

                <p className="text-sm text-[#cbd5e1] mt-6">
                  <Link to="/login" className="text-[#3b82f6] hover:text-[#60a5fa]">
                    Retour à la connexion
                  </Link>
                </p>
              </>
            )}
          </div>

          <div className="hidden md:flex p-8 md:p-12 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🔒</div>
              <p className="text-[#f8fafc] font-medium">Récupérez rapidement l’accès à votre projet financier.</p>
              <p className="text-[#cbd5e1] mt-2">Nous vous envoyons un lien sécurisé vers votre boîte mail.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
