import {Link, Route} from 'react-router-dom';
import UserPosts from "../user_posts/UserPosts";

export default function User({item}) {

    return (
        <div>
            {item.name} - <Link to={'/users/' + item.id+ '/posts'}>user's posts</Link>
            <Route path={'/users/'+item.id+'/posts'} render={()=><UserPosts id={item.id}/>}/>
        </div>
    );
}