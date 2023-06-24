import { useNavigation } from '@react-navigation/native'
import { FC } from 'react'
import { Button, Text, View } from 'react-native'

interface Props {

}

export const Login:FC <Props> = () => {

  const navigation = useNavigation();

  const login = () => {
      console.debug("Iniciando sesion");
      navigation.navigate("HomeTab" as never );
  }

 return (
   <View>{/*  View = div */  }
    <Text>Login</Text>
    <Button 
      title='Login'
      onPress={()=>login()}
    />
   </View>
 )
}