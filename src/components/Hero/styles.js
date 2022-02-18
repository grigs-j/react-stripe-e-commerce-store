import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    container: {
        position: "relative",
    },
    card: {
        position: "absolute",
        top: "65%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        backgroundColor: "rgba(0,0,0,0.4)",
        padding: "2.5rem 1rem",
        width: "90%",
        margin: "0 auto",
    },
    heroText: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        width: "100%",
        paddingBottom: "1.5rem",
    },
    ctaButton: {
        display: "block",
        margin: "0 auto",
        minWidth: "119px",
        backgroundColor: "white",
    },
    imageContainer: {
        backgroundImage:
            "url(https://images.unsplash.com/photo-1551803091-e20673f15770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        paddingTop: "70px",
    },
    container: {
        height: "100vh",
    },
}));
