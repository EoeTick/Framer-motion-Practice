import { motion, useScroll, useTransform } from "framer-motion";
import css from "./Example5.module.css";

//deomo https://codepen.io/stevenlei/pen/MWeKVqP
const Example5 = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  return (
    <div className={css.body}>
      <div className={css.sticky}>
        <motion.h1 className={css.h1} style={{ backgroundPositionX: x }}>
          Less bezel, more screen.
        </motion.h1>
      </div>
    </div>
  );
};

export default Example5;
