import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import ErrorPopup from "./ErrorPopup";
import { placeOrder } from "../actions/orderAction";
import Error from "./Error";
import Success from './Success'
const Checkout = ({ totalPrice }) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.loginUserReducer);
  const oderstate = useSelector((state) => state.placeOrderUserReducer);
  const cartstate = useSelector((state) => state.cartReducer);

  const { loading, error, success } = oderstate;

  const tokenHandeler = (token) => {
    // handle token received from Stripe
    dispatch(
      placeOrder(token, totalPrice, userState.currentUser, cartstate.cartItems)
    );
  };

  const stripeCheckout = (
    <StripeCheckout
      amount={totalPrice * 100}
      shippingAddress
      token={tokenHandeler}
      stripeKey="pk_test_51PwQPaI9xnvKAaMQSDhd6AqRW0slCzU2VMN4hyL58wNTf8DqYiNJLLJAfSJxSRZnipYOBpQiRvIqKREA3Jmms2v100dzsYvVis"
      currency="BDT"
      className="w-[100px] "
    >
      <button className="w-full py-3 bg-blue-600 text-white font-bold text-base md:text-lg rounded-lg hover:bg-blue-700 transition">
        Buy now
      </button>
    </StripeCheckout>
  );

  const loader = (
    <div>
      <div
        className="inline-block h-12 w-12 text-center animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px text-center !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
     
    </div>
  );

  const checkoutButton = (
    <button
      className="w-full py-3 bg-blue-600 text-white font-bold text-base md:text-lg rounded-lg hover:bg-blue-700 transition"
      onClick={() => document.getElementById("my_modal_errorPopup").showModal()}
    >
      Buy now
    </button>
  );

  return (
    <div>
       {loading ? loader : "" }
     {error && (<Error error="Order failed!" />)}
     {success && (<Success success="Your Order has been Successfull!"/>)}
      {userState.currentUser ? stripeCheckout : checkoutButton}
     
      <ErrorPopup message="Sorry, You have to login first!" />
    </div>
  );
};

export default Checkout;
