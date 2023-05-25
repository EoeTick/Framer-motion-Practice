import { useEffect, useRef } from "react";
import css from "./Example3.module.css";
import { useScroll } from "framer-motion";

const Example3 = () => {
  const se = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    const resizeIphoneHeight = () => {
      if (se.current) {
        se.current.style.height = `${window.innerHeight}px`;
      }
    };

    resizeIphoneHeight();

    // 监听窗口大小变化
    window.addEventListener('resize', resizeIphoneHeight);

    // 组件卸载时，移除事件监听器
    return () => {
      window.removeEventListener('resize', resizeIphoneHeight);
    };
  }, []);

  return (
    <div className={css.body}>
      <div id={css['sticky']}>
        <canvas id={css['iphone-se']} width="432" height="976" ref={se}></canvas>

        <div id={css['loading']}>
          <p>iPhone SE packs our most powerful chip into our most popular size at our most affordable price. It’s just what you’ve been waiting for.</p>
        </div>

        <p className={css.left}>
          Durable glass and<br />aluminum design
        </p>

        <p className={css.right}>
          Brilliant 4.7”<br />Retina HD<br />display
        </p>
      </div>
    </div>
  )
}

export default Example3