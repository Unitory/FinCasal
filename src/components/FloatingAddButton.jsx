const FloatingAddButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-light to-primary-dark text-white shadow-[0_16px_30px_-10px_rgba(216,72,46,0.7)] hover:shadow-[0_20px_40px_-10px_rgba(216,72,46,0.8)] transition-all hover:scale-105 z-50 flex items-center justify-center"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d="M12 5v14M5 12h14"/>
      </svg>
    </button>
  );
};

export default FloatingAddButton;
