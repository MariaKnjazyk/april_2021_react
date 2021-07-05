import {useEffect, useState} from 'react';
import {getUsers} from '../../services/user.service';
import User from '../user/User';
import {Route} from 'react-router-dom';
import UserPosts from '../user_posts/UserPosts';

export default function Users() {

    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]));
    }, []);

    return (
        <div>
            {users.map(value => <User key={value.id} item={value}/>)}
            <hr/>

            {/*<Route path={'/users/:id/posts'} component={UserPosts}/>*/}

        </div>
    );
}