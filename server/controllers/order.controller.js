const { v4: uuidv4 } = require("uuid");
const { emailWithNodeMailer } = require("../helper/email");
const { Orders } = require("../models/order.model");
const stripe = require("stripe")(
  "sk_test_51PwQPaI9xnvKAaMQjWmHYGhs18qRfSmsnuQ6QxFa2VfR8uzg6pyPtKKxHq1b4OSMBfJOUfm8j3YMwqopj0SJ0uj600QlUtjiLO"
);

exports.orderPlace = async (req, res) => {
  const { token, totalPrice, currentUser, cartItems } = req.body;

  // console.log("cartItems : ", cartItems)
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

 //   console.log("Token : ", token);

    const payment = await stripe.charges.create(
      {
        amount: totalPrice * 100,
        currency: "BDT",
        customer: customer.id,
        receipt_email: token.email,
      },
      { idempotencyKey: uuidv4() }
    );

    if (payment) {
      const newOrder = new Orders({
        name: currentUser.payload.user.name,
        email: currentUser.payload.user.email,
        userId: currentUser.payload.user._id,
        orderItems: cartItems,
        orderAmount: totalPrice,

        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          pincode: token.card.address_zip,
        },

        transactionId: payment.source.id,
      });
      const newOrderData = await newOrder.save();

      //prepare email
      const emailData = {
        email: token.email,
        sebject: "Payment success",
        html: `
             <h2> Dear ${currentUser.payload.user.name}</h2>
             <p>Your payment has been successfull. </p>
             <p>Amount : ${totalPrice} </p>
          `,
      };

      if (newOrderData) {
      

        const mailSend = await emailWithNodeMailer(emailData);

        if (mailSend) {
          return res.send("Your Order has been Successfull!");
        } else {
          return res.send("Something is wrong");
        }
      }
    } else {
      return res.send("Payment failed");
    }
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      message: "Internal server error" + error,
    });
  }
};

exports.getAllUserOrders = async (req, res, next) => {
  try {
    const {userid} = req.body;
    console.log("ID : ",userid)
    const orders = await Orders.find({ userId: userid });
    console.log("orders : ", orders)
    if (orders) {
      res.status(200).send(
        {orders}
      );
    } else {
      res.status(500).send("No order found!");
    }
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      message: "Internal server error" + error,
    });
  }
};
