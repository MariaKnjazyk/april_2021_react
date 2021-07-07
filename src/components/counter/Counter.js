import {useDispatch, useSelector} from 'react-redux'
import {createRef} from "react";


export default function Counter(){

    const counter = useSelector(({counter: {value}}) => value)
    const dispatch = useDispatch();
    const step=createRef();

    return (
        <div>

            <button
                onClick={() => {
                    dispatch({type: 'INC'})
                }}
            >
                inc
            </button>

            <button
                onClick={() => {
                    dispatch({type: 'DEC'})
                }}
            >
                dec
            </button>

            <button
                onClick={() => {
                    dispatch({type: 'RES'})
                }}
            >
                reset
            </button>

            <br/>

            <form onSubmit={(e)=>{
                e.preventDefault();
                dispatch({type: 'INC_CAST', payload: step.current.value})}

            }>
                <label>
                    Збільшити на:
                    <input type="text" name={"step"} ref={step}/>
                </label>
                <button>
                    збільшити
                </button>
            </form>
            <h1>{counter}</h1>



        </div>
    );

}