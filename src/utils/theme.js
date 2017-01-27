import * as Colors from 'material-ui/styles/colors';
import * as ColorManipulator from 'material-ui/utils/colorManipulator';

module.exports = {
  spacing: {
    iconSize: 24,

    desktopGutter: 24,
    desktopGutterMore: 32,
    desktopGutterLess: 16,
    desktopGutterMini: 8,
    desktopKeylineIncrement: 64,
    desktopDropDownMenuItemHeight: 32,
    desktopDropDownMenuFontSize: 15,
    desktopDrawerMenuItemHeight: 48,
    desktopSubheaderHeight: 48,
    desktopToolbarHeight: 56,
  },
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.yellow700,
    primary2Color: Colors.deepOrange500,
    primary3Color: Colors.grey400,
    accent1Color: Colors.pinkA200,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.grey900,
    alternateTextColor: Colors.grey50,
    canvasColor: Colors.grey50,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
    pickerHeaderColor: Colors.yellow500,
    clockCircleColor: ColorManipulator.fade(Colors.darkBlack, 0.07),
    shadowColor: Colors.fullBlack
  }
};
