import React from 'react';
import {Button} from "@mui/material";

function EmojiBullet(props) {
    const {emoji, text} = props;

    return (
        <Button variant="outlined">{emoji} {text}</Button>
        
    );
}

export default EmojiBullet;