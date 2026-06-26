import { useState } from 'react';
import BottomNav from '../components/BottomNav';
import TransactionModal from '../components/TransactionModal';

const Metas = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="absolute inset-0 overflow-y-auto animate-[screenIn_0.32s_ease_both] px-5 pt-[22px] pb-[120px]">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="text-[21px] font-extrabold text-neutral-800 tracking-tight">Objetivos</div>
          <button className="flex items-center gap-1.5 bg-gradient-to-br from-primary-light to-primary-dark text-white rounded-xl px-3 py-2 text-[13px] font-bold shadow-[0_10px_20px_-10px_rgba(216,72,46,0.6)]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <path d="M12 5v14M5 12h14"/>
            </svg>
            Novo
          </button>
        </div>

        {/* Goal 1 - Viagem Chile */}
        <div className="bg-white rounded-[22px] p-5 mt-[18px] shadow-card">
          <div className="flex items-center justify-between mb-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-[42px] h-[42px] rounded-[14px] bg-[#fdeee9] flex items-center justify-center text-xl">
                ✈️
              </div>
              <div>
                <div className="text-[15px] font-extrabold text-neutral-800">Viagem Chile</div>
                <div className="text-xs text-neutral-600 font-medium">faltam R$ 3.000</div>
              </div>
            </div>
            <div className="font-mono font-bold text-[17px] text-primary">70%</div>
          </div>

          {/* Progress Bar */}
          <div className="h-3 bg-neutral-100 rounded-md overflow-hidden">
            <div className="w-[70%] h-full rounded-md bg-gradient-to-r from-primary-light to-primary-dark" />
          </div>

          {/* Amount Info */}
          <div className="flex justify-between mt-2 text-xs font-semibold text-neutral-600">
            <span className="font-mono font-bold text-[13px] text-neutral-800">R$ 7.000</span>
            <span>de R$ 10.000</span>
          </div>

          {/* Individual Contributions */}
          <div className="flex gap-2 mt-3.5 pt-3.5 border-t border-neutral-100">
            <div className="flex-1 flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-[#fde0d6] flex items-center justify-center font-extrabold text-[9px] text-primary-dark">
                A
              </div>
              <span className="text-xs font-semibold text-neutral-700">R$ 4.000</span>
            </div>
            <div className="flex-1 flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-[#fdebc7] flex items-center justify-center font-extrabold text-[9px] text-accent-yellow">
                L
              </div>
              <span className="text-xs font-semibold text-neutral-700">R$ 3.000</span>
            </div>
          </div>

          {/* Add Contribution Button */}
          <button className="mt-3.5 w-full flex items-center justify-center gap-1.5 border-[1.5px] border-[#fdded3] bg-[#fdf4f0] text-primary-dark rounded-[13px] py-3 text-[13px] font-bold">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <path d="M12 5v14M5 12h14"/>
            </svg>
            Adicionar aporte
          </button>
        </div>

        {/* Goal 2 - Reserva de Emergência */}
        <div className="bg-white rounded-[22px] p-5 mt-3.5 shadow-card">
          <div className="flex items-center justify-between mb-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-[42px] h-[42px] rounded-[14px] bg-[#e4f6ec] flex items-center justify-center text-xl">
                🛡️
              </div>
              <div>
                <div className="text-[15px] font-extrabold text-neutral-800">Reserva de emergência</div>
                <div className="text-xs text-neutral-600 font-medium">faltam R$ 9.000</div>
              </div>
            </div>
            <div className="font-mono font-bold text-[17px] text-accent-green">40%</div>
          </div>

          {/* Progress Bar */}
          <div className="h-3 bg-neutral-100 rounded-md overflow-hidden">
            <div className="w-[40%] h-full rounded-md bg-gradient-to-r from-[#34c98a] to-[#1f9d6b]" />
          </div>

          {/* Amount Info */}
          <div className="flex justify-between mt-2 text-xs font-semibold text-neutral-600">
            <span className="font-mono font-bold text-[13px] text-neutral-800">R$ 6.000</span>
            <span>de R$ 15.000</span>
          </div>

          {/* Individual Contributions */}
          <div className="flex gap-2 mt-3.5 pt-3.5 border-t border-neutral-100">
            <div className="flex-1 flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-[#fde0d6] flex items-center justify-center font-extrabold text-[9px] text-primary-dark">
                A
              </div>
              <span className="text-xs font-semibold text-neutral-700">R$ 3.500</span>
            </div>
            <div className="flex-1 flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-[#fdebc7] flex items-center justify-center font-extrabold text-[9px] text-accent-yellow">
                L
              </div>
              <span className="text-xs font-semibold text-neutral-700">R$ 2.500</span>
            </div>
          </div>

          {/* Add Contribution Button */}
          <button className="mt-3.5 w-full flex items-center justify-center gap-1.5 border-[1.5px] border-[#d3efe0] bg-[#f0faf5] text-accent-green rounded-[13px] py-3 text-[13px] font-bold">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <path d="M12 5v14M5 12h14"/>
            </svg>
            Adicionar aporte
          </button>
        </div>
      </div>

      <BottomNav onAddClick={() => setModalOpen(true)} />

      {modalOpen && <TransactionModal onClose={() => setModalOpen(false)} />}
    </>
  );
};

export default Metas;
