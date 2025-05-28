import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Styles} from '../../../constants/Styles';
import {colors} from '../../../constants/themes';
import {scaleHeight} from '../../../utils/responsive';

const SignIn = () => {
  return (
    <View style={styles.container}>
      {/* email input */}
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter Email" style={styles.inputField} />
      </View>
      {/* password input */}
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter Password" style={styles.inputField} />
      </View>
      {/* login button */}
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    ...Styles.center,
  },
  inputContainer: {
    marginBottom: scaleHeight(20),
  },
  inputField: {
    ...Styles.Gato_Req_18,
    ...Styles.input,
  },
  buttonContainer: {
    ...Styles.button,
    ...Styles.center,
  },
  buttonText: {
    ...Styles.Gato_Med_18,
    color: colors.white,
  },
});
