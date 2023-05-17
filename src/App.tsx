import React from "react";
import "./App.css";
import Canvas from "./Canvas";

const BASE_CANVAS_HEIGHT = 64 * 9;

function App() {
  const drawArt = (context: CanvasRenderingContext2D) => {
    /* context.fillStyle = "green";
    context.fillRect(0, 0, 100, 100);
    context.strokeRect(100, 100, 80, 50); */
    let yPos: number = 100;
    let bottomOfRect: number = yPos + 100;
    const animate = () => {
      window.requestAnimationFrame(animate);
      context.fillStyle = "brown";
      context.fillRect(0, 0, window.innerWidth, BASE_CANVAS_HEIGHT);

      context.fillStyle = "red";
      context.fillRect(100, yPos, 100, 100);

      if (bottomOfRect <= BASE_CANVAS_HEIGHT) {
        yPos++;
        bottomOfRect = yPos + 100;
      }
    };
    animate();
  };

  const drawExample = (context: CanvasRenderingContext2D) => {
    context.fillStyle = "rgba(255,0,0,0.637)";
    context.fillRect(20, 20, 100, 120);

    context.fillStyle = "#00ff003d";
    context.fillRect(90, 95, 100, 100);
  };

  return (
    <>
      <h1>Example</h1>
      <Canvas draw={drawExample} width={window.innerWidth} height={64 * 9} />
      <h1>Art</h1>
      <Canvas draw={drawArt} width={window.innerWidth} height={64 * 9} />;
    </>
  );
}

export default App;
