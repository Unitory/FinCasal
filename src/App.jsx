import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth } from './config/firebase';
import { onAuthStateChanged } from 'firebase/auth';

// Screens
import Login from './screens/Login';
import Vincular from './screens/Vincular';
import Dashboard from './screens/Dashboard';
import Transacoes from './screens/Transacoes';
import Graficos from './screens/Graficos';
import Divisao from './screens/Divisao';
import Metas from './screens/Metas';

// Layout
import Sidebar from './components/Sidebar';
import FloatingAddButton from './components/FloatingAddButton';
import TransactionModal from './components/TransactionModal';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    console.log('🔄 Iniciando listener de autenticação...');
    let mounted = true;

    try {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log('👤 Auth state changed:', currentUser ? 'Usuário logado' : 'Sem usuário');
        if (mounted) {
          setUser(currentUser);
          setLoading(false);
        }
      }, (err) => {
        console.error('❌ Firebase Auth Error:', err);
        if (mounted) {
          setError(err.message);
          setLoading(false);
        }
      });

      // Timeout de segurança - se não carregar em 3 segundos, libera
      const timeout = setTimeout(() => {
        console.warn('⏱️ Timeout de 3s atingido, liberando app...');
        if (mounted && loading) {
          setLoading(false);
        }
      }, 3000);

      return () => {
        console.log('🧹 Limpando listener de autenticação');
        mounted = false;
        unsubscribe();
        clearTimeout(timeout);
      };
    } catch (err) {
      console.error('❌ Firebase Init Error:', err);
      setError(err.message);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-neutral-50">
        <div className="text-center">
          <div className="text-neutral-600 mb-2">Carregando Firebase...</div>
          <div className="text-xs text-neutral-400">Se demorar muito, verifique o console (F12)</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-50 p-4">
        <div className="text-center max-w-md">
          <div className="text-red-600 font-bold mb-2">❌ Erro no Firebase</div>
          <div className="text-sm text-red-500 mb-4">{error}</div>
          <div className="text-xs text-neutral-600">Verifique se o arquivo .env está configurado corretamente</div>
        </div>
      </div>
    );
  }

  console.log('📱 Renderizando App - User:', user ? '✅ Logado' : '❌ Não logado');

  return (
    <Router>
      {!user ? (
        // Tela de Login (fullscreen)
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      ) : (
        // Layout com Sidebar
        <div className="flex h-screen bg-neutral-50">
          <Sidebar user={user} />

          {/* Main Content */}
          <main className="flex-1 ml-64 overflow-y-auto">
            <Routes>
              <Route path="/vincular" element={<Vincular />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/transacoes" element={<Transacoes />} />
              <Route path="/graficos" element={<Graficos />} />
              <Route path="/divisao" element={<Divisao />} />
              <Route path="/metas" element={<Metas />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </main>

          {/* Floating Add Button */}
          <FloatingAddButton onClick={() => setModalOpen(true)} />

          {/* Transaction Modal */}
          {modalOpen && <TransactionModal onClose={() => setModalOpen(false)} />}
        </div>
      )}
    </Router>
  );
}

export default App;
