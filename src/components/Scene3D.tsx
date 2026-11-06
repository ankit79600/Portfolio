"use client";
import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles, Environment } from "@react-three/drei";
import * as THREE from "three";

function IcosaShape() {
  const groupRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.PointLight>(null);
  const light2Ref = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Orbiting key light
    if (lightRef.current) {
      lightRef.current.position.set(
        Math.sin(t * 0.4) * 4,
        Math.cos(t * 0.3) * 2,
        Math.cos(t * 0.4) * 4
      );
    }
    // Counter-orbit fill light
    if (light2Ref.current) {
      light2Ref.current.position.set(
        Math.sin(t * 0.4 + Math.PI) * 3,
        -1,
        Math.cos(t * 0.4 + Math.PI) * 3
      );
    }

    // Mouse-reactive tilt with lerp
    if (groupRef.current) {
      groupRef.current.rotation.x +=
        (state.mouse.y * -0.25 - groupRef.current.rotation.x) * 0.04;
      groupRef.current.rotation.y +=
        (state.mouse.x * 0.4 - groupRef.current.rotation.y) * 0.04;
    }
  });

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.06} />
      <pointLight
        ref={lightRef}
        color="#00E676"
        intensity={8}
        distance={18}
        decay={2}
      />
      <pointLight
        ref={light2Ref}
        color="#00E676"
        intensity={2}
        distance={12}
        decay={2}
      />
      <directionalLight
        color="#ffffff"
        intensity={0.4}
        position={[5, 8, 5]}
      />

      {/* Floating particles */}
      <Sparkles
        count={40}
        scale={6}
        size={0.6}
        speed={0.2}
        color="#00E676"
        opacity={0.25}
      />

      {/* Main group — mouse reactive */}
      <group ref={groupRef}>
        <Float speed={2} rotationIntensity={0.15} floatIntensity={0.5}>

          {/* Core shape */}
          <mesh castShadow>
            <icosahedronGeometry args={[1.8, 4]} />
            <MeshDistortMaterial
              color="#080808"
              metalness={0.95}
              roughness={0.08}
              distort={0.12}
              speed={1.8}
              envMapIntensity={1.2}
              emissive="#00E676"
              emissiveIntensity={0.04}
            />
          </mesh>

          {/* Wireframe cage — coarser resolution */}
          <mesh>
            <icosahedronGeometry args={[1.86, 1]} />
            <meshBasicMaterial
              color="#00E676"
              wireframe
              transparent
              opacity={0.09}
            />
          </mesh>

          {/* Inner glow core */}
          <mesh>
            <sphereGeometry args={[1.1, 16, 16]} />
            <meshBasicMaterial
              color="#00E676"
              transparent
              opacity={0.015}
            />
          </mesh>
        </Float>
      </group>
    </>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 48 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.2,
      }}
      dpr={[1, 1.5]}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <Environment preset="night" background={false} />
        <IcosaShape />
      </Suspense>
    </Canvas>
  );
}
