import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { Room } from "./Room";

export const Experience = () => {
  // const { animation } = useControls({
  //   animation: {
  //     value: "typing",
  //     options: ["typing", "falling", "idle"],
  //   },
  // });
  return (
    <>
      {/* <OrbitControls /> */}
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
      {/* <Sky />
      <Environment preset="sunset" />
      <Room /> */}
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
        </mesh>
      </group> 

      <ambientLight intensity={1} />*/}
    </>
  );
};
