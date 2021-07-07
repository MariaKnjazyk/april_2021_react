import {Link} from "react-router-dom";

export default function Album({item:{id, title}, ln}) {

    return (
        <div>
            {id} - {title} {ln &&  <Link to={'/albums/' + id+ '/photos'}>album's photos</Link>}
        </div>
    );
}