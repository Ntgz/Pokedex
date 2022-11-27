import { useState,useEffect } from 'react';
import { Text, View,Platform,StyleSheet,TextInput,ViewStyle,StyleProp} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import useDebounceValue from '../hooks/useDebounceValue';


interface Props {
    onDebounce: (value: string) => void;
    style?: StyleProp<ViewStyle>
}


const SearchInput = ({style, onDebounce}:Props) => {

    const [textValue, setTextValue] = useState('')

    const debouncedValue = useDebounceValue(textValue);

    useEffect(() => {
        onDebounce(debouncedValue);
    }, [debouncedValue])

    return (
        <View style={{...styles.container,
        ...style as any}}>
            <View style={styles.textBackground}>
                <TextInput
                    placeholder="Buscar pokemon"
                    style={{...styles.textInput, top: (Platform.OS === 'ios') ? 0 : 2}}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={setTextValue}
                />
                <Ionicons
                    name="search-outline"
                    color="grey"
                    size={30}
                />
            </View>
        </View>
    )
}

export default SearchInput

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#F3F1F3'
    },
    textBackground:{
        backgroundColor:'#F3F1F3',
        borderRadius:50,
        height: 40,
        paddingHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
            },
    textInput:{
        flex:1,
        fontSize:18,
        top:0
    }



});