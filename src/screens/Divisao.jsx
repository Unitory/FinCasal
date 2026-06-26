import { useState } from 'react';
import BottomNav from '../components/BottomNav';
import TransactionModal from '../components/TransactionModal';

const Divisao = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="absolute inset-0 overflow-y-auto animate-[screenIn_0.32s_ease_both] px-5 pt-[22px] pb-[120px]">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="text-[21px] font-extrabold text-neutral-800 tracking-tight">Divisão</div>
          <button className="flex items-center gap-1.5 bg-white rounded-xl px-3 py-2 text-[13px] font-bold text-neutral-800 shadow-[0_6px_16px_-12px_rgba(120,40,20,0.5)]">
            Junho
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9a918b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </button>
        </div>

        {/* Individual Spending Summary */}
        <div className="flex gap-3 mt-[18px]">
          <div className="flex-1 bg-white rounded-[18px] px-4 py-3.5 shadow-card-sm">
            <div className="flex items-center gap-1.5">
              <div className="w-[22px] h-[22px] rounded-full bg-[#fde0d6] flex items-center justify-center font-extrabold text-[10px] text-primary-dark">
                A
              </div>
              <span className="text-xs text-neutral-600 font-semibold">Você</span>
            </div>
            <div className="font-mono font-bold text-lg text-neutral-800 mt-1.5">R$ 1.980</div>
          </div>
          <div className="flex-1 bg-white rounded-[18px] px-4 py-3.5 shadow-card-sm">
            <div className="flex items-center gap-1.5">
              <div className="w-[22px] h-[22px] rounded-full bg-[#fdebc7] flex items-center justify-center font-extrabold text-[10px] text-accent-yellow">
                L
              </div>
              <span className="text-xs text-neutral-600 font-semibold">Léo</span>
            </div>
            <div className="font-mono font-bold text-lg text-neutral-800 mt-1.5">R$ 1.480</div>
          </div>
        </div>

        {/* Settlement Card */}
        <div className="mt-3.5 rounded-[24px] px-[22px] py-6 text-white bg-gradient-to-br from-[#2b2440] to-[#1f1b2e] shadow-[0_22px_40px_-20px_rgba(31,27,46,0.6)] text-center relative overflow-hidden">
          <div className="absolute left-[-20px] bottom-[-30px] w-[120px] h-[120px] rounded-full bg-[rgba(232,103,76,0.18)]" />
          <div className="relative">
            <div className="text-xs opacity-70 font-semibold">Acerto do mês</div>
            <div className="font-mono font-bold text-[22px] my-2 tracking-tight">
              Léo deve <span className="text-[#ff9c7d]">R$ 250</span>
            </div>
            <div className="text-xs opacity-70 font-medium">
              para igualar os gastos compartilhados
            </div>
            <button className="mt-4 bg-white/12 border border-white/18 rounded-[13px] py-3 px-4 text-[13px] font-bold">
              Marcar como acertado
            </button>
          </div>
        </div>

        {/* Shared Expenses */}
        <div className="text-[15px] font-extrabold text-neutral-800 mt-6 mb-2.5">
          Entram na divisão
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 bg-white rounded-2xl px-3.5 py-3 shadow-card-sm">
            <div className="w-10 h-10 rounded-[13px] bg-[#fdeee9] flex items-center justify-center text-lg">
              🍽️
            </div>
            <div className="flex-1">
              <div className="font-bold text-sm text-neutral-800">Restaurante</div>
              <div className="text-xs text-neutral-600 font-medium">Léo pagou · 50 / 50</div>
            </div>
            <div className="font-mono font-bold text-[15px] text-neutral-800">130</div>
          </div>

          <div className="flex items-center gap-3 bg-white rounded-2xl px-3.5 py-3 shadow-card-sm">
            <div className="w-10 h-10 rounded-[13px] bg-[#fdeee9] flex items-center justify-center text-lg">
              🏠
            </div>
            <div className="flex-1">
              <div className="font-bold text-sm text-neutral-800">Conta de luz</div>
              <div className="text-xs text-neutral-600 font-medium">Ana pagou · 50 / 50</div>
            </div>
            <div className="font-mono font-bold text-[15px] text-neutral-800">210</div>
          </div>

          <div className="flex items-center gap-3 bg-white rounded-2xl px-3.5 py-3 shadow-card-sm">
            <div className="w-10 h-10 rounded-[13px] bg-[#fdeee9] flex items-center justify-center text-lg">
              🛒
            </div>
            <div className="flex-1">
              <div className="font-bold text-sm text-neutral-800">Mercado</div>
              <div className="text-xs text-neutral-600 font-medium">Ana pagou · 50 / 50</div>
            </div>
            <div className="font-mono font-bold text-[15px] text-neutral-800">240</div>
          </div>
        </div>
      </div>

      <BottomNav onAddClick={() => setModalOpen(true)} />

      {modalOpen && <TransactionModal onClose={() => setModalOpen(false)} />}
    </>
  );
};

export default Divisao;
