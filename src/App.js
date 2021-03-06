import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import {
    Products,
    Navbar,
    Cart,
    Checkout,
    Hero,
    Footer,
    Newsletter,
} from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./components/globalstyles.css";

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState("");

    const fetchProducts = async () => {
        //await returned products
        const { data } = await commerce.products.list();
        setProducts(data);
    };

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    };

    const handleAddToCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity);
        setCart(cart);
    };

    const handleUpdateCartQty = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity });
        setCart(cart);
    };

    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);
        setCart(cart);
    };

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();
        setCart(cart);
    };

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
        setCart(newCart);
    };

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(
                checkoutTokenId,
                newOrder
            );
            setOrder(incomingOrder);
            refreshCart();
        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
    };

    useEffect(() => {
        //setting states
        fetchProducts();
        fetchCart();
    }, []);

    // const [filter, setFilter] = useState("");

    // const handleFilter = async () => {
    //     const { category } = await commerce.categories.retrieve("category", {
    //         type: "slug",
    //     });
    //     setFilter(filtered);
    // };

    return (
        <Router>
            <div>
                <Navbar totalItems={cart.total_items} />

                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <>
                                <Hero />
                                <Products
                                    products={products}
                                    onAddToCart={handleAddToCart}
                                />
                                <Newsletter />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/cart"
                        element={
                            <>
                                <Cart
                                    cart={cart}
                                    onUpdateCartQty={handleUpdateCartQty}
                                    onEmptyCart={handleEmptyCart}
                                    onRemoveFromCart={handleRemoveFromCart}
                                />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/checkout"
                        element={
                            <Checkout
                                cart={cart}
                                order={order}
                                onCaptureCheckout={handleCaptureCheckout}
                                error={errorMessage}
                            />
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
