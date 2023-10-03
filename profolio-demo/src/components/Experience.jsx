import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from "@react-three/drei";

import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import {motion} from "framer-motion-3d";
import { Avatar } from "./Avatar";
import { Room } from "./Room";

export const Experience = (props) => {

  const {section} = props;
  // const { animation } = useControls({
  //   animation: {
  //     value: "typing",
  //     options: ["typing", "falling", "idle"],
  //   },
  // });
  return (
    <>
      
      <motion.group 
			  position={[1.5, 2, 3]} 
			  scale={[0.9, 0.9, 0.9]} 
			  rotation-y={-Math.PI / 4} 
			  animate={{y: section === 0 ? 0 : -1}}>
          <Room />
      </motion.group>
      {/* <group position-y={-1}>
        <ContactShadows
          opacity={1}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
        <Avatar animation={animation} />
        {animation === "typing" && (
          <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
            <boxGeometry />
            <meshStandardMaterial color="white" />
          </mesh>
        )}
        <mesh scale={5} rotation-x={-Math.PI * 0.5}>
          <planeGeometry />
          <meshStandardMaterial color="white" />
        </mesh>*/}

      <ambientLight intensity={1} />
    </>
  );
};
