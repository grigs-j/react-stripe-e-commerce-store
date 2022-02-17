import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    container: {
        height: "90vh",
        display: "flex",
        maxWidth: "100vw",
        overflow: "hidden",
    },
    wrapper: {
        height: "90%",
        display: "flex",
        width: "100%",
    },
    bgImage: {
        height: "90vh",
        width: "100%",
        display: "block",
    },
}));
