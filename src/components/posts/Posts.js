import Post from "../post/Post";

export default function Posts({items,appFn}) {



    return (
        <div>
            {
                items.map((value) => <Post key={value.id} item={value} fnFather={appFn}/>)
            }

        </div>
    );
}

