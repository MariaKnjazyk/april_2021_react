import {useEffect, useState} from "react";
import {getPostComm, getItems} from "../../services/API";
import Post from "../post/Post";
import Comment from "../comment/Comment";
import {useReducer} from "react";

function reducer(state, action){
    switch (action.type){
        case 'POST_COMM': return {...state, postComm:action.payload};
        case 'POSTS': return {...state, posts:action.payload};
        default: return {...state};
    }
}

export default function Posts() {
    let [state, dispatch]=useReducer(reducer, {postComm:[], posts:[]});

    let postFn=(id)=>{
        getPostComm(id).then(value=>dispatch({type:'POST_COMM', payload: value}));
    };

    useEffect(()=>{
        getItems('posts').then(value => dispatch({type:'POSTS',payload: value}));
    },[]);

    // let [postComm, setPostComm]=useState();
    // let postFn=(id)=>{
    //     getPostComm(id).then(value=>setPostComm(value));
    // };
    //
    // let [posts, setPosts]=useState([]);
    // useEffect(()=>{
    //     getItems('posts').then(value => setPosts(value));
    // },[]);



    return (
        <div>
            {
                state.posts.map((value) => <Post key={value.id} item={value} fnFather={postFn}/>)
            }

            <hr/>
            {
                state.postComm && state.postComm.map(value=><Comment key={value.id} item={value}/>)
            }

        </div>
    );
}

