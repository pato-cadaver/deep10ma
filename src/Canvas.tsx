import React, { useEffect, useRef } from "react";

type CanvasProps = React.DetailedHTMLProps<
  React.CanvasHTMLAttributes<HTMLCanvasElement>,
  HTMLCanvasElement
> & { draw: (context: CanvasRenderingContext2D) => void };

const Canvas: React.FC<CanvasProps> = ({ draw, ...props }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  console.log(canvasRef);

  useEffect(() => {
    const canvas = canvasRef.current; //доступ к значению внутри ссылки \\ получаем текущее свойство
    if (!canvas) {
      //проверка наличия canvas
      return; //если отсутствует то возвращает
    } // нулевой случай canvas
    const context = canvas.getContext("2d"); //получаем контекст \\ 2д
    if (!context) {
      return;
    }

    //отрисовка
    /* context.fillStyle = "green";
    context.fillRect(0, 0, 100, 100);
    context.strokeRect(100, 100, 80, 50); */
    draw(context);
    /*
    let yPos: number = 100;
    let bottomOfRect: number = yPos + 100;
    let scren: number = 64 * 9;
    const animate = () => {
      window.requestAnimationFrame(animate);
      context.fillStyle = "brown";
      context.fillRect(0, 0, 64 * 16, 64 * 9);

      context.fillStyle = "red";
      context.fillRect(100, yPos, 100, 100);

      if (bottomOfRect <= scren) {
        yPos++;
        bottomOfRect = yPos + 100;
      }
    };
    animate();*/
  }, [draw]); //пустой массив, чтобы посмотреть что эффект выполяется всего раз после первого рендеринга

  return <canvas ref={canvasRef} width={props.width} height={props.height} />;
};

export default Canvas;
