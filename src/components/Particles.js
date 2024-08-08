import React, { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const particleCount = 100;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = () => ({
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: Math.random() * 5 + 1,
      color: "#ffffff",
      speedX: (Math.random() - 0.5) * 4,
      speedY: (Math.random() - 0.5) * 4,
    });

    const drawParticle = ({ x, y, radius, color }) => {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.closePath();
    };

    const updateParticles = () => {
      particles.current = particles.current
        .map((particle) => ({
          ...particle,
          x: particle.x + particle.speedX,
          y: particle.y + particle.speedY,
        }))
        .filter(
          ({ x, y }) =>
            x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height
        );

      while (particles.current.length < particleCount) {
        particles.current.push(createParticle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateParticles();
      particles.current.forEach(drawParticle);
      requestAnimationFrame(animate);
    };

    const init = () => {
      resizeCanvas();
      while (particles.current.length < particleCount) {
        particles.current.push(createParticle());
      }
      animate();
    };

    window.addEventListener("resize", resizeCanvas);
    init();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animate);
    };
  }, []);

  const particleStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  };

  return <canvas ref={canvasRef} style={particleStyles} />;
};

export default ParticleBackground;
