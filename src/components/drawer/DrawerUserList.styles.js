import { StyleSheet } from 'react-native';
import { bodyColor, itemColor, textColor, modalStyles } from '../../globals/globalStyles';


export default StyleSheet.create({
    userListContainer: {
        flex: 1,
        width: '100%',
        marginTop: 18,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12
    },
    listItemText: {
        color: 'white',
        marginLeft: 12,
        marginRight: 'auto',
    },
    todosCount: {
        color: 'white',
    },
    addListButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 'auto',
        padding: 10,
    },
    addListButtonText: {
        color: 'white',
        fontSize: 22,
        marginLeft: 16,
        marginRight: 'auto'
    },
    addTodoButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        marginVertical: 20,
        backgroundColor: itemColor,
        borderRadius: 8,
    },
    addTodoText: {
        color: textColor,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 16,
    },
    ...modalStyles,
});
