import { useEffect, useRef } from 'react';

interface SnowfallProps {
  numBalls?: number;  // opcional, padrão 140
}

const Snowfall: React.FC<SnowfallProps> = ({ numBalls = 140 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const balls = Array.from({ length: numBalls }, () => ({
      x: Math.random() * canvas.width,
      y: -Math.random() * 50,             // Começa acima do topo (entre 0 e -50)
      radius: Math.random() * 1 + 0.7,
      speed: Math.random() * 1.4 + 0.12,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.shadowColor = 'rgba(201, 196, 174, 0.2)';
      ctx.shadowBlur = 50;

      balls.forEach((ball) => {
        ball.y += ball.speed;
        ball.x -= ball.speed;

        // Quando sair da tela (embaixo ou à esquerda), reinicia no topo
        if (ball.y > canvas.height || ball.x < 0) {
          ball.y = -Math.random() * 50;  // Volta para cima, entre 0 e -50
          ball.x = Math.random() * (canvas.width + 50); // X entre 0 e um pouco além da largura
        }

        ctx.beginPath();
        ctx.fillStyle = 'rgba(201, 196, 174, 0.15)';
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.shadowBlur = 0;
      ctx.shadowColor = 'transparent';

      requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [numBalls]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'block',
        pointerEvents: 'none',
      }}
    />
  );
};

export default Snowfall;
