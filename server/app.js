const express = require("express");
const cors = require("cors");

const Pizzaaa = require("./models/pizza.model");

const userRoute = require("./routes/user.route");
const pizzaRoute = require("./routes/pizza.route");
const orderRoute = require("./routes/order.route")
const app = express();
const morgan = require("morgan");

const pizzas = require("./Data/pizza.json");

require("./config/db");

app.use(morgan("dev"));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

//all user route
app.use("/api/users", userRoute);

//all pizza route
app.use("/api/pizza", pizzaRoute);

//all order route
app.use("/api/users/order", orderRoute)

// app.get("/", (req, res) => {
//   res.send({
//     massage: "hellow food-app",
//   });
// });



// app.post("/pizzass",
//   async (req, res) => {
//       try {
//           // সব পিজ্জা ডিলিট করুন
//           await Pizzaaa.deleteMany({});

//           // নতুন পিজ্জা ডাটা ইনসার্ট করুন
//           const pizzaData = await Pizzaaa.insertMany(pizzas);
//           return res.status(200).send({
//               success: true,
//               pizzaData
//           });
//       } catch (error) {
//           console.log(error);
//           return res.status(500).send({
//               success: false,
//               message: "Internal Server Error",
//               error
//           });
//       }
//   }
// );


//wrong api rqst
app.use((req, res) => {
  res.status(404).json({
    massage: "404 error route not found",
  });
});

//server error
app.use((err, req, res, next) => {
  res.status(400).json({
    massage: "Server error",
  });
});

module.exports = app;
