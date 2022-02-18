import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    title: {
        margin: "100px 0 2rem",
    },
    emptyButton: {
        minWidth: "150px",
        [theme.breakpoints.down("xs")]: {
            marginBottom: "5px",
        },
        [theme.breakpoints.up("xs")]: {
            marginRight: "20px",
        },
    },
    checkoutButton: {
        minWidth: "150px",
    },
    link: {
        textDecoration: "none",
    },
    cardDetails: {
        display: "flex",
        margin: "6rem 0",
        width: "100%",
        justifyContent: "space-between",
    },
}));
