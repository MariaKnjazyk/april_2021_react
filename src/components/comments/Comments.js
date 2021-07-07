import {useEffect} from 'react';
import {getComments} from "../../services/comment.service";
import Comment from "../comment/Comment";
import {useDispatch, useSelector} from "react-redux";


export default function Comments() {

    const comments = useSelector(({comments}) => comments);
    const dispatch = useDispatch();

    useEffect(() => {
        if(comments.isEmpty){
            getComments().then(value => dispatch({type:'ADD_COMMENTS',payload: value.data}));
        }

    }, []);

    return (
        <div>
            {comments.value.map(value => <Comment key={value.id} item={value}/>)}

        </div>
    );
}