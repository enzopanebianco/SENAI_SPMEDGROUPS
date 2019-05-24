import { createBottomTabNavigator, createAppContainer, createStackNavigator, createSwitchNavigator } from "react-navigation";
import Login from '../src/pages/login'
import Consultas from '../src/pages/consultas'
import {AsyncStorage} from 'react-native';

const AuthStack = createStackNavigator({Consultas});

const MainNavigator = createStackNavigator({Login});

//const usuario = await AsyncStorage.getItem("spmed");

export default createAppContainer(createSwitchNavigator({
    MainNavigator,
    AuthStack

},
    {initialRouteName:"AuthStack"}
))
