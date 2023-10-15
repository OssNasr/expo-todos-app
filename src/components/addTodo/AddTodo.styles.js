import { StyleSheet } from 'react-native';
import { itemColor, textColor, modalStyles } from '../../globals/globalStyles';



export default StyleSheet.create({
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
