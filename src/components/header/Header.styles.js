import { StyleSheet } from 'react-native';
import { bodyColor, itemColor, textColor } from '../../globals/globalStyles';

export default StyleSheet.create({

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: bodyColor,
        paddingTop: 10,
        paddingHorizontal: 18,
    },
    barsIcon: {
        padding: 12,
    },
    headerText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: textColor,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonIcon: {
        backgroundColor: itemColor,
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 18,
        marginRight: 8,
    },

});
