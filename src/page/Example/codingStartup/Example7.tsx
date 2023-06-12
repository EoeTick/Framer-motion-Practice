import {
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import css from "./Example7.module.css";
import { useEffect, useRef } from "react";

//demo https://codepen.io/stevenlei/pen/LYxwjQe
const Example7 = () => {
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const scrollYProgress = useMotionValue(0);

  const scale = useTransform(scrollYProgress, (value) => {
    console.log(value);
    return `scale(clamp(0.15, ${1 - value}, 1))`;
  });
  let isPinned = false;

  useEffect(() => {
    const h2 = h2Ref.current;

    const observer = new IntersectionObserver(([entry]) => {
      isPinned = (entry.intersectionRatio < 1)
    }, { threshold: [1] });

    if (h2) {
      observer.observe(h2);
    }

    return () => {
      if (h2) {
        observer.unobserve(h2);
      }
    };
  }, []);

  useEffect(() => {
    const h2 = h2Ref.current;
    const handleScroll = () => {
      if (isPinned && h2) {
        let html = document.documentElement;
        let height = parseInt(getComputedStyle(h2).getPropertyValue('height')) + parseInt(getComputedStyle(h2).getPropertyValue('margin-bottom'));
        let marginTop = parseInt(getComputedStyle(h2).getPropertyValue('margin-top'));
        let scrolled = (html.scrollTop - marginTop) / height;
        scrollYProgress.set(scrolled);
      }
    }
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <div className="body">
      <div className={css.imac}>
        <motion.h2 className={css.h2} ref={h2Ref} style={{ transform: scale }}>Only 11.5mm. Now that's thin.</motion.h2>
        <div className={css.image}>
          <img src="https://www.apple.com/105/media/us/imac-24/2021/5e004d75-3ad6-4bb9-ab59-41f891fc52f0/anim/design-hero/large/flow/flow_startframe.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Example7