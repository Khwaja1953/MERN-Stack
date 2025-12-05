import { addToCart } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-3 rounded shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold">{product.name}</h3>
            <p>₹{product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}