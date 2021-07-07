import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTodos} from "../../services/todos.service";
import Todo from "../todo/Todo";

export default function UserTodos() {

    const todos = useSelector(({todos}) => todos);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        if(todos.isEmpty){
            getTodos().then(value => dispatch({type:'ADD_TODOS',payload: value.data}));
        }

       }, []);


    return (
        <div>
            {
                todos.value.filter(value => value.userId==id).map(value => <Todo key={value.id} item={value}/>)
            }

        </div>
    );
}