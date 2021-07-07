import {useEffect} from 'react';
import {Route} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import Todo from "../todo/Todo";
import {getTodos} from "../../services/todos.service";

export default function Todos() {

    const todos = useSelector(({todos}) => todos);
    const dispatch = useDispatch();

    useEffect(() => {
        if(todos.isEmpty){
           getTodos().then(value => dispatch({type:'ADD_TODOS',payload: value.data}));
        }
    }, []);

    return (
        <div>
            {todos.value.map(value => <Todo key={value.id} item={value} />)}
            <hr/>

            {/*<Route path={'/posts/:id/comments'} component={PostComments}/>*/}

        </div>
    );
}