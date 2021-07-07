import {useEffect} from 'react';
import {Route} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getPhotos} from "../../services/albums.service";
import Photo from "../photo/Photo";

export default function Photos() {

    const photos = useSelector(({photos}) => photos);
    const dispatch = useDispatch();

    useEffect(() => {
        if(photos.isEmpty){
           getPhotos().then(value => dispatch({type:'ADD_PHOTOS',payload: value.data}));
        }
    }, []);

    return (
        <div>
            {photos.value.map(value => <Photo key={value.id} item={value} />)}
            <hr/>

            {/*<Route path={'/posts/:id/comments'} component={PostComments}/>*/}

        </div>
    );
}