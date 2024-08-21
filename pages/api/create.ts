import { supabase } from "@/lib/supabase";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, score = 0, name = "" } = req.body;
  console.log("HERE")
  console.log(id, score, name)
  try {
    const data = await supabase.from("games").insert({ score, name }).select();
    res.status(200).send({ data, message: "success" });
  } catch (error) {
    console.log({error})
    res.status(400).send({ data: {}, message: "error" });
  }
}
