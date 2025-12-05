import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";

export default function Cart() {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleClear = () => {
        dispatch(clearCart());
    };

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="p-5">
            <h2 className="text-2xl font-bold mb-4">Cart</h2>
            {cartItems.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                <>
                    <ul className="space-y-2 mb-4">
                        {cartItems.map((item) => (
                            <li
                                key={item.id}
                                className="border p-2 rounded shadow-sm flex justify-between"
                            >
                                <span>{item.name}</span>
                                <span>₹{item.price}</span>
                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="text-red-600 hover:underline"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="font-semibold mb-2">Total: ₹{total}</div>
                    <button
                        onClick={handleClear}
                        className="bg-red-500 text-white px-4 py-1 rounded"
                    >
                        Clear Cart
                    </button>
                </>
            )}
        </div>
    );
}
