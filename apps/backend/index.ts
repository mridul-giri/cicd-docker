import express from "express";
import { prisma } from "@repo/db";

const app = express();
app.use(express.json());

app.post("/api/user", async (req, res) => {
  try {
    const { name, password } = req.body;
    if (!name || !password) {
      res.status(400).json({ error: "Username and password are required" });
      return;
    }
    const user = await prisma.user.create({
      data: {
        name,
        password,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(5000, () => console.log("server is running on port 5000"));
