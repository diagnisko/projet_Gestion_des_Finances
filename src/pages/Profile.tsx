import DashboardLayout from '../components/dashboard/DashboardLayout';
import { useAuth } from '../hooks/useAuth';

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <DashboardLayout title="Profil">
      <div className="bg-[#111827] border border-[#334155] rounded-xl shadow p-4 sm:p-6 max-w-lg">
        <h2 className="text-lg font-semibold text-[#f8fafc] mb-4">Informations du compte</h2>

        <dl className="space-y-4 text-[#f8fafc]">
          <div>
            <dt className="text-sm font-medium text-[#cbd5e1]">Nom</dt>
            <dd className="mt-1 text-base">{user?.name ?? '—'}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-[#cbd5e1]">E-mail</dt>
            <dd className="mt-1 text-base">{user?.email ?? '—'}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-[#cbd5e1]">Identifiant</dt>
            <dd className="mt-1 text-base font-mono text-sm">{user?.id ?? '—'}</dd>
          </div>
        </dl>

        <p className="mt-6 text-sm text-[#cbd5e1]">
          Les modifications avancées du profil pourront être branchées sur un backend lorsque vous
          aurez une API dédiée.
        </p>
      </div>
    </DashboardLayout>
  );
}
