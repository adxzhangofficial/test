import { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame: number;
    let t = 0;

    const GRID = 44; // dot spacing

    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      if (canvas.width !== W || canvas.height !== H) {
        canvas.width = W;
        canvas.height = H;
      }

      ctx.clearRect(0, 0, W, H);
      t += 0.008;

      // --- Soft red radial glow drifting slowly ---
      const gx = W * (0.72 + 0.06 * Math.sin(t * 0.7));
      const gy = H * (0.38 + 0.06 * Math.cos(t * 0.5));
      const glow = ctx.createRadialGradient(gx, gy, 0, gx, gy, W * 0.55);
      glow.addColorStop(0,   'rgba(220,38,38,0.28)');
      glow.addColorStop(0.5, 'rgba(220,38,38,0.10)');
      glow.addColorStop(1,   'rgba(0,0,0,0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, W, H);

      // --- Static dot grid ---
      const cols = Math.ceil(W / GRID) + 1;
      const rows = Math.ceil(H / GRID) + 1;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * GRID;
          const y = r * GRID;
          const dx = x - gx;
          const dy = y - gy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const proximity = Math.max(0, 1 - dist / (W * 0.5));
          const alpha = 0.18 + proximity * 0.4;
          ctx.beginPath();
          ctx.arc(x, y, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${alpha})`;
          ctx.fill();
        }
      }

      // --- Thin diagonal accent lines ---
      const lineCount = 5;
      for (let i = 0; i < lineCount; i++) {
        const progress = ((t * 0.12 + i / lineCount) % 1);
        const startX = -H + progress * (W + H);
        const alpha = 0.10 * Math.sin(progress * Math.PI);
        ctx.beginPath();
        ctx.moveTo(startX, 0);
        ctx.lineTo(startX + H, H);
        ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      frame = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}
