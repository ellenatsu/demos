import translate from "google-translate-api-x";

import React, { useState } from "react";
import { View, Text, TextInput, Modal, Button } from "react-native";

const TranslationWindow = ({ isVisible, onClose }) => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("wait for translating...");

  const handlerTranslate = async () => {
    const res = await translate(text, {
      from: "en",
      to: "zh-CN",
      autoCorrect: true,
    });
    setResult(res.text);
  };
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Type here to translate!"
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
        <Button onPress={handlerTranslate} title="Translate" />
        <Text>{result}</Text>
        <Button onPress={onClose} title="close" />
      </View>
    </Modal>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "80%",
    height: 40,
  },
};

export default TranslationWindow;
