import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Styles} from '../../constants/Styles';
import {colors} from '../../constants/themes';
import {scaleHeight, scaleWidth} from '../../utils/responsive';
import SignIn from './components/SignIn';

const Login = () => {
    // toggle between login and sign up
  const [isLogin, setIsLogin] = useState(true);

  return (
    <View style={styles.container}>
      {/* header text */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Welcome back!</Text>
      </View>
      {/* login and sign up buttons */}
      <View style={styles.toggleContainer}>
        {/* login button */}
        <TouchableOpacity
          onPress={() => setIsLogin(true)}
          style={[
            styles.toggleButton,
            isLogin ? styles.activeToggle : styles.inactiveToggle,
          ]}>
          {/* login text */}
          <Text
            style={[
              styles.loginText,
              isLogin ? styles.activeText : styles.inactiveText,
            ]}>
            Log In
          </Text>
        </TouchableOpacity>
        {/* sign up button */}
        <TouchableOpacity
          onPress={() => setIsLogin(false)}
          style={[
            styles.toggleButton,
            isLogin ? styles.inactiveToggle : styles.activeToggle,
          ]}>
          {/* sign up text */}
          <Text
            style={[
              styles.signupText,
              isLogin ? styles.inactiveText : styles.activeText,
            ]}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <SignIn />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    ...Styles.full,
    backgroundColor: colors.white,
  },
  headerContainer: {
    ...Styles.center,
    height: scaleHeight(500),
  },
  headerText: {
    ...Styles.Gala_Med_30,
    color: colors.red,
  },
  toggleContainer: {
    ...Styles.row,
    position: 'absolute',
    top: scaleHeight(300),
    left: scaleWidth(10),
    width: scaleWidth(350),
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colors.dark_blue,
    height: scaleHeight(46),
    overflow: 'hidden',
  },
  toggleButton: {
    paddingVertical: 13,
    paddingHorizontal: 70,
    backgroundColor: 'transparent',
  },
  activeToggle: {
    backgroundColor: colors.dark_blue,
    borderRadius: 50,
  },

  inactiveToggle: {
    backgroundColor: colors.white,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  activeText: {
    color: colors.white,
  },
  inactiveText: {
    color: colors.dark_blue,
  },
  loginText: {
    ...Styles.Gato_Req_18,
  },
  signupText: {
    ...Styles.Gato_Req_18,
  },
});
