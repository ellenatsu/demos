import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

export const Experience = () => {
  const { animation } = useControls({
    animation: {
      value: "typing",
      options: ["typing", "falling", "idle"],
    },
  });
  return (
    <>
      <OrbitControls />
      <Sky />
      <Environment preset="sunset" />
      <group position-y={-1}>
        <Avatar animation={animation} />

        <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
          <boxGeometry />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh scale={5} rotation-x={-Math.PI * 0.5}>
          <planeGeometry />
          <meshStandardMaterial color="white" />
        </mesh>
      </group>

      <ambientLight intensity={1} />
    </>
  );
};
