import { useEffect } from 'react';
import axios from 'axios';
import { todoListsAtom, todosAtom } from '../globals/globalState';
import { useSetRecoilState } from 'recoil';

function getTodos() {

    const setTodos = useSetRecoilState( todosAtom );
    const setTodoLists = useSetRecoilState( todoListsAtom );

    useEffect(function(){
        axios.get('https://api.restful-api.dev/objects/ff8081818b1b4123018b2b25fcf61707',)
            .then( res => {
                let todos = res.data.data;
                setTodos(todos) 

                let todoLists = [];
                for ( todo of todos )
                    if ( todoLists.indexOf(todo.list) === -1 )
                        todoLists.push( todo.list )
                setTodoLists( todoLists );

            });
    }, []);
}

function updateTodos(todos) {
    axios.patch('https://api.restful-api.dev/objects/ff8081818b1b4123018b2b25fcf61707', {
        data: todos
        })
        .then( res => console.log(res.status) )
}



export { getTodos, updateTodos };
