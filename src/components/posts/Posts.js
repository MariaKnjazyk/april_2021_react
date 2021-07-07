import {useEffect, useState} from 'react';
import {getPosts} from '../../services/post.service';
import {Route} from 'react-router-dom';
import Post from "../post/Post";
import PostComments from "../postComments/PostComments";
import {useDispatch, useSelector} from "react-redux";

export default function Posts() {

    const posts = useSelector(({posts}) => posts);
    const dispatch = useDispatch();

    useEffect(() => {
        if(posts.isEmpty){
           getPosts().then(value => dispatch({type:'ADD_POSTS',payload: value.data}));
        }
    }, []);

    return (
        <div>
            {posts.value.map(value => <Post key={value.id} item={value} ln={true}/>)}
            <hr/>

            <Route path={'/posts/:id/comments'} component={PostComments}/>

        </div>
    );
}