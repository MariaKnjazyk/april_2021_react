import {useEffect, useState} from "react";
import {getItems} from "../../services/API";
import Comment from "../comment/Comment";

export default function Comments() {

    let [comments, setComments]=useState([]);
    useEffect(()=>{
        getItems('comments').then(value => setComments(value));
    },[]);



    return (
        <div>
            {
                comments.map((value) => <Comment key={value.id} item={value}/>)
            }
        </div>
    );
}

