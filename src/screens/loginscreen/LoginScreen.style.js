import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: '5%',
        backgroundColor: 'white',
    },
    header: {
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 18,
    },
    formWrapper: {
        width: '100%',
    },
    inputWidget: {
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginVertical: 6
    },
    loginButton: {
        alignItems: 'center',
        backgroundColor: '#317295',
        paddingVertical: 20,
        marginVertical: 20,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    helpText: {
        textAlign: 'center',
        marginTop: 8,
    },
    errorText: {
        color: 'crimson',
        textAlign: 'center',
    },
})
