import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import css from "./Example8.module.css";

//demo https://codepen.io/stevenlei/pen/JjKQNdZ
//两种实现思路:
// 1. 固定背景位置,动态调整背景渐变的边界
// 2. 固定背景渐变的边界,动态调整背景的位置
const Example8 = () => {
  const headRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headRef,
    offset: ["-50vh 10vh", "end 60vh"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
   console.log(latest)
  })

  const scale = useMotionTemplate`scale(clamp(1, calc((${scrollYProgress} - 0.99) * 200), 1.3))`;

  const bg = useMotionTemplate`linear-gradient(#fff calc(100% - calc(${scrollYProgress} * 100%)), #4cd265 calc(100% - calc(${scrollYProgress} * 100%)))`;
  console.log(bg.get())
  return (
    <div className={css.body}>
      <motion.h1
        className={css.h1}
        ref={headRef}
        style={{ transform: scale, backgroundImage: bg }}
      >
        Up to 20 hours of battery life — the longest in any Mac ever.
      </motion.h1>
    </div>
  );
};

export default Example8;
