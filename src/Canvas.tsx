import { useEffect, useRef } from "react";

const Canvas = () => {
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
    context.fillStyle = "green";
    context.fillRect(0, 0, 100, 100);
    context.strokeRect(100, 100, 80, 50);
  }, []); //пустой массив, чтобы посмотреть что эффект выполяется всего раз после первого рендеринга

  return <canvas ref={canvasRef} />;
};

export default Canvas;
