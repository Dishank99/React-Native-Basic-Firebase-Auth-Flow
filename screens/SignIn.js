import React, { useRef } from 'react'
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native'
import {globalStyle} from '../styles/globalStyle'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useAuth } from '../context/AuthContext'

const validationSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required()
})

export default function SignIn({navigation}){
    const { currentUser, signin, setLoading } = useAuth()
    // console.log(currentUser)
    return (
        <View style={styles.container} >
        <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={validationSchema}
            onSubmit={async (values, actions)=>{
                console.log(values)
                setLoading(true)
                try{
                    const creds = await signin(values.email, values.password)
                    if (creds){
                        Alert.alert('Info', 'Signed In Successfully')
                        setLoading(false)
                    }
                }catch(err){
                    Alert.alert('Error', err.message)
                }
                finally{
                    setLoading(false)
                }
            }}
        >
        {(props)=>{
            // console.log(props.errors)
            emailErrors = useRef(props.errors.email)
            passwordErrors = useRef(props.errors.password)
            return (
            
                <View style={globalStyle.innerContainer} >
                    <View style={globalStyle.inputGroup}>
                        <TextInput
                            style={globalStyle.input}
                            placeholder='Email'
                            value={props.values.email}
                            onChangeText={props.handleChange('email')}
                            onBlur={props.handleBlur('email')}
                        />
                        {/*props.touched.email && <Text style={globalStyle.error} >{emailErrors.current.value}</Text>*/}
                        {props.touched.email && props.errors.email && <Text style={globalStyle.error}>{ props.errors.email}</Text>}
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
                    <Button
                        title='Sign In'
                        onPress={props.handleSubmit}
                    />
                    <Text style={globalStyle.link} onPress={()=>navigation.navigate('SignUp')} >Create Account</Text>
                </View>
        )}}
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