'use client';
import styles from "./scene.module.css";
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { OrbitControls } from '@react-three/drei';

export default function SceneWrapper() {
  return (
    <div className={styles.canvas}>
      <Canvas
        camera={{ fov: 45, position:[0,250,0]}}
      >
        <OrbitControls target={[-200, 50, 50]} minDistance={400} enablePan={false} enableZoom={false} enableRotate={false} autoRotate = {true} autoRotateSpeed = {10}/>
        <Model />
      </Canvas>
    </div>
  );
}