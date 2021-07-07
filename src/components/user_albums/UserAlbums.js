import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Album from "../album/Album";
import {getAlbums} from "../../services/photos.service";

export default function UserAlbums() {

    const albums = useSelector(({albums}) => albums);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        if(albums.isEmpty){
            getAlbums().then(value => dispatch({type:'ADD_ALBUMS',payload: value.data}));
        }

       }, []);


    return (
        <div>
            {
                albums.value.filter(value => value.userId==id).map(value => <Album key={value.id} item={value}/>)
            }

        </div>
    );
}