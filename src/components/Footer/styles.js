import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    topGrid: {
        backgroundColor: "#d9d9d9",
        color: "black",
        paddingTop: "3rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.up("sm")]: {
            flexDirection: "row",
        },
    },
    bottomGrid: {
        backgroundColor: "#d9d9d9",
        justifyContent: "center",
        paddingBottom: "2rem",
    },
    imgContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    link: {
        marginBottom: ".5rem",
        color: "black",
    },
    linkTitle: {
        textAlign: "center",
    },
    connect: {
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        marginBottom: "1rem",
    },
    company: {
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        marginBottom: "1rem",
    },
    social: {
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        marginBottom: "1rem",
    },
}));
