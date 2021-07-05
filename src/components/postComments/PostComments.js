import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getPostComments} from "../../services/post.service";
import Comment from "../comment/Comment";

export default function PostComments() {

    let [postComments, setPostComments] = useState([]);
    let {id} = useParams();
    useEffect(() => {
        getPostComments(id).then(value => setPostComments([...value.data]));
    }, [id]);

    return (
        <div>
            {
                postComments.map(value => <Comment key={value.id} item={value}/>)
            }

        </div>
    );
}