import { useState } from "react";

export const useNotes = () => {
    const [text, setText] = useState('');
    const [itemList, setItemList] = useState([]);

    const addItem = (item) => {
        setItemList([...itemList, item]);
    }
    return { text, setText, addItem, itemList };
}
