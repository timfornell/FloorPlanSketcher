import React from 'react';
import DrawingArea from './components/DrawingArea';

function App() {
  // Function to handle drawing interactions on the canvas
  const handleDraw = (ctx: CanvasRenderingContext2D) => {
    let isDrawing = false;

    // Event handler for mouse down
    const handleMouseDown = (event: MouseEvent) => {
      isDrawing = true;
      const { offsetX, offsetY } = event;
      ctx.beginPath();
      ctx.moveTo(offsetX, offsetY);
    };

    // Event handler for mouse move
    const handleMouseMove = (event: MouseEvent) => {
      if (!isDrawing) return;
      const { offsetX, offsetY } = event;
      ctx.lineTo(offsetX, offsetY);
      ctx.stroke();
    };

    // Event handler for mouse up
    const handleMouseUp = () => {
      isDrawing = false;
    };

    const canvas = ctx.canvas;

    // Attach event listeners for mouse interactions
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);

    // Clean up by removing event listeners when component unmounts
    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
    };
  };

  return (
    <div>
      <h1>Draw your floor plan</h1>
      <DrawingArea width={800} height={600} onDraw={handleDraw} />
    </div>
  );
}

export default App;