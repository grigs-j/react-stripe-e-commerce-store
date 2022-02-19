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
    title: {
        alignItems: "center",
        display: "flex",
        textDecoration: "none",
        marginRight: ".25rem",
        color: "red",
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
    },
    announcement: {
        display: "flex",
        backgroundColor: "steelblue",
        color: "white",
        textAlign: "center",
        minHeight: "2rem",
        justifyContent: "center",
    },
    logoNav: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "red",
    },
    grow: {
        flexGrow: 1,
    },
    desktopLink: {
        color: "black",
        marginRight: ".75rem",
    },
}));
