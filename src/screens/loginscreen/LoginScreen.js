import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Formik } from 'formik';
import { object, required, min, string } from 'yup';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import styles from './LoginScreen.style.js'

const loginSchema = object({
    email: string().required().email(),
    password: string().required().min(8)
});

export default function LoginScreen({ navigation }) {

    const [passwordVisibility, setPasswordVisibility] = React.useState(false);

    function togglePasswordVisibility() {
        setPasswordVisibility( passwordVisibility => !passwordVisibility )
    }

    function handleSubmit(values) {
        navigation.navigate('drawerScreens');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Login</Text>

            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={loginSchema}
                >
                { props => (
                    <View style={styles.formWrapper}>
                        <View style={styles.inputWidget}>
                            <Text>Email:</Text>
                            <TextInput placeholder="Enter Email"
                                onChangeText={props.handleChange('email')}
                                onBlur={props.handleBlur('email')}
                                style={styles.textInput}
                                value={props.values.email} />
                                <Text style={styles.errorText}>{ props.touched.email && props.errors.email }</Text>
                                
                        </View>

                        <View style={styles.inputWidget}>
                            <Text>Password:</Text>
                            <TextInput placeholder="Enter password"
                                onChangeText={props.handleChange('password')}
                                onBlur={props.handleBlur('password')}
                                secureTextEntry={!passwordVisibility}
                                style={styles.textInput} />
                                <Text style={styles.errorText}>{ props.touched.password && props.errors.password }</Text>
                        </View>

                        <BouncyCheckbox text="Show Password" onPress={togglePasswordVisibility}
                            fillColor="gray"
                            iconStyle={{ borderRadius: 4 }}
                            textStyle={{ textDecorationLine: 'none' }}
                            innerIconStyle={{ borderRadius: 4, borderColor: 'gray' }}
                        />

                        <TouchableOpacity style={styles.loginButton} onPress={props.handleSubmit}>
                            <Text style={styles.loginButtonText}>
                                SIGN IN
                            </Text>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => console.log('Forgot Password Process')}>
                            <Text style={styles.helpText}>
                                Forgot Username / Password?
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => console.log('Sign Up Process')}>
                            <Text style={styles.helpText}>
                                Don't have an account? Sign up
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        
        </View>
    )
}

