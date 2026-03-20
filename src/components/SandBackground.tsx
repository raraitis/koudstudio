'use client';

import { useEffect, useRef } from 'react';

export default function SandBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const vantaRef = useRef<import('vanta/dist/vanta.fog.min').VantaEffect | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let mounted = true;

    Promise.all([
      import('three'),
      import('vanta/dist/vanta.fog.min'),
    ]).then(([THREE, FOG]) => {
      if (!mounted || !containerRef.current) return;

      vantaRef.current = (FOG.default || FOG)({
        el: containerRef.current,
        THREE,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        highlightColor: 0xF5EDE0,
        midtoneColor: 0xE8D8C4,
        lowlightColor: 0xD4C0A8,
        baseColor: 0xC6A88A,
        blurFactor: 0.6,
        speed: 0.3,
        zoom: 1.0,
      });
    });

    return () => {
      mounted = false;
      if (vantaRef.current) {
        vantaRef.current.destroy();
        vantaRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}
