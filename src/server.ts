import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";

const app = express();

const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.post("/create-appointments", async (req, res) => {
  const { name, inital_date, final_Date, room } = req.body;

  const appointments = await prisma.appointments.create({
    data: {
      name,
      inital_date,
      final_Date,
      room,
    },
  });

  res.json(appointments);
});

app.listen(3333, () => console.log("server listening on"));
