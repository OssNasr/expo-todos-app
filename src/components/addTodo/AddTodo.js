import React from 'react';
import { Keyboard, Modal, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import { itemColor, textColor, modalStyles } from '../../globals/globalStyles';
import styles from './AddTodo.styles';

import { selectedListAtom, todosAtom } from '../../globals/globalState';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { updateTodos } from '../../api/database';

export default function AddTodo() {

    const [modalVisibility, setModalVisibility] = React.useState(false);
    const [todoInput, setTodoInput] = React.useState('');
    const inputRef = React.useRef();


    const selectedList = useRecoilValue( selectedListAtom );
    const setTodos = useSetRecoilState( todosAtom );

    function addTodoItem() {
        setTodos( oldTodos => {
            let newTodos = [...oldTodos, {
                    task: todoInput,
                    list: selectedList,
                    id: uuid(),
                    important: false,
                    done: false
                }]
            updateTodos( newTodos );
            return newTodos;
        });
            
        setModalVisibility(false);
        setTodoInput('');
    }

    const { addTodoButton, addTodoText, modal, modalContent, modalInput, modalFooter, modalButton, cancle, submit } = styles;

    return (
        <View>

            <TouchableOpacity style={addTodoButton} onPress={() => setModalVisibility(true)}>
                <Feather name="plus" color={textColor} size={24} />
                <Text style={addTodoText}>Add a Todo</Text>
            </TouchableOpacity>

            <Modal
                onShow={() => inputRef.current.focus()}
                visible={modalVisibility}
                transparent={true}
                animationType="fade">

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={modal}>
                        <View style={modalContent}>
                            <TextInput placeholder="Todo..."
                                    style={modalInput}
                                    ref={inputRef}
                                    value={todoInput}
                                    onChangeText={ value => setTodoInput(value) }
                                />

                            <View style={modalFooter}>
                                <TouchableOpacity onPress={() => setModalVisibility(false)}>
                                    <Text style={[modalButton, cancle]}>
                                        Cancel
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={addTodoItem}>
                                    <Text style={[modalButton, submit]}>
                                        Add
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
}

