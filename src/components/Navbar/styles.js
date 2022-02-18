import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    appBar: {
        boxShadow: "none",
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        [theme.breakpoints.up("sm")]: {
            width: "100%",
            marginLeft: "0px",
            display: "flex",
        },
    },
    navbar: {
        paddingTop: ".5rem",
    },
    menuToggle: {
        marginRight: "1rem",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    title: {
        alignItems: "center",
        display: "flex",
        textDecoration: "none",
        marginRight: ".25rem",
    },
    image: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "flex",
        },
        marginRight: "3rem",
    },
    navbarLink: {
        textDecoration: "none",
        marginRight: "1rem",
    },
    navbarLinks: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "flex",
        },
    },
    announcement: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "flex",
            backgroundColor: "steelblue",
            color: "white",
            textAlign: "center",
            minHeight: "2rem",
            justifyContent: "center",
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    grow: {
        flexGrow: 1,
    },
}));
