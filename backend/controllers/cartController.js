import userModel from "../models/userModel.js";

// add items to user cart
const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);

    // Ensure cartData is defined
    let cartData = userData.cartData || {};

    // Check if the item exists in cartData and update accordingly
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    // Update the user document with the new cartData
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });

    res.json({ success: true, message: "Added To Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// remove items from cart
const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;

    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Removed From Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// fetcg user cart data
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addToCart, removeFromCart, getCart };

/*
import userModel from "../models/userModel.js";

// add items to user cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    // Check if userId and itemId are provided
    if (!userId || !itemId) {
      return res.json({
        success: false,
        message: "User ID or Item ID is missing",
      });
    }

    // Find the user
    let userData = await userModel.findById(userId);

    // Check if user exists
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    // Ensure cartData is defined
    let cartData = userData.cartData || {};

    // Check if the item exists in cartData and update accordingly
    if (!cartData[itemId]) {
      cartData[itemId] = 1;
    } else {
      cartData[itemId] += 1;
    }

    // Update the user document with the new cartData
    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Added To Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// remove items from cart
const removeFromCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    // Check if userId and itemId are provided
    if (!userId || !itemId) {
      return res.json({
        success: false,
        message: "User ID or Item ID is missing",
      });
    }

    // Find the user
    let userData = await userModel.findById(userId);

    // Check if user exists
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    let cartData = userData.cartData || {};

    // Check if the item exists in the cart and decrement its count
    if (cartData[itemId] > 0) {
      cartData[itemId] -= 1;

      // If item count reaches zero, optionally remove it from the cart
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }

      // Update the user document with the new cartData
      await userModel.findByIdAndUpdate(userId, { cartData });
      res.json({ success: true, message: "Removed From Cart" });
    } else {
      res.json({
        success: false,
        message: "Item not in cart or invalid quantity",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// fetch user cart data
const getCart = async (req, res) => {
  try {
    const { userId } = req.body;

    // Check if userId is provided
    if (!userId) {
      return res.json({ success: false, message: "User ID is missing" });
    }

    // Find the user
    let userData = await userModel.findById(userId);

    // Check if user exists
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    // Send the user's cart data
    res.json({ success: true, cartData: userData.cartData || {} });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addToCart, removeFromCart, getCart };
*/
