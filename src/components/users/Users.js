import {useEffect, useState} from 'react';
import {getUsers} from '../../services/user.service';
import User from '../user/User';
import {Route, Switch} from 'react-router-dom';
import UserPosts from '../user_posts/UserPosts';
import {useDispatch, useSelector} from "react-redux";
import UserTodos from "../user_todos/UserTodos";
import UserAlbums from "../user_albums/UserAlbums";


export default function Users() {

    const users = useSelector(({users}) => users);
    const dispatch = useDispatch();
    // let [users, setUsers] = useState([]);
    useEffect(() => {
        // getUsers().then(value => setUsers([...value.data]));
        if(users.isEmpty){
            getUsers().then(value => dispatch({type:'ADD_USERS',payload: value.data}));
        }
    }, []);

    return (
        <div>
            {users.value.map(value => <User key={value.id} item={value}/>)}
            <hr/>
        <Switch>
            <Route path={'/users/:id/posts'} component={UserPosts}/>
            <Route path={'/users/:id/todos'} component={UserTodos}/>
            <Route path={'/users/:id/albums'} component={UserAlbums}/>
        </Switch>

        </div>
    );
}