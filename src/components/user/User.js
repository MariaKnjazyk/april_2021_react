import {Link} from 'react-router-dom';

export default function User({item}) {


    return (
        <div>
            {item.name} - <Link to={'/users/' + item.id+ '/posts'}>user's posts</Link>
        </div>
    );
}