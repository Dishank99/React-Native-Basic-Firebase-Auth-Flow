import React from 'react'
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native'
import {globalStyle} from '../styles/globalStyle'
import { useAuth } from '../context/AuthContext'
import { Formik } from 'formik'
import app, {auth} from '../firebase'
import * as yup from 'yup'

const validationSchema = yup.object({
    password: yup.string().required().min(8).matches(/(?=.*\d)/, 'password must contain atleast one digit')
                                            .matches(/(?=.*[a-z])/, 'password must contain atleast one lowercase letter')
                                            .matches(/(?=.*[A-Z])/, 'password must contain atleast one uppercase letter')
                                            .matches(/(?=.*\W)/, 'password must contain atleast one special character'),
    confirmpassword: yup.string().required().oneOf([yup.ref('password'), null],'Passwords must match')
})

export default function Dashboard({navigation}){
    const { currentUser, updatePassword, setLoading, signout } = useAuth()

    const { email } = currentUser.providerData[0]
    return (
        <View style={styles.container} >
        <Formik
            initialValues={{password: '', confirmpassword: ''}}
            validationSchema={validationSchema}
            onSubmit={async (values, actions)=>{
                setLoading(true)
                console.log('bp1')
                updatePassword(values.password)
                .then(()=>{
                    console.log('bp2')
                    Alert.alert('Info', 'Password Changed Successfully')
                    setLoading(false)
                })
                .catch(err=>{
                    console.log('bp3')
                    Alert.alert('Error',err.message)
                    setLoading(false)
                })
                // try{
                //     console.log('on submit')
                //     setLoading(true)
                //     const creds = await auth.createUserWithEmailAndPassword(values.email, values.password)
                //     if(creds){
                //         Alert.alert('Info', 'Account Created Successfully')
                //         setLoading(false)
                //     }
                // }catch(err){
                //     Alert.alert('Error',err.message)
                //     setLoading(false)
                // }
            }}
        >
        {(props)=>(
            
                <View style={globalStyle.innerContainer} >
                <View style={globalStyle.inputGroup}><Text style={{alignSelf:'center'}}>Welcome! {email}</Text></View>
                <View style={globalStyle.inputGroup}>
                    <TextInput
                        style={globalStyle.input}
                        defaultValue={email}
                    />
                </View>
                <View style={globalStyle.inputGroup}>
                    <TextInput
                        style={globalStyle.input}
                        placeholder='Password'
                        value={props.values.password}
                        onChangeText={props.handleChange('password')}
                        onBlur={props.handleBlur('password')}
                        secureTextEntry={true}
                    />
                    {props.touched.password && props.errors.password && <Text style={globalStyle.error}>{props.errors.password}</Text>}
                </View>
                <View style={globalStyle.inputGroup}>
                    <TextInput
                        style={globalStyle.input}
                        placeholder='Confirm Password'
                        value={props.values.confirmpassword}
                        onChangeText={props.handleChange('confirmpassword')}
                        onBlur={props.handleBlur('confirmpassword')}
                        secureTextEntry={true}
                    />
                    {props.touched.confirmpassword && props.errors.confirmpassword && <Text style={globalStyle.error}>{props.errors.confirmpassword}</Text>}
                </View>
                <Button
                    title='Submit'
                    onPress={props.handleSubmit}
                />
                <Text style={globalStyle.link} onPress={()=>signout()} >Log Out</Text>
                </View>
        )}
        </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'lightgrey'
    }
})