import {
    Backdrop,
    Card,
    CardActionArea,
    CardContent,
    CardMedia, Fade,
    Grid,
    Hidden, IconButton,
    makeStyles, Modal,
    Typography,
} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import {useState} from "react";
import Button from "@material-ui/core/Button";
import binance from '../assets/twitter/Binance.jpeg';
import binanceUS from '../assets/twitter/BinanceUS.jpeg';
import bloomberg from '../assets/twitter/BloombergCrypto.jpeg';
import coinbase from '../assets/twitter/Coinbase.png';
import coinbasePro from '../assets/twitter/CoinbasePro.png';
import coinbaseWallet from '../assets/twitter/CoinbaseWallet.png';
import comfytoken from '../assets/twitter/ComfyToken.png';
import cz from '../assets/twitter/CZ.jpeg';
import elon from '../assets/twitter/Elon.jpeg';
import forbes from '../assets/twitter/Forbes.jpeg';
import metamask from '../assets/twitter/Metamask.jpeg';
import saylor from '../assets/twitter/MichaelSaylor.jpeg';
import trust from '../assets/twitter/TrustWallet.jpeg';
import twitter from '../assets/twitter/Twitter.jpg';
import vb from '../assets/twitter/Vitalik.jpeg';
import whale from '../assets/twitter/WhaleAlert.png';
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
        noWrap: 'true',
        color: '#FFF8E9',
        textOverflow: 'ellipsis',
        fontFamily: 'ap_text_condensed_lt',
        fontSize: 16,
        lineHeight: 1.3,
    },
    link: {
        ...theme.typography.button, marginTop: 25,
    },
    modal: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 110,
        maxWidth: 708,
        height: 530,
        maxHeight: 625,
        borderRadius: 16,
        marginLeft: 'calc(50% - 354px)',
        width: 708,
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
        maxWidth: 333,
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
        lineHeight: 1.25,
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
        marginBottom: 16,
        padding: '8px 16px 6px 16px',
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
        fontSize: 20,
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
        marginBottom: 10,
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

const TweetCard = ({post}) => {

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    // since twitter hosts their pfp in an inaccessible way to fetch
    // hard-coding was used until a better method for extracting is available
    let pfp

    switch (post.creator.slice(1)) {
        case 'binance':
            pfp = binance
            break
        case 'BinanceUS':
            pfp = binanceUS
            break
        case 'crypto':
            pfp = bloomberg
            break
        case 'coinbase':
            pfp = coinbase
            break
        case 'CoinbasePro':
            pfp = coinbasePro
            break
        case 'CoinbaseWallet':
            pfp = coinbaseWallet
            break
        case 'comfytoken':
            pfp = comfytoken
            break
        case 'cz_binance':
            pfp = cz
            break
        case 'elonmusk':
            pfp = elon
            break
        case 'ForbesCrypto':
            pfp = forbes
            break
        case 'MetaMask':
            pfp = metamask
            break
        case 'michael_saylor':
            pfp = saylor
            break
        case 'TrustWalletApp':
            pfp = trust
            break
        case 'VitalikButerin':
            pfp = vb
            break
        case 'whale_alert':
            pfp = whale
            // filter out sub-50M tweets
            if (parseInt(post.content.split('(')[1].split(',')[0]) < 50) {
                return (<span/>)
            }
            break
        default:
            pfp = twitter
    }

    let img = (post.enclosure !== undefined) ? (post.enclosure.url) : pfp

    //double check for false enclosure images, gif, video links, etc
    if (post.enclosure !== undefined) {
        if (post.enclosure.type === 'false') {
            // use pfp as fallback
            img = pfp
        }
    }


    const previewText = (post.contentSnippet.length > 180) ?
        post.contentSnippet.slice(0, 180).split(' ').slice(0, -1).join(' ') + '...'
        : post.contentSnippet + '...';
    const modalText = (post.content.length > 500) ? post.contentSnippet.slice(0, 500).split(' ').slice(0, -1).join(' ') + '...'
        : post.contentSnippet + '...';
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
        setOpen(false)
    }

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea onClick={() => handleOpen()}
                            style={{borderRadius: 15}}
                            classes={{
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
                                {post.creator}
                            </Typography>
                            <Typography className={classes.date} variant='subtitle1' gutterBottom>
                                {normieTime}
                            </Typography>
                            <Typography className={classes.text} variant='subtitle2' paragraph>
                                {previewText}...
                            </Typography>
                        </CardContent>
                    </div>
                </Card>
            </CardActionArea>
            <Hidden xsDown>
                <StyledModal
                    aria-labelledby='transition-modal-title'
                    aria-describedby='transition-modal-description'
                    className={classes.modal}npm
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
                                {post.creator}
                            </Typography>
                            <Typography className={classes.modalTime} variant='subtitle1'>
                                {normieTime}
                            </Typography>
                            <CardMedia className={classes.modalImg}
                                       component="img"
                                       src={img}/>
                            <Typography className={classes.modalText} paragraph>
                                {modalText}
                            </Typography>
                            <Link href={post.link} target='_blank' rel='noreferrer'
                                  className={classes.modalLink}>Continue to Twitter</Link>
                        </Card>
                    </Fade>
                </StyledModal>
            </Hidden>
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
                                {post.creator}
                            </Typography>
                            <Typography className={classes.modalTimeMobile} variant='subtitle1' gutterBottom>
                                {normieTime}
                            </Typography>
                            <CardMedia className={classes.modalImgMobile}
                                       component="img"
                                       src={img}/>
                            <Typography variant={'body1'} className={classes.modalTextMobile}>
                                {modalText}
                            </Typography>
                            <Button href={post.link} target='_blank' rel='noreferrer'
                                    className={classes.modalLinkMobile}>Continue to Twitter</Button>
                        </Card>
                    </Fade>
                </StyledModal>
            </Hidden>
        </Grid>
    )

};

export default TweetCard;