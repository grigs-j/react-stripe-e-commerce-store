import React from "react";
import { Grid, Link, ListItem, Typography } from "@material-ui/core";
import Logo from "../../assets/letsreadlogo.svg";
import UseStyles from "./styles";

const Footer = () => {
    const classes = UseStyles();
    return (
        <>
            <Grid container className={classes.topGrid}>
                <div className={classes.imgContainer}>
                    <Typography
                        className={classes.footerTitle}
                        variant="h4"
                        gutterBottom
                    >
                        LET'S READ
                    </Typography>
                    <img
                        src={Logo}
                        height="200px"
                        className={classes.img}
                        alt=""
                    />
                </div>
                <div>
                    <Typography className={classes.linkTitle} variant="h6">
                        SUPPORT
                    </Typography>
                    <ListItem gutterbottom="true" className={classes.connect}>
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
                    <ListItem gutterbottom="true" className={classes.company}>
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
                    <ListItem gutterbottom="true" className={classes.social}>
                        <Link className={classes.link}>Facebook</Link>
                        <Link className={classes.link}>Twitter</Link>
                        <Link className={classes.link}>Instagram</Link>
                        <Link className={classes.link}>TikTok</Link>
                    </ListItem>
                </div>
            </Grid>
            <Grid container className={classes.bottomGrid}>
                <Typography variant="body2">
                    Created with care by{" "}
                    <Link
                        className={classes.link}
                        href="https://www.jongrigsby.com"
                    >
                        Jonathan Grigsby
                    </Link>{" "}
                    2022
                </Typography>
            </Grid>
        </>
    );
};

export default Footer;
