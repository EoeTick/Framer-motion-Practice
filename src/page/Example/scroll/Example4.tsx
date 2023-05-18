import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import css from "./Example4.module.css";

//demo url: https://codesandbox.io/s/framer-motion-usescroll-element-scrolling-eg6fm3
function Example() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  return (
    <div className={css.root}>
      <h1 style={{ paddingTop: "150px" }}>
        <code>Page scroll progress</code> demo
      </h1>
      <svg className={css.progress} width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className={css.bg} />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength={"1"}
          className={css.indicator}
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <ul ref={ref}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default Example;
