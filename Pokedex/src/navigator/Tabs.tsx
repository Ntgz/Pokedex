import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform} from 'react-native';
import { Navigator } from './Navigator';
import SearchScreen from '../screens/searchScreen';
import Ionicons from '@expo/vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor:'white'
            }}
            screenOptions={{
                tabBarActiveTintColor: "#5856D6",
                tabBarLabelStyle:[{        
                    fontSize: 14,
                    fontWeight:'400',
                    marginBottom: (Platform.OS === 'ios') ? 0 :10
                    }],
                    headerShown: false,
                    tabBarStyle:{
                        position: 'absolute',
                        backgroundColor:'rgba(255,255,255,0.85)',
                        borderWidth:0,
                        elevation: 0,
                        height:(Platform.OS === 'ios')? 80 : 60
                    }     
            }}
            
        >
            <Tab.Screen name="Home" component={Navigator} options={{
                tabBarLabel:'Listado',
                tabBarIcon:({color, })=> <Ionicons color ={ color} size={20} name="list-outline"/>
            }}/>
            <Tab.Screen name="SearchScreen" component={SearchScreen} options={{
                tabBarLabel:'Búsqueda',
                tabBarIcon:({color, })=> <Ionicons color ={ color} size={20} name="search-outline"/>
            }}/>
        </Tab.Navigator>
    )
}

export default Tabs
