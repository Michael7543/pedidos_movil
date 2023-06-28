import { useNavigation } from '@react-navigation/native'
import { FC } from 'react'
import { Button, Text, View } from 'react-native'

interface Props {
}

export const LineaLista:FC <Props> = () => {

  const nav = useNavigation();

 return (
   <View>
    <Text> {/* Text = <p></p> */}
        Lista de Lineas de Investigacion
    </Text>
    <Button 
      title='Nuevo'
      onPress={()=>nav.navigate("LineaForm" as never )}
    />
   </View>
   
 )
}