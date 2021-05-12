import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class WelcomeScreen extends Component {


    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/Sky.gif')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                      
                        <Text style={styles.titleText}>World Tour</Text>
                        <Text style={styles.titleText}>App</Text>
                    </View>

                   

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("WorldMap")
                    }>
                        <Text style={styles.routeText}>World Map</Text>
                        <Image source={require("../assets/Worldmap.png")} style={styles.routeImage}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("DailySightings")
                    }>
                        <Text style={styles.routeText}>Daily Sightings</Text>
                        <Image source={require("../assets/Daily.png")} style={styles.routeImage}></Image>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
   routeCard: {
        flex: 0.08,
        justifyContent: "center",
        alignItems: "center",
     width:200,
     height:20,
        margin: 10,
        marginLeft: 90,
        marginRight: 30,
        borderRadius: 100,
        backgroundColor: "#D11583"
    },
    titleBar: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeText: {
        fontSize: 18,
        fontWeight: "bold",
        color: 'white',
        justifyContent: "center",
        alignItems: "center"
    },
   routeImage: {
        position: "absolute",
        top: -50,
        right: -35,
        height: 100,
        width: 100,
        resizeMode: "contain"
    }
});