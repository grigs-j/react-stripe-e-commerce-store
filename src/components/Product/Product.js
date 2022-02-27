import React from "react";
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button,
} from "@material-ui/core";
import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={product.image.url}
                title={product.name}
            />
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography variant="h6" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography
                    dangerouslySetInnerHTML={{ __html: product.description }}
                    variant="body2"
                    color="textSecondary"
                />
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <Button
                    size="large"
                    type="button"
                    variant="contained"
                    color="secondary"
                    onClick={() => onAddToCart(product.id, 1)}
                >
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    );
};

export default Product;
