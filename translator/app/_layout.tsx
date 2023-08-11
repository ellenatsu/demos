import React, { useState } from "react";
import { View } from "react-native";
import FloatingIcon from "./icon";
import TranslationWindow from "./float";

const App = () => {
  const [isTranslationWindowVisible, setTranslationWindowVisible] =
    useState(false);

  const openTranslationWindow = () => {
    setTranslationWindowVisible(true);
  };

  const closeTranslationWindow = () => {
    setTranslationWindowVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <FloatingIcon onPress={openTranslationWindow} />
      <TranslationWindow
        isVisible={isTranslationWindowVisible}
        onClose={closeTranslationWindow}
      />
    </View>
  );
};

export default App;
