import React from 'react';
import {Button} from "@mui/material";

function EmojiBullet(props) {
    const {emoji, text, link} = props;

    return (
        <Button style={{textTransform: 'none'}} variant="outlined" href={link} target="_blank">{emoji} {text}</Button>
    );
}

export default EmojiBullet;