export default function Post({item, fnFather}) {

    return (
        <div>
            {item.id} - {item.title}
            {fnFather && <button
                onClick={
                    ()=> fnFather(item.id)

                }>Comments</button>}

        </div>
    );
}