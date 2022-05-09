import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import cors from "cors";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());

app.post("/user", async (req: Request, res: Response) => {
	const result = await prisma.user.create({
		data: {
			...req.body,
		},
	});

	res.json(result);
});

app.listen(3001, () => console.log("Listening on port 3001"));
