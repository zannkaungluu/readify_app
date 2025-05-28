import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Styles} from '../../../constants/Styles';
import {scaleHeight} from '../../../utils/responsive';
import {colors} from '../../../constants/themes';

const SignUp = () => {
  return (
    <View style={styles.container}>
      {/* name input */}
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter Name" style={styles.inputField} />
      </View>
      {/* email input */}
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter Email" style={styles.inputField} />
      </View>
      {/* password input */}
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter Password" style={styles.inputField} />
      </View>
      {/* confirm password input */}
      <View style={styles.inputContainer}>
        <TextInput placeholder="Confirm Password" style={styles.inputField} />
      </View>
      {/* sign up button */}
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    ...Styles.center,
  },
  inputContainer: {
    marginBottom: scaleHeight(20),
  },
  inputField: {
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
