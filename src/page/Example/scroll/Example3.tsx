import { Link } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { LoremIpsum } from "./LoremIpsum";
import css from "./Example3.module.css";

function Example() {
  const { scrollYProgress } = useScroll();
  const fill = useTransform(scrollYProgress, [0, 1], ["#ffffff", "#ff0055"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // useScroll with spring smoothing
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className={css.progressBar} style={{ scaleX: scaleX }} />
      <motion.div
        style={{
          background: fill,
          height: "100px",
          width: "100px",
          position: "fixed",
          top: 20,
          left: 0,
        }}
      />
      <div style={{
        position:"absolute",
        top: 200,
        left: 200
      }}>
        <div
          className="father"
          style={{
            background: "#ff0055",
            position: "relative",
            height: "100px",
            width: "100px",
            marginTop: 300,
          }}
        >
          <motion.div
            className="children"
            style={{
              // opacity: opacity,
              background: "#00ffff",
              height: "100px",
              width: "100px",
              position: "absolute",
              // top: 200,
              top: -100,
              left: 0,
              translateY: translateY,
              zIndex: 2,
            }}
          />
        </div>
      </div>

      <h1 style={{ paddingTop: "150px" }}>
        <code>Page scroll progress</code> demo
      </h1>
      <LoremIpsum />
    </>
  );
}

export default Example;
