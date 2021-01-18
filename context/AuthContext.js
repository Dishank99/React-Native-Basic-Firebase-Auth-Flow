import React, { createContext, useState, useContext, useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'
import App, { auth } from '../firebase'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }){

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(false)

    const signup = (email,password) => auth.createUserWithEmailAndPassword(email, password)

    const signin = (email, password) => auth.signInWithEmailAndPassword(email, password)

    const signout = () => auth.signOut()

    const updatePassword = (newPassword) => currentUser.updatePassword(newPassword)

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user=>{
            setCurrentUser(user)
            setLoading(false)
        })

        return ()=>unsubscribe()
    },[])

    const values = {
        currentUser,
        signup,
        signin,
        signout,
        updatePassword,
        setLoading,
    }

    return(
        <AuthContext.Provider value={values}>
            {loading?(
                <View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
                    <ActivityIndicator size='large' color='blue' />
                </View>
            ):(children)}
        </AuthContext.Provider>
    )
}
