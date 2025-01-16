const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const { successResponse } = require("./error.controller");
const { emailWithNodeMailer } = require("../helper/email");
const { User } = require("../models/user.model");

exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists. Please login!",
      });
    }

    // If user doesn't exist, create a new user
    const newUser = new User({
      name,
      email,
      password,
    });

    // Save the user data to the database
    const userData = await newUser.save();

    const emailData = {
      email: email,
      sebject: "Account create success",
      html: `
             <h2> Dear ${name}</h2>
             <p>Your account has been successfull. Please login now!</p>  
          `,
    };

     await emailWithNodeMailer(emailData);
     res.status(201).json({
      success: true,
      message: "User has been registered successfully. Please login now!",
      user: userData, // Optionally send back the created user data
    });
   
  } catch (error) {
    // Catch any errors and return an appropriate response
    res.status(500).json({
      success: false,
      message: "User registration failed!",
      error: error.message, // Optionally return the error message for debugging
    });
  }
};

exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        statusCode: 400,
        message: "User does not exist with this email. Please register first!",
      });
    }

    // Compare passwords
    const isLoginMatch = await bcrypt.compare(password, user.password); // Await is added

    if (!isLoginMatch) {
      return res.status(400).json({
        statusCode: 400,
        message: "Incorrect password!",
      });
    }

    // Check if user is banned
    if (user.isBanned) {
      return res.status(400).json({
        statusCode: 400,
        message: "User is banned!",
      });
    }

    // // Generate JWT token
    // const accessToken = jwt.sign(
    //   { userId: user._id, email: user.email },
    //   secretAccessKey,
    //   { expiresIn: '7d' }
    // );

    // // Set JWT token in cookie
    // res.cookie('access_token', accessToken, {
    //   maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    //   httpOnly: true,
    //   secure: true, // Make sure to use secure: true in production
    //   sameSite: 'none',
    // });

    // Return success response
    return successResponse(res, {
      statusCode: 200,
      message: "User has logged in successfully",
      payload: { user },
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      message: "Internal server error",
      error: error.message || error,
    });
  }
};
