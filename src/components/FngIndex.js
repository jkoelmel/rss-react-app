import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Link, makeStyles, Typography, withStyles} from "@material-ui/core";
import LinearProgress from '@material-ui/core/LinearProgress';

const CustomLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        width: 325,
        borderRadius: 5,
        margin: '5px 10px 5px 20px',
    },
    colorPrimary: {
        background: 'linear-gradient(270deg, rgba(125,253,255,1) 0%, rgba(137,67,90,1) 75%)',
        color: '#202020',
    },
    bar: {
        borderRadius: 5,
        background: 'linear-gradient(90deg, rgba(101,100,96,1) 10%, rgba(46,44,44,1) 90%)',


    }
}))(LinearProgress);

const useStyles = makeStyles((theme) => ({
    text: {
        color: '#fff8e9',
        marginLeft: 20,
        marginTop: 10,
        fontFamily: 'ap_text_condensed_lt',
        fontSize: 16,
        letterSpacing: 1.2,
    }
}));

const FngIndex = () => {

    const classes = useStyles()
    const [fng, setFng] = useState('')
    const [classification, setClassification] = useState('')

    const getIndex = async () => {
        const data = await axios('https://api.alternative.me/fng/?limit=1')
        return data;
    }

    useEffect(() => {
        getIndex().then(res => {
            setFng(res.data.data[0].value)
            setClassification(res.data.data[0].value_classification)
        })
    }, [])

    return (
        <div>
            <Typography className={classes.text}>
                <Link href='https://alternative.me/crypto/fear-and-greed-index/' target='_blank'
                variant='inherit' color='inherit'>
                    Fear vs Greed Index: {fng} ({classification})
                </Link>
            </Typography>
            <CustomLinearProgress
                value={fng} variant='determinate' />
        </div>
    )
}

export default FngIndex;