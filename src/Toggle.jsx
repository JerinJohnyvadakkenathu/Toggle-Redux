import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import { actionBlue, actionRed } from './Action';
const Toggle=()=>{
    const value=useSelector((state)=>state.toggle.current)
    const dispatch=useDispatch();
    console.log(value)
    return(
        <>
        <h1>{value}</h1>
        <button onClick={()=>dispatch(actionRed)} style={{backgroundColor:value?'red':'blue'}}>Red</button>
        <button onClick={()=>dispatch(actionBlue)} style={{backgroundColor:value?'red':'blue'}}>Blue</button>
        </>
    )
}

export default Toggle
