import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import css from "./Example2.module.css";

interface Props {
  emoji: string;
  hueA: number;
  hueB: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

function Card({ emoji, hueA, hueB }: Props) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className={css.cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className={css.splash} style={{ background }} />
      <motion.div className={css.card} variants={cardVariants}>
        {emoji}
      </motion.div>
    </motion.div>
  );
}

const food: [string, number, number][] = [
  ["🍅", 340, 10],
  ["🍊", 20, 40],
  ["🍋", 60, 90],
  ["🍐", 80, 120],
  ["🍏", 100, 140],
  ["🫐", 205, 245],
  ["🍆", 260, 290],
  ["🍇", 290, 320],
];


//demo url: https://codesandbox.io/s/framer-motion-5-3-scroll-triggered-animations-2hbg5?from-embed=&file=/src/App.tsx:349-352
function Example() {
  return (
    <div className={css.root}>
      <h1 style={{paddingTop: "150px"}}>
        <code>Scroll-triggered animations</code> demo
      </h1>
      {food.map(([emoji, hueA, hueB]) => (
        <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
      ))}
    </div>
  );
}

export default Example;
