import DrawingArea from './DrawingArea';

// Function to handle drawing interactions on the canvas
export function handleDraw(ctx: CanvasRenderingContext2D) {
   let isDrawing = false;

   // Event handler for mouse down
   function handleMouseDown(event: MouseEvent) {
      isDrawing = true;
      const { offsetX, offsetY } = event;
      ctx.beginPath();
      ctx.moveTo(offsetX, offsetY);
   }

   // Event handler for mouse move
   function handleMouseMove(event: MouseEvent) {
      if (!isDrawing) return;
      const { offsetX, offsetY } = event;
      ctx.lineTo(offsetX, offsetY);
      ctx.stroke();
   }

   // Event handler for mouse up
   function handleMouseUp() {
      isDrawing = false;
   }

   return { handleMouseDown, handleMouseMove, handleMouseUp };
}
