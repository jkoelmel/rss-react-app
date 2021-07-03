import {useState} from "react";
import {
    Backdrop,
    Card,
    CardActionArea,
    CardContent,
    CardMedia, Fade,
    Grid,
    Hidden, IconButton, makeStyles,
    Modal,
    Typography
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import noImage from "../assets/no_image.jpg";
import CloseSharpIcon from "@material-ui/icons/CloseSharp";
import styled from 'styled-components';

const StyledModal = styled(Modal)`
  .MuiBackdrop-root {
    background-color: rgba(12,10,12,0.85);
  }
`;

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        height: 170,
        borderColor: '#212328',
        textOverflow: 'ellipsis',
        background: 'linear-gradient(to right, #1c171d 0%, #19191e 100%)',
        borderRadius: 15,
        '&:hover': {
            background: 'linear-gradient(to left, #202025, #231e24 0%)'
        },
    },
    actionArea: {
        '&:hover $focusHighlight': {
          opacity: 0,
      },
    },
    focusHighlight: {},
    cardDetails: {
        flex: 1,
        marginTop: -10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    media: {
        width: '25%',
        height: 'auto',
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        borderRadius: '15px 0 0 15px'
    },
    title: {
        color: '#F9C01C',
        fontSize: 18,
        fontFamily: 'ap_text_condensed',
        lineHeight: 1.25,
        marginTop: 12,
        marginRight: 20,
        marginBottom: 4
    },
    date: {
        color: '#FFFFFF',
        opacity: 0.5,
        fontSize: 15,
        fontFamily: 'ap_text_condensed_lt',
        marginBottom: 7,
        lineHeight: 1.38,
    },
    text: {
        display: 'inline-block',
        color: '#FFF8E9',
        textOverflow: 'ellipsis',
        fontFamily: 'ap_text_condensed_lt',
        fontSize: 16,
        lineHeight: 1.3,
    },
    link: {
        ...theme.typography.button,
        marginTop: 25,
    },
    modal: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 110,
        maxWidth: 708,
        maxHeight: 600,
        borderRadius: 16,
        marginLeft: 'calc(50% - 354px)',
        width: 708,
        height: 530,
    },
    modalCard: {
        display: 'flex',
        flexDirection: 'column',
        height: 530,
        maxWidth: 708,
        background: 'linear-gradient(to right, #231d22 0%, #1f2024 100%)',
        boxShadow: theme.shadows[10],
        overflowY: 'auto',
        scrollBar: '#212328',
        outline: 0,
        borderRadius: 16
    },
    modalImg: {
        maxHeight: 216,
        maxWidth: 330,
        marginLeft: 44,
        marginBottom: 24,
        borderRadius: 15,
        alignSelf: 'left'
    },
    modalTitle: {
        marginTop: -24,
        marginBottom: '0.5rem',
        marginLeft: 44,
        marginRight: 44,
        color: '#F9C01C',
        fontSize: 20,
        fontFamily: 'ap_text_condensed_lt',
        lineHeight: 1.25
    },
    modalTime: {
        color: '#FFFFFF',
        opacity: 0.5,
        fontSize: 16,
        fontFamily: 'ap_text_condensed_lt',
        alignSelf: 'left',
        marginLeft: 44,
        marginBottom: 20,
    },
    modalText: {
        color: '#FFF8E9',
        fontSize: 18,
        fontFamily: 'ap_text_condensed_lt',
        lineHeight: 1.35,
        marginLeft: 44,
        marginRight: 44,
        marginBottom: 24
    },
    modalLink: {
        display: 'inline-flex',
        alignSelf: 'flex-start',
        fontSize: 16,
        color: '#FFFFFF',
        marginLeft: 44,
        marginBottom: 16, padding:
            '8px 16px 6px 16px',
        background: 'linear-gradient(270deg, #89435a 30%, #444354 90%)',
        borderRadius: 16,
        '&:hover': {
            backgroundColor: '#89435a',
            opacity: 0.8
        }
    },
    modalCloseTop: {
        color: '#FFFFFF',
        alignSelf: 'flex-end',
        marginRight: 16,
        marginTop: 12
    },
    modalMobile: {
        display: "flex",
        width: '100vw',
        height: 'auto',
        alignItems: 'center'
    },
    modalCardMobile: {
        display: 'flex',
        flexDirection: 'column',
        height: '65vh',
        minHeight: 0,
        maxHeight: 500,
        background: 'linear-gradient(to right, #231d22 0%, #1f2024 100%)',
        overflowY: 'auto',
        outline: 'none',
        borderRadius: 16,
    },
    modalTitleMobile: {
        color: '#F9C01C',
        fontSize: 18,
        fontFamily: 'ap_text_condensed_lt',
        lineHeight: 1.25,
        margin: '0 22px 8px 22px'
    },
    modalTimeMobile: {
        color: '#FFFFFF',
        opacity: 0.5,
        fontSize: 18,
        fontFamily: 'ap_text_condensed_lt',
        marginLeft: 22,
        marginBottom: 6
    },
    modalImgMobile: {
        maxHeight: 145,
        maxWidth: 220,
        marginLeft: 22,
        marginBottom: 12,
        borderRadius: 15,
        alignSelf: 'left'
    },
    modalTextMobile: {
        color: '#FFF8E9',
        fontSize: 20,
        fontFamily: 'ap_text_condensed_lt',
        lineHeight: 1.25,
        margin: '6px 22px 22px 22px'
    },
    modalLinkMobile: {
        display: 'inline-flex',
        alignSelf: 'flex-start',
        fontSize: 16,
        color: '#FFFFFF',
        marginLeft: 22,
        marginBottom: 6,
        padding: '8px 12px 8px 12px',
        backgroundColor: '#89435a',
        borderRadius: 16,
        '&:hover': {
            backgroundColor: '#444354'
        }
    },
    modalCloseTopMobile: {
        color: '#FFFFFF',
        alignSelf: 'flex-end',
        position: 'relative'
    },
}));


