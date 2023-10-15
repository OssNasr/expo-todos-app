import { StyleSheet } from 'react-native';
import { bodyColor, itemColor, textColor } from '../../globals/globalStyles';
   
   
     
export default StyleSheet.create({
    todoItem: {  
        backgroundColor: itemColor,
        borderRadius: 8,
        marginTop: 16,      
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 14
    },           
    controls: {  
        flexDirection: 'row',
        alignItems: 'center',
    },           
    icon: {      
        padding: 8
    },
});     
