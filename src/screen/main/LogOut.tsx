import { useNavigation } from '@react-navigation/native'
import { FC } from 'react'
import { Button, Text, View } from 'react-native'

interface Props {
}

export const LogOut:FC <Props> = () => {
  const navigation = useNavigation();
 return (
   <View>
   <Text>Salir</Text>
   <Button
    title='Adios...'
    onPress={()=>navigation.navigate("Login" as never)}
   />
   </View>
 )
}