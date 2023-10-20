import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const Collaboration = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.1, 0.4], [1, 2.5]);
  const x = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.7, 1],
    ["0%", "-55%", "-60%", "-80%"]
  );
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  //for the avatar group animation
  const avatarGroupOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.23, 0.25],
    [0, 0, 1]
  );

  const avatarOneScale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.25],
    [0, 0, 1]
  );

  const avatarTwoScale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.45],
    [0, 0, 1]
  );

  const avatarThreeScale = useTransform(
    scrollYProgress,
    [0, 0.6, 0.65],
    [0, 0, 1]
  );

  return (
    <section className="relative z-10 mt-[-30vh] h-[300vh]">
      <div ref={targetRef} className="mb-[-120vh] h-[420vh] w-full">
        <div className="sticky top-[10vh]">
          <div className="flex justify-center">
            <motion.div style={{ scale, x, opacity }} className="origin-top">
              <img
                src="/main-screen.svg"
                className="h-auto max-h-none w-[70vw]"
              />
              <motion.div
                style={{ opacity: avatarGroupOpacity }}
                className="absolute right-[10%] top-[1.5%] flex gap-2"
              >
                <motion.img
                  style={{ scale: avatarOneScale }}
                  className="h-[1.5vw] w-[1.5vw] rounded-full border border-[#4ca] object-cover"
                  src="https://unsplash.com/photos/_H6wpor9mjs/download?force=true&w=128&h=128"
                />
                <motion.img
                  style={{ scale: avatarTwoScale }}
                  className="h-[1.5vw] w-[1.5vw] rounded-full border border-[#c82] object-cover"
                  src="https://unsplash.com/photos/sibVwORYqs0/download?force=true&w=128&h=128"
                />
                <motion.img
                  style={{ scale: avatarThreeScale }}
                  className="h-[1.5vw] w-[1.5vw] rounded-full border border-[#f0f] object-cover"
                  src="https://unsplash.com/photos/7YVZYZeITc8/download?force=true&w=128&h=128"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
