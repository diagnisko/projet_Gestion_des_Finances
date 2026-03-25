import { createContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login(email: string, password: string): Promise<void>;
  register(name: string, email: string, password: string): Promise<void>;
  logout(): void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export { AuthContext, type AuthContextType };

const CURRENT_USER_KEY = 'financeflow-user';
const USERS_KEY = 'financeflow-users';
const INCOME_KEY_PREFIX = 'financeflow-income-entries';
const EXPENSE_KEY_PREFIX = 'financeflow-expense-entries';
const LINKED_ACCOUNTS_KEY_PREFIX = 'financeflow-linked-accounts';

type StoredUser = User & { password: string };

type LinkedAccountSnapshot = {
  totalBalance: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  recentTransactions: Array<{
    id: number;
    label: string;
    category: string;
    amount: number;
    kind: 'income' | 'expense';
  }>;
};

const LANDING_LINKED_ACCOUNTS_SNAPSHOT: LinkedAccountSnapshot = {
  totalBalance: 4_820_000,
  monthlyIncome: 1_200_000,
  monthlyExpenses: 380_000,
  recentTransactions: [
    { id: 1, label: 'Supermarché Auchan', category: 'Alimentation', amount: 18_500, kind: 'expense' },
    { id: 2, label: 'Salaire Novembre', category: 'Revenus', amount: 850_000, kind: 'income' },
    { id: 3, label: 'Loyer Appartement', category: 'Logement', amount: 120_000, kind: 'expense' },
  ],
};

function parseUsers(raw: string | null): StoredUser[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed as StoredUser[]) : [];
  } catch {
    return [];
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem(CURRENT_USER_KEY);
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser) as User;
        setUser(userData);
        setIsAuthenticated(true);
      } catch {
        localStorage.removeItem(CURRENT_USER_KEY);
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!email.trim() || !password.trim()) {
          reject(new Error('Email et mot de passe requis.'));
          return;
        }

        const users = parseUsers(localStorage.getItem(USERS_KEY));
        const found = users.find(
          (u) => u.email.toLowerCase() === email.trim().toLowerCase() && u.password === password,
        );
        if (!found) {
          reject(new Error('Email ou mot de passe incorrect.'));
          return;
        }

        const userData: User = { id: found.id, name: found.name, email: found.email };

        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userData));

        resolve();
      }, 700);
    });
  };

  const register = async (name: string, email: string, password: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!name.trim() || !email.trim() || !password.trim()) {
          reject(new Error('Tous les champs sont requis.'));
          return;
        }

        const users = parseUsers(localStorage.getItem(USERS_KEY));
        const normalizedEmail = email.trim().toLowerCase();
        if (users.some((u) => u.email.toLowerCase() === normalizedEmail)) {
          reject(new Error('Un compte existe deja avec cet email.'));
          return;
        }

        const userData: User = {
          id: `user-${Date.now()}`,
          name: name.trim(),
          email: normalizedEmail,
        };

        const nextUsers: StoredUser[] = [...users, { ...userData, password }];
        localStorage.setItem(USERS_KEY, JSON.stringify(nextUsers));

        // Nouveau compte: solde initial a 0 via listes vides.
        localStorage.setItem(`${INCOME_KEY_PREFIX}-${userData.id}`, JSON.stringify([]));
        localStorage.setItem(`${EXPENSE_KEY_PREFIX}-${userData.id}`, JSON.stringify([]));
        // Donnees des comptes lies alignees sur le tableau de la landing.
        localStorage.setItem(
          `${LINKED_ACCOUNTS_KEY_PREFIX}-${userData.id}`,
          JSON.stringify(LANDING_LINKED_ACCOUNTS_SNAPSHOT),
        );

        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userData));

        resolve();
      }, 700);
    });
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem(CURRENT_USER_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
