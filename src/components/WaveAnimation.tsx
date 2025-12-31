"use client";

import { useEffect, useRef } from "react";

export function WaveAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    window.addEventListener("resize", resize);
    resize();

    const draw = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
      ctx.lineWidth = 1;

      // Draw multiple sine waves with varying frequencies and phases
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        for (let x = 0; x < width; x++) {
          const y = height / 2 + 
            Math.sin(x * 0.01 + time + i) * 20 * Math.sin(time * 0.5) +
            Math.sin(x * 0.02 + time * 1.5 + i) * 10;
          
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      time += 0.015;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full h-48 mt-12 fade-in opacity-60" style={{ animationDelay: "0.5s" }}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}

