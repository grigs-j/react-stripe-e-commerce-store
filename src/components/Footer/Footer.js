import React from "react";
import { Grid, Link, ListItem, Typography } from "@material-ui/core";
import Logo from "../../assets/codedog-single.svg";
import UseStyles from "./styles";

const Footer = () => {
    const classes = UseStyles();
    return (
        <>
            <Grid container className={classes.topGrid}>
                <div className={classes.imgContainer}>
                    <img
                        src={Logo}
                        height="100px"
                        className={classes.img}
                        alt=""
                    />
                    <Typography variant="h4" gutterBottom>
                        BUYSTUFF
                    </Typography>
                </div>
                <div>
                    <Typography className={classes.linkTitle} variant="h6">
                        SUPPORT
                    </Typography>
                    <ListItem gutterBottom className={classes.connect}>
                        <Link className={classes.link}>My Account</Link>
                        <Link className={classes.link}>Contact Us</Link>
                        <Link className={classes.link}>Returns</Link>
                        <Link className={classes.link}>Shipping</Link>
                        <Link className={classes.link}>FAQs</Link>
                        <Link className={classes.link}>My Account</Link>
                    </ListItem>
                </div>
                <div>
                    <Typography className={classes.linkTitle} variant="h6">
                        COMPANY
                    </Typography>
                    <ListItem gutterBottom className={classes.company}>
                        <Link className={classes.link}>About Us</Link>
                        <Link className={classes.link}>Sustainablity</Link>
                        <Link className={classes.link}>Our Impact</Link>
                        <Link className={classes.link}>Careers</Link>
                        <Link className={classes.link}>Blog</Link>
                    </ListItem>
                </div>
                <div>
                    <Typography className={classes.linkTitle} variant="h6">
                        SOCIAL
                    </Typography>
                    <ListItem gutterBottom className={classes.social}>
                        <Link className={classes.link}>Facebook</Link>
                        <Link className={classes.link}>Twitter</Link>
                        <Link className={classes.link}>Instagram</Link>
                        <Link className={classes.link}>TikTok</Link>
                    </ListItem>
                </div>
            </Grid>
            <Grid container className={classes.bottomGrid}>
                <Typography variant="body2">
                    Created with care by Jonathan Grigsby 2022
                </Typography>
            </Grid>
        </>
    );
};

export default Footer;
