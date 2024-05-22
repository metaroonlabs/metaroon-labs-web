// src/ThreeScene.tsx
import { useEffect, useRef } from 'react';
import {
    BufferAttribute,
    Clock,
    PerspectiveCamera,
    PlaneGeometry,
    Points,
    Scene,
    ShaderMaterial,
    WebGLRenderer
} from 'three';
import * as THREE from 'three';

const ThreeScene = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        };

        const scene = new Scene();

        const camera = new PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
        camera.position.set(0, 1.1, 10);
        scene.add(camera);
        scene.background = new THREE.Color(0x121212);

        const planeGeometry = new PlaneGeometry(20, 20, 150, 150);
        const planeMaterial = new ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uElevation: { value: 0.482 }
            },
            vertexShader: `
        uniform float uTime;
        uniform float uElevation;
        attribute float aSize;
        varying float vPositionY;
        varying float vPositionZ;
        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          modelPosition.y = sin(modelPosition.x - uTime) * sin(modelPosition.z * 0.6 + uTime) * uElevation;
          vec4 viewPosition = viewMatrix * modelPosition;
          gl_Position = projectionMatrix * viewPosition;
          gl_PointSize = 2.0 * aSize;
          gl_PointSize *= ( 1.0 / - viewPosition.z );
          vPositionY = modelPosition.y;
          vPositionZ = modelPosition.z;
        }
      `,
            fragmentShader: `
        varying float vPositionY;
        varying float vPositionZ;
        void main() {
          float strength = (vPositionY + 0.25) * 0.3;
          gl_FragColor = vec4(1.0, 1.0, 1.0, strength);
        }
      `,
            transparent: true,
        });

        const planeSizesArray = new Float32Array(planeGeometry.attributes.position.count);
        for (let i = 0; i < planeSizesArray.length; i++) {
            planeSizesArray[i] = Math.random() * 4.0;
        }
        planeGeometry.setAttribute('aSize', new BufferAttribute(planeSizesArray, 1));

        const plane = new Points(planeGeometry, planeMaterial);
        plane.rotation.x = -Math.PI * 0.4;
        scene.add(plane);

        const renderer = new WebGLRenderer({
            canvas: canvasRef.current
        });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(new THREE.Color(0x121212))

        const clock = new Clock();

        const animate = () => {
            const elapsedTime = clock.getElapsedTime();
            planeMaterial.uniforms.uTime.value = elapsedTime / 3;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            sizes.width = window.innerWidth;
            sizes.height = window.innerHeight;
            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();
            renderer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef}></canvas>;
};

export default ThreeScene;
