import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar, Cart, Checkout } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        //await returned products
        const { data } = await commerce.products.list();
        setProducts(data);
    };
    // console.log(data);

    const fetchCart = async () => {
        //putting res in var is redundant, so we can set cart to the state
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

    useEffect(() => {
        //setting states
        fetchProducts();
        fetchCart();
    }, []);

    // console.log(cart.total_items);

    return (
        <Router>
            <div>
                <Navbar totalItems={cart.total_items} />
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <Products
                                products={products}
                                onAddToCart={handleAddToCart}
                            />
                        }
                    />
                    <Route
                        path="/cart"
                        element={
                            <Cart
                                cart={cart}
                                onUpdateCartQty={handleUpdateCartQty}
                                onEmptyCart={handleEmptyCart}
                                onRemoveFromCart={handleRemoveFromCart}
                            />
                        }
                    />
                    <Route
                        path="/checkout"
                        element={<Checkout cart={cart} />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
