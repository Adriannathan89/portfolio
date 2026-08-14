import { useEffect, useRef } from "react";

type InkPoint = {
  x: number;
  y: number;
  radius: number;
  bornAt: number;
  duration: number;
  kind: "drop" | "splash";
  fallDistance: number;
};

export function InkCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const root = document.documentElement;
    const points: InkPoint[] = [];
    let animationFrame = 0;
    let pointerX = 0;
    let pointerY = 0;
    let pointerVisible = false;
    let pointerAllowsInk = false;
    let lastMovementAt = 0;
    let lastDropAt = 0;

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * pixelRatio);
      canvas.height = Math.round(window.innerHeight * pixelRatio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const addPoint = (
      x: number,
      y: number,
      radius = 1.8,
      duration = 760,
      kind: InkPoint["kind"] = "splash",
      fallDistance = 0,
    ) => {
      points.push({ x, y, radius, bornAt: performance.now(), duration, kind, fallDistance });
      if (points.length > 680) points.splice(0, points.length - 680);
    };

    const isInkFreeTarget = (target: EventTarget | null) =>
      target instanceof Element && Boolean(target.closest(".site-header, .hero-actions .button, .project-card, .experience-card, .award-card"));

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const now = performance.now();
      pointerX = event.clientX;
      pointerY = event.clientY;
      pointerVisible = true;
      pointerAllowsInk = !isInkFreeTarget(event.target);
      lastMovementAt = now;
      lastDropAt = now;
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      addPoint(event.clientX, event.clientY, 3.8, 980);
      for (let index = 0; index < 11; index += 1) {
        const angle = (Math.PI * 2 * index) / 11 + Math.random() * .35;
        const distance = 4 + Math.random() * 12;
        addPoint(
          event.clientX + Math.cos(angle) * distance,
          event.clientY + Math.sin(angle) * distance,
          1.2 + Math.random() * 2.4,
          720 + Math.random() * 320,
        );
      }
    };

    const hideBrush = () => {
      pointerVisible = false;
      pointerAllowsInk = false;
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      context.fillStyle = "#111512";

      if (
        pointerVisible &&
        pointerAllowsInk &&
        time - lastMovementAt >= 600 &&
        time - lastDropAt >= 1500
      ) {
        addPoint(pointerX, pointerY, 2.7 + Math.random() * .8, 1050, "drop", 28 + Math.random() * 12);
        lastDropAt = time;
      }

      for (let index = points.length - 1; index >= 0; index -= 1) {
        const point = points[index];
        const progress = (time - point.bornAt) / point.duration;
        if (progress >= 1) {
          points.splice(index, 1);
          continue;
        }
        const easedProgress = 1 - Math.pow(1 - progress, 2);
        const y = point.y + point.fallDistance * easedProgress;
        context.globalAlpha = Math.pow(1 - progress, point.kind === "drop" ? 1.1 : 1.55) * .52;
        context.beginPath();
        if (point.kind === "drop") {
          context.ellipse(
            point.x,
            y,
            point.radius * (1 + progress * .2),
            point.radius * (1.45 - progress * .25),
            0,
            0,
            Math.PI * 2,
          );
        } else {
          context.arc(point.x, y, point.radius * (1 + progress * .35), 0, Math.PI * 2);
        }
        context.fill();
      }

      context.globalAlpha = 1;
      animationFrame = window.requestAnimationFrame(draw);
    };

    root.classList.add("ink-cursor-active");
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    document.documentElement.addEventListener("mouseleave", hideBrush);
    animationFrame = window.requestAnimationFrame(draw);

    return () => {
      root.classList.remove("ink-cursor-active");
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      document.documentElement.removeEventListener("mouseleave", hideBrush);
    };
  }, []);

  return <canvas className="ink-cursor-canvas" ref={canvasRef} aria-hidden="true" />;
}
