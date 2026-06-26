import { useState } from 'react';
import BottomNav from '../components/BottomNav';
import TransactionModal from '../components/TransactionModal';

const Graficos = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="absolute inset-0 overflow-y-auto animate-[screenIn_0.32s_ease_both] px-5 pt-[22px] pb-[120px]">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="text-[21px] font-extrabold text-neutral-800 tracking-tight">Gráficos</div>
          <button className="flex items-center gap-1.5 bg-white rounded-xl px-3 py-2 text-[13px] font-bold text-neutral-800 shadow-[0_6px_16px_-12px_rgba(120,40,20,0.5)]">
            Junho
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9a918b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </button>
        </div>

        {/* Expenses by Category */}
        <div className="bg-white rounded-[24px] p-5 mt-[18px] shadow-card">
          <div className="text-sm font-extrabold text-neutral-800 mb-[18px]">
            Despesas por categoria
          </div>
          <div className="flex items-center gap-5">
            {/* Donut Chart */}
            <div className="relative w-[120px] h-[120px] rounded-full animate-[popIn_0.7s_cubic-bezier(0.2,0.9,0.3,1.2)_both]" style={{
              background: 'conic-gradient(#d8482e 0 38%, #ef7a52 38% 63%, #f6a883 63% 82%, #fbd0bd 82% 100%)'
            }}>
              <div className="absolute inset-[26px] rounded-full bg-white flex flex-col items-center justify-center">
                <div className="font-mono font-bold text-lg text-neutral-800 leading-none">
                  3.460
                </div>
                <div className="text-[9px] text-neutral-600 font-semibold">total</div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex items-center gap-2 animate-[riseUp_0.5s_ease_both_0.15s]" style={{ animationDelay: '0.15s' }}>
                <span className="w-[11px] h-[11px] rounded bg-[#d8482e]" />
                <span className="flex-1 text-xs font-semibold text-neutral-700">Mercado</span>
                <span className="font-mono font-bold text-xs text-neutral-800">38%</span>
              </div>
              <div className="flex items-center gap-2 animate-[riseUp_0.5s_ease_both_0.25s]" style={{ animationDelay: '0.25s' }}>
                <span className="w-[11px] h-[11px] rounded bg-[#ef7a52]" />
                <span className="flex-1 text-xs font-semibold text-neutral-700">Casa</span>
                <span className="font-mono font-bold text-xs text-neutral-800">25%</span>
              </div>
              <div className="flex items-center gap-2 animate-[riseUp_0.5s_ease_both_0.35s]" style={{ animationDelay: '0.35s' }}>
                <span className="w-[11px] h-[11px] rounded bg-[#f6a883]" />
                <span className="flex-1 text-xs font-semibold text-neutral-700">Lazer</span>
                <span className="font-mono font-bold text-xs text-neutral-800">19%</span>
              </div>
              <div className="flex items-center gap-2 animate-[riseUp_0.5s_ease_both_0.45s]" style={{ animationDelay: '0.45s' }}>
                <span className="w-[11px] h-[11px] rounded bg-[#fbd0bd]" />
                <span className="flex-1 text-xs font-semibold text-neutral-700">Outros</span>
                <span className="font-mono font-bold text-xs text-neutral-800">18%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Me vs Partner */}
        <div className="bg-white rounded-[24px] p-5 mt-3.5 shadow-card">
          <div className="text-sm font-extrabold text-neutral-800 mb-1.5">Eu vs Parceiro</div>
          <div className="text-xs text-neutral-600 font-medium mb-[18px]">
            Quanto cada um gastou em junho
          </div>
          <div className="flex items-end justify-center gap-[46px] h-[170px]">
            {/* Ana */}
            <div className="flex flex-col items-center gap-2 h-full justify-end">
              <div className="font-mono font-bold text-[13px] text-neutral-800">R$ 1.980</div>
              <div
                className="w-[54px] h-[140px] rounded-t-xl rounded-b bg-gradient-to-b from-primary-light to-primary-dark origin-bottom"
                style={{
                  animation: 'growUp 0.8s cubic-bezier(0.2,0.9,0.3,1.05) both 0.1s'
                }}
              />
              <div className="flex items-center gap-1.5">
                <div className="w-[22px] h-[22px] rounded-full bg-[#fde0d6] flex items-center justify-center font-extrabold text-[10px] text-primary-dark">
                  A
                </div>
                <span className="text-xs font-bold text-neutral-700">Ana</span>
              </div>
            </div>

            {/* Léo */}
            <div className="flex flex-col items-center gap-2 h-full justify-end">
              <div className="font-mono font-bold text-[13px] text-neutral-800">R$ 1.480</div>
              <div
                className="w-[54px] h-[105px] rounded-t-xl rounded-b bg-gradient-to-b from-[#f7b56a] to-[#e0972a] origin-bottom"
                style={{
                  animation: 'growUp 0.8s cubic-bezier(0.2,0.9,0.3,1.05) both 0.22s'
                }}
              />
              <div className="flex items-center gap-1.5">
                <div className="w-[22px] h-[22px] rounded-full bg-[#fdebc7] flex items-center justify-center font-extrabold text-[10px] text-accent-yellow">
                  L
                </div>
                <span className="text-xs font-bold text-neutral-700">Léo</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav onAddClick={() => setModalOpen(true)} />

      {modalOpen && <TransactionModal onClose={() => setModalOpen(false)} />}
    </>
  );
};

export default Graficos;
