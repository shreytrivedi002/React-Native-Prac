import { ScrollView, Text, View } from "react-native";
import Note from "../components/Notes";
import NavFoot from "./common/NavFoot";

const Notes = ({ navigator }) => {
    return (
        <View style={{ display: 'flex',height:'100%'}}>
            <View style={{flex:1}}>
                <ScrollView style={{width:'100%'}}>
                    <Note/>
                </ScrollView>
            </View>
            <NavFoot />
        </View>
    );
}

export default Notes;