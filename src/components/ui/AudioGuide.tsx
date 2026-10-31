import { useEffect, useRef, useState } from "react";

const EVENT = "audio-guide:play";

type Props = { src: string; label: string; text: string };

/** Nút thuyết minh: chỉ một bản phát tại một thời điểm; có lời thuyết minh dạng chữ. */
export function AudioGuide({ src, label, text }: Props) {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const stopOthers = (e: Event) => {
      if ((e as CustomEvent<string>).detail !== src) audio.current?.pause();
    };
    window.addEventListener(EVENT, stopOthers);
    return () => window.removeEventListener(EVENT, stopOthers);
  }, [src]);

  const toggle = () => {
    const el = audio.current;
    if (!el) return;
    if (el.paused) {
      window.dispatchEvent(new CustomEvent(EVENT, { detail: src }));
      void el.play();
    } else {
      el.pause();
    }
  };

  return (
    <div className="border-t border-line pt-4">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={toggle}
          aria-pressed={playing}
          aria-label={`${playing ? "Tạm dừng" : "Nghe"} thuyết minh về ${label}`}
          className="group flex size-12 shrink-0 items-center justify-center rounded-full bg-ink text-paper transition-colors duration-200 hover:bg-ink-soft"
        >
          {playing ? (
            <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true">
              <rect x="3" y="2" width="3.5" height="12" fill="currentColor" />
              <rect x="9.5" y="2" width="3.5" height="12" fill="currentColor" />
            </svg>
          ) : (
            <svg viewBox="0 0 16 16" className="ml-0.5 size-4" aria-hidden="true">
              <path d="M3 1.5v13l11-6.5z" fill="currentColor" />
            </svg>
          )}
        </button>
        <div className="min-w-0 flex-1">
          <p className="text-sm text-mute">Nghe thuyết minh</p>
          <div className="mt-2 h-px w-full bg-line">
            <div className="h-px bg-seal transition-[width] duration-200" style={{ width: `${progress * 100}%` }} />
          </div>
        </div>
        <button
          type="button"
          onClick={() => setShowText((v) => !v)}
          aria-expanded={showText}
          className="shrink-0 text-sm text-ink-soft underline decoration-line underline-offset-4 hover:decoration-seal"
        >
          {showText ? "Ẩn lời" : "Đọc lời"}
        </button>
      </div>
      {showText && <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">{text}</p>}
      <audio
        ref={audio}
        src={src}
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => {
          setPlaying(false);
          setProgress(0);
        }}
        onTimeUpdate={(e) => {
          const el = e.currentTarget;
          if (el.duration) setProgress(el.currentTime / el.duration);
        }}
      />
    </div>
  );
}
