import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Styles} from '../../../constants/Styles';
import {colors} from '../../../constants/themes';
import {scaleHeight, scaleWidth} from '../../../utils/responsive';

const SignIn = () => {
  return (
    <View style={styles.container}>
       
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Styles.center,
  },
  
});
