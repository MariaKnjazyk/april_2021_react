import User from '../user/User';
import Post from '../post/Post'
import {useEffect, useState} from "react";
import {getUserPosts, getItems} from "../../services/API";
import {useReducer} from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'USER_POSTS': return {...state, userPosts: action.payload};
        case 'USERS': return {...state, users:action.payload};
        default: return {...state};
    }
}

export default function Users() {
    let [state, dispatch]=useReducer(reducer, {userPosts:[], users:[]})

    let userFn=(id)=>{
        getUserPosts(id).then(value=>dispatch({type:'USER_POSTS', payload: value}));
    };

    useEffect(()=>{
        getItems('users').then(value => dispatch({type:'USERS', payload: value}));
    },[]);


    // let [userPosts, setUserPosts]=useState();
    // let userFn=(id)=>{
    //     getUserPosts(id).then(value=>setUserPosts(value));
    // };
    // let [users, setUsers]=useState([]);
    // useEffect(()=>{
    //     getItems('users').then(value => setUsers(value));
    // },[]);

    return (
        <div>
            {
                state.users.map((value) => <User key={value.id} item={value} fnFather={userFn}/>)
            }

            <hr/>
            {
                state.userPosts && state.userPosts.map(value=><Post key={value.id} item={value}/>)
            }

        </div>
    );
}

