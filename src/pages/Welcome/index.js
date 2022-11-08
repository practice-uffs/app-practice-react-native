import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import { theme } from '../../styles/theme';
import * as Animatable from 'react-native-animatable';
import { SvgXml } from 'react-native-svg';


export default function Welcome({navigation}) {
  const wave1 = `
    <svg width="428" height="176" viewBox="0 0 428 176" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M823.644 62.9276C781.632 74.0045 738.991 78.0698 695.989 74.5676C659.915 71.6285 622.458 61.6545 600.722 54.1977C530.632 30.1539 459.457 1.29841 416.616 0.362848C302.087 -2.13974 241.71 79.3603 119.386 140.042C57.1826 170.9 -8.51292 190.649 -78.0294 199.617C-34.4052 200.129 9.21786 200.64 52.842 201.152C124.129 210.047 194.347 208.81 263.594 197.144C343.619 183.662 406.544 157.009 486.541 143.24C554.814 131.49 610.575 128.58 671.352 139.391C715.691 147.277 760.643 161.877 803.358 181.742C816.299 187.76 828.801 194.141 841.389 201.152" fill="#073B4A"/>
    </svg>
    `;

    const wave2 = `
    <svg width="428" height="197" viewBox="0 0 428 197" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M-247.877 65.5576C-227.092 49.6836 -205.221 36.545 -182.38 26.2728C-148.526 11.0477 -110.565 1.25123 -65.8181 0.0828692C-22.0285 -1.06221 31.7155 9.95937 47.4136 14.6328C134.179 40.4575 232.927 69.0569 307.942 85.9989C368.825 99.7486 439.957 107.929 515.538 111.114C589.246 114.22 657.202 111.575 718.343 102.741C764.041 96.1402 809.299 86.3684 854.079 73.4408L852.247 157.222C797.418 173.675 741.894 185.337 685.73 192.142C593.918 203.266 453.335 191.915 314.33 171.81C238.15 160.79 176.641 152.336 100.699 152.857C57.4146 153.154 1.23392 158.005 -52.4967 164.497C-119.259 172.562 -184.92 183.096 -252.317 196.507C-278.063 148.543 -280.511 102.816 -265.639 80.1076C-261.249 73.4044 -255.273 68.5942 -247.877 65.5576Z" fill="#FFAF00"/>
    </svg>
    `;

    const wave3 = `
    <svg width="428" height="194" viewBox="0 0 428 194" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M-290.062 32.9128C-252.588 32.9754 -216.346 37.7376 -181.27 47.4628C-165.747 51.7666 -146.191 58.8277 -127.543 63.3819C-103.899 69.1567 -77.1904 73.1012 -49.019 75.323C13.1407 80.2263 83.1013 74.095 149.544 62.0127C256.735 47.5413 379.914 30.3666 465.927 15.4529C521.296 5.85138 590.184 -1.83391 662.417 0.902937C729.758 3.45354 796.418 13.6982 862.238 31.4578C861.497 94.5071 860.758 157.556 860.017 220.607C761.43 193.608 661.044 182.076 559.176 187.142C501.47 190.012 426.1 204.86 393.769 208.967C239.453 228.569 75.9699 229.809 12.518 208.669C-50.5621 187.653 -107.76 161.418 -177.513 150.066C-215.312 143.913 -253.127 141.134 -290.891 141.694L-290.062 32.9128Z" fill="#007C9D"/>
    </svg>
    `;

    const wave4 = `
    <svg width="428" height="165" viewBox="0 0 428 165" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M-264.529 53.3825C-207.137 65.6408 -151.101 76.1372 -93.5711 85.3924C-7.31958 99.2687 68.9708 100.773 155.095 115.947C179.444 120.237 222.803 125.543 262.776 123.222C307.606 120.619 355.008 106.909 380.448 99.9424C439.586 83.7453 499.581 64.2542 542.525 44.6525C560.906 36.2616 600.637 22.2718 633.554 12.6427C660.551 4.74495 689.465 -1.49553 725.478 0.828101C755.827 2.78507 777.829 10.482 808.552 20.616C832.019 28.3566 855.31 35.4875 879.542 42.3828L880 149.412C819.593 136.051 758.461 128.693 696.72 127.471C559.408 124.753 425.306 170.654 323.832 181.422C220.64 192.372 113.824 162.976 -5.87201 178.512C-25.5477 181.066 -43.758 184.07 -63.598 185.787C-107.893 189.618 -172.826 191.08 -215.684 182.797C-228.28 180.363 -242.987 178.895 -252.318 176.977C-254.831 176.461 -260.102 175.662 -264.529 175.522C-266.024 175.474 -267.482 175.474 -268.969 175.522C-267.489 134.808 -266.009 94.0947 -264.529 53.3825Z" fill="#FF8429"/>
    </svg>
    `;

  const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
  
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <View style={styles.alignImage}>
          <Animatable.Image  
            animation="bounce"
            source={require('../../assets/practice/logo-practice-915x286.png')} 
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Criamos <B>soluções tecnológicas</B> para <B>aprimorar</B> o ambiente acadêmico.</Text>
      </View>
    
      <Animatable.View delay={600} animation="fadeInUp" style={styles.containerButton}>
        <TouchableOpacity 
          onPress= { () => navigation.navigate('SignIn') }
          style={styles.button}>
          <Text style={styles.buttonText}> 
            Login
          </Text>
        </TouchableOpacity>
      </Animatable.View>

      <Animatable.View delay={1200} animation="fadeInUp"  style={styles.svgWave}>
          <SvgXml xml={wave3} width="100%" height="100%" />
      </Animatable.View>
    
      <Animatable.View delay={400} animation="fadeInUp"  style={styles.svgWave}>
          <SvgXml xml={wave2} width="100%" height="100%" />
      </Animatable.View>
    
      <Animatable.View delay={100} animation="fadeInUp"  style={styles.svgWave}>
          <SvgXml xml={wave4} width="100%" height="100%" />
      </Animatable.View>
      
      <Animatable.View delay={800} animation="fadeInUp"  style={styles.svgWave}>
            <SvgXml xml={wave1} width="100%" height="100%" />
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grayBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerImage:{
    width: '100%',
    height: 120,
    marginTop: -100,
  },
  alignImage: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    position: 'absolute',
  },
  image: {
    width: '80%',
    height: '80%',
  },
  button: { 
    backgroundColor: '#2F7B9A',
    borderRadius: 6,
    paddingHorizontal: 24,
    paddingVertical: 16,
    width: 'auto',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: "#fff",
    fontWeight: '600',
    fontSize: 18
  },
  title: {
    color: '#003753',
    textAlign: 'center',
    margin: 10,
    fontSize: 24, 
    paddingHorizontal: 50,
    paddingVertical: 75,
    fontWeight: '500'
  },
  svgWave: {
    position: 'absolute',
    width: '100%',
    height: 180,
    bottom: -15,
  },
});