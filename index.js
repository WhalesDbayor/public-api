// import express from "express";

const express = require("express");

const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS handling
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    email: "wabalonline01@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/WhalesDbayor/public-api",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
