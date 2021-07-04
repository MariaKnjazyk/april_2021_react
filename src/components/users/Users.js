import {useEffect, useState} from 'react';
import {getUsers} from '../../services/user.service';
import User from '../user/User';
import {Route, Switch} from 'react-router-dom';
import UserDetails from '../user_details/UserDetails';
import UserDetails2 from '../user_details2/UserDetail2';

export default function Users() {

    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]));
    }, []);

    return (
        <div>
            {users.map(value => <User key={value.id} item={value}/>)}

            {/*<Route path={'/users/:id'} component={UserDetails}/>*/}
            <Route path={'/users/:id'} component={UserDetails2}/>

        </div>
    );
}