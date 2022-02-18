import { Typography, Button, Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const Hero = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.container}>
            <Grid item className={classes.imageContainer} />
            <div className={classes.card}>
                <Typography variant="h4" className={classes.heroText}>
                    Buy Buystuff stuff!
                </Typography>
                <Button
                    className={classes.ctaButton}
                    size="large"
                    type="button"
                    variant="contained"
                    color="white"
                >
                    BUY NOW
                </Button>
            </div>
        </Grid>
    );
};

export default Hero;
