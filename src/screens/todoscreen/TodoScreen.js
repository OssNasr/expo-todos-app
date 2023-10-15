import React from 'react';
import { View, Text } from 'react-native';
import styles from './TodoScreen.style.js';
import TodoItems from '../../components/todoItems/TodoItems';
import { getTodos } from '../../api/database';

const TodoScreen = () => {

    getTodos();

    const { wrapper } = styles;

    return (
        <View style={wrapper}>
            <TodoItems />
        </View>
    )
}

export default TodoScreen;
