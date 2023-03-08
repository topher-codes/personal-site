import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body;
  const user = await db.user.findFirst({
    where: {
      email,
      password,
    },
  });
  if (user) {
    res.status(200).json({ user });
  } else {
    res.status(404).json({ message: "User not found" });
  }
}
