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
        textAlign: "center",
    },
    ctaButton: {
        display: "block",
        margin: "0 auto",
        minWidth: "119px",
        backgroundColor: "gray",
    },
    imageContainer: {
        backgroundImage:
            "url('https://uploads.childrensbookstore.com/2020/10/banner-1-scaled.jpg')",
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
