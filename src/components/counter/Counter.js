import {useDispatch, useSelector} from 'react-redux'
import {useState} from "react";

export default function Counter() {
    const counter = useSelector(({counter: {value}}) => value)
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const incOnClick=()=>dispatch({type: 'INC'});
    const decOnClick=()=>dispatch({type: 'DEC'});
    const resOnClick=()=>dispatch({type: 'RES'});
    const onChange=({target: {value}}) => setInputValue(value);
    const userOnClick=()=>dispatch({type: 'INC_CAST', payload: inputValue});



    return (
        <div>
            <button onClick={incOnClick}>inc</button>
            <button onClick={decOnClick}>dec</button>
            <button onClick={resOnClick}>reset</button>
            <br/>
            <label>Збільшити на:<input type='number' name={'step'} placeholder={'step'} value={inputValue} onChange={onChange}/></label>
            <button onClick={userOnClick}>збільшити</button>

            <h1>{counter}</h1>


        </div>
    );

}