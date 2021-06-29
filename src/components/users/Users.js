import User from '../user/User';
import Post from '../post/Post'
import {useEffect, useState} from "react";
import {getUserPosts, getItems} from "../../services/API";

export default function Users() {

    let [userPosts, setUserPosts]=useState();
    let userFn=(id)=>{
        getUserPosts(id).then(value=>setUserPosts(value));
    };
    let [users, setUsers]=useState([]);
    useEffect(()=>{
        getItems('users').then(value => setUsers(value));
    },[]);

    return (
        <div>
            {
                users.map((value) => <User key={value.id} item={value} fnFather={userFn}/>)
            }

            <hr/>
            {
                userPosts && userPosts.map(value=><Post key={value.id} item={value}/>)
            }

        </div>
    );
}

