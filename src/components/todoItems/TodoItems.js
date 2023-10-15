import React from 'react';
import { FlatList, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AddTodo from '../addTodo/AddTodo';
import styles from './TodoItems.styles';
import { modalStyles } from '../../globals/globalStyles';

import { selectedListAtom, todosAtom } from '../../globals/globalState';
import { useRecoilValue, useRecoilState } from 'recoil';
import { updateTodos } from '../../api/database';

import ListTodos from '../listTodos/ListTodos';

export default function TodoItems() {

    const selectedList = useRecoilValue( selectedListAtom );
    const [todos, setTodos] = useRecoilState( todosAtom );
    const selectedListTodos = todos.filter( todo => todo.list == selectedList );

    const [modalVisibility, setModalVisibility] = React.useState(false);
    const [todoInput, setTodoInput] = React.useState('');
    const inputRef = React.useRef();

    const [itemToEdit, setItemToEdit] = React.useState({});
    function showEditModal(item) {
        setModalVisibility(true);
        setTodoInput( item.task );
        setItemToEdit( item );
    }

    function editTodo() {
        setTodos( oldTodos => {
            let newTodos = oldTodos.filter( todo => todo.id != itemToEdit.id );
            let newTodoItem = { ...itemToEdit, task: todoInput };
            newTodos = [...newTodos, newTodoItem];
            updateTodos( newTodos );
            return newTodos;
        });
        setModalVisibility(false);
    }

    function deleteTodo(deletedTodoId) {
        setTodos( oldTodos => {
            let newTodos = oldTodos.filter( todo => todo.id != deletedTodoId )
            updateTodos( newTodos );
            return newTodos;
        });
    }

    function toggle(targetTodo, prop) {
        setTodos( oldTodos => {
            let newTodos = oldTodos.filter( todo => todo.id !== targetTodo.id );
            let importantTodo = {...targetTodo };
            importantTodo[prop] = !importantTodo[prop];

             newTodos = [...newTodos, importantTodo];
             updateTodos(newTodos);
            return newTodos;
        } );
    }

    const { modal, modalContent, modalTitle, modalInput, modalFooter, modalButton, cancle, submit } = modalStyles;

    return (
        <View style={styles.todosContainer}>

            <ListTodos
                todos={selectedListTodos}
                editTodo={showEditModal}
                deleteTodo={deleteTodo}
                toggle={toggle}
                />

            {/* Create */}
            {/* Add Todo Button and Logic */}

            <AddTodo />


            {/* Update */}
            {/* Edit todo, showing form in a modal, and save edits */}

            <Modal
                visible={modalVisibility}
                transparent={true}
                onShow={() => inputRef.current.focus()}
                >
                <View style={modal}>
                    <View style={modalContent}>
                        <Text style={modalTitle}>
                            Edit Todo
                        </Text>

                        <TextInput
                            value={todoInput}
                            onChangeText={setTodoInput}
                            ref={inputRef}
                            style={modalInput}
                            />
                        <View style={modalFooter}>
                            <TouchableOpacity onPress={() => setModalVisibility(false)}>
                                <Text style={[modalButton, cancle]}>
                                    Cancle
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={editTodo}>
                                <Text style={[modalButton, submit]}>
                                    Save
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>

        </View>
    );
}

