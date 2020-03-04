import React, {Component} from 'react'
import {StyleSheet, View, SafeAreaView} from 'react-native'

export default class App extends Component {
  render() {
    const {parentView, redView, blueView} = styles
    return (
      <SafeAreaView style={parentView}>
        <View style={redView}></View>
        <View style={blueView}></View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  redView: {
    height: 100,
    backgroundColor: 'red'
  },
  blueView: {
    height: 100,
    backgroundColor: 'blue'
  }
})