import React from "react";
import { projects } from "../assets/data";
import { motion } from "framer-motion-3d";
import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

const Project = (props) => {
  const { project } = props;
  return (
    <group {...props}>
      <mesh position-z={-0.001} onClick={() => window.open(project.url)}>
        <planeGeometry args={[2.2, 2]} />
        <meshBasicMaterial color="black" transparent opacity={0.5} />
      </mesh>
      <Image
        scale={[2, 1.2, 1]}
        url={project.image}
        toneMapped={false}
        position-y={0.3}
      />
      <Text
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.2}
        position={[-1, -0.4, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={2}
        anchorX="left"
        anchorY="top"
        fontSize={0.1}
        position={[-1, -0.6, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};
export const Projects = () => {
  const { viewport } = useThree();

  return (
    <group position-y={-viewport.height * 2 + 1}>
      {projects.map((project, index) => (
        <motion.group key={index} position={[index * 2.5, 0, -3]}>
          <Project project={project} />
        </motion.group>
      ))}
    </group>
  );
};
