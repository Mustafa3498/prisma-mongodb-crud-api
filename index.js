const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// CREATE USER
app.post("/users", async (req, res) => {
  const user = await prisma.user.create({
    data: req.body,
  });

  res.json(user);
});

/////////////////// post is not working ////////////////

// GET USERS
app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.listen(3000, () => {
  console.log("Server running on 3000");
});