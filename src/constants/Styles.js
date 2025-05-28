import {scaleHeight, scaleWidth} from '../utils/responsive';
import {colors, fontFamilies} from './themes';

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
  input: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colors.dark_blue,
    height: scaleHeight(46),
    width: scaleWidth(330),
    paddingHorizontal: scaleWidth(30),
  },
  button: {
    borderWidth: 1,
    borderColor: colors.dark_blue,
    backgroundColor: colors.dark_blue,
    borderRadius: 50,
    width: scaleWidth(330),
    height: scaleHeight(43),
  },
  Gato_Req_18: {
    fontSize: 18,
    fontFamily: fontFamilies.GabaritoRegular,
  },
  Gato_Med_20: {
    fontSize: 20,
    fontFamily: fontFamilies.GabaritoMedium,
  },
  Gato_Med_18: {
    fontSize: 18,
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
