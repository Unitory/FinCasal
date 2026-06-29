const Divisao = () => {
  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-extrabold text-neutral-800">Divisão</h1>
          <select className="px-4 py-2 rounded-xl border border-neutral-200 bg-white text-sm font-semibold text-neutral-700">
            <option>Junho 2026</option>
            <option>Maio 2026</option>
            <option>Abril 2026</option>
          </select>
        </div>
        <p className="text-neutral-500">Quem deve o quê</p>
      </div>

      {/* Individual Spending Summary */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-[18px] px-6 py-4 shadow-card-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-[#fde0d6] flex items-center justify-center font-extrabold text-xs text-primary-dark">
              A
            </div>
            <span className="text-sm text-neutral-600 font-semibold">Você</span>
          </div>
          <div className="font-mono font-bold text-2xl text-neutral-800">R$ 1.980</div>
        </div>
        <div className="bg-white rounded-[18px] px-6 py-4 shadow-card-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-[#fdebc7] flex items-center justify-center font-extrabold text-xs text-accent-yellow">
              L
            </div>
            <span className="text-sm text-neutral-600 font-semibold">Léo</span>
          </div>
          <div className="font-mono font-bold text-2xl text-neutral-800">R$ 1.480</div>
        </div>
      </div>

      {/* Settlement Card */}
      <div className="mb-8 rounded-[24px] px-8 py-8 text-white bg-gradient-to-br from-[#2b2440] to-[#1f1b2e] shadow-[0_22px_40px_-20px_rgba(31,27,46,0.6)] text-center relative overflow-hidden max-w-2xl">
        <div className="absolute left-[-20px] bottom-[-30px] w-[140px] h-[140px] rounded-full bg-[rgba(232,103,76,0.18)]" />
        <div className="relative">
          <div className="text-sm opacity-70 font-semibold">Acerto do mês</div>
          <div className="font-mono font-bold text-3xl my-3 tracking-tight">
            Léo deve <span className="text-[#ff9c7d]">R$ 250</span>
          </div>
          <div className="text-sm opacity-70 font-medium mb-4">
            para igualar os gastos compartilhados
          </div>
          <button className="bg-white/12 border border-white/18 rounded-[13px] py-3 px-6 text-sm font-bold hover:bg-white/20 transition-all">
            Marcar como acertado
          </button>
        </div>
      </div>

      {/* Shared Expenses */}
      <h2 className="text-xl font-extrabold text-neutral-800 mb-4">Entram na divisão</h2>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-4 bg-white rounded-2xl px-4 py-4 shadow-card-sm">
          <div className="w-12 h-12 rounded-[13px] bg-[#fdeee9] flex items-center justify-center text-xl">
            🍽️
          </div>
          <div className="flex-1">
            <div className="font-bold text-base text-neutral-800">Restaurante</div>
            <div className="text-sm text-neutral-600 font-medium">Léo pagou · 50 / 50</div>
          </div>
          <div className="font-mono font-bold text-lg text-neutral-800">130</div>
        </div>

        <div className="flex items-center gap-4 bg-white rounded-2xl px-4 py-4 shadow-card-sm">
          <div className="w-12 h-12 rounded-[13px] bg-[#fdeee9] flex items-center justify-center text-xl">
            🏠
          </div>
          <div className="flex-1">
            <div className="font-bold text-base text-neutral-800">Conta de luz</div>
            <div className="text-sm text-neutral-600 font-medium">Ana pagou · 50 / 50</div>
          </div>
          <div className="font-mono font-bold text-lg text-neutral-800">210</div>
        </div>

        <div className="flex items-center gap-4 bg-white rounded-2xl px-4 py-4 shadow-card-sm">
          <div className="w-12 h-12 rounded-[13px] bg-[#fdeee9] flex items-center justify-center text-xl">
            🛒
          </div>
          <div className="flex-1">
            <div className="font-bold text-base text-neutral-800">Mercado</div>
            <div className="text-sm text-neutral-600 font-medium">Ana pagou · 50 / 50</div>
          </div>
          <div className="font-mono font-bold text-lg text-neutral-800">240</div>
        </div>
      </div>
    </div>
  );
};

export default Divisao;
