import React from 'react'
import { Text, View,Platform, ActivityIndicator,StyleSheet,FlatList,Dimensions} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SearchInput from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import PokemonCard from '../components/PokemonCard';
import Loading from '../components/Loading';

const screenWidth = Dimensions.get('window').width;

const SearchScreen = () => {

    const { top } = useSafeAreaInsets();
    const {IsFetching,SimplePokemonlist} = usePokemonSearch();

    if (IsFetching) {
        return <Loading/>
    }

    return (
        <View style={{flex:1, marginHorizontal:20}}>
            
            <SearchInput
            style={{
            position:'absolute',
            zIndex:999,
            width:screenWidth-40,
            top:(Platform.OS === 'ios') ? top : top + 30}}/>
            <FlatList
            data={ SimplePokemonlist }
            showsVerticalScrollIndicator={false}
            keyExtractor={ (pokemon) => pokemon.id }
            numColumns={2}

            ListHeaderComponent={    (   
                <Text style={{
                ...styles.title,
                ...styles.globalMargin,
                paddingBottom:10,
                marginTop:(Platform.OS === 'ios') ? top + 60 : top + 80
            }}>Pokedex</Text>)}

            renderItem={ ({item}) => ( <PokemonCard pokemon= {item}/>
            )}
        
        />
        </View>

        
    )
}

export default SearchScreen

const styles = StyleSheet.create({

activityContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
},
title:{
    fontSize: 35,
    fontWeight: 'bold'
},
globalMargin:{
    marginHorizontal:20
},


});
