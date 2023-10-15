import { useState } from 'react';
import { atom, useRecoilValue } from 'recoil';
import axios from 'axios';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';



const todoListsAtom = atom({
    key: 'todoListsAtom',
    default: ['Today']
});

const selectedListAtom = atom({
    key: 'selectedTodoList',
    default: 'Today'
});

const todosAtom = atom({
    key: 'todoItemsAtom',
    default: []
});

export { todoListsAtom, selectedListAtom, todosAtom };
