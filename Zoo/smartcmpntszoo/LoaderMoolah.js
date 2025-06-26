import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { zoo } from '../smartconstszoo/smartstyles';
import { lion } from '../smartimprtszoo/smartimgszoo';

const { height } = Dimensions.get('window');

const LoaderMoolah = () => {
  const navigation = useNavigation();

  const lionOpacity = useRef(new Animated.Value(0)).current;
  const titleScale = useRef(new Animated.Value(0.5)).current;
  const buttonOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(lionOpacity, {
        toValue: 1,
        duration: 1700,
        useNativeDriver: true,
      }),
      Animated.spring(titleScale, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
      Animated.timing(buttonOpacity, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={{ flex: 1, color: 'rgba(76,59,41,255)' }}>
      <ImageBackground
        style={{ flex: 1, width: '100%', height: '100%' }}
        source={require('../smartasstszoo/smartimageszoo/zoobackgroundmoolah.png')}
      >
        <Animated.Image
          source={lion}
          style={[zoo.lion, { opacity: lionOpacity }]}
        />

        <Animated.Text
          style={[
            zoo.mainTitle,
            {
              transform: [{ scale: titleScale }],
              fontSize: 45,
              lineHeight: 50,
              textAlign: 'center',
              position: 'absolute',
              top: height * 0.17,
              alignSelf: 'center',
            },
          ]}
        >
          Smart Mooolah Zoo
        </Animated.Text>

        <ActivityIndicator
          size={'large'}
          color="#524639"
          style={{
            position: 'absolute',
            top: height * 0.4,
            alignSelf: 'center',
          }}
        />
      </ImageBackground>
    </View>
  );
};

export default LoaderMoolah;
