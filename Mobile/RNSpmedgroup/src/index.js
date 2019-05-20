import { createBottomTabNavigator, createAppContainer, createStackNavigator, createSwitchNavigator } from "react-navigation";
import Login from '../src/pages/login'
import Consultas from '../src/pages/consultas'

const AuthStack = createStackNavigator({Login});

const MainNavigator = createStackNavigator({Consultas});

export default createAppContainer(createSwitchNavigator({
    MainNavigator,
    AuthStack

},
    {initialRouteName:"AuthStack"}
))
