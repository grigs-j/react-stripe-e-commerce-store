import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        maxWidth: "100%",
    },
    media: {
        height: "350px",
    },
    cardActions: {
        display: "flex",
        justifyContent: "flex-end",
    },
    cardContent: {
        display: "flex",
        justifyContent: "space-between",
        paddingBottom: "0",
    },
}));
