import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, Dimensions,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { zoo } from '../smartconstszoo/smartstyles';
import { lion } from '../smartimprtszoo/smartimgszoo';

const { height } = Dimensions.get('window');

const Smartsplashzoo = () => {
    const navigation = useNavigation();

    const lionOpacity = useRef(new Animated.Value(0)).current;
    const titleScale = useRef(new Animated.Value(0.5)).current;
    const buttonOpacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.sequence([
            Animated.timing(lionOpacity, {
                toValue: 1,
                duration: 700,
                useNativeDriver: true,
            }),
            Animated.spring(titleScale, {
                toValue: 1,
                friction: 4,
                useNativeDriver: true,
            }),
            Animated.timing(buttonOpacity, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    return (
        <View style={zoo.container}>

            <Image
                source={lion}
                style={zoo.lion}
            />

            <Text
                style={
                    zoo.mainTitle}
            >
                Smart Mooolah Zoo
            </Text>

            <Animated.View
                style={{
                    width: '100%',
                    opacity: buttonOpacity,
                    position: 'absolute',
                    bottom: 50,
                    alignSelf: 'center'
                }}
            >
                <TouchableOpacity
                    style={zoo.button}
                    onPress={() => navigasdcdsction.navvdvdscigate('Smartmiddlezoo')}
                >
                    <Text style={zoo.buttonText}>Continue</Text>
                </TouchableOpacity>
            </Animated.View>
            
        </View>
    )
};

export default Smartsplashzoo;