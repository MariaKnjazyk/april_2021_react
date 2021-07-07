import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import Comment from "../comment/Comment";
import {useDispatch, useSelector} from "react-redux";
import {getComments} from "../../services/comment.service";

export default function PostComments() {
    const comments = useSelector(({comments}) => comments);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        if(comments.isEmpty){
            getComments().then(value => dispatch({type:'ADD_COMMENTS',payload: value.data}));
        }

    }, []);

    console.log(comments)

    return (
        <div>
            {
                comments.value.filter(value => value.postId==id).map(value => <Comment key={value.id} item={value}/>)
            }

        </div>
    );
}