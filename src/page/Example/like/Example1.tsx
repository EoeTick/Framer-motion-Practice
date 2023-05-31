import { useEffect } from "react";
import {
  useMotionValue,
  motion,
  useTransform,
  HTMLMotionProps,
  useSpring,
  easeIn
} from "framer-motion";
import css from "./Example1.module.css";

interface MouseTrackerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

const useMousePosition = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return { x, y };
};

const springConfig = {
  damping: 20,
  stiffness: 300,
  restDelta: 0.001,
};

const MouseTracker: React.FC<MouseTrackerProps> = ({
  children,
  style,
  ...props
}) => {
  const { x, y } = useMousePosition();
  const cx = useTransform(x, (value) => value - 10);
  const cy = useTransform(y, (value) => value - 10);
  const pointX = useSpring(cx, springConfig);
  const pointY = useSpring(cy, springConfig);
  return (
    <motion.div
      className="cursor"
      style={{
        translateX: pointX,
        translateY: pointY,
        
        ...style,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const Example1 = () => {
  return (
    <div className={css.container}>
      {/* 其他内容 */}
      <MouseTracker
        style={{
          zIndex: 100,
          mixBlendMode: "difference",
          pointerEvents: "none",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <div className={css.point}></div>
      </MouseTracker>
    </div>
  );
};

export default Example1;
