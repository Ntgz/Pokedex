import React from 'react'
import { Text, View, ActivityIndicator,StyleSheet} from 'react-native';

const Loading = () => {
    return (
        <View style={styles.activityContainer}>

            <ActivityIndicator
                size={50}
                color="grey"
            />
            <Text>Cargando...</Text>

        </View>
    )
}

export default Loading

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
