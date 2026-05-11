interface IconProps {
  className?: string;
  size?: number;
}

export function ScrollIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect x="14" y="4" width="20" height="40" rx="10" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="24" cy="16" r="3" fill="currentColor" opacity="0.8" />
      <path d="M24 24v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 30l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function OcrIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M6 14V10a4 4 0 014-4h4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M34 6h4a4 4 0 014 4v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M42 34v4a4 4 0 01-4 4h-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M14 42h-4a4 4 0 01-4-4v-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="12" y="18" width="24" height="3" rx="1.5" fill="currentColor" opacity="0.6" />
      <rect x="12" y="25" width="18" height="3" rx="1.5" fill="currentColor" opacity="0.4" />
      <rect x="12" y="32" width="12" height="3" rx="1.5" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

export function AnalyticsIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M6 38h36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="10" y="24" width="6" height="14" rx="3" fill="currentColor" opacity="0.3" />
      <rect x="21" y="16" width="6" height="22" rx="3" fill="currentColor" opacity="0.6" />
      <rect x="32" y="8" width="6" height="30" rx="3" fill="currentColor" opacity="0.9" />
      <path d="M10 18l10-6 11 4 9-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      <circle cx="10" cy="18" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="20" cy="12" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="31" cy="16" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="40" cy="8" r="2" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function ShieldIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M24 4L8 12v12c0 10.55 6.84 20.41 16 24 9.16-3.59 16-13.45 16-24V12L24 4z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M17 24l5 5 9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TrophyIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M16 8h16v14c0 4.42-3.58 8-8 8s-8-3.58-8-8V8z" stroke="currentColor" strokeWidth="2.5" />
      <path d="M16 12h-4a4 4 0 00-4 4v2a6 6 0 006 6h2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 12h4a4 4 0 014 4v2a6 6 0 01-6 6h-2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M20 30v4h8v-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M18 38h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 34v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function TimerIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="26" r="16" stroke="currentColor" strokeWidth="2.5" />
      <path d="M24 16v10l7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 6h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 6v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function TargetIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
    </svg>
  );
}

export function BrainIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M24 42V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 24c-2-4-8-6-10-3s0 8 4 10c-6 0-8 4-5 7s8 1 11-2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 24c2-4 8-6 10-3s0 8-4 10c6 0 8 4 5 7s-8 1-11-2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 12c-3-4-1-9 4-9s6 4 2 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M30 12c3-4 1-9-4-9s-6 4-2 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function DownloadIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M24 6v24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M16 24l8 8 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 36v4a4 4 0 004 4h24a4 4 0 004-4v-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function AndroidIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M14 22v10a2 2 0 002 2h16a2 2 0 002-2V22H14z" stroke="currentColor" strokeWidth="2.5" />
      <path d="M14 22a10 10 0 0120 0" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="19" cy="17" r="1.5" fill="currentColor" />
      <circle cx="29" cy="17" r="1.5" fill="currentColor" />
      <path d="M16 6l3 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 6l-3 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 24v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M38 24v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M20 34v6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M28 34v6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function SparkleIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M24 4l4 12 12 4-12 4-4 12-4-12-12-4 12-4 4-12z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="currentColor" opacity="0.1" />
      <path d="M38 8l1.5 4.5L44 14l-4.5 1.5L38 20l-1.5-4.5L32 14l4.5-1.5L38 8z" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function WaveformIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M8 24v0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M14 18v12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M20 12v24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M26 8v32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 14v20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M38 20v8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
