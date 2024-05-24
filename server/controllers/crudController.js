const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/users");
const axios=require("axios")
// get all users
app.get("/get-users", async (req, res) => {
    try {
      const users = await UserModel.find({});
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  // Get SIngle user
  app.get("/getUser/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const user = await UserModel.findById(id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  
  // Create User
  app.post("/createUser", async (req, res) => {
    try {
      const user = await UserModel.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  
  // Update Users
  app.put("/updateUser/:id", async (req, res) => {
    const id = req.params.id;
    const { name, email, age } = req.body;
    try {
      const user = await UserModel.findByIdAndUpdate(
        id,
        { name, email, age },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  // Delete User
  app.delete("/deleteUser/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const user = await UserModel.findByIdAndDelete(id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json({ message: "User deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  