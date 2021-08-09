import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string | null;
  error: string | null;
};

export default (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  if (req.method === "POST") {
    res.status(200).json({ message: "Email sent", error: null });
  } else {
    res.status(404);
  }
};
