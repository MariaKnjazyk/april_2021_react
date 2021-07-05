import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getUserPosts} from '../../services/user.service';
import Post from "../post/Post";

export default function UserPosts({id}) {

    let [userPosts, setUserPosts] = useState([]);
    // let {id} = useParams();
    console.log(id);
     useEffect(() => {
        getUserPosts(id).then(value => setUserPosts([...value.data]));
    }, [id]);


    return (
        <div>
            {
                userPosts.map(value => <Post key={value.id} item={value}/>)
            }

        </div>
    );
}