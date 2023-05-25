import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import css from "./Example2.module.css";
import { useEffect, useState } from "react";

const Example2 = () => {
  const [noSticky, setNosticky] = useState(false);
  let noStickyOffset = document.documentElement.clientHeight * 2;
  const { scrollY } = useScroll();
  const scrolled = useTransform(scrollY, value => value / noStickyOffset);
  const clipPathWhite = useTransform(scrolled, value => `inset(${((0.5 - value) / 0.5) * 100}% 0px 0px 0px)`);
  const clipPathRed = useTransform(scrolled, value => `inset(${((1 - value) / 0.5) * 100}% 0px 0px 0px)`);

  useMotionValueEvent(scrolled, "change", (latest) => {
    if (latest >= 1) {
      setNosticky(true);
    } else {
      setNosticky(false);
    }
  })

  return (
    <div className={css.body}>
      <div className={`${css.stickyContainer} ${noSticky ? css.noSticky : ""}`}>
        <div className={`${css.iphone} ${css.black}`}>
          <h3 className={css.h3}>
            Comes in Black.<br />
            &nbsp;
          </h3>
          <img className={css.img} src="https://www.apple.com/v/iphone-se/b/images/overview/finishes_black__b06syayq94wi_medium_2x.png" />
        </div>
        <motion.div className={`${css.iphone} ${css.white}`} style={{ clipPath: clipPathWhite }}>
          <h3 className={css.h3}>
            Comes in Black.<br />
            <span className={css.span}>White</span>
          </h3>

          <img className={css.img} src="https://www.apple.com/v/iphone-se/b/images/overview/finishes_white__drv9fwq9vzwy_medium_2x.png" />
        </motion.div>
        <motion.div className={`${css.iphone} ${css.red}`} style={{ clipPath: clipPathRed }}>
          <h3 className={css.h3}>
            Comes in Black.<br />
            White. <span className={css.span}>And Pow.</span>
          </h3>
          <img className={css.img} src="https://www.apple.com/v/iphone-se/b/images/overview/finishes_red__eqfv1ongy282_medium_2x.png" />
        </motion.div>
      </div>
    </div>
  )
}

export default Example2