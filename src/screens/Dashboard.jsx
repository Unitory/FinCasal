import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl font-extrabold text-neutral-800">Início</h1>
            <select className="px-4 py-2 rounded-xl border border-neutral-200 bg-white text-sm font-semibold text-neutral-700">
              <option>Junho 2026</option>
              <option>Maio 2026</option>
              <option>Abril 2026</option>
            </select>
          </div>
          <p className="text-neutral-500">Olá, Ana & Léo 👋</p>
        </div>

        {/* Balance Card */}
        <div className="mt-[18px] rounded-[26px] px-[22px] py-6 text-white bg-gradient-to-br from-primary-light via-primary to-primary-dark shadow-float relative overflow-hidden">
          <div className="absolute right-[-30px] top-[-30px] w-[130px] h-[130px] rounded-full bg-white/10" />
          <div className="relative">
            <div className="text-[13px] opacity-85 font-semibold">Saldo do mês</div>
            <div className="font-mono font-bold text-[40px] my-1.5 tracking-tight">R$ 2.340</div>
            <div className="flex gap-4 text-xs font-semibold">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bff0d0]" />
                Receitas R$ 5.800
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffd6c9]" />
                Despesas R$ 3.460
              </div>
            </div>
          </div>
        </div>

        {/* Individual Spending */}
        <div onClick={() => navigate('/divisao')} className="flex gap-3 mt-3.5 cursor-pointer">
          <div className="flex-1 bg-white rounded-[18px] px-4 py-3.5 shadow-card-sm">
            <div className="flex items-center gap-1.5">
              <div className="w-[22px] h-[22px] rounded-full bg-[#fde0d6] flex items-center justify-center font-extrabold text-[10px] text-primary-dark">
                A
              </div>
              <span className="text-xs text-neutral-600 font-semibold">Ana gastou</span>
            </div>
            <div className="font-mono font-bold text-lg text-neutral-800 mt-1.5">R$ 1.980</div>
          </div>
          <div className="flex-1 bg-white rounded-[18px] px-4 py-3.5 shadow-card-sm">
            <div className="flex items-center gap-1.5">
              <div className="w-[22px] h-[22px] rounded-full bg-[#fdebc7] flex items-center justify-center font-extrabold text-[10px] text-accent-yellow">
                L
              </div>
              <span className="text-xs text-neutral-600 font-semibold">Léo gastou</span>
            </div>
            <div className="font-mono font-bold text-lg text-neutral-800 mt-1.5">R$ 1.480</div>
          </div>
        </div>

        {/* Recent Transactions Header */}
        <div className="flex items-center justify-between mt-6 mb-2.5">
          <div className="text-[15px] font-extrabold text-neutral-800">Últimas transações</div>
          <button onClick={() => navigate('/transacoes')} className="text-xs font-bold text-primary">
            Ver todas
          </button>
        </div>

        {/* Transactions List */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 bg-white rounded-2xl px-3.5 py-3 shadow-card-sm">
            <div className="w-10 h-10 rounded-[13px] bg-[#fdeee9] flex items-center justify-center text-lg">
              🛒
            </div>
            <div className="flex-1">
              <div className="font-bold text-sm text-neutral-800">Mercado</div>
              <div className="text-xs text-neutral-600 font-medium">Ana · hoje</div>
            </div>
            <div className="font-mono font-bold text-[15px] text-neutral-800">−240</div>
          </div>

          <div className="flex items-center gap-3 bg-white rounded-2xl px-3.5 py-3 shadow-card-sm">
            <div className="w-10 h-10 rounded-[13px] bg-[#fdeee9] flex items-center justify-center text-lg">
              🍽️
            </div>
            <div className="flex-1">
              <div className="font-bold text-sm text-neutral-800">Restaurante</div>
              <div className="text-xs text-neutral-600 font-medium">Os dois · ontem</div>
            </div>
            <div className="font-mono font-bold text-[15px] text-neutral-800">−130</div>
          </div>

          <div className="flex items-center gap-3 bg-white rounded-2xl px-3.5 py-3 shadow-card-sm">
            <div className="w-10 h-10 rounded-[13px] bg-[#e4f6ec] flex items-center justify-center text-lg">
              💰
            </div>
            <div className="flex-1">
              <div className="font-bold text-sm text-neutral-800">Salário Léo</div>
              <div className="text-xs text-neutral-600 font-medium">Léo · 05 jun</div>
            </div>
            <div className="font-mono font-bold text-[15px] text-accent-green">+4.000</div>
          </div>
        </div>

        {/* Goals Preview */}
        <div onClick={() => navigate('/metas')} className="mt-[18px] bg-white rounded-[20px] px-[18px] py-4 shadow-card cursor-pointer">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-[30px] h-[30px] rounded-[10px] bg-[#fdeee9] flex items-center justify-center text-[15px]">
                ✈️
              </div>
              <span className="text-sm font-extrabold text-neutral-800">Viagem Chile</span>
            </div>
            <div className="font-mono font-bold text-sm text-primary">70%</div>
          </div>
          <div className="h-2.5 bg-neutral-100 rounded-md overflow-hidden">
            <div className="w-[70%] h-full rounded-md bg-gradient-to-r from-primary-light to-primary-dark" />
          </div>
          <div className="flex justify-between mt-2 text-xs font-semibold text-neutral-600">
            <span>R$ 7.000 de R$ 10.000</span>
            <span className="text-neutral-800">faltam R$ 3.000</span>
          </div>
        </div>
      </div>
  );
};

export default Dashboard;
