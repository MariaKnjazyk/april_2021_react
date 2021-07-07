import {Link} from "react-router-dom";

export default function Photo({item:{id, url}}) {

    return (
        <div>
            {id} - {url}
        </div>
    );
}