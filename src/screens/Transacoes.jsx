const Transacoes = () => {
  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="text-[21px] font-extrabold text-neutral-800 tracking-tight">Transações</div>
          <button className="flex items-center gap-1.5 bg-white rounded-xl px-3 py-2 text-[13px] font-bold text-neutral-800 shadow-[0_6px_16px_-12px_rgba(120,40,20,0.5)]">
            Junho
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9a918b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </button>
        </div>

        {/* Today */}
        <div className="text-xs font-extrabold text-neutral-400 tracking-wider mt-[22px] mb-2.5">
          HOJE · 26 JUN
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 bg-white rounded-2xl px-3.5 py-3 shadow-card-sm">
            <div className="w-10 h-10 rounded-[13px] bg-[#fdeee9] flex items-center justify-center text-lg">
              🛒
            </div>
            <div className="flex-1">
              <div className="font-bold text-sm text-neutral-800">Mercado</div>
              <div className="text-xs text-neutral-600 font-medium">Ana</div>
            </div>
            <div className="font-mono font-bold text-[15px] text-neutral-800">−240</div>
          </div>

          <div className="flex items-center gap-3 bg-white rounded-2xl px-3.5 py-3 shadow-card-sm">
            <div className="w-10 h-10 rounded-[13px] bg-[#fdeee9] flex items-center justify-center text-lg">
              🚗
            </div>
            <div className="flex-1">
              <div className="font-bold text-sm text-neutral-800">Gasolina</div>
              <div className="text-xs text-neutral-600 font-medium">Léo</div>
            </div>
            <div className="font-mono font-bold text-[15px] text-neutral-800">−180</div>
          </div>
        </div>

        {/* Yesterday */}
        <div className="text-xs font-extrabold text-neutral-400 tracking-wider mt-5 mb-2.5">
          ONTEM · 25 JUN
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 bg-white rounded-2xl px-3.5 py-3 shadow-card-sm">
            <div className="w-10 h-10 rounded-[13px] bg-[#fdeee9] flex items-center justify-center text-lg">
              🍽️
            </div>
            <div className="flex-1">
              <div className="font-bold text-sm text-neutral-800">Restaurante</div>
              <div className="text-xs text-neutral-600 font-medium">Os dois</div>
            </div>
            <div className="font-mono font-bold text-[15px] text-neutral-800">−130</div>
          </div>

          <div className="flex items-center gap-3 bg-white rounded-2xl px-3.5 py-3 shadow-card-sm">
            <div className="w-10 h-10 rounded-[13px] bg-[#fdeee9] flex items-center justify-center text-lg">
              🏠
            </div>
            <div className="flex-1">
              <div className="font-bold text-sm text-neutral-800">Conta de luz</div>
              <div className="text-xs text-neutral-600 font-medium">Ana</div>
            </div>
            <div className="font-mono font-bold text-[15px] text-neutral-800">−210</div>
          </div>
        </div>

        {/* Earlier */}
        <div className="text-xs font-extrabold text-neutral-400 tracking-wider mt-5 mb-2.5">
          12 JUN
        </div>
        <div className="flex items-center gap-3 bg-white rounded-2xl px-3.5 py-3 shadow-card-sm">
          <div className="w-10 h-10 rounded-[13px] bg-[#e4f6ec] flex items-center justify-center text-lg">
            💰
          </div>
          <div className="flex-1">
            <div className="font-bold text-sm text-neutral-800">Salário Ana</div>
            <div className="text-xs text-neutral-600 font-medium">Ana</div>
          </div>
          <div className="font-mono font-bold text-[15px] text-accent-green">+4.500</div>
        </div>

        <div className="text-center text-xs text-neutral-300 mt-4 font-medium">
          Clique num item para editar ou excluir
        </div>
    </div>
  );
};

export default Transacoes;
