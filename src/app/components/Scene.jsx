'use client';
import styles from "./scene.module.css";
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { OrbitControls } from '@react-three/drei';
import { useState } from 'react';
import { Anybody } from "next/font/google";

export default function SceneWrapper() {
  const [distance, setdistance] = useState(400);
  return (
    <div className={styles.canvas}>
      <input type="range" min="0" max="70" step="0.5" defaultValue="50" onChange={e => setdistance((100 - e.target.value) * 7)}></input>
      <Canvas
        camera={{ fov: 45, position:[0,250,0]}}
      >
        <OrbitControls target={[-200, 50, 50]} minDistance={distance} maxDistance={distance} enablePan={false} enableZoom={false} enableRotate={false} autoRotate = {true} autoRotateSpeed = {10}/>
        <Model />
      </Canvas>
    </div>
  );
}