import { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { COLORS } from "../constants/color.js";

const Title = ({ children }) => {
  const scale = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.Text style={[styles.title, { transform: [{ scale }] }]}>
      {children}
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    color: COLORS.text,
    letterSpacing: 2,
    textAlign: 'center',
    textShadowColor: COLORS.shadow,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
    fontStyle: 'italic',
    marginBottom: 50,

  },
});

export default Title;
