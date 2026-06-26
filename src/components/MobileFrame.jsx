const MobileFrame = ({ children }) => {
  return (
    <div className="relative w-[392px] h-[844px] rounded-[46px] bg-neutral-50 overflow-hidden shadow-[0_40px_90px_-30px_rgba(120,40,20,0.45),0_0_0_1px_rgba(0,0,0,0.04)]">
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-[46px] flex items-center justify-between px-7 z-50 text-neutral-800 font-bold text-sm tracking-wide">
        <div>9:41</div>
        <div className="flex items-center gap-1.5">
          {/* Signal */}
          <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
            <rect x="0" y="7" width="3" height="4" rx="1"/>
            <rect x="4.5" y="5" width="3" height="6" rx="1"/>
            <rect x="9" y="2.5" width="3" height="8.5" rx="1"/>
            <rect x="13.5" y="0" width="3" height="11" rx="1"/>
          </svg>
          {/* WiFi */}
          <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor">
            <path d="M8 2.2c2 0 3.8.8 5.1 2.1l1.1-1.2A9 9 0 0 0 8 .5 9 9 0 0 0 1.8 3.1l1.1 1.2A7.2 7.2 0 0 1 8 2.2Zm0 3.2c1.1 0 2.2.45 3 1.2l1.1-1.2A6 6 0 0 0 8 4.6a6 6 0 0 0-4.1 1.6L5 7.4a4.3 4.3 0 0 1 3-1.2Zm0 3.1L9.4 10 8 11l-1.4-1Z"/>
          </svg>
          {/* Battery */}
          <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
            <rect x="0.5" y="0.5" width="21" height="11" rx="3" stroke="currentColor" opacity="0.4"/>
            <rect x="2" y="2" width="17" height="8" rx="1.5" fill="currentColor"/>
            <rect x="23" y="3.5" width="1.5" height="5" rx="0.75" fill="currentColor" opacity="0.5"/>
          </svg>
        </div>
      </div>

      {/* Content Region */}
      <div className="absolute top-[46px] left-0 right-0 bottom-0 overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default MobileFrame;
