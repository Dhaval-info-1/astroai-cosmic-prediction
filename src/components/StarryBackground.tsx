import React, { useEffect, useRef } from 'react';

const StarryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Star properties
    interface Star {
      x: number;
      y: number;
      radius: number;
      opacity: number;
      speed: number;
      pulse: number;
      pulseSpeed: number;
    }

    // Create stars
    let stars: Star[] = [];
    const createStars = () => {
      stars = [];
      const starCount = Math.floor(canvas.width * canvas.height / 2000);
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.05,
          pulse: Math.random() * Math.PI,
          pulseSpeed: Math.random() * 0.02 + 0.01
        });
      }
    };

    // Create nebula points
    interface NebulaPoint {
      x: number;
      y: number;
      size: number;
      color: string;
      opacity: number;
      speed: number;
    }

    let nebulae: NebulaPoint[] = [];
    const createNebulae = () => {
      nebulae = [];
      const nebulaCount = 5;
      const colors = [
        'rgba(147, 51, 234, 0.05)',  // Purple
        'rgba(79, 70, 229, 0.05)',   // Indigo
        'rgba(236, 72, 153, 0.05)',  // Pink
        'rgba(59, 130, 246, 0.05)',  // Blue
        'rgba(139, 92, 246, 0.05)'   // Violet
      ];
      
      for (let i = 0; i < nebulaCount; i++) {
        nebulae.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 300 + 200,
          color: colors[i % colors.length],
          opacity: Math.random() * 0.3 + 0.1,
          speed: Math.random() * 0.2 - 0.1
        });
      }
    };

    // Draw stars
    const drawStars = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create radial gradient for background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, 
        canvas.height / 2, 
        0, 
        canvas.width / 2, 
        canvas.height / 2, 
        canvas.width / 1.5
      );
      gradient.addColorStop(0, '#1B1F3B');
      gradient.addColorStop(1, '#0F1225');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw nebulae
      nebulae.forEach(nebula => {
        const grd = ctx.createRadialGradient(
          nebula.x, nebula.y, 0,
          nebula.x, nebula.y, nebula.size
        );
        grd.addColorStop(0, nebula.color);
        grd.addColorStop(1, 'transparent');
        
        ctx.fillStyle = grd;
        ctx.fillRect(
          nebula.x - nebula.size,
          nebula.y - nebula.size,
          nebula.size * 2,
          nebula.size * 2
        );

        // Move nebula
        nebula.x += nebula.speed;
        nebula.y += nebula.speed;

        // Reset position if off screen
        if (nebula.x > canvas.width + nebula.size) nebula.x = -nebula.size;
        if (nebula.x < -nebula.size) nebula.x = canvas.width + nebula.size;
        if (nebula.y > canvas.height + nebula.size) nebula.y = -nebula.size;
        if (nebula.y < -nebula.size) nebula.y = canvas.height + nebula.size;
      });
      
      // Draw stars
      stars.forEach(star => {
        // Update pulse
        star.pulse += star.pulseSpeed;
        const pulseFactor = Math.sin(star.pulse) * 0.2 + 0.8;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius * pulseFactor, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * pulseFactor})`;
        ctx.fill();

        // Add glow effect
        ctx.beginPath();
        const grd = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.radius * 4
        );
        grd.addColorStop(0, `rgba(255, 255, 255, ${star.opacity * 0.5})`);
        grd.addColorStop(1, 'transparent');
        ctx.fillStyle = grd;
        ctx.arc(star.x, star.y, star.radius * 4, 0, Math.PI * 2);
        ctx.fill();
        
        // Move star
        star.y += star.speed;
        
        // Reset position if star goes off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      // Add subtle cosmic dust
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 0.5;
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.1})`;
        ctx.fill();
      }
    };

    // Animation loop
    let animationFrameId: number;
    const animate = (time: number) => {
      drawStars(time);
      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize
    window.addEventListener('resize', () => {
      resizeCanvas();
      createStars();
      createNebulae();
    });
    
    resizeCanvas();
    createStars();
    createNebulae();
    animate(0);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default StarryBackground;