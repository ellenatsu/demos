import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useFrame, useThree } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { animate, useMotionValue } from "framer-motion";
import { useEffect } from "react";

import { framerMotionConfig } from "../config";
import { Avatar } from "./Avatar";
import { Room } from "./Room";

export const Experience = (props) => {
  const { section, menuOpened } = props;

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  const { viewport } = useThree();

  //change camera when menu open/close
  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, { ...framerMotionConfig });
    animate(cameraLookAtX, menuOpened ? 5 : 0);
  }, [menuOpened]);

  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  return (
    <>
      <ambientLight intensity={1} />
      <motion.group
        position={[1.5, 2, 3]}
        scale={[0.9, 0.9, 0.9]}
        rotation-y={-Math.PI / 4}
        animate={{ y: section === 0 ? 0 : -1 }}
      >
        <Room />
      </motion.group>

      <motion.group
        position={[0, -1.5, -10]}
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <group scale={[2, 2, 2]} position-y={-1.5}>
          <Avatar animation={section === 0 ? "falling" : "idle"} />
        </group>
      </motion.group>
    </>
  );
};
