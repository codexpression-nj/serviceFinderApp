//import liraries
import React, { Component } from 'react';
import { View, Text,Dimensions, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import serviceData from './Data';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const cardHieght = windowHeight * 0.2;
const cardWidth = windowHeight * 0.2;

// create a component
const Home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <FlatList 
                data={serviceData}
                contentInset={{padding: 12}}
                renderItem={({item}) =>{
                    return(
                        <TouchableOpacity  onPress={() => navigation.navigate('Detail')} style={{padding:15,margin:10, height:windowHeight * 0.2,backgroundColor:item.bgColor, borderRadius:10,position:'relative'}}>
                           <View style={[
                                    StyleSheet.absoluteFillObject,
                                    { padding: 10 }
                                ]}>
                           <Image style={{
                                height: cardHieght * 0.8, width:cardWidth * 1, position:'absolute', right:0,bottom:0,resizeMode:'contain'
                            }} source={item.image}/>
                           <Text style={styles.category}>
                                {item.category}
                            </Text>
                            <Text style={styles.name}>
                                {item.name}
                            </Text>
                            <Text>
                                {item.numberCompany}
                            </Text>
                          
                           </View>
                        
                        </TouchableOpacity>
                    )
                }}
            >

            </FlatList>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
        // backgroundColor: '#2c3e50',
    },
    category:{
        fontSize:24,
        fontWeight:'200',
        color:'white'
    },
    name:{
        fontSize:16,
        color:'white',
        fontWeight:'500'
    }
});

//make this component available to the app
export default Home;
