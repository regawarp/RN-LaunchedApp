import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
    View,
    Button
} from 'react-native';

const LoginScreen = ({ navigation }) => {

    const sessionValidation = async () => {
        const isLogin = await AsyncStorage.getItem('sessionId')
        if (isLogin) {
            navigation.replace("Home")
        }
    }

    React.useEffect(() => {
        sessionValidation()
    }, [])

    function handleLogin() {
        try {
            console.log("Login")
            fetch("https://reqres.in/api/login", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: "eve.holt@reqres.in",
                    password: "cityslicka"
                })
            }).then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson.token)
                    if (responseJson.token) {
                        AsyncStorage.setItem('sessionId', responseJson.token)
                        navigation.replace("Home")
                        console.log("Session Id login", responseJson.token)
                    }
                })
        } catch (error) {
            console.warn(error);
        }
    }

    return (
        <View>
            <Button
                onPress={() => handleLogin()}
                title="Login"
            />
        </View>
    )
}

export default LoginScreen;