import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'

const Screens = {
    SignIn: {
        screen: SignIn
    },
    SignUp: {
        screen: SignUp
    }
}

const authStackNavgigator = createStackNavigator(Screens,{
    defaultNavigationOptions:{
        headerShown:false
    }
})

export default createAppContainer(authStackNavgigator)
