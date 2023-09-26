/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Room(props) {
  const { nodes, materials } = useGLTF("models/scene.gltf");
  const texture = useTexture("textures/baked.jpg");
  texture.flipY = false;
  texture.encoding = THREE.sRGBEncoding;

  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
  });

  const textureGlassMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 0.5,
  });

  return (
    <group {...props} dispose={null}>
      <group position={[-0.074, 0, -1.521]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_Plane002_BlackWood001.geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_Plane002_BlackWood001_1.geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_Plane002_BlackWood001_2.geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_Plane002_BlackWood001_3.geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_Plane002_BlackWood001_4.geometry}
          material={textureMaterial}
        />
      </group>
      <group position={[-0.868, 1.694, -2.038]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_ShelfSM_Shelf1_1.geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_ShelfSM_Shelf1_1_1.geometry}
          material={textureMaterial}
        />
      </group>
      <group position={[-1.302, 2.071, -1.986]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Node-Mesh001"].geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Node-Mesh001_1"].geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Node-Mesh001_2"].geometry}
          material={textureMaterial}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WawaRug.geometry}
        material={textureMaterial}
        position={[-0.281, 0.009, 0.765]}
      />
      <group
        position={[-0.61, 2.044, -1.958]}
        rotation={[-Math.PI, 0.728, -Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh434900071.geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh434900071_1.geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh434900071_2.geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh434900071_3.geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh434900071_4.geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh434900071_5.geometry}
          material={textureMaterial}
        />
      </group>
      <group position={[-0.044, 0.981, -1.346]} rotation={[0, -0.165, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh425587018.geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh425587018_1.geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh425587018_2.geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh425587018_3.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        position={[0.454, 0.939, -1.723]}
        rotation={[Math.PI, -1.099, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.iMac_1.geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.iMac_1_1.geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.iMac_1_2.geometry}
          material={textureMaterial}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Comp_Mouse.geometry}
        material={textureMaterial}
      />
      <group position={[-0.78, 1.071, -1.61]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh24448074.geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh24448074_1.geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh24448074_2.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        position={[-2.019, -0.042, -1.526]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Houseplant_7_1.geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Houseplant_7_2.geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Houseplant_7_3.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        position={[2.13, -0.081, -1.055]}
        rotation={[-Math.PI, 0.672, -Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["palm_tree_01-Mesh"].geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["palm_tree_01-Mesh_1"].geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["palm_tree_01-Mesh_2"].geometry}
          material={textureMaterial}
        />
      </group>
      <group position={[-0.278, 0, -0.708]} rotation={[0, -0.376, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Node-Mesh"].geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Node-Mesh_1"].geometry}
          material={textureMaterial}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={textureMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_1.geometry}
        material={textureMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_2.geometry}
        material={textureMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_3.geometry}
        material={textureMaterial}
      />
    </group>
  );
}

useGLTF.preload("models/scene.gltf");
