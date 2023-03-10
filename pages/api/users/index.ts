import { NextApiRequest, NextApiResponse } from "next";

import { userData } from "../../../data";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!Array.isArray(userData)) throw new Error("Cannot find user data");
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: (err as Error).message });
  }
}
