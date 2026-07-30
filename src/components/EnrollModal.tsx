import { X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const ENROLL_URL = 'https://app.tryplayground.com/directory/school/CAMP_GAN_IZZY_AT_THE_SEA';

// Height of the Playground site's own header we want to hide
const REMOTE_HEADER_PX = 67;

interface EnrollModalProps {
  onClose: () => void;
}

export default function EnrollModal({ onClose }: EnrollModalProps) {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Simulate a loading bar that fills to ~85% until the iframe fires onLoad
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 85) {
          clearInterval(timerRef.current!);
          return 85;
        }
        return p + Math.random() * 8;
      });
    }, 120);
    return () => clearInterval(timerRef.current!);
  }, []);

  const handleLoad = () => {
    clearInterval(timerRef.current!);
    setProgress(100);
    // Small delay so the bar visually completes before hiding
    setTimeout(() => setLoaded(true), 350);
  };

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col" role="dialog" aria-modal="true" aria-label="Enrollment">
      {/* ── Our header bar (10vh) ── */}
      <div className="h-[10vh] bg-white flex items-center justify-between px-5 sm:px-8 shadow-sm border-b border-gray-100 flex-shrink-0 relative z-10">
        {/* Loading bar sits at the very bottom of this header */}
        <div
          className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-primary via-secondary-yellow to-secondary-blue transition-all duration-300 ease-out"
          style={{ width: loaded ? '0%' : `${progress}%`, opacity: loaded ? 0 : 1 }}
        />

        <div className="flex items-center gap-3">
          <img src="/Green_Playful_Daycare_Newsletter_(1).png" alt="Camp Gan Israel" className="h-10 w-auto" />
          <div>
            <p className="font-headline text-base sm:text-lg text-gray-900 leading-tight">Enroll Now</p>
            <p className="font-body text-xs text-gray-400">Camp Gan Izzy at the Sea — Summer 2026</p>
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Close enrollment"
          className="flex items-center gap-2 px-4 py-2 rounded-full font-body font-semibold text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 active:bg-gray-200 transition-all duration-150"
        >
          <X size={18} strokeWidth={2.5} />
          <span className="hidden sm:inline">Close</span>
        </button>
      </div>

      {/* ── Iframe area (remaining 90vh) ── */}
      {/* Overflow hidden clips the remote header; the iframe is shifted up by
          REMOTE_HEADER_PX so that header sits behind our bar, then the
          container's height is extended by the same amount to compensate. */}
      <div
        className="flex-1 bg-gray-50 overflow-hidden relative"
      >
        {/* Skeleton overlay while loading */}
        {!loaded && (
          <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center gap-4">
            <img src="/Green_Playful_Daycare_Newsletter_(1).png" alt="" className="h-14 w-auto opacity-30 animate-pulse" />
            <p className="font-body text-sm text-gray-400">Loading enrollment portal...</p>
          </div>
        )}

        <iframe
          ref={iframeRef}
          src={ENROLL_URL}
          title="Camp Gan Izzy Enrollment"
          onLoad={handleLoad}
          className="border-0 w-full"
          style={{
            height: `calc(100% + ${REMOTE_HEADER_PX}px)`,
            marginTop: `-${REMOTE_HEADER_PX}px`,
          }}
          allow="payment"
        />
      </div>
    </div>
  );
}
