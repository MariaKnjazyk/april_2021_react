export default function Post(props){
    let {item: post}=props;
    
    return (
        <div>
            
            {post.id} - {post.title}
            
        </div>
    );
    
}