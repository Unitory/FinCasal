import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Preencha email e senha');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/vincular');
    } catch (err) {
      setError('Email ou senha incorretos');
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async () => {
    if (!email || !password) {
      setError('Preencha email e senha');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/vincular');
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError('Email já cadastrado');
      } else if (err.code === 'auth/weak-password') {
        setError('Senha muito fraca (mín. 6 caracteres)');
      } else {
        setError('Erro ao criar conta');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="absolute inset-0 overflow-y-auto animate-[screenIn_0.32s_ease_both] bg-gradient-to-b from-primary-light via-primary to-primary-dark flex flex-col px-7 py-10 pb-8 text-white">
      <div className="flex-1 flex flex-col justify-center items-center gap-[18px]">
        {/* Logo */}
        <div className="w-[84px] h-[84px] rounded-[26px] bg-white/16 backdrop-blur-sm flex items-center justify-center border border-white/25 shadow-[0_14px_30px_-10px_rgba(0,0,0,0.4)]">
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 14c1.5-1.4 3-3.2 3-5.3A3.7 3.7 0 0 0 15.5 6 3.7 3.7 0 0 0 9 8.7c0 2.1 1.5 3.9 3 5.3"/>
            <path d="M5 9.5c1.2-1.1 2.4-2.6 2.4-4.2A3 3 0 0 0 2.2 3 3 3 0 0 0 .1 4.6"/>
            <path d="M12 14.5 8.5 18l3.5 3.5L15.5 18 12 14.5Z"/>
          </svg>
        </div>

        {/* Title */}
        <div className="text-center">
          <div className="text-[32px] font-extrabold tracking-tight">FinCasal</div>
          <div className="text-[15px] opacity-82 mt-1 font-medium">As finanças de vocês dois, juntas.</div>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white rounded-[28px] px-[22px] py-[26px] shadow-[0_-10px_40px_-12px_rgba(0,0,0,0.3)]">
        <div className="flex flex-col gap-3.5">
          {/* Email */}
          <div>
            <div className="text-[11px] font-bold text-neutral-600 tracking-wider mb-1.5">E-MAIL</div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="voce@email.com"
              className="w-full bg-neutral-100 rounded-[14px] px-4 py-[15px] text-sm text-neutral-700 font-medium placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Password */}
          <div>
            <div className="text-[11px] font-bold text-neutral-600 tracking-wider mb-1.5">SENHA</div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-neutral-100 rounded-[14px] px-4 py-[15px] text-base text-neutral-700 font-medium placeholder:text-neutral-400 tracking-[3px] focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-xs text-red-600 text-center font-medium">
              {error}
            </div>
          )}

          {/* Login Button */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="bg-gradient-to-br from-primary-light to-primary-dark text-white rounded-[14px] py-4 text-center font-bold text-[15px] shadow-float mt-1 disabled:opacity-50"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>

          {/* Signup Button */}
          <button
            onClick={handleSignup}
            disabled={loading}
            className="border-[1.5px] border-neutral-200 text-neutral-800 rounded-[14px] py-[15px] text-center font-bold text-[15px] disabled:opacity-50"
          >
            {loading ? 'Criando...' : 'Criar conta'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
