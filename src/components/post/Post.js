export default function Post({item:{id, title}}) {

    return (
        <div>
            {id} - {title}
        </div>
    );
}