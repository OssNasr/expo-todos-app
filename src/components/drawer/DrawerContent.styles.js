import { StyleSheet } from 'react-native';
import { bodyColor, itemColor, textColor } from '../../globals/globalStyles';

export default StyleSheet.create({
    wrapper: {
        backgroundColor: '#2A3955',
        width: '100%',
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userInfo: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignItems: 'center',
        padding: 12
    },
    userImage: {
        width: 44,
        height: 44,
        borderRadius: 50,
        marginRight: 16
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    userEmail: {
        color: 'white'
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 16,
        paddingLeft: 16,
        padding: 8,
        marginVertical: 18,
        marginHorizontal: 12
    },
    searchInput: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 18,
    },

    border: {
        width: '80%',
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 8,
    },

});
