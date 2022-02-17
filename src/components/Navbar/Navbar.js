import React from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Badge,
    Typography,
} from "@material-ui/core";
import { HelpOutlined, ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/codedog-single.svg";

import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.AppBar} color="inherit">
                <Toolbar className={classes.announcement}>
                    <Typography
                        variant="h7"
                        className={classes.announcementText}
                    >
                        Free Shipping $49+ / Easy Returns
                    </Typography>
                    <div className={classes.grow} />
                    <Typography
                        variant="h7"
                        className={classes.announcementText}
                    >
                        Best Sellers / Shop Now
                    </Typography>
                </Toolbar>
                <Toolbar>
                    <Typography
                        variant="h5"
                        color="inherit"
                        className={classes.title}
                        component={Link}
                        to="/"
                    >
                        BUYSTUFF
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
                            Men
                        </Typography>
                        <Typography
                            color="inherit"
                            className={classes.navbarLink}
                            component={Link}
                            to="/"
                        >
                            Women
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
