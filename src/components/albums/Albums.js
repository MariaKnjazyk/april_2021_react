import {useEffect} from 'react';
import {Route} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getAlbums} from "../../services/photos.service";
import Album from "../album/Album";
import AlbumPhotos from "../album_photos/AlbumPhotos";

export default function Albums() {

    const albums = useSelector(({albums}) => albums);
    const dispatch = useDispatch();

    useEffect(() => {
        if(albums.isEmpty){
           getAlbums().then(value => dispatch({type:'ADD_ALBUMS',payload: value.data}));
        }
    }, []);

    return (
        <div>
            {albums.value.map(value => <Album key={value.id} item={value} ln={true}/>)}
            <hr/>

            <Route path={'/albums/:id/photos'} component={AlbumPhotos}/>

        </div>
    );
}