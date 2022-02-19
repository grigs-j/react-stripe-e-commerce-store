import React, { useState, useEffect } from "react";
import {
    Paper,
    Stepper,
    Step,
    StepLabel,
    CircularProgress,
    Divider,
    Button,
    Typography,
    CssBaseline,
} from "@material-ui/core";
import AddressForm from "../CheckoutForm/AddressForm";
import PaymentForm from "../CheckoutForm/PaymentForm";
import { commerce } from "../../lib/commerce";
import { Link, useNavigate } from "react-router-dom";
import useStyles from "./styles";

const steps = ["Shipping address", "Payment details"];

const Checkout = ({ cart, order, error, onCaptureCheckout }) => {
    const classes = useStyles();

    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, {
                    type: "cart",
                });

                console.log(cart.id);
                setCheckoutToken(token);
            } catch (error) {
                navigate("/");
            }
        };

        generateToken();
    }, [cart]);

    const nextStep = () =>
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () =>
        setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const next = (data) => {
        setShippingData(data);
        nextStep();
    };

    const Confirmation = () =>
        order.customer ? (
            <>
                <div>
                    <Typography variant="h5">
                        Thank you for your purchase, {order.customer.firstname}{" "}
                        {order.customer.lastname}!
                    </Typography>
                    <Divider className={classes.divider} />
                    <Typography variant="subtitle2">
                        Order ref: {order.customer_reference}
                    </Typography>
                </div>
                <br />
                <Button
                    component={Link}
                    variant="outlined"
                    type="button"
                    to="/"
                >
                    Back to home
                </Button>
            </>
        ) : (
            <div className={classes.spinner}>
                <CircularProgress />
            </div>
        );

    const Form = () =>
        activeStep === 0 ? (
            <AddressForm
                checkoutToken={checkoutToken}
                next={next}
                nextStep={nextStep}
                setShippingData={setShippingData}
            />
        ) : (
            <PaymentForm
                shippingData={shippingData}
                checkoutToken={checkoutToken}
                backStep={backStep}
                onCaptureCheckout={onCaptureCheckout}
                nextStep={nextStep}
            />
        );

    return (
        <>
            <CssBaseline />
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Stepper
                        activeStep={activeStep}
                        className={classes.stepper}
                    >
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <Confirmation />
                    ) : (
                        checkoutToken && <Form />
                    )}
                </Paper>
            </main>
        </>
    );
};

export default Checkout;
