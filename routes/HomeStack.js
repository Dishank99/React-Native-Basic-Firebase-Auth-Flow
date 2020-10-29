import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Dashboard from '../screens/Dashboard'
const Screens = {
    Dashboard: {
        screen: Dashboard
    },
}

const homeStackNavgigator = createStackNavigator(Screens,{
    defaultNavigationOptions:{
        headerShown:false
    }
})

export default createAppContainer(homeStackNavgigator)
