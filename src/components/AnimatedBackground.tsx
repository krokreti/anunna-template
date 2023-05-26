// import { Box } from '@mui/material';
import * as THREE from "three"
import { useEffect, useRef, useState } from "react"
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber"
import { useTexture, shaderMaterial } from "@react-three/drei"

type AnimatedBackgroundType = {
    mediaQuery: boolean,
    background: string,
    nextBackground: string,
}

const AnimatedBackground: React.FC<AnimatedBackgroundType> = (props) => {
    const ImageFadeMaterial = shaderMaterial(
        {
            effectFactor: 1.2,
            dispFactor: 0,
            tex: undefined,
            tex2: undefined,
            disp: undefined
        },
        ` varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
          }`,
        ` varying vec2 vUv;
          uniform sampler2D tex;
          uniform sampler2D tex2;
          uniform sampler2D disp;
          uniform float _rot;
          uniform float dispFactor;
          uniform float effectFactor;
          void main() {
            vec2 uv = vUv;
            vec4 disp = texture2D(disp, uv);
            vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
            vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
            vec4 _texture = texture2D(tex, distortedPosition);
            vec4 _texture2 = texture2D(tex2, distortedPosition2);
            vec4 finalTexture = mix(_texture, _texture2, dispFactor);
            gl_FragColor = finalTexture;
            #include <tonemapping_fragment>
            #include <encodings_fragment>
          }
          `
    )

    extend({ ImageFadeMaterial })

    function FadingImage({ currentBackground, nextBackground }: { currentBackground: string, nextBackground: string }) {
        const ref = useRef<any>()
        const viewport = useThree(state => state.viewport)
        const [texture1, texture2, dispTexture] = useTexture([currentBackground, nextBackground, "../../public/displacements/13.jpg"]);
        const [hovered, setHover] = useState(false)
        useFrame(() => {
            ref.current.dispFactor = THREE.MathUtils.lerp(ref.current.dispFactor, hovered ? 1 : 0, 0.075)
        })

        useEffect(() => {
            ref.current.uniforms.tex.value = texture1;
            ref.current.uniforms.tex2.value = texture2;
        }, [texture1, texture2]);

        return (
            <mesh
                scale={[viewport.width, viewport.height, 1]}
                onContextMenu={(e) => console.log('context menu')}
                onUpdate={(self: any) => {
                    console.log('props have been updated', self)
                    setHover(true);
                }}>
                <planeGeometry />
                <imageFadeMaterial ref={ref} tex={texture1} tex2={texture2} disp={dispTexture} toneMapped={false} />
            </mesh>
        )
    }


    return (
        <div style={{
            zIndex: -1,
            height: '100vh',
            width: '100%',
            position: 'absolute'
        }}>
            <Canvas flat camera={{ fov: 75, position: [0, 0, 2] }} >
                <FadingImage currentBackground={props.background} nextBackground={props.nextBackground} />
            </Canvas>
        </div>
    )
}

export default AnimatedBackground;