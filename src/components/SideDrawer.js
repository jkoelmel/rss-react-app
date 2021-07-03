import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Chart from './Chart';
import comfy from '../assets/comfy.png';
import discord from '../assets/discord.png';
import telegram from '../assets/telegram.png';
import chart from '../assets/chart.png';
import mail from '../assets/mail.png';
import nav from '../assets/header-nav.svg';
import {Divider, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import styled from 'styled-components';
import FngIndex from "./FngIndex";

const StyledDrawer = styled(Drawer)`
  .MuiBackdrop-root {
    background-color: rgba(12,10,12,0.85);
  }
`;

const useStyles = makeStyles({
    root: {
        width: 'auto',
        height: '100%',
        // background: 'rgba(33,35,40,1)' +
        //     'linear-gradient(135deg, rgba(240,83,126,0.05) 0%, rgba(43,48,27,0.05) 50%, rgba(71,192,205,0.05) 100%)',
        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(to right, #1e161d 0%, #191a1f 100%)',
    },
    list: {
        color: '#000000',
        fontFamily: 'ap_text'
    },
    fullList: {
        width: 'auto',
    },
    menu: {
        marginRight: 20,
        width: 36,
        height: 36,
    },
    menuMobile: {
      marginLeft: '-1.25rem',
        marginRight: 12,
    },
    topBar: {
        display: 'flex',
        flexDirection: 'row',
    },
    headline: {
      fontFamily: 'ap_text_condensed_lt',
        color: '#FFFFFF',
        fontSize: 16,
        flexGrow: 1,
        letterSpacing: 4.17,
        alignSelf: 'center',
        marginLeft: 24,
        marginTop: 4,
    },
    close: {
        color: '#FFF8E9',
        alignSelf: 'flex-end',
        margin: 5,
        fontSize: 'large',
        fontWeight: 'bold',
        fontFamily: 'ap_text',
    },
    icons: {
        marginLeft: 4,
        marginTop: 6,
        marginBottom: 6,

    },
    listText: {
        color: '#f9c01c',
        fontFamily: 'ap_text_condensed_lt',
        fontWeight: 'lighter',
        marginLeft: '-1rem',
        marginTop: 4,
        letterSpacing: 3.65,
        fontSize: 14,

    }
});

export default function SideDrawer() {
    const classes = useStyles();
    const [state, setState] = useState({
        left: false,
    });
    const items = ['COMFY TOKEN', 'CHART', 'DISCORD', 'TELEGRAM', 'ADVERTISE']
    const links = ['https://comfytoken.com', 'https://www.dextools.io/app/pancakeswap/pair-explorer/0x84153a2db7f8b9a41e44a693a69e8a3f58e7b9e7',
        'https://discord.gg/comfytoken', 'https://t.me/comfytokenchat', 'mailto:hello@comfytoken.com?Subject=ComfyReport%20Advert%20Inquiry']
    const icons = [comfy, chart, discord, telegram, mail]

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className={classes.topBar}>
              <Typography className={classes.headline}>CHARTS</Typography>
                <IconButton className={classes.close} onClick={toggleDrawer("left", false)}>
                     <CloseSharpIcon style={{fontSize: '20'}}/>
                </IconButton>
            </div>
            <Divider style={{background: '#2D313B'}} light/>
            <Chart/>
            <FngIndex/>
            <List>
                {items.map((text, index) => (
                    <div key={text}>
                        <ListItem button component='a' href={links[index]} target='_blank'>
                        <ListItemIcon className={classes.icons}><img src={icons[index]} height={25} width={25} alt='comfy-dude'/></ListItemIcon>
                            <ListItemText disableTypography primary={<Typography className={classes.listText}>{text}</Typography>}/>
                    </ListItem>
                    <Divider style={{background: '#2D313B'}} light/>
                    </div>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <React.Fragment key={"left"}>
                <Hidden xsDown>
                <IconButton className={classes.menu} onClick={toggleDrawer('left', true)}>
                    <img src={nav} alt='nav-button'/>
                </IconButton>
                </Hidden>
                <Hidden smUp>
                    <IconButton className={classes.menuMobile} onClick={toggleDrawer('left', true)}>
                        <img src={nav} alt='nav-button'/>
                    </IconButton>
                </Hidden>
                <StyledDrawer classes={{ paper: classes.root }} anchor={"left"} open={state["left"]}
                        onClose={toggleDrawer("left", false)}>
                    {list("left")}
                </StyledDrawer>
            </React.Fragment>
        </div>
    );
}