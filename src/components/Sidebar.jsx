import { useNavigate, useLocation } from 'react-router-dom';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';

const Sidebar = ({ user }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Erro ao sair:', error);
    }
  };

  const navItems = [
    { path: '/dashboard', icon: '🏠', label: 'Início' },
    { path: '/transacoes', icon: '📝', label: 'Transações' },
    { path: '/graficos', icon: '📊', label: 'Gráficos' },
    { path: '/divisao', icon: '⚖️', label: 'Divisão' },
    { path: '/metas', icon: '🎯', label: 'Metas' },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-neutral-200 flex flex-col fixed left-0 top-0">
      {/* Logo */}
      <div className="p-6 border-b border-neutral-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-light to-primary-dark flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.5-1.4 3-3.2 3-5.3A3.7 3.7 0 0 0 15.5 6 3.7 3.7 0 0 0 9 8.7c0 2.1 1.5 3.9 3 5.3"/>
              <path d="M5 9.5c1.2-1.1 2.4-2.6 2.4-4.2A3 3 0 0 0 2.2 3 3 3 0 0 0 .1 4.6"/>
              <path d="M12 14.5 8.5 18l3.5 3.5L15.5 18 12 14.5Z"/>
            </svg>
          </div>
          <span className="text-xl font-bold text-neutral-800">FinCasal</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                isActive(item.path)
                  ? 'bg-primary text-white'
                  : 'text-neutral-600 hover:bg-neutral-100'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* User Info */}
      <div className="p-4 border-t border-neutral-200">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-light to-primary-dark flex items-center justify-center text-white font-bold">
            {user?.email?.[0]?.toUpperCase() || 'U'}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-neutral-800 truncate">
              {user?.email?.split('@')[0] || 'Usuário'}
            </div>
            <div className="text-xs text-neutral-500">Ana & Léo</div>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-neutral-600 hover:bg-neutral-100 transition-all"
        >
          <span>🚪</span>
          Sair
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
