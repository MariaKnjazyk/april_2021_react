import {Link, Route} from 'react-router-dom';
import UserPosts from "../user_posts/UserPosts";

export default function User({item}) {

    return (
        <div>
            {item.id} - {item.name}
            /
            <Link to={'/users/' + item.id+ '/posts'}>user's posts</Link>
            /
            <Link to={'/users/' + item.id+ '/todos'}>user's todos</Link>
            /
            <Link to={'/users/' + item.id+ '/albums'}>user's albums</Link>
            {/*<Route path={'/users/'+item.id+'/posts'} render={()=><UserPosts id={item.id}/>}/>*/}
        </div>
    );
}