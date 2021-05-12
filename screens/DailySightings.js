import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity, 
    StyleSheet, Alert, Platform, StatusBar, SafeAreaView, Linking } from 'react-native';


export default class DailyPicScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: []
        };
    }

  

    renderImage = (url) => {
        <Image source={{ "uri": url }} style={{ width: "100%", height: 300, borderRadius: 20, margin: 3 }}></Image>
    }

   

    render() {
        const url = this.state.image.url
        if (Object.keys(this.state.image).length === 0) {
            return (
                <View
                    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text>Loading</Text>
                </View>
            )
        }
        else {
            return (
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea} />
                    <ImageBackground source={require('../assets/Sky.gif')} style={styles.backgroundImage}>
                        <View style={{ flex: 0.15, justifyContent: "center", textAlign: "center" }}>
                            <Text style={styles.routeText}>Daily Pic</Text>
                        </View>
                       
                    </ImageBackground>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        textAlign: 'center',
    },
    titleText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#ec63ff",
    },
    explanationText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
        marginTop: 10
        // margin: 10,
        // textAlign: 'center'
    },
  
    iconContainer: {
        justifyContent: "center",
        alignItems: "center",

    }
});

