import React, { useRef, useEffect } from 'react';

interface DrawingAreaProps {
  width: number;
  height: number;
  onDraw: (ctx: CanvasRenderingContext2D) => void;
}

const DrawingArea: React.FC<DrawingAreaProps> = ({ width, height, onDraw }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (context) {
      onDraw(context);
    }
  }, [onDraw]);

  return <canvas ref={canvasRef} width={width} height={height}></canvas>;
};

export default DrawingArea;