"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  value: string; // e.g. "312+", "245,000+", "100%"
}

function parse(value: string): { end: number; suffix: string } {
  const clean = value.replace(/,/g, "");
  const match = clean.match(/^(\d+)([^0-9]*)$/);
  if (!match) return { end: 0, suffix: value };
  return { end: parseInt(match[1], 10), suffix: match[2] };
}

function format(n: number): string {
  return n.toLocaleString("en-US");
}

export default function StatCounter({ value }: Props) {
  const { end, suffix } = parse(value);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        const duration = 1600; // ms
        const startTime = performance.now();

        function step(now: number) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // ease-out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * end));
          if (progress < 1) requestAnimationFrame(step);
        }

        requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {format(count)}
      {suffix}
    </span>
  );
}
