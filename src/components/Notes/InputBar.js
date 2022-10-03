import { StyleSheet, TextInput, View } from "react-native";
import { Button } from "react-native";
import { useNotes } from "./hooks";

const InputBar = ({ onButtonClick }) => {
    const {text,setText} = useNotes();
    return (
        <View style={styles.mainContainer}>
            <TextInput style={styles.inputArea} placeholder="Enter here" onChangeText={setText} />
            <Button title="Add" onPress={()=>onButtonClick(text)} />
        </View>
    );
}

export default InputBar;

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        padding:5
    },
    inputArea: {
        borderColor: 'black',
        borderWidth: 2,
        flex: 1,
        padding: 5,
        marginRight:5
    }
})