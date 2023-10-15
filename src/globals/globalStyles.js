import { StyleSheet } from 'react-native';

export const headerColor = '#212121';
export const bodyColor = '#303030';
export const itemColor = '#424242';
export const textColor = '#88f';


export const modalStyles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#999c',
    },
    modalContent: {
        width: '85%',
        backgroundColor: '#fffc',
        padding: 16,
        borderRadius: 8,
    },
    modalTitle: {
        fontSize: 24,
        marginVertical: 16,
    },
    modalInput: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        padding: 8,
        marginVertical: 8,
        fontSize: 20
    },
    modalFooter: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 16
    },
    modalButton: {
        borderRadius: 8,
        padding: 8,
        margin: 8,
        width: 80,
        textAlign: 'center',
    },
    cancle: {
        color: 'white',
        backgroundColor: 'gray',
    },
    submit: {
        color: 'white',
        backgroundColor: '#0069d9',
    },
});
