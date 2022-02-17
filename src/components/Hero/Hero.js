import React from "react";
import useStyles from "./styles";

const Hero = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <img
                    className={classes.bgImage}
                    src="https://images.unsplash.com/photo-1551803091-e20673f15770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"
                    height="90vh"
                />
            </div>
        </div>
    );
};

export default Hero;
