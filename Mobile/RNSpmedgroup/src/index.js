import { createBottomTabNavigator, createAppContainer, createStackNavigator, createSwitchNavigator } from "react-navigation";
import Login from '../src/pages/login'
import Consultas from '../src/pages/consultas'

const AuthStack = createStackNavigator({Consultas});

const MainNavigator = createStackNavigator({Login});

export default createAppContainer(createSwitchNavigator({
    MainNavigator,
    AuthStack

},
    {initialRouteName:"AuthStack"}
))
