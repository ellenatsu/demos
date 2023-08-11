import React from "react";
import { TouchableOpacity, Text } from "react-native";

const FloatingIcon = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.floatingIcon}>
      <Text style={styles.iconText}>Translate</Text>
    </TouchableOpacity>
  );
};

const styles = {
  floatingIcon: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#007bff",
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    color: "#fff",
    fontSize: 12,
  },
};

export default FloatingIcon;
