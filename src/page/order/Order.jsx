import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../../actions/orderAction";

const Order = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.loginUserReducer);
  const orderstate = useSelector((state) => state.getOrderUserReducer);
  const { loading, error, orders } = orderstate;

  console.log("Order => : ", orders);

  useEffect(() => {
    if (userState.currentUser?.payload?.user?._id) {
      dispatch(getUserOrders(userState.currentUser.payload.user._id));
    }
  }, [dispatch, userState.currentUser]);

  const loader = (
    <div className="flex justify-center items-center h-24">
      <div
        className="inline-block h-12 w-12 text-center animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8 max-w-screen-xl">
      {/* Add margin to push the heading below the navbar */}
      <div className="mt-16">
        <h1 className="text-center text-2xl font-bold mb-7">My Orders</h1>
        {error && <p className="text-red-500">Something went wrong: {error}</p>}
        {loading && loader}
        
        {!loading && orders && orders.length === 0 && (
          <p className="text-gray-500 text-center">No orders found.</p>
        )}

        {orders && Array.isArray(orders) && orders.length > 0 && (
          <div className="bg-white shadow-xl rounded-lg p-6 mb-8 relative">
            {orders.map((order, orderIndex) => (
              <div key={order._id} className="mb-6">
                <h3 className="text-lg font-bold text-gray-700">
                  Order {orderIndex + 1}
                </h3>

                {order.orderItems &&
                Array.isArray(order.orderItems) &&
                order.orderItems.length > 0 ? (
                  <div className="mt-4">
                    <h4 className="text-md font-semibold text-gray-600">
                      Order Items:
                    </h4>
                    {order.orderItems.map((item, itemIndex) => (
                      <div key={item._id}>
                        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
                          <div className="flex items-center">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover mr-4 rounded-lg"
                            />
                            <div>
                              <p className="text-gray-800">
                                {itemIndex + 1}. {item.name}
                              </p>
                              <p className="text-gray-500">Variant: {item.variant}</p>
                              <p className="text-gray-500">Quantity: {item.quantity}</p>
                              <p className="text-gray-500">Price: ${item.price}</p>
                            </div>
                          </div>
                          <div className="mt-4 md:mt-0 md:text-right">
                            <p className="text-gray-700">
                              Shipping Address: {order.shippingAddress.street}, {order.shippingAddress.city},{" "}
                              {order.shippingAddress.country}, {order.shippingAddress.pincode}
                            </p>
                            <p className="text-gray-500">
                              Delivered: {order.isDelivered ? "Yes" : "No"}
                            </p>
                            <p className="text-gray-500">Created On: {order.createdOn}</p>
                          </div>
                        </div>
                        {/* Add horizontal rule after every order item except the last */}
                        {itemIndex < order.orderItems.length - 1 && (
                          <hr className="my-4 border-t border-gray-300" />
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No items found for this order.</p>
                )}
                {/* Add hr after each order except the last */}
                {orderIndex < orders.length - 1 && (
                  <hr className="my-6 border-t border-gray-300" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
