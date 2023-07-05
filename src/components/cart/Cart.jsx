import { useRecoilState } from "recoil";
import { cartState } from "../../components/global-state/cartItems";
import "./Cart.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cart() {
  const [cartItems, setCartItems] = useRecoilState(cartState);

  const handleBuyEverything = () => {
    toast.success("All items have been purchased and are on the way!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setCartItems([]);
  };

  function removeFromCart(id) {
    setCartItems((items) => items.filter((cartItem) => cartItem.id !== id));
  }

  const CartList = (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>
              <div>{item.title}</div>
              <div>{item.price}</div>
              <button onClick={() => removeFromCart(item.id)}>
                Remove From Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={handleBuyEverything}>Buy Everything</button>;
    </div>
  );

  const NoItemsInCart = <div>There are no items in the cart.</div>;

  return (
    <div className="cart-container">
      <div className="cart-wrapper">
        {cartItems.length > 0 ? CartList : NoItemsInCart}
      </div>
    </div>
  );
}
