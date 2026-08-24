"use client";
import { useState, useEffect, useRef } from "react";

export default function RadialGradient() {
  const targetPos = useRef({ x: 50, y: 50 });
  const [smoothPos, setSmoothPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetPos.current = {
        x: Math.round((e.clientX / window.innerWidth) * 100),
        y: Math.round((e.clientY / window.innerHeight) * 100),
      };
    };

    document.addEventListener("mousemove", handleMouseMove);

    let frameId;
    const animate = () => {
      setSmoothPos((prev) => {
        const ease = 0.02;
        return {
          x: prev.x + (targetPos.current.x - prev.x) * ease,
          y: prev.y + (targetPos.current.y - prev.y) * ease,
        };
      });
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  const gradient = {
    backgroundImage: `radial-gradient(at ${smoothPos.x}% ${smoothPos.y}%, #2a2a2a, #141414)`,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  };

  // 👇 a camada de ruído
  const noise = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    opacity: 0.5,
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
    mixBlendMode: "overlay",
  };

  return (
    <>
      <div style={gradient}></div>
      <div style={noise}></div>
    </>
  );
}
