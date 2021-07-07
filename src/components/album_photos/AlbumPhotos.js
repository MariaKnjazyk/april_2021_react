import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPhotos} from "../../services/albums.service";
import Photo from "../photo/Photo";

export default function AlbumPhotos() {

    const photos = useSelector(({photos}) => photos);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        if(photos.isEmpty){
            getPhotos().then(value => dispatch({type:'ADD_PHOTOS',payload: value.data}));
        }

       }, []);


    return (
        <div>
            {
                photos.value.filter(value => value.albumId==id).map(value => <Photo key={value.id} item={value}/>)
            }

        </div>
    );
}