import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav = ({ onAddClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navColor = (path) => (isActive(path) ? '#e8674c' : '#b8ada6');

  return (
    <>
      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 h-[84px] bg-white/92 backdrop-blur-sm border-t border-[#f0e9e4] flex items-start justify-around px-3.5 pt-[13px] z-50">
        {/* Início */}
        <button
          onClick={() => navigate('/dashboard')}
          className="flex flex-col items-center gap-1.5 w-14 text-center"
          style={{ color: navColor('/dashboard') }}
        >
          <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 10.5 12 3l9 7.5"/>
            <path d="M5 9.5V21h14V9.5"/>
          </svg>
          <span className="text-[10px] font-bold">Início</span>
        </button>

        {/* Transações */}
        <button
          onClick={() => navigate('/transacoes')}
          className="flex flex-col items-center gap-1.5 w-14 text-center"
          style={{ color: navColor('/transacoes') }}
        >
          <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 6h13M8 12h13M8 18h13"/>
            <circle cx="3.5" cy="6" r="1.2"/>
            <circle cx="3.5" cy="12" r="1.2"/>
            <circle cx="3.5" cy="18" r="1.2"/>
          </svg>
          <span className="text-[10px] font-bold">Transações</span>
        </button>

        {/* Gráficos */}
        <button
          onClick={() => navigate('/graficos')}
          className="flex flex-col items-center gap-1.5 w-14 text-center"
          style={{ color: navColor('/graficos') }}
        >
          <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 21H3V3"/>
            <path d="M7 16v-4M12 16V8M17 16v-6"/>
          </svg>
          <span className="text-[10px] font-bold">Gráficos</span>
        </button>

        {/* Divisão */}
        <button
          onClick={() => navigate('/divisao')}
          className="flex flex-col items-center gap-1.5 w-14 text-center"
          style={{ color: navColor('/divisao') }}
        >
          <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v18"/>
            <path d="M5 7H3v10a2 2 0 0 0 2 2h2"/>
            <path d="M19 7h2v10a2 2 0 0 1-2 2h-2"/>
            <circle cx="6" cy="4.5" r="1.5"/>
            <circle cx="18" cy="4.5" r="1.5"/>
          </svg>
          <span className="text-[10px] font-bold">Divisão</span>
        </button>

        {/* Metas */}
        <button
          onClick={() => navigate('/metas')}
          className="flex flex-col items-center gap-1.5 w-14 text-center"
          style={{ color: navColor('/metas') }}
        >
          <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9"/>
            <circle cx="12" cy="12" r="5"/>
            <circle cx="12" cy="12" r="1.4" fill="currentColor"/>
          </svg>
          <span className="text-[10px] font-bold">Metas</span>
        </button>
      </div>

      {/* Floating Add Button */}
      <button
        onClick={onAddClick}
        className="absolute right-5 bottom-[98px] w-[60px] h-[60px] rounded-[20px] bg-gradient-to-br from-primary-light to-primary-dark flex items-center justify-center shadow-[0_16px_30px_-10px_rgba(216,72,46,0.7)] z-50"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.6" strokeLinecap="round">
          <path d="M12 5v14M5 12h14"/>
        </svg>
      </button>
    </>
  );
};

export default BottomNav;
