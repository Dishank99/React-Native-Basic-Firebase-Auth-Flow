import React from 'react'
import { StyleSheet } from 'react-native'

export const globalStyle = StyleSheet.create({
    innerContainer:{
        width:'80%',
        justifyContent:'center',
        padding:20,
        backgroundColor:'white',
        elevation:3,
        borderRadius:5,
        // borderWidth:1,
        // borderColor:'black',
    },
    inputGroup:{
        marginBottom:'5%',
        // borderWidth:1,
        // borderColor:'black',
    },
    input:{
        paddingVertical:5,
        paddingHorizontal:10,
        // marginBottom:'5%',
        borderWidth:0.5,
        borderColor:'grey',
    },
    link:{
        marginTop:2,
        width:'100%',
        textAlign:'center',
        color:'blue',
        textDecorationLine:'underline'
    },
    error:{
        width:'100%',
        textAlign:'center',
        color:'red',
    },
})