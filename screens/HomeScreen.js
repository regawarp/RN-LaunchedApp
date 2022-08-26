import React from 'react';
import {
    View,
    Text,
    Linking,
    Button
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation, route }) => {
    // From Launched App
    React.useEffect(() => {
        console.log("Route is", route)
        if (route.params != undefined) {
            const token = route.params.token;
            // TODO: Validasi ke API apakah token valid, jika valid store tokennya di penyimpanan local
            token != undefined && AsyncStorage.setItem('sessionId', token);
            // Jika tidak redirect ke halaman login
            // TODO: Redirect ke halaman login
        }else{
            
        }
    }, [])

    // Login
    React.useEffect(() => {
        const sessionValidation = async () => {
            const isLogin = await AsyncStorage.getItem('sessionId')
            if (!isLogin) {
                navigation.replace("Login");
            }
            console.log("session id", isLogin)
        }
        sessionValidation()
    }, [])

    function handleLogout() {
        console.log("Logout")
        const logout = async () => {
            await AsyncStorage.clear()
            navigation.replace("Login");
        }
        logout()
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen Launched</Text>
            <Button
                onPress={() => Linking.openURL("myapp://app/a/")}
                title="Go to Screen A"
            />
            <Button
                onPress={() => Linking.openURL("myapp://app/b/")}
                title="Go to Screen B"
            />
            <Button
                title="Logout"
                onPress={() => handleLogout()}
            />
        </View>
    )
}

export default HomeScreen;