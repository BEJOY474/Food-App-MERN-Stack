const { Pizza } = require("../models/pizza.model");

const pizzas = require("../Data/pizza.json");

exports.getAllPizzas = async (req , res, next)=>{
   try {
        const pizzas = await Pizza.find();
        res.status(200).json({
          pizzas
        })
   } catch (error) {
        next(error)
      }
}

exports.uppizza = async (req , res, next)=>{
     try {
         
          await Pizza.deleteMany({});

          // নতুন পিজ্জা ডাটা ইনসার্ট করুন
          const pizzaData = await Pizza.insertMany(pizzas);
          return res.status(200).send({
              success: true,
              pizzaData
          });
      } catch (error) {
          console.log(error);
          return res.status(500).send({
              success: false,
              message: "Internal Server Error",
              error
          });
      }
    }
