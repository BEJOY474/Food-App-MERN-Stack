import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../actions/cardAction";
import Checkout from "../../components/Checkout";

const Cart = () => {
  const dispatch = useDispatch();
  const cartstate = useSelector((state) => state.cartReducer);

  // Calculate the total price
  const totalPrice = cartstate.cartItems.reduce((total, item) => {
    return total + item.price;
  }, 0);

  return (
    <>
      <div className="container h-auto px-4 mx-auto max-w-screen-2xl mb-2 xl:px-9">
        <section className="min-h-[70vh] py-10 overflow-x-hidden top-10  relative">
          {cartstate.cartItems.length === 0 ? (
            <p className="text-2xl py-2 text-center flex items-center justify-center h-[60vh]">
              No item in your shopping cart
            </p>
          ) : (
            <div className="container mx-auto h-full">
              <div className="flex flex-col lg:flex-row justify-center items-center h-full">
                {/* Your Products Section */}
                <div className="w-full lg:w-7/12 p-8 lg:mr-2 bg-gray-100 rounded-lg mb-8 lg:mb-0 slide-in-left">
                  <h3 className="text-center text-xl md:text-2xl font-bold uppercase mb-8">
                    My Shopping
                  </h3>

                  {cartstate.cartItems.map((item, index) => {
                    return (
                      <div key={index}>
                        <div className="flex flex-col md:flex-row items-center md:justify-end mb-6">
                          <img
                            src={item.image}
                            alt="Samsung Galaxy M11 64GB"
                            className="w-32 rounded-lg mb-4 md:mb-0"
                          />

                          <div className="md:ml-4 flex-grow">
                            <h5 className="text-base md:text-lg font-semibold text-blue-600">
                              {" "}
                              {item.name} [{item.variant}]{" "}
                            </h5>
                            <p className="text-sm font-bold md:text-gray-600 py-1">
                              Price : {item.prices[0][item.variant]} *{" "}
                              {item.quantity} = {item.price}
                            </p>

                            <div className="flex">
                              {/* Decrement Button */}
                              <button
                                onClick={() =>
                                  dispatch(
                                    addToCart(
                                      item,
                                      item.quantity - 1,
                                      item.variant
                                    )
                                  )
                                }
                                disabled={item.quantity <= 1}
                                className={`bg-gray-200 text-gray-700 h-10 px-4 rounded-r text-sm md:text-base ${
                                  item.quantity <= 1
                                    ? "opacity-50 cursor-not-allowed"
                                    : ""
                                }`}
                              >
                                -
                              </button>

                              {/* Quantity Display */}
                              <label className="px-3 h-10 flex items-center bg-gray-200">
                                {item.quantity}
                              </label>

                              {/* Increment Button */}
                              <button
                                onClick={() =>
                                  dispatch(
                                    addToCart(
                                      item,
                                      item.quantity + 1,
                                      item.variant
                                    )
                                  )
                                }
                                disabled={item.quantity >= 10}
                                className={`bg-gray-200 text-gray-700 h-10 px-4 rounded-r text-sm md:text-base ${
                                  item.quantity >= 10
                                    ? "opacity-50 cursor-not-allowed"
                                    : ""
                                }`}
                              >
                                +
                              </button>
                            </div>
                          </div>

                          <div className="flex justify-center mt-4 md:mt-0">
                            <button
                              onClick={() => dispatch(deleteFromCart(item))}
                              className="text-black"
                            >
                              <AiFillDelete className="w-6 h-6" />
                            </button>
                          </div>
                        </div>
                        {/* Render <hr /> only if it's not the last item */}
                        {index < cartstate.cartItems.length - 1 && (
                          <hr className="my-4 border-1 border-blue-400" />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Payment Section */}
                <div className="w-full lg:w-5/12 p-8 bg-gray-100 rounded-lg slide-in-right">
                  <h3 className="text-center text-xl md:text-2xl font-bold uppercase mb-8">
                    Payment
                  </h3>

                 
                    <hr className="border-blue-500 mb-4" />

                    <div className="flex justify-between mb-2 bg-blue-100 p-4 mt-4 rounded text-sm md:text-base">
                      <h5 className="font-bold">Total</h5>
                      <h5 className="font-bold">
                        = {totalPrice.toFixed(2)} BDT
                      </h5>
                    </div>

                    {/* <button className="w-full py-3 bg-blue-600 text-white font-bold text-base md:text-lg rounded-lg hover:bg-blue-700 transition">
                      Buy now
                    </button> */}

                    <Checkout totalPrice={totalPrice.toFixed(2)} />

                    <div className="mt-6 text-center">
                      <a href="/" className="text-blue-600 underline">
                        &larr; Back to shopping
                      </a>
                    </div>
                 
                </div>
              </div>
            </div>
          )}
        </section>
     
      </div>
    </>
  );
};

export default Cart;
