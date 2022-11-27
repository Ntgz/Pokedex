import React from 'react'
import { StyleSheet, Text, View, Image, FlatList,ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import PokemonCard from '../components/PokemonCard';
import { PokemonPaginated } from '../hooks/PokemonPaginated';

const HomeScreen = () => {

    const {top} = useSafeAreaInsets();

    const { SimplePokemonlist, loadPokemons } = PokemonPaginated();

    // console.log(SimplePokemonlist)


    return (
<View>

        <Image

            source={ require('../assets/pokebola.png')}
            style={styles.pokebolaBG}

        />

        <View 
            style={{
                alignItems: 'center'
            }}
        >
        <FlatList
            data={ SimplePokemonlist }
            showsVerticalScrollIndicator={false}
            keyExtractor={ (pokemon) => pokemon.id }
            numColumns={2}

            ListHeaderComponent={    (   
                <Text style={{
                ...styles.title,
                ...styles.globalMargin,
                top: top+20,
                marginBottom: top +20,
                paddingBottom:10
            }}>Pokedex</Text>)}

            renderItem={ ({item}) => ( <PokemonCard pokemon= {item}/>
                // <FadeInImage
                //     uri= {item.picture}
                //     style={{
                //         width: 100,
                //         height:100
                //     }}
                // />
            )}
        
            onEndReached={ loadPokemons }
            onEndReachedThreshold={ 0.4 }
            ListFooterComponent={ (
            <ActivityIndicator
                style={{ height: 100 }}
                size={20}
                color="grey"
            />
            )}
        />
        </View>
</View>
    )
}

export default HomeScreen
const styles = StyleSheet.create({

    globalMargin:{
        marginHorizontal:20
    },
    pokebolaBG:{
        width:300,
        height:300,
        position: 'absolute',
        top:-100,
        right:-100,
        opacity: 0.2
    },
    title:{
        fontSize: 35,
        fontWeight: 'bold'
    }


});
