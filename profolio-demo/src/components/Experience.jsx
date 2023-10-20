import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useFrame, useThree } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useScroll } from "@react-three/drei";

import { framerMotionConfig } from "../config";
import { Avatar } from "./Avatar";
import { Room } from "./Room";
import { Projects } from "./Projects";

export const Experience = (props) => {
  const { menuOpened } = props;

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  const { viewport } = useThree();

  const data = useScroll();
  const [section, setSection] = useState(0);

  //change camera when menu open/close
  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, { ...framerMotionConfig });
    animate(cameraLookAtX, menuOpened ? 5 : 0, { ...framerMotionConfig });
  }, [menuOpened]);

  const characterContainerAboutRef = useRef();

  const [characterAnimation, setCharacterAnimation] = useState("typing");
  useEffect(() => {
    setCharacterAnimation("falling");
    setTimeout(() => {
      setCharacterAnimation(section === 0 ? "typing" : "idle");
    }, 600);
  }, [section]);

  useFrame((state) => {
    //set section
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection > 3) {
      curSection = 3;
    }

    if (curSection !== section) {
      setSection(curSection);
    }
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  return (
    <>
      <motion.group
        position={[2.0072935059634513, 0.16400000000000002, 2.681801948466054]}
        rotation={[-3.141592653589793, 1.2053981633974482, 3.141592653589793]}
        animate={"" + section}
        transition={{
          duration: 0.6,
        }}
        variants={{
          0: {
            scaleX: 1,
            scaleY: 1,
            scaleZ: 0.9,
          },
          1: {
            y: -viewport.height + 0.5,
            x: 0,
            z: 7,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
          },
          2: {
            x: -2,
            y: -viewport.height * 2 + 0.5,
            z: 0,
            rotateX: 0,
            rotateY: Math.PI / 2,
            rotateZ: 0,
          },
          3: {
            y: -viewport.height * 3 + 1,
            x: 0.3,
            z: 8.5,
            rotateX: 0,
            rotateY: -Math.PI / 4,
            rotateZ: 0,
          },
        }}
      >
        <Avatar animation={characterAnimation} />
      </motion.group>
      <ambientLight intensity={1} />
      <motion.group
        position={[1.5, 2, 3]}
        scale={[0.9, 0.9, 0.9]}
        rotation-y={-Math.PI / 4}
        animate={{ y: section === 0 ? 0 : -1 }}
      >
        <Room section={section} />
        <group
          ref={characterContainerAboutRef}
          name="CharacterSpot"
          position={[0.07, 0.16, -0.57]}
          rotation={[-Math.PI, 0.42, -Math.PI]}
        ></group>
      </motion.group>

      <motion.group
        position={[0, -1.5, -10]}
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <group scale={[2, 2, 2]} position-y={-1.5}></group>
      </motion.group>
      <Projects />
    </>
  );
};
