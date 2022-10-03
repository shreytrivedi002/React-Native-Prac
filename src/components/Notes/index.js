import { useNotes } from "./hooks";
import InputBar from "./InputBar";
import List from "./List";

const Note = () => {
    const { addItem, itemList } = useNotes();
    return (
        <>
            <InputBar onButtonClick={addItem} />
            <List listArray={itemList}/>
        </>
    );
}

export default Note;