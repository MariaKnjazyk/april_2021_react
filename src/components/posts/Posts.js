import {useEffect, useState} from 'react';
import {getPosts} from '../../services/post.service';
import {Route} from 'react-router-dom';
import Post from "../post/Post";
import PostComments from "../postComments/PostComments";

export default function Posts() {

    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(value => setPosts([...value.data]));
    }, []);

    return (
        <div>
            {posts.map(value => <Post key={value.id} item={value} ln={true}/>)}
            <hr/>

            <Route path={'/posts/:id/comments'} component={PostComments}/>

        </div>
    );
}