const NewsCard = ({post}) => {

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const img = (post.enclosure !== undefined) ? (post.enclosure.url) : noImage;
    const titleLength = post.title.split(' ').length;
    const title = (titleLength > 12) ? post.title.split(' ').slice(0, 12).join(' ') + '...' : post.title;
    const previewText = (post.content.length > 150) ? post.content.slice(0, 150).split(' ').slice(0, -1).join(' ') + '...'
        : post.content + '...';
    const modalText = (post.content.length > 500) ? post.content.slice(0, 500).split(' ').slice(0, -1).join(' ') + '...'
        : post.content + '...';
    const mobileText = previewText.slice(0, 100).split(' ').slice(0, -1).join(' ');
    const time = new Date(post.isoDate).toTimeString().split(" ")[0];
    let normieTime;

    // Add normie time for ComfyDude.... :/
    if (parseInt(time.slice(0, 2)) > 12) {
        normieTime = (time.slice(0, 2) - 12) + time.slice(2) + ' PM'
    } else if (parseInt(time.slice(0, 2)) === 12) {
        normieTime = time + ' PM'
    } else if (parseInt(time.slice(0, 2)) === 0) {
        normieTime = 12 + time.slice(2) + ' AM'
    } else {
        normieTime = time + ' AM'
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea onClick={() => handleOpen()}
                            style={{borderRadius: 15}} classes={{
                                root: classes.actionArea,
                                focusHighlight: classes.focusHighlight
            }}>
                <Card className={classes.card} variant='outlined'>
                    <Hidden xsDown>
                        <CardMedia className={classes.media}
                                   component="img"
                                   src={img}/>
                    </Hidden>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography className={classes.title} gutterBottom>
                                {title}
                            </Typography>
                            <Typography className={classes.date} variant='subtitle1'>
                                {normieTime}
                            </Typography>
                            <Hidden xsDown>
                                <Typography className={classes.text} variant='body1' paragraph>
                                    {previewText}
                                </Typography>
                            </Hidden>
                            <Hidden smUp>
                                <Typography className={classes.text} variant='body1' paragraph>
                                    {mobileText}...
                                </Typography>
                            </Hidden>
                        </CardContent>
                    </div>
                </Card>
            </CardActionArea>
            {/*Modal for tablet and desktop sizes*/}
            <Hidden xsDown>
                <StyledModal
                    aria-labelledby='transition-modal-title'
                    aria-describedby='transition-modal-description'
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Card className={classes.modalCard}>
                            <IconButton className={classes.modalCloseTop} onClick={handleClose}>
                                <CloseSharpIcon/>
                            </IconButton>
                            <Typography className={classes.modalTitle}>
                                {post.title}
                            </Typography>
                            <Typography className={classes.modalTime} variant='subtitle1' gutterBottom>
                                {normieTime}
                            </Typography>
                            <CardMedia className={classes.modalImg}
                                       component="img"
                                       src={img}/>
                            <Typography className={classes.modalText} paragraph>
                                {'\t' + modalText}
                            </Typography>
                            <Button href={post.link} target='_blank' rel='noreferrer'
                                  className={classes.modalLink}>Continue Reading</Button>
                        </Card>
                    </Fade>
                </StyledModal>
            </Hidden>
            {/*Modal for mobile*/}
            <Hidden smUp>
                <StyledModal
                    aria-labelledby='transition-modal-title'
                    aria-describedby='transition-modal-description'
                    className={classes.modalMobile}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Card className={classes.modalCardMobile}>
                            <IconButton className={classes.modalCloseTopMobile} onClick={handleClose}>
                                <CloseSharpIcon/>
                            </IconButton>
                            <Typography className={classes.modalTitleMobile}>
                                {post.title}
                            </Typography>
                            <Typography className={classes.modalTimeMobile} variant='subtitle1'>
                                {normieTime}
                            </Typography>
                            <CardMedia className={classes.modalImgMobile}
                                       component="img"
                                       src={img}/>
                            <Typography variant={'body1'} className={classes.modalTextMobile}>
                                {'\t' + modalText}
                            </Typography>
                            <Button href={post.link} target='_blank' rel='noreferrer'
                                    className={classes.modalLinkMobile}>Continue Reading</Button>
                        </Card>
                    </Fade>
                </StyledModal>
            </Hidden>
        </Grid>
    )
};

export default NewsCard;