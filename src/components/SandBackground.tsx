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
        highlightColor: 0xD4C4A8,
        midtoneColor: 0xB8A68A,
        lowlightColor: 0x8C7A62,
        baseColor: 0x2A2520,
        blurFactor: 0.5,
        speed: 0.4,
        zoom: 0.8,
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
