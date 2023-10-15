import React from 'react';
import { FlatList, View } from 'react-native';
import styles from './ListTodos.styles';
import { textColor } from '../../globals/globalStyles';

import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Feather, FontAwesome } from '@expo/vector-icons';



export default function ListTodos({ todos, editTodo, deleteTodo, toggle}) {


    function renderTodo({ item }) {
        return (
            <View style={styles.todoItem}>
                <BouncyCheckbox
                    innerIconStyle={{borderColor: 'white'}}
                    fillColor={textColor}
                    text={item.task}
                    textStyle={{color: 'white', fontSize: 22}}
                    style={{paddingVertical: 16, borderRadius: 8, flex: 1}}
                    onPress={() => toggle(item, 'done')}
                />

                <View style={styles.controls}>
                    <Feather name="edit" color="white" size={24} style={styles.icon} onPress={() => editTodo(item)} />
                    <Feather name="trash-2" color="white" size={24} style={styles.icon} onPress={() => deleteTodo(item.id)} />
                    <FontAwesome name={item.important ? "star" : "star-o"}
                        color="white" size={24} style={styles.icon}
                        onPress={() => toggle(item, 'important')} />
                </View>
            </View>
            );
        }

    return (
            <FlatList
                data={todos}
                renderItem={renderTodo}
                />
    );
}
