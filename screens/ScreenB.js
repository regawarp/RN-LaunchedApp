import { View, Text } from 'react-native'
import React from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ScreenB({ route }) {
  // From launched app
  const [token, setToken] = React.useState("");

  React.useEffect(() => {
    console.log("Route is", route)
    if (route.params != undefined) {
      setToken(route.params.token);
      const token = route.params.token;
      // TODO: Validasi ke API apakah token valid, jika valid store tokennya di penyimpanan local
      token != undefined && AsyncStorage.setItem('sessionId', token);
      // Jika tidak redirect ke halaman login
      // TODO: Redirect ke halaman login
    }
  }, [])

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

  return (
    <View>
      <Text>ScreenB Launched</Text>
      {token &&
        <Text>
          Auth Token: {token}
        </Text>
      }
    </View>
  )
}