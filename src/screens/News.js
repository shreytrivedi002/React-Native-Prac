import { useEffect } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { searchNews } from "../helper/api";

const dummy = [
    { title: 'melon', price: '87', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Cantaloupe_and_canary_melon.jpg/1280px-Cantaloupe_and_canary_melon.jpg' },
    { title: 'melon', price: '87', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Cantaloupe_and_canary_melon.jpg/1280px-Cantaloupe_and_canary_melon.jpg' },
    { title: 'chili', price: '34', img: 'https://www.forkinthekitchen.com/wp-content/uploads/2020/03/211209.spicy_.green_.beans-9667-683x1024.jpg' },
    { title: 'beans', price: '56', img: 'https://www.simplyrecipes.com/thmb/YTHjBA3R2PXOwVd3pZRqbs18cDU=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2017__01__Turkey-Black-Bean-Chili-1-696d83a69bf84a9cbf82e87ab22b4959.jpg' },
    { title: 'jeans', price: '64', img: 'https://http2.mlstatic.com/D_NQ_NP_606098-MLM46953737998_082021-O.webp' },
    { title: 'melon', price: '87', img: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Cantaloupe_and_canary_melon.jpg' },
    { title: 'melon', price: '87', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Cantaloupe_and_canary_melon.jpg/1280px-Cantaloupe_and_canary_melon.jpg' },
    { title: 'melon', price: '87', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Cantaloupe_and_canary_melon.jpg/1280px-Cantaloupe_and_canary_melon.jpg' },
]

const News = () => {

    return (
        <View style={styles.main}>
            {dummy.map((a, i) =>
                <View style={styles.tile} key={i}>
                    <ImageBackground style={{width:'100%',resizeMode:'cover',flex:1}} source={{ uri: a.img }}>
                        <Text style={{color:'white',fontSize:20,backgroundColor:'black',position:'absolute',bottom:0,right:0,width:'100%'}}>{a.title}</Text>
                    </ImageBackground>
                </View>
            )}
        </View>
    );
}

export default News;

const styles = StyleSheet.create({
    main: {
        width: '100%',
        flexDirection: 'row',
        display: 'flex',
        flexWrap: 'wrap',
        maxHeight: '100%',
        height: '100%',
        justifyContent: 'space-evenly',
        padding: 20
    },
    tile: {
        width: '40%',
        borderColor: 'blue',
        borderWidth: 2,
        height: '20%',
        resizeMode: 'cover',

    }
})