import  { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Object3D } from "three";

export default function Robo3D() {
  const { scene } = useGLTF("/scene.gltf");
  const ref = useRef<Object3D | null>(null);

  useFrame(() => {
    if (!ref.current) return;

    ref.current.rotation.y += 0.01;

    if (ref.current.rotation.y > Math.PI * 2) {
      ref.current.rotation.y -= Math.PI * 2;
    }
  });

  return <primitive ref={ref} object={scene} scale={0.5} />;
}
