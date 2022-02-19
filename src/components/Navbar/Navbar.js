import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Badge,
    Typography,
    Hidden,
    SwipeableDrawer,
    ListItem,
    List,
    Divider,
} from "@material-ui/core";
import {
    HelpOutlined,
    MenuRounded,
    ShoppingCart,
    ChevronLeft,
} from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/letsreadlogo.svg";

import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    const [open, setOpen] = useState(false);

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
                    <Hidden xsDown>
                        <Link className={classes.desktopLink} to="/">
                            Home
                        </Link>
                        <Link className={classes.desktopLink} to="/">
                            Children's
                        </Link>
                        <Link className={classes.desktopLink} to="/">
                            Young Adult
                        </Link>
                        <Link className={classes.desktopLink} to="/">
                            Best Sellers
                        </Link>
                    </Hidden>
                    <Hidden smUp>
                        <IconButton>
                            <MenuRounded onClick={() => setOpen(true)} />
                        </IconButton>
                    </Hidden>
                    <div className={classes.grow}>
                        <div className={classes.logoNav}>
                            <img
                                src={Logo}
                                alt=""
                                height="50px"
                                className={classes.image}
                            />
                            <Typography variant="h5">LET'S READ</Typography>
                        </div>
                    </div>
                    {location.pathname === "/" && (
                        <div className={classes.navBtnContainer}>
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

                <SwipeableDrawer
                    open={open}
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}
                    anchor="left"
                >
                    <div className={classes.drawerHeader}>
                        <img
                            src={Logo}
                            alt=""
                            height="50px"
                            className={classes.image}
                        />
                        <IconButton>
                            <ChevronLeft onClick={() => setOpen(false)} />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem>
                            <Typography
                                color="inherit"
                                className={classes.navbarLink}
                                component={Link}
                                to="/"
                            >
                                Home
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography
                                color="inherit"
                                className={classes.navbarLink}
                                component={Link}
                                to="/"
                            >
                                Children's
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography
                                color="inherit"
                                className={classes.navbarLink}
                                component={Link}
                                to="/"
                            >
                                Young Adult
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography
                                color="inherit"
                                className={classes.navbarLink}
                                component={Link}
                                to="/"
                            >
                                Best Sellers
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography
                                color="inherit"
                                className={classes.navbarLink}
                                component={Link}
                                to="/"
                            >
                                Our Story
                            </Typography>
                        </ListItem>
                    </List>
                </SwipeableDrawer>
            </AppBar>
        </>
    );
};

export default Navbar;
