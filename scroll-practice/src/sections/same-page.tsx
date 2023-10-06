import { BranchIcon } from "@/icons/branch";
import { stylesWithCssVar } from "@/utils/motion";
import { scrypt } from "crypto";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const animationOrder = {
  initial: 0,
  fadeInEnd: 0.15,
  showParagraphOne: 0.25,
  hideParagraphOne: 0.3,
  showParagraphTwoStart: 0.35,
  showParagraphTwoEnd: 0.4,
  hideParagraphTwo: 0.5,
  showLoadingScreenStart: 0.53,
  showLoadingScreenEnd: 0.58,
  createBranchStart: 0.65,
  createBranchEnd: 0.7,
  createBranchFadeInStart: 0.78,
  createBranchFadeInEnd: 0.85,
  endTextFadeInStart: 0.95,
  endTextFadeInEnd: 1,
};

export const SamePage = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  //for the first main-screen img
  const opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.fadeInEnd,
      animationOrder.createBranchEnd,
      animationOrder.endTextFadeInStart,
    ],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.fadeInEnd,
      animationOrder.showLoadingScreenEnd,
      animationOrder.createBranchStart,
    ],
    [3, 1, 1, 0.5]
  );

  const x = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.showParagraphOne,
      animationOrder.hideParagraphOne,
      animationOrder.showParagraphTwoStart,
      animationOrder.showParagraphTwoEnd,
      animationOrder.hideParagraphTwo,
      animationOrder.showLoadingScreenStart,
      animationOrder.showLoadingScreenEnd,
      animationOrder.createBranchEnd,
    ],
    ["50%", "50%", "55%", "-50%", "-50%", "-55%", "0%", "0%", "-27%"]
  );

  //for second page
  const loadingScreenOpacity = useTransform(
    scrollYProgress,
    [
      animationOrder.showLoadingScreenStart,
      animationOrder.showLoadingScreenEnd,
    ],
    [0, 1]
  );
  const loadingScreenX = useTransform(
    scrollYProgress,
    [animationOrder.createBranchStart, animationOrder.createBranchEnd],
    ["0%", "27%"]
  );
  const loadingScreenscale = useTransform(
    scrollYProgress,
    [animationOrder.createBranchStart, animationOrder.createBranchEnd],
    [1, 0.5]
  );

  //for new branch loading img + two branch texts
  const newBranchOpacity = useTransform(
    scrollYProgress,
    [
      animationOrder.createBranchFadeInStart,
      animationOrder.createBranchFadeInEnd,
    ],
    [0, 1]
  );

  //for the text
  const paragraph1Opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.fadeInEnd + 0.02,
      animationOrder.showParagraphOne,
      animationOrder.hideParagraphOne,
    ],
    [0, 1, 0]
  );
  const paragraph1TranslateY = useTransform(
    scrollYProgress,
    [
      animationOrder.fadeInEnd + 0.02,
      animationOrder.showParagraphOne,
      animationOrder.hideParagraphOne,
    ],
    ["4rem", "0rem", "-4rem"]
  );

  const paragraph2Opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphTwoStart,
      animationOrder.showParagraphTwoEnd,
      animationOrder.hideParagraphTwo,
    ],
    [0, 1, 0]
  );
  const paragraph2TranslateY = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphTwoStart,
      animationOrder.showParagraphTwoEnd,
      animationOrder.hideParagraphTwo,
    ],
    ["4rem", "0rem", "-4rem"]
  );

  //for the p text position
  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );

  //for the final end text
  const endTextOpacity = useTransform(
    scrollYProgress,
    [animationOrder.endTextFadeInStart, animationOrder.endTextFadeInEnd],
    [0, 1]
  );

  const endTexty = useTransform(
    scrollYProgress,
    [animationOrder.endTextFadeInStart, animationOrder.endTextFadeInEnd],
    ["4rem", "0rem"]
  );

  return (
    <section ref={targetRef}>
      <div className="relative h-[800vh]">
        <div className="sticky top-1/2 flex origin-center -translate-y-1/2 justify-center">
          <motion.div
            style={stylesWithCssVar({
              opacity,
              "--x": x,
              "--scale": scale,
            })}
            className="translate-x-centered-offset absolute left-1/2 top-1/2 flex w-[50vw] -translate-y-1/2 scale-[var(--scale)] flex-col items-center justify-center "
          >
            <img
              src="/main-screen.svg"
              className="h-[75vh] max-h-[48vw] w-auto"
            />
            <motion.span
              style={{ opacity: newBranchOpacity }}
              className="mt-3 block text-2xl text-white"
            >
              <BranchIcon className="mr-3 inline-block h-12 w-12" /> Feature
              branch
            </motion.span>
          </motion.div>
          <motion.div
            style={stylesWithCssVar({
              opacity: loadingScreenOpacity,
              "--scale": loadingScreenscale,
              "--x": loadingScreenX,
            })}
            className="translate-x-centered-offset absolute left-1/2 top-1/2 flex w-[50vw] -translate-y-1/2 scale-[var(--scale)] flex-col items-center justify-center"
          >
            <img
              src="/loading-screen.svg"
              className="h-[75vh] max-h-[48vw] w-auto"
            />
            <motion.div
              style={{ opacity: newBranchOpacity }}
              className="absolute inset-0"
            >
              <img
                src="/main-screen.svg"
                className="h-[75vh] max-h-[48vw] w-auto"
              />
            </motion.div>
            <motion.span
              style={{ opacity: newBranchOpacity }}
              className="mt-3 block text-2xl text-white"
            >
              <BranchIcon className="mr-3 inline-block h-12 w-12" /> Frontend
              FYI's branch
            </motion.span>
          </motion.div>

          <motion.p
            style={stylesWithCssVar({
              opacity: endTextOpacity,
              "--y": endTexty,
            })}
            className="translate-y-centered-offset absolute left-[calc(50%-60rem)] top-1/2 w-[50rem] pl-16 text-2xl leading-tight text-white"
          >
            <span className="f text-primary">Built for flow</span>
            <br />
            Spin up a new branch for any sized project in seconds.
          </motion.p>
        </div>
        <motion.p
          style={stylesWithCssVar({
            opacity: paragraph1Opacity,
            "--y": paragraph1TranslateY,
            position,
          })}
          className="translate-y-centered-offset left-[20px] top-1/2 w-[300px] pl-16 text-2xl leading-tight text-white"
        >
          Not only share code,
          <br />
          <span className="text-primary">share the context.</span>
        </motion.p>
        <motion.p
          style={stylesWithCssVar({
            opacity: paragraph2Opacity,
            "--y": paragraph2TranslateY,
            position,
          })}
          className="translate-y-centered-offset right-[20px] top-1/2 w-[300px] pr-16 text-xl leading-tight text-white"
        >
          Sometimes it's not about code.
          <br />
          <span className="text-primary">
            Get everybody on the same page. Literally.
          </span>
        </motion.p>
      </div>
    </section>
  );
};
