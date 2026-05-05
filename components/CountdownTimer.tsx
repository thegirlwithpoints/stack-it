'use client';

import { useEffect, useState } from 'react';

interface Props {
  eventName: string;
  endDateISO: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calcTimeLeft(endDate: Date): TimeLeft | null {
  const diff = endDate.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export default function CountdownTimer({ eventName, endDateISO }: Props) {
  const endDate = new Date(endDateISO);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calcTimeLeft(endDate));
    const interval = setInterval(() => setTimeLeft(calcTimeLeft(endDate)), 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endDateISO]);

  if (!mounted) {
    return (
      <div className="mx-auto max-w-2xl px-4 mb-6">
        <div className="rounded-2xl bg-gradient-to-r from-gray-900 to-gray-700 text-white text-center py-5 px-6 animate-pulse h-24" />
      </div>
    );
  }

  if (!timeLeft) {
    return (
      <div className="mx-auto max-w-2xl px-4 mb-6">
        <div className="rounded-2xl bg-gradient-to-r from-gray-700 to-gray-600 text-white text-center py-5 px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-1">
            {eventName}
          </p>
          <p className="text-xl font-bold text-gray-100">
            This promo has ended — but the stacking never stops! ✨
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 mb-6">
      <div className="rounded-2xl bg-gradient-to-r from-gray-900 to-gray-700 text-white text-center py-5 px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-3">
          ⏰ {eventName} ends in
        </p>
        <div className="flex justify-center gap-4 sm:gap-8">
          {[
            { value: timeLeft.days, label: 'Days' },
            { value: timeLeft.hours, label: 'Hours' },
            { value: timeLeft.minutes, label: 'Mins' },
            { value: timeLeft.seconds, label: 'Secs' },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center min-w-[3rem]">
              <span className="text-3xl sm:text-4xl font-black tabular-nums leading-none">
                {pad(value)}
              </span>
              <span className="text-xs text-gray-400 mt-1 font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
