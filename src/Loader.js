//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,ActivityIndicator} from 'react-native';

// create a component
const Loader = () => {
    return (
        <View style={[styles.container, styles.horizontal]}>
              <ActivityIndicator size="large" color="#00ff00" />

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor:'blue',
        width: '100%',
      },
      horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
      }
});

//make this component available to the app
export default Loader;
