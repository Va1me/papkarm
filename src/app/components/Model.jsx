import { useState } from 'react';
import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model() {
  const { nodes, materials } = useGLTF('/model.gltf')
  return (
    <group dispose={null} position={[0,0,0]} rotation={[-Math.PI/2, 0, -Math.PI/2]}>
      <mesh geometry={nodes.model_1.geometry} material={nodes.model_1.material} />
      <mesh geometry={nodes.model_3.geometry} material={nodes.model_3.material} />
      <mesh geometry={nodes.model_2.geometry} material={nodes.model_2.material} />
      <mesh geometry={nodes.model_5.geometry} material={nodes.model_5.material} />
      <mesh geometry={nodes.model_6.geometry} material={nodes.model_6.material} />
      <mesh geometry={nodes.model_0.geometry} material={nodes.model_0.material} />
      <mesh geometry={nodes.model_2_1.geometry} material={nodes.model_2_1.material} position={[90.96, -411.34, -0.04]} rotation={[0, 0, Math.PI]} />
    </group>
  )
}

useGLTF.preload('/model.gltf')
