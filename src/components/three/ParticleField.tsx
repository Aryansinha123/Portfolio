"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 2000 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const { positions, sizes } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
      sizes[i] = Math.random() * 2 + 0.5;
    }

    return { positions, sizes };
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.elapsedTime;

    // Slow drift
    mesh.current.rotation.x = Math.sin(time * 0.05) * 0.1;
    mesh.current.rotation.y = time * 0.02;

    // Mouse parallax
    const pointer = state.pointer;
    mouseRef.current.x += (pointer.x * 0.5 - mouseRef.current.x) * 0.02;
    mouseRef.current.y += (pointer.y * 0.5 - mouseRef.current.y) * 0.02;
    mesh.current.position.x = mouseRef.current.x;
    mesh.current.position.y = mouseRef.current.y;
  });

  const vertexShader = `
    attribute float size;
    varying float vAlpha;
    void main() {
      vAlpha = size / 2.5;
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = size * (200.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `;

  const fragmentShader = `
    varying float vAlpha;
    void main() {
      float dist = distance(gl_PointCoord, vec2(0.5));
      if (dist > 0.5) discard;
      float alpha = smoothstep(0.5, 0.0, dist) * vAlpha * 0.6;
      vec3 color = mix(vec3(0.0, 0.96, 1.0), vec3(0.66, 0.33, 0.97), vAlpha);
      gl_FragColor = vec4(color, alpha);
    }
  `;

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ParticleField() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
      >
        <Particles count={1500} />
      </Canvas>
    </div>
  );
}
