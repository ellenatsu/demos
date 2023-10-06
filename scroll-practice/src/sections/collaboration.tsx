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
              <div className="absolute right-[10%] top-[1.5%] flex gap-2">
                <img
                  className="h-[1.5vw] w-[1.5vw] rounded-full border border-[#4ca] object-cover"
                  src="https://unsplash.com/photos/_H6wpor9mjs/download?force=true&w=128&h=128"
                />
                <img
                  className="h-[1.5vw] w-[1.5vw] rounded-full border border-[#c82] object-cover"
                  src="https://unsplash.com/photos/sibVwORYqs0/download?force=true&w=128&h=128"
                />
                <img
                  className="h-[1.5vw] w-[1.5vw] rounded-full border border-[#f0f] object-cover"
                  src="https://unsplash.com/photos/7YVZYZeITc8/download?force=true&w=128&h=128"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
