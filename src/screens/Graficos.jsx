const Graficos = () => {
  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-extrabold text-neutral-800">Gráficos</h1>
          <select className="px-4 py-2 rounded-xl border border-neutral-200 bg-white text-sm font-semibold text-neutral-700">
            <option>Junho 2026</option>
            <option>Maio 2026</option>
            <option>Abril 2026</option>
          </select>
        </div>
        <p className="text-neutral-500">Para onde o dinheiro foi</p>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Expenses by Category */}
        <div className="bg-white rounded-[24px] p-6 shadow-card">
          <div className="text-lg font-extrabold text-neutral-800 mb-6">
            Despesas por categoria
          </div>
          <div className="flex items-center gap-8">
            {/* Donut Chart */}
            <div className="relative w-[140px] h-[140px] rounded-full animate-[popIn_0.7s_cubic-bezier(0.2,0.9,0.3,1.2)_both]" style={{
              background: 'conic-gradient(#d8482e 0 38%, #ef7a52 38% 63%, #f6a883 63% 82%, #fbd0bd 82% 100%)'
            }}>
              <div className="absolute inset-[30px] rounded-full bg-white flex flex-col items-center justify-center">
                <div className="font-mono font-bold text-xl text-neutral-800 leading-none">
                  3.460
                </div>
                <div className="text-[10px] text-neutral-600 font-semibold">total</div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded bg-[#d8482e]" />
                <span className="flex-1 text-sm font-semibold text-neutral-700">Mercado</span>
                <span className="font-mono font-bold text-sm text-neutral-800">38%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded bg-[#ef7a52]" />
                <span className="flex-1 text-sm font-semibold text-neutral-700">Casa</span>
                <span className="font-mono font-bold text-sm text-neutral-800">25%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded bg-[#f6a883]" />
                <span className="flex-1 text-sm font-semibold text-neutral-700">Lazer</span>
                <span className="font-mono font-bold text-sm text-neutral-800">19%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded bg-[#fbd0bd]" />
                <span className="flex-1 text-sm font-semibold text-neutral-700">Outros</span>
                <span className="font-mono font-bold text-sm text-neutral-800">18%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Me vs Partner */}
        <div className="bg-white rounded-[24px] p-6 shadow-card">
          <div className="text-lg font-extrabold text-neutral-800 mb-2">Eu vs Parceiro</div>
          <div className="text-sm text-neutral-600 font-medium mb-6">
            Quanto cada um gastou em junho
          </div>
          <div className="flex items-end justify-center gap-12 h-[200px]">
            {/* Ana */}
            <div className="flex flex-col items-center gap-3 h-full justify-end">
              <div className="font-mono font-bold text-sm text-neutral-800">R$ 1.980</div>
              <div
                className="w-16 h-[160px] rounded-t-xl rounded-b bg-gradient-to-b from-primary-light to-primary-dark origin-bottom"
                style={{
                  animation: 'growUp 0.8s cubic-bezier(0.2,0.9,0.3,1.05) both 0.1s'
                }}
              />
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#fde0d6] flex items-center justify-center font-extrabold text-xs text-primary-dark">
                  A
                </div>
                <span className="text-sm font-bold text-neutral-700">Ana</span>
              </div>
            </div>

            {/* Léo */}
            <div className="flex flex-col items-center gap-3 h-full justify-end">
              <div className="font-mono font-bold text-sm text-neutral-800">R$ 1.480</div>
              <div
                className="w-16 h-[120px] rounded-t-xl rounded-b bg-gradient-to-b from-[#f7b56a] to-[#e0972a] origin-bottom"
                style={{
                  animation: 'growUp 0.8s cubic-bezier(0.2,0.9,0.3,1.05) both 0.22s'
                }}
              />
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#fdebc7] flex items-center justify-center font-extrabold text-xs text-accent-yellow">
                  L
                </div>
                <span className="text-sm font-bold text-neutral-700">Léo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graficos;
