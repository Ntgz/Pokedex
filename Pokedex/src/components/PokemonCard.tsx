import React from 'react'
import { useEffect,useRef,useState } from "react";
import { StyleSheet, Text, View, Image, FlatList,ActivityIndicator, TouchableOpacity, Dimensions } from 'react-native';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';
import ImageColors from 'react-native-image-colors'
import { useNavigation } from '@react-navigation/native';
// import { useNavigation } from '@react-navigation/native';


const windowWidth = Dimensions.get('window').width

interface Props {
    pokemon:SimplePokemon;
}


const PokemonCard = ({pokemon}: Props) => {

    const [bgColor, setBgColor] = useState('blue');
    const isMounted = useRef(true);
    const navigation = useNavigation();

    // useEffect(() => {

    //     ImageColors.getColors(pokemon.picture, {fallback:'grey', cache: true,})
    //         .then( colors => {

    //             if(!isMounted.current) return;
                
    //             if( colors.platform === 'android') {
    //                 setBgColor(colors.dominant || 'grey')
    //             } else if ( colors.platform === 'ios'){
    //                 setBgColor( colors.background || 'grey')
    //             }
    //         })

    //         return () => {
    //             isMounted.current= false
    //         }

    // }, [])

    return (
        <TouchableOpacity
        activeOpacity={0.9}
        onPress ={ () => navigation.navigate('PokemonScreen', {simplePokemon: pokemon, color: bgColor})
    
        }
        >
            <View style={{
                ...styles.cardContainer,
                width: windowWidth * 0.4,
                backgroundColor: '#6EAFF0'
            }}>

                <View>
                    <Text style={styles.name}>
                        { pokemon.name}
                        { '\n#' + pokemon.id }
                    </Text>
                </View>

                <Image
                
                    source={ require('../assets/pokebola-blanca.png')}
                    style={ styles.pokebola}

                />

                <FadeInImage
                
                    uri={ pokemon.picture}
                    style={styles.pokemonImage}

                />
                
            </View>
        </TouchableOpacity>
    )
}

export default PokemonCard

const styles = StyleSheet.create({

    cardContainer:{
        marginHorizontal:10,
        height:120,
        width:160,
        marginBottom:25,
        borderRadius:10,
    },
    name:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top:20,
        left: 10
    },
    pokebola:{
        width:100,
        height:100,
        position: 'absolute',
        bottom:-20,
        right:-20,
        opacity: 0.5
    },
    pokemonImage:{
        width:120,
        height:120,
        position: 'absolute',
        right:-8,
        bottom:-5,
    }


});

