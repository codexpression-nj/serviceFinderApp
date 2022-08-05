//import liraries
import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// create a component
const Login = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{fontWeight: '100', fontSize: 34, marginBottom: 10 }}>Welcome Back</Text>
            <Text style={{ marginBottom: 10, fontSize: 18 }}>
                Sign in to continue
            </Text>
            <View  style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
            />
            </View>
           

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={{color:'white'}}>Login</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"fff",
        padding: 30,
        paddingTop: 130,
    },
    input: {
        height: 40,
        margin: 12,
        // borderWidth: 1,
        borderBottomWidth: 1,
        padding: 10,
    },
    button:{
        alignItems: "center",
        backgroundColor: "#6200ea",
        padding: 10,
        margin:30,
        borderRadius:10,
        position:'absolute',
        bottom:0,
        width: '100%',
    },
    form:{
        paddingTop:windowHeight * 0.10

    }
});

//make this component available to the app
export default Login;
