import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useAuth } from '../context/AuthContext'

export default function Dashboard(){
    const { currentUser, signout } = useAuth()
    console.log(currentUser)
    return (
        <View style={styles.container} >
            <Text style={{ fontSize:30, textAlign:'center' }}>Welcome! {currentUser.providerData[0].email}</Text>
            <Button title='Sign Out' onPress={()=>signout()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})