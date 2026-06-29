const Metas = () => {
  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-extrabold text-neutral-800">Objetivos</h1>
          <button className="flex items-center gap-2 bg-gradient-to-br from-primary-light to-primary-dark text-white rounded-xl px-4 py-2.5 text-sm font-bold shadow-float hover:shadow-[0_14px_32px_-12px_rgba(216,72,46,0.7)] transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <path d="M12 5v14M5 12h14"/>
            </svg>
            Novo objetivo
          </button>
        </div>
        <p className="text-neutral-500">Construindo o futuro juntos</p>
      </div>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Goal 1 - Viagem Chile */}
        <div className="bg-white rounded-[24px] p-6 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-[14px] bg-[#fdeee9] flex items-center justify-center text-2xl">
                ✈️
              </div>
              <div>
                <div className="text-lg font-extrabold text-neutral-800">Viagem Chile</div>
                <div className="text-sm text-neutral-600 font-medium">faltam R$ 3.000</div>
              </div>
            </div>
            <div className="font-mono font-bold text-xl text-primary">70%</div>
          </div>

          {/* Progress Bar */}
          <div className="h-3 bg-neutral-100 rounded-md overflow-hidden mb-3">
            <div className="w-[70%] h-full rounded-md bg-gradient-to-r from-primary-light to-primary-dark" />
          </div>

          {/* Amount Info */}
          <div className="flex justify-between mb-4 text-sm font-semibold text-neutral-600">
            <span className="font-mono font-bold text-base text-neutral-800">R$ 7.000</span>
            <span>de R$ 10.000</span>
          </div>

          {/* Individual Contributions */}
          <div className="flex gap-3 mb-4 pt-4 border-t border-neutral-100">
            <div className="flex-1 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#fde0d6] flex items-center justify-center font-extrabold text-[10px] text-primary-dark">
                A
              </div>
              <span className="text-sm font-semibold text-neutral-700">R$ 4.000</span>
            </div>
            <div className="flex-1 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#fdebc7] flex items-center justify-center font-extrabold text-[10px] text-accent-yellow">
                L
              </div>
              <span className="text-sm font-semibold text-neutral-700">R$ 3.000</span>
            </div>
          </div>

          {/* Add Contribution Button */}
          <button className="w-full flex items-center justify-center gap-2 border-2 border-[#fdded3] bg-[#fdf4f0] text-primary-dark rounded-[13px] py-3 text-sm font-bold hover:bg-[#fce9e1] transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <path d="M12 5v14M5 12h14"/>
            </svg>
            Adicionar aporte
          </button>
        </div>

        {/* Goal 2 - Reserva de Emergência */}
        <div className="bg-white rounded-[24px] p-6 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-[14px] bg-[#e4f6ec] flex items-center justify-center text-2xl">
                🛡️
              </div>
              <div>
                <div className="text-lg font-extrabold text-neutral-800">Reserva de emergência</div>
                <div className="text-sm text-neutral-600 font-medium">faltam R$ 9.000</div>
              </div>
            </div>
            <div className="font-mono font-bold text-xl text-accent-green">40%</div>
          </div>

          {/* Progress Bar */}
          <div className="h-3 bg-neutral-100 rounded-md overflow-hidden mb-3">
            <div className="w-[40%] h-full rounded-md bg-gradient-to-r from-[#34c98a] to-[#1f9d6b]" />
          </div>

          {/* Amount Info */}
          <div className="flex justify-between mb-4 text-sm font-semibold text-neutral-600">
            <span className="font-mono font-bold text-base text-neutral-800">R$ 6.000</span>
            <span>de R$ 15.000</span>
          </div>

          {/* Individual Contributions */}
          <div className="flex gap-3 mb-4 pt-4 border-t border-neutral-100">
            <div className="flex-1 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#fde0d6] flex items-center justify-center font-extrabold text-[10px] text-primary-dark">
                A
              </div>
              <span className="text-sm font-semibold text-neutral-700">R$ 3.500</span>
            </div>
            <div className="flex-1 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#fdebc7] flex items-center justify-center font-extrabold text-[10px] text-accent-yellow">
                L
              </div>
              <span className="text-sm font-semibold text-neutral-700">R$ 2.500</span>
            </div>
          </div>

          {/* Add Contribution Button */}
          <button className="w-full flex items-center justify-center gap-2 border-2 border-[#d3efe0] bg-[#f0faf5] text-accent-green rounded-[13px] py-3 text-sm font-bold hover:bg-[#e6f7ef] transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <path d="M12 5v14M5 12h14"/>
            </svg>
            Adicionar aporte
          </button>
        </div>
      </div>
    </div>
  );
};

export default Metas;
