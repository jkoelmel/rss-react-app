import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
    footer: {
        marginTop: theme.spacing(3),
        padding: theme.spacing(1, 0),
    },
}));

export default function Footer({ description, title }) {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" style={{fontFamily: 'ap_text'}} gutterBottom>
                    {title}
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    style={{color: "#FFF8E9"}}
                    component="p"
                >
                    {description}
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                    Copyright ©{" "}
                    <Link color="inherit" href="https://comfytoken.com">
                        ComfyToken
                    </Link>{" "}
                    {new Date().getFullYear()}
                </Typography>
            </Container>
        </footer>
    );
}