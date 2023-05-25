import React, { useEffect, useRef } from 'react'
import css from "./Example4.module.css";
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';


interface ItemProps {
  row: string;
}

const Item = ({ row }: ItemProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });
  const progressOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const progressTransfrom = useMotionTemplate`scale(calc(1.8 - (0.8 * ${scrollYProgress}))) translateY(calc(-60px * (1 - ${scrollYProgress})))`

  // transform: scale(calc(1.8 - (0.8 * var(--progress)))) translateY(calc(-60px * (1 - var(--progress))));
  return (
    <motion.li style={{ opacity: progressOpacity, transform: progressTransfrom }} ref={ref}>
      <img src={`https://assets.codepen.io/2002878/iphone12-5g_show_${row}.jpg`} />
    </motion.li>
  )
}

const Example4 = () => {
  const rows = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
  ];

  return (
    <div className={css.body}>
      <h2 className={css.h2}>
        SUperfast wireless
        <p>Hello 5G.</p>
      </h2>

      <div id={css["iphone"]}>
        <div id={css["hardware"]}>
          <div id={css["ui"]}>
            <img src="https://assets.codepen.io/2002878/iphone12-5g_top_ui.jpg"
              className={css.topUi} alt="" />
            <ul>
              {rows.map((row) => (
                <Item row={row} key={row} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Example4