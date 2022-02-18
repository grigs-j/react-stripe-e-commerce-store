import React from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Badge,
    Typography,
} from "@material-ui/core";
import { HelpOutlined, MenuRounded, ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/letsreadlogo.svg";

import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.AppBar} color="inherit">
                <Toolbar className={classes.announcement}>
                    <Typography
                        variant="body1"
                        className={classes.announcementText}
                    >
                        Free Shipping $49+ / Easy Returns
                    </Typography>
                    <div className={classes.grow} />
                    <Typography
                        variant="body1"
                        className={classes.announcementText}
                    >
                        Best Sellers / Shop Now
                    </Typography>
                </Toolbar>
                <Toolbar className={classes.navbar}>
                    <MenuRounded className={classes.menuToggle} />
                    <Typography
                        variant="h5"
                        color="inherit"
                        className={classes.title}
                        component={Link}
                        to="/"
                    >
                        LET'S READ
                    </Typography>
                    <Typography
                        variant="h6"
                        color="inherit"
                        component={Link}
                        to="/"
                    >
                        <img
                            src={Logo}
                            alt=""
                            height="50px"
                            className={classes.image}
                        />
                    </Typography>
                    <div className={classes.navbarLinks}>
                        <Typography
                            color="inherit"
                            className={classes.navbarLink}
                            component={Link}
                            to="/"
                        >
                            Childrens
                        </Typography>
                        <Typography
                            color="inherit"
                            className={classes.navbarLink}
                            component={Link}
                            to="/"
                        >
                            Young Adult
                        </Typography>
                        <Typography
                            color="inherit"
                            className={classes.navbarLink}
                            component={Link}
                            to="/"
                        >
                            Our Story
                        </Typography>
                    </div>
                    <div className={classes.grow} />

                    {location.pathname === "/" && (
                        <div className={classes.button}>
                            <IconButton>
                                <HelpOutlined />
                            </IconButton>
                            <IconButton
                                component={Link}
                                to="/cart"
                                color="inherit"
                            >
                                <Badge
                                    badgeContent={totalItems}
                                    color="secondary"
                                >
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
