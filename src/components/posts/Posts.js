import {useEffect, useState} from "react";
import {getPostComm, getItems} from "../../services/API";
import Post from "../post/Post";
import Comment from "../comment/Comment";

export default function Posts() {
    let [postComm, setPostComm]=useState();
    let postFn=(id)=>{
        getPostComm(id).then(value=>setPostComm(value));
    };

    let [posts, setPosts]=useState([]);
    useEffect(()=>{
        getItems('posts').then(value => setPosts(value));
    },[]);



    return (
        <div>
            {
                posts.map((value) => <Post key={value.id} item={value} fnFather={postFn}/>)
            }

            <hr/>
            {
                postComm && postComm.map(value=><Comment key={value.id} item={value}/>)
            }

        </div>
    );
}

