import React from "react";
import { Button, Grid, Input, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Newsletter = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.grid}>
            <Typography variant="h5" gutterBottom>
                Join the LET'S READ Newsletter
            </Typography>
            <form className={classes.form}>
                <Input required name="email" placeholder="Email">
                    Email Address
                </Input>
                <Button
                    className={classes.btn}
                    type="button"
                    size="small"
                    variant="outlined"
                >
                    SIGN UP
                </Button>
            </form>
            <Typography className={classes.formSubtext}>
                Enter your email for exclusive offers, and first dibs on new
                books and stories!
            </Typography>
        </Grid>
    );
};

export default Newsletter;
