import React, { useRef, useEffect } from 'react';
import { handleDraw } from './components/Draw';

function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (context && canvas) {
      const { handleMouseDown, handleMouseMove, handleMouseUp } = handleDraw(context);
      canvas.addEventListener('mousedown', handleMouseDown);
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseup', handleMouseUp);

      // Clean up by removing event listeners when component unmounts
      return () => {
        canvas.removeEventListener('mousedown', handleMouseDown);
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, []);

  return (
    <div>
      <h1>Draw your floor plan</h1>
      <canvas ref={canvasRef} width={800} height={600}></canvas>
    </div>
  );
}

export default App;
