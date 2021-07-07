import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import Post from "../post/Post";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../services/post.service";

export default function UserPosts() {

    const posts = useSelector(({posts}) => posts);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        if(posts.isEmpty){
            getPosts().then(value => dispatch({type:'ADD_POSTS',payload: value.data}));
        }

       }, []);


    return (
        <div>
            {
                posts.value.filter(value => value.userId==id).map(value => <Post key={value.id} item={value}/>)
            }

        </div>
    );
}