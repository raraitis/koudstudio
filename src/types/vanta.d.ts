declare module 'vanta/dist/vanta.fog.min' {
  interface VantaFogOptions {
    el: HTMLElement;
    THREE: typeof import('three');
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    highlightColor?: number;
    midtoneColor?: number;
    lowlightColor?: number;
    baseColor?: number;
    blurFactor?: number;
    speed?: number;
    zoom?: number;
    scale?: number;
    scaleMobile?: number;
  }

  export interface VantaEffect {
    destroy(): void;
  }

  export default function FOG(options: VantaFogOptions): VantaEffect;
}
