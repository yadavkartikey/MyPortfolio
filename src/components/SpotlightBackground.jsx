import React, { useEffect, useState } from 'react';

export const SpotlightBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle blueprint grid overlay */}
      <div className="absolute inset-0 bg-subtle-grid opacity-60" />

      {/* Ambient Top Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-600/[0.07] rounded-full blur-[140px]" />

      {/* Dynamic Cursor Spotlight (Linear Style) */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full bg-blue-500/[0.035] blur-[100px] transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`,
        }}
      />
    </div>
  );
};
