import React, { useEffect, useRef } from "react";
import { useScroll } from "@react-three/drei";
import { gsap } from "gsap";
import { useFrame } from "@react-three/fiber";

//manage scrolling behavior and triggering animations based on the scroll position
export const ScrollManager = (props) => {
  const { section, onSectionChange } = props;

  const data = useScroll(); //a hook for tracking scrolling behavior. It likely contains information about the scroll position and related data.
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  data.fill.classList.add("top-0");
  data.fill.classList.add("absolute");

  useEffect(() => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [section]);

  //callback that gets executed on every frame.
  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current;
      return;
    }

    // index of the current section
    const curSection = Math.floor(data.scroll.current * data.pages);

    //if the user is scrolling down and if the current section is the first section
    if (data.scroll.current > lastScroll.current && curSection === 0) {
      onSectionChange(1); //from the top of the page down to the next section.
    }

    //if the user is scrolling up  if the user is scrolling up from the bottom of the page to the second last section.
    if (
      data.scroll.current < lastScroll.current &&
      data.scroll.current < 1 / (data.pages - 1)
    ) {
      onSectionChange(0);
    }
    lastScroll.current = data.scroll.current;
  });

  return null;
};
