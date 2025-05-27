import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants/themes';
import {scaleHeight, scaleWidth} from '../../utils/responsive';
import {Styles} from '../../constants/Styles';

const Onboarding = () => {
  return (
    <View style={styles.container}>
      {/* logo */}
      <View style={styles.logoContainer}>
        <Image source={require('./../../assets/icons/logo.png')} />
      </View>
      {/* logo text */}
      <View style={styles.textContainer}>
        <Text style={styles.firstText}>Open a book, open a mind.</Text>
        <View style={styles.textSecondContainer}>
          <Text style={styles.secondText}>Dsicover your next read with </Text>
          <Text style={styles.thirdText}>Readify</Text>
        </View>
      </View>
      {/* buttons */}
      <View style={styles.buttonContainer}>
        {/* login button */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
        {/* sign up button */}
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );  
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    ...Styles.full,
    backgroundColor: colors.white,
  },
  logoContainer: {
    top: scaleHeight(230),
    ...Styles.center,
  },
  textContainer: {
    top: scaleHeight(240),
    alignItems: 'center',
  },
  textSecondContainer: {
    ...Styles.row,
  },
  firstText: {
    ...Styles.Gato_Req_18,
    color: colors.dark_blue,
  },
  secondText: {
    ...Styles.Gato_Req_18,
    color: colors.dark_blue,
  },
  thirdText: {
    ...Styles.Gala_Med_18,
    color: colors.red,
  },
  buttonContainer: {
    top: scaleHeight(400),
    alignItems: 'center',
    gap: scaleHeight(20),
  },
  loginButton: {
    borderWidth: 1,
    borderColor: colors.dark_blue,
    backgroundColor: colors.dark_blue,
    borderRadius: 50,
    width: scaleWidth(356),
    height: scaleHeight(43),
    ...Styles.center,
  },
  loginButtonText: {
    ...Styles.Gato_Med_20,
    color: colors.white,
  },
  signUpButton: {
    borderWidth: 1,
    borderColor: colors.dark_blue,
    borderRadius: 50,
    width: scaleWidth(356),
    height: scaleHeight(43),
    ...Styles.center,
  },
  signUpButtonText: {
    ...Styles.Gato_Med_20,
    color: colors.dark_blue,
  },
});
