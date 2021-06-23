import './Menu.css';

export default function Menu(props){

    let {pages, classes}=props;
    console.log(pages);

    return (
        <div>
            <ul>
                {
                    pages.map(page => <li className={classes.join(' ')}>{page}</li>)
                }
            </ul>
            
            
        </div>
    );
    
}