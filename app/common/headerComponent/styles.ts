import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  colorcontainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    // paddingHorizontal: 20
    marginHorizontal: 20,
  },
  menuIcon: {
    borderRadius: SIZES.radius,
    borderWidth: 1,
    height: 40,
    width: 40,
    borderColor: COLORS.gray2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: COLORS.black,
  },
  profileIconRadius: {
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileIcon: {
    height: 40,
    width: 40,
    borderRadius: SIZES.radius,
  },
});
export default styles;
