"use client";

import { useEffect, useRef } from "react";

export function SpirographAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let t = 0;

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
      const cx = width / 2;
      const cy = height / 2;
      
      // Fade out previous frames to transparent using destination-out
      // This ensures the background color is determined entirely by CSS
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0, 0, 0, 0.03)";
      ctx.fillRect(0, 0, width, height);
      
      // Reset composite operation to draw new lines
      ctx.globalCompositeOperation = "source-over";
      
      ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
      ctx.lineWidth = 0.8;
      
      const R = 60; // Radius of fixed circle
      const r = 32; // Radius of moving circle
      const d = 50; // Distance of point from moving circle center
      
      ctx.beginPath();
      for (let i = 0; i < 200; i++) {
        const angle = t + i * 0.05;
        const x = cx + (R - r) * Math.cos(angle) + d * Math.cos(((R - r) / r) * angle);
        const y = cy + (R - r) * Math.sin(angle) - d * Math.sin(((R - r) / r) * angle);
        
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Second layer
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.beginPath();
      for (let i = 0; i < 200; i++) {
        const angle = -t * 0.5 + i * 0.05;
        const R2 = 80;
        const r2 = 25;
        const d2 = 40;
        const x = cx + (R2 - r2) * Math.cos(angle) + d2 * Math.cos(((R2 - r2) / r2) * angle);
        const y = cy + (R2 - r2) * Math.sin(angle) - d2 * Math.sin(((R2 - r2) / r2) * angle);
        
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      t += 0.025; // Increased speed (was 0.01)
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full h-64 mt-8 fade-in opacity-80" style={{ animationDelay: "0.5s" }}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
