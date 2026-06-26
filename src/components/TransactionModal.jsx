import { useState } from 'react';

const TransactionModal = ({ onClose, onSave }) => {
  const [amount, setAmount] = useState('0');
  const [type, setType] = useState('despesa');
  const [category, setCategory] = useState(0);
  const [payer, setPayer] = useState('eu');

  const categories = [
    { icon: '🛒', label: 'Mercado' },
    { icon: '🍽️', label: 'Restaurante' },
    { icon: '🏠', label: 'Casa' },
    { icon: '🚗', label: 'Transporte' },
    { icon: '🎬', label: 'Lazer' },
    { icon: '💊', label: 'Saúde' },
    { icon: '🛍️', label: 'Compras' },
    { icon: '✨', label: 'Outros' },
  ];

  const payers = [
    { id: 'eu', label: 'Eu' },
    { id: 'leo', label: 'Léo' },
    { id: 'dois', label: 'Os dois' },
  ];

  const keypad = ['1', '2', '3', '4', '5', '6', '7', '8', '9', ',', '0', '←'];

  const handleKeyPress = (key) => {
    if (key === '←') {
      setAmount(amount.length <= 1 ? '0' : amount.slice(0, -1));
    } else if (key === ',') {
      if (!amount.includes(',')) {
        setAmount(amount + ',');
      }
    } else {
      const newAmount = amount === '0' ? key : amount + key;
      if (newAmount.length <= 9) {
        setAmount(newAmount);
      }
    }
  };

  const formatAmount = (value) => {
    const cents = parseInt(value.replace(',', ''), 10) || 0;
    return (cents / 100).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const handleSave = () => {
    const transactionData = {
      amount: parseInt(amount.replace(',', ''), 10) / 100,
      type,
      category: categories[category].label,
      categoryIcon: categories[category].icon,
      payer,
      date: new Date(),
    };

    if (onSave) {
      onSave(transactionData);
    }
    onClose();
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={onClose}
      className="absolute inset-0 bg-[rgba(31,18,12,0.45)] backdrop-blur-sm z-[100] animate-[fadeIn_0.2s_ease_both] flex items-end"
    >
      <div
        onClick={stopPropagation}
        className="w-full bg-neutral-50 rounded-t-[30px] px-5 pt-2.5 pb-6 animate-[sheetUp_0.34s_cubic-bezier(0.2,0.8,0.25,1)_both] max-h-[96%] overflow-y-auto"
      >
        {/* Handle */}
        <div className="w-10 h-1.5 rounded bg-[#ddd3cc] mx-auto mb-3.5" />

        {/* Header */}
        <div className="flex items-center justify-between mb-1.5">
          <button onClick={onClose} className="text-sm font-bold text-neutral-600">
            Cancelar
          </button>
          <div className="text-[15px] font-extrabold text-neutral-800">Nova transação</div>
          <button onClick={handleSave} className="text-sm font-extrabold text-primary">
            Salvar
          </button>
        </div>

        {/* Amount Display */}
        <div className="text-center py-3 pb-2">
          <div className="text-xs text-neutral-600 font-semibold">Valor</div>
          <div className="font-mono font-bold text-[44px] text-neutral-800 tracking-tight mt-0.5">
            R$ {formatAmount(amount)}
          </div>
        </div>

        {/* Type Selector */}
        <div className="flex gap-1.5 bg-neutral-200 rounded-[14px] p-1.5">
          <button
            onClick={() => setType('despesa')}
            className={`flex-1 text-center py-3 rounded-[11px] font-semibold text-xs transition-all ${
              type === 'despesa'
                ? 'bg-white text-primary shadow-[0_3px_10px_-3px_rgba(216,72,46,0.3)]'
                : 'bg-transparent text-neutral-600'
            }`}
          >
            Despesa
          </button>
          <button
            onClick={() => setType('receita')}
            className={`flex-1 text-center py-3 rounded-[11px] font-semibold text-xs transition-all ${
              type === 'receita'
                ? 'bg-white text-primary shadow-[0_3px_10px_-3px_rgba(216,72,46,0.3)]'
                : 'bg-transparent text-neutral-600'
            }`}
          >
            Receita
          </button>
        </div>

        {/* Category */}
        <div className="text-[11px] font-extrabold text-neutral-400 tracking-wider mt-[18px] mb-2">
          CATEGORIA
        </div>
        <div className="grid grid-cols-4 gap-2">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setCategory(i)}
              className={`aspect-square flex flex-col items-center justify-center gap-1.5 rounded-2xl cursor-pointer transition-all ${
                i === category
                  ? 'border-2 border-primary bg-[#fdeee9] text-neutral-800'
                  : 'border-2 border-transparent bg-white text-neutral-700 shadow-[0_4px_12px_-12px_rgba(120,40,20,0.5)]'
              }`}
            >
              <div className="text-xl">{cat.icon}</div>
              <div className="text-[9px] font-bold">{cat.label}</div>
            </button>
          ))}
        </div>

        {/* Payer */}
        <div className="text-[11px] font-extrabold text-neutral-400 tracking-wider mt-[18px] mb-2">
          QUEM PAGOU
        </div>
        <div className="flex gap-1.5">
          {payers.map((p) => (
            <button
              key={p.id}
              onClick={() => setPayer(p.id)}
              className={`flex-1 text-center py-3 px-1.5 rounded-[13px] font-bold text-[13px] cursor-pointer transition-all ${
                payer === p.id
                  ? 'bg-neutral-800 text-white'
                  : 'bg-white text-neutral-700 shadow-[0_4px_12px_-12px_rgba(120,40,20,0.5)]'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Date & Note */}
        <div className="flex gap-2 mt-3.5">
          <div className="flex-1 flex items-center gap-2 bg-white rounded-[13px] px-3 py-3 text-[13px] font-semibold text-neutral-700 shadow-[0_6px_16px_-14px_rgba(120,40,20,0.5)]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e8674c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2"/>
              <path d="M16 2v4M8 2v4M3 10h18"/>
            </svg>
            Hoje, 26 jun
          </div>
          <div className="flex-1 flex items-center gap-2 bg-white rounded-[13px] px-3 py-3 text-[13px] font-semibold text-neutral-400 shadow-[0_6px_16px_-14px_rgba(120,40,20,0.5)]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c4bbb4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>
            </svg>
            Nota
          </div>
        </div>

        {/* Keypad */}
        <div className="grid grid-cols-3 gap-2 mt-4">
          {keypad.map((key) => (
            <button
              key={key}
              onClick={() => handleKeyPress(key)}
              className="bg-white rounded-[14px] text-center py-[15px] font-mono font-bold text-[21px] text-neutral-800 shadow-[0_4px_12px_-10px_rgba(120,40,20,0.5)]"
            >
              {key}
            </button>
          ))}
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full mt-4 bg-gradient-to-br from-primary-light to-primary-dark text-white rounded-2xl py-[17px] text-center font-extrabold text-[15px] shadow-[0_14px_28px_-10px_rgba(216,72,46,0.6)]"
        >
          Salvar transação
        </button>
      </div>
    </div>
  );
};

export default TransactionModal;
