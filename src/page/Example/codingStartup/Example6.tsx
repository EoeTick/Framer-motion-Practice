import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import css from "./Example6.module.css";

function calculateOpacity(start: number, end: number, percent: number) {
  if (percent - start < 0) return 0;
  if (percent - end > 0) return 1;

  return (percent - start) / (end - start);
}

//demo https://codepen.io/stevenlei/pen/WNRjprb
const Example6 = () => {
  const carouselRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: carouselRef,
    offset: ["start end", "end end"],
  });
  const part1 = useTransform(scrollYProgress, (value) =>
    calculateOpacity(0.05, 0.15, value)
  );

  const part2 = useTransform(scrollYProgress, (value) =>
    calculateOpacity(0.19, 0.23, value)
  );
  const part3 = useTransform(scrollYProgress, (value) =>
    calculateOpacity(0.35, 0.4, value)
  );
  const part4 = useTransform(scrollYProgress, (value) =>
    calculateOpacity(0.58, 0.63, value)
  );
  const ending = useTransform(scrollYProgress, (value) =>
    calculateOpacity(0.8, 0.85, value)
  );
  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log(latest);
  // });

  return (
    <div className={css.body}>
      <section className={css.homepodSection}>
        <div className={css.homepodContainer}>
          <div className={css.homepod}>
            <div className={css.device}></div>
            <motion.div
              className={css.part1}
              style={{ opacity: part1 }}
            ></motion.div>
            <motion.div
              className={css.part2}
              style={{ opacity: part2 }}
            ></motion.div>
            <motion.div
              className={css.part3}
              style={{ opacity: part3 }}
            ></motion.div>
            <motion.div
              className={css.part4}
              style={{ opacity: part4 }}
            ></motion.div>
            <motion.div
              className={css.ending}
              style={{ opacity: ending }}
            ></motion.div>
          </div>
        </div>
        <div className={css.descriptionContainer} ref={carouselRef}>
          <div className={css.description}>
            <h3 className={css.h3}>Deep bass with range you can feel.</h3>
            <p className={css.p}>
              The Apple-designed high-excursion woofer is positioned at the top
              of the speaker facing upward, creating a wide range of deep bass
              that surpasses any traditional speaker. A six-microphone array,
              along with an internal bass-EQ microphone, analyzes and
              compensates for the effect of the room on the bass response,
              providing rich, consistent sound. And a powerful motor drives the
              diaphragm a remarkable 20 mm, so the bass shines through even when
              the volume is low.
            </p>
          </div>

          <div className={css.description}>
            <h3 className={css.h3}>Far and away an incredible listener.</h3>
            <p className={css.p}>
              Six microphones positioned around HomePod allow it to pick up all
              the sound in a room. When you say “Hey Siri,” advanced signal
              processing, together with echo and noise cancellation, allows
              HomePod to hear you without the need to raise your voice — even if
              you’re across the room with loud music playing. After HomePod
              recognizes the words “Hey Siri,” what you say is encrypted and
              sent anonymously to Apple servers without being tied to your Apple
              ID.
            </p>
          </div>

          <div className={css.description}>
            <h3 className={css.h3}>
              High-fidelity audio that’s all around you.
            </h3>
            <p className={css.p}>
              A custom-designed array of seven beamforming tweeters, each with
              its own amplifier, creates tremendous directional control. Placed
              around the base and using a folded-horn design, they send the flow
              of music toward the center and then out the bottom in a 360-degree
              pattern, resulting in an all-encompassing sense of space. This
              virtually eliminates early table reflections and allows for
              consistent high-definition sound.
            </p>
          </div>
          <div className={css.description}>
            <h3 className={css.h3}>The biggest brain ever in a speaker.</h3>
            <p className={css.p}>
              An Apple-designed A8 chip orchestrates all the remarkable audio
              innovations inside HomePod. Like advanced signal processing so
              Siri can hear you over the music. Real-time studio-level
              processing that maximizes the bass while minimizing distortion.
              Buffering that’s even faster than real time. And upmixing of both
              direct and ambient audio. You get amazing sound, every single
              time.
            </p>
          </div>

          <div className={css.description}>
            <h3 className={css.h3}>Designed to be seen and heard.</h3>
            <p className={css.p}>
              HomePod is wrapped in a seamless mesh fabric designed for
              aesthetics and acoustic performance. Available in white and space
              gray, it’s gorgeous from every angle — yet virtually transparent
              to the sound waves passing through it.
            </p>
          </div>
        </div>
      </section>
      <section className={css.otherSection}></section>
    </div>
  );
};

export default Example6;
