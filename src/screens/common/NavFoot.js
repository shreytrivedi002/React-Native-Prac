import { View ,Button} from "react-native";
import {useNavigation} from '@react-navigation/native'
const NavFoot = () => {
    const navigation = useNavigation();
    return ( 
        <View style={{display:'flex',flexDirection:'row',borderColor:'red',borderWidth:5,padding:20, width:'100%',justifyContent:'space-evenly',backgroundColor:'white'}}>
            <Button onPress={()=>navigation.navigate('Weather')} title='Weather' />
            <Button onPress={()=>navigation.navigate('Notes')} title='Notes' />
            <Button title="News" onPress={()=>navigation.navigate('News')}/>
        </View>
     );
}
 
export default NavFoot;