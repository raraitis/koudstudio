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
        highlightColor: 0xE8DCC8,
        midtoneColor: 0xD4C4A8,
        lowlightColor: 0xC4B08E,
        baseColor: 0xB8A68A,
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
