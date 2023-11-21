import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

export default function CapitalsHome() {
  const pages = [
    {
      backgroundColor: 'blue',
      image: <Image style={styles.image} source={require('./assets/Monterrey.png')} />,
      title: 'Monterrey',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
      backgroundColor: '#fff',
      image: <Image style={styles.image} source={require('./assets/Jalisco.png')} />,
      title: 'Jalisco',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
      backgroundColor: '#fff',
      image: <Image style={styles.image} source={require('./assets/Veracruz.png')} />,
      title: 'Veracruz',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
      backgroundColor: '#fff',
      image: <Image style={styles.image} source={require('./assets/Yucatan.png')} />,
      title: 'Yucatan',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
      backgroundColor: '#fff',
      image: <Image style={styles.image} source={require('./assets/Puebla.png')} />,
      title: 'Puebla',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
  ];

  return (
    <View style={styles.container}>
      <Onboarding
        showPagination={false}
        pages={pages.map((page, index) => ({
          ...page,
          title: (
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{page.title}</Text>
            </View>
          ),
        }))}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '60%',
    height: '60%',
    alignSelf: 'center', // Centrar la imagen
    backgroundColor: 'red',
    position:'relative',
    marginTop:0
  },
  titleContainer: {
    marginTop: 0,
    position:'absolute'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
