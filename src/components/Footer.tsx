export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-brand-400 to-violet-500 flex items-center justify-center">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5z" fill="white" opacity="0.9" />
              <path d="M2 17l10 5 10-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-sm font-medium text-white/60">Reel Counter</span>
        </div>

        <p className="text-[13px] text-white/20">
          100% offline. Zero data leaves your device. Built for self-awareness.
        </p>

        <p className="text-xs text-white/15">&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
