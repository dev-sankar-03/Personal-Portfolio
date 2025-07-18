import React, { RefObject, useRef } from 'react';
import { useStarfield } from '@/app/scripts/star'; // adjust path

const StarCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useStarfield(canvasRef);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: -1,
      }}
    />
  );
};

export default StarCanvas;
