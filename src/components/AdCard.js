import React from "react";
import {Card, CardMedia, Grid, Hidden} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import noImage from "../assets/no_image.jpg";

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        borderColor: '#212328',
        borderRadius: 15,
        height: 170,
    },
    cardDetails: {
        flex: 1,
        alignItems: 'center',
        borderRadius: '15px 15px 0 0',
        justifyContent: 'center'
    },
    media: {
        width: '25%',
        height: 'auto',
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        borderRadius: '15px 0 0 15px'
    },
    ad: {
        background: 'linear-gradient(to right, #1c171d 0%, #19191e 100%)',
        '&:hover': {
            background: 'linear-gradient(to left, #202025, #231e24 0%)'
        },
        border:0,
        padding:4,
        width:'100%',
        height:'100%',
        overflow:"hidden",
        allowTransparency:"true",
    }
}));


const AdCard = () => {

    const classes = useStyles();

    return (
        <Grid item xs={12} md={6}>
            <Card className={classes.card}>
                <Hidden xsDown>
                    <CardMedia className={classes.media}
                               component="img"
                               src={noImage}/>
                </Hidden>
                <div className={classes.cardDetails}>
                    <iframe title='banner-ad' data-aa="1689602"
                            src="//acceptable.a-ads.com/1689602?size=Adaptive&background_color=212328'&text_color=f9c01c&title_color=f9c01c&title_hover_color=fff8e9&link_color=fff8e9&link_hover_color=89435a"
                            scrolling="no" className={classes.ad}/>
                </div>
            </Card>
        </Grid>
    )
}

export default AdCard;