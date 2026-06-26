import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../config/firebase';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';

const Vincular = () => {
  const [tab, setTab] = useState('criar');
  const [code, setCode] = useState('');
  const [inputCode, setInputCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Generate 6-digit code
    const generatedCode = String(Math.floor(100000 + Math.random() * 900000));
    setCode(generatedCode);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleCreateCouple = async () => {
    setLoading(true);
    setError('');

    try {
      const coupleRef = doc(db, 'couples', code);
      await setDoc(coupleRef, {
        code,
        createdBy: auth.currentUser.uid,
        createdAt: new Date(),
        members: [auth.currentUser.uid],
        linked: false,
      });

      // Save couple ID to user profile
      const userRef = doc(db, 'users', auth.currentUser.uid);
      await setDoc(userRef, {
        email: auth.currentUser.email,
        coupleId: code,
        createdAt: new Date(),
      });

      // Wait for partner to join (in real app, use real-time listener)
      // For now, just navigate to dashboard
      setTimeout(() => {
        navigate('/dashboard');
      }, 3000);
    } catch (err) {
      setError('Erro ao criar casal');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleJoinCouple = async () => {
    if (inputCode.length !== 6) {
      setError('Código deve ter 6 dígitos');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const coupleRef = doc(db, 'couples', inputCode);
      const coupleSnap = await getDoc(coupleRef);

      if (!coupleSnap.exists()) {
        setError('Código inválido');
        return;
      }

      const coupleData = coupleSnap.data();

      // Add current user to couple
      await updateDoc(coupleRef, {
        members: [...coupleData.members, auth.currentUser.uid],
        linked: true,
        linkedAt: new Date(),
      });

      // Save couple ID to user profile
      const userRef = doc(db, 'users', auth.currentUser.uid);
      await setDoc(userRef, {
        email: auth.currentUser.email,
        coupleId: inputCode,
        createdAt: new Date(),
      });

      navigate('/dashboard');
    } catch (err) {
      setError('Erro ao vincular');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleContinue = () => {
    if (tab === 'criar') {
      handleCreateCouple();
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="absolute inset-0 overflow-y-auto animate-[screenIn_0.32s_ease_both] px-6 py-6 pb-8 flex flex-col">
      {/* Header */}
      <div className="text-2xl font-extrabold text-neutral-800 tracking-tight mt-2">Conectem-se 💑</div>
      <div className="text-sm text-neutral-600 mt-1.5 leading-relaxed font-medium">
        Crie o casal e convide seu par, ou entre com o código de quem já criou.
      </div>

      {/* Tabs */}
      <div className="flex gap-1.5 bg-neutral-200 rounded-[14px] p-1.5 mt-[22px]">
        <button
          onClick={() => setTab('criar')}
          className={`flex-1 text-center py-3 rounded-[11px] font-bold text-[13px] transition-all ${
            tab === 'criar'
              ? 'bg-neutral-800 text-white shadow-[0_6px_16px_-8px_rgba(31,27,24,0.5)]'
              : 'bg-transparent text-neutral-600'
          }`}
        >
          Criar casal
        </button>
        <button
          onClick={() => setTab('entrar')}
          className={`flex-1 text-center py-3 rounded-[11px] font-bold text-[13px] transition-all ${
            tab === 'entrar'
              ? 'bg-neutral-800 text-white shadow-[0_6px_16px_-8px_rgba(31,27,24,0.5)]'
              : 'bg-transparent text-neutral-600'
          }`}
        >
          Entrar num casal
        </button>
      </div>

      {/* Criar Tab */}
      {tab === 'criar' && (
        <div className="mt-[22px] animate-[fadeIn_0.3s_ease_both]">
          <div className="bg-white rounded-[24px] px-[22px] py-[26px] shadow-card">
            <div className="text-[13px] font-bold text-neutral-700 text-center">Seu código de convite</div>
            <div className="flex gap-2 justify-center my-[18px] mb-4">
              {code.split('').map((digit, i) => (
                <div
                  key={i}
                  className="w-[42px] h-[54px] rounded-[13px] bg-[#fdeee9] text-primary-dark flex items-center justify-center font-bold text-2xl font-mono"
                >
                  {digit}
                </div>
              ))}
            </div>
            <button
              onClick={handleCopy}
              className={`flex items-center justify-center gap-1.5 w-full rounded-xl py-3 font-bold text-[13px] transition-all ${
                copied
                  ? 'bg-[#e4f6ec] text-accent-green'
                  : 'bg-neutral-100 text-neutral-700'
              }`}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
              {copied ? 'Código copiado!' : 'Copiar e compartilhar'}
            </button>
          </div>
          <div className="text-xs text-neutral-400 text-center mt-3.5 font-medium">
            Esperando seu par entrar com o código…
          </div>
        </div>
      )}

      {/* Entrar Tab */}
      {tab === 'entrar' && (
        <div className="mt-[22px] animate-[fadeIn_0.3s_ease_both]">
          <div className="bg-white rounded-[24px] px-[22px] py-[26px] shadow-card">
            <div className="text-[13px] font-bold text-neutral-700 text-center">Código do seu par</div>
            <div className="flex gap-2 justify-center my-[18px] mb-1">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={`w-[42px] h-[54px] rounded-[13px] flex items-center justify-center font-bold text-2xl font-mono ${
                    i === inputCode.length
                      ? 'bg-neutral-100 border-2 border-primary text-neutral-800'
                      : 'bg-neutral-100'
                  }`}
                >
                  {inputCode[i] || ''}
                </div>
              ))}
            </div>
            <input
              type="text"
              maxLength={6}
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value.replace(/\D/g, ''))}
              className="w-full opacity-0 h-0"
              autoFocus
            />
            {inputCode.length === 6 && (
              <button
                onClick={handleJoinCouple}
                disabled={loading}
                className="w-full bg-gradient-to-br from-primary-light to-primary-dark text-white rounded-[13px] py-3 font-bold text-[13px] mt-4 disabled:opacity-50"
              >
                {loading ? 'Vinculando...' : 'Vincular'}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="text-xs text-red-600 text-center mt-3 font-medium">
          {error}
        </div>
      )}

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        disabled={loading}
        className="mt-auto bg-gradient-to-br from-primary-light to-primary-dark text-white rounded-2xl py-[17px] text-center font-bold text-[15px] shadow-float disabled:opacity-50"
      >
        Continuar para o app
      </button>
    </div>
  );
};

export default Vincular;
