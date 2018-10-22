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
    backgroundColor: "#F5F5F5",
  },
  innerContainer: {
    paddingTop: 20,
    paddingLeft: 26,
    paddingRight: 26
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
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Circular-Book',
  },
  h4: {
    fontFamily: 'Circular-Book',
    fontSize: 18
  },
  h5: {
    color: '#9B9B9B',
    fontFamily: 'Circular-Book',
    fontSize: 18,
    letterSpacing: 0
  },
  p: {
    color: '#4A4A4A',
    lineHeight: 18,
    fontSize: 16,
    fontWeight: 'normal',
    fontFamily: 'Circular-Book',
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
    fontSize: 18,
    fontFamily: 'Circular-Medium',
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
    color: '#FF7473',
    fontSize: 20,
    fontWeight: 'normal',
    marginBottom: 25
  },
  shadow: {
    shadowColor: '#565656',
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 10,
    shadowOpacity: 0.19,
    elevation: 10,
    zIndex: 100
    // backgroundColor: '#0000'
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
