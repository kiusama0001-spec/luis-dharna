import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { assetUrl } from "@/lib/asset-url";

export function CatCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 30 });
  const springY = useSpring(y, { stiffness: 500, damping: 30 });
  const isHovering = useRef(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = () => {
      isHovering.current = true;
    };
    const out = () => {
      isHovering.current = false;
    };
    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", over);
      el.addEventListener("mouseleave", out);
    });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <>
      <style>{`
        * { cursor: none !important; }
        @keyframes catBob {
          0%, 100% { transform: translateY(0px) rotate(-5deg); }
          50% { transform: translateY(-4px) rotate(5deg); }
        }
        @keyframes catBlink {
          0%, 90%, 100% { opacity: 1; }
          95% { opacity: 0.7; }
        }
      `}</style>
      <motion.div
        style={{
          x: springX,
          y: springY,
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 99999,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            y: [0, -5, 0],
            rotate: [-3, 3, -3],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src={assetUrl("/images/cat-cursor.png")}
            alt=""
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              border: "2px solid rgba(230,150,20,0.6)",
              boxShadow: "0 0 12px rgba(230,150,20,0.35)",
              objectFit: "cover",
              display: "block",
            }}
          />
        </motion.div>
      </motion.div>
    </>
  );
}
