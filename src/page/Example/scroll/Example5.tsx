import { Link } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { LoremIpsum } from "./LoremIpsum";
import css from "./Example3.module.css";

function Example() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.01,
  });
  const translateY = useTransform(scaleY, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const clipPath = useTransform(
    scaleY,
    [0, 1],
    ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );

  // useScroll with spring smoothing
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className={css.progressBar} style={{ scaleX: scaleX }} />

      <div
        style={{
          position: "absolute",
          top: 200,
          left: 200,
        }}
      >
        <motion.div
          style={{
            background: "#0000ff",
            position: "fixed",
            height: "100px",
            width: "100px",
            top: 100,
            left: 0,
            clipPath: "circle(40%)"
          }}
        />
        <motion.div
          style={{
            background: "#ff0055",
            position: "fixed",
            height: "100px",
            width: "100px",
            top: 0,
            translateY,
            left: 0,
            // opacity,
            clipPath,
          }}
        />
      </div>

      <h1 style={{ paddingTop: "150px" }}>
        <code>Page scroll progress</code> demo
      </h1>
      <LoremIpsum />
    </>
  );
}

export default Example;
