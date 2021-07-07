import {Link} from "react-router-dom";

export default function Todo({item:{id, title}}) {

    return (
        <div>
            {id} - {title}
        </div>
    );
}