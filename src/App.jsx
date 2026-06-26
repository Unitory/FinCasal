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
import MobileFrame from './components/MobileFrame';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-neutral-600">Carregando...</div>
      </div>
    );
  }

  return (
    <Router>
      <MobileFrame>
        <Routes>
          {!user ? (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </>
          ) : (
            <>
              <Route path="/vincular" element={<Vincular />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/transacoes" element={<Transacoes />} />
              <Route path="/graficos" element={<Graficos />} />
              <Route path="/divisao" element={<Divisao />} />
              <Route path="/metas" element={<Metas />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </>
          )}
        </Routes>
      </MobileFrame>
    </Router>
  );
}

export default App;
