import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { RootStackParams } from '../navigator/Navigator';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import usePokemon from '../hooks/usePokemon';
import PokemonDetails from '../components/PokemonDetails';


interface Props extends NativeStackScreenProps<RootStackParams, 'PokemonScreen'> {};



const PokemonScreen = ( {navigation, route}:Props ) => {

    const {simplePokemon, color} = route.params;
    const { id, name, picture} = simplePokemon;
    const { top } = useSafeAreaInsets();

    const {isLoading, pokemon} = usePokemon( id )

    return (
    <View style={{flex:1}}>
        {/* { Header container} */}
        <View style={{
            ...styles.headerContainer,
            backgroundColor: color,
        }}>
            <TouchableOpacity
                onPress={ () => navigation.pop()}
                activeOpacity={0.8}
                style={{
                    ...styles.backButton,
                    top: top +5
                }}
            >
                <Ionicons
                    name="arrow-back-outline"
                    color="white"
                    size={ 35 }
                />
            </TouchableOpacity>

            <Text style={{...styles.pokemonName,
                            top: top + 40            
            }}>
                    {name+ '\n'} # {id}
                </Text>

                <Image

                    source={require('../assets/pokebola-blanca.png')}
                    style={ styles.pokeball}
                />

                <FadeInImage
                    uri={ picture }
                    style={ styles.pokemonImage}
                />






            
        </View>
        {
                isLoading ? (
                    <View style={styles.loadingIndicator}>
                        <ActivityIndicator
                            color={ color }
                            size={ 50 }
                        />
                    </View>
                )
                : <PokemonDetails pokemon={ pokemon }/>
            }
    </View>
    )
}

export default PokemonScreen

const styles = StyleSheet.create({

    headerContainer:{
        height:370,
        zIndex: 999,
        alignItems:'center',
        borderBottomRightRadius:1000,
        borderBottomLeftRadius:1000
    },
    backButton:{
        position: 'absolute',
        left:20
    },
    pokemonName:{
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20
    },
    pokeball:{
        width: 250,
        height: 250,
        bottom: -20,
        opacity:0.7
    },
    pokemonImage:{
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -15
    },
    loadingIndicator: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    }


});
