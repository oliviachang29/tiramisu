'use strict'

import {
  StyleSheet,
  PixelRatio
} from 'react-native'

const GlobalStyles = StyleSheet.create({
  // TODO: add custom fonts
  // Bold, black text at top left of each screen
  container: {
    flex: 1,
    backgroundColor: "#FFFCF0",
  },
  innerContainer: {
    marginTop: 20,
    marginLeft: 26,
    marginRight: 26
  },
  centered: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pullRight_container: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  pullRight: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end'
  },
  dark: {
    color: '#808080',
    fontSize: 20,
    fontWeight: 'bold'
  },
  h1: {
    color: '#808080',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'BrandonGrotesque-Bold'
  },
  h4: {
    fontFamily: 'FreightDispBold',
    fontSize: 18
  },
  h5: {
    color: '#9B9B9B',
    fontFamily: 'FreightDisplayW01-Book',
    fontSize: 18,
    letterSpacing: 0
  },
  p: {
    color: '#4A4A4A',
    fontSize: 20,
    fontWeight: 'normal',
    fontFamily: 'FreightDisplayW01-Book',
    letterSpacing: 0
  },
  buttonContainer: {
    padding: 20,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 200,
    backgroundColor: "#FF7473",
    alignSelf: 'center'
  },
  buttonStyleText: {
    color: 'white',
  },
  thinUnderline: {
    borderBottomColor: '#95989A',
    borderBottomWidth: 0.5
  },
  thickUnderline: {
    borderBottomColor: '#95989A',
    borderBottomWidth: 2,
    paddingBottom: 6
  },
  success: {
    color: '#86CB92',
    fontSize: 20,
    fontWeight: 'normal',
    marginBottom: 25
  },
  shadow: {
    shadowColor: '#565656',
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 10,
    shadowOpacity: 0.19
  },
  separator: {
    backgroundColor: '#F4F4F4',
    width: '100%',
    height: 11,
    borderRadius: 100
  },
  image: {
    height: 279,
    width: 300,
  },
})

module.exports = GlobalStyles
