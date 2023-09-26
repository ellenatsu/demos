import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls, Scroll } from "@react-three/drei";
import { Interface } from "./components/Interface";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
        <ScrollControls pages={4} damping={0.1}>
          <Experience />
          <Scroll html>
            {/* DOM contents in here will scroll along */}
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
