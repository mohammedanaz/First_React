import React, {useState} from "react";

export default function ComponentTwo(props){
    const [rdm, setRdm] = useState(0)
    const [textColor, setColor] = useState('black')
    return (
        <>
        <h1 style={{color: textColor}}>My name is: {props.name}</h1>
        <h1 style={{color: textColor}}>Random number is: {rdm}</h1>
        <button onClick={()=> setRdm(Math.floor(Math.random()*100))}>Refresh</button>
        <br />
        <button onClick={()=> setColor('blue')}>Text Blue</button>
        <button onClick={()=> setColor('red')}>Text Red</button>
        </>
    )
}