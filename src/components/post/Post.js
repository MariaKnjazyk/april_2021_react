export default function Post({item, fnFather}) {

    return (
        <div>
            {item.id} - {item.title} -
            <button
                onClick={
                    ()=> fnFather(item.id)

                }>Info</button>

        </div>
    );
}