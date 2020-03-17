import React, { useState } from 'react';


const MyButton = props => {
    // swaps the colors when this button is clicked
    function buttonClicked() {
        color === props.firstColor ? setColour(props.secondColor) : setColour(props.firstColor)
    }
    const [color, setColour] = useState(props.firstColor)
    // add button style properties here
    let buttonStyle = {
        background: color
    };
    return <button onClick={buttonClicked} style={buttonStyle}><img src={props.img}></img></button>

}

export default MyButton;