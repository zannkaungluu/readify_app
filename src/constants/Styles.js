import { scaleHeight, scaleWidth } from '../utils/responsive';
import {fontFamilies} from './themes';

export const Styles = {
  full: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputBox:{
    borderWidth: 1,
    borderRadius: 50,
    height: scaleHeight(46),
  },
  Gato_Req_18: {
    fontSize: 18,
    fontFamily: fontFamilies.GabaritoRegular,
  },
  Gato_Med_20: {
    fontSize: 20,
    fontFamily: fontFamilies.GabaritoMedium,
  },
  Gala_Med_18: {
    fontSize: 18,
    fontFamily: fontFamilies.GabrielaRegular,
  },
  Gala_Med_30: {
    fontSize: 30,
    fontFamily: fontFamilies.GabrielaRegular,
  },
};
