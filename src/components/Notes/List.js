import { StyleSheet, Text, View } from "react-native";

const List = ({listArray}) => {
    return ( 
        <View style={styles.main}>
            {listArray?.map((a,i) => <Text key={i}>{a}</Text>)}
        </View>
     );
}
 
export default List;

const styles = StyleSheet.create({
    main: {
        width: '100%',
        margin: 20,
    }
    
})