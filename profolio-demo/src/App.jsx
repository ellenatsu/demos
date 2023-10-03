import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls, Scroll } from "@react-three/drei";
import { useState } from "react";
import { MotionConfig } from "framer-motion";

import { Interface } from "./components/Interface";
import { ScrollManager } from "./components/ScrollManager";
import { Menu } from "./components/Menu";
import { framerMotionConfig } from "./config";

function App() {
  //page is 4 but section is from 0 - 1 changing.
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <>
      <MotionConfig transition={{ ...framerMotionConfig }}>
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Experience section={section} menuOpened={menuOpened} />
            </Scroll>
            <Scroll html>
              <Interface />
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
      </MotionConfig>
    </>
  );
}

export default App;
