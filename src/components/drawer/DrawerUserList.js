import React from 'react';
import { FlatList, Keyboard, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import styles from './DrawerUserList.styles';
import { todoListsAtom, selectedListAtom, todosAtom } from '../../globals/globalState';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';

export default function DrawerUserList({ navigation }) {

    const [modalVisibility, setModalVisibility] = React.useState(false);
    const inputRef = React.useRef(null);
    const [todoListInput, setTodoListInput] = React.useState('');

    const [todoLists, setTodoLists] = useRecoilState( todoListsAtom );

    function addTodoList() {
        setTodoLists( oldTodoLists => {
            let newTodoLists;
            if ( oldTodoLists.indexOf( todoListInput ) === -1 )
                return [ ...oldTodoLists, todoListInput ]
            return oldTodoLists;
        });
        setTodoListInput('');
        setModalVisibility(false);
    }

    const todos = useRecoilValue( todosAtom );

    const [selectedList, setSelectedList] = useRecoilState( selectedListAtom );

    function showTodoList(list) {
        setSelectedList(list);
        navigation.closeDrawer();
    }

    return (
        <View style={styles.userListContainer}>

            <FlatList
                data={todoLists}
                renderItem={({item}) => (
                    <ScrollView>
                        <TouchableOpacity
                            style={[styles.listItem, {backgroundColor: item == selectedList ? '#6666' : 'transparent' }]}
                            onPress={() => showTodoList(item)}>

                            <Feather name="list" color="#6A76B2" size={28} />
                            <Text style={styles.listItemText}>{ item }</Text>
                            <Text style={styles.todosCount}>{ todos.filter( todo => todo.list == item ).length }</Text>
                        </TouchableOpacity>
                    </ScrollView>
                )}
                />

            <TouchableOpacity style={styles.addListButton} onPress={() => setModalVisibility(true)}>
                <Feather name="plus" color="white" size={26} />
                <Text style={styles.addListButtonText}>New List</Text>
                <MaterialIcons name="post-add" color="white" size={26} />
            </TouchableOpacity>

            <Modal
                visible={modalVisibility}
                transparent={true}
                animationType="fade"
                onShow={() => inputRef.current.focus()}
                >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modal}>
                        <View style={styles.modalContent}>

                            <Text style={styles.modalTitle}>
                                Add a New List
                            </Text>

                            <TextInput placeholder="Todo List Title..."
                                ref={inputRef}
                                style={styles.modalInput}
                                onChangeText={ value => setTodoListInput(value) }
                                value={todoListInput}
                                />

                            <View style={styles.modalFooter}>
                                <TouchableOpacity onPress={() => setModalVisibility(false)}>
                                    <Text style={[styles.modalButton, styles.cancle]}>
                                        Cancle
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={addTodoList}>
                                    <Text style={[styles.modalButton, styles.submit]}>
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


