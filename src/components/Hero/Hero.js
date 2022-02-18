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
                    Best of 2021
                </Typography>
                <Typography variant="h6" className={classes.heroText}>
                    Explore the best new books for all ages!
                </Typography>
                <Button
                    className={classes.ctaButton}
                    size="large"
                    type="button"
                    variant="contained"
                    color="primary"
                >
                    Let's Go
                </Button>
            </div>
        </Grid>
    );
};

export default Hero;
