import { useEffect, useRef } from 'react';

class Star {
  x: number; y: number; radius: number; alpha: number; speed: number;
  constructor(w: number, h: number) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.radius = Math.random() * 1.5 + 0.5;
    this.alpha = Math.random() * 0.5 + 0.5;
    this.speed = Math.random() * 0.5 + 0.2;
  }
  update(h: number, w: number) {
    this.y += this.speed;
    if (this.y > h) { this.y = 0; this.x = Math.random() * w; }
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${this.alpha})`;
    ctx.fill();
  }
}

export function useStarfield(canvasRef: React.RefObject<HTMLCanvasElement>) {
  const starsRef = useRef<Star[]>([]);
 const animRef = useRef<number | null>(null);


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      starsRef.current = Array.from({ length: 300 }, () =>
        new Star(canvas.width, canvas.height)
      );
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (const star of starsRef.current) {
        star.update(canvas.height, canvas.width);
        star.draw(ctx);
      }

      animRef.current = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener('resize', resize);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [canvasRef]);
}
