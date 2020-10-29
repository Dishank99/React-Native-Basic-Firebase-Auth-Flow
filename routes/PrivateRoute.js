import React from 'react'
import AuthStack from './AuthStack'
import HomeStack from './HomeStack'
import { useAuth } from '../context/AuthContext'

export default function PrivateRoute(){
    const {currentUser} = useAuth()
    if(currentUser)
        return <HomeStack/>
    return <AuthStack/>
}